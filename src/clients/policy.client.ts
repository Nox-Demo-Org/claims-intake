export interface PolicyView {
  id: string;
  status: string;
  cover: { peril: string; limit_pence: number; excess_pence: number }[];
}

/** policy-admin GET /v1/policies/{id}. */
export class PolicyClient {
  constructor(private readonly base = process.env.POLICY_ADMIN_URL ?? "http://policy-admin/v1") {}
  async get(id: string): Promise<PolicyView> {
    const res = await fetch(`${this.base}/policies/${id}`, { signal: AbortSignal.timeout(2000) });
    return res.json();
  }
}
