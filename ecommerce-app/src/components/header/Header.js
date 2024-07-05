import "./Header.css";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import axios from "axios";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShareLocationOutlinedIcon from "@mui/icons-material/ShareLocationOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Button from "@mui/material/Button";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

import "./Header.css";
import Logo from "../../assets/images/logo.jpg";
import Select from "../selectDrop/Select";
import Nav from "./nav/Nav.js";

function Header() {
  const [categories, setCategories] = useState([
    "Wines and Drinks",
    "Fast food",
    "Vegetables",
    "Fresh fruits",
    "Pets Food & Toy",
    "Fast food",
    "Bread and Juice",
    "Clothing & Beauty",
    "Milks and Diaries",
    "Fresh Seafood",
  ]);

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const countryList = [];

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.data.forEach((item, index) => {
            countryList.push(item.country);
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} />
            </div>

            {/* header search */}
            <div className="col-sm-5">
              <div className="header-search d-flex align-items-center">
                <Select data={categories} placeholder={"All categories"} />
                <div className="search d-flex">
                  <input type="text" placeholder="search for items.." />
                  <SearchIcon className="searchIcon cursor" />
                </div>
              </div>
            </div>
            <div className="col-sm-5 d-flex align-items-center">
              <div className="ml-auto d-flex align-items-center justify-content-center">
                <div className="country-wrapper">
                  <Select
                    data={countryList}
                    placeholder={"Your Location"}
                    icon={<LocationOnOutlinedIcon style={{ opacity: "0.5" }} />}
                  />
                </div>
                <ClickAwayListener onClickAway={() => setIsOpenDropdown(false)}>
                <ul className="list list-inline mb-0 header-tab">
                  <li className="list-inline-item">
                    <span>
                      <CompareArrowsOutlinedIcon className="mar4" />
                      <span className="badge bg-success rounded-circle">3</span>
                      Compare
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <FavoriteBorderOutlinedIcon className="mar4" />
                      <span className="badge bg-success rounded-circle">5</span>
                      Wishlist
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <ShoppingCartOutlinedIcon className="mar4" />
                      <span className="badge bg-success rounded-circle">7</span>
                      Cart
                    </span>
                  </li>
                    <li className="list-inline-item">
                      <span onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
                        <PermIdentityOutlinedIcon className="mar4" />
                        Account
                      </span>
                      {isOpenDropdown !== false && (
                        <ul className="dropdown-menu2">
                          <li>
                            <Button>
                              <PermIdentityOutlinedIcon />
                              My Account
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <ShareLocationOutlinedIcon />
                              Order Tracking
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <LocalOfferOutlinedIcon />
                              My Voucher
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <FavoriteBorderOutlinedIcon />
                              My Wishlist
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <TuneOutlinedIcon />
                              Settings
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <LogoutOutlinedIcon />
                              Sign out
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                </ul>
                </ClickAwayListener>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Nav />
    </>
  );
}

export default Header;
