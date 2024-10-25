import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { GrFormNext } from "react-icons/gr";
import Waterdrop from "./Waterdrop";

const Hero = () => {
    return (
        <div className='flex flex-col  items-center h-[1550px] md:h-full bg-custom-green relative  overflow-hidden '>
            <div className="absolute right-[1140px] bottom-[220px]">
                <Waterdrop />
            </div>
            <div className="absolute left-[1140px] top-[220px]">
                <Waterdrop />
            </div>
            <div className="text-4xl text-text-color flex flex-col items-center py-4">
                <p>Your Trusted Partner for </p>
                <span className="font-bold">Tax & Compliance</span>
            </div>
            <div className="flex relative ">
                <input className="w-[350px] md:w-[450px] h-[35px] rounded-lg pl-8 pb-1" placeholder="Search for..." />
                <CiSearch className="absolute right-5 top-[5px] text-2xl text-slate-400 " />
            </div>
            <div className="py-4 px-[70px]  text-dark-gray-transparent ">
                Focus on your growth while we handle your tax andcompliance on time.
            </div>
            <div className="bg-white gap-x-[50px] p-1 flex-wrap flex md:flex-row w-[390px] md:w-[1015px] h-[270px] md:h-[90px] rounded-xl overflow-hidden  z-30">
                <div className="bg-light-gray my-2 mx-2 rounded-xl p-3 w-[150px]">
                    <p className="font-semibold">1000 +</p>
                    <p className="text-dark-gray-transparent">Happy Customers</p>
                </div>
                <div className="bg-light-gray my-2  rounded-xl p-3 w-[150px]">
                    <p className="font-semibold">100 +</p>
                    <p className="text-dark-gray-transparent">Advance Tax</p>
                </div>
                <div className="bg-light-gray my-2 mx-2 rounded-xl p-3 w-[150px]">
                    <p className="font-semibold">1000 +</p>
                    <p className="text-dark-gray-transparent">Consultation</p>
                </div>
                <div className="bg-light-gray my-2 rounded-xl p-3 w-[150px]">
                    <p className="font-semibold">150 +</p>
                    <p className="text-dark-gray-transparent">GST Filling</p>
                </div>
                <div className="bg-light-gray flex my-2 mx-2 rounded-xl ">
                    <div className="w-[70px] h-[50px] border-r-2 border-slate-400 mt-3 px-2     ">
                        <Image src="/images/google.png" alt="google" width={60} height={60} />
                    </div>
                    <div className="flex flex-col py-2 px-4">
                        <div className="font-semibold">
                            Google Reviews
                        </div>
                        <div className="mt-1 ">
                            <div className="flex w-[265px] gap-[2px]">

                                <div className="flex gap-1">
                                    <Image src="/images/star.png" width={20} height={20} alt="star" />
                                    <Image src="/images/star.png" width={20} height={20} alt="star" />
                                    <Image src="/images/star.png" width={20} height={20} alt="star" />
                                    <Image src="/images/star.png" width={20} height={20} alt="star" />
                                    <Image src="/images/halfstar.png" width={20} height={20} alt="star" />
                                </div>
                                <div className="w-[50px] h-[25px]  border-slate-400 border-r-2">4.4/5</div>
                                <p className="ml-2">16k+ Happy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-[350px] h-[1000px] md:w-[1015px] md:h-[270px] flex flex-col md:flex-row  rounded-xl mt-6 mb-6 ">
                <div className="w-full md:w-1/3 h-full bg-white  rounded-xl flex flex-col  items-center mb-4">
                    <div className="mt-16">
                        <Image src="/images/advancedtax.png" alt="advanced" width={40} height={40} />
                    </div>
                    <p className="mt-4 font-bold text-xl">Advanced Tax</p>
                    <p className="mt-4 text-dark-gray-transparent">Tax structures, planning, and<br /><span className="pl-6">compliance overview</span> </p>
                    <div className="flex mt-4 w-[180px] border-t-2 border-slate-100 justify-center items-center gap-2 text-dark-gray-transparent">
                        <p >Buy Now</p>
                        <GrFormNext className="mt-1" />

                    </div>
                </div>
                <div className="w-full md:w-1/3 h-full bg-white  rounded-xl mx-0 md:mx-8  flex flex-col  items-center mb-4">
                    <div className="h-[35px] w-[220px] rounded-b-xl bg-gradient-to-b from-[#4E6F1F] to-[#96D43B] text-white font-bold items-center justify-center flex flex-row ">
                        <p>Most Popular</p>
                    </div>
                    <div className="mt-7">
                        <Image src="/images/consultation.png" alt="advanced" width={40} height={40} />
                    </div>
                    <p className="mt-4 font-bold text-xl">Consultation</p>
                    <p className="mt-4 text-dark-gray-transparent">Professional advice for better<br /><span className="pl-6">decisions and outcomes</span> </p>
                    <div className="flex mt-4 w-[180px] border-t-2 border-slate-100 justify-center items-center gap-2 text-dark-gray-transparent">
                        <p >Buy Now</p>
                        <GrFormNext className="mt-1" />

                    </div>
                </div>
                <div className="w-full md:w-1/3 h-full bg-white  rounded-xl flex flex-col  items-center mb-4 z-30">

                    <div className="mt-16">
                        <Image src="/images/GST filing.png" alt="advanced" width={40} height={40} />
                    </div>
                    <p className="mt-4 font-bold text-xl">GST Filing</p>
                    <p className="mt-4 text-dark-gray-transparent "><span className="pl-8">Accurate GST filing for</span><br /><span >compliance and financial clarity</span> </p>
                    <div className="flex mt-4 w-[180px] border-t-2 border-slate-100 justify-center items-center gap-2 text-dark-gray-transparent">
                        <p >Buy Now</p>
                        <GrFormNext className="mt-1" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero