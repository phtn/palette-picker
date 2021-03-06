// eslint-disable-next-line
import DevTools from 'mobx-react-devtools'

import React, { Component } from 'react';
import { observer } from 'mobx-react'
// ui / ux
import 'semantic-ui-css/semantic.min.css'
import './animated.css'
// components
import Nav from './Nav'
import Card from './Card'
import Desk from './Desk'
import Saved from './Saved'
// observables 
import Colors from './Colors'
import DeskItem from './DeskItem'
import Layout from './Layout'

// stores
const layout = new Layout()
const colour = new Colors()
const deskItem = new DeskItem()


// styles TODO !! need to upgrade to glamorous
const nav = {
  margin: 50
}
const content = {
  display: 'flex',
  justifyContent: 'center',
  height: 'parent',
}

const desk = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%'
}
const deskContent = {
  margin: 15,
  maxHeight: 350,
  overflow: 'auto',
}
const Index = observer ( class App extends Component {
  
  componentDidMount(){
    // localStorage
    if (localStorage.getItem('storedPalettes') === null){
      localStorage.setItem('storedPalettes', [])
    } else {
      // console.log('local storage active')
      deskItem.getStoredPalettes(JSON.parse(localStorage.getItem('storedPalettes')))
      deskItem.getPaletteCount(deskItem.palettes.length)
    }

    // media query
    window.addEventListener('resize', ()=> {
      layout.resizedWidth(window.innerWidth)
    })

  }
  componentWillUnmount(){
    window.removeEventListener('resize', ()=> {
      layout.resizedWidth(window.innerWidth)
    })
    
  }
 
  render(){
    return(
      <div style={layout.container}>
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
              colour.data[colour.index].colors[4],
              Number(new Date())
            )}
            saveIconName={deskItem.iconName}
          />
        </div>
        <div style={deskContent}>
          <Saved 
            title={'saved items list'}
            palettes={deskItem.palettes}
            copy={deskItem.copy}
            click={colour.setIndex}
          />
        </div>
        <div style={desk}>
          <Desk
            saved={deskItem.storedPaletteCount}
            click={(t)=> this.getActiveTabName(t)}
          />
        </div>
        

        {/*<DevTools/>*/}


      </div>
    )
  }
})
export default Index

