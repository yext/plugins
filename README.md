# Yext Plugins - Event definitions

**Yext Plugins** are TypeScript programs that customers may upload to
Yext and run directly on our servers to respond to events that occur,
enabling use cases such as the following:

- Ingest a crawled URL, creating a structured record using custom logic.

- Updates to the Knowledge Graph trigger updates to derived records.

Yext Plugins are developed using [Deno], which enables developers to
write in TypeScript, import other libraries, and test their code using
a single, vertically-integrated development experience.

This repository contains the event definitions that activate Yext
Plugins. Each event contains the relevant information about what
happened, and it provides a method for the plugin to respond to it,
typically called `respondWith`.

If you're just getting started, look at the example ingestion plugin
under `examples/`.

[deno]: https://deno.land

## Events

| Event Group     | Event Name            | Details                                                                                                 |
| --------------- | --------------------- | ------------------------------------------------------------------------------------------------------- |
| Data Connectors | `extract_from_html`   |
| Knowledge Graph | `entity_before_save`  | Transform an entity before it saves.                                                                    |
| Knowledge Graph | `entity_verification` | This is caled to validate a entity should. If you want to add custom validation logic then add it here. |
| Knowledge Graph | `entity_after_save`   | Perform operation after an entity saves succesfully                                                     |
| Knowledge Graph | `entity_after_delete` | Perform operation after and entity                                                                      |
| Reviews         | `on_review_creation`  | Called right after a new review is created                                                              |
