import React, { Component } from 'react'
import { Icon, Menu, Label } from 'semantic-ui-react'
import DeskItem from './DeskItem'

const deskItem = new DeskItem()

const saveLabel = {
  color: 'teal',
  fontWeight: 'bolder'
}
class Desk extends Component {

  handleClickItem(){
    console.log()
  }
  
  render(){
    return(
      <div>
        <Menu pointing secondary>
          <Menu.Item name='saved' active={false}>
            <span style={saveLabel}>Saved</span> <Label color='teal'>{this.props.saved}</Label>
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item name='info' active={false} as='a' href='https://github.com/phtn/palette-picker'>
              <Icon name='github' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
export default Desk

