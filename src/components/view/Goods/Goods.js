import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { projGetAll, projGetById } from "../../../_actions/goods_actions";
import thumbnail from "../../../images/thumbnail.jpeg";

// 굿즈 정보 받아오는 컴포넌트

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;

  padding: 50px 200px;
`;

function Goods() {
  const dispatch = useDispatch();

  const [Goods, setGoods] = useState("");

  useEffect(() => {
    dispatch(projGetAll()).then((res) => {
      setGoods(res.payload);
      console.log(res);
    });
  }, []);

  console.log(Goods);

  if (!Goods) return null;

  return (
    <Container>
      {Goods.map((Goods) => (
        <div
          key={Goods.projid}
          goods={Goods}
          style={{ "justify-content": "center" }}
        >
          {Goods.url ? (
            <img
              alt="no_image"
              src={`http://44.202.49.100:3000${Goods.url}`}
              width="300px"
              height="300px"
            />
          ) : (
            <img alt="thumbnail" src={thumbnail} />
          )}
          <br />
          {Goods.title}
          <br />
          {Goods.nickname}
          <br />
          <br />
        </div>
      ))}
    </Container>
  );
}

export default Goods;
