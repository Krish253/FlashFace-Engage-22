import React from "react";

// components

export default function CardProfile() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={require("assets/img/krishi.jpg")}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <br></br><br></br>
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              Krishi Agrawal
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              Jamshedpur, Jharkhand
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              Indian Institute of Technology, Kharagpur
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  Skilled in programming languages like C, JAVA, C++ and Python. Deep Learning and Machine learning enthusiast. Interested in web and app development. Currently in my 2nd year of Bachelor of Technology-BTech majoring in Electrical Engineering from Indian Institute of Technology, Kharagpur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
