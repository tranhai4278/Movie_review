import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Sidebar() {
    return (
        <div className="user-information">
            <div className="user-img">
                <a href="#">
                    <img src="images/uploads/user-img.png" alt="" />
                    <br />
                </a>
                <Button variant="danger">Change avatar</Button>
            </div>
            <div className="user-fav">
                <p>Account Details</p>
                <ul className="list-group">
                    <li className="list-group-item active">
                        <Link to="/userprofile"><a href="#">Profile</a></Link>
                    </li>
                    <li className="list-group-item">
                        <a href="userfavoritelist.html">Favorite movies</a>
                    </li>
                    <li className="list-group-item">
                        <a href="userrate.html">Rated movies</a>
                    </li>
                </ul>
            </div>
            <div className="user-fav">
                <p>Others</p>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/changepassword"><a href="#">Change password</a></Link>
                    </li>
                    <li className="list-group-item">
                        <a href="#">Log out</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
