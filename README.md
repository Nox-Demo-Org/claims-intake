# claims-intake

First notice of loss for Tidewell Mutual. Takes a new claim from customer-portal or the contact centre, checks the policy is live, shows the excess, and hands the claim to claims-management.

Owned by **Claims / Intake squad**. On-call: `#tw-claims`.

| Contract | Kind | Direction |
| --- | --- | --- |
| `POST /v1/claims` | REST | provides (customer-portal, contact centre) |
| `claims.claim.reported` | Event | publishes (claims-management, fraud-scoring) |
| `GET /v1/policies/{id}` | REST | calls policy-admin |
| `GET /v1/customers/{id}` | REST | calls customer-identity |

`claims.claim.reported` carries `excess_amount`: the excess shown to the customer. claims-management stores it as the claim's excess.
