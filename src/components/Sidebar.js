import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="user-information">
            <div className="user-img">
                <Link href="#">
                    <img src="images/uploads/user-img.png" alt="" />
                    <br />
                </Link>
                <Button variant="danger">Change avatar</Button>
            </div>
            <div className="user-fav">
                <p>Account Details</p>
                <ul className="list-group">
                    <li className="list-group-item active">
                        <Link to="/userprofile">Profile</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/wishlistgrid"><Link href="#">Wish List</Link></Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/movierated"><Link href="#">Reated Movie</Link></Link>
                    </li>
                </ul>
            </div>
            <div className="user-fav">
                <p>Others</p>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/changepassword">Change password</Link>
                    </li>
                    <li className="list-group-item">
                        <Link href="#">Log out</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

