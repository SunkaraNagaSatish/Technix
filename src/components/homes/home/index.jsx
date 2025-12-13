import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import HeroSlider from "./hero-slider";
import AboutArea from "./about-area";
import FeatureArea from "./feature-area";
import ServiceArea from "./service-area";
import BrandArea from "./brand-area";
import SupportArea from "./support-area";
import SliderArea from "./slider-area";
import FaqArea from "./faq-area";
import Footer from "@/src/layout/footers/footer";
import CtaBanner from "./cta-banner";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroSlider />
        <AboutArea />
        <FeatureArea />
        <ServiceArea />

        <BrandArea />
        <SupportArea />
        <SliderArea />
        <FaqArea />
        <CtaBanner />
        <Footer />
      </main>
    </>
  );
};

export default HomeOne;
