import React, { Component } from 'react'
import { Icon, Menu, Label } from 'semantic-ui-react'
import DeskItem from './DeskItem'

const deskItem = new DeskItem()

class Desk extends Component {

  handleClickItem(e, {name}){
    deskItem.setName(name)
    console.log(deskItem.name)

  }
  
  render(){
    return(
      <div>
        <Menu pointing secondary>
          <Menu.Item name='saved' active={deskItem.name === 'saved'} onClick={this.handleClickItem.bind(this)}>
            Saved <Label color='teal'>{this.props.saved}</Label>
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item name='info' active={deskItem.name === 'info'} onClick={this.handleClickItem.bind(this)}>
              <Icon name='info' color='grey' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
export default Desk

