"use client";

import { useEffect, useRef, useState } from "react";

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function randomInt(min: number, max: number) {
  return Math.floor(random(min, max));
}

function* range(start: number, end: number) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

function sample<T>(arr: readonly T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  const item = arr[index];

  if (item === undefined) {
    throw new Error("unexpected undefined");
  }

  return item;
}

function useDisplayableSize(
  ref: React.RefObject<HTMLCanvasElement>,
): [number, number] {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (!ref.current?.parentElement) {
        return;
      }
      const { clientWidth, clientHeight } = ref.current.parentElement;
      setWidth(clientWidth);
      setHeight(clientHeight);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return [width, height];
}

type Ghost = {
  x: number;
  y: number;
  direction: "left" | "right";
  size: number;
  speed: number;
};

type CreateGhostParams = {
  width: number;
  height: number;
};

function createGhost({ width, height }: CreateGhostParams): Ghost {
  const direction = sample(["left", "right"] as const);

  return {
    x: direction === "left" ? width : 0,
    y: random(0, height),
    direction: direction,
    size: randomInt(24, 48),
    speed: random(1.2, 3.5),
  };
}

export const WanderingGhost: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const [width, height] = useDisplayableSize(ref);

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    const canvas = ref.current;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");

    if (ctx === null) {
      return;
    }

    const ghostNum = Math.floor(width / 64);
    const ghosts = [...range(0, ghostNum)].map(() =>
      createGhost({ width, height }),
    );

    const updateGhosts = () => {
      ghosts.forEach((ghost) => {
        ghost.x += ghost.direction === "left" ? -ghost.speed : ghost.speed;
        ghost.y += Math.sin(ghost.x * 0.03) * 3;
      });
    };

    const drawGhosts = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ghosts.forEach((ghost) => {
        if (ghost.x < 0 - ghost.size || ghost.x > width + ghost.size) {
          Object.assign(ghost, createGhost({ width, height }));
          return;
        }

        const transparency = Math.floor(Math.sin(ghost.x * 0.01) * 0x60) + 0x80;
        ctx.fillStyle = `#000000${transparency.toString(16)}`;
        ctx.font = `${ghost.size}px serif`;
        ctx.textAlign = "left";
        if (ghost.direction === "right") {
          ctx.save();
          ctx.scale(-1, 1);
          ctx.fillText("👻", -ghost.x, ghost.y);
          ctx.restore();
        } else {
          ctx.fillText("👻", ghost.x, ghost.y);
        }
      });
    };

    let handle = 0;
    const frame = () => {
      updateGhosts();
      drawGhosts();
      handle = requestAnimationFrame(frame);
    };

    frame();

    return () => {
      cancelAnimationFrame(handle);
    };
  }, [ref, width, height]);

  return <canvas ref={ref} />;
};
