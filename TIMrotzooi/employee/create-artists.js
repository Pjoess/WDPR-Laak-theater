import { useState } from 'react';
import axios from 'axios';

function useCreateArtist() {
  const [newArtist, setNewArtist] = useState({ name: '', groups: [] });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!newArtist.name) {
        alert('Please enter a name');
        return;
    }
    try {
      // make POST request to endpoint
      const { data } = await axios.post('http://localhost:7002/api/Artist/add', newArtist);

        // empty the form
        setNewArtist({ name: '', groups: [] });

        // show success message
        alert('Artist created successfully!');

        window.location.reload()
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  return {
    newArtist,
    setNewArtist,
    handleSubmit
  };
}

export default useCreateArtist;