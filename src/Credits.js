import React from 'react'
import { List } from 'semantic-ui-react'

export default props => (
  <div>
  <List divided relaxed>
    <List.Item>Technologies</List.Item>
    <List.Item>
      <List.Icon name='terminal' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' href='https://github.com/facebookincubator/create-react-app'>create-react-app</List.Header>
        <List.Description as='a'>v1.3.0</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='settings' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' href='https://github.com/mobxjs/mobx'>mobx</List.Header>
        <List.Description as='a'>v3.2.1</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='code' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' href='https://github.com/Semantic-Org/Semantic-UI-React'>semantic-ui-react</List.Header>
        <List.Description as='a'>v0.71.1</List.Description>
      </List.Content>
    </List.Item>
  </List>
  <br/>
  <List divided relaxed>
    <List.Item>Developer</List.Item>
    <List.Item>
      <List.Icon name='twitter' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' href='https://twitter.com/phtn458'>phtn458</List.Header>
        <List.Description as='a'>@phtn458</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' href='https://github.com/phtn/palette-picker'>project repository</List.Header>
        <List.Description as='a'>palette picker</List.Description>
      </List.Content>
    </List.Item>

  </List>
  <br/>
  </div>
)