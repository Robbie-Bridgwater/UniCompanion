import React from "react";

function LoginForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="auth-form">
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={props.onChangeEmail}
            value={props.valueEmail}
            className="auth-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={props.onChangePass}
            value={props.valuePass}
            className="auth-input"
          />
        </div>
        {props.error !== "" ? <div className="error">{props.error}</div> : ""}
        <br />
        <input type="submit" value="LOGIN" className="auth-input" />
      </div>
    </form>
  );
}

export default LoginForm;
