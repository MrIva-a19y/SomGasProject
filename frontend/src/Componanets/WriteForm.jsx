import React from "react";

function WriteForm() {
  return (
    <div>
      <h1>production Form</h1>
      <div className="container">
        <div className="form-header">
          <div className="date">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteForm;
