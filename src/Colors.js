import { action, extendObservable } from 'mobx'
import data from './colors.json'
class Colors {
  constructor(){
    extendObservable(this, {
      data: data,
      index: 0,
      next: action( ()=> {
        if (this.index < data.length - 1){
          this.index = this.index + 1
        } else {
          this.index = 0
        }
      }),
      prev: action( ()=> {
        if (this.index > 0){
          this.index = this.index - 1
        } else {
          this.index = data.length - 1
        }
      }),
      setIndex: action (i=> {
        this.index = i
      })

    })
  }
}
export default Colors