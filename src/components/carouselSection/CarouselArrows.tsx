import { Image } from "@chakra-ui/react";

interface PropsType {
  className?;
  style?;
  onClick?;
}

export const NextArrow = ({ className, style, onClick }: PropsType) => (
  <div
    className={className}
    style={{
      ...style,
      display: "block",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      right: "-1rem",
      top: "50%",
    }}
    onClick={onClick}
  >
    <Image src="/slide-arrow-next.svg" alt="" />
  </div>
);

export const PrevArrow = ({ className, style, onClick }: PropsType) => (
  <div
    className={className}
    style={{
      ...style,
      display: "block",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      left: "-1rem",
      zIndex: 10,
      top: "50%",
    }}
    onClick={onClick}
  >
    <Image src="/slide-arrow-prev.svg" alt="" />
  </div>
);
