"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  content: string;
  subContent: string;
  image: string;
};

export const CardStack = ({
  offset,
  scaleFactor,
}: {
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>([
    {
      id: 1,
      content: "1st Place - Proof Of Concept",
      subContent: "@ Kongu Engineering College for One Place Learning",
      image: "/trophy.png",
    },
    {
      id: 2,
      content: "1st Place - Code Debugging",
      subContent: "@ KSR College Of Technology",
      image: "/trophy.png",
    },
    {
      id: 3,
      content: "1st Place - Code Crackers",
      subContent: "@ Kongu Engineering College",
      image: "./trophy.png",
    },
  ]);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <>
            <motion.div
              key={card.id}
              className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                zIndex: cards.length - index, //  decrease z-index for the cards that are behind
              }}
            >
              <div className="font-bold text-2xl text-neutral-700 dark:text-neutral-200">
                {card.content}
              </div>
              <div className="flex justify-center">
                <img
                  height={100}
                  width={100}
                  src={card.image}
                  alt="trophy"
                  className="object-cover object-center"
                />
              </div>
              <div className="font-bold text-neutral-700 dark:text-neutral-200">
                {card.subContent}
              </div>
            </motion.div>
          </>
        );
      })}
    </div>
  );
};
