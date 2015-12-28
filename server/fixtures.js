if (Lounges.find().count() === 0) {
  Lounges.insert({
    date: 'Saturday, Oct 31st',
    time: '1-3PM',
    location: 'Coupa Cae',
    address: '538 Ramona St, Palo Alto, CA 94301',
    participants: 'George, Ron, Howard',
    num_participants: 3
  });
  
  Lounges.insert({
    date: 'Sunday, Nov 1st',
    time: '1-3PM',
    location: 'Coupa Cae',
    address: '538 Ramona St, Palo Alto, CA 94301',
    participants: 'George, Ron, Howard',
    num_participants: 3
  });
  
  Lounges.insert({
    date: 'Monday, Nov 2nd',
    time: '1-3PM',
    location: 'Coupa Cae',
    address: '538 Ramona St, Palo Alto, CA 94301',
    participants: 'George, Ron, Howard',
    num_participants: 3
  });
}


if (Chapters.find().count() === 0) {
  Chapters.insert({
    name: 'UC_Berkeley',
    spaced_name: 'UC Berkeley',
    short_name: 'Berkeley'
  });
  
  Chapters.insert({
    name: 'UC_Santa_Barbara',
    spaced_name: 'UC Santa Barbara',
    short_name: 'UCSB'
  });
  
  Chapters.insert({
    name: 'UC_Los_Angeles',
    spaced_name: 'UC Los Angeles',
    short_name: 'UCLA'
  });
  
  Chapters.insert({
    name: 'University_of_Colorado_at_Boulder',
    spaced_name: 'University of Colorado at Boulder',
    short_name: 'Colorado'
  });
  
  Chapters.insert({
    name: 'MIT_Harvard_University',
    spaced_name: 'MIT/Harvard',
    short_name: 'MIT/Harvard',
  });
  
  Chapters.insert({
    name: 'Columbia_University',
    spaced_name: 'Columbia University',
    short_name: 'Columbia'
  });
  
  Chapters.insert({
    name: 'Independent',
    spaced_name: 'Independent',
    short_name: 'Indep.'
  });
}



















