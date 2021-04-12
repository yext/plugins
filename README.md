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

[Deno]: https://deno.land
