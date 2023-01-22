import React from 'react';
import GroupCard from './skeletons/groupsAddSkeleton';
import useGetGroupsArtist from '../../hooks/groupJoining/useGetGroupsArtist';


function CardContainerGroups() {
    const cardData = useGetGroupsArtist(1);
    


  
    return (
      <>
      <div>
        <h1>Edit Groups</h1>
      </div>


      <div className="container">
        {cardData.map((data) => (
          <GroupCard key={data.name} {...data} />
        ))}
      </div>
      

      </>
    );
  }
  
export default CardContainerGroups;
