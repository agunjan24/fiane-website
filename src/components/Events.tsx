"use client";

import { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { events } from "@/data/events";

export default function Events() {
  const [showPast, setShowPast] = useState(false);

  const upcomingEvents = events.filter((e) => !e.isPast);
  const pastEvents = events.filter((e) => e.isPast);
  const displayedEvents = showPast ? pastEvents : upcomingEvents;

  return (
    <section id="events" className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-saffron">
            Get Involved
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Events
          </h2>
          <div className="mt-4 flex justify-center gap-1">
            <span className="h-1 w-8 rounded-full bg-usa-red" />
            <span className="h-1 w-8 rounded-full bg-white border border-gray-200" />
            <span className="h-1 w-8 rounded-full bg-usa-blue" />
          </div>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-100">
            <button
              onClick={() => setShowPast(false)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                !showPast
                  ? "bg-usa-blue text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Upcoming ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setShowPast(true)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                showPast
                  ? "bg-usa-blue text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Past Events ({pastEvents.length})
            </button>
          </div>
        </div>

        {/* Events grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Color bar at top */}
              <div className="h-1.5 bg-gradient-to-r from-saffron via-white to-india-green" />

              <div className="p-6">
                {/* Date badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron/10 text-saffron-dark text-xs font-semibold mb-4">
                  <FaCalendarAlt className="text-[10px]" />
                  {event.date}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-usa-blue transition-colors">
                  {event.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaClock className="text-xs text-saffron" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaMapMarkerAlt className="text-xs text-usa-red" />
                    {event.location}
                  </div>
                </div>

                {event.registrationUrl && !event.isPast && (
                  <a
                    href={event.registrationUrl}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-usa-blue hover:text-usa-blue-light transition-colors"
                  >
                    Register Now
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </a>
                )}

                {event.isPast && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">
                    Completed
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
