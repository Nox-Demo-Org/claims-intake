import { PolicyClient } from "../clients/policy.client";
import { publish } from "../events/publisher";
import { validate } from "./claim.validator";
import { ClaimReported, NewClaim } from "./claim.dto";

export class ClaimsService {
  constructor(private readonly policies: PolicyClient) {}

  async report(input: NewClaim) {
    validate(input);
    const policy = await this.policies.get(input.policy_id); // GET /v1/policies/{id}
    if (policy.status !== "active") throw new Error("policy is not active");
    const cover = policy.cover.find((c) => c.peril === input.peril);
    if (!cover) throw new Error("peril not covered");

    const event: ClaimReported = {
      claim_id: crypto.randomUUID(),
      ...input,
      reported_at: new Date().toISOString(),
    };
    await publish("claims.claim.reported", event);
    return { claim_id: event.claim_id, status: "submitted" };
  }
}
