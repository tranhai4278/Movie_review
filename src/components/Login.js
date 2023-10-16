import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const Login = () => {
  return (
  <div class="login-wrapper" id="login-content">
  <div class="login-content">
      <a href="#" class="close">x</a>
      <h3>Login</h3>
      <form method="post" action="#">
        <div class="row">
           <label for="username">
                  Username:
                  <input type="text" name="username" id="username" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
              </label>
        </div>
         
          <div class="row">
            <label for="password">
                  Password:
                  <input type="password" name="password" id="password" placeholder="******" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
              </label>
          </div>
          <div class="row">
            <div class="remember">
        <div>
          <input type="checkbox" name="remember" value="Remember me"/><span>Remember me</span>
        </div>
          <Link to={'/resetpassword'}>Forget password ?</Link> 
            </div>
          </div>
         <div class="row">
            <button type="submit">Login</button>
         </div>
      </form>
      <div class="row">
        <p>Or via google</p>
          <div class="social-btn-2">
            <a class="fb" href="#"><i class="ion-social-googleplus"></i>Google</a>
          </div>
      </div>
  </div>
</div>
  );
};

export default Login;
