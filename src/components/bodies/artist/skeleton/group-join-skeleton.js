import React, { useState } from "react";
import useAddToGroup from "../../../../hooks/artist/use-add-to-groups";
import { UseLoginSession } from "../../../../hooks/login/use-login-session";

function GroupJoinSkeleton({ id, name, description, type}) {
    const user = UseLoginSession();
    const [isLoading, setIsLoading] = useState(false);
    const addGroup = useAddToGroup();
    const [artistId, setArtistId] = useState('');

    const handleClick = async () => {
        setIsLoading(true);
        setArtistId(user.Id);
        await addGroup(artistId, id);
        setArtistId('');
        alert("You have joined the group");
        setIsLoading(false);
    }
    return (
        <div className="card">
            {/* <img ></img> */}
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{type}</p>
                <div className="container">
                </div>
                <button type="submit" onClick={handleClick} disabled={isLoading}>
                    {isLoading ? 'Joining...' : 'Join Group'}
                </button>
            </div>
        </div>
    );
}

export default GroupJoinSkeleton;