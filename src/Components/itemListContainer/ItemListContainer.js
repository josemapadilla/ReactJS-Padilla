import { VerticalAlignBottomOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "../itemListContainer/ItemListContainer.css";

const ItemListContainer = ({ greeting, children }) => {
  
  return (
    <div className="card">
      <h1>{greeting}</h1>
      {children}
    </div>
  );
};

export default ItemListContainer;
