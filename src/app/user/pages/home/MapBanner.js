import React from 'react';

const MapBanner = () => {
  return (
    <div className="relative w-full lg:h-[400px] md:h-[300px] h-[200px] overflow-hidden">
      {/* Diagonal overlay */}
      <div className="absolute inset-0 w-full h-full">
      <img src="/images/banner1.png" alt="" className="h-full w-full" />
        {/* Left peach-colored section */}
        <div className="absolute top-0 left-0 w-[55%] h-full ">
          <div className="transform skew-x-2 lg:translate-x-20 md:translate-x-8 translate-x-4 lg:pt-[8rem] md:pt-[4rem] pt-[5rem]">
            <h2 className="lg:text-4xl md:text-3xl text-[12px] font-medium text-textcol lg:mb-4 md:mb-4 mb-2">
              WHERE WE ARE
              <div className="flex items-center lg:mt-2 md:mt-2 mt-0">
                <p className="lg:text-5xl md:text-4xl text-[16px] font-extrabold"> LOCATED</p>
                {/* Location pin icon */}
                <img src="/images/map.png" alt="Location Icon" className="lg:w-8 md:w-6 w-3 lg:h-10 md:h-8 h-4 lg:ml-2 md:ml-2 ml-1" />
              </div>
            </h2>
            {/* Decorative dots and line */}
            <div className="flex items-center space-x-2">
              <div className="lg:w-2 md:w-2 w-1 lg:h-2 md:h-2 h-1 rounded-full bg-textcol"></div>
              <div className="lg:w-2 md:w-2 w-1 lg:h-2 md:h-2 h-1 rounded-full bg-textcol"></div>
              <div className="lg:w-[22rem] md:w-[13rem] w-[74px] lg:h-2 md:h-2 h-1 rounded-lg bg-textcol"></div>
              <div className="lg:w-2 md:w-2 w-1 lg:h-2 md:h-2 h-1 rounded-full bg-textcol"></div>
            </div>
          </div>
        </div>

        {/* Right map section */}
        <div className="absolute top-0 right-0 w-[66%] h-full">
          {/* Map background */}
          <div className="w-full h-full ">
            {/* Location markers */}
            <div className="relative w-full h-full">
              
              {/* Bangalore Marker */}
              <div className="absolute lg:top-[70%] md:top-[70%] top-[80%] lg:left-[30%] md:left-[35%] left-[45%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <p className="lg:text-xl md:text-md text-[10px] rounded-md shadow-lg mt-2 bg-white text-black p-1 font-extrabold">Bangalore</p>
                  <img src="/images/map_marron.png" alt="Location Icon" className="lg:w-8 md:w-6 w-4 lg:h-10 md:h-8 h-5 ml-2" />
                </div>
              </div>

              {/* Pune Marker */}
              <div className="absolute lg:top-[16%] md:top-[16%] top-[8%] lg:left-[30%] md:left-[24%] left-[12%]">
                <div className="flex flex-col items-center">
                  <p className="lg:text-xl md:text-md text-[10px] rounded-md shadow-lg mt-2 bg-white text-black p-1 font-extrabold">Pune</p>
                  <div className="flex items-center ">
                    <img src="/images/map_blue.png" alt="Location Icon" className="lg:w-5 md:w-4 w-2 lg:h-6 md:h-4 h-3 mr-1" />
                    <p className="lg:text-md md:text-sm text-[8px] font-bold text-mapbg">Coming soon</p>
                  </div>
                </div>
              </div>

              {/* Delhi-NCR Marker */}
              <div className="absolute lg:top-[35%] md:top-[25%] top-[30%] lg:right-[15%] md:right-[10%] right-[10%]">
                <div className="flex flex-col items-center">
                  <p className="lg:text-xl md:text-md text-[10px] rounded-md shadow-lg mt-2 bg-white text-black p-1 font-extrabold">Delhi-NCR</p>
                  <div className="flex items-center">
                    <img src="/images/map_blue.png" alt="Location Icon" className="lg:w-5 md:w-4 w-2 lg:h-6 md:h-5 h-3 mr-1" />
                    <p className="lg:text-md md:text-sm text-[8px] font-bold text-mapbg">Coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapBanner;