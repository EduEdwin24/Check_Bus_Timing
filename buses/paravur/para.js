const busTimes = [
    { time: '9:45am', route: 'Shankaranarayanan' },
   
    { time: '10:10am', route: 'Lakshmi' },
    { time: '10:20am', route: 'Unnikuttan' },
    { time: '11:55am', route: '........' },
    { time: '12:20pm', route: 'Unnikutttan' },
    { time: '3:00pm', route: 'Lakshmi' },
    { time: '3:05pm', route: 'Unnikuttan' },
    { time: '5:15pm', route: 'Unnikuttan' },
    { time: '5:50pm', route: 'Shankaranarayanan' },
    { time: '7:02pm', route: 'KSRTC' },
  ];
  
  const busTimesContainer = document.getElementById('bus-times');
  
  const timeHeading = document.createElement('h2');
  timeHeading.textContent = 'Bus Time';
  busTimesContainer.appendChild(timeHeading);
  
  const routeHeading = document.createElement('h2');
  routeHeading.textContent = 'Bus Names - To Paravur';
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