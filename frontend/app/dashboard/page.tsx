"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ModeToggle } from "@/components/ui/theme-toggle";
import SelectCity from "@/components/dashboard/select-city";
import SearchCity from "@/components/dashboard/forms/add-city-search";
import Profile from "@/components/dashboard/profile";
import GeneralWhetherData from "@/components/dashboard/widgets/general-whether-data";
import io from "socket.io-client";
import { useCookies } from "next-client-cookies";
import ForecastWeek from "@/components/dashboard/widgets/forecast-week";
import Chart from "@/components/dashboard/widgets/chart";
import ChartSkeleton from "@/components/skeletons/chart-skeleton";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

type City = {
  id: string;
  city: string;
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/55 pb-5">
      <Header />
      <div className="self-stretch pr-40 inline-flex justify-start items-center">
    <div className="flex-1 pt-36 inline-flex flex-col justify-start items-start gap-24">
        <div className="self-stretch pl-40 pr-12 flex flex-col justify-start items-start gap-7">
            <div className="justify-start text-stone-500 text-3xl font-medium font-['Kumbh_Sans'] leading-9">Your Journey to Tomorrow Begins Here</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-white text-7xl font-medium font-['Kumbh_Sans'] leading-[84px]">Explore the Frontiers of Artificial Intelligence</div>
                <div className="self-stretch justify-start text-zinc-500 text-lg font-normal font-['Inter'] leading-relaxed">Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</div>
            </div>
        </div>
        <div className="self-stretch pl-40 border-t border-neutral-800 inline-flex justify-start items-start gap-12">
            <div className="flex-1 py-12 inline-flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch justify-start"><span className="text-white text-4xl font-semibold font-['Inter'] leading-[60px]">300</span><span className="text-yellow-400 text-4xl font-semibold font-['Inter'] leading-[60px]">+</span></div>
                <div className="self-stretch justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">Resources available</div>
            </div>
            <div className="w-48 self-stretch origin-top-left rotate-90 outline outline-1 outline-offset-[-0.50px] outline-neutral-800"></div>
            <div className="flex-1 py-12 inline-flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch justify-start"><span className="text-white text-4xl font-semibold font-['Inter'] leading-[60px]">12k</span><span className="text-yellow-400 text-4xl font-semibold font-['Inter'] leading-[60px]">+</span></div>
                <div className="self-stretch justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">Total Downloads</div>
            </div>
            <div className="w-48 self-stretch origin-top-left rotate-90 outline outline-1 outline-offset-[-0.50px] outline-neutral-800"></div>
            <div className="flex-1 py-12 inline-flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch justify-start"><span className="text-white text-4xl font-semibold font-['Inter'] leading-[60px]">10k</span><span className="text-yellow-400 text-4xl font-semibold font-['Inter'] leading-[60px]">+</span></div>
                <div className="self-stretch justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">Active Users</div>
            </div>
        </div>
    </div>

    
</div>
      <Footer />
      </div>
  );
}
