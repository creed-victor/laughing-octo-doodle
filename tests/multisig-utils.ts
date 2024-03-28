import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import {
  Submission
} from "../generated/Multisig/Multisig"

export function createSubmissionEvent(transactionId: BigInt): Submission {
  let submissionEvent = changetype<Submission>(newMockEvent())

  submissionEvent.parameters = new Array()

  submissionEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return submissionEvent
}
