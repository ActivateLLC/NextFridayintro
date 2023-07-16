import gsap from "gsap-trial";

import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
class Finale {
  constructor() {
    return;
  }

  setters() {
    this.rem = (window.innerWidth / 1366) * 10;
    this.clip = {
      n: 100
    };

    this.faderyourt = document.querySelector(".fader-black");
    this.tl_finale = gsap
      .timeline({
        defaults: { duration: 1, ease: "power1.inOut" },
        scrollTrigger: {
          start: "top 200%",
          trigger: ".start-finale",
          endTrigger: ".finish-finale",
          end: "bottom 0%",
          scrub: true
        }
      })
      .add(() => {
        document.querySelector("body").classList.add("is-white");
      })
      .to(".fader-color", { duration: 0.01, autoAlpha: 0 }, 0)
      .fromTo(
        this.clip,
        { n: 100 },
        {
          duration: 2,
          n: 3.8,
          ease: "power3.inOut",
          onUpdate: () => {
            this.faderyourt.style.clipPath = `circle(${this.clip.n}% at 50vw calc(100vh - 11.6vw))`;
          }
        },
        0
      )
      .from(".finale .wrapped", { yPercent: 100, stagger: 0.1 }, `<40%`)
      .to(".fader-black", { autoAlpha: 0 }, `<50%`)
      .from(".finale button", { autoAlpha: 0 }, `<50%`);

    document
      .querySelector(".finale button")
      .addEventListener("click", () => window.location.reload());
    document.querySelector(".preloader-master").remove();
    history.scrollRestoration = "manual";
    this.consoleTag();
    document.querySelector("video").currentTime = 0;
    document.querySelector("video").play();
    gsap.from(".intro__squares, .intro__title", {
      delay: 4,
      autoAlpha: 0,
      duration: 3
    });
  }

  consoleTag() {
    if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
      var args = [
        "\n %c Made with ❤️ by Victor Work %c https://victor.work/ %c %c 💎 \n\n",
        "border: 1px solid rgba(255, 255, 255, .7);color: rgba(255, 255, 255, 1); background: #001446; padding:5px 0;",
        "color: rgba(255, 255, 255, .7); background: #1c1c1c; padding:5px 0;border: 1px solid #fff;",
        "background: #8C0000; padding:5px 0;",
        "color: #8C0000; background: #001446; padding:5px 0;"
      ];
      window.console.log.apply(console, args);
    } else if (window.console) {
      window.console.log(
        "Made with love ❤️ Victor Work - https://victor.work/  ❤️"
      );
    }

    let testing = function test() {
      console.log("test");
    };
    return (testing = 0);
  }
}

export const finale = new Finale();
