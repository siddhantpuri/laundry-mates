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
    request_userId: 'userId',
    request_chapter: 'UC_Berkeley',
    request_first_name: 'Shaan',
    request_last_name: 'Appel',
    request_email: 'shaan.appel@me.com',
    request_picture: 'somefile',
    request_approved: 'false'
  });
  
  Requests.insert({
    type: 'admin',
    request_userId: 'userId',
    request_chapter: 'UC_Berkeley',
    request_first_name: 'Shaan',
    request_last_name: 'Appel',
    request_email: 'shaan.appel@me.com',
    request_picture: 'somefile',
    request_approved: 'false'
  });
  
  Requests.insert({
    type: 'host',
    request_userId: 'userId',
    request_chapter: 'UC_Berkeley',
    request_first_name: 'Other',
    request_last_name: 'Appel',
    request_email: 'shaan.appel@me.com',
    request_picture: 'somefile',
    request_approved: 'true'
  });
}

