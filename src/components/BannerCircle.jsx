import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/styles/banner.css";
import CircleCard from "../components/CircleCard";
import Tokyo from "../assets/images/tokyo.jpg";
import London from "../assets/images/london.jpg";
import Bali from "../assets/images/bali.jpg";
import Sydney from "../assets/images/sydney.jpg";

export default function BannerCircle() {
  return (
    <div className="container-banner mt-5">
      <OwlCarousel
        className="owl-theme"
        loop={false}
        nav={false}
        dots={false}
        margin={30}
        autoWidth={false}
        items={4}
        autoplayTimeout={10000}
        autoplay={true}
      >
        <div class="item mt-5">
          <CircleCard src={Tokyo} title="Tokyo" />
        </div>
        <div class="item mt-5">
          <CircleCard src={Sydney} title="Sydney" />
        </div>
        <div class="item mt-5">
          <CircleCard src={London} title="London" />
        </div>
        <div class="item mt-5">
          <CircleCard src={Bali} title="Bali" />
        </div>
        <div class="item mt-5">
          <CircleCard src={Bali} title="Bali" />
        </div>
        <div class="item mt-5">
          <CircleCard src={Bali} title="Bali" />
        </div>
        <div class="item mt-5">
          <CircleCard src={Bali} title="Bali" />
        </div>
      </OwlCarousel>
    </div>
  );
}
