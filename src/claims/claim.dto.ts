export interface NewClaim {
  policy_id: string;
  customer_id: string;
  peril: "escape_of_water" | "storm" | "theft" | "fire" | "accidental_damage" | "collision";
  incident_date: string;
  description: string;
  channel: "web" | "phone";
}

/** Payload of claims.claim.reported. */
export interface ClaimReported {
  claim_id: string;
  policy_id: string;
  customer_id: string;
  peril: string;
  incident_date: string;
  description: string;
  reported_at: string;
}
