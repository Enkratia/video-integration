import React from "react";
import { Metadata } from "next";

import { Youtube } from "../components";

import cs from "../scss/helpers.module.scss";

// export const metadata: Metadata = {
//   title: "",
// };

const Home: React.FC = () => {
  return (
    <main>
      <h1 className={cs.srOnly}></h1>

      <Youtube />
    </main>
  );
};

export default Home;

// **
// await new Promise((resolve) => {
//   setTimeout(() => resolve(""), 6000);
// });
