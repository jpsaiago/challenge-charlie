import React from "react";

interface IconProps {
  style: string;
}

const RainMoon = ({ style }: IconProps) => {
  return (
    <svg className={style} viewBox="0 0 512 512">
      <path
        fillRule="evenodd"
        d="M223.2 485.2a26.1 26.1 0 1 0 52.2 0c0-14.5-26.1-52.3-26.1-52.3s-26.1 37.8-26.1 52.3ZM326.8 459a26.1 26.1 0 1 0 52.2 0c0-14.5-26-52.3-26-52.3s-26.2 37.8-26.2 52.3Zm-208.9-52.3a26.1 26.1 0 1 0 52.2 0c0-14.4-26-52.2-26-52.2s-26.2 37.8-26.2 52.2Z"
      />
      <path
        fillRule="evenodd"
        d="M395.7 175c3.8-2.9 7.6-5.6 11-9a98.8 98.8 0 0 0 23.3-37.4c1.7-4.5.5-9.6-3-13a12.4 12.4 0 0 0-12.9-3 74.2 74.2 0 0 1-95.3-95.2 12.5 12.5 0 0 0-15.9-16c-14.5 5.2-27 13-37.3 23.3a99.4 99.4 0 0 0-25.3 96.6A123.7 123.7 0 0 0 156 171a87.5 87.5 0 1 0-12.3 174c10.6 0 21-2 31-5.7a123.6 123.6 0 0 0 162.7 0 87.5 87.5 0 0 0 118.4-81.7c0-38.5-25.4-71-60.1-82.5ZM283.2 42.3c2-2 4.2-3.8 6.4-5.6a98.6 98.6 0 0 0 29 76.2 98.7 98.7 0 0 0 76.2 29 72.8 72.8 0 0 1-41.4 25.9 123.5 123.5 0 0 0-87.4-47 74.8 74.8 0 0 1 17.2-78.5Z"
      />
    </svg>
  );
};

export default RainMoon;
