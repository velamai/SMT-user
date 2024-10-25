import Image from "next/image"
const Dont = () => {
    return (
        <div className='mt-[50px] w-full h-[580px] flex flex-col bg-gray-100'>
            <div className="w-full h-[450px] md:h-1/2 pl-[50px] md:pl-[250px] bg-white mt-8 pt-4 gap-6 flex flex-col">
                <p className="text-lg font-bold ">Numbers Don&apos;t Lie!</p>
                <div className="flex flex-col md:flex-row pr-[250px] gap-7  ">
                    <div className="w-[400px] md:w-1/2 h-[125px] border-2 border-orange-500 flex flex-col gap-3 p-3 rounded-xl">
                        <p className="text-4xl font-bold">1000+ Customers</p>
                        <p>we successfully helped our clients save $15000000<br />crore in taxes during the 2023-2024 financial year</p>
                    </div>
                    <div className="w-[400px] md:w-1/2 h-[125px] border-2  border-red-500 flex flex-col gap-3 p-3 rounded-xl">
                        <p className="text-4xl font-bold">90</p>
                        <p>We touched 1000+ customer in just a month of our<br />operations</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pl-[50px] md:px-[250px] w-full h-[1000px] md:h-1/2 bg-gray-100 gap-7">
                <p className="text-lg font-bold pt-2">For you</p>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className=" w-[400px] md:w-1/3 h-full border-2 border-gray-300 p-3 rounded-xl bg-white">
                        <Image src="/images/itr filing.png" alt="itr" width={30} height={30} />
                        <p className="text-xl font-bold mt-4">ITR Filing Assistance</p>
                        <p className="text-sm mt-2 text-gray-400">Get Expert assistance in tax filing for Salaried<br /> and self-employed individuals, NRIs, Capital<br /> gains, and more.</p>
                    </div>
                    <div className="w-[400px] md:w-1/3 h-full border-2 border-gray-300 p-3 rounded-xl bg-white">
                        <Image src="/images/advanced tax filing.png" alt="itr" width={30} height={30} />
                        <p className="text-xl font-bold mt-4">Advance Tax Filing</p>
                        <p className="text-sm mt-2 text-gray-400">Efficiently manage your tax obligations by<br /> paying in advance with our streamlined <br />Advance Tax Filing service</p>
                    </div>
                    <div className="w-[400px] md:w-1/3 h-full border-2 border-gray-300 p-3 rounded-xl bg-white">
                        <Image src="/images/GST FILE.png" alt="itr" width={30} height={30} />
                        <p className="text-xl font-bold mt-4">GST Filing </p>
                        <p className="text-sm mt-2 text-gray-400">Ensure timely and accurate GST filing with<br /> our hassle-free service</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dont