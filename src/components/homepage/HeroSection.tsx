"use client";

import React, { useEffect, useRef } from "react";

const colour = "#12FF80";

type TimeoutId = ReturnType<typeof setTimeout> | number;

const WarpDitherCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let center: { x: number; y: number };
    let cols: number;
    let rows: number;
    let dither: ImageData[] = [];
    let expands = true;
    let length = 0;
    let mx = 0;
    let pixel: ImageData;
    let scale = 0;
    let size = 0;
    let step = 0;
    let timeout: TimeoutId | undefined;

    function draw(img: ImageData, x: number, y: number) {
      ctx.putImageData(img, x, y);
    }

    function init() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      scale = Math.round(Math.min(canvas.width, canvas.height) * 0.0025) + 4;
      size = scale * 4;
      step = 0;
      dither = [];
      expands = true;
      mx = canvas.width / 2;

      ctx.fillStyle = colour;
      ctx.fillRect(0, 0, scale, scale);
      pixel = ctx.getImageData(0, 0, scale, scale);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      cols = Math.ceil(canvas.width / size);
      rows = Math.ceil(canvas.height / size);

      center = { x: cols / 2, y: rows / 2 };

      createDither();
      warp();
    }

    function createDither() {
      const sequence = [0, 10, 2, 8, 5, 15, 7, 13, 1, 11, 3, 9, 4, 14, 6, 12];
      const sq = sequence.length / 4;

      for (let repeat = Math.ceil(Math.random() * 8); repeat >= 0; repeat--) {
        dither.push(ctx.getImageData(0, 0, size, size));
      }

      for (const num of sequence) {
        const row = Math.floor(num / sq);
        const col = num % sq;
        draw(pixel, col * scale, row * scale);
        const pattern = ctx.getImageData(0, 0, size, size);
        for (let repeat = Math.ceil(Math.random() * 4); repeat >= 0; repeat--) {
          dither.push(pattern);
          dither.unshift(pattern);
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      length = dither.length;
    }

    function warp() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let pattern: ImageData;
      for (let i = cols * rows; i >= 0; i--) {
        pattern =
          dither[
            Math.abs(
              ((step +
                center.y *
                  Math.hypot(
                    ((i % cols) - center.x) / center.y,
                    (((i / cols) | 0) - center.y) / center.y
                  )) |
                0) %
                length
            )
          ];

        const row = Math.floor(i / cols);
        const col = i % cols;
        draw(pattern, col * size, row * size);
      }

      if (expands) {
        step--;
      } else {
        step++;
      }

      const delay = 1000 / (Math.round((mx / canvas.width) * 28) + 2);
      timeout = setTimeout(warp, delay);
    }

    function invert() {
      expands = !expands;
    }

    function onMouseMove(event: MouseEvent) {
      mx = event.clientX + 1;
    }

    function onTouchMove(event: TouchEvent) {
      event.preventDefault();
      if (event.targetTouches[0]) {
        mx = event.targetTouches[0].clientX + 1;
      }
    }

    function onResize() {
      if (timeout) clearTimeout(timeout as number);
      init();
    }

    init();

    window.addEventListener("resize", onResize);

    canvas.addEventListener("mousedown", invert);
    canvas.addEventListener("mouseup", invert);
    canvas.addEventListener("touchstart", invert, { passive: false });
    canvas.addEventListener("touchend", invert, { passive: false });

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      if (timeout) clearTimeout(timeout as number);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousedown", invert);
      canvas.removeEventListener("mouseup", invert);
      canvas.removeEventListener("touchstart", invert as EventListener);
      canvas.removeEventListener("touchend", invert as EventListener);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("touchmove", onTouchMove as EventListener);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 block"
      style={{ width: "100%", height: "75%" }}
    />
  );
};

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <WarpDitherCanvas />
      <div
        className="absolute bottom-0 left-0 right-0 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 25.16%, #FFF 75.56%)",
        }}
      />
      <div className="z-10 max-w-[408px] md:max-w-[860px] text-center">
        <div className="text-4xl md:text-7xl pb-2 md:pb-5">
          Self Custody is a <span className="italic font-bold">Right*</span> Not
          a Feature.
        </div>
        <div className="text-[#1a1a1acc]">
          Accelerating self-custody infrastructure ready for the world&apos;s
          GDP.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
