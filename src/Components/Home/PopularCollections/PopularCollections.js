import React, { Fragment } from 'react';
import titleIcon from '../../../assets/images/icon/titleIcon.png'
import { PopularCollectionsData } from '../../../data/data';
import checkMark from '../../../assets/images/icon/checkMarkIcon.png'


const PopularCollections = () => {
  return (
    <Fragment>
      <section className="bg-[#1E2329] w-full overflow-x-hidden">
        <div className="max-w-[1200px] lg:mx-auto md:mx-[32px] pt-[81px] pb-[80px] font-poppins">
          <div className="flex justify-between">
            <div>
              <img src={titleIcon} alt="icon" />
              <h1 className="text-[#FFFFFF] text-[24px] md:text-[32px] font-semibold leading-[48px]">
                Popular Collections
              </h1>
            </div>
            <button className="py-[12px] px-[32px] text-white rounded-[300px] box-border border-2 border-[#F6D62E] text-md font-semibold leading-[24px]">
              Explore More
            </button>
          </div>

          {/* Card Style */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 mx-[16px] lg:mx-0 md:mx-0 lg:mt-[56px] mt-[24px] gap-y-[24px] md:mt-[40px] lg:gap-x-[21px] md:gap-x-[79px]  md:gap-y-[32px]  ">
            {PopularCollectionsData.map((data) => (
              <div
                className=""
                key={data.id}
              >
                <div className="">
                  <img
                    src={data.collection.map((img) => data.collection)}
                    alt="icon"
                  />
                </div>

                <h4 className="mt-[18px] mb-[8px] text-[#FFFFFF] text-[20px] leading-[30px] font-semibold">
                  {data.title}
                </h4>
                <div className="flex items-center">
                  <p className=" text-[#FFFFFF] text-[15px] font-semibold leading-[22.5px]">
                    By
                    <span className="text-[#3C84F7] ml-[7px]">{data.name}</span>
                  </p>
                  <img
                    className="w-[19.54px] h-[19.35px] ml-[10px]"
                    src={checkMark}
                    alt="checkMark"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PopularCollections;