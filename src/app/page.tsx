
import Hero from "./components/Hero";
import AdvancedAi from "./components/AdvancedAi";
import NueralCapabilities from "./components/NueralCapabil";
import Aisolutions from "./components/AiSolutions";
import ChoosePlan from "./components/ChoosePlan";
import GetInTouch from "./components/GetinTouch";




export default function Home() {
  return (
<div className="bg-black">
  <Hero/>
  <AdvancedAi/>
  <NueralCapabilities/>
  <Aisolutions/>
  <ChoosePlan/>
  <GetInTouch/>
</div>
  );
}
