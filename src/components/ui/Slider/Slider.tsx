import { useState, useEffect } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { slider } from "../../../constants";
import "./Slider.css";

const Slider = () => {
  const [current, setCurrent] = useState<number>(0);

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(slider.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (current === slider.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [current]);

  return (
    <>
      <div className="w-full m-auto overflow-hidden relative">
        <div
          className={`flex transition ease-out duration-40`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slider.map((banner, index) => {
            return <img key={index} src={banner.src} alt={banner.alt} />;
          })}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white">
          <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill />
          </button>

          <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
