import Image from "next/image";
const Choose = () => {
    return (
        <div className=" w-[485px] md:w-full h-[350px] md:h-[450px] flex flex-col ">
            <div className="flex flex-row  mx-0 md:mx-[250px] ">
                <div className="W-1/2 h-[300px] mt-[40px] hidden md:block ">
                    <Image
                        src="/images/OBJECTS.png"
                        width={380}
                        height={380}
                        alt="question mark"

                    />
                </div>
                <div className=" W-1/2 h-full flex flex-col mx-[30px] md:ml-[140px] mt-[40px] gap-8">
                    <div className="text-5xl font-semibold">
                        <p>
                            Why choose <br />
                            savemytaxes.in<span className="bg-lime-200 py-1px-1">
                                over
                            </span>
                            <br /> others?
                        </p>
                    </div>
                    <p>
                        To simplyfy taxation and provide affordable solutions,
                        <br />
                        alleviating the stress and complexities associated with taxes <br />
                        for our clients.
                    </p>
                    <div className="flex flex-row bg-custom-green w-[190px] py-1 pl-4 gap-2 rounded-full  border-2 border-white shadow-xl">
                        <p className="font-semibold">Start now for free</p>
                        <Image src="/images/nexts.png" alt="next" height={30} width={30} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;
