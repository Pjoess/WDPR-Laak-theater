import React from 'react';
import GroupCard from './skeletons/groupsAddSkeleton';
import useGetGroups from './useGetGroups';


function CardContainerGroups() {
    const cardData = useGetGroups();
    


  
    return (
      <>
      <div>
        <h1>Groups</h1>
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
