import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../redux/action/user.action";
import _ from "lodash";
import { Outlet } from "react-router-dom";
import RegisterSide from "../components/Register-Side";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RegisterScreen() {
  const registerstate = useSelector((state) => state.registerUserReducer);
  const { loading, error, success } = registerstate;

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [city, setcity] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [agree, setAgree] = useState("");
  const [postcode, setpostcode] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    alert("ddddd");
    const user = {
      firstname: firstname,
      lastname: lastname,
      address: address,
      city: city,
      gender: gender,
      postcode: postcode,
      phone: phone,
      year: year,
      month: month,
      day: day,
      email: email,
      password: password,
    };
    
    if (password === cpassword) {
      dispatch(registerNewUser(user));
    } else {
      alert("passwords not matched");
    }
  };

  return (
    <>
      <Navbar />
      <main id="main">
        {/*  ======= RegisterSection =======  */}
        <section id="RegisterSection" className="RegisterSection">
          <div className="container-fluid w-100 h-100 ">
            <div className="row h-100">
              <RegisterSide></RegisterSide>
              <div
                className="col-md-7 col-sm-12 RightContent"
                id="tabs-contents"
                data-aos="fade-left"
              >
                <div className="register-individual tabcontent" id="firstTab">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
