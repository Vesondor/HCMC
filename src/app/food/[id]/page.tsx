"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Utensils,
  ExternalLink,
  Star,
  DollarSign,
} from "lucide-react";
import { FOOD } from "@/data/itinerary";
import { notFound } from "next/navigation";

export default function FoodDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const food = FOOD.find((f) => f.id === Number(id));

  if (!food) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-orange-200">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src={food.image}
          alt={food.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent" />

        <div className="absolute top-6 left-6 md:left-12 z-20">
          <Link
            href="/?tab=food"
            className="flex items-center gap-2 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full transition-all"
          >
            <ArrowLeft size={18} />
            <span>Back to Food</span>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-orange-400 font-medium mb-2 tracking-wider uppercase text-sm">
              <Utensils size={16} />
              <span>Food & Drink</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              {food.name}
            </h1>
            <p className="text-xl text-stone-300 italic font-medium">
              {food.vietnameseName}
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-stone-100 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">
                  About
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed">
                  {food.description}
                </p>
              </div>

              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 text-orange-600 p-2 rounded-lg mt-1">
                    <Star size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Must Try</h3>
                    <p className="text-stone-700 font-medium text-lg">
                      {food.mustTry}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                <h3 className="font-bold text-stone-900 mb-4 text-lg">
                  Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-stone-400 uppercase tracking-wider font-medium mb-1">
                      Price Range
                    </div>
                    <div className="flex items-center gap-1 text-stone-700 font-medium text-lg">
                      <span className="text-green-600 font-bold">
                        {food.price}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-200">
                    <a
                      href={food.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-stone-900 text-white py-3 rounded-xl font-medium hover:bg-stone-800 transition-colors"
                    >
                      <MapPin size={18} />
                      View on Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
