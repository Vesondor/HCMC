"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  MapPin,
  Calendar,
  Bus,
  Hotel,
  Stethoscope,
  Utensils,
  Coffee,
  ShoppingBag,
  Landmark,
  Trees,
  Clock,
  ExternalLink,
  Navigation,
  ArrowRight,
} from "lucide-react";
import { TRIP_DETAILS, LOCATIONS, FOOD, ITINERARY } from "@/data/itinerary";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const IconMap: Record<string, React.ElementType> = {
  Bus: Bus,
  Hotel: Hotel,
  Hospital: Stethoscope,
  Utensils: Utensils,
  Museum: Landmark,
  MapPin: MapPin,
  ShoppingBag: ShoppingBag,
  Tree: Trees,
  Coffee: Coffee,
};

type TabType = "itinerary" | "locations" | "food";

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("itinerary");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "locations" || tab === "food" || tab === "itinerary") {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    router.push(`/?tab=${tab}`, { scroll: false });
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-orange-200">
      {/* Hero Section */}
      <header className="relative h-[60vh] min-h-[500px] flex items-end pb-16 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2000&auto=format&fit=crop"
            alt="Ho Chi Minh City"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent z-10" />
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 text-orange-400 font-medium mb-4 tracking-widest uppercase text-sm">
              <span className="w-8 h-[1px] bg-orange-400"></span>
              <span>Vietnam Adventure</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
              {TRIP_DETAILS.title}
            </h1>
            <div className="flex items-center gap-6 text-neutral-300 text-lg">
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-orange-400" />
                <span>{TRIP_DETAILS.dates}</span>
              </div>
              <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full" />
              <div>{TRIP_DETAILS.travelers} Travelers</div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 -mt-10 relative z-20">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/80 backdrop-blur-xl p-2 rounded-full shadow-xl border border-white/20 flex gap-2 overflow-x-auto max-w-full">
            {[
              { id: "itinerary", label: "Itinerary", icon: Calendar },
              { id: "locations", label: "Locations", icon: MapPin },
              { id: "food", label: "Food & Drink", icon: Utensils },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as TabType)}
                className={cn(
                  "flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all whitespace-nowrap text-sm md:text-base",
                  activeTab === tab.id
                    ? "bg-neutral-900 text-white shadow-lg"
                    : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
                )}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === "itinerary" && (
              <motion.div
                key="itinerary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-16"
              >
                {ITINERARY.map((day, dayIdx) => (
                  <div key={dayIdx} className="relative">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                      <div className="md:w-48 flex-shrink-0 relative">
                        <div className="sticky top-32">
                          <div className="text-6xl font-black text-neutral-200 absolute -top-10 -left-6 -z-10 select-none">
                            0{dayIdx + 1}
                          </div>
                          <h2 className="text-3xl font-bold text-neutral-900 mb-1">
                            {day.day}
                          </h2>
                          <p className="text-orange-500 font-medium text-lg">
                            {day.date}
                          </p>
                        </div>
                      </div>

                      <div className="flex-1 space-y-6">
                        {day.activities.map((activity, actIdx) => {
                          const Icon = IconMap[activity.icon] || MapPin;
                          return (
                            <div
                              key={actIdx}
                              className="group bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 flex gap-6 items-start"
                            >
                              <div className="flex-shrink-0 p-4 bg-neutral-50 text-neutral-600 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                <Icon size={24} />
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                  <h3 className="font-bold text-neutral-900 text-xl">
                                    {activity.title}
                                  </h3>
                                  <div className="text-sm font-semibold text-orange-500 bg-orange-50 px-3 py-1 rounded-full w-fit">
                                    {activity.time}
                                  </div>
                                </div>
                                <p className="text-neutral-500 leading-relaxed">
                                  {activity.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "locations" && (
              <motion.div
                key="locations"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {LOCATIONS.map((location) => (
                  <Link
                    href={`/location/${location.id}`}
                    key={location.id}
                    className="group bg-white rounded-[2rem] overflow-hidden shadow-sm border border-neutral-100 hover:shadow-2xl transition-all duration-500 block h-full flex flex-col"
                  >
                    <div className="h-64 overflow-hidden relative">
                      <Image
                        src={location.image}
                        alt={location.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-neutral-900 flex items-center gap-1.5 z-10 shadow-lg">
                        <Clock size={14} className="text-orange-500" />
                        {location.bestTime}
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-orange-600 transition-colors">
                          {location.name}
                        </h3>
                      </div>
                      <p className="text-neutral-500 mb-6 line-clamp-3 leading-relaxed flex-1">
                        {location.description}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-neutral-100 mt-auto">
                        <span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-900 transition-colors">
                          View Details
                        </span>
                        <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}

            {activeTab === "food" && (
              <motion.div
                key="food"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {FOOD.map((item) => (
                  <Link
                    href={`/food/${item.id}`}
                    key={item.id}
                    className="group bg-white rounded-[2rem] overflow-hidden shadow-sm border border-neutral-100 hover:shadow-2xl transition-all duration-500 block"
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-sm font-bold z-10">
                          {item.price}
                        </div>
                      </div>
                      <div className="p-8 md:w-3/5 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-neutral-900 mb-1 group-hover:text-orange-600 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-neutral-400 text-sm font-medium italic mb-4">
                            {item.vietnameseName}
                          </p>
                          <p className="text-neutral-500 leading-relaxed line-clamp-2 mb-6">
                            {item.description}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-orange-50 rounded-xl p-3">
                            <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
                              Must Try
                            </div>
                            <div className="text-neutral-900 font-medium">
                              {item.mustTry}
                            </div>
                          </div>

                          <div className="flex items-center justify-end gap-2 text-sm font-medium text-neutral-400 group-hover:text-neutral-900 transition-colors">
                            <span>Read More</span>
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
