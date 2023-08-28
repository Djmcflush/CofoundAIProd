import { Tick } from "@components/ui/icons";
import Link from "@components/ui/link.astro";

import React from 'react';
import { Tick } from "@components/ui/icons";
import Link from "@components/ui/link";

const Pricing = ({ plan }) => (
  <div>
    <div className="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md">
      <div className="text-center">
        <h4 className="text-lg font-medium text-gray-400">{plan.name}</h4>
        <p className="mt-3 text-4xl font-bold text-black md:text-4xl">
          {
            plan.price && typeof plan.price === "object"
              ? plan.price.monthly
              : plan.price
          }
        </p>
      </div>
      <ul className="grid mt-8 text-left gap-y-4">
        {
          plan.features.map((item) => (
            <li className="flex items-start gap-3 text-gray-800">
              <Tick className="w-6 h-6" />
              <span>{item}</span>
            </li>
          ))
        }
      </ul>
      <div className="flex mt-8">
        <Link
          href={plan.button.link || "#"}
          block
          style={plan.popular ? "primary" : "outline"}>
          {plan.button.text || "Get Started"}
        </Link>
      </div>
    </div>
  </div>
);

export default Pricing;