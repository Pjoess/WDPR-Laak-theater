import React from 'react';
import GroupEditSkeleton from './skeleton/group-edit-skeleton';
import useGetGroupsArtist from '../../../hooks/artist/use-get-groups-artist';

export default function ArtistEditGroupBody(){

    const cardData = useGetGroupsArtist(1);
    
    return(
    <>
    <div>
    <h1>Edit Groups</h1>
    </div>

    <div className='card'>
    <div className="container">
    {cardData.map((data) => (
        <GroupEditSkeleton 
        key={data.id}
        id={data.id}
        name={data.name} 
        />
    ))}
    </div>
    </div>
    

    </>
    );
  
}