/**
 * IngestURLEvent is fired when a crawled URL is ingested into the Knowledge Graph.
 *
 * The event contains information about the crawled page, and a listener may use
 * `respondWith` to produce records to their Knowledge Graph.
 */
export class IngestURLEvent extends Event {
    // Identifier for this event type.
    // TODO: Snake case is not idiomatic.
    static type = "ingest_url";

    // TODO: Add crawler name.
    // TODO: Should we use EventTarget as part of the interface?
    readonly url: string;
    readonly html: string;

    constructor({url, html}: {url: string, html: string}) {
        super(IngestURLEvent.type);
        this.url = url;
        this.html = html;
    }

    /**
     * Emit the given record in response to this Ingest URL event.
     * This method should be called at most once.
     */
    respondWith(records: Array<object>) {
        // TODO: Does Deno have any typings we should be importing?
        (Deno as any).core.jsonOpSync("respondWith", JSON.stringify(records));
    }
}

// Inform TypeScript that the addEventListener handler will receieve an
// IngestURLEvent instead of a vanilla Event.
//
// NOTE: This doesn't actually work.
declare global {
  interface WindowEventMap {
    ingest_url: IngestURLEvent
  }
}
