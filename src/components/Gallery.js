import React from 'react';
import Masonry from 'react-masonry-component';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

var masonryOptions = {
  transitionDuration: 2.6
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

  render() {
    var childElements = this.props.elements.map(function(element){
      return (
        <li key={element.key} className="image-element-class">
          <Card style={{width: "20%"}}>
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar="http://lorempixel.com/100/100/nature/"
            />
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src="http://lorempixel.com/600/337/nature/" />
            </CardMedia>
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
        </li>
      );
    });

    return (
      <Paper style={style.paper} zDepth={1} rounded={false}>
        <Masonry
          className={'my-gallery-class'} // default ''
          elementType={'ul'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
          {childElements}
        </Masonry>
      </Paper>
    );
  }
}