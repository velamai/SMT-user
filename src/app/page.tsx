import Alert from "@/components/Alert";
import Bottom from "@/components/Bottom";
import Business from "@/components/Business";
import Choose from "@/components/Choose";
import Dont from "@/components/Dont";
import Footer1 from "@/components/Footer1";

import Hero from "@/components/Hero";
// Any other global styles
import { MacbookScroll } from "@/components/ui/macbook-scroll";
export default function Home() {
  return (
    <div >
      <Alert />
      <Hero />

      <MacbookScroll />

      <Choose />
      <Dont />
      <Business />
      <Bottom />
      <Footer1 />
    </div>
  );
}
