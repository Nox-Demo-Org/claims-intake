import { PubSub } from "@google-cloud/pubsub";
const pubsub = new PubSub();
export async function publish(topic: "claims.claim.reported", payload: unknown) {
  await pubsub.topic(topic).publishMessage({ json: payload });
}
