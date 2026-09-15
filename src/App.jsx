import {Fragment} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {getToken} from "./helper/SessionHelper.jsx";
import FullscreenLoader from "./components/MasterLayout/FullscreenLoader.jsx";
import BrandCreateUpdatePage from "./pages/Brand/BrandCreateUpdatePage.jsx";
import BrandListPage from "./pages/Brand/BrandListPage.jsx";
import CategoryCreateUpdatePage from "./pages/Category/CategoryCreateUpdatePage.jsx";
import CategoryListPage from "./pages/Category/CategoryListPage.jsx";
import CustomerCreateUpdatePage from "./pages/Customer/CustomerCreateUpdatePage.jsx";
import CustomerListPage from "./pages/Customer/CustomerListPage.jsx";
import ExpenseTypeCreateUpdatePage from "./pages/ExpenseType/ExpenseTypeCreateUpdatePage.jsx";
import ExpenseTypeListPage from "./pages/ExpenseType/ExpenseTypeListPage.jsx";
import ExpenseCreateUpdatePage from "./pages/Expense/ExpenseCreateUpdatePage.jsx";
import ExpenseListPage from "./pages/Expense/ExpenseListPage.jsx";
import ProductCreateUpdatePage from "./pages/Product/ProductCreateUpdatePage.jsx";
import ProductListPage from "./pages/Product/ProductListPage.jsx";
import PurchaseCreateUpdatePage from "./pages/Purchase/PurchaseCreateUpdatePage.jsx";
import PurchaseListPage from "./pages/Purchase/PurchaseListPage.jsx";
import ReturnCreateUpdatePage from "./pages/Return/ReturnCreateUpdatePage.jsx";
import ReturnListPage from "./pages/Return/ReturnListPage.jsx";
import SalesCreateUpdatePage from "./pages/Sales/SalesCreateUpdatePage.jsx";
import SalesListPage from "./pages/Sales/SalesListPage.jsx";
import SupplierCreateUpdatePage from "./pages/Supplier/SupplierCreateUpdatePage.jsx";
import SupplierListPage from "./pages/Supplier/SupplierListPage.jsx";
import PurchaseReportPage from "./pages/Report/PurchaseReportPage.jsx";
import ReturnReportPage from "./pages/Report/ReturnReportPage.jsx";
import SaleReportPage from "./pages/Report/SaleReportPage.jsx";
import ExpenseReportPage from "./pages/Report/ExpenseReportPage.jsx";
import DashboardPage from "./pages/Dashboard/DashboardPage.jsx";
import ProfilePage from "./pages/Users/ProfilePage.jsx";
import Page404 from "./pages/NotFound/Page404.jsx";
import LoginPage from "./pages/Users/LoginPage.jsx";
import RegistrationPage from "./pages/Users/RegistrationPage.jsx";
import SendOTPPage from "./pages/Users/SendOTPPage.jsx";
import VerifyOTPPage from "./pages/Users/VerifyOTPPage.jsx";
import CreatePasswordPage from "./pages/Users/CreatePasswordPage.jsx";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
const App = () => {
  if(getToken()){
    return (
        <Fragment>
          <BrowserRouter>
            <Routes>
              <Route exact path="/BrandCreateUpdatePage" element={<BrandCreateUpdatePage />}/>
              <Route exact path="/BrandListPage" element={<BrandListPage />}/>

              <Route exact path="/CategoryCreateUpdatePage" element={<CategoryCreateUpdatePage />}/>
              <Route exact path="/CategoryListPage" element={<CategoryListPage />}/>

              <Route exact path="/CustomerCreateUpdatePage" element={<CustomerCreateUpdatePage />}/>
              <Route exact path="/CustomerListPage" element={<CustomerListPage />}/>

              <Route exact path="/ExpenseTypeCreateUpdatePage" element={<ExpenseTypeCreateUpdatePage />}/>
              <Route exact path="/ExpenseTypeListPage" element={<ExpenseTypeListPage />}/>

              <Route exact path="/ExpenseCreateUpdatePage" element={<ExpenseCreateUpdatePage />}/>
              <Route exact path="/ExpenseListPage" element={<ExpenseListPage />}/>

              <Route exact path="/ProductCreateUpdatePage" element={<ProductCreateUpdatePage />}/>
              <Route exact path="/ProductListPage" element={<ProductListPage />}/>

              <Route exact path="/PurchaseCreateUpdatePage" element={<PurchaseCreateUpdatePage />}/>
              <Route exact path="/PurchaseListPage" element={<PurchaseListPage />}/>

              <Route exact path="/ReturnCreateUpdatePage" element={<ReturnCreateUpdatePage />}/>
              <Route exact path="/ReturnListPage" element={<ReturnListPage />}/>

              <Route exact path="/SalesCreateUpdatePage" element={<SalesCreateUpdatePage />}/>
              <Route exact path="/SalesListPage" element={<SalesListPage />}/>

              <Route exact path="/SupplierCreateUpdatePage" element={<SupplierCreateUpdatePage />}/>
              <Route exact path="/SupplierListPage" element={<SupplierListPage />}/>

              <Route exact path="/PurchaseReportPage" element={<PurchaseReportPage />}/>
              <Route exact path="/ReturnReportPage" element={<ReturnReportPage />}/>
              <Route exact path="/SaleReportPage" element={<SaleReportPage />}/>
              <Route exact path="/ExpenseReportPage" element={<ExpenseReportPage />}/>

              <Route exact path="/" element={<DashboardPage />}/>
              <Route exact path="/Profile" element={<ProfilePage/>}/>
              <Route path="*" element={<Page404/>}/>
            </Routes>
          </BrowserRouter>
          <ToastContainer />
          <FullscreenLoader/>
        </Fragment>
    );
  }
  else {
    return (
        <Fragment>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/Login" replace />}/>
              <Route exact path="/Login" element={<LoginPage />}/>
              <Route exact path="/Registration" element={<RegistrationPage />}/>
              <Route exact path="/SendOTP" element={<SendOTPPage/>}/>
              <Route exact path="/VerifyOTP" element={<VerifyOTPPage/>}/>
              <Route exact path="/CreatePassword" element={<CreatePasswordPage/>}/>
              <Route path="*" element={<Page404/>}/>
            </Routes>
          </BrowserRouter>
          <ToastContainer />
          <FullscreenLoader/>
        </Fragment>
    );
  }
};
export default App;