import React from "react";

import Hero from "./hero/Hero";
import FreeForever from "./free-forever/FreeForever";
import OpineProcess from "./opine-process/OpineProcess";
import SpeedInnovate from "./speed-innovate/SpeedInnovate";
import Founder from "./founder/Founder";
import TimeSaver from "./time-saver/TimeSaver";
import Testimonial from "./testimonial/Testimonial";
import Faqs from "./faqs/Faqs";

function Home() {
  return (
    <div>
      <Hero />
      <FreeForever />
      <OpineProcess />
      <SpeedInnovate />
      <Founder />
      <TimeSaver />
      <Testimonial />
      <Faqs />
    </div>
  );
}

export default Home;
