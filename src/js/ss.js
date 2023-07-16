import gsap from "gsap-trial"

import { ScrollTrigger } from "gsap-trial/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
class SS {
  constructor() {
    return
  }

  setters() {
    this.rem = (window.innerWidth / 1366) * 10
    this.tl_ss = gsap
      .timeline({
        defaults: { duration: 1, ease: "power3.out" },
        scrollTrigger: {
          start: "top 125%",
          trigger: ".start-ss",
          endTrigger: ".finish-ss",
          end: "bottom 0%",
          scrub: true
        }
      })
      .fromTo(".ss__indic__bg", { scale: 0 }, { scale: 1 }, 0)
      .fromTo(
        ".ss__indic__text .wrapped",
        { yPercent: 130 },
        { yPercent: 0 },
        "<60%"
      )
      .fromTo(
        ".ss__title .wrapped",
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.1 },
        "<"
      )
      .fromTo(
        ".ss .left .hexs-ctn__each",
        { yPercent: 250 },
        { yPercent: 0, stagger: 0.05, duration: 1.5 },
        0.7
      )
      .fromTo(
        ".ss .left .hexs-ctn__each",
        { opacity: 0 },
        { opacity: 1, stagger: 0.05, duration: 0.6 },
        "<"
      )
      .fromTo(
        ".ss .right .hexs-ctn__each",
        { yPercent: 250 },
        { yPercent: 0, stagger: 0.05, duration: 1.5 },
        0.5
      )
      .fromTo(
        ".ss .right .hexs-ctn__each",
        { opacity: 0 },
        { opacity: 1, stagger: 0.05, duration: 0.6 },
        "<"
      )
  }
}

export const ss = new SS()

