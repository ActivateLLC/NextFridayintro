// Import the core library
import gsap from "gsap-trial"

import { ScrollTrigger } from "gsap-trial/ScrollTrigger"
import { ScrollSmoother } from "gsap-trial/ScrollSmoother"
import { intro } from "./intro"
import { ss } from "./ss"
import { st } from "./st"
import { kinnect } from "./kinnect"
import { yourturn } from "./yourt"
import { finale } from "./finale"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

class Index {
  construtor() {}

  initSS() {
    intro.setters()
    ss.setters()
    st.setters()
    kinnect.setters()
    yourturn.setters()
    finale.setters()
    ScrollSmoother.create({
      content: "#smooth-content",
      wrapper: "#smooth-wrapper",
      smooth: 1.5,
      effects: true
    })
  }
}

const index = new Index()
index.initSS()
