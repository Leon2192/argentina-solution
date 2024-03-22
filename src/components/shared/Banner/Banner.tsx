import React from "react";

interface BannerProps {
  src: string;
  alt: string;
}

const Banner: React.FC<BannerProps> = ({ src, alt }) => {
  return (
    <div className="w-full m-auto overflow-hidden relative">
      <img src={src} alt={alt} className="mx-auto" />
    </div>
  );
};

export default Banner;
