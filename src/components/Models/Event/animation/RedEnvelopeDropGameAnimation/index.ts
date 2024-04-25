import drop_envelope_black from '@/assets/images/drop_envelope_black.webp'
import drop_envelope_red from '@/assets/images/drop_envelope_red.webp'
import gsap from 'gsap'
import { debounce, random } from 'lodash'
import * as PIXI from 'pixi.js'

class RedEnvelopeDropGameCanvasClass {
  app: PIXI.Application

  resize: () => void

  resizeDebounce: () => void

  score: number

  constructor() {
    this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      view: document.getElementById('envelopeDropGameCanvas') as HTMLCanvasElement,
      transparent: true
    })

    this.resize = () => {
      this.app.renderer.resize(window.innerWidth, window.innerHeight)
    }
    this.resizeDebounce = debounce(() => {
      this.resize()
    }, 100)

    window.addEventListener('resize', this.resizeDebounce)

    this.score = 0
  }

  redFallAnimation() {
    const envelopeTexture = PIXI.Texture.from(drop_envelope_red)
    const redEnvelope = new PIXI.Sprite(envelopeTexture)
    const startX =
      window.innerWidth < 577
        ? random(window.innerWidth * 0.1, window.innerWidth * 0.9)
        : random(window.innerWidth / 2 + 250, window.innerWidth / 2 - 250)
    const startY = -200
    const endY = window.innerHeight + 200
    const rotationAngle = random(0, 70) - 35

    redEnvelope.scale.set(window.innerWidth < 576 ? 0.25 : 0.35)
    redEnvelope.anchor.set(0.5)
    redEnvelope.position.set(startX, startY)
    redEnvelope.rotation = (rotationAngle * Math.PI) / 90
    this.app.stage.addChild(redEnvelope)

    redEnvelope.buttonMode = true
    redEnvelope.interactive = true

    const RedScoreTextStyle = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 24,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: '#fccdac',
      stroke: '#4a1850'
    })

    const RedScoreText = new PIXI.Text('+3 point', RedScoreTextStyle)

    RedScoreText.position.set(redEnvelope.x, redEnvelope.y)
    RedScoreText.alpha = 0

    redEnvelope.on('pointerdown', () => {
      this.score += 3
      console.log(this.score)
      RedScoreText.position.set(redEnvelope.x, redEnvelope.y)
      this.app.stage.addChild(RedScoreText)
      this.app.stage.removeChild(redEnvelope)
      gsap.to(RedScoreText, {
        alpha: 1,
        duration: 0.3,
        onComplete: () => {
          this.app.stage.removeChild(RedScoreText)
        }
      })
    })

    // 紅包掉落動畫
    gsap.to(redEnvelope, {
      y: endY,
      x: startX,
      rotation: (rotationAngle * Math.PI) / 90,
      duration: random(4, 7),
      ease: 'linear',
      onComplete: () => {
        redEnvelope.off('pointerdown')
        this.app.stage.removeChild(redEnvelope)
        this.app.stage.removeChild(RedScoreText)
      }
    })
  }

  blackFallAnimation() {
    const envelopeTexture = PIXI.Texture.from(drop_envelope_black)
    const blackEnvelope = new PIXI.Sprite(envelopeTexture)
    const startX =
      window.innerWidth < 577
        ? random(window.innerWidth * 0.1, window.innerWidth * 0.9)
        : random(window.innerWidth / 2 + 250, window.innerWidth / 2 - 250)
    const startY = -200
    const endY = window.innerHeight + 200
    const rotationAngle = random(0, 70) - 35

    blackEnvelope.scale.set(window.innerWidth < 576 ? 0.25 : 0.35)
    blackEnvelope.anchor.set(0.5)
    blackEnvelope.position.set(startX, startY)
    blackEnvelope.rotation = (rotationAngle * Math.PI) / 90
    this.app.stage.addChild(blackEnvelope)

    blackEnvelope.buttonMode = true
    blackEnvelope.interactive = true

    const blackScoreTextStyle = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 32,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: '#000000',
      stroke: '#4a1850'
    })

    const blackScoreText = new PIXI.Text('-5 point', blackScoreTextStyle)

    blackScoreText.position.set(blackEnvelope.x, blackEnvelope.y)
    blackScoreText.alpha = 0

    blackEnvelope.on('pointerdown', () => {
      this.score -= 5
      console.log(this.score)
      blackScoreText.position.set(blackEnvelope.x, blackEnvelope.y)
      this.app.stage.addChild(blackScoreText)
      this.app.stage.removeChild(blackEnvelope)
      gsap.to(blackScoreText, {
        alpha: 1,
        duration: 0.3,
        onComplete: () => {
          this.app.stage.removeChild(blackScoreText)
        }
      })
    })

    // 紅包掉落動畫
    gsap.to(blackEnvelope, {
      y: endY,
      x: startX,
      rotation: (rotationAngle * Math.PI) / 90,
      duration: random(4, 7),
      ease: 'linear',
      onComplete: () => {
        blackEnvelope.off('pointerdown')
        this.app.stage.removeChild(blackEnvelope)
        this.app.stage.removeChild(blackScoreText)
      }
    })
  }
  // 動畫on
  play() {
    const minDelay = 500
    let lastTime = performance.now()
    let elapsedTime = 0

    const dropRedEnvelope = (currentTime: number) => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime
      elapsedTime += deltaTime

      if (elapsedTime >= minDelay) {
        this.resize()
        this.redFallAnimation()
        this.blackFallAnimation()
        elapsedTime = 0
      }
      requestAnimationFrame(dropRedEnvelope)
    }
    requestAnimationFrame(dropRedEnvelope)
  }
}

export default RedEnvelopeDropGameCanvasClass
export { RedEnvelopeDropGameCanvasClass }
