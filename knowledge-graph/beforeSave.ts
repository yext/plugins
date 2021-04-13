/**
 * IngestURLEvent is fired when a crawled URL is ingested into the Knowledge Graph.
 *
 * The event contains information about the crawled page, and a listener may use
 * `respondWith` to produce records to their Knowledge Graph.
 */
export class EntityBeforeSaveEvent extends Event {
  // Identifier for this event type.
  // TODO: Snake case is not idiomatic.
  static type = "entity_before_save";

  // TODO: Add crawler name.
  // TODO: Should we use EventTarget as part of the interface?
  readonly entityId: string;
  readonly entityType: string;
  readonly data: object;

  constructor({
    entityId,
    entityType,
    data,
  }: {
    entityId: string;
    entityType: string;
    data: object;
  }) {
    super(EntityBeforeSaveEvent.type);
    this.entityId = entityId;
    this.entityType = entityType;
    this.data = data;
  }

  /**
   * Emit the given record in response to this Ingest URL event.
   * This method should be called at most once.
   */
  respondWith(newData: object) {
    // TODO: Does Deno have any typings we should be importing?
    (Deno as any).core.jsonOpSync("respondWith", JSON.stringify(newData));
  }
}

// Inform TypeScript that the addEventListener handler will receieve an
// IngestURLEvent instead of a vanilla Event.
//
// NOTE: This doesn't actually work.
declare global {
  interface WindowEventMap {
    entity_before_save: EntityBeforeSaveEvent;
  }
}
