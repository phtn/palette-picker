import { computed, extendObservable } from 'mobx'

class Layout {
  constructor(){
    extendObservable(this, {
      width: computed( ()=> {
        if (window.innerWidth > 800)
          return window.innerWidth - 200
      }),
      left: computed( ()=> {
        if(window.innerWidth > 800)
          return 100
      })
    })
  }
}
export default Layout