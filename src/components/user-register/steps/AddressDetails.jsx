import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterModal from "../../../modal/RegisterModal";
import './AdressDetails.css'
import {
  addressdetails,
  registerNewUser,
  loddingToogleAction,
} from "../../../redux/action/user.action";


const Genders = [
  "--Select--",
  "Male",
  "Female",
  "Trans-Male",
  "Trans-Female",
  "Other",
  "Gender-Nuetral",
  "Prefers not to say",
];

export default function AddressDetails() {
  const group = useMatch("/register/group/address");
  const business = useMatch("/register/business/address");

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const showModal = useSelector((state) => state.registerUserReducer.success);
  const showMods = useSelector((state) => state.registerUserReducer.error);
  const isLoading = useSelector((state) => state.registerUserReducer.loading);
  // console.log(showModal);

  const data = useSelector((state) => state.form.obj);
  // console.log(data);

  const dispatch = useDispatch();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [check, setCheck] = useState("");
  // const [year, setYear] = useState("");
  // const [month, setMonth] = useState("");
  // const [day, setDay] = useState("");
  const [dob, setDob] = useState("");

  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [postCodeError, setPostCodeError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [checkError, setCheckError] = useState("");
  // const [yearError, setYearError] = useState("");
  // const [monthError, setMonthError] = useState("");
  // const [dayError, setDayError] = useState("");
  const [dobError, setDobError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let isError = false;

    if (!address) {
      isError = true;
      setAddressError("Address is required");
    } else {
      setAddressError("");
    }

    if (!city) {
      isError = true;
      setCityError("City is required");
    } else {
      setCityError("");
    }

    if (!postCode) {
      isError = true;
      setPostCodeError("Postcode is required");
    } else {
      setPostCodeError("");
    }

    if (gender === "") {
      isError = true;
      setGenderError("Gender is required");
    } else {
      setGenderError("");
    }

    if (!phone) {
      isError = true;
      setPhoneError("Number is required");
    } else if (phone.length < 10) {
      isError = true;
      setPhoneError("Phone number must be 10 digit");
    } else {
      setPhoneError("");
    }

    if (dob === "") {
      isError = true;
      setDobError("Date Of Birth is required");
    } else {
      setDobError("");
    }

    if (group || business) {
    } else {
      if (!check) {
        isError = true;
        setCheckError(
          "Please indicate that you accept the Terms and Conditions"
        );
      } else {
        setCheckError("");
      }
    }

    if (isError) {
      return;
    }
    dispatch(loddingToogleAction(true));


    // const personal = JSON.parse(localStorage.getItem("personalDetails"));

    const user = {
      address: address,
      city: city,
      postcode: postCode,
      gender: gender,
      phone: phone,
      dob: dob,
      role: 0,
    };

    const addressdata = { ...data, ...user };
    // console.log(storedata);

    if (group || business) {
      // localStorage.setItem("addressDetails", JSON.stringify(user));
      dispatch(addressdetails(addressdata));

      if (group) {
        navigate("/register/group/details");
      } else {
        navigate("/register/business/details");
      }
    } else {
      // const details = { ...personal, ...user };
      // const storedata = { ...data, ...user };
      // console.log(storedata);

      dispatch(registerNewUser(addressdata));
      dispatch(addressdetails(addressdata));

      if (showModal == true) {
        setShow(true);
        clearData()
        console.log(showModal);
      } else if (showMods) {
        console.log(showMods)
        toast.error(showMods);
      }
    }
  };

  const clearData = () => {
    setAddress("");
    setCity("");
    setPostCode("");
    setGender("");
    setPhone("");
    setCheck("");
    setDob("");
  }

  return (
    <>
      <div
        className="tab-pane"
        id="Addressindividual"
        role="tabpanel"
        aria-labelledby="Addressindividual-tab"
      >
        <form className="px-5">
          <div className="row mb-3">
            <div className="col-lg-12 col-sm-12">
              <div className="FormArea w-100">
                <label htmlFor="address">Address</label>
                <input
                  className="form-control"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div style={{ color: "red" }}>{addressError}</div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-6 col-sm-12">
              <div className="FormArea w-100">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <div style={{ color: "red" }}>{cityError}</div>
              </div>
            </div>
            <div className="FormArea col-lg-6 col-sm-12">
              <div className="FormArea w-100">
                <label htmlFor="post_code">Post code</label>
                <input
                  className="form-control"
                  type="text"
                  id="post_code"
                  value={postCode}
                  onChange={(e) => setPostCode(e.target.value)}
                />
                <div style={{ color: "red" }}>{postCodeError}</div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="FormArea col-6">
              <label htmlFor="gender">Gender</label>
              <select
                className="form-control"
                id="gender"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                {Genders.map((gen, key) => {
                  return (
                    <option key={key} value={gen}>
                      {gen}
                    </option>
                  );
                })}
              </select>
              <div style={{ color: "red" }}>{genderError}</div>
            </div>
            <div className="FormArea col-6">
              <label htmlFor="phone">Phone Number</label>
              <div className=" w-100 position-relative">
                <input
                  className="form-control"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div style={{ color: "red" }}>{phoneError}</div>
              </div>
            </div>
          </div>
          <div className="FormArea col-lg-6 col-sm-12">
            <div className="FormArea w-100">
              <label htmlFor="DateofBirth">Date of Birth</label>
              <input
                className="form-control"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <div style={{ color: "red" }}>{dobError}</div>
            </div>
          </div>

          {/* <label htmlFor="DateofBirth">Date of Birth</label> */}
          {/* <div className="row mb-3">
            <div className="FormArea col-lg-4 col-sm-12">
              <label htmlFor="year">Year</label>
              <select
                className="selectpicker form-control"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">--Select--</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
              <div style={{ color: "red" }}>{yearError}</div>
            </div>
            <div className="FormArea col-lg-4 col-sm-12">
              <label htmlFor="month">Month</label>
              <select
                className="selectpicker form-control"
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option disabled="" value="">
                  --Select--
                </option>

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <div style={{ color: "red" }}>{monthError}</div>
            </div>
            <div className="FormArea col-lg-4 col-sm-12">
              <label htmlFor="day">Day</label>
              <select
                className="selectpicker form-control"
                id="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              >
                <option disabled="" value="">
                  --Select--
                </option>

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <div style={{ color: "red" }}>{dayError}</div>
            </div>
          </div> */}

          {group || business ? (
            ""
          ) : (
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
                  onChange={(e) => setCheck(e.target.checked)}
                />
                <div style={{ color: "red" }}>{checkError}</div>
                <div className="control__indicator"></div>
              </label>
            </div>
          )}

          <div className="row mb-3">
            <div className="col-12">
              <button
                disabled={isLoading}
                className="btn  btn-Activate"
                type="button"
                onClick={handleSubmit}
              >
                {isLoading && (
                  <i
                    className="fa fa-refresh fa-spin"
                    style={{ marginRight: "5px" }}
                  />
                )}
                {group || business
                  ? "Proceed To Next Step"
                  : "Activate Account"}
              </button>
            </div>
          </div>
        </form>
      </div>

      <RegisterModal show={show} onHide={() => setShow(false)} />
    </>
  );
}
