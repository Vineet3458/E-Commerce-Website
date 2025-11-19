import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLayout from './Components/auth/layout'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'
import AdminLayout from './Components/admin-view/layout'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminFeatures from './pages/admin-view/features'
import AdminProducts from './pages/admin-view/products'
import AdminOrders from './pages/admin-view/orders'
import ShoppingLayout from './Components/shopping-view/layout'
import NotFound from './pages/not-found'
import ShoppingListing from './pages/shopping-view/listing'
import ShoppingAccount from './pages/shopping-view/account'
import ShoppingCheckout from './pages/shopping-view/checkout'
import ShoppingHome from './pages/shopping-view/home'
import CheckAuth from './Components/common/check-auth'
import UnauthPage from './pages/unauth-page'
function App() {

  const isAuthenticated = false;
  const user = null

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      {/* Common Component */}
      <h1>Header Component</h1>

      <Routes>
        <Route path = '/auth' element = {
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>}>
          <Route path = 'login' element ={<AuthLogin/>}/>
          <Route path = 'register' element ={<AuthRegister/>}/>
        </Route>

        <Route path = '/admin' element = {
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>}>
          <Route path = 'dashboard' element = { <AdminDashboard />}/>
          <Route path = 'products' element = { <AdminProducts />}/>
          <Route path = 'orders' element = { <AdminOrders />}/>
          <Route path = 'features' element = { <AdminFeatures />}/>
        </Route>

        <Route path = '/shop' element = { 
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </CheckAuth>}>
          <Route path='listing' element = {<ShoppingListing/>}/>
          <Route path='home' element = {<ShoppingHome/>}/>
          <Route path='checkout' element = {<ShoppingCheckout/>}/>
          <Route path='account' element = {<ShoppingAccount/>}/>
        </Route>

        <Route path='/unauth-page' element = {<UnauthPage />} />
        <Route path = '*' element ={ <NotFound />} />
      </Routes>
      
    </div>
  )
}

export default App
