import React from "react";
import Container from "./container";
import StatsBar from "./statsBar";
import Home_Testemonial from "./home_testimonial";
// import { home_Testimonial, Statu_Bar } from '@/data/HomeDate'
interface Section5Props {
  testimonials: any[];
  stats: any[];
  backgroundClass: string;
}

const Section5: React.FC<Section5Props> = ({
  testimonials,
  stats,
  backgroundClass,
}) => {
  return (
    <div>
      <div className={`${backgroundClass} hidden md:block`}></div>
      <div className="md:-mt-32 md:z-10 md:relative bg-[#BA0C2F] md:bg-transparent">
        <Container>
          <div className="flex md:justify-around flex-col md:flex-row  pt-20 pb-20 bg-[#BA0C2F]">
            {testimonials.map((item, i) => (
              <Home_Testemonial
                key={i}
                img_url={Object.values(item.testimonial_img)[0]}
                heading={item.testimonial_heading}
                paragraph={item.testimonial_paragraph}
              />
            ))}
          </div>
        </Container>
      </div>

      <div className="-mt-10 relative z-10 flex flex-col gap-5  pb-10 bg-[#BA0C2F] md:bg-transparent">
        <Container>
          <div className="grid md:grid-cols-4 grid-cols-2 justify-center place-items-center gap-3 px-20">
            {stats.map((item, i) => (
              <StatsBar
                key={i}
                img_url={Object.values(item.image_url)[0]}
                heading={item.heading}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Section5;
