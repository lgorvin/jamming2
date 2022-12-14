
import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        searchResults: [
          {name: 'name1', artist: 'artist1', album: 'album1', id: 1 },
          {name: 'name2', artist: 'artist2', album: 'album2', id: 2 },
          {name: 'name3', artist: 'artist3', album: 'album3', id: 3 }
        ],
        playlistName: 'My Playlist', 
        playlistTracks: [
          {name: 'playlistName1', artist: 'playlistArtist1', album: 'PlaylistAlbum1', id: 4 },
          {name: 'playlistName2', artist: 'playlistArtist2', album: 'PlaylistAlbum2', id: 5 },
          {name: 'playlistName3', artist: 'playlistArtist3', album: 'PlaylistAlbum3', id: 6 }
        ]

    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    this.state.playlistTracks.push(track);
    this.setState({playlistTracks: this.state.playlistTracks})
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)

    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  render() {
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack}  searchResults={this.state.searchResults} />
            <Playlist onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    )

  }
}

export default App;
