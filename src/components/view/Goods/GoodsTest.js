import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { projGetById } from "../../../_actions/goods_actions";

import GoodsList from "./GoodsList.js";

const GoodsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

function GoodsTest() {
  const dispatch = useDispatch();

  const [Goods, setGoods] = useState("");

  useEffect(() => {
    dispatch(projGetById(6)).then((res) => {
      setGoods(res.payload);
      console.log(res.payload[0]);
    });
  }, []);

  if (!Goods) return null;

  return (
    <GoodsListBlock>
      Goods
      <GoodsList Goods={Goods[0]} />
    </GoodsListBlock>
  );
}

export default GoodsTest;
