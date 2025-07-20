import React from "react";

interface IllustrationProps {
  type:
    | "empty-basket"
    | "loading"
    | "success"
    | "wine-bottle"
    | "wine-glass"
    | "grape-cluster";
  width?: number;
  height?: number;
  className?: string;
}

export const Illustration: React.FC<IllustrationProps> = ({
  type,
  width = 200,
  height = 200,
  className,
}) => {
  const getImageSrc = () => {
    switch (type) {
      case "empty-basket":
        return "/images/empty-basket.svg";
      case "loading":
        return "/images/loading-wine.svg";
      case "success":
        return "/images/success-checkout.svg";
      case "wine-bottle":
        return "/images/wine-bottle-icon.svg";
      case "wine-glass":
        return "/images/wine-glass-icon.svg";
      case "grape-cluster":
        return "/images/grape-cluster-icon.svg";
      default:
        return "/images/empty-basket.svg";
    }
  };

  return (
    <img
      src={getImageSrc()}
      alt={`${type} illustration`}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Illustration;
