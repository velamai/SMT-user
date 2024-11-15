
import Image from "next/image";
import { FaTag } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
const Hero = () => {
    return (
        <div >
            <div className='bg-gradient-to-b from-[#B7F065] to-[#698A3A] h-[550px] w-full rounded-b-full  flex flex-col items-center '>
                <p className="font-bold text-4xl text-darkGreen mt-[70px]">Guaranteed Accuracy.</p>
                <p className="text-4xl text-darkGreen mt-[10px] ml-[35px] md:ml-[0px]">We put $100k behind our numbers. No one else does that.</p>
                <div className="flex w-[300px] gap-[2px] mt-[20px]">
                    <div className="flex gap-1">
                        <Image src="/images/star1.png" width={20} height={20} alt="star" />
                        <Image src="/images/star1.png" width={20} height={20} alt="star" />
                        <Image src="/images/star1.png" width={20} height={20} alt="star" />
                        <Image src="/images/star1.png" width={20} height={20} alt="star" />
                        <Image src="/images/halfstar1.png" width={20} height={20} alt="star" />
                    </div>
                    <div className="w-[50px] h-[25px]  border-slate-400 border-r-2">4.4/5</div>
                    <p className="ml-2">22500+ Reviews</p>
                </div>
                <div className="flex flex-col md:flex-row w-[500px] md:w-[1250px] h-[2200px] md:h-[450px] mt-[50px]  gap-3">
                    <div className="flex flex-col bg-white w-[300px] md:w-1/4 ml-[100px] md:ml-[0px] h-[475px] md:h-[390px] rounded-2xl pt-6  gap-5 shadow-2xl">
                        <div className="flex flex-col ml-5 gap-4 ">
                            <p className="font-bold text-xl">Professional Plan</p>
                            <div>
                                <p className="font-semibold">Based on quality income and</p>
                                <p className="font-semibold">deductions.</p>
                            </div>

                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center">
                                    <GoDotFill />
                                    <p>W-2 employees & unemployment</p></li>
                                <li className="flex items-center">
                                    <GoDotFill />
                                    <p>Student,Child Tax Credit, More</p></li>
                            </ul>
                            <p className="text-4xl font-bold">₹1899</p>


                        </div>
                        <div className="flex items-center gap-2 bg-custom-green py-2 pl-5">
                            <FaTag />
                            <p>Clear tax & Others Price ₹ 1899</p>
                        </div>
                        <div className="bg-custom-green rounded-full w-[250px] h-[40px] items-center justify-center flex flex-col mx-6 border-2 border-gray-900">
                            <p>Book now</p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white w-[300px] md:w-1/4 h-[475px] md:h-[390px] ml-[100px] md:ml-[0px] rounded-2xl pt-6  gap-5 shadow-2xl">
                        <div className="flex flex-col ml-5 gap-4 static   ">
                            <div className="h-[30px] w-[150px] absolute bg-orange-500 flex flex-col justify-center items-center rounded-full bottom-[355px] left-[525px]">
                                <p className="text-white">MOST POPULAR</p>
                            </div>
                            <p className="font-bold text-xl">Salary Plan</p>
                            <div>
                                <p className="font-semibold">Everything in Free plus</p>

                            </div>

                            <ul className="flex flex-col gap-2">
                                <li className="flex items-center">
                                    <GoDotFill />
                                    <p>Homeowner deduction</p></li>
                                <li className="flex items-center">
                                    <GoDotFill />
                                    <p>Children Expenses</p></li>
                                <li className="flex items-center">
                                    <GoDotFill />
                                    <p>Health Savings Account</p></li>
                            </ul>
                            <p className="text-4xl font-bold">₹999</p>


                        </div>
                        <div className="flex items-center gap-2 bg-custom-green py-2 pl-5">
                            <FaTag />

                            <p>Clear tax & Others Price ₹ 1899</p>
                        </div>
                        <div className="bg-custom-green rounded-full w-[250px] h-[40px] items-center justify-center flex flex-col mx-6 border-2 border-gray-900">
                            <p>Book now</p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white w-[300px] md:w-1/4  h-[475px] md:h-[390px] ml-[100px] md:ml-[0px] rounded-2xl pt-6  gap-5 shadow-2xl">
                        <div className="flex flex-col ml-5 gap-4    ">
                            <p className="font-bold text-xl">NRI Plan</p>
                            <div>
                                <p className="font-semibold">Designed for NRIs</p>
                            </div>
                            <ul className="flex flex-col gap-2">
                                <li className="flex items-center">
                                    <GoDotFill />
                                    <p>Sale of Investment/Crypto</p></li>
                                <li className="flex items-center">
                                    <GoDotFill />
                                    <p>Sale of Home</p></li>
                                <li className="flex items-center">
                                    <GoDotFill />
                                    <p>Test</p></li>
                            </ul>
                            <p className="text-4xl font-bold">₹2899</p>

                        </div>
                        <div className="flex items-center gap-2 bg-custom-green py-2 pl-5">
                            <FaTag />
                            <p>Clear tax & Others Price ₹ 1899</p>
                        </div>
                        <div className="bg-custom-green rounded-full w-[250px] h-[40px] items-center justify-center flex flex-col mx-6 border-2 border-gray-900">
                            <p>Book now</p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white w-[300px] md:w-1/4 h-[475px] md:h-[390px] ml-[100px] md:ml-[0px] rounded-2xl pt-6  gap-5 shadow-2xl">
                        <div className="flex flex-col ml-5 gap-4    ">
                            <p className="font-bold text-xl">Get a customized plan</p>
                            <div>
                                <p className="font-semibold">Everything in Premier plus:</p>
                            </div>
                            <ul className="flex flex-col gap-2">
                                <li className="flex items-center">
                                    <GoDotFill />
                                    <p>Homeowner Deduction</p></li>
                                <li className="flex items-center">
                                    <GoDotFill />
                                    <p>Childcare Expenses</p></li>
                                <li className="flex items-center">
                                    <GoDotFill />
                                    <p>Health Saving Account</p></li>
                            </ul>
                            <p className="text-4xl font-bold">₹3599</p>

                        </div>
                        <div className="flex items-center gap-2 bg-custom-green py-2 pl-5">
                            <FaTag />
                            <p>Clear tax & Others Price ₹ 1899</p>
                        </div>
                        <div className="bg-custom-green rounded-full w-[250px] h-[40px] items-center justify-center flex flex-col mx-6 border-2 border-gray-900">
                            <p>Book now</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero