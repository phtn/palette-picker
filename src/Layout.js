import { action, computed, extendObservable } from 'mobx'

class Layout {
  constructor(){
    extendObservable(this, {
      width: window.innerWidth,
      container: computed(()=> {
        return {
          width: this.getWidth(this.width),
          marginLeft: this.getLeft(this.width) 
        }
      }),
      resizedWidth: action((width)=> {
        this.width = width
      }),
      getWidth: action((width)=> {
        if(width > 800){
          return  width - 200
        }
      }),

      getLeft: action((width)=> {
        if(width > 800){
          return 100
        }
      })

    })
  }
}
export default Layout