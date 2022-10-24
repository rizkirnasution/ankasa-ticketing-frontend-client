import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/styles/banner.css";
import CircleCard from "../components/CircleCard";
import Tokyo from "../assets/images/tokyo.jpg";
import London from "../assets/images/london.jpg";
import Bali from "../assets/images/bali.jpg";
import Sydney from "../assets/images/sydney.jpg";
import { getDestination } from "../redux/actions/destination";

export default function BannerCircle() {
  const dispatch = useDispatch();

  const { destination } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getDestination());
    document.title = `${process.env.REACT_APP_APP_NAME} | Explore`;
    window.scrollTo(0, 0);
  }, [dispatch]);
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
        {destination.data.map((item, index) => (
          <div class="item mt-5">
            <div key={index}>
              <CircleCard src={`${item.image}`} title={item.place} />
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}
