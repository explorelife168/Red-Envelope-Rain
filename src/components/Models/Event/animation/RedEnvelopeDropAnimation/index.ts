import drop_envelope_red from '@/assets/images/drop_envelope_red.webp'
import gsap from 'gsap'
import { debounce, random } from 'lodash'
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
    })

    this.resize = () => {
      this.app.renderer.resize(window.innerWidth, window.innerHeight)
    }
    this.resizeDebounce = debounce(() => {
      this.resize()
    }, 100)

    window.addEventListener('resize', this.resizeDebounce)
  }

  fallAnimation() {
    const envelopeTexture = PIXI.Texture.from(drop_envelope_red)
    const redEnvelope = new PIXI.Sprite(envelopeTexture)
    const startX = random(window.innerWidth * 0.1, window.innerWidth * 0.9)
    const startY = -200
    const endY = window.innerHeight + 200
    const rotationAngle = random(0, 70) - 35

    redEnvelope.scale.set(window.innerWidth < 576 ? 0.25 : 0.35)
    redEnvelope.anchor.set(0.5)
    redEnvelope.position.set(startX, startY)
    redEnvelope.rotation = (rotationAngle * Math.PI) / 90
    this.app.stage.addChild(redEnvelope)

    gsap.to(redEnvelope, {
      y: endY,
      x: startX,
      rotation: (rotationAngle * Math.PI) / 90,
      duration: random(4, 7),
      ease: 'linear',
      onComplete: () => {
        this.app.stage.removeChild(redEnvelope)
      }
    })
  }

  play() {
    const minDelay = 700
    let lastTime = performance.now()
    let elapsedTime = 0

    const dropRedEnvelope = (currentTime: number) => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime
      elapsedTime += deltaTime

      if (elapsedTime >= minDelay) {
        this.resize()
        this.fallAnimation()
        elapsedTime = 0
      }
      requestAnimationFrame(dropRedEnvelope)
    }
    requestAnimationFrame(dropRedEnvelope)
  }
}

export default RedEnvelopeDropCanvasClass
export { RedEnvelopeDropCanvasClass }
