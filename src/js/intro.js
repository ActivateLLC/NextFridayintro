import gsap from "gsap-trial"

import { ScrollTrigger } from "gsap-trial/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
class Intro {
  constructor() {
    return
  }

  setters() {
    this.rem = (window.innerWidth / 1366) * 10
    gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          start: "top 0%",
          trigger: ".start-intro",
          endTrigger: ".finish-intro",
          end: "bottom 0%",
          scrub: true
        }
      })
      .fromTo(".square__outer", { scale: 0.26 }, { scale: 1 })
      .fromTo(".square__middle", { scale: 0.24 }, { scale: 1 }, "<8%")
      .fromTo(".square__content", { scale: 0.23 }, { scale: 1 }, "<12%")
      .fromTo(".intro__content", { scale: 0.7 }, { scale: 1 }, "<")
      .fromTo(
        ".intro__text",
        { y: 0 },
        {
          y: this.rem * 5,
          x: -(this.rem * 5),
          opacity: 0
        },
        0
      )
      .fromTo(
        ".intro__logos > * ",
        { opacity: 1 },
        { duration: 0.5, opacity: 0 },
        "<"
      )
      .fromTo(".intro__title", { yPercent: 0 }, { yPercent: -100 }, "<")
      .fromTo(
        ".intro__title .wrapped",
        { yPercent: 0 },
        { yPercent: -100 },
        "<"
      )
  }
}

export const intro = new Intro()
