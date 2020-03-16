import React, { Component } from 'react';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SonList extends Component {
  render() {
    if (this.props.data.loading) return <div>Loading...</div>;
    return (
      <div>
        <ul className='collection'>{this.renderSongs()}</ul>
        <Link to='/songs/new' className='btn-floating btn-large red right'>
          <i className='material-icons'>add</i>
        </Link>
      </div>
    );
  }

  renderSongs() {
    return this.props.data.songs.map((song, key) => {
      return (
        <li className='collection-item' key={key}>
          {song.title}
        </li>
      );
    });
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;
export default graphql(query)(SonList);
