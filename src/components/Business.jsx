import Businesscomponent from "@/components/Businesscomponent"
const Business = () => {
    return (
        <div className="px-12 md:px-[250px] bg-gray-100 pt-[450px] md:pt-[50px] pb-[20px] flex flex-col">
            <p className='font-bold text-lg'>For Your Business</p>
            <div className="flex flex-col gap-2 mt-4">
                <Businesscomponent text="Financial Modelling" />
                <Businesscomponent text="Pitch deck" />
                <Businesscomponent text="Term sheet drafting & Shareholders agreement" />
                <Businesscomponent text="End to End to Accounting & Payroll for Startups & other companies" />
                <Businesscomponent text="GST, Income tax returns filing" />
                <Businesscomponent text="ROC filing & compliances" />
                <Businesscomponent text="Book keeping services" />
                <Businesscomponent text="CFO services" />
                <Businesscomponent text="Startup registration" />
                <Businesscomponent text="Tax & Business conslutancy" />
            </div>
        </div>
    )
}

export default Business