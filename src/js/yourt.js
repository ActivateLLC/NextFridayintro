import gsap from "gsap-trial";

import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
class YourTurn {
  constructor() {
    return;
  }

  setters() {
    this.rem = (window.innerWidth / 1366) * 10;
    this.tl_yourt = gsap
      .timeline({
        defaults: { duration: 1, ease: "power1.inOut" },
        scrollTrigger: {
          start: "top 100%",
          trigger: ".start-yourt",
          endTrigger: ".finish-yourt",
          end: "bottom 0%",
          scrub: true
        }
      })

      .to(".kinnect__text .wrapped", { autoRender: "false", opacity: 0 }, 0)
      .fromTo(
        ".kinnect__text__travel",
        { xPercent: -75 },
        { autoRender: "false", duration: 8, xPercent: -106 },
        0
      )
      .fromTo(
        ".yourt__fader",
        { xPercent: 100 },
        { autoRender: "false", duration: 8, xPercent: 0, stagger: 0.6 },
        1
      )
      .fromTo(
        ".yourt__text .wrapped",
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.1 },
        `<75%`
      )

      .fromTo(
        ".yourt0",
        { yPercent: 55 },
        { duration: 7, yPercent: -121, ease: "none" },
        "<35%"
      )
      .fromTo(
        ".yourt1",
        { yPercent: 52 },
        { duration: 7, yPercent: -106, ease: "none" },
        `<`
      )
      .fromTo(
        ".yourt2",
        { yPercent: 60 },
        { duration: 7, yPercent: -99, ease: "none" },
        `<`
      )
      .to(".yourt__text .wrapped", { yPercent: -100, stagger: 0.1 }, `<70%`);
  }
}

export const yourturn = new YourTurn();
