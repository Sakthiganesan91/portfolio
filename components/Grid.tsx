import { gridItems } from "@/data/index";
import React from "react";
import { CardDemo } from "./ui/AnimatedCard";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { CardStack } from "./ui/card-stack";

function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        {/* <BentoGridItem
          id={1}
          title={"Achievements in College"}
          description={""}
        > */}
        <div
          className={
            "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]"
          }
        >
          <p className="text-4xl text-white">Achievements</p>
          <CardStack />
        </div>
        {/* </BentoGridItem> */}

        <BentoGridItem
          id={2}
          title={""}
          description={""}
          className={"lg:col-span-4 md:col-span-3 md:row-span-2 p-2"}
        >
          <CardDemo />
        </BentoGridItem>
      </BentoGrid>
    </section>
  );
}

export default Grid;
