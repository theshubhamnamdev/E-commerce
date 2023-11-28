import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import CartContext from "../context/cart/CartContext";

const Product = ({ product }) => {
  // console.log(product)

  //destructure product
  const { id, image, category, title, price } = product;

  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="border border=[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group translate">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={()=> addToCart(product , id)}>
            <div
              className="flex justify-center items-center
           ext-white w-12 h-12 bg-red-500"
            >
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/*Category , title & Product */}
      <div>
        <div className="text-sm capitalize text-gray-500">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
    // <div className='w-full h-[300px] bg-pink-200' key={product.id}>{product.title}</div>
  );
};

export default Product;
