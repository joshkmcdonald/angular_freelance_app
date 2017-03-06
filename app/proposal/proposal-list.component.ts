import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://google.com', 'Ruby on Rails', '10', '700', 1, 'jo@jojo.com')
  proposalTwo: Proposal = new Proposal(60, 'ABC X', 'http://google.com', 'Ruby on Rails', '10', '700', 1, 'jo@jojo.com')
  proposalThree: Proposal = new Proposal(90, 'ABC Y', 'http://google.com', 'Ruby on Rails', '10', '700', 1, 'jo@jojo.com')

  proposals: Proposal[] = [ 
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree 
  ]
}