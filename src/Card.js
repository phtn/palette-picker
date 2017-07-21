import React from 'react'
import { Card, Icon, Button, Grid } from 'semantic-ui-react'
const hex = {
  fontSize: 10,
  textAlign: 'center',
  display: 'flex'
}
const div = {
  overflow: 'hidden'
}
export default props => (
  <Card fluid>
    <div style={div}>
      <Grid columns={5} divided>
        <Grid.Row>
          <Grid.Column style={{backgroundColor: `#${props.colorOne}`, height: 100}}>
            <span style={hex}>#{props.colorOne}</span>
          </Grid.Column>
          <Grid.Column style={{backgroundColor: `#${props.colorTwo}`}}>
            <span style={hex}>#{props.colorTwo}</span>
          </Grid.Column>
          <Grid.Column style={{backgroundColor: `#${props.colorThree}`}}>
            <span style={hex}>#{props.colorThree}</span>
          </Grid.Column>
          <Grid.Column style={{backgroundColor: `#${props.colorFour}`}}>
            <span style={hex}>#{props.colorFour}</span>
          </Grid.Column>
          <Grid.Column style={{backgroundColor: `#${props.colorFive}`}}>
            <span style={hex}>#{props.colorFive}</span>
          </Grid.Column>
        </Grid.Row>
      </Grid>  
    </div>  
    <Card.Content>
      <Card.Header>
        {props.title}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          by <strong>{props.user}</strong>
        </span>
      </Card.Meta>
      <Card.Description>
        <Icon name='thumbs up'/> {props.votes}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Button basic onClick={props.prev}><Icon name='arrow left'/>Prev</Button>
        <Button basic onClick={props.next}>Next<Icon name='arrow right'/></Button>
      </div>
    </Card.Content>
  </Card>
)

/*
<Image src={Icosahedron} height={300} width={300} alt='image'/>
*/