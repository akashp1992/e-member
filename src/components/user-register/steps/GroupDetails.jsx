import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  groupdetails,
  registerNewUser,
} from "../../../redux/action/user.action";

export function GroupDetails() {
  const dispatch = useDispatch();

  const AllData = useSelector((state) => state.form.addressdata);
  // console.log("All Details", AllData);

  const [groupEmail, setGroupEmail] = useState("");
  const [groupName, setGroupName] = useState("");
  const [pin, setPin] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [city, setCity] = useState("");
  const [groupPhone, setGroupPhone] = useState("");
  const [check, setCheck] = useState("");

  const [groupEmailError, setGroupEmailError] = useState("");
  const [groupNameError, setGroupNameError] = useState("");
  const [pinError, setPinError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [durationError, setDurationError] = useState("");
  const [cityError, setCityError] = useState("");
  const [groupPhoneError, setGroupPhoneError] = useState("");
  const [checkError, setCheckError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /\S+@\S+\.\S+/;
    let isError = false;
    if (!groupEmail) {
      isError = true;
      setGroupEmailError("Email is required");
    } else if (!emailRegex.test(groupEmail)) {
      isError = true;
      setGroupEmailError("Please Enater Valid Email");
    } else {
      setGroupEmailError("");
    }

    if (!groupName) {
      isError = true;
      setGroupNameError("Group Name is required");
    } else {
      setGroupNameError("");
    }

    if (!pin) {
      isError = true;
      setPinError("Group pin is required");
    } else {
      setPinError("");
    }

    if (!type) {
      isError = true;
      setTypeError("Group type is required");
    } else {
      setTypeError("");
    }

    if (!duration) {
      isError = true;
      setDurationError("Group duration is required");
    } else {
      setDurationError("");
    }

    if (!city) {
      isError = true;
      setCityError("City is required");
    } else {
      setCityError("");
    }

    if (!groupPhone) {
      isError = true;
      setGroupPhoneError("Number is required");
    } else if (groupPhone.length < 10) {
      isError = true;
      setGroupPhoneError("Phone number must be 10 digit");
    } else {
      setGroupPhoneError("");
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

    const Group = {
      business_email: groupEmail,
      business_name: groupName,
      business_number: pin,
      business_phonenumber: type,
      business_address: duration,
      business_city: city,
      business_postcode: groupPhone,
      role:2
    };

    const groupData = { ...AllData, ...Group };
    console.log("GroupDetails", groupData);

    // const personal = JSON.parse(localStorage.getItem("personalDetails"));
    // const address = JSON.parse(localStorage.getItem("addressDetails"));
    // const data = { ...personal, ...address };
    // const GroupDetails = { ...data, ...Group };
    // console.log(GroupDetails);
    dispatch(registerNewUser(groupData));
    dispatch(groupdetails(groupData));
  };

  return (
    <div
      className="tab-pane"
      id="GroupDetails"
      role="tabpanel"
      aria-labelledby="GroupDetails-tab"
    >
      <form className="px-5">
        <div className="row mb-3">
          <div className="col-lg-12 col-sm-12">
            <div className="FormArea w-100">
              <label htmlFor="email">Email Address for Group</label>
              <input
                className="form-control"
                type="text"
                value={groupEmail}
                onChange={(e) => setGroupEmail(e.target.value)}
              />
              <div style={{ color: "red" }}>{groupEmailError}</div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-sm-12">
            <div className="FormArea w-100">
              <label htmlFor="Group-Name">Group Name</label>
              <input
                className="form-control"
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
              <div style={{ color: "red" }}>{groupNameError}</div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="FormArea w-100">
              <label htmlFor="Group-Pin">Create Group Pin</label>
              <input
                className="form-control"
                type="number"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
              <div style={{ color: "red" }}>{pinError}</div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="FormArea col-6">
            <label htmlFor="Group-Type">Group Type</label>
            <select
              className="selectpicker form-control"
              id="gender"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">--Select--</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <div style={{ color: "red" }}>{typeError}</div>
          </div>
          <div className="FormArea col-6">
            <label htmlFor="Group-Duration">Group Duration</label>
            <div className=" w-100 position-relative">
              <input
                className="form-control"
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
              <div style={{ color: "red" }}>{durationError}</div>
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
              <label htmlFor="Group-Phone">Group Phone Number</label>
              <input
                className="form-control"
                type="text"
                value={groupPhone}
                onChange={(e) => setGroupPhone(e.target.value)}
              />
              <div style={{ color: "red" }}>{groupPhoneError}</div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
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
              Activate Account{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
