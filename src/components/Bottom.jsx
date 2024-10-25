import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
const Bottom = () => {
    return (
        <div className="flex flex-col md:flex-row pl-[50px] md:pl-[250px] gap-8 md:gap-0 pr-[30px] w-full bg-gray-100">
            <div className=" W-1/2 h-full flex flex-col  mt-[40px] gap-8 ">
                <div className="text-5xl font-semibold">
                    <p>
                        What you need <br />
                        to know

                    </p>
                </div>
                <p>
                    With Our app, Developed by Tax Experts, We Successfully <br />help people every year.
                </p>
                <div className="flex flex-row bg-custom-green w-[190px] py-1 pl-4 gap-2 rounded-full  border-2 border-white shadow-xl">
                    <p className="font-semibold">Start now for free</p>
                    <Image src="/images/nexts.png" alt="next" height={30} width={30} />
                </div>
            </div>
            <div className="pl-0 md:pl-[100px] w-[400px] md:w-1/2 ">
                <Accordion type="single" collapsible >
                    <AccordionItem value="item-1" className="mb-2 bg-white">
                        <AccordionTrigger>What is Savemytaxes.in ?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="mb-2 bg-white">
                        <AccordionTrigger>How SaveMytaxes.in Work ?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="mb-2 bg-white">
                        <AccordionTrigger>How Much does Savemytaxes.in Cost ?</AccordionTrigger>
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
        </div>
    )
}

export default Bottom