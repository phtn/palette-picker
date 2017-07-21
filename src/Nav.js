import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

export default props => (
  <Header as='h2'>
    <Icon name='cube' />
    <Header.Content>
      Palette Picker
      <Header.Subheader as='a' href='http://www.colourlovers.com/'>
        Made with  &nbsp;&nbsp;<Icon name='heart' color='red'/>using Colourlovers API
      </Header.Subheader>
    </Header.Content>
  </Header>
)