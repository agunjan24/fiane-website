"use client";

import { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { events } from "@/data/events";
import ScrollReveal from "./ScrollReveal";

export default function Events() {
  const [showPast, setShowPast] = useState(false);

  const upcomingEvents = events.filter((e) => !e.isPast);
  const pastEvents = events.filter((e) => e.isPast);
  const displayedEvents = showPast ? pastEvents : upcomingEvents;

  return (
    <section id="events" className="py-28 bg-cream relative overflow-hidden">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-saffron">
            Get Involved
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 leading-tight">
            Upcoming <span className="italic text-usa-blue">Events</span>
          </h2>
        </ScrollReveal>

        {/* Toggle */}
        <ScrollReveal delay={100} className="mt-8 mb-10">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-100">
            <button
              onClick={() => setShowPast(false)}
              className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                !showPast
                  ? "bg-usa-blue text-white shadow-md"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Upcoming ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setShowPast(true)}
              className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                showPast
                  ? "bg-usa-blue text-white shadow-md"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Past ({pastEvents.length})
            </button>
          </div>
        </ScrollReveal>

        {/* Events grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedEvents.map((event, i) => (
            <ScrollReveal key={event.id} delay={i * 100}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                {/* Color accent */}
                <div className="h-1 bg-gradient-to-r from-saffron via-white to-india-green" />

                <div className="p-7">
                  {/* Date badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-saffron-light text-saffron-dark text-xs font-bold mb-4">
                    <FaCalendarAlt className="text-[10px]" />
                    {event.date}
                  </div>

                  <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 mb-3 group-hover:text-usa-blue transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2.5 text-sm text-gray-400">
                      <FaClock className="text-xs text-saffron/60" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-gray-400">
                      <FaMapMarkerAlt className="text-xs text-usa-red/60" />
                      {event.location}
                    </div>
                  </div>

                  {event.registrationUrl && !event.isPast && (
                    <a
                      href={event.registrationUrl}
                      className="inline-flex items-center gap-2 text-sm font-bold text-usa-blue hover:text-saffron transition-colors"
                    >
                      Register Now
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}

                  {event.isPast && (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gray-50 text-gray-400 text-xs font-semibold">
                      Completed
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
