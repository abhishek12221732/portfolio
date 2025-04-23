"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
  meteorColor?: string;  // Optional: Add a prop to customize the meteor color
  tailColor?: string;    // Optional: Add a prop to customize the tail color
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
  meteorColor = "bg-gradient-to-r from-purple-600 to-pink-600", // Default color
  tailColor = "bg-gradient-to-r from-purple-500 to-transparent", // Default tail color
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration:
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
        "s",
    }));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        <span
          key={idx}
          style={{ ...style }}
          className={cn(
            "pointer-events-none absolute size-0.5 rotate-[var(--angle)] animate-meteor rounded-full",
            meteorColor, // Apply the meteor color prop
            className,
          )}
        >
          {/* Meteor Tail */}
          <div
            className={cn(
              "pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2",
              tailColor // Apply the tail color prop
            )}
          />
        </span>
      ))}
    </>
  );
};
