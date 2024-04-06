const busTimes = [
  { time: '7:12am', route: '........' },
  { time: '7:15am', route: '.............' },
  { time: '7:45am', route: '.............' },
  { time: '8:10am', route: 'KSRTC' },
  { time: '8:30am', route: 'KSRTC' },
  { time: '8:40am', route: 'KSRTC' },
  { time: '9:00am',  route: 'St.savio' },
    { time: '9:30am', route: 'Sabeena' },
    { time: '9:36am', route: 'KSRTC' },
    { time: '9:54am', route: 'INFANT JESUS' },
    { time: '10:18am', route: 'Rohini Kannan' },
    { time: '10:31am', route: 'SN Transport' },
    { time: '10:45am', route: 'sowparnika' },
    { time: '10:50am', route: 'Sree bhadra' },
    { time: '11:20am', route: 'KSRTC' },
    { time: '11:22am', route: 'Sabeena' },
    { time: '12:38pm', route: 'Sree bhadra' },
    { time: '1:05pm', route: '........' },
    { time: '1:15pm', route: 'Cheenikkas' },
    { time: '1:51pm', route: 'Sabeena' },
    { time: '2:00pm', route: 'Rohini kannan' },
    { time: '2:37pm', route: 'SN Transport' },
    { time: '2:49pm', route: 'KSRTC' },
    { time: '3:58pm', route: '........' },
    { time: '4:00pm', route: 'Sowparnika' },
    { time: '4:07pm', route: 'Infant Jesus' },
    { time: '4:15pm', route: 'Sree bhadra' },
    { time: '4:20pm', route: 'St savio' },
    { time: '4:29pm', route: 'KSRTC' },
    { time: '5:00pm', route: 'Sabeena' },
    { time: '5:08pm', route: 'Cheenikkas' },
    { time: '6:00pm', route: 'Rohini kannan' },
    { time: '6:20pm', route: 'SN Transport' },
    { time: '7:00pm', route: 'Sabeena' },
    { time: '7:27pm', route: 'Sowparnika' }
    
  ];
  
  const busTimesContainer = document.getElementById('bus-times');
  
  const timeHeading = document.createElement('h2');
  timeHeading.textContent = 'Bus Time';
  busTimesContainer.appendChild(timeHeading);
  
  const routeHeading = document.createElement('h2');
  routeHeading.textContent = 'Bus Names - To Ernamkulam';
  busTimesContainer.appendChild(routeHeading);
  
  const timeRow = document.createElement('div');
  timeRow.classList.add('time-row');
  busTimesContainer.appendChild(timeRow);
  
  const routeRow = document.createElement('div');
  routeRow.classList.add('route-row');
  busTimesContainer.appendChild(routeRow);
  
  busTimes.forEach(time => {
    const timeElement = document.createElement('div');
    timeElement.classList.add('time');
    timeElement.textContent = time.time;
    timeRow.appendChild(timeElement);
  
    const routeElement = document.createElement('div');
    routeElement.classList.add('route');
    routeElement.textContent = time.route;
    routeRow.appendChild(routeElement);
  });



  // nbnb

  