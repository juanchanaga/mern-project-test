import React from 'react';
import Constants from './utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoGamesRowTable from './VideoGamesRowTable';

class ViewVideogames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videogames: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(`${Constants.API_ROUTE}`);
    const videogames = await response.json();
    this.setState({
      videogames: videogames,
    });
  }
  render() {
    return (
      <div>
        <div className="column">
          <h1 className="is-size-3">View videogames</h1>
          <ToastContainer />
        </div>
        <div className="table-container">
          <table className="table is-fullwidth is-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Classification</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.videogames.map((videogame) => {
                return <VideoGamesRowTable key={videogame._id} videogame={videogame}></VideoGamesRowTable>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ViewVideogames;
