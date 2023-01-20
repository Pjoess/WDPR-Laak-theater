import { useState } from "react";
import axios from "axios";
import useAddArtistToGroup from "../employee/addArtist-toGroup"
import { getValue } from "@testing-library/user-event/dist/utils";

function Card({ type, name, description, image }) {
    // const [groupInfo, setGroupInfo] = useState({});
    // const { artist, setArtist, group, setGroup, handleSubmit } = useAddArtistToGroup();
    
    // async function getUser(e){
    //   e.preventDefault();

    //   try {
    //     // make PUT request to endpoint
    //     await axios.put('/api/groups', group, );
    //     // show success message
    //     alert(`Group ${name} updated successfully!`);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }


    // async function handleClick(e) {

    //   alert(groupInfo.name);
    //     e.preventDefault();

    //     // Set the group data to be sent in the request
    //     setGroupInfo({ type, name, description });
    //     setGroup(groupInfo);
    //     handleSubmit();

    // }

    return (
        <div className="card">
            {/* <img src={image} className="card-img-top" alt="Card image" /> */}
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{type}</p>
                <button type="submit">Join Group</button>
            </div>
        </div>
    );
}

export default Card;