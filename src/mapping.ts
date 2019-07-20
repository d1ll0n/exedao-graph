import {
  ApplicationAdded as ApplicationAddedEvent,
  ApplicationCanceled as ApplicationCanceledEvent,
  ExtensionAdded as ExtensionAddedEvent,
  ProposalSubmission as ProposalSubmissionEvent,
  ProposalVote as ProposalVoteEvent,
  ProposalApproval as ProposalApprovalEvent,
  ProposalExpiration as ProposalExpirationEvent,
  SharesBurned as SharesBurnedEvent,
  SharesMinted as SharesMintedEvent,
  TokenAdded as TokenAddedEvent,
  TokenRemoved as TokenRemovedEvent,
  TokenTransferred as TokenTransferredEvent,
  TokenReceived as TokenReceivedEvent
} from "../generated/Contract/Contract"
import {
  ApplicationAdded,
  ApplicationCanceled,
  ExtensionAdded,
  ProposalSubmission,
  ProposalVote,
  ProposalApproval,
  ProposalExpiration,
  SharesBurned,
  SharesMinted,
  TokenAdded,
  TokenRemoved,
  TokenTransferred,
  TokenReceived
} from "../generated/schema"

export function handleApplicationAdded(event: ApplicationAddedEvent): void {
  let entity = new ApplicationAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.applicant = event.params.applicant
  entity.shares = event.params.shares
  entity.save()
}

export function handleApplicationCanceled(
  event: ApplicationCanceledEvent
): void {
  let entity = new ApplicationCanceled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.applicant = event.params.applicant
  entity.save()
}

export function handleExtensionAdded(event: ExtensionAddedEvent): void {
  let entity = new ExtensionAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.extensionIndex = event.params.extensionIndex
  entity.metaHash = event.params.metaHash
  entity.save()
}

export function handleProposalSubmission(event: ProposalSubmissionEvent): void {
  let entity = new ProposalSubmission(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.submitter = event.params.submitter
  entity.proposalHash = event.params.proposalHash
  entity.metaHash = event.params.metaHash
  entity.votesCast = event.params.votesCast
  entity.save()
}

export function handleProposalVote(event: ProposalVoteEvent): void {
  let entity = new ProposalVote(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.voter = event.params.voter
  entity.proposalHash = event.params.proposalHash
  entity.votesCast = event.params.votesCast
  entity.save()
}

export function handleProposalApproval(event: ProposalApprovalEvent): void {
  let entity = new ProposalApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.voter = event.params.voter
  entity.proposalHash = event.params.proposalHash
  entity.save()
}

export function handleProposalExpiration(event: ProposalExpirationEvent): void {
  let entity = new ProposalExpiration(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.proposalHash = event.params.proposalHash
  entity.save()
}

export function handleSharesBurned(event: SharesBurnedEvent): void {
  let entity = new SharesBurned(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.daoist = event.params.daoist
  entity.shares = event.params.shares
  entity.save()
}

export function handleSharesMinted(event: SharesMintedEvent): void {
  let entity = new SharesMinted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.daoist = event.params.daoist
  entity.shares = event.params.shares
  entity.save()
}

export function handleTokenAdded(event: TokenAddedEvent): void {
  let entity = new TokenAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenAddress = event.params.tokenAddress
  entity.save()
}

export function handleTokenRemoved(event: TokenRemovedEvent): void {
  let entity = new TokenRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenAddress = event.params.tokenAddress
  entity.save()
}

export function handleTokenTransferred(event: TokenTransferredEvent): void {
  let entity = new TokenTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenAddress = event.params.tokenAddress
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.save()
}

export function handleTokenReceived(event: TokenReceivedEvent): void {
  let entity = new TokenReceived(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenAddress = event.params.tokenAddress
  entity.sender = event.params.sender
  entity.amount = event.params.amount
  entity.save()
}
