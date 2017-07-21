import { extendObservable } from 'mobx'
import data from './colors.json'
class Colors {
  constructor(){
    extendObservable(this, {
      data: data
    })
  }
}
export default Colors