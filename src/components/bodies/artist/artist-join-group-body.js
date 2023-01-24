import React from 'react';
import GroupJoinSkeleton from './skeleton/group-join-skeleton';
import useGetGroups from '../../../hooks/artist/use-get-groups';

function ArtistGroupJoinBody() {
    const cardData = useGetGroups();
    
    return (
      <>
        <div>
            <h1>Join Groups</h1>
        </div>

            
        <div className="artist-cards-body">    
            <div className="container">
                {cardData.map((data) => (
                <GroupJoinSkeleton key={data.id} name={data.name} description={data.description} type={data.type}  />
                ))}
            </div>
        </div>

      </>
    );
  }
  
  export default ArtistGroupJoinBody;