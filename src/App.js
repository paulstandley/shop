import React, { Component } from 'react';
import './index.css';
import './App.css';

class App extends Component {
   
  state = {
    display: false
  }

  componentDidMount() { 
    this.displayMap();
   }

  displayMap = () => {
    /* call render scrip and pass in google map url and api key */
    renderScripElement('https://maps.googleapis.com/maps/api/js?key=AIzaSyDcheCgHTyf9zr3vcCCSOo0wrq_W95sUcA&callback=initMap');  
    /* set init map to window gobal object */
    window.initMap = this.initMap;
    /* after days of docks just and it to gloabal scope */
    window.gm_authFailure = this.gm_authFailure;
  }

  /* init map */

  initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new window.google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new window.google.maps.Marker({position: uluru, map: map});
  }
  
  gm_authFailure() {
    window.alert("Google Maps error api key?");
  }

  render() {
    return (
      <div className="App">
        <div id="map"></div>
      </div>
    );
  }
}

function renderScripElement(srcUrl) {
  /* make sure its the first script tag make a script tag add atrrs */  
    const firstChildScriptTag = window.document.getElementsByTagName('script')[0];
    //const secondChildScriptTag = window.document.getElementsByTagName('script')[1];
    const scriptTag = window.document.createElement('script');
    //const scriptTag1 = window.document.createElement('script');
    scriptTag.src = srcUrl;
    scriptTag.defer = true;  
    scriptTag.async = true;
    /*const name = `
    ${function gm_authFailure() {
      window.alert("Google Maps error!");
    }}`;*/
    
  /* then place it in the dom as a first child */ 
    firstChildScriptTag.parentNode.insertBefore(scriptTag, firstChildScriptTag);
    //secondChildScriptTag.parentNode.insertBefore(scriptTag1, secondChildScriptTag);
    //secondChildScriptTag.parentNode.insertBefore(inside, secondChildScriptTag);
  }

export default App;
