import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import RegisterScreen from "./screens/Register";
import LoginScreen from "./screens/Login";
import AboutScreen from "./screens/About";
import HowScreen from "./screens/How-it-works";
import ContactScreen from "./screens/Contact";
import RegisterSide from "./components/Register-Side";
import RegisterTab1 from "./components/user-register/User-Register-tab-1";
import RegisterTab2 from "./components/user-register/User-Register-tab-2";
import PersonalDetails from "./components/user-register/steps/PersonalDetails";
import AddressDetails from "./components/user-register/steps/AddressDetails";
import { GroupDetails } from "./components/user-register/steps/GroupDetails";
import { BusinessDetails } from "./components/user-register/steps/BusinessDetails";
import RegisterTab3 from "./components/user-register/User-Register-tab-3";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/user-dashboard/Dashboard";
import ForgotPassword from "./screens/ForgotPassword";
import Project from "./components/user-project/Project";
function App() {
  return (
    <>

      {/* <Navbar /> */}
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />}>
          <Route index element={<RegisterTab1 />} />
          <Route path="/register/individual" element={<RegisterTab1 />}>
            <Route index element={<PersonalDetails />} />
            <Route
              path="/register/individual/personal"
              element={<PersonalDetails />}
            ></Route>
            <Route
              path="/register/individual/address"
              element={<AddressDetails />}
            ></Route>
          </Route>
          <Route path="/register/group" element={<RegisterTab2 />}>
            <Route index element={<PersonalDetails />} />
            <Route
              path="/register/group/personal"
              element={<PersonalDetails />}
            />
            <Route
              path="/register/group/address"
              element={<AddressDetails />}
            />
            <Route path="/register/group/details" element={<GroupDetails />} />
          </Route>
          <Route path="/register/business" element={<RegisterTab3 />}>
            <Route index element={<PersonalDetails />} />
            <Route
              path="/register/business/personal"
              element={<PersonalDetails />}
            />
            <Route
              path="/register/business/address"
              element={<AddressDetails />}
            />
            <Route
              path="/register/business/details"
              element={<BusinessDetails />}
            />
          </Route>
        </Route>
        <Route path="/register-side" element={<RegisterSide />} />
        <Route path="/register-tab1" element={<RegisterTab1 />} />
        <Route path="/register-tab2" element={<RegisterTab2 />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/about-us" element={<AboutScreen />} />
        <Route path="/how-it-works" element={<HowScreen />} />
        <Route path="/contact-us" element={<ContactScreen />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
      <ToastContainer />
      {/* <Footer /> */}
    </>
  );
}

export default App;
