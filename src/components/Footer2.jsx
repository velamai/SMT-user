import Image from "next/image"
const Footer2 = () => {
    return (
        <div className='bg-Footergreen h-[900px] md:h-[500px] w-full flex flex-col pt-8 gap-5 pl-[30px] md:pl-[250px]'>
            <div className=" flex flex-row">
                <Image src="/images/Group 242.png" alt="logo" width={30} height={30} />
                <p className="ml-3 font-semibold text-3xl text-white">Savemytaxes</p>
            </div>
            <div className="mt-5 flex flex-col md:flex-row gap-12">
                <div className="flex gap-12">
                    <div className="flex flex-col gap-5">
                        <p className="text-white font-semibold text-lg"><span className="text-3xl">&copy; </span>  Save My Taxes SE</p>
                        <div className="flex gap-2">
                            <Image src="/images/india.png" width={25} height={10} alt="India" />
                            <p className="text-white opacity-70">Save My Taxes in India</p>
                        </div>
                        <div className="flex gap-2 ">
                            <Image src="/images/germany.png" width={25} height={5} alt="germany" />
                            <p className="text-white opacity-70">Save My Taxes for Expats Germany</p>
                        </div>
                        <div className="flex gap-2">
                            <Image src="/images/Spain.png" width={25} height={5} alt="spain" />
                            <p className="text-white opacity-70">Save My Taxes in Spain</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 mt-2 ">
                        <p className="text-lg font-semibold text-white">Product</p>
                        <p className="text-white opacity-70">How it works</p>
                        <p className="text-white opacity-70">Cost</p>
                        <p className="text-white opacity-70">Expert service</p>
                        <p className="text-white opacity-70">Security</p>
                        <p className="text-white opacity-70">Privacy Policy</p>
                        <p className="text-white opacity-70">Updated cookie settings</p>
                        <p className="text-white opacity-70">User Research Privacy Policy</p>
                        <p className="text-white opacity-70">Terms and Conditions</p>
                    </div>
                </div>
                <div className="flex gap-16">
                    <div className="flex flex-col gap-5 mt-2">
                        <p className="text-white text-lg font-semibold">Pursue</p>
                        <p className="text-white opacity-70">Over</p>
                        <p className="text-white opacity-70">career</p>
                        <p className="text-white opacity-70">press</p>
                        <p className="text-white opacity-70">Overview of employer offers</p>
                        <p className="text-white opacity-70">contract</p>
                        <p className="text-white opacity-70">imprint</p>
                    </div>
                    <div className="flex flex-col gap-5 mt-2 ">
                        <p className="text-white text-lg font-semibold">Help</p>
                        <p className="text-white opacity-70">Support center</p>
                        <p className="text-white opacity-70">Tax Guide</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer2