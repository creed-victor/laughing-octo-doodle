import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Confirmation,
  Revocation,
  Submission,
  Execution,
  ExecutionFailure,
  Deposit,
  OwnerAddition,
  OwnerRemoval,
  RequirementChange
} from "../generated/Multisig/Multisig"

export function createConfirmationEvent(
  sender: Address,
  transactionId: BigInt
): Confirmation {
  let confirmationEvent = changetype<Confirmation>(newMockEvent())

  confirmationEvent.parameters = new Array()

  confirmationEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  confirmationEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return confirmationEvent
}

export function createRevocationEvent(
  sender: Address,
  transactionId: BigInt
): Revocation {
  let revocationEvent = changetype<Revocation>(newMockEvent())

  revocationEvent.parameters = new Array()

  revocationEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  revocationEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return revocationEvent
}

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

export function createExecutionEvent(transactionId: BigInt): Execution {
  let executionEvent = changetype<Execution>(newMockEvent())

  executionEvent.parameters = new Array()

  executionEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return executionEvent
}

export function createExecutionFailureEvent(
  transactionId: BigInt
): ExecutionFailure {
  let executionFailureEvent = changetype<ExecutionFailure>(newMockEvent())

  executionFailureEvent.parameters = new Array()

  executionFailureEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return executionFailureEvent
}

export function createDepositEvent(sender: Address, value: BigInt): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return depositEvent
}

export function createOwnerAdditionEvent(owner: Address): OwnerAddition {
  let ownerAdditionEvent = changetype<OwnerAddition>(newMockEvent())

  ownerAdditionEvent.parameters = new Array()

  ownerAdditionEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return ownerAdditionEvent
}

export function createOwnerRemovalEvent(owner: Address): OwnerRemoval {
  let ownerRemovalEvent = changetype<OwnerRemoval>(newMockEvent())

  ownerRemovalEvent.parameters = new Array()

  ownerRemovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return ownerRemovalEvent
}

export function createRequirementChangeEvent(
  required: BigInt
): RequirementChange {
  let requirementChangeEvent = changetype<RequirementChange>(newMockEvent())

  requirementChangeEvent.parameters = new Array()

  requirementChangeEvent.parameters.push(
    new ethereum.EventParam(
      "required",
      ethereum.Value.fromUnsignedBigInt(required)
    )
  )

  return requirementChangeEvent
}