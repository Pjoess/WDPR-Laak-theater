import React from 'react';
import useCards from '../employee/get-groups';
import Card from './card-skeleton';
import useAddArtistToGroup from '../employee/addArtist-toGroup'


function ArtistGroupPage() {
    const { cardData } = useCards();
    
  
    return (
      <>
      <div>
        <h1>Groups</h1>
      </div>


      <div className="container">
        {cardData.map((data) => (
          <Card key={data.name} {...data} />
        ))}
      </div>
      </>
    );
  }
  
  export default ArtistGroupPage;