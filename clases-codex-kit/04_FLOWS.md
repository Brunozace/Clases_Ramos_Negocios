# Flowcharts

Two diagrams are sufficient: one shows the visitor's choices and WhatsApp handoff; the other shows development, revision and launch gates. No database/entity diagram is needed for a static page without stored application data.

View the SVG copies directly in a browser. The Mermaid sources below remain editable and describe the same flows.

## Visitor journey

```mermaid
flowchart TD
    A["Open landing page"] --> B{"Ready to inquire?"}
    B -->|Yes| G["General WhatsApp inquiry"]
    B -->|Browse first| C{"Study level"}
    C -->|University or MBA| D["Browse grouped subjects"]
    C -->|School| E["Browse school subjects"]
    D --> F["Review formats and Concepción location"]
    E --> F
    F --> H["General or subject inquiry"]
    G --> I{"Use WhatsApp?"}
    H --> I
    I -->|Yes| J["Open draft for correct recipient"]
    I -->|No| K["Copy visible phone number"]
    J --> L["Visitor reviews and chooses to send"]
    L --> M["Instructor discusses price and availability"]
```

WhatsApp runs outside the landing page. A click is not a sent message or a reservation. Visitors can also choose not to contact the instructor; no data is submitted by simply reading the page. The copy-number path allows later manual contact.

## Delivery workflow

```mermaid
flowchart TD
    A["Confirm facts and contact override"] --> B["Prepare first layout"]
    B --> C["Build static page"]
    C --> D{"QA passes?"}
    D -->|No| E["Fix defects"]
    E --> C
    D -->|Yes| F["Share review preview"]
    F --> G{"Client approves?"}
    G -->|Changes| H["Consolidate scoped feedback"]
    H --> C
    G -->|Yes| I{"Domain and launch ready?"}
    I -->|No| J["Resolve access or domain prerequisites"]
    J --> I
    I -->|Yes| K["Bruno authorizes official launch"]
    K --> L["Deploy production and verify"]
    L --> M["Handoff source and instructions"]
```

Client feedback outside the agreed scope requires re-estimation. Domain/access readiness can be worked on while the first version is being built. This workflow is a plan, not evidence that any approval or deployment has already occurred.
