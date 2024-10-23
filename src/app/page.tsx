import Alert from "@/components/Alert";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Any other global styles
import { MacbookScroll } from "@/components/ui/macbook-scroll";
export default function Home() {
  return (
    <div >
      <Header/>
      <Alert/>
      <Hero/>
       <MacbookScroll/> 
    </div>
  );
}
