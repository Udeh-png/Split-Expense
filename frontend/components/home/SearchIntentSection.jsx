"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Home, Plane, Sparkles, Users } from "lucide-react";
import { PlayStoreButton } from "@/components/PlayStoreLink";

export default function SearchIntentSection() {
  const [settled, setSettled] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-[#030303] px-5 py-24 text-white sm:px-8 sm:py-32"
      aria-labelledby="expense-use-cases"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.035] blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/6 h-[450px] w-[450px] rounded-full bg-purple-500/[0.035] blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[600px] rounded-full bg-emerald-500/[0.025] blur-[150px]" />
      </div>

      {/* Subtle top divider hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Built for real shared spending
          </div>
          <h2
            id="expense-use-cases"
            className="font-serif-premium text-3xl font-normal leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.4rem]"
          >
            Designed for trips with <span className="italic text-cyan-400 font-serif-premium">friends</span>, flats with{" "}
            <span className="italic text-emerald-400 font-serif-premium">roommates</span>, and everyday moments.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#8A93A6] sm:text-base">
            SplitEase replaces awkward mental math, scattered notes, and chaotic WhatsApp groups with a clear record of every payment, share, and balance.
          </p>
        </motion.div>

        {/* The Three Scenario Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {/* Card 1: Trips & Vacations */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="group relative flex flex-col justify-between rounded-[26px] border border-white/[0.08] bg-[#0A0A0F]/70 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/35 hover:bg-[#0E0E16]/90 hover:shadow-[0_16px_45px_-15px_rgba(34,211,238,0.2)]"
          >
            <div>
              {/* Card Header & Icon */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                  01 // Trips & Travel
                </span>
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 transition-colors group-hover:bg-cyan-400/20">
                  <Plane className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Trip expense manager
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/50 sm:text-sm">
                Fly together, stay together, never argue over who booked the Airbnb. Split flights, fuel, food, and activities with automatic multi-currency support.
              </p>

              {/* Visual Travel Ledger Widget */}
              <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-[#061017]/90 p-4 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan-500/20 text-xs">🌴</span>
                    <span className="font-mono text-xs font-bold text-white/90">Goa Retreat · 6 friends</span>
                  </div>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-cyan-300">
                    Active
                  </span>
                </div>

                <div className="mt-3 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-white/70">
                    <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                      <span className="text-white/40">✈️</span> Flight Tickets (6)
                    </span>
                    <span className="font-semibold text-white/90">₹24,000</span>
                  </div>
                  <div className="flex items-center justify-between text-white/70">
                    <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                      <span className="text-white/40">🏡</span> Beachfront Villa
                    </span>
                    <span className="font-semibold text-white/90">₹36,000</span>
                  </div>
                  <div className="flex items-center justify-between text-white/70">
                    <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                      <span className="text-white/40">🍹</span> Sunset Shack & Food
                    </span>
                    <span className="font-semibold text-white/90">₹4,800</span>
                  </div>
                </div>

                {/* Net Settlement Bar */}
                <div className="mt-3.5 flex items-center justify-between rounded-lg border border-cyan-400/20 bg-cyan-950/40 px-2.5 py-1.5 font-mono text-[10px] text-cyan-300">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    18 bills simplified
                  </span>
                  <span className="font-bold text-white">Just 2 transfers needed</span>
                </div>
              </div>
            </div>

            {/* Feature Tags */}
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/5 pt-4 font-mono text-[10px] text-white/45">
              <span className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5">Multi-Currency</span>
              <span className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5">Offline Logs</span>
              <span className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5">QR Invite</span>
            </div>
          </motion.article>

          {/* Card 2: Flats & Roommates */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="group relative flex flex-col justify-between rounded-[26px] border border-white/[0.08] bg-[#0A0A0F]/70 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/35 hover:bg-[#0E0E16]/90 hover:shadow-[0_16px_45px_-15px_rgba(52,211,153,0.2)]"
          >
            <div>
              {/* Card Header & Icon */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                  02 // Living & Rent
                </span>
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-300 transition-colors group-hover:bg-emerald-400/20">
                  <Home className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Flat and roommate expenses
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/50 sm:text-sm">
                Keep home life peaceful. Manage rent, Wi-Fi, electricity, maid/cook, and grocery runs in one shared transparent ledger with custom ratios.
              </p>

              {/* Visual Flatmate Ledger Widget */}
              <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-[#06140e]/90 p-4 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/20 text-xs">🏢</span>
                    <span className="font-mono text-xs font-bold text-white/90">Flat 402 · 3 flatmates</span>
                  </div>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-300">
                    Due 1st
                  </span>
                </div>

                <div className="mt-3 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-white/70">
                    <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                      <span className="text-white/40">⚡</span> Power & Water Bill
                    </span>
                    <span className="font-semibold text-white/90">₹4,250</span>
                  </div>
                  <div className="flex items-center justify-between text-white/70">
                    <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                      <span className="text-white/40">📶</span> 300 Mbps Fiber Wi-Fi
                    </span>
                    <span className="font-semibold text-white/90">₹1,199</span>
                  </div>
                  <div className="flex items-center justify-between text-white/70">
                    <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                      <span className="text-white/40">🛒</span> Shared Groceries
                    </span>
                    <span className="font-semibold text-white/90">₹6,800</span>
                  </div>
                </div>

                {/* Split Status */}
                <div className="mt-3.5 flex items-center justify-between rounded-lg border border-emerald-400/20 bg-emerald-950/40 px-2.5 py-1.5 font-mono text-[10px] text-emerald-300">
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-emerald-400" />
                    3-Way Equal 33.3%
                  </span>
                  <span className="font-bold text-white">₹4,083 / person</span>
                </div>
              </div>
            </div>

            {/* Feature Tags */}
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/5 pt-4 font-mono text-[10px] text-white/45">
              <span className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5">Recurring Bills</span>
              <span className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5">Custom Shares</span>
              <span className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5">Zero Reminders</span>
            </div>
          </motion.article>

          {/* Card 3: Everyday Hangouts (With Interactive Tap-to-Settle Button!) */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.19 }}
            className="group relative flex flex-col justify-between rounded-[26px] border border-white/[0.08] bg-[#0A0A0F]/70 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/35 hover:bg-[#0E0E16]/90 hover:shadow-[0_16px_45px_-15px_rgba(168,85,247,0.2)]"
          >
            <div>
              {/* Card Header & Icon */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">
                  03 // Social & Hangouts
                </span>
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-purple-400/25 bg-purple-400/10 text-purple-300 transition-colors group-hover:bg-purple-400/20">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Everyday group splitting
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/50 sm:text-sm">
                Friday night dinners, football turf bookings, and weekend cab rides. Snap the receipt or enter a total — tap once to settle without awkward chats.
              </p>

              {/* Visual Interactive Receipt & Settlement Widget */}
              <div className="mt-6 rounded-2xl border border-purple-500/20 bg-[#12081a]/90 p-4 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-purple-500/20 text-xs">🍕</span>
                    <span className="font-mono text-xs font-bold text-white/90">Friday Feast · 4 people</span>
                  </div>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-purple-300">
                    AI Scanned
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between border-b border-white/5 pb-2 font-mono text-xs">
                  <span className="text-white/60">Total Bill</span>
                  <span className="text-xs font-bold text-white sm:text-sm">
                    ₹3,200 <span className="font-normal text-white/40">(₹800/ea)</span>
                  </span>
                </div>

                <div className="mt-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center -space-x-1.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-[9px] font-bold text-white ring-1.5 ring-black">KM</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[9px] font-bold text-white ring-1.5 ring-black">PS</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[9px] font-bold text-white ring-1.5 ring-black">AK</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white ring-1.5 ring-black">SG</span>
                  </div>
                  <span className="font-mono text-[10px] text-white/45">
                    {settled ? "4/4 Settled" : "3/4 Confirmed"}
                  </span>
                </div>

                {/* Interactive Tap-to-Settle Button */}
                <button
                  type="button"
                  onClick={() => setSettled(!settled)}
                  className={`mt-3 flex w-full items-center justify-between rounded-lg border px-3 py-2 font-mono text-xs font-bold transition-all duration-200 cursor-pointer ${
                    settled
                      ? "border-emerald-400/60 bg-emerald-500/20 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                      : "border-purple-400/40 bg-purple-500/15 text-purple-200 hover:bg-purple-500/25 hover:border-purple-400/60"
                  }`}
                >
                  <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                    {settled ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Sparkles className="h-3.5 w-3.5 text-purple-400" />}
                    {settled ? "Your Share Settled via UPI" : "Tap to Settle ₹800"}
                  </span>
                  <span className={`text-[9px] font-normal uppercase tracking-wider ${settled ? "text-emerald-400" : "text-purple-300/80"}`}>
                    {settled ? "Zero Balance ✓" : "1-Tap Settle"}
                  </span>
                </button>
              </div>
            </div>

            {/* Feature Tags */}
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/5 pt-4 font-mono text-[10px] text-white/45">
              <span className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5">AI OCR Scanner</span>
              <span className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5">UPI Settlement</span>
              <span className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5">Chat Alerts</span>
            </div>
          </motion.article>
        </div>

        {/* Bottom CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3.5 sm:mt-16"
        >
          <Link
            href="/register"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition-all hover:scale-[1.03] hover:bg-cyan-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
          >
            Start splitting for free <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <PlayStoreButton />
        </motion.div>
      </div>
    </section>
  );
}
