import { useState, useEffect } from "react";
import axios from "axios";

export default function GetArtists() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/artist`);
        setCardData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return { cardData };
}





