import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines } from "react-sparklines";
import { UserAuth } from "../context/AuthContext";
import { db } from "../Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import SavedCoin from "./SavedCoin";

const CoinItem = ({ coin }) => {
  const [saavedCoin, setSavedCoin] = useState(false);
  const { user } = UserAuth();

  const coinPath = doc(db, "users", `${user?.email}`);
  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
        }),
      });
    } else {
      alert("Please Sign in to save a coin to your watch list");
    }
  };

  //the next three lines are supposed to fill out the stars when clicked but its not at the moment. need to revisit. its not clicking at all

  return (
    <tr className="h-[80px] border-b overflow-hidden">
      <td onClick={saveCoin}>
        {SavedCoin ? <AiFillStar /> : <AiOutlineStar />}
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className="flex items-center">
            <img
              className="w-6 mr-2 rounded-full"
              src={coin.image}
              alt={coin.id}
            />
            <p className="hidden sm:table-cell">{coin.name}</p>
          </div>
        </Link>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <p className="text-green-600">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-600">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="w-[180px] hidden md:table-cell">
        ${coin.total_volume.toLocaleString(2)}
      </td>
      <td className="w-[180px] sm:table-cell">
        ${coin.market_cap.toLocaleString(2)}
      </td>
      <td>{coin.ath_change_percentage}</td>
    </tr>
  );
};

export default CoinItem;
