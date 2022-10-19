import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/styles/banner.css";
import Card from "../components/Card";
import { getDestination } from "../redux/actions/destination";

export default function Banner() {
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
        loop
        nav={false}
        margin={30}
        autoWidth={false}
        items={5}
        autoplayTimeout={10000}
        autoplay={true}
      >
        {destination.data.map((item, index) => (
          <div class="item mt-5">
            <div key={index}>
              <Card
                alt={item.place}
                destination={item.place}
                country={item.country}
                src={`${item.image}`}
                totalAirlines={item.total_airline}
                price={new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(item.price)}
              />
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}
