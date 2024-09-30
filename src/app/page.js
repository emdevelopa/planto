import Image from "next/image";
import star from "../assets/Star.png";
import star2 from "../assets/Star2.png";
import RoseGold from "../assets/RoseGold.png";
import polygon from "../assets/Polygon.png";
import { FaEdit } from "next/font/google";
import TrendyPlants from "@/components/trendyPlants";
export default function Home() {
  return (
    <section>
      <main className="background w-full flex flex-col gap-[4em]">
        <div className="flex justify-between">
          {/* L H S */}
          <div className="flex flex-col w-1/2 gap-4">
            <h1 className="font-bold text-[65px]">Breath Natureal</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-8 items-center mt-4">
              <button className="px-[2em] py-3 text-[25px] rounded-md border">
                Explore
              </button>
              <div className="border rounded-[100%] p-3 flex h-fit items-center">
                <Image src={polygon} alt="play" width={30} height={0} />
              </div>
            </div>
            <div className="glass-effect p-[2em] mt-[8em] flex flex-col gap-6 w-fit">
              <div className="flex items-center gap-6">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="pic"
                  className="w-[4em] h-[4em] object-cover  rounded-[50%]"
                />
                <div>
                  <p className="font-bold">Alena patel</p>
                  <div className="flex gap-2">
                    <Image src={star} alt="star" width={15} height={0} />{" "}
                    <Image src={star} alt="star" width={15} height={0} />{" "}
                    <Image src={star} alt="star" width={15} height={0} />{" "}
                    <Image src={star} alt="star" width={15} height={0} />
                    <Image src={star2} alt="star" width={10} height={0} />
                  </div>
                </div>
              </div>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
                sed do eiusmod tempor incididunt...
              </p>
            </div>
          </div>
          {/* R H S */}

          <div className="glass-effect p-[1em] h-fit flex flex-col relative">
            {/* <div className="mt-[-6em]"> */}
            <Image
              src={RoseGold}
              alt="flower"
              className="w-[28em] h-auto  mt-[-6em]"
              width={0}
              height={0}
            />
            {/* </div> */}
            <div className="mt-[em] px-[4em]">
              <p>Trendy House Plant</p>
              <div className="flex items-center justify-between">
                {" "}
                <h3 className="text-[28px]">Calathea plant</h3>
                <p>{">"}</p>
              </div>
              <button className="border rounded-lg py-[1em] px-[2em]">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <TrendyPlants />
      </main>
    </section>
  );
}
