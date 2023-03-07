import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../contexts/CartContext';

const ProductList = () => {
  const { searchProductList } = useContext(CartContext);

  return (
    <StyledProductList>
      {searchProductList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
