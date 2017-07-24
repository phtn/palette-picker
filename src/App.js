import DevTools from 'mobx-react-devtools'

import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Colors from './Colors'
import 'semantic-ui-css/semantic.min.css'
import './animated.css'
import Nav from './Nav'
import Card from './Card'
import Desk from './Desk'
import Saved from './Saved'
import DeskItem from './DeskItem'


const colour = new Colors()
const deskItem = new DeskItem()
const nav = {
  margin: 50
}
const content = {
  display: 'flex',
  justifyContent: 'center',
  //alignItems: 'center',
  height: 300,
}

const desk = {
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%'
}
const deskContent = {
  margin: 20,
  maxHeight: 200,
  overflow: 'auto',
}
const Index = observer ( class App extends Component {
  
  componentDidMount(){
    window.localStorage.setItem('storedPalettes', [])    
  }
 
  render(){
    return(
      <div>
        <div style={nav}>
          <Nav />
        </div>
        <div style={content}>
          <Card 
            title={colour.data[colour.index].title} 
            user={colour.data[colour.index].userName} 
            votes={colour.data[colour.index].numVotes}
            colorOne={colour.data[colour.index].colors[0]}
            colorTwo={colour.data[colour.index].colors[1]}
            colorThree={colour.data[colour.index].colors[2]}
            colorFour={colour.data[colour.index].colors[3]}
            colorFive={colour.data[colour.index].colors[4]}
            next={()=> colour.next()}
            prev={()=> colour.prev()}
            save={()=> deskItem.storePalette(
              colour.index, 
              colour.data[colour.index].title, 
              colour.data[colour.index].colors[0], 
              colour.data[colour.index].colors[1],
              colour.data[colour.index].colors[2],
              colour.data[colour.index].colors[3],
              colour.data[colour.index].colors[4] 
            )}
          />
        </div>
        <div style={deskContent}>
          <Saved 
            title={'saved items list'}
            palettes={deskItem.palettes}
            click={()=> colour.showPalette()}
          />
        </div>
        <div style={desk}>
          <Desk
            saved={deskItem.storedPaletteCount}
            click={(t)=> this.getActiveTabName(t)}
          />
        </div>
        

        <DevTools/>


      </div>
    )
  }
})
export default Index

