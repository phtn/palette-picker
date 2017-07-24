import { action, extendObservable } from 'mobx'


function isInPalettes(value, array){
  return array.indexOf(value) > -1
}

class DeskItem {
  constructor(){
    extendObservable(this, {
      
      setName: action( (name)=> {
        this.name = name
      }),
      isStored: false,
      storedPaletteCount: 0,
      palettes: [],
      storePalette: action( (id, name, c0, c1, c2, c3, c4)=> {
        console.log(isInPalettes(id, this.palettes))
        // eslint-disable-next-line 
        if (isInPalettes(id, this.palettes === false)){
          this.palettes.push({id, name, c0, c1, c2, c3, c4})
        }

        

        this.storedPaletteCount = this.palettes.length
        
        this.isStored = !this.isStored        
        window.sessionStorage.setItem('storedPalettes',
          this.palettes
        )
      })
      
    })
  }
}
export default DeskItem