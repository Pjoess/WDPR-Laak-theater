import { useState } from 'react';
import axios from 'axios';

function useAddArtistToGroup() {
  const [artist, setArtist] = useState({});
  const [group, setGroup] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      // make PUT request to endpoint
      await axios.put('/api/artists/band/add', {artist, group});
      // show success message
      alert(`Artist ${artist.name} added to group ${group.name} successfully!`);
    } catch (err) {
        alert('er ging iets verkeerd');
      console.error(err);
    }
  }

  return {
    artist,
    setArtist,
    group,
    setGroup,
    handleSubmit,
  };
}

export default useAddArtistToGroup;