import { useState } from "react";
import { Submit } from "./Submit";
import { Listing } from "./list";
import { Title } from "./Head";

export const Home = () => {
  return (
    <div className="home">
      <Title />
      <Submit />
      <Listing />
    </div>
  );
};
