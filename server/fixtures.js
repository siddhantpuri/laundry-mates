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

if (Requests.find().count() === 0) {
  Requests.insert({
    type: 'host',
    chapter: 'UC_Berkeley',
    first_name: 'Shaan',
    last_name: 'Appel',
    email: 'shaan.appel@me.com',
    picture: 'somefile',
    approved: false
  });
  
  Requests.insert({
    type: 'admin',
    chapter: 'UC_Berkeley',
    first_name: 'Shaan',
    last_name: 'Appel',
    email: 'shaan.appel@me.com',
    picture: 'somefile',
    approved: false
  });
  
  Requests.insert({
    type: 'host',
    chapter: 'UC_Berkeley',
    first_name: 'Other',
    last_name: 'Appel',
    email: 'shaan.appel@me.com',
    picture: 'somefile',
    approved: true
  });
}

