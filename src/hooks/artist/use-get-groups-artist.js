import { useState, useEffect } from "react";
import axios from "axios";


export default function useGetGroupsArtist(artistId) {
    const [cardData, setCardData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(`http://localhost:7002/api/Group/${artistId}`);
          setCardData(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, [artistId]);
  
    return cardData;
  }