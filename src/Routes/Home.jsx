import React from "react";
import CoinSearch from "../components/CoinSearch";
//import Trernding from "../components/Trending";

const Home = ({ coins }) => {
  return (
    <div>
      <CoinSearch coins={coins} />
      {/* <Trernding /> */}
    </div>
  );
};

export default Home;
