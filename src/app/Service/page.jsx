import FileTax from "@/components/service/FileTax"
import Hero from "@/components/service/Hero"
import Realreview from "@/components/service/Realreview"
import Taxadvice from "@/components/service/Taxadvice"
const Service = () => {
    return (
        <div>
            <Hero />
            <div className=" mt-[1750px] md:mt-[230px]">
                <FileTax />
            </div>
            <Taxadvice />
            <Realreview />
        </div>
    )
}

export default Service