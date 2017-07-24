import React, { Component } from 'react'
import { List, Button } from 'semantic-ui-react'


const item = {
  color: 'teal'
}

class Saved extends Component {

  render(){
    const listItems = this.props.palettes.reverse().map(p=>(
      <List.Item 
        key={p.id}
        className='animated fadeInLeft'
        style={item}
        onClick={()=> this.props.click(p.title)}
      >
        <List.Content>
          <Button >{p.name}</Button>
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