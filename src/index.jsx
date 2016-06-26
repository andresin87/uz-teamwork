require ('./stylesheets/style.css');

import React from 'react';
import ReactDom from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {HeaderApp} from './components';

class App extends React.Component {
  render () {
    return (
      <div>
        <MuiThemeProvider>
          <HeaderApp/>
        </MuiThemeProvider>
      </div>
    );
  }
}

injectTapEventPlugin();
ReactDom.render(<App/>, document.getElementById('app'));