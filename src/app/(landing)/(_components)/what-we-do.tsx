import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

import Globe1 from "./common/globe-1"
import Star from "./common/stars"

const about = [
  {
    icon: "/assets/images/mission.png",
    title: "our Mission",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis velit sed nunc imperdiet eget. Consectetur aliquam egestas ullamcorper nec arcu, ullamcorper congue duis. Orci, quis turpis ipsum ut consectetur morbi ullamcorper in.",
  },
  {
    icon: "/assets/images/vision.png",
    title: "Our vision",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis velit sed nunc imperdiet eget. Consectetur aliquam egestas ullamcorper nec arcu, ullamcorper congue duis. Orci, quis turpis ipsum ut consectetur morbi ullamcorper in.",
  },
]

export default function WhatWeDo() {
  return (
    <section
      className={cn(
        "relative w-full",
        "bg-layer bg-cover bg-no-repeat",
        "py-10 md:py-0"
      )}
    >
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-5 md:flex-nowrap lg:gap-0">
          <div className="mb-5 w-full md:mb-0 md:w-1/2">
            <h2
              className={cn(
                "bg-gradient-to-br from-white to-[rgba(255,255,255,0.25)] bg-clip-text",
                "mb-5 font-bold uppercase text-transparent",
                "text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
                "w-full lg:w-3/5"
              )}
            >
              What we do
            </h2>
            <p
              className={cn(
                "mb-8 font-medium capitalize 2xl:pr-20",
                "w-full xl:w-3/4",
                "text-base lg:text-lg"
              )}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              quis velit sed nunc imperdiet eget. Consectetur aliquam egestas
              ullamcorper nec arcu, ullamcorper congue duis. Orci, quis turpis
              ipsum ut consectetur morbi ullamcorper in. Cras aliquam
              consectetur vulputate donec.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vitae quis velit sed nunc imperdiet
              eget. Consectetur aliquam egestas ullamcorper nec arcu,
              ullamcorper congue duis. Orci, quis turpis ipsum ut consectetur
              morbi ullamcorper in. Cras aliquam consectetur vulputate donec.
            </p>
            <Button
              asChild
              variant="default"
              size="default"
              className={cn(
                "relative overflow-hidden !rounded-[10px]",
                "text-base lg:text-lg"
              )}
            >
              <Link href="#">Unlock your source now!</Link>
            </Button>
          </div>
          <div className="w-full md:w-1/2">
            <div
              className={cn(
                "rounded-lg bg-secondary",
                "flex flex-col items-center justify-center sm:flex-row md:flex-col",
                "ml-auto w-full lg:w-5/6",
                "relative z-50",
                "p-10 xl:p-20",
                "gap-10 lg:gap-20",
                "md:-mt-8 lg:-mt-16"
              )}
            >
              {about.map((data, index) => (
                <div key={index} className="text-center">
                  <div className="flex min-h-28 items-center justify-center">
                    <Image
                      src={data.icon}
                      alt={data.title}
                      width={100}
                      height={50}
                      className="mx-auto mb-5"
                    />
                  </div>
                  <h3
                    className={cn(
                      "mb-2 font-blackhawk",
                      "text-3xl lg:text-5xl"
                    )}
                  >
                    {data.title}
                  </h3>
                  <p
                    className={cn(
                      "capitalize",
                      "text-base lg:text-lg xl:text-xl"
                    )}
                  >
                    {data.description}
                  </p>
                </div>
              ))}

              <Globe1
                className={cn(
                  "absolute -bottom-20",
                  "-right-6 2xl:-right-60",
                  "hidden lg:block"
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <Star className={cn("absolute left-28 top-24 z-10", "hidden md:block")} />
      <Star
        className={cn("absolute bottom-60 left-32 z-10", "hidden md:block")}
      />
      <Star
        className={cn("absolute bottom-20 left-1/2 z-10", "hidden md:block")}
      />
      <Star
        className={cn("absolute right-28 top-52 z-10", "hidden md:block")}
      />
    </section>
  )
}
