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
  TokenReceived as TokenReceivedEvent,
  AddExtensionCall,
  ExeDAO
} from "../generated/ExeDAO/ExeDAO"
import {
  Daoist,
  Application,
  Proposal,
  Extension,
  Token
} from "../generated/schema"

// APPLICATION FUNCTIONS
export function handleApplicationAdded(event: ApplicationAddedEvent): void {
  let exedao = ExeDAO.bind(event.address)
  let entity = new Application('application -- ' + event.params.applicant)
  let app = exedao.getApplication(event.params.applicant)
  entity.applicant = app.applicant
  entity.shares = app.shares
  entity.metaHash = app.metaHash;
  entity.txHash = event.transaction.hash;
  entity.tokenTributes = app.tokenTributes;
  entity.tokenTributeValues = app.tokenTributeValues;
  entity.save()
}

export function handleApplicationCanceled(
  event: ApplicationCanceledEvent
): void {
  let entity = Application.load('daoist -- ' + event.params.applicant);
  entity.canceledAt = event.transaction.hash;
  entity.save()
}

// DAOIST FUNCTIONS
export function handleSharesMinted(event: SharesMintedEvent): void {
  let entity = Daoist.load('address -- ' + event.params.daoist);
  if (entity) entity.shares = entity.shares.plus(event.params.shares);
  else {
    entity = new Daoist('daoist -- ' + event.params.daoist);
    entity.address = event.params.daoist;
    entity.shares = event.params.shares;
    let app = Application.load('application -- ' + event.params.daoist);
    if (app) {
      app.canceledAt = event.transaction.hash;
      app.save()
    }
  }
  entity.save()
}

export function handleSharesBurned(event: SharesBurnedEvent): void {
  let entity = Daoist.load('address -- ' + event.params.daoist);
  entity.address = event.params.daoist
  entity.shares = entity.shares.minus(event.params.shares);
  entity.save()
}

export function handleExtensionAdded(event: ExtensionAddedEvent): void {
  let exedao = ExeDAO.bind(event.address)
  let ext = exedao.getExtension(event.params.extensionIndex);
  let entity = new Extension('extension -- ' + event.params.extensionIndex);
  entity.functionSignatures = ext.functionSignatures;
  entity.extensionAddress = ext.extensionAddress;
  entity.metaHash = ext.metaHash;
  entity.extensionIndex = event.params.extensionIndex;
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
