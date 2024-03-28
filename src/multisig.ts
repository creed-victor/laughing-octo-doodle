import {
  Submission as SubmissionEvent,
  Multisig
} from "../generated/Multisig/Multisig"
import {
  Submission,
} from "../generated/schema"

export function handleSubmission(event: SubmissionEvent): void {
  let entity = new Submission(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.transactionId = event.params.transactionId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  const contract = Multisig.bind(event.address)

  // this is the part which is causing the error:
  contract.try_getOwners()

  // this too:
  contract.getOwners()

  // it actually causes error for any function call on any contract, functions above are just examples
}
