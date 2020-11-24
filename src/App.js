import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import SimpleReactLightbox from 'simple-react-lightbox';
import './App.css';

class App extends Component{
  constructor() {
    super();

    this.state = {
      myName: "AkeelLegend",
      photos: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://my-json-server.typicode.com/MrAkeelLegend/photography/db')
      .then(response => response.json())
      .then(results => this.setState({photos: results.photos.map(photo => photo)}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }


  render() {

    const { photos, searchField } = this.state;
    const filteredPhotos = photos.filter(photo => 
      photo.location.place.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1 className="heading">AKEEL LEGEND MOBILE PHOTOGRAPHY</h1>
        <SearchBox
          placeholder="Search by Location"
          handleChange={this.handleChange}
        />
        <SimpleReactLightbox>
        <CardList photos={filteredPhotos} /> 
        </SimpleReactLightbox>
      </div>
    );
  }
}

export default App;
