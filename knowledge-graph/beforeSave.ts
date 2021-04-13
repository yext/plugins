/**
 * IngestURLEvent is fired when a crawled URL is ingested into the Knowledge Graph.
 *
 * The event contains information about the crawled page, and a listener may use
 * `respondWith` to produce records to their Knowledge Graph.
 */
import { EventInput } from "../types";
import { EventOutput } from "./../types";

interface BeforeSaveEventInput extends EventInput {
  entityId: string;
  entityType: string;
  entityData: object;
}
interface BeforeSaveEventOuput extends EventOutput {
  updatedEntityData: object;
  skipValidation?: boolean;
}

export type eventInterface = (
  input: BeforeSaveEventInput
) => BeforeSaveEventOuput;

export const eventId = "entity_before_save";
