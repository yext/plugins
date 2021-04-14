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

| Event Group     | Event Name                  | Details                                                                                                 |
| --------------- | --------------------------- | ------------------------------------------------------------------------------------------------------- |
| Data Connectors | `extract_from_html`         | Creating a custom extraction function that can be used in a connector                                   |
| Data Connectors | `transform_data`            | Creating a custom transform of data during the import stage                                             |
| Knowledge Graph | `on_entity_before_save`     | Transform an entity before it saves.                                                                    |
| Knowledge Graph | `on_entity_verification`    | This is caled to validate a entity should. If you want to add custom validation logic then add it here. |
| Knowledge Graph | `on_entity_after_save`      | Perform operation after an entity saves succesfully                                                     |
| Knowledge Graph | `on_entity_after_delete`    | Perform operation after and entity                                                                      |
| Stream          | `transform_document`        | Creating a custom transform of a document on a stream                                                   |
| Listings        | `on_listings_status_change` | Called right after a new review is created                                                              |
| Listings        | `on_duplicate_detected`     | Called right after a new review is created                                                              |
| Listings        | `on_qanda_created`          | Called right after a new review is created                                                              |
| Listings        | `on_review_creation`        | Called right after a new review is created                                                              |
| Reviews         | `on_send_invitation`        | Called when a new invitation is meant to be sent                                                        |
| Reviews         | `on_send_invitation`        | Called when a new invitation is meant to be sent                                                        |
| Answers         | `on_experience_creation`    | Called when an experience is created                                                                    |
| Answers         | `on_experience_update`      | Called when an experience is updated                                                                    |
| Answers         | `on_experience_deletion`    | Called when a an experience is deleted                                                                  |
