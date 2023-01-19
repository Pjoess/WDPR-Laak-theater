import { useState, useEffect } from "react";
import axios from "axios";

export default function useCards() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/Bands");
        setCardData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return { cardData };
}
