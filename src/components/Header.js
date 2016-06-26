import React from 'react';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ContentAdd from 'material-ui/svg-icons/content/add';

var img = require('../../assets/images/userzoom-logo-s.png');

export default class HeaderApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value     : 1,
      dataSource: []
    };
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value
      ]
    });
  }

  handleChange = (event, index, value) => this.setState({value})

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <Avatar src={img} style={{marginRight:5, marginTop:10, marginBottom:10, marginLeft:20}} />
          <ToolbarTitle className="h1" text="UserZoom Teamwork" />
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="All Offices" checked={true}/>
            <MenuItem value={2} primaryText="London (UK)" insetChildren={true}/>
            <MenuItem value={3} primaryText="Cheshire (UK)" insetChildren={true}/>
            <MenuItem value={4} primaryText="Barcelona (Spain)" insetChildren={true}/>
            <MenuItem value={5} primaryText="Madrid (Spain)" insetChildren={true}/>
            <MenuItem value={6} primaryText="München (DE)" insetChildren={true}/>
            <MenuItem value={7} primaryText="San Francisco (CA) USA" insetChildren={true}/>
            <MenuItem value={8} primaryText="San Jose (CA) USA" insetChildren={true}/>
            <MenuItem value={9} primaryText="Sydney (AUS)" insetChildren={true}/>
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <AutoComplete
            style={{marginTop:5}}
            hintText="Search"
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            fullWidth={true}
          />
          <ToolbarSeparator />
          <FloatingActionButton style={{marginRight:20, marginTop:10, marginBottom:10, marginLeft:20}} mini={true} primary={true}>
            <ContentAdd />
          </FloatingActionButton>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}