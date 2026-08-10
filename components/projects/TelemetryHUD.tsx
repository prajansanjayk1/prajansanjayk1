"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Activity, Zap, Thermometer, Gauge, Clock } from "lucide-react";

export function TelemetryHUD() {
  const [healthIndex, setHealthIndex] = useState(94.8);
  const [cycle, setCycle] = useState(287);
  const [temp, setTemp] = useState(1247);
  const [pressure, setPressure] = useState(15.4);
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM] Loading telemetry stream...",
    "[TWIN] Engine state synchronized",
    "[ML] Running LSTM degradation model...",
    "[PREDICTION] Health index: 94.8% — nominal",
  ]);

  useEffect(() => {
    // Subtle animations to simulate live telemetry
    const interval = setInterval(() => {
      setHealthIndex((prev) => {
        const val = prev + (Math.random() * 0.2 - 0.1);
        return Number(val.toFixed(2));
      });
      setTemp((prev) => {
        const val = prev + (Math.random() * 4 - 2);
        return Number(val.toFixed(0));
      });
      setPressure((prev) => {
        const val = prev + (Math.random() * 0.2 - 0.1);
        return Number(val.toFixed(2));
      });
    }, 2000);

    const cycleInterval = setInterval(() => {
      setCycle((prev) => prev + 1);
      
      setLogs((prevLogs) => {
        const newLogs = [...prevLogs, `[SENSOR] Turbine inlet temperature stable at ${temp}°C`, `[ANOMALY] No anomalies detected in cycle ${cycle + 1}`];
        if (newLogs.length > 6) {
          return newLogs.slice(newLogs.length - 6);
        }
        return newLogs;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(cycleInterval);
    };
  }, [cycle, temp]);

  return (
    <div className="w-full mt-12 border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] rounded-xl overflow-hidden font-[family-name:var(--font-mono)] text-sm">
      <div className="bg-[#0f172a] border-b border-[var(--color-border-subtle)] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-cyan-400">
          <Activity className="w-4 h-4" />
          <span className="font-semibold tracking-wider text-xs">DIGITAL TWIN TELEMETRY — SIMULATION</span>
        </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Status */}
        <div className="glass-panel p-4 flex flex-col items-center justify-center border-t-2 border-t-emerald-500">
          <div className="text-[var(--color-text-subtle)] text-xs mb-2">ENGINE STATUS</div>
          <div className="text-emerald-400 font-bold text-2xl flex items-center gap-2">
            NOMINAL
          </div>
        </div>

        {/* Health */}
        <div className="glass-panel p-4 flex flex-col items-center justify-center border-t-2 border-t-cyan-500">
          <div className="text-[var(--color-text-subtle)] text-xs mb-2">HEALTH INDEX</div>
          <div className="text-cyan-400 font-bold text-3xl">
            {healthIndex.toFixed(1)}%
          </div>
        </div>

        {/* Cycle */}
        <div className="glass-panel p-4 flex flex-col items-center justify-center border-t-2 border-t-blue-500">
          <div className="text-[var(--color-text-subtle)] text-xs mb-2">CURRENT CYCLE</div>
          <div className="text-blue-400 font-bold text-3xl flex items-center gap-2">
            <Zap className="w-5 h-5" />
            {cycle}
          </div>
        </div>

        {/* Temp */}
        <div className="glass-panel p-4 flex flex-col items-center justify-center">
          <div className="text-[var(--color-text-subtle)] text-xs mb-2">TURBINE TEMP</div>
          <div className="text-amber-400 font-bold text-2xl flex items-center gap-2">
            <Thermometer className="w-5 h-5" />
            {temp}°C
          </div>
        </div>

        {/* Pressure */}
        <div className="glass-panel p-4 flex flex-col items-center justify-center">
          <div className="text-[var(--color-text-subtle)] text-xs mb-2">PRESSURE RATIO</div>
          <div className="text-violet-400 font-bold text-2xl flex items-center gap-2">
            <Gauge className="w-5 h-5" />
            {pressure.toFixed(1)}:1
          </div>
        </div>

        {/* RUL */}
        <div className="glass-panel p-4 flex flex-col items-center justify-center">
          <div className="text-[var(--color-text-subtle)] text-xs mb-2">EST. RUL</div>
          <div className="text-rose-400 font-bold text-2xl flex items-center gap-2">
            <Clock className="w-5 h-5" />
            ~12,400
          </div>
        </div>
      </div>

      {/* Terminal Logs */}
      <div className="px-4 pb-4">
        <div className="bg-[#050505] rounded-lg p-3 border border-[var(--color-border-subtle)] h-32 overflow-hidden flex flex-col justify-end">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-xs mb-1 ${
                log.includes("ANOMALY") ? "text-emerald-400" :
                log.includes("PREDICTION") ? "text-cyan-400" :
                "text-[var(--color-text-muted)]"
              }`}
            >
              {log}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
