import React, { useState, useEffect } from "react";
import useDeleteArtistFromGroup from "../../../../hooks/artist/use-delete-artist-from-group";
import useAddToGroup from "../../../../hooks/artist/use-add-to-groups";
import useGetArtistsFromGroup from "../../../../hooks/artist/use-get-artists-from-group";
import useEditGroupDetails from "../../../../hooks/artist/use-edit-group-details";

function GroupEditSkeleton({ id, name, description, type }) {
    const [isLoading, setIsLoading] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [artistId, setArtistId] = useState(1);
    const [artistName, setArtistName] = useState('');
    const data = useGetArtistsFromGroup(id);
    const [editMode, setEditMode] = useState(false);

    const addGroup = useAddToGroup();
    const deleteFromGroup = useDeleteArtistFromGroup();
    const putGroupDetails = useEditGroupDetails();


    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    // useEffect(() => {
    //     console.log('state variables changed!');
    // }, [groupName, groupDescription]);

    const save = async () => {
        
        if(groupName == null || groupDescription == null){
            alert("Velden mogen niet leeg zijn");
            window.history.back();
        }

        console.log(groupName);
        await putGroupDetails(id, groupName, groupDescription);

    }

    const handleGroupNameChange = e => {
        setGroupName(e.target.value,()=>console.log(groupName))
    }

    // useEffect(() => {
    //     console.log(groupName);
    // }, [groupName]);

    const handleDeleteClick = async (id) => {
        
        const response = window.confirm("Are you sure you want to do that?");
        
        

        if(response){
            setIsLoading(true);

            setArtistId(id);
            console.log(artistId);
            await deleteFromGroup(artistId, id);
            alert('Artiest verwijderd.');
            setIsLoading(false);
        }
        else{
            window.history.back();
        }


        setIsLoading(false);

        //You should also refresh the data here by calling the useGetArtistsFromGroup hook again
    }
    const handleAddClick = async () => {
        setIsLoading(true);

        await addGroup(artistName, id);
        alert('artiest toegevoegd.');
        setIsLoading(false);
    }



    return (
        <div className="card">
        {/* <img ></img> */}
        <div className="card-body">
            
            {/* <p className="card-text">{description}</p>
            <p className="card-text">{type}</p> */}

            {editMode ? (
                <>
                <form>
                    Naam:<br/>
                    <label>
                        <input type="text" defaultValue={name} onChange={handleGroupNameChange} />
                    </label>
                    <hr/>
                    Descriptie:<br/>
                    <label>
                        <input type="text" defaultValue={description} onChange={e => setGroupDescription(e.target.value)} />
                    </label>
                    <label value={groupName}></label>
                </form>
                
                </>
            ) : (
                <>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    
                </>
            )}
            <hr/>
            {editMode ? (

                <div>
                <h6>Artists in Group:</h6>

                {isLoading ?(
                        <p>Loading...</p>
                    ):(
                    <ul>
                        {data.map((artist) => (

                            <li key={artist.id}>{artist.name}<button onClick={() => handleDeleteClick(artist.id)}>Delete</button></li>
                    
                        
                    
                        ))}
                    </ul>
                    )}
                </div>
               
            ):(
            <div>
                <h6>Artists in Group:</h6>
                
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        {data.map((artist) => (

                            <li key={artist.id}>
                                {artist.name}
                                {/* {editMode ? (
                                    <button onClick={handleDeleteClick(artist.id)}>Delete</button>
                                ) : null} */}
                            </li>
                    
                        
                    
                        ))}
                    </ul>
                )}
            </div>
            )}
            {editMode ? (
                <div>
                    {/* <button onClick={save}>Save</button><br/> */}
                    <button onClick={save}>Sla wijzigingen op</button>
                    <button onClick={toggleEditMode}>Terug</button>
                </div>
            ) : (
               <button onClick={toggleEditMode}>Edit mode</button> 
            )}
            
        </div>
    </div>
    );
}

export default GroupEditSkeleton;