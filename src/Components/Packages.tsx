"use client";

import { packages } from "../lib/data";

export default function Packages() {
  return (
    <section
      id="Planes"
      className="relative py-24 bg-gray-50 text-gray-900 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Pricing plans
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-6">
            MarketingZen features that will help your company scale faster
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl shadow-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? "md:scale-105 md:shadow-2xl border-cyan-400"
                  : "bg-white"
              }`}
            >
              {/* Icon / Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                {plan.popular ? (
                  <div className="bg-cyan-500 text-white px-5 py-1 rounded-full text-xs font-bold uppercase shadow-md">
                    Most Popular
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-gray-100 rounded-full border border-gray-200 flex items-center justify-center">
                    {i === 0 && "💧"}
                    {i === 1 && "🚀"}
                    {i === 2 && "🌸"}
                  </div>
                )}
              </div>

              <div className="px-8 pt-12 pb-10 text-center flex flex-col h-full">
                {/* Title */}
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold text-gray-900">
                    ${plan.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500 text-lg font-medium">/mo</span>
                </div>

                {/* Features */}
                <ul className="text-left space-y-3 mb-10 grow">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <svg
                        className="w-5 h-5 text-green-500 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contacto"
                  className={`mt-auto w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-cyan-500 text-white hover:bg-cyan-600"
                      : "border border-gray-300 hover:border-cyan-400 hover:text-cyan-600"
                  }`}
                >
                  {plan.popular ? "Get Efficient Plan" : "Get Started"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-400 text-sm mt-16">
          All plans include unlimited support and easy upgrade anytime.
        </p>
      </div>
    </section>
  );
}
