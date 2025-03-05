"use client"

import "@aptos-labs/aptos-bridge-widget/dist/index.css";
import Image from "next/image";
import { MultiChain } from "@aptos-labs/aptos-bridge-widget";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/*@ts-ignore*/}
        <MultiChain />
      </main>
    </div>
  );
}
