import { defineConfig } from 'vite';

const domain = 'https://clasesramosdenegocios.cl/';
export default defineConfig(({ mode }) => {
  const launch = mode === 'launch';
  if (launch && process.env.CONFIRMED_SITE_URL !== domain) {
    throw new Error(`Production requires confirmed ownership/routing and CONFIRMED_SITE_URL=${domain}`);
  }
  return {
    plugins: [{
      name: 'review-or-launch-metadata',
      transformIndexHtml(html) {
        if (!launch) return html;
        return html.replace('<meta name="robots" content="noindex, nofollow">', '<meta name="robots" content="index, follow">')
          .replace('</head>', `  <link rel="canonical" href="${domain}">\n  <meta property="og:url" content="${domain}">\n</head>`);
      },
      generateBundle() {
        this.emitFile({ type: 'asset', fileName: 'robots.txt', source: launch
          ? `User-agent: *\nAllow: /\nSitemap: ${domain}sitemap.xml\n`
          : 'User-agent: *\nAllow: /\n# Review page uses a noindex robots meta tag. Crawling permits it to be read.\n' });
        if (launch) this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${domain}</loc></url></urlset>\n` });
      },
    }],
  };
});
