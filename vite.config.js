import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const domain = 'https://clasesramosdenegocios.cl/';
export default defineConfig(({ mode }) => {
  const launch = mode === 'launch';
  if (launch && process.env.CONFIRMED_SITE_URL !== domain) {
    throw new Error(`Production requires confirmed ownership/routing and CONFIRMED_SITE_URL=${domain}`);
  }
  return {
    build: { rollupOptions: { input: {
      home: fileURLToPath(new URL('./index.html', import.meta.url)),
      terms: fileURLToPath(new URL('./terminos-y-condiciones.html', import.meta.url)),
      privacy: fileURLToPath(new URL('./politica-de-privacidad.html', import.meta.url)),
    } } },
    plugins: [{
      name: 'review-or-launch-metadata',
      transformIndexHtml(html, context) {
        if (!launch) return html;
        const canonical = new URL(context.path === '/index.html' ? '/' : context.path, domain).href;
        return html.replace('<meta name="robots" content="noindex, nofollow">', '<meta name="robots" content="index, follow">')
          .replace('</head>', `  <link rel="canonical" href="${canonical}">\n  <meta property="og:url" content="${canonical}">\n</head>`);
      },
      generateBundle() {
        this.emitFile({ type: 'asset', fileName: 'robots.txt', source: launch
          ? `User-agent: *\nAllow: /\nSitemap: ${domain}sitemap.xml\n`
          : 'User-agent: *\nAllow: /\n# Review page uses a noindex robots meta tag. Crawling permits it to be read.\n' });
        if (launch) this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['', 'terminos-y-condiciones.html', 'politica-de-privacidad.html'].map(path => `<url><loc>${domain}${path}</loc></url>`).join('')}</urlset>\n` });
      },
    }],
  };
});
