import React from "react";

const Cover = ({ name, artist, year, image }) => {
  return (
    <div className="flex flex-col flex-shrink-0 mt-5 w-32 gap-0.5">
      <img src={image} alt="" />
      <h1 className="font-medium text-sm">{name}</h1>
      <p className="font-light text-xs">{artist}</p>
      <p className="font-light text-xs">{year}</p>
    </div>
  );
};

export default Cover;
