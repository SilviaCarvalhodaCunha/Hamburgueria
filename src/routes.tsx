import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import LoginPage from './pages/LoginPage';
import { ProtectedRoutes } from './pages/ProtectedRoutes';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/shop' element={<ProtectedRoutes />}>
        <Route
          index
          element={
            <CartProvider>
              <ShopPage />
            </CartProvider>
          }
        />
      </Route>
    </Routes>
  );
}

export default Router;
