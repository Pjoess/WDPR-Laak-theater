import { useState, useEffect } from "react";
import axios from "axios";

export default function GetBands() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/bands`);
        setCardData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return { cardData };
}
