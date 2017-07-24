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

      }),

      copy: action( (c0, c1, c2, c3, c4 )=> {
        let str = `
{ // HEX
  0: #${c0},
  1: #${c1},
  2: #${c2},
  3: #${c3},
  4: #${c4},
}
`








        function copyTextToClipboard(text) {
          var textArea = document.createElement("textarea");

          //
          // *** This styling is an extra step which is likely not required. ***
          //
          // Why is it here? To ensure:
          // 1. the element is able to have focus and selection.
          // 2. if element was to flash render it has minimal visual impact.
          // 3. less flakyness with selection and copying which **might** occur if
          //    the textarea element is not visible.
          //
          // The likelihood is the element won't even render, not even a flash,
          // so some of these are just precautions. However in IE the element
          // is visible whilst the popup box asking the user for permission for
          // the web page to copy to the clipboard.
          //

          // Place in top-left corner of screen regardless of scroll position.
          textArea.style.position = 'fixed';
          textArea.style.top = 0;
          textArea.style.left = 0;

          // Ensure it has a small width and height. Setting to 1px / 1em
          // doesn't work as this gives a negative w/h on some browsers.
          textArea.style.width = '2em';
          textArea.style.height = '2em';

          // We don't need padding, reducing the size if it does flash render.
          textArea.style.padding = 0;

          // Clean up any borders.
          textArea.style.border = 'none';
          textArea.style.outline = 'none';
          textArea.style.boxShadow = 'none';

          // Avoid flash of white box if rendered for any reason.
          textArea.style.background = 'transparent';


          textArea.value = text;

          document.body.appendChild(textArea);

          textArea.select();

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
          } catch (err) {
            console.log('Oops, unable to copy');
          }

          document.body.removeChild(textArea);
        }

        copyTextToClipboard(str)

      })
      
    })
  }
}
export default DeskItem