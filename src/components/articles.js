import React from 'react';
import styled from 'styled-components';

const Product_Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ProductCard = styled.div`
  position: relative;
  margin: 10px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
`;

const Sale = styled.p`
  position: absolute;
  top: 0;
  right: 10px;
  border-radius: 10px;
  background-color: black;
  color: white;
  padding: 4px 8px;
`;

const Add_Cart = styled.p`
  border: 1px solid black;
  border-radius: 10px;
  width: 30%;
  padding: 15px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Product_Name = styled.h2`
display: flex;
justify-content: center
`;

const Price = styled.h3`
display: flex;
justify-content: center`;

const ProductSection = ({ products }) => {
  return (
    <Product_Container>
      {products.map((product, index) => (
        <ProductCard key={index}>
          {product.onSale && (
            <Sale>
              Sale
            </Sale>
          )}
          <img src={product.image} alt="Product" />
          <div>
            <div>
              <Product_Name>{product.name}</Product_Name>
              {product.onSale ? (
                <>
                  <Price><s>${product.originalPrice} </s>${product.salePrice}</Price>
                </>
              ) : (
                <Price>${product.price}</Price>
              )}
            </div>
          </div>
          <Add_Cart href="#!">Add to cart</Add_Cart>
        </ProductCard>
      ))}
    </Product_Container>
  );
};

export default ProductSection;
