import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  businessdetails,
  registerNewUser,
} from "../../../redux/action/user.action";

export function BusinessDetails() {
  const dispatch = useDispatch();

  const AllData = useSelector((state) => state.form.addressdata);

  const [business_name, setBusiness_name] = useState("");
  const [business_email, setBusiness_email] = useState("");
  const [business_number, setBusiness_number] = useState("");
  const [business_phonenumber, setBusiness_phonenumber] = useState("");
  const [business_city, setBusiness_city] = useState("");
  const [business_address, setBusiness_address] = useState("");
  const [business_postcode, setBusiness_postcode] = useState("");
  const [check, setCheck] = useState("");

  const [business_name_Error, setBusiness_name_Error] = useState("");
  const [business_email_Error, setBusiness_email_Error] = useState("");
  const [business_number_Error, setBusiness_number_Error] = useState("");
  const [business_phonenumber_Error, setBusiness_phonenumber_Error] =
    useState("");
  const [business_city_Error, setBusiness_city_Error] = useState("");
  const [business_address_Error, setBusiness_address_Error] = useState("");
  const [business_postcode_Error, setBusiness_postcode_Error] = useState("");
  const [checkError, setCheckError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let isError = false;

    if (!business_name) {
      isError = true;
      setBusiness_name_Error("Name is required");
    } else {
      setBusiness_name_Error("");
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!business_email) {
      isError = true;
      setBusiness_email_Error("Email is required");
    } else if (!emailRegex.test(business_email)) {
      isError = true;
      setBusiness_email_Error("Please Enater Valid Email");
    } else {
      setBusiness_email_Error("");
    }

    if (!business_number) {
      isError = true;
      setBusiness_number_Error("RegisterNumber is required");
    } else {
      setBusiness_number_Error("");
    }

    if (!business_phonenumber) {
      isError = true;
      setBusiness_phonenumber_Error("Number is required");
    } else if (business_phonenumber.length < 10) {
      isError = true;
      setBusiness_phonenumber_Error("Phone number must be 10 digit");
    } else {
      setBusiness_phonenumber_Error("");
    }

    if (!business_city) {
      isError = true;
      setBusiness_city_Error("City is required");
    } else {
      setBusiness_city_Error("");
    }

    if (!business_address) {
      isError = true;
      setBusiness_address_Error("Address is required");
    } else {
      setBusiness_address_Error("");
    }

    if (!business_postcode) {
      isError = true;
      setBusiness_postcode_Error("Postcode is required");
    } else {
      setBusiness_postcode_Error("");
    }

    if (!check) {
      isError = true;
      setCheckError("Please indicate that you accept the Terms and Conditions");
    } else {
      setCheckError("");
    }

    if (isError) {
      return;
    }

    const Business = {
      business_name: business_name,
      business_email: business_email,
      business_number: business_number,
      business_phonenumber: business_phonenumber,
      business_city: business_city,
      business_address: business_address,
      business_postcode: business_postcode,
      role:1
    };
    // const personal = JSON.parse(localStorage.getItem("personalDetails"));
    // const address = JSON.parse(localStorage.getItem("addressDetails"));
    // const data = { ...personal, ...address };
    const BusinessData = { ...AllData, ...Business };
    console.log("BusinessDeatils", BusinessData);
    dispatch(registerNewUser(BusinessData));
    dispatch(businessdetails(BusinessData));
  };

  return (
    <div
      className="tab-pane"
      id="BusinessDetails"
      role="tabpanel"
      aria-labelledby="BusinessDetails-tab"
    >
      <form className="px-5">
        <div className="row mb-3">
          <div className="col-lg-12 col-sm-12">
            <div className="FormArea w-100">
              <label htmlFor="email">Business Name</label>
              <input
                className="form-control"
                type="text"
                value={business_name}
                onChange={(e) => setBusiness_name(e.target.value)}
              />
              <div style={{ color: "red" }}>{business_name_Error}</div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-sm-12">
            <div className="FormArea w-100">
              <label htmlFor="Group-Name">Business Email</label>
              <input
                className="form-control"
                type="text"
                value={business_email}
                onChange={(e) => setBusiness_email(e.target.value)}
              />
              <div style={{ color: "red" }}>{business_email_Error}</div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="FormArea w-100">
              <label htmlFor="Group-Number">Registered Business Number</label>
              <input
                className="form-control"
                type="number"
                value={business_number}
                onChange={(e) => setBusiness_number(e.target.value)}
              />
              <div style={{ color: "red" }}>{business_number_Error}</div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-sm-12">
            <div className="FormArea w-100">
              <label htmlFor="Company-Started">Business Phone Number</label>
              <input
                className="form-control"
                type="text"
                value={business_phonenumber}
                onChange={(e) => setBusiness_phonenumber(e.target.value)}
              />
              <div style={{ color: "red" }}>{business_phonenumber_Error}</div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="FormArea w-100">
              <label htmlFor="Company-Number">City</label>
              <input
                className="form-control"
                type="text"
                value={business_city}
                onChange={(e) => setBusiness_city(e.target.value)}
              />
              <div style={{ color: "red" }}>{business_city_Error}</div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-sm-12">
            <div className="FormArea w-100">
              <label htmlFor="GroupNumber">Business Address</label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={business_address}
                onChange={(e) => setBusiness_address(e.target.value)}
              />
              <div style={{ color: "red" }}>{business_address_Error}</div>
            </div>
          </div>
          <div className="FormArea col-lg-6 col-sm-12">
            <div className="FormArea w-100">
              <label htmlFor="Postcode">Post code</label>
              <input
                className="form-control"
                type="text"
                id="post_code"
                value={business_postcode}
                onChange={(e) => setBusiness_postcode(e.target.value)}
              />
              <div style={{ color: "red" }}>{business_postcode_Error}</div>
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
              onChange={(e) => setCheck(e.target.checked)}
            />
            <div style={{ color: "red" }}>{checkError}</div>
            <div className="control__indicator"></div>
          </label>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <button
              className="btn  btn-Activate"
              type="button"
              onClick={handleSubmit}
            >
              Activate Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
