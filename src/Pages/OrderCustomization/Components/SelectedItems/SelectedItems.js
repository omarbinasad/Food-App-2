import React from "react";
import "./SelectedItems.css";

const SelectedItems = () => {
  return (
    <div className="py-3">
      <h3 style={{ color: "#ff5c00" }} className="">
        You've Selected
      </h3>
      <div className="toasts-div">
        <div
          className="toast align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div className="d-flex">
            <div
              style={{ fontFamily: "Baloo Da", fontWeight: "600" }}
              className="toast-body"
            >
              Regular
            </div>
            <button
              style={{
                fontSize: "20px",
                color: "#DF0000",
                border: "none",
              }}
              type="button"
              className=" me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <div
          className="toast align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div className="d-flex">
            <div
              style={{ fontFamily: "Baloo Da", fontWeight: "600" }}
              className="toast-body"
            >
              BBQ Sauce
              <span style={{ color: "#7c90b8", fontSize: "12px" }}> (₹10)</span>
            </div>
            <button
              style={{
                fontSize: "20px",
                color: "#DF0000",
                border: "none",
              }}
              type="button"
              className=" me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <div
          className="toast align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div className="d-flex">
            <div
              style={{ fontFamily: "Baloo Da", fontWeight: "600" }}
              className="toast-body"
            >
              Onion Rings
              <span style={{ color: "#7c90b8", fontSize: "12px" }}> (₹10)</span>
            </div>
            <button
              style={{
                fontSize: "20px",
                color: "#DF0000",
                border: "none",
              }}
              type="button"
              className="me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            >
              {" "}
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <div
          className="toast align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div className="d-flex">
            <div
              style={{ fontFamily: "Baloo Da", fontWeight: "600" }}
              className="toast-body"
            >
              Chees
              <span style={{ color: "#7c90b8", fontSize: "12px" }}> (₹10)</span>
            </div>
            <button
              style={{
                fontSize: "20px",
                color: "#DF0000",
                border: "none",
              }}
              type="button"
              className="me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            >
              {" "}
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedItems;
