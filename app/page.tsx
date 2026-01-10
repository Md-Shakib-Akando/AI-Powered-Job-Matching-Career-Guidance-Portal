import Extra from "./Components/Extra/page";

import ForCE from "./Components/ForCE/page";
import Banner from "./Components/hero/page";
import HowToMatch from "./Components/HowToMatch/page";
import SmartMatch from "./Components/SmartMatch/page";


export default function Home() {
  return (
    <>
      <Banner></Banner>
      <HowToMatch></HowToMatch>
      <ForCE></ForCE>
      <SmartMatch></SmartMatch>
      <Extra></Extra>

    </>
  );
}
