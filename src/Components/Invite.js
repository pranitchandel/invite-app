import { useState } from "react";

import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import PublicIcon from "@mui/icons-material/Public";

const Invite = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const error = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "" || userEmail === "") {
      userName === "" ? (error.userName = "enter name") : (error.userName = "");
      userEmail === ""
        ? (error.userEmail = "enter email")
        : (error.userEmail = "");
      let msg = Object.values(error).filter((err) => err !== "");
      alert(msg);
      return;
    }
    alert("Name is " + userName + " and Email is " + userEmail);
    setUserName("");
    setUserEmail("");
  };
  return (
    <div className="inviteContainer">
      <div className="summaryClass">
        <h5>Pranit Kumar Chandel</h5>
        <div className="space" />
        <h2> 15 Minute Meeting</h2>
        <div className="summaryContents">
          <AccessTimeTwoToneIcon /> <span>15 min</span>
        </div>
        <div className="summaryContents">
          <CalendarTodayTwoToneIcon />
          <span>9:30am - 9:45am, Friday,September 16,2022</span>
        </div>
        <div className="summaryContents">
          <PublicIcon />
          <span>India Standard Time</span>
        </div>
      </div>
      <div className="formClass">
        <form action="" onSubmit={handleSubmit}>
          <h3>Enter Details</h3>
          <div className="space" />
          <div className="formInput">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              name="name"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="formInput">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
          </div>
          <button className="addGuestBtn" disabled>
            Add Guests
          </button>
          <div className="formInput">
            <label htmlFor="shareText">
              Please share anything that will help prepare for our meeting.
            </label>
            <textarea name="shareText" id="" cols="100" rows="10"></textarea>
          </div>
          <button className="scheduleBtn" type="submit">
            Schedule Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default Invite;
