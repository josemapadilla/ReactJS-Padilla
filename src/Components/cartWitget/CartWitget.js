import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from "../../Context/CustomContext";

const CartWitget = () => {
  const { qty } = useContext(Context);
  return (
    <>
      <p>{qty}</p>
      <ShoppingCartIcon color="primary" fontSize="large" />
    </>
  );
};

export default CartWitget
