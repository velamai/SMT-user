import Image from "next/image"
const FileTax = () => {
    return (
        <div className='flex flex-col items-center'>
            <p className='font-bold text-xl'>File your taxes online with confidence</p>
            <div className="h-[1200px] md:h-[380px] w-[300px] md:w-[1250px]  flex flex-col gap-6 md:gap-2 ">
                <div className="flex flex-col md:flex-row h-1/2 md:h-1/2 w-[300px] md:w-full bg-white gap-3 mt-[20px]">
                    <div className="flex flex-col w-[300px] md:w-1/3 h-1/3 md:h-full  rounded-2xl py-4 pl-4 gap-3 border-2">
                        <Image src="/images/maxrefund.png" alt="max" width={40} height={40} />
                        <p className="font-semibold">Max Refund Guarantee</p>
                        <div>
                            <p>You won&apos;t find a bigger refund with any </p>
                            <p>other tax filing software.We guarantee it.*</p>
                        </div>

                    </div>
                    <div className="flex flex-col w-[300px] md:w-1/3 h-1/3 md:h-full  rounded-2xl py-4 pl-4 gap-3 border-2">
                        <Image src="/images/addxpert.png" alt="max" width={40} height={40} />
                        <p className="font-semibold">Add Xpert Assist™</p>
                        <div>
                            <p>Get one-on-one advice from real tax experts </p>
                            <p>and a quick review before you file.*</p>
                        </div>

                    </div>
                    <div className="flex flex-col w-[300px] md:w-1/3 h-1/3 md:h-full rounded-2xl py-4 pl-4 gap-3 border-2">
                        <Image src="/images/fileyour.png" alt="max" width={40} height={40} />
                        <p className="font-semibold">File your business taxes</p>
                        <div>
                            <p>Only TaxAct provides an online bundle for </p>
                            <p>personal and business taxes. See Bundles</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col md:flex-row h-1/2 md:h-1/2 w-[200px] md:w-full bg-white gap-3">
                    <div className="flex flex-col w-[300px] md:w-1/3 h-1/3 md:h-full  rounded-2xl py-4 pl-4 gap-3 border-2">
                        <Image src="/images/dataprivacy.png" alt="max" width={40} height={40} />
                        <p className="font-semibold">Data Privacy & Security</p>
                        <div>
                            <p>Our safeguards, procedures, and practices </p>
                            <p>help keep your data safe and protected</p>
                        </div>

                    </div>
                    <div className="flex flex-col w-[300px] md:w-1/3 h-1/3 md:h-full  rounded-2xl py-4 pl-4 gap-3 border-2">
                        <Image src="/images/accuracy.png" alt="max" width={40} height={40} />
                        <p className="font-semibold">$100k Accuracy Guarantee</p>
                        <div>
                            <p>You can count on our software to be 100% </p>
                            <p>correct, backed by $100,000.*</p>
                        </div>

                    </div>
                    <div className="flex flex-col w-[300px] md:w-1/3 h-1/3 md:h-full  rounded-2xl py-4 pl-4 gap-3 border-2">
                        <Image src="/images/customercare.png" alt="max" width={40} height={40} />
                        <p className="font-semibold">Exceptional Customer Care</p>
                        <div>
                            <p>Get fast help. When you have questions,</p>
                            <p>our team is here to answer them.*</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default FileTax