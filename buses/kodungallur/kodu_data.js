const busTimes = [
  { time: '7:24am', route: 'KSRTC' },
  { time: '8:10am', route: '.............' },
  { time: '8:25am', route: '.............' },
  { time: '8:50am', route: 'KSRTC' },
    { time: '9:30am', route: 'Rohinikannan' },
    { time: '9:35am', route: 'SN Transport' },
    { time: '9:46am', route: 'Souparnika' },
    { time: '10:05am', route: 'Sabeena' },
    { time: '10:30am', route: 'Lakshmi' },
    { time: '10:37am', route: 'KSRTC' },
    { time: '10:37am', route: 'Samarat' },
    { time: '11:08am', route: 'Sree bhadra' },
    { time: '11:40am', route: 'Cheenikkas' },
    { time: '11:53am', route: 'Sabeena' },
    { time: '11:55am', route: 'KSRTC' },
    { time: '12pm', route: 'kalidasan' },
    { time: '12pm', route: ' KSRTC' },
    { time:'12:17pm', route: 'Infant jesus' },

    { time: '12:39pm',  route: 'Sree Bhadra' },
    { time: '12:45pm',  route: ' SN Transport' },
    { time: '01:03pm',  route: 'Lakshmi' },
    { time: '01:05pm',  route: 'Rohini kannan' },
    { time: '2:05pm',  route: 'KSRTC' },
    { time: '2:34pm',  route: 'Sowparnika' },
    { time: '2:46pm',  route: 'Sabeena' },
    { time: '3:05pm',   route: 'St.savio' },
    { time: '3:19pm',   route: 'Samrat' },
    { time: '3:19pm',  route: 'Infant jesus' },
    { time: '3:32pm',  route: 'KSRTC' },
    { time: '4:18pm',  route: 'Cheenikkas' },
    { time: '4:20pm',  route: 'kalidasan' },
    { time: '4:56pm',  route: ' SN Transport' },
    { time: '5:05pm',  route: 'Rohinikannan' },
    { time: '5:25pm',  route: 'KSRTC' },
    { time: '5:35pm',  route: 'Sabeena' },
    { time: '5:52pm',  route: 'KSRTC' },
    { time: '6:25pm',  route: 'Infant jesus' },
    { time: '6:30pm',  route: 'Lakshmi' },
    { time: '6:33pm',  route: 'Sowparnika' },
    { time: '6:39pm',  route: 'KSRTC' },
    { time: '6:48pm',  route: 'Sree bhadra' },
    { time: '7:02pm',  route: 'KSRTC' },
    { time: '7:05pm',  route: 'KSRTC' },
    { time: '7:10pm',  route: 'KSRTC' },
    
  ];
  
  const busTimesContainer = document.getElementById('bus-times');
  
  const timeHeading = document.createElement('h2');
  timeHeading.textContent = 'Bus Time';
  busTimesContainer.appendChild(timeHeading);
  
  const routeHeading = document.createElement('h2');
  routeHeading.textContent = 'Bus Names - To kodungallur';
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