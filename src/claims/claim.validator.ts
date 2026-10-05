import { NewClaim } from "./claim.dto";

export function validate(c: NewClaim) {
  if (!c.policy_id) throw new Error("policy_id is required");
  // TODO: incident_date in the future is accepted
  // TODO: no check that incident_date is inside the policy period
  // TODO: description has no length limit (we have seen 40k-character pastes)
  // FIXME: phone channel skips peril validation entirely
  // TODO: duplicate claims for the same incident are not detected
  if (c.channel === "phone") return;
  if (!c.peril) throw new Error("peril is required");
}
