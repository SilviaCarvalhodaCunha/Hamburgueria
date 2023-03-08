import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IDefaultProviderProps } from './UserContext';
import { api } from '../services/api';

export interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface ICartContext {
  products: IProducts[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchProductList: IProducts[];
  add: (currentProduct: IProducts) => void;
  removeProductList: (currentId: number) => void;
  list: IProducts[];
  setList: React.Dispatch<React.SetStateAction<IProducts[]>>;
  openDialog: () => void;
  closeDialog: () => void;
  showModal: boolean;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: IDefaultProviderProps) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const localStorageList = localStorage.getItem('@HamburgueriaKenzie');
  const [list, setList] = useState<IProducts[]>(
    localStorageList ? JSON.parse(localStorageList) : []
  );
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  const searchProductList = products.filter((product) =>
    search === ''
      ? true
      : product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
  );
  
  const token = localStorage.getItem('@TOKEN');

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      try {
        if (token !== null) {
          const response = await api.get('/products', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProducts(response.data);
        }
      } catch (error) {
        toast.error('Algo deu errado ao listar os produtos');
      }
    }
    loadProducts();
  }, [token]);

  useEffect(() => {
    localStorage.setItem('@HamburgueriaKenzie', JSON.stringify(list));
  }, [list]);

  const add = (currentProduct: IProducts) => {
    const addProductList = () => {
      if (list.some((product: IProducts) => product.id === currentProduct.id)) {
        toast.error('O produto já esta na lista');
      } else {
        setList([...list, currentProduct]);
        toast.success('Produto adicionado com sucesso');
      }
    };
    addProductList();
    setSearch('');
  };

  const removeProductList = (currentId: number) => {
    const newList = list.filter(
      (product: IProducts) => product.id !== currentId
    );
    setList(newList);
  };

  const openDialog = () => {
    setShowModal(true);
  };

  const closeDialog = () => {
    setShowModal(false);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        searchProductList,
        add,
        setSearch,
        removeProductList,
        list,
        setList,
        openDialog,
        closeDialog,
        showModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
