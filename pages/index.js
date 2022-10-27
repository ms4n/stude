import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

function Home() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <>
      <NavBar></NavBar>
      <div className="p-8 lg:p-10 bg-gray-100">
        <div className="max-w-7xl text-center m-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="mt-8 lg:mt-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Everything you need to learn in one place
            </h1>

            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Making tech student's life easier by providing curated content
              with roadmaps and progress tracker.
            </p>

            <div className="px-12 flex lg:justify-start flex-col lg:gap-6">
              <Button className="border-gray-900 text-gray-900 hidden md:block">
                Explore
              </Button>
              <Button className="border-gray-900 bg-gray-900 text-gray-50">
                Explore
              </Button>
            </div>
          </div>

          <img className=" " src="/img/girl-laptop.png" alt="stude-logo" />
        </div>
      </div>
    </>
  );
}

export default Home;
