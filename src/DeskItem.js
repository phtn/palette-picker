import { action, extendObservable } from 'mobx'


// element = myArray.filter((e) => e.hello === 'stevie')[0];
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
      iconName: 'bookmark',
      palettes: [],
      storePalette: action( (id, name, c0, c1, c2, c3, c4)=> {

        console.log(isInPalettes(id, this.palettes))
        if (isInPalettes(id, this.palettes) === false ){
          this.palettes.push({id, name, c0, c1, c2, c3, c4, createdAt: Number(new Date())})
        }

        this.storedPaletteCount = this.palettes.length
        
        this.isStored = !this.isStored        

        window.localStorage.setItem('storedPalettes',
          this.palettes
        )

      })
      
    })
  }
}
export default DeskItem