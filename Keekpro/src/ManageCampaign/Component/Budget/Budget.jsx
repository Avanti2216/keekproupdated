import React from "react";
import Arrow from "../Budget/Assets/arrow.svg";
import Reel from "../Budget/Assets/Reel.svg";
import Vector from "../Budget/Assets/Reel.svg";
import Video from "../Budget/Assets/video.svg";
import Credit from "../Budget/Assets/credit.svg";
import Cart from "../Budget/Assets/cart.svg";
import Warn from "../Budget/Assets/warn.svg";

const Budget = () => {
  return (
    <div className="budget" class=" bg-white ">
      <div className="hero-section">
        <div class="w-[327.39px] h-[43px] px-4 py-3 rounded-md justify-center items-start gap-2 inline-flex my-2">
          <div class="justify-start items-center flex ">
            <div class="text-neutral-800 text-base font-normal font-['Open Sans'] leading-[18.83px]">
              Campaigns
            </div>
            <div class="w-[15.70px] h-[15.70px] relative">
              <img src={Arrow} alt="" />
            </div>
          </div>
          <div class="justify-start items-center flex">
            <div class="text-neutral-800 text-base font-normal font-['Open Sans'] leading-[18.83px]">
              Add Campaign
            </div>
            <div class="w-[15.70px] h-[15.70px] relative">
              <img src={Arrow} alt="" />
            </div>
          </div>
          <div class="justify-start items-center gap-2 flex">
            <div class="flex-col justify-start items-start inline-flex">
              <div class="text-blue-600 text-base font-semibold font-['Open Sans'] leading-[18.83px]">
                Budget
              </div>
            </div>
          </div>
        </div>
        <div class="w-[1100px] h-[0px] border my-2 border-zinc-400"></div>
        <div class="w-[650px] text-black text-lg font-normal font-['Open Sans'] mx-4">
          Enter payment according to your selection:{" "}
        </div>
        <div className="card">
          <div class="w-[605px] h-20 my-2 mx-3 justify-start items-center gap-10 inline-flex">
            <div class="w-[175px] h-20 px-4 py-3 bg-blue-600 rounded-[10px] justify-center items-center gap-[18px] flex">
              <div class="w-[26px] h-[26px] relative">
                <img src={Reel} alt="" />
              </div>
              <div class="text-center text-white text-sm font-semibold font-['Open Sans'] leading-[17.50px]">
                1 x Reel
              </div>
            </div>
            <div class="w-[175px] h-20 px-4 py-3 bg-blue-600 rounded-[10px] justify-center items-center gap-[18px] flex">
              <div class="w-[26px] h-[26px] relative">
                <img src={Vector} alt="" />
              </div>
              <div class="text-center text-white text-sm font-semibold font-['Open Sans'] leading-[17.50px]">
                1 x Image
              </div>
            </div>
            <div class="w-[175px] h-20 px-4 py-3 bg-indigo-300 rounded-[10px] justify-center items-center gap-[18px] flex">
              <div class="w-[26px] h-[26px] relative">
                <img src={Video} alt="" />
              </div>
              <div class="text-center text-white text-sm font-semibold font-['Open Sans'] leading-[17.50px]">
                0 x Story
              </div>
            </div>
          </div>
        </div>
        <div className="offering">
          <div class="w-[400px] mx-4  my-2 text-black text-lg font-normal font-['Open Sans']">
            Select offering
          </div>
          <div className="card" class="mx-4">
            <div class="w-[400px] h-40 justify-start items-center gap-10 inline-flex">
              <div class="w-[180px] h-40 px-4 py-3 bg-indigo-50 rounded-[10px] border border-indigo-600 flex-col justify-center items-center gap-2 inline-flex">
                <div class="w-8 h-8 justify-center items-center inline-flex">
                  <div class="w-8 h-8 relative flex-col justify-start items-start flex">
                    <img src={Credit} alt="" />
                  </div>
                </div>
                <div class="self-stretch text-center text-black text-sm font-medium font-['Inter'] leading-[17.50px]">
                  Payment
                </div>
              </div>
              <div class="w-[180px] h-40 px-4 py-3 bg-neutral-100 rounded-[10px] flex-col justify-center items-center gap-2 inline-flex">
                <div class="w-8 h-8 justify-center items-center inline-flex">
                  <div class="w-8 h-8 relative flex-col justify-start items-start flex">
                    <img src={Cart} alt="" />
                  </div>
                </div>
                <div class="self-stretch text-center text-black text-sm font-medium font-['Inter'] leading-[17.50px]">
                  Product
                </div>
              </div>
            </div>
          </div>
          <div className="pills" class="my-3 mx-4">
            <div class="w-[398px] h-10 justify-start items-center gap-10 inline-flex">
              <div class="grow shrink basis-0 h-10 px-6 rounded-lg border border-neutral-700 justify-start items-center gap-3 flex">
                <div class="w-[18px] h-[18px] bg-zinc-400 rounded-full"></div>
                <div class="text-center text-neutral-700 text-sm font-semibold font-['Open Sans'] leading-[17.50px]">
                  Fixed
                </div>
              </div>
              <div class="grow shrink basis-0 h-10 px-6 bg-indigo-50 rounded-lg border border-indigo-600 justify-start items-center gap-3 flex">
                <div class="w-[18px] h-[18px] bg-indigo-600 rounded-full"></div>
                <div class="text-center text-neutral-700 text-sm font-semibold font-['Open Sans'] leading-[17.50px]">
                  Negotiable
                </div>
              </div>
            </div>
          </div>
          <div className="price" mx-2>
            <div class="w-[400px] text-black text-lg font-normal font-['Open Sans'] my-3 mx-3">
              Enter Amount
            </div>
            <div class="w-[626.69px] h-1 bg-zinc-300 rounded mx-2"></div>
            <div class="w-[690px] h-[22px] justify-between items-center inline-flex">
              <div class="w-6 text-neutral-700 text-base font-normal font-['Open Sans']">
                $0
              </div>
              <div class="w-[54px] text-black text-lg font-normal font-['Open Sans']">
                $4500
              </div>
              <div class="w-[95px] text-neutral-700 text-base font-normal font-['Open Sans']">
                $100000+
              </div>
            </div>
          </div>
          <div className="amount" class="mx-2 my-6">
            <div class="w-[641.77px] h-[48.19px] justify-start items-center gap-[11px] inline-flex">
              <div class="w-[301.35px] h-12 px-6 rounded-lg border border-neutral-700 justify-start items-center gap-3 flex">
                <div class="text-center text-zinc-500 text-base font-normal font-['Open Sans'] leading-tight">
                  $
                </div>
                <div class="text-center text-zinc-500 text-base font-normal font-['Open Sans'] leading-tight">
                  Min. Amount
                </div>
              </div>
              <div class="text-zinc-600 text-sm font-normal font-['Open Sans']">
                To
              </div>
              <div class="w-[301.35px] h-12 px-6 rounded-lg border border-neutral-700 justify-start items-center gap-3 flex">
                <div class="text-center text-zinc-500 text-base font-normal font-['Open Sans'] leading-tight">
                  $
                </div>
                <div class="text-center text-zinc-500 text-base font-normal font-['Open Sans'] leading-tight">
                  Max. Amount
                </div>
              </div>
            </div>
          </div>
          <div className="low " class="mx-2">
            <div class="w-[266.62px] h-[18.15px] justify-start items-center gap-2 inline-flex">
              <div class="w-[17.61px] h-4 relative">
                <img src={Warn} alt="" />
              </div>
              <div class="text-center">
                <span class="text-red-500 text-sm font-normal font-['Open Sans'] leading-[17.50px]">
                  Low balance in your wallet.{" "}
                </span>
                <span class="text-red-500 text-sm font-bold font-['Open Sans'] underline leading-[17.50px]">
                  Add now
                </span>
              </div>
            </div>
          </div>
          <div className="buttons inline-flex mx-2 my-4"> 
            <div class="w-[180px] h-10 px-4 rounded border border-indigo-600 justify-center items-center gap-2 inline-flex">
              <div class="text-center text-indigo-600 text-base font-normal font-['Open Sans'] leading-none">
                Back
              </div>
            </div>
            <div className="btn mx-60 gap-4 inline-flex">
            <div class="w-[180px] h-10 px-4 bg-indigo-600 rounded justify-center items-center gap-2 inline-flex ">
              <div class="text-center text-white text-base font-normal font-['Open Sans'] leading-none mx-10">
                Save
              </div>
            </div>
            <div class="w-[214px] h-10 px-4 bg-indigo-600 rounded justify-center items-center gap-2 inline-flex">
              <div class="text-center text-white text-base font-normal font-['Open Sans'] leading-none">
                Next
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
