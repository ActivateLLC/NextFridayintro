import gsap from "gsap-trial"

import { ScrollTrigger } from "gsap-trial/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
class ST {
  constructor() {
    return
  }

  setters() {
    this.rem = (window.innerWidth / 1366) * 10
    this.st = document.querySelector(".st")
    this.clip = {
      n: 100
    }
    this.tl_ss = gsap
      .timeline({
        defaults: { duration: 1, ease: "power3.out" },
        scrollTrigger: {
          start: "top 50%",
          trigger: ".start-st",
          endTrigger: ".finish-st",
          end: "bottom 0%",
          scrub: true
        }
      })
      .fromTo(
        this.clip,
        { n: 100 },
        {
          duration: 2,
          n: 0,
          ease: "power3.inOut",
          onUpdate: () => {
            this.st.style.clipPath = `inset(${this.clip.n}% 0% 0% 0%)`
          }
        }
      )
      .fromTo(".st__indic__bg", { scale: 0 }, { scale: 1 }, "<15%")
      .fromTo(
        ".st__indic__text .wrapped",
        { yPercent: 130 },
        { yPercent: 0 },
        "<60%"
      )
      .fromTo(
        ".st__title .wrapped",
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.1 },
        "<"
      )
    /*.fromTo(
        ".left .hexs-ctn__each",
        { yPercent: 250 },
        { yPercent: 0, stagger: 0.05, duration: 1.5 },
        0.7
      )
      .fromTo(
        ".left .hexs-ctn__each",
        { opacity: 0 },
        { opacity: 1, stagger: 0.05, duration: 0.6 },
        "<"
      )
      .fromTo(
        ".right .hexs-ctn__each",
        { yPercent: 250 },
        { yPercent: 0, stagger: 0.05, duration: 1.5 },
        0.5
      )
      .fromTo(
        ".right .hexs-ctn__each",
        { opacity: 0 },
        { opacity: 1, stagger: 0.05, duration: 0.6 },
        "<"
      )*/
  }
}

export const st = new ST()
