import { useContext } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../contexts/CartContext';

const CartProductList = () => {
  const { list, setList } = useContext(CartContext);

  const valueTotal = list.map((value) => value.price);
  const total = valueTotal.reduce((accumulator, currentValue) => accumulator + currentValue,0);

  return (
    <StyledCartProductList>
      <ul>
        {list.map((product) => (
          <CartProductCard
            key={product.id}
            product={product}
          />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>R$ {total.toFixed(2)}</StyledParagraph>
      </div>
      <StyledButton $buttonSize='default' $buttonStyle='gray' onClick={() => setList([])}>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;