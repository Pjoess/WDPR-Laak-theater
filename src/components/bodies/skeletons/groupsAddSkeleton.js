import React, { useState } from "react";
import { useAddGroup } from '../../../hooks/groupJoining/useGroupJoin';

function GroupCard({ name, description, type }) {
    const [isLoading, setIsLoading] = useState(false);
    const addGroup = useAddGroup();
    const [artistId, setArtistId] = useState('');

    const handleClick = async () => {
        setIsLoading(true);
        await addGroup(artistId, { name, description, type });
        setArtistId('');
        alert("U bent toegevoegd aan de groep");
        setIsLoading(false);
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{type}</p>
                <button type="submit" onClick={handleClick} disabled={isLoading}>
                    {isLoading ? 'Joining...' : 'Join Group'}
                </button>
                <form>
                <label>
                    Artist ID:
                    <input type="text" value={artistId} onChange={e => setArtistId(e.target.value)} />
                </label>
            </form>
            </div>
        </div>
    );
}

export default GroupCard;