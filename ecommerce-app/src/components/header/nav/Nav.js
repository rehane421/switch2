import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';

import "./Nav.css";

function Nav() {
  return (
    <div className="nav d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 part1 d-flex align-items-center">
            <Button className="bg-g text-white cat-tab">
              <GridViewOutlinedIcon /> &nbsp; Browse All Categories
              <KeyboardArrowDownOutlinedIcon />
            </Button>
          </div>

          <div className="col-sm-7 part2">
            <nav>
              <ul className="list list-inline mb-0">
                <li className="list-inline-item">
                  <Button>
                    <Link to="/details">
                        Deals
                    </Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/">Home</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/about">About</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/shop">Shop</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/">Vendors</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/">Mega Menu<KeyboardArrowDownOutlinedIcon /></Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/">Home</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Pages<KeyboardArrowDownOutlinedIcon /></Link>
                  </Button>
                  <div className="dropdown-menu">
                    <ul>
                      <li><Link to='/about'>About Us</Link></li>
                      <li><Link to='/contact'>Contact</Link></li>
                      <li><Link to='/about'>My Account</Link></li>
                      <li><Link to='/about'>Login</Link></li>
                      <li><Link to='/about'>Register</Link></li>
                      <li><Link to='/about'>Forget password</Link></li>
                      <li><Link to='/about'>Reset password</Link></li>
                      <li><Link to='/about'>Purchase Guide</Link></li>
                      <li><Link to='/about'>Privacy</Link></li>
                      <li><Link to='/about'>Terms of Service</Link></li>
                      <li><Link to='/about'>404 Page</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/contact">Contact<KeyboardArrowDownOutlinedIcon /></Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="col-sm-2 part3 d-flex align-items-center">
            <div className="phNo d-flex align-items-center">
              <span><HeadphonesOutlinedIcon /></span>
              <div className="info ml-3">
                <h3 className="text-g mb-0">1900 - 888</h3>
                <p className="mb-0">24/7 Customer support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
