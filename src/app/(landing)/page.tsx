import { cn } from "@/lib/utils"

import Footer from "../_components/footer"
import Banner from "./(_components)/banner"
import Circle from "./(_components)/common/circle"
import Globe3 from "./(_components)/common/globe-3"
import Control from "./(_components)/control"
import LevelUp from "./(_components)/level-up"
import LifeStyle from "./(_components)/lifestyle"
import Result from "./(_components)/result"
import WhatWeDo from "./(_components)/what-we-do"

export default function Home() {
  return (
    <main className="min-h-screen font-body">
      <div className="relative">
        <Circle className="absolute left-20 right-20 top-80" />
        <Banner />
        <WhatWeDo />
      </div>
      <LevelUp />
      <div className="relative">
        <Globe3
          className={cn("absolute left-0 top-[600px] z-30", "hidden lg:block")}
        />
        <LifeStyle />
        <Control />
      </div>
      <div className="relative">
        <Result />
        <Footer />
      </div>
    </main>
  )
}
