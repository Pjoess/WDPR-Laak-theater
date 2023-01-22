import React from 'react';

function GroupList({ id, name, description, type }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Type: {type}</p>
                <p className="card-text">ID: {id}</p>
                <button className="btn btn-primary">Join Group</button>
            </div>
        </div>
    );
}

export default GroupList;