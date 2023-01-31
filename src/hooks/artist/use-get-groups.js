import { useState, useEffect } from "react";
import axios from "axios";


export default function useGetGroups(){
    const [cardData, setCardData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get("http://localhost:7002/api/Group/group");
          setCardData(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, []);
  
    return cardData;
}