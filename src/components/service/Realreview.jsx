import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
const Realreview = () => {
    return (
        <div className="flex flex-col">
            <div className='w-full h-[180px] bg-custom-green flex flex-col items-center'>
                <div className="flex w-[300px] gap-[2px] mt-[35px]">
                    <div className="flex gap-1">
                        <Image src="/images/star.png" width={20} height={20} alt="star" />
                        <Image src="/images/star.png" width={20} height={20} alt="star" />
                        <Image src="/images/star.png" width={20} height={20} alt="star" />
                        <Image src="/images/star.png" width={20} height={20} alt="star" />
                        <Image src="/images/halfstar.png" width={20} height={20} alt="star" />
                    </div>
                    <div className="w-[50px] h-[25px]  border-slate-400 border-r-2">4.4/5</div>
                    <p className="ml-2">22500+ Reviews</p>
                </div>
                <p className="text-2xl md:text-4xl text-darkGreen font-bold mt-[20px]">Real People. Real Reviews. Real Savings.</p>
                <p className="text-darkGreen text-sm md:text-base mt-[20px]">You don&apos;t have to take our word for it. See all reviews here</p>
            </div>
            <div className="px-[0px] md:px-[180px] flex-col justify-center items-center">
                <p className="font-bold text-3xl py-[40px] pl-[50px] md:pl-[380px]">Frequently Asked Questions</p>
                <Accordion type="single" collapsible className="px-[30px] md:px-[0px]">
                    <AccordionItem value="item-1" className="mb-2 bg-white">
                        <AccordionTrigger>What is Save My Taxes ?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="mb-2 bg-white">
                        <AccordionTrigger>How Save My Taxes Work ?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="mb-2 bg-white">
                        <AccordionTrigger>How Much does Save My Taxes Cost ?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you
                            prefer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="mb-2 bg-white">
                        <AccordionTrigger>Where Can I Find Tax tips ?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you
                            prefer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className="mb-2 bg-white">
                        <AccordionTrigger>Further Questions ?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you
                            prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="flex flex-col items-center justify-center pt-[100px]">
                <Image src="/images/dataprivacy.png" alt="data" height={40} width={40} />
                <p className="text-xl md:text-3xl font-bold mt-[30px]">Your security is a top priority, now and always.</p>
                <div className="flex flex-row bg-custom-green w-[260px] mt-3 py-1 pl-4 gap-2 rounded-full  border-2 border-white shadow-xl">
                    <p className="font-semibold">Learn more about security</p>
                    <Image src="/images/nexts.png" alt="next" height={30} width={30} />
                </div>
                <Accordion type="single" collapsible className="w-[450px] md:w-[1170px] py-[100px]" >
                    <AccordionItem value="item-1" className="mb-2 bg-white">
                        <AccordionTrigger>*Offer Details & Disclosures</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>

    )
}

export default Realreview