import React from "react";

const Album = ({ name, artist, year, image }) => {
  return (
    <div className="flex flex-col w-40">
      <img src={image} alt="" />
      <h1 className="font-medium text-sm">{name}</h1>
      <p className="font-light text-xs">{artist}</p>
      <p className="font-light">{year}</p>
    </div>
  );
};

export default Album;
