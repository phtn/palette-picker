import React, { Component } from 'react'
import { List, Button, Icon } from 'semantic-ui-react'

const item = {
  color: 'teal'
}
const copied = {
  color: 'teal',
  fontWeight: 'bolder'
}
const itemBtn = {
  minWidth: 100
}
const copyBtn = {
  maxWidth: 40,
  maxHeight: 45,
  padding: 12,
  paddingLeft: 15,
}
const copyIcon = {
  color: 'grey'
}
const checkIcon = {
  color: 'teal'
}

class Saved extends Component {

  render(){
    const listItems = this.props.palettes.reverse().map(p=>(
      <List.Item 
        key={p.createdAt}
        className='animated fadeInLeft'
        style={item}
      >
        <List.Content floated='right'>
          
          <Button 
            animated 
            style={copyBtn}
            onClick={()=> {
              this.props.copy(p.c0,p.c1,p.c2,p.c3,p.c4)
              this.props.click(p.id)
              }
            }  
          >
            <Button.Content visible>
              <Icon name='clipboard' style={copyIcon}/>
            </Button.Content>
            <Button.Content hidden>
              <Icon name='checkmark' style={checkIcon}/>
            </Button.Content>
          </Button>
        
        </List.Content>

        <List.Content>
          
          <Button 
            animated
            style={itemBtn} 
            onClick={()=> {
              this.props.copy(p.c0,p.c1,p.c2,p.c3,p.c4)
              this.props.click(p.id)
              }
            }>
            <Button.Content visible>
              {`${p.name}`}
            </Button.Content>
            <Button.Content hidden color='teal'>
              <span style={copied}>copied! <Icon name='checkmark' /></span>
            </Button.Content>
          </Button>
          
          <Button style={{backgroundColor: `#${p.c0}`, height: 30, width: 30}}></Button>
          <Button style={{backgroundColor: `#${p.c1}`, height: 30, width: 30}}></Button>
          <Button style={{backgroundColor: `#${p.c2}`, height: 30, width: 30}}></Button>
          <Button style={{backgroundColor: `#${p.c3}`, height: 30, width: 30}}></Button>
          <Button style={{backgroundColor: `#${p.c4}`, height: 30, width: 30}}></Button>
        </List.Content>
        
        
        

      </List.Item>
    ))
    return(
      <List relaxed='very' animated>
        {listItems}
      </List>
    )
  }
}
export default Saved