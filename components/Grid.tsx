import { gridItems } from "@/data/index";
import React from "react";
import { CardDemo } from "./ui/AnimatedCard";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { CardStack } from "./ui/card-stack";

function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        <BentoGridItem
          id={1}
          title={""}
          description={""}
          className={
            "lg:col-span-3 md:col-span-3 md:row-span-2 flex justify-center items-center"
          }
        >
          <div>
            <CardStack />
            <p className="text-4xl my-2 font-bold text-center">Achievements</p>
          </div>
        </BentoGridItem>

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
