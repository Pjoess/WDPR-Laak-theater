import React, {useState, useEffect} from 'react'

function EditUser({match}){
    const [user, setUser] = useState(user);
    const [username, setUsername] = useState(user.username);
    const [name, setName] = useState(user.name);
    const [role, setRole] = useState(user.role);

    const { id } = match.params;
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://localhost:7002/api/employee/${id}`);
                const data = await response.json();
                setUser(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchUser();
    }, [id]);

    const handleSubmit = async (event) => {

    }


    return (
        <div>
            <h2>Edit user</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Gebruikersnaam:
                    <input
                        type="text"
                        value={user.username}
                        onChange={event => setUsername(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Naam:
                    <input
                        type="text"
                        value={user.name}
                        onChange={event => setName(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Rol:
                    <input
                        type="text"
                        value={user.role}
                        onChange={event => setRole(event.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Save changes</button>
            </form>
        </div>
    );
}

export default EditUser;