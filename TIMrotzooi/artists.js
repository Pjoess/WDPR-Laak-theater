import React from 'react';
import useCards from './employee/get-artists';
import Card from './artistGroup/card-skeleton';
import './artists.css';
import useCreateArtist from './employee/create-artists';

function CardContainerArtists() {
  const { cardData} = useCards();
  const { newArtist, setNewArtist, handleSubmit } = useCreateArtist();
  
  
    return (
      <>
      <div>
        <h1>Artiesten</h1>
      </div>
      <div className="container d-flex justify-content-center data">
        <div className='row'>
          {cardData.map((data) => (
            <div className='col-md-6 text-center my-3'>
              <Card key={data.name} {...data} />
            </div>
          ))}
        </div>
      </div>



      <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={newArtist.name}
                  onChange={(e) => setNewArtist({ ...newArtist, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Groups</label>
                <input
                  type="text"
                  className="form-control"
                  value={newArtist.groups.join(', ')}
                  onChange={(e) => setNewArtist({ ...newArtist, groups: e.target.value.split(',') })}
                />
              </div>
              <button type="submit" className="btn btn-primary">Create</button>
            </form>
          </div>
      </div>



      <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item disabled">
          <a className="page-link">Previous</a>
        </li>

        <li className="page-item active">
          <a className="page-link" href="artists">1</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="groups">2</a>
        </li>

        <li className="page-item">
          <a className="page-link" href="groups">Next</a>
        </li>
      </ul>
      </nav>
      </>
    );
  }
  
  export default CardContainerArtists;