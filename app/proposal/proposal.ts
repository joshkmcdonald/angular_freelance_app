export class Proposal {
  constructor(
     public id?: number,
     public customer?: string,
     public portfolio_url: string = 'http://',
     public tools?: string,
     public estimated_hours?: string,
     public hourly_rate?: string,
     public weeks_to_complete?: number,
     public client_email?: string,
  ) {}
}

// Sample proposal
// 15, 'ABC Company', 'http://google.com', 'Ruby on Rails', 10, 700, 1, 'jo@jojo.com'