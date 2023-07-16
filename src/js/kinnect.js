import gsap from "gsap-trial"

import { ScrollTrigger } from "gsap-trial/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
class Kinnect {
  constructor() {
    return
  }

  setters() {
    this.rem = (window.innerWidth / 1366) * 10
    this.kinne = {
      where: document.querySelector(".where"),
      teams: document.querySelector(".teams"),
      build: document.querySelector(".build"),
      faster: document.querySelector(".faster"),
      together: document.querySelector(".together")
    }
    this.els = Object.values(this.kinne)
    this.tls = []
    this.els.forEach((el) => {
      let clip = { n: 0 }
      let tl = gsap.timeline().fromTo(
        clip,
        { n: 100 },
        {
          duration: 2,
          n: 0,
          ease: "power1.inOut",
          onUpdate: () => {
            el.style.clipPath = `inset(0% 0% ${clip.n}% 0%)`
          }
        }
      )
      this.tls.push(tl)
    })

    this.tl_kine = gsap
      .timeline({
        defaults: { duration: 1, ease: "power1.inOut" },
        scrollTrigger: {
          start: "top 80%",
          trigger: ".start-kinne",
          endTrigger: ".finish-kinne",
          end: "bottom 0%",
          scrub: true
        }
      })
      .to(".st .hexs-ctn__each", { duration: 2, scale: 0, stagger: 0.05 }, 0)
      .to(".st__indic", { opacity: 0 }, 0)
      .fromTo(
        ".st__title .wrapped",
        { yPercent: 0 },
        { autoRender: "false", yPercent: -100 },
        0
      )

      .fromTo(
        ".kinnect__text .wrapped",
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.5 },
        `<50%`
      )
      .fromTo(
        ".kinnect__text__travel",
        { xPercent: 10 },
        { duration: 8, xPercent: -75 },
        `<85%`
      )

      .add(this.tls[0], "<")
      .add(this.tls[1], "<50%")
      .add(this.tls[2], "<50%")
      .add(this.tls[3], "<50%")
      .add(this.tls[4], "<50%")
  }
}

export const kinnect = new Kinnect()

