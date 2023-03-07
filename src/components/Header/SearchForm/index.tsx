import { useContext, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { CartContext } from '../../../contexts/CartContext';

const SearchForm = () => {
  const { setSearch } = useContext(CartContext)

  const [searchValue, setSearchValue] = useState("")

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setSearch(searchValue)
      setSearchValue("")
  }

  return (
    <StyledSearchForm onSubmit={submit}>
      <input type='text' placeholder='Digitar pesquisa' value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
