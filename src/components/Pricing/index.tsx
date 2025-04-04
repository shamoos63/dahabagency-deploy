"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import { pricingData } from "@/stripe/pricingData";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Pricing Table"
            title="Our Pricing Plan"
            paragraph="Here you can see some of our availble plans, we are so flexiable, we can do whatever you ask for, but here are some standard plans"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}     
        </div>
       
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Need other services?"
            title="Feel free to contact us about any other of our 
            services to get more information about it."
            paragraph=""
            center
          />
        </div>      
      </div>
    </section>
  );
};

export default Pricing;
