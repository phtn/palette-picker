import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Colors from './Colors'
import 'semantic-ui-css/semantic.min.css'
import Nav from './Nav'
import Card from './Card'
import Credits from './Credits'
const store = new Colors()
const nav = {
  margin: 50
}
const content = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 300,
}
const credits = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 75,

}
const Index = observer ( class App extends Component {
  state = {
    index: 0
  }
  next(){
    if (this.state.index < store.data.length - 1 ){
      this.setState({index: this.state.index + 1})
    } else {
      this.setState({index: 0})
    }
  }
  prev(){
    if (this.state.index > 0 ){
      this.setState({index: this.state.index - 1})
    } else {
      this.setState({index: 99})
    }
  }
  componentDidMount(){
    console.log(store.data.length)
  }
  render(){
    return(
      <div>
        <div style={nav}>
          <Nav />
        </div>
        <div style={content}>
          <Card 
            title={store.data[this.state.index].title} 
            user={store.data[this.state.index].userName} 
            votes={store.data[this.state.index].numVotes}
            colorOne={store.data[this.state.index].colors[0]}
            colorTwo={store.data[this.state.index].colors[1]}
            colorThree={store.data[this.state.index].colors[2]}
            colorFour={store.data[this.state.index].colors[3]}
            colorFive={store.data[this.state.index].colors[4]}
            next={()=> this.next()}
            prev={()=> this.prev()}
          />
        </div>
        <div style={credits}>
          <Credits />
        </div>
      </div>
    )
  }
})
export default Index

