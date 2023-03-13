import { useContext } from "react";
import { UserContext } from "../App";

function ProductCard({ allProduct }) {
  const { data } = useContext(UserContext);
  const products = data?.data;
  console.log(allProduct);
  <>
    {products?.map((card) => {
      return (
        <article>
          <img src={card.image} alt="" />
          <p>{card.title}</p>
        </article>
      );
    })}
  </>;
}

export default ProductCard;
