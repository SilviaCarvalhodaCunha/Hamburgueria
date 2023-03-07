import { ToastContainer } from 'react-toastify';
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from './contexts/UserContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';

const App = () => (
  <UserProvider>
    <CartProvider>
      <GlobalStyles />
      <Router />
      <ToastContainer
        position='top-right'
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </CartProvider>
  </UserProvider>
);

export default App;
