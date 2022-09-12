import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Constants from './utils';

class VideoGamesRowTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
    };
    this.redirectToEdit = this.redirectToEdit.bind(this);
    this.delete = this.delete.bind(this);
  }

  redirectToEdit() {
    return <Navigate to={`/videogames/edit/${this.props.videogame.id}`} />;
  }

  async delete() {
    const result = await Swal.fire({
      title: 'Confirmation',
      text: `Delete "${this.props.videogame.name}"?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3298dc',
      cancelButtonColor: '#f14668',
      cancelButtonText: 'No',
      confirmButtonText: 'Yes, delete',
    });

    if (!result.value) {
      return;
    }

    const response = await fetch(`${Constants.API_ROUTE}/${this.props.videogame._id}`, {
      method: 'DELETE',
    });

    const success = await response.json();

    if (success) {
      toast('Deleted videogame', {
        position: 'top-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      this.setState({
        deleted: true,
      });
    } else {
      toast.error('Error deleting');
    }
  }
  render() {
    if (this.state.deleted) {
      return null;
    }
    return (
      <tr>
        <td>{this.props.videogame.name}</td>
        <td>{this.props.videogame.price}</td>
        <td>{this.props.videogame.classification}</td>
        <td>
          <Link to={`/videogames/edit/${this.props.videogame._id}`} className="button is-info">
            Edit
          </Link>
        </td>
        <td>
          <button onClick={this.delete} className="button is-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default VideoGamesRowTable;
