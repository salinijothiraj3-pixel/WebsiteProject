import React from "react";
import Cardsec from "./Cardsec";
import Cardslider from "./Cardslider";
import Cardsec1 from "./Cardsec1";
import Cardslider1 from "./Cardslider1";
import Faq from "./Faq";

function Home() {
  return (
    <div>
      <Cardsec />        {/* Sarees */}
      <Cardslider />     {/* Kurtis */}
      <Cardsec1 />       {/* Western Tops */}
      <Cardslider1 />    {/* Nightwear */}
      <Faq />            {/* FAQ */}
    </div>
  );
}

export default Home;
