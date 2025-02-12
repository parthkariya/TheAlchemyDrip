import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IImages from "../constants/IImages";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import Loading from "./Loading";

const NavbarHome = ({ getdrop }) => {
  const { openSideBar, closeSideBar } = useProductsContext();
  const { total_items } = useCartContext();

  const { isLogin, logindata } = useUserContext();
  const [getdata2, setdata2] = useState([]);

  const { getClass, class_data_loading } = useProductsContext();


  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // console.log("class_data_loading",class_data_loading);

  // useEffect(() => {
  //   console.log("first, ", openSideBar);
  // });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  useEffect(() => {
    // fetchCategorieslist(`${urll}/${slug}`);
    prodatalist();
    // console.log("data are", mall_signup_data);
  }, []);

  const prodatalist = async () => {
    const datalist = await localStorage.getItem("productdata");
    setdata2(JSON.parse(datalist));
  };

  const [getClassDta, setClassData] = useState([]);

  useEffect(() => {
    GetClassData();
  }, [])

  const GetClassData = async (type) => {
    const userid = await localStorage.getItem("userid");

    var params = {
      id: userid,
    }
    console.log("-=-=-=->", params);
    const data = await getClass(params);
    if (data) {
      if (data.status === 1) {
        console.log("class-data", data);
        setClassData(data?.data?.category);
        // history.push("/products");
        // history.push("/Propage/" + data.data[0].slug);
        // showscreen();
        // window.location.reload(false);
      }
    }
  }

  return (
    <NavContainer
      style={{
        background: "floralwhite",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      }}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img
              src={IImages.logo}
              alt=""
              style={{ height: "85px", width: "120px", objectFit: "contain" }}
            />
          </Link>

          <div className="nav-toggle nav_toggle_edit">
            <div className="nav_icons_flex">
              <Link to="/cart" className="cart-btn" onClick={closeSideBar}>
                <span className="cart-container">
                  <FaShoppingCart style={{ color: "black", fontSize: "25px" }} />
                  <span className="cart-value">{total_items}</span>
                </span>
              </Link>
              <button
                type="button"
                onClick={openSideBar}
                style={{ background: "white", border: "none" }}>
                <FaBars />
              </button>
            </div>
            {isLogin ? (
              <div className="navbar_inner_menu_flex">
                <Link to="/MyProfile" className="navbar_my_order_menu_resp">My Orders</Link>

                <div className="dropdown">
                  <div className="nav-linkk nav_link_position_top" style={{ fontSize: "18px" }}>
                    Sections&nbsp;
                    <i className="fa fa-caret-down"></i>
                  </div>
                  <div className="dropdown-content nav_link_position_bottom">
                    {getClassDta && getClassDta.length > 0 ? (
                      getClassDta.map((c, index) => {
                        return (
                          <>
                            <Link to={`/Propage/${c.slug}`}> {c.name}</Link>
                            {/* <Link
                        to={`/propage/${c.slug}`}
                        style={{ cursor: "pointer" }}
                        className="col-md-4"
                        key={index}
                        onClick={() => {
                          // setModal(true);
                        }}>
                        <div className="a">
                          <img
                            src={c.image_full_path}
                            alt=""
                            style={{ marginBottom: "0px !important" }}
                          />
                          <button type="button" name="category" value={c.name}>
                            {c.name}
                          </button>
                        </div>
                      </Link> */}
                          </>
                        );
                      })
                    ) : (
                      <>
                        {/* <Link to="/Propage/PrePrimarySection">Pre Primary</Link>
                      <Link to="/Propage/PRIMARYSECTION">Primary</Link>
                      <Link to="/Propage/UPPERPRIMARYSECTION">
                        Upper Primary
                      </Link> */}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

        </div>
        <ul className="nav-links" style={{ alignItems: "center" }}>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}

          {isLogin ? (
            <div className="dropdown">
              <div
                className="nav-linkk"
                style={{
                  color: "var(--clr-primary-darkred)",
                  fontWeight: "500",
                }}>
                Sections&nbsp;
                <i className="fa fa-caret-down"></i>
              </div>
              {/* {class_data_loading === true ? <>
                <Loading />

              </> : <> */}
              <div className="dropdown-content">
                {/* <div className="row"> */}
                {getClassDta && getClassDta.length > 0 ? (
                  getClassDta.map((c, index) => {
                    return (
                      <>
                        <Link to={`/Propage/${c.slug}`}> {c.name}</Link>
                        {/* <Link
                        to={`/propage/${c.slug}`}
                        style={{ cursor: "pointer" }}
                        className="col-md-4"
                        key={index}
                        onClick={() => {
                          // setModal(true);
                        }}>
                        <div className="a">
                          <img
                            src={c.image_full_path}
                            alt=""
                            style={{ marginBottom: "0px !important" }}
                          />
                          <button type="button" name="category" value={c.name}>
                            {c.name}
                          </button>
                        </div>
                      </Link> */}
                      </>
                    );
                  })
                ) : (
                  <>
                    {/* <Link to="/Propage/PrePrimarySection">
                      PrePrimarySection
                    </Link>
                    <Link to="/Propage/PRIMARYSECTION">PRIMARYSECTION</Link>
                    <Link to="/Propage/UPPERPRIMARYSECTION">
                      UPPERPRIMARYSECTION
                    </Link> */}
                  </>
                  // <p>No data found</p >
                )}
                {/* </div> */}
              </div>
              {/* </>} */}

              {/* <div className="dropdown-content">
              <Link to="https://www.amazon.in/l/27943762031?ie=UTF8&marketplaceID=A21TJRUUN4KGV&me=A33TVR7FZVY48E">
                Amazon
              </Link>
              <Link to="https://deodap.in/search?q=Vishwas">DeoDap</Link>
              <Link to="https://www.flipkart.com/search?q=VISHWAS%20COOKING%20OIL&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off">
                Flipkart
              </Link>
            </div> */}
            </div>
          ) : (
            ""
          )}

          {/* {isLogin && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )} */}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #5d5d9c;
  }
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    ${"" /* max-width: var(--max-width); */}
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 200px;
      /* height: 45px; */
      margin-left: -15px;
    }
  }

  .nav_toggle_edit {
    display: none;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-darkred);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    margin-bottom: 0px;
    display: none;
  }
  .cart-btn-wrapper {
    gap: 20px;
    display: none;
  }
  .cart-btn {
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-orange);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }

  @media (max-width: 992px) {
    .nav_toggle_edit {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .nav_link_position_top {
      position: relative;
    }
    .nav_link_position_bottom {
      position: absolute;
      right: 10px;
    }
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        font-size: 1.1rem;
        font-weight: 500;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          ${"" /* border-bottom: 2px solid var(--clr-primary-indianred); */}
          border-bottom: 2px solid var(--clr-primary-orange);
        }
      }
    }
    .cart-btn-wrapper {
      display: flex;
      flex-direction: row-reverse;
    }
  }
`;

export default NavbarHome;
