import React from "react";
import RoseGold from "../assets/rose.png";
import Image from "next/image";

const TrendyPlants = () => {
  return (
    <section className="flex flex-col">
      <h1 className=" font-bold text-[3em] text-center mb-[1em]">
        Our Trendy plants
      </h1>
      <main className="glass-effect p-[4em] border flex justify-between mb-[6em]">
        <Image
          src={RoseGold}
          alt="flower"
          className="w-[30em] h-auto  mt-[-10em]"
          width={0}
          height={0}
        />
        <div className="flex flex-col gap-4 w-1/2">
          <h1 className="font-bold text-[28px]">For Small Decs Ai Plant</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <p>$5,999</p>

          <div>
            <button>Explore</button>
            <button>bag</button>
          </div>
        </div>
      </main>
      <main className="glass-effect p-[4em] border flex justify-between flex-row-reverse">
        <Image
          src={RoseGold}
          alt="flower"
          className="w-[30em] h-auto  mt-[-10em]"
          width={0}
          height={0}
        />
        <div className="flex flex-col gap-4 w-1/2">
          <h1 className="font-bold text-[28px]">For Small Decs Ai Plant</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <p>$5,999</p>

          <div>
            <button>Explore</button>
            <button>bag</button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default TrendyPlants;
