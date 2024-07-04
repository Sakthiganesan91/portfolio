"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { GoCopilot } from "react-icons/go";
import { IoLogoReact } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

export function CardDemo() {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      <CardTitle>Tech Stack</CardTitle>
      <CardDescription>
        From Development To Deployment Everything Covered
      </CardDescription>
    </Card>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-6",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-7",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-8",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-9",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-10",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-11",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    <div className="p-8 overflow-hidden h-full relative flex flex-col items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="h-12 w-12 circle-1">
          <FaNode className="h-8 w-8 " />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <BiLogoMongodb className="h-8 w-8 dark:text-white" />
        </Container>
        <Container className="circle-3">
          <IoLogoReact className="h-8 w-8 dark:text-white" />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <RiNextjsFill className="h-8 w-8 " />
        </Container>
        <Container className="h-12 w-12 circle-5">
          <FaDocker className="h-8 w-8 " />
        </Container>
      </div>
      <div className="my-2 flex justify-center items-center gap-2 flex-row">
        <Container className="h-12 w-12 circle-6">
          <FaPython className="h-8 w-8 " />
        </Container>
        <Container className="h-12 w-12 circle-7">
          <IoLogoJavascript className="h-8 w-8 dark:text-white" />
        </Container>
        <Container className="h-12 w-12 circle-8">
          <FaJava className="h-8 w-8 dark:text-white" />
        </Container>
        <Container className="h-12 w-12 circle-9">
          <FaGitAlt className="h-8 w-8 dark:text-white" />
        </Container>
      </div>
      <div className="my-2 flex justify-center items-center gap-2 flex-row">
        <Container className="h-12 w-12 circle-10">
          <FaLinux className="h-8 w-8 " />
        </Container>
        <Container className="h-12 w-12 circle-11">
          <FaAws className="h-8 w-8 dark:text-white" />
        </Container>
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[#111537b3] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-4xl font-semibold text-gray-800 dark:text-white py-2 text-center",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm text-white dark:text-white font-semibold max-w-sm text-center",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[#6757c397] [mask-image:radial-gradient(100%_100%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        ` h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
