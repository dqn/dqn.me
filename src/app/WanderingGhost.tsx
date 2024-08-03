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

function choice<const T>(arr: readonly T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  const item = arr[index];

  if (item === undefined) {
    throw new Error("item must not be undefined");
  }

  return item;
}

function useDisplayableWidth(ref: React.RefObject<HTMLCanvasElement>): number {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (!ref.current?.parentElement) {
        return;
      }
      const { clientWidth } = ref.current.parentElement;
      setWidth(clientWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return width;
}

type Ghost = {
  x: number;
  y: number;
  direction: "left" | "right";
  size: number;
  speed: number;
  alpha: number;
  updatedAt: number;
};

type CreateGhostParams = {
  width: number;
  height: number;
};

function createGhost({ width, height }: CreateGhostParams): Ghost {
  const direction = choice(["left", "right"]);

  return {
    x: direction === "left" ? width : 0,
    y: random(0, height),
    direction,
    size: randomInt(24, 48),
    speed: random(1.2, 3.5),
    alpha: random(0.1, 0.5),
    updatedAt: Date.now(),
  };
}

export const WanderingGhost: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const width = useDisplayableWidth(ref);

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    const canvas = ref.current;

    const height = document.documentElement.scrollHeight;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");

    if (ctx === null) {
      return;
    }

    const ghostNum = Math.floor(width / 64);
    const ghosts = Array.from(range(0, ghostNum)).map(() =>
      createGhost({ width, height }),
    );

    const img = new Image();
    img.src = "/ghost.png";

    const updateGhosts = () => {
      ghosts.forEach((ghost) => {
        const elapsed = Date.now() - ghost.updatedAt;
        const signedSpeed = (ghost.direction === "left" ? -1 : 1) * ghost.speed;
        ghost.x += signedSpeed * elapsed * 0.08;
        ghost.y += Math.sin(ghost.x * 0.03) * 3;
        ghost.updatedAt = Date.now();
      });
    };

    const drawGhosts = () => {
      ghosts.forEach((ghost) => {
        if (ghost.x < 0 - ghost.size || ghost.x > width + ghost.size) {
          Object.assign(ghost, createGhost({ width, height }));
          return;
        }

        ctx.globalAlpha = ghost.alpha;
        const { size } = ghost;

        ctx.save();
        ctx.translate(ghost.x, ghost.y);
        ctx.drawImage(img, -size / 2, -size / 2, size, size);
        ctx.restore();
      });
    };

    let handle = 0;
    const frame = () => {
      updateGhosts();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGhosts();
      handle = requestAnimationFrame(frame);
    };

    frame();

    return () => {
      cancelAnimationFrame(handle);
    };
  }, [ref, width]);

  return <canvas ref={ref} />;
};
