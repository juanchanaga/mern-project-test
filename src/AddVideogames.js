import React from 'react';
import Constants from './utils';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

class AddVideogames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videogame: {
        name: '',
        price: '',
        classification: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSendForm = this.handleSendForm.bind(this);
  }
  render() {
    return (
      <div className="column is-one-third">
        <h1 className="is-size-3">Add Videogame</h1>
        <ToastContainer />
        <form className="field" onSubmit={this.handleSendForm}>
          <div className="form-group">
            <label className="label" htmlFor="name">
              Name:
            </label>
            <input
              autoFocus
              required
              placeholder="Name"
              type="text"
              id="name"
              onChange={this.handleChange}
              value={this.state.videogame.name}
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="price">
              Price:
            </label>
            <input
              required
              placeholder="Price"
              type="number"
              id="price"
              onChange={this.handleChange}
              value={this.state.videogame.price}
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="classification">
              Classification:
            </label>
            <input
              required
              placeholder="Classification"
              type="number"
              id="classification"
              onChange={this.handleChange}
              value={this.state.videogame.classification}
              className="input"
            />
          </div>
          <div className="form-group">
            <button className="button is-success mt-2">Save</button>
            &nbsp;
            <Link to="/videogames/view" className="button is-primary mt-2">
              Back
            </Link>
          </div>
        </form>
      </div>
    );
  }

  async handleSendForm(action) {
    action.preventDefault();

    const data = JSON.stringify(this.state.videogame);
    const response = await fetch(`${Constants.API_ROUTE}`, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const success = await response.json();
    if (success) {
      toast('Videogame Saved 🎮', {
        position: 'top-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.setState({
        videogame: {
          name: '',
          price: '',
          classification: '',
        },
      });
    } else {
      toast.error('Error saving 👾');
    }
  }

  handleChange(action) {
    const key = action.target.id;
    let value = action.target.value;
    this.setState((state) => {
      const updateVideogame = state.videogame;
      if (key !== 'name') {
        value = parseFloat(value);
      }
      updateVideogame[key] = value;
      return { videogame: updateVideogame };
    });
  }
}

export default AddVideogames;
