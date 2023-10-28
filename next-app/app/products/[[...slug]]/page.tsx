import React from 'react';

interface Props {
  params: { slug: string[] };
}

// /products/grocery/dairy/milk
const ProductPage = ({ params: { slug } }: Props) => {
  return <div>ProductPage {slug}</div>;
};
export default ProductPage;
