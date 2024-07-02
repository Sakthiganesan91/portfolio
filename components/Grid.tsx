import { gridItems } from "@/data/index";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { CardStack } from "./ui/card-stack";

function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        <BentoGridItem
          id={1}
          title={"My Achievements in College"}
          description={""}
          className={
            "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] p-4"
          }
        >
          <CardStack />
        </BentoGridItem>
      </BentoGrid>
    </section>
  );
}

export default Grid;
