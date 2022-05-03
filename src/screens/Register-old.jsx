import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../redux/action/user.action";
import _ from "lodash";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";

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

    console.log(error);
  };

  return (
    <>
      <main id="main">
        {/* ======= RegisterSection ======= */}
        <section id="RegisterSection" className="RegisterSection">
          <div className="container-fluid w-100 h-100">
            <div className="row h-100">
              <div className="col-md-6 col-sm-12 d-flex flex-column tab">
                <button
                  className="tablinks justify-content-flex-start align-items-center flex-fill OpenForm active"
                  id="defaultOpen"
                >
                  <h5> Register as Individual</h5>
                  <p> Register for your Individual account. </p>
                </button>
                <button className="tablinks justify-content-flex-start align-items-center flex-fill OpenForm">
                  <h5>Register as Group</h5>
                  <p>
                    {" "}
                    Register as a Group; to engage with businesses and
                    individuals to gain the support you need for your chosen
                    projects in terms of volunteering, gifting items, etc.{" "}
                  </p>
                </button>
                <button className="tablinks justify-content-flex-start align-items-center flex-fill OpenForm">
                  <h5>Register as Business Account</h5>
                  <p>
                    {" "}
                    Become a business member where you can control, manage and
                    report on all your Corporate Social Responsible (CSR)
                    activity from a single dashboard.{" "}
                  </p>
                </button>
              </div>
              <div
                className="col-md-6 col-sm-12 RightContent"
                id="tabs-contents"
              >
                <div className="register-individual tabcontent" id="firstTab">
                  {loading && <Loader />}
                  {error && (
                    // <Error error="Email Address is already registred"></Error>
                    <Error error={error}></Error>
                  )}
                  {success && (
                    <Success success="Your Registration is successfull" />
                  )}
                  <form onSubmit={onSubmit} className="px-5 py-4">
                    <div className="row mb-3">
                      <div className="col-lg-12 col-sm-12">
                        <div className="FormArea w-100">
                          <label htmlFor="email">Email</label>

                          <input
                            type="text"
                            placeholder="email"
                            className="form-control"
                            value={email}
                            required
                            onChange={(e) => {
                              setemail(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-6 col-sm-12">
                        <div className="FormArea w-100">
                          <label htmlFor="first_name">First Name</label>

                          <input
                            type="text"
                            placeholder="First Name"
                            className="form-control"
                            required
                            value={firstname}
                            onChange={(e) => {
                              setfirstname(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <div className="FormArea w-100">
                          <label htmlFor="last_name">Last Name</label>
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="form-control"
                            required
                            value={lastname}
                            onChange={(e) => {
                              setlastname(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="FormArea col-6">
                        <label htmlFor="gender">Gender</label>
                        <select
                          className="selectpicker form-control"
                          value={gender}
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        >
                          <option disabled="" selected="" value="">
                            {" "}
                            --Select--{" "}
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="trans-male">Trans-Male</option>
                          <option value="trans-female">Trans-Female</option>
                          <option value="gender neutral">Gender Neutral</option>
                          <option value="other">Other</option>
                          <option value="prefer not to say">
                            Prefer not to say
                          </option>
                        </select>
                      </div>
                      <div className="FormArea col-6">
                        <label htmlFor="phone">Phone Number</label>
                        <div className=" w-100 position-relative">
                          <input
                            type="text"
                            placeholder="Phone Number"
                            className="form-control"
                            required
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <label htmlFor="DateofBirth">Date of Birth</label>
                    <div className="row mb-3">
                      <div className="FormArea col-lg-4 col-sm-12">
                        <label htmlFor="year">Year</label>

                        <select
                          className="selectpicker form-control"
                          value={year}
                          onChange={(e) => {
                            setYear(e.target.value);
                          }}
                        >
                          <option disabled="" selected="" value="">
                            {" "}
                            --Select--{" "}
                          </option>
                          {_.range(1970, 2023).map((value) => (
                            <option key={value} value={value}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="FormArea col-lg-4 col-sm-12">
                        <label htmlFor="month">Month</label>
                        <select
                          className="selectpicker form-control"
                          value={month}
                          onChange={(e) => {
                            setMonth(e.target.value);
                          }}
                        >
                          <option disabled="" selected="" value="">
                            {" "}
                            --Select--{" "}
                          </option>
                          {_.range(1, 13).map((value) => (
                            <option key={value} value={value}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="FormArea col-lg-4 col-sm-12">
                        <label htmlFor="day">Day</label>

                        <select
                          className="selectpicker form-control"
                          value={day}
                          onChange={(e) => {
                            setDay(e.target.value);
                          }}
                        >
                          <option disabled="" selected="" value="">
                            {" "}
                            --Select--{" "}
                          </option>
                          {_.range(1, 32).map((value) => (
                            <option key={value} value={value}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-12 col-sm-12">
                        <div className="FormArea w-100">
                          <label htmlFor="address">Address</label>

                          <input
                            type="text"
                            placeholder="Address"
                            className="form-control"
                            required
                            value={address}
                            onChange={(e) => {
                              setaddress(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-6 col-sm-12">
                        <div className="FormArea w-100">
                          <label htmlFor="city">City</label>
                          <input
                            type="text"
                            placeholder="City"
                            className="form-control"
                            required
                            value={city}
                            onChange={(e) => {
                              setcity(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="FormArea col-lg-6 col-sm-12">
                        <div className="FormArea w-100">
                          <label htmlFor="post_code">Post code</label>
                          <input
                            type="text"
                            placeholder="Post code"
                            className="form-control"
                            required
                            value={postcode}
                            onChange={(e) => {
                              setpostcode(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-6 col-sm-12">
                        <div className="FormArea w-100">
                          <label htmlFor="password">Password</label>

                          <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            value={password}
                            required
                            onChange={(e) => {
                              setpassword(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <div className="FormArea w-100">
                          <label htmlFor="Repassword">Re-Type Password</label>
                          <input
                            type="password"
                            placeholder="Confirm Password"
                            className="form-control"
                            value={cpassword}
                            required
                            onChange={(e) => {
                              setcpassword(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex mt-4 align-items-center">
                      <label className="control control--checkbox mb-0">
                        <span className="caption">
                          I have read and agree to the{" "}
                          <a
                            className="semi"
                            href="https://investorsincommunity.org/terms/"
                          >
                            Terms of Service
                          </a>
                        </span>

                        <input
                          type="checkbox"
                          value={agree}
                          required
                          onChange={(e) => {
                            setAgree(e.target.value);
                          }}
                        />

                        <div className="control__indicator"></div>
                      </label>
                    </div>
                    <div className="row mb-3">
                      <div className="col-12">
                        <button type="submit" className="btn btn-Activate">
                          Activate Account
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
