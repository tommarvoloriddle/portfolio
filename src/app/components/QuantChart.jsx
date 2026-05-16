"use client";
import React from "react";

const QuantChart = () => {
  // Simulated BESS / energy dispatch revenue curve points
  const points = [
    [0, 320], [30, 290], [60, 310], [90, 260], [120, 240],
    [150, 210], [180, 230], [210, 180], [240, 160], [270, 140],
    [300, 120], [330, 100], [360, 115], [390, 80], [420, 60],
    [450, 40], [480, 55], [500, 30],
  ];

  const toPath = (pts) =>
    pts
      .map(([x, y], i) => (i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`))
      .join(" ");

  const areaPath =
    toPath(points) + ` L 500 380 L 0 380 Z`;

  const candlesticks = [
    { x: 60, open: 310, close: 260, high: 240, low: 330 },
    { x: 140, open: 250, close: 210, high: 195, low: 270 },
    { x: 220, open: 200, close: 160, high: 145, low: 215 },
    { x: 300, open: 155, close: 115, high: 100, low: 170 },
    { x: 380, open: 110, close: 75, high: 60, low: 125 },
    { x: 460, open: 70, close: 45, high: 32, low: 80 },
  ];

  return (
    <div className="w-full max-w-[500px] mx-auto">
      <div className="rounded-2xl bg-[#181818] border border-[#33353F] p-4 shadow-xl">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs font-semibold text-[#9ca3af] uppercase tracking-widest">
            BESS Dispatch Revenue — ERCOT
          </span>
          <span className="text-xs font-bold text-green-400">+34.2%</span>
        </div>
        <svg viewBox="0 0 500 380" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[80, 160, 240, 320].map((y) => (
            <line
              key={y}
              x1="0" y1={y} x2="500" y2={y}
              stroke="#33353F" strokeWidth="1" strokeDasharray="4 4"
            />
          ))}

          {/* Y-axis labels */}
          {[
            { y: 80, label: "$320" },
            { y: 160, label: "$240" },
            { y: 240, label: "$160" },
            { y: 320, label: "$80" },
          ].map(({ y, label }) => (
            <text key={y} x="4" y={y - 4} fill="#6b7280" fontSize="10">{label}</text>
          ))}

          {/* Candlesticks */}
          {candlesticks.map(({ x, open, close, high, low }) => {
            const isGreen = close < open;
            const color = isGreen ? "#22c55e" : "#ef4444";
            const bodyTop = Math.min(open, close);
            const bodyH = Math.abs(open - close);
            return (
              <g key={x}>
                <line x1={x} y1={high} x2={x} y2={low} stroke={color} strokeWidth="1.5" />
                <rect x={x - 6} y={bodyTop} width={12} height={bodyH} fill={color} rx="1" />
              </g>
            );
          })}

          {/* Area fill */}
          <path d={areaPath} fill="url(#areaGrad)" />

          {/* Price line */}
          <path
            d={toPath(points)}
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Endpoint dot */}
          <circle cx="500" cy="30" r="5" fill="#f97316" />
          <circle cx="500" cy="30" r="9" fill="#f97316" fillOpacity="0.2" />
        </svg>

        <div className="flex justify-between mt-2 px-1">
          {["DA", "RT", "Reg-Up", "Reg-Dn", "Spin"].map((label) => (
            <span key={label} className="text-[10px] text-[#6b7280] font-medium">{label}</span>
          ))}
        </div>

        <div className="mt-3 pt-3 border-t border-[#33353F] grid grid-cols-3 gap-2 text-center">
          {[
            { label: "2GW+ BESS", sub: "ERCOT · CAISO" },
            { label: "$100M+", sub: "VaR Reduction" },
            { label: "1M+ Meters", sub: "Retail Valuation" },
          ].map(({ label, sub }) => (
            <div key={label}>
              <p className="text-white text-xs font-bold">{label}</p>
              <p className="text-[#6b7280] text-[10px]">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuantChart;
