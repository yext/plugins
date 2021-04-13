/**
 * IngestURLEvent is fired when a crawled URL is ingested into the Knowledge Graph.
 *
 * The event contains information about the crawled page, and a listener may use
 * `respondWith` to produce records to their Knowledge Graph.
 */
import { EventInput } from "../types";
import { EventOutput } from "./../types";

interface ValidationEventInput extends EventInput {
  entityId: string;
  entityType: string;
  entityData: object;
}
interface ValidationEventOuput extends EventOutput {
  didValidate: boolean; //if false the entity will fail to save and display the validation message
  validationMessage?: string; //displayed to the user if validation fails
}

export type eventInterface = (
  input: ValidationEventInput
) => ValidationEventOuput;

export const eventId = "entity_validation";
