import React from 'react';
import GroupJoinSkeleton from './skeleton/group-join-skeleton';
import useGetGroups from '../../../hooks/artist/use-get-groups';
import './artist.css'

function ArtistGroupJoinBody({ state, setState}) {
    const cardData = useGetGroups();
    
    return (
      <>

        <div className='artist-header text-center'>
          <h1>Join Groups</h1>
        </div>
            
        
        <div className="card  group-join-card">
          <div className='container'>   
                {cardData.map((data) => (
                <GroupJoinSkeleton 
                  key={data.id}
                  id={data.id}
                  name={data.name} 
                  description={data.description}
                  type={data.type}
                />
                ))}
            </div> 
        </div>

        <div>
          <button className='btn btn-dark' onClick={()=>setState('start')}>Terug</button>
        </div>
      </>
    );
  }
  
  export default ArtistGroupJoinBody;