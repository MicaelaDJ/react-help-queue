import React from 'react';
import Ticket from './Ticket';
import blueChair from '../assets/images/bluechair.jpg'; 
import table from '../assets/images/table.jpg'; 
import chaise from '../assets/images/chaise.jpeg'; 

var masterTicketList = [
  {
    images: <img src={blueChair}/>,
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Help.'
  },
  {
    images: <img src={table}/>,
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    images: <img src={chaise}/>,
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];

function TicketList(){

  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket 
          images={ticket.images}
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index} />
      )}
    </div>
  );
}

export default TicketList;
