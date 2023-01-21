import React from 'react';

export const DeleteButton = ({onClick}) => (
    <button className="btn btn-danger" onClick={onClick}>Delete</button>
);

export const EditButton = ({onClick}) => (
    <button className="btn btn-primary" onClick={onClick}>Edit</button>
);