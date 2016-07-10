import React from 'react';
import Masonry from 'react-masonry-component';
import Paper from 'material-ui/Paper';
const {Grid, Row, Col} = require('react-flexbox-grid');
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import {base} from '../firebase';

var masonryOptions = {
  transitionDuration: 2
};

const style = {
  paper: {
    height: 'auto',
    width: '98%',
    margin: "1%",
    textAlign: 'center',
    display: 'inline-block'
  },
  raisedBtn: {
    margin: 12
  }
};

export default class Gallery extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: [],
      loading: true
    }
  }
  componentDidMount(){
    this.ref = base.syncState('userzoomers', {
      context: this,
      state: 'list',
      asArray: true,
      then(){
        this.setState({loading: false});
        console.log(this.state.list);
      }
    });
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  render() {
    console.log(this.props.elements);
    console.log(this.state.list);
    var childElements = this.props.elements.map(function(element){
      return (
        <Col key={element.key} xs={6} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src="http://lorempixel.com/600/337/nature/" />
            </CardMedia>
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar="http://lorempixel.com/100/100/nature/"
            />
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <RaisedButton label="EDIT" />
              <RaisedButton label="DELETE" />
            </CardActions>
          </Card>
        </Col>
      );
    });

    return (
      <Grid>
        <Row>
          <Paper style={style.paper} zDepth={1} rounded={false}>
            <Masonry
              className={'masonry'} // default ''
              elementType={'div'} // default 'div'
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
              {this.state.loading === true ? <h3> LOADING... </h3> : {childElements}}
            </Masonry>
          </Paper>
        </Row>
      </Grid>
    );
  }
}