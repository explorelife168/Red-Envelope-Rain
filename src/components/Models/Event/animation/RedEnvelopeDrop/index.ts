import test from '@/assets/images/drop_envelope_red.png'
import { debounce } from 'lodash'
import * as PIXI from 'pixi.js'

class RedEnvelopeDropCanvasClass {
  app: PIXI.Application

  resize: () => void

  resizeDebounce: () => void

  constructor() {
    this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      view: document.getElementById('envelopeDropCanvas') as HTMLCanvasElement,
      transparent: true
      // backgroundColor: 0x23395d
    })

    // document.body.appendChild(this.pixi.view)

    this.resize = () => {
      this.app.renderer.resize(window.innerWidth, window.innerHeight)
    }
    this.resizeDebounce = debounce(() => {
      this.resize()
    }, 200)
    window.addEventListener('resize', this.resizeDebounce)

    this.app.loader.add('envelope', test).load((loader, resources) => {
      const envelope = new PIXI.Sprite(resources.envelope?.texture)
      envelope.x = window.innerWidth / 2
      envelope.y = window.innerHeight / 2
      envelope.anchor.x = 0.5
      envelope.anchor.y = 0.5
      this.app.stage.addChild(envelope)
    })
  }
}
export default RedEnvelopeDropCanvasClass
export { RedEnvelopeDropCanvasClass }

// const loader = new PIXI.Loader()
// loader.add('test', `url${test}`)
// loader.load(() => {
//   const redEnvelopeTexture = PIXI.Texture.from(`url${test}`)
//   const redEnvelope = new PIXI.Sprite(redEnvelopeTexture)
//   redEnvelope.position.set(window.innerWidth / 2, window.innerHeight / 2)
//   redEnvelope.width = 200
//   redEnvelope.height = 200
//   this.pixi.stage.addChild(redEnvelope)
// })
