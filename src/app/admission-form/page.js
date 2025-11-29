"use client";
import { useState } from "react";

export default function AdmissionForm() {
  const categories = ["GM", "SC", "ST", "I", "II(a)", "II(b)", "III(a)", "III(b)", "Other"];
  const courses = ["M.P.Ed – Master of Physical Education", "B.P.Ed – Bachelor Of Physical Education"];
  const qualifications = ["Bachelor Degree/Eqvt.", "B.P.Ed – Bachelor Of Physical Education"];

  return (
    <div style={{ padding: "60px", maxWidth: "900px", margin: "auto", fontFamily: "Arial" }}>
      <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>Admission form</h2>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "25px",
          borderRadius: "5px",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "25px" }}>
          Application for the Academic Year - 2025-26
        </h3>

        {/* Select Course */}
        <label>Select the course*</label>
        <select style={selectBox}>
          <option>—Please choose an option—</option>
          {courses.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        {/* Applicant Name + Gender */}
        <div style={row}>
          <div style={col}>
            <label>Name of the Applicant *</label>
            <input style={inputBox} type="text" />
          </div>
          <div style={col}>
            <label>Gender</label>
            <select style={selectBox}>
              <option>- Select -</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Father + Mother */}
        <div style={row}>
          <div style={col}>
            <label>Name of the Father</label>
            <input style={inputBox} type="text" />
          </div>
          <div style={col}>
            <label>Name of the Mother</label>
            <input style={inputBox} type="text" />
          </div>
        </div>

        {/* DOB + Address */}
        <div style={row}>
          <div style={col}>
            <label>Date of Birth(dd/mm/yyyy)</label>
            <input style={inputBox} type="date" />
          </div>
          <div style={col}>
            <label>Address</label>
            <textarea style={{ ...inputBox, height: "90px" }} />
          </div>
        </div>

        {/* Phone + Email */}
        <div style={row}>
          <div style={col}>
            <label>Phone No *</label>
            <input style={inputBox} type="text" />
          </div>
          <div style={col}>
            <label>Your Email *</label>
            <input style={inputBox} type="email" />
          </div>
        </div>

        {/* Nationality + Category */}
        <div style={row}>
          <div style={col}>
            <label>Nationality</label>
            <input style={inputBox} type="text" />
          </div>
          <div style={col}>
            <label>Category</label>
            <select style={selectBox}>
              <option>- Select -</option>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Hostel */}
        <label>Do you need Hostel facility</label>
        <select style={selectBox}>
          <option>- Select -</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        {/* Academic Details */}
        <h3 style={{ marginTop: "25px" }}>Academic Details</h3>

        <label>Current Qualification</label>
        <select style={selectBox}>
          <option>—Please choose an option—</option>
          {qualifications.map((q) => (
            <option key={q}>{q}</option>
          ))}
        </select>

        <div style={row}>
          <div style={col}>
            <label>Name and Address of the School/College</label>
            <input style={inputBox} type="text" />
          </div>
          <div style={col}>
            <label>Name of the Board/University</label>
            <input style={inputBox} type="text" />
          </div>
        </div>

        <div style={row}>
          <div style={col}>
            <label>Year of Passing</label>
            <input style={inputBox} type="text" />
          </div>
          <div style={col}>
            <label>Percentage</label>
            <input style={inputBox} type="text" />
          </div>
        </div>

        <label>Queries if any</label>
        <textarea style={{ ...inputBox, height: "120px" }} />

        <p style={{ fontSize: "13px", marginTop: "15px" }}>
          I understand that this is only for registering my interest in the programme. It does not ensure or guarantee
          the final admission for the course.
        </p>

        {/* Submit Button */}
        <button
          style={{
            width: "200px",
            padding: "12px",
            background: "#000",
            color: "#fff",
            border: "none",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          SUBMIT APPLICATION
        </button>
      </div>
    </div>
  );
}

/* ---- Styles ---- */
const inputBox = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "14px",
};

const selectBox = {
  ...inputBox,
  height: "40px",
  fontSize: "14px",
};

const row = {
  display: "flex",
  gap: "20px",
  marginTop: "15px",
};

const col = {
  flex: 1,
};
