import Image from 'next/image'
const Taxadvice = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex mt-[60px] w-[400px] md:w-[1250px] h-[500px] md:h-[500px] ml-[50px] md:ml-[130px] gap-56 '>
                <Image src="/images/taxadvice.png" alt="taxadvice" width={550} height={550} className='hidden md:block' />
                <div className='flex flex-col mt-[30px] gap-4'>
                    <div className="flex ">
                        <Image src="/images/Group 242.png" alt="logo" width={20} height={17} />
                        <p className="ml-2 font-semibold text-xl">Savemytaxes.in</p>
                    </div>
                    <p className='text-3xl mt-[15px]'>Xpert Assist</p>
                    <p className='font-bold text-2xl'>Get Live tax advice</p>
                    <p className='font-bold text-2xl'>Add any time for $59.99 $39.99</p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            <Image src="/images/taxicon.png" alt="taxicon" width={40} height={40} />
                            <p>Speak with a real tax expert over the phone</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src="/images/taxicon.png" alt="taxicon" width={40} height={40} />
                            <p>Unlimited questions, personalized advice</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src="/images/taxicon.png" alt="taxicon" width={40} height={40} />
                            <p>Request a quick return review before filing</p>
                        </div>
                    </div>
                    <div className="flex flex-row bg-custom-green w-[130px] mt-3 py-1 pl-4 gap-2 rounded-full  border-2 border-white shadow-xl">
                        <p className="font-semibold">Get start</p>
                        <Image src="/images/nexts.png" alt="next" height={30} width={30} />
                    </div>
                </div>
            </div>
            <div className='flex mt-[30px] md:mt-[60px] w-[400px] md:w-[1250px] h-[500px] md:h-[500px] ml-[50px] md:ml-[130px] gap-56'>
                <div className='flex flex-col mt-[30px] gap-4'>
                    <div className="flex ">
                        <Image src="/images/Group 242.png" alt="logo" width={20} height={17} />
                        <p className="ml-2 font-semibold text-xl">Savemytaxes.in</p>
                    </div>
                    <p className='font-bold text-2xl mt-4'>Get a great deal for your business </p>
                    <p className='font-bold text-2xl'>taxes.</p>
                    <div className='flex flex-col '>
                        <p className='text-sm opacity-60'>Only Savemytaxes.in provides a DIY online tax filing software for small </p>
                        <p className='text-sm opacity-60'>businesses. We’ll help you maximize your credits and deductions </p>
                        <p className='text-sm opacity-60' >while backing our calculations with a 100% Accuracy Guarantee.</p>
                    </div>
                    <div className="flex flex-row bg-custom-green w-[230px] mt-3 py-1 pl-4 gap-2 rounded-full  border-2 border-white shadow-xl">
                        <p className="font-semibold">File for your business</p>
                        <Image src="/images/nexts.png" alt="next" height={30} width={30} />
                    </div>
                </div>
                <Image src="/images/greatdeal.png" alt="taxadvice" width={550} height={550} className='hidden md:block' />
            </div>
        </div>

    )
}

export default Taxadvice