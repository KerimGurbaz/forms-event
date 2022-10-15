import React from "react";

const Form = () => {
  return (
    <form>
      <h1 className="display-5 text-danger">FORMS</h1>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          UserName
        </label>
        <input type="text" className="form-control" id="username" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="email" />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;