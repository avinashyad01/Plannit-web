"use client";
import Footer from "@/app/components/user/footer/footer";
import Navbar from "@/app/components/user/navbar/navbar";
import Aside from "@/app/user/blogs/subblog/aside";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:mx-16 md:mx-8 mx-4 lg:py-8 md:py-6 py-4">
        <nav className="text-sm lg:mb-8 md:mb-4 mb-2">
          <span className="text-[#484848]">
            Home &gt;{" "}
            <span className="font-bold text-[#121416]">Blog Page &gt;</span>{" "}
          </span>
        </nav>
        <div className="lg:flex md:flex items-start lg:gap-[8rem] md:gap-[3rem] gap-[1rem]">
          <Aside />
          <main className="flex-1">
            <article>
              <header className="lg:mb-8 md:mb-6 mb-4">
                <div>
                  <h1 className="lg:text-4xl md:text-2xl text-xl font-bold mb-2 flex justify-between items-center">
                    Eco-Friendly Homes: <br /> The Future of Real Estate
                    <span className="font-bold text-[#212121]">Nov 29</span>
                  </h1>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>3 Mins Read</span>
                </div>
              </header>
              <div className="prose max-w-none">
                <p className="mb-4 text-[#757575] font-medium lg:text-lg md:text-sm text-[13px]">
                  The real estate industry is undergoing a significant
                  transformation as eco-friendly homes gain popularity among
                  buyers and developers alike. With increasing awareness of
                  climate change and the need for sustainable living,
                  eco-friendly homes represent not only a lifestyle choice but
                  also a critical step toward reducing environmental impact.
                </p>
                <img
                  src="/api/placeholder/800/400"
                  alt="Group of people looking at a laptop"
                  className="rounded-lg mb-8"
                />
                <h2 className="lg:text-4xl md:text-2xl text-lg font-bold lg:mb-4 md:mb-4 mb-2">
                  What are Eco-Friendly Homes?
                </h2>
                <p className="lg:mb-4 md:mb-4 mb-2 text-[#212121] font-medium lg:text-lg md:text-sm text-[13px]">
                  Eco-friendly homes are designed and built to minimize energy
                  consumption, reduce waste, and utilize sustainable materials.
                  These homes often incorporate renewable energy sources,
                  efficient water management systems, and environmentally
                  friendly construction practices.
                </p>
                <h2 className="lg:text-4xl md:text-2xl text-xl font-bold lg:mb-4 md:mb-4 mb-2">
                  Why are Eco-Friendly Homes Important?
                </h2>
                <ul className="space-y-4 mb-4">
                  <li>
                    <strong>Environmental Impact:</strong> Buildings account for
                    a significant portion of global energy use and greenhouse
                    gas emissions. Eco-friendly homes help reduce this
                    footprint.
                  </li>
                  <li>
                    <strong>Cost Savings:</strong> Energy-efficient designs and
                    renewable energy sources, like solar panels, lower utility
                    bills in the long run.
                  </li>
                  <li>
                    <strong>Healthier Living Space:</strong> Natural materials
                    and improved indoor air quality create a healthier
                    environment for occupants.
                  </li>
                  <li>
                    <strong>Future-Proof Investment:</strong> As governments and
                    societies push for greener initiatives, eco-friendly homes
                    are likely to increase in value and demand.
                  </li>
                </ul>
                <h2 className="lg:text-4xl md:text-2xl text-xl font-bold lg:mb-4 md:mb-4 mb-2">
                  Key Features of Eco-Friendly Homes
                </h2>
                <ul className="space-y-4 mb-6">
                  <li>
                    <strong>Energy Efficiency:</strong> High-performance
                    insulation, energy-efficient windows, and smart home
                    technologies help reduce energy consumption.
                  </li>
                  <li>
                    <strong>Renewable Energy:</strong> Solar panels, wind
                    turbines, and geothermal heating systems provide sustainable
                    energy solutions.
                  </li>
                  <li>
                    <strong>Water Conservation:</strong> Rainwater harvesting
                    systems, low-flow fixtures, and greywater recycling systems
                    reduce water waste.
                  </li>
                  <li>
                    <strong>Sustainable Materials:</strong> Use of bamboo,
                    reclaimed wood, and recycled steel reduces the environmental
                    impact of construction.
                  </li>
                  <li>
                    <strong>Smart Technologies:</strong> Smart thermostats,
                    energy monitors, and automated lighting systems enhance
                    efficiency and convenience.
                  </li>
                </ul>
                <h2 className="lg:text-4xl md:text-2xl text-xl font-bold lg:mb-4 md:mb-4 mb-2">
                  Steps to Transition to Eco-Friendly Living
                </h2>
                <ol className="list-decimal pl-6 space-y-4 mb-4">
                  <li>
                    <strong>Start Small:</strong> Replace traditional light
                    bulbs with LEDs and invest in energy-efficient appliances.
                  </li>
                  <li>
                    <strong>Conduct an Energy Audit:</strong> Identify areas
                    where energy is wasted and implement necessary changes.
                  </li>
                  <li>
                    <strong>Incorporate Renewable Energy:</strong> Look into
                    local or explore community renewable energy programs.
                  </li>
                  <li>
                    <strong>Upgrade Insulation:</strong> Proper insulation
                    reduces the need for excessive heating and cooling.
                  </li>
                  <li>
                    <strong>Adopt Sustainable Habits:</strong> Reduce water
                    usage, recycle waste, and prioritize eco-friendly products.
                  </li>
                </ol>
                <h2 className="lg:text-4xl md:text-2xl text-xl font-bold lg:mb-4 md:mb-4 mb-2">
                  Challenges in Adopting Eco-Friendly Homes
                </h2>
                <ul className="space-y-4 mb-4">
                  <li>
                    <strong>High Initial Costs:</strong> While the long-term
                    savings are significant, the upfront investment can be a
                    barrier for some buyers.
                  </li>
                  <li>
                    <strong>Limited Awareness:</strong> Many people are still
                    unaware of the benefits and possibilities of eco-friendly
                    homes.
                  </li>
                  <li>
                    <strong>Regulatory Hurdles:</strong> In some regions,
                    policies and incentives for green construction are still in
                    development.
                  </li>
                </ul>
                <h2 className="lg:text-4xl md:text-2xl text-lg font-bold lg:mb-4 md:mb-4 mb-2">
                  The Future of Eco-Friendly Real Estate
                </h2>
                <p className="lg:mb-4 md:mb-4 mb-2 text-[#212121] font-medium lg:text-lg md:text-sm text-[13px]">
                  As technology advances and public awareness grows, the
                  adoption of eco-friendly homes is expected to rise.
                  Governments and developers are increasingly incorporating
                  green building standards, offering incentives, and promoting
                  sustainable communities.
                </p>
                <h2 className="lg:text-4xl md:text-2xl text-lg font-bold lg:mb-4 md:mb-4 mb-2">
                  Conclusion
                </h2>
                <p className="text-[#212121] font-medium lg:text-lg md:text-sm text-[13px]">
                  Eco-friendly homes are not just a trend but a necessity for a
                  sustainable future. They offer numerous benefits, from
                  reducing environmental impact to providing healthier living
                  spaces and long-term cost savings. As the real estate industry
                  evolves, eco-friendly homes will undoubtedly play a crucial
                  role in shaping the future of housing.
                </p>
              </div>
            </article>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
