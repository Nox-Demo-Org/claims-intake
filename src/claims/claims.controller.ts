import { Body, Controller, Post } from "@nestjs/common";
import { ClaimsService } from "./claims.service";
import { NewClaim } from "./claim.dto";

@Controller("v1/claims")
export class ClaimsController {
  constructor(private readonly claims: ClaimsService) {}

  /** POST /v1/claims: returns { claim_id, status: "submitted", excess_amount } */
  @Post()
  create(@Body() body: NewClaim) {
    return this.claims.report(body);
  }
}
