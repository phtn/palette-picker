import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const version = {
  color: '#ccc',
  fontSize: 10
}

export default props => (
  <Header as='h2'>
    <Icon name='cube' />
    <Header.Content>
      Palette Picker <span style={version}>0.2.3</span>
      <Header.Subheader as='a' href='http://www.colourlovers.com/'>
        Made with  &nbsp;&nbsp;<Icon name='heart' color='red'/>using Colourlovers API
      </Header.Subheader>
    </Header.Content>
  </Header>
)