require ('./stylesheets/style.css');

import React from 'react';
import ReactDom from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {HeaderApp, Gallery} from './components';

class App extends React.Component {
  
  render () {
    return (
      <div>
        <MuiThemeProvider>
          <HeaderApp/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Gallery
            elements={[
            {key:"1",src:"https://randomuser.me/api/portraits/women/48.jpg"},
            {key:"2",src:"https://randomuser.me/api/portraits/men/53.jpg"},
            {key:"3",src:"https://randomuser.me/api/portraits/women/31.jpg"},
            {key:"4",src:"https://randomuser.me/api/portraits/men/27.jpg"}
          ]}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

injectTapEventPlugin();
ReactDom.render(<App/>, document.getElementById('app'));