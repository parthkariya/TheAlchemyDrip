import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ACCEPT_HEADER, get_city, get_city_category } from "../utils/constants";
import PageHero from "./PageHero";
import ReactModal from "react-modal";
import { useFilterContext } from "../context/filter_context";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import LoginModule from "./LoginModule";
import { useHistory } from "react-router-dom";

// Default city landmark SVG icon (used when city has no image)
const DefaultCityIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="8"
      y="28"
      width="48"
      height="28"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="20"
      y="20"
      width="24"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="28"
      y="12"
      width="8"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="32" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    <rect
      x="14"
      y="36"
      width="8"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="42"
      y="36"
      width="8"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="26"
      y="40"
      width="12"
      height="16"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    backgroundColor: "none",
    border: "none",
    borderRadius: "5px",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};

const CityGrid = ({ getdrop, setdrop }) => {
  const [cities, setCities] = useState([]);
  const [citiesLoading, setCitiesLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState(null);

  // Schools state — fetched via POST get-city-category with city_id
  const [schools, setSchools] = useState([]);
  const [schoolsLoading, setSchoolsLoading] = useState(false);

  // Scroll ref for school section
  const schoolSectionRef = useRef(null);

  // Modal & password state (same as CategoryGrid)
  const [getModal, setModal] = useState(false);
  const [getCategoryId, setCategoryId] = useState(false);
  const [getslug, setslug] = useState("");
  const [getpassword, setpassword] = useState("");
  const [showscreen, setShowlogin] = useState();

  const { updateFilters } = useFilterContext();
  const { setMallRegister } = useProductsContext();
  const { isLogin } = useUserContext();
  let history = useHistory();

  // ── 1. Fetch cities on mount ──────────────────────────────────────────────
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(get_city, {
          headers: { Accept: ACCEPT_HEADER },
        });
        const data =
          response.data?.records || response.data?.data || response.data || [];
        setCities(Array.isArray(data) ? data.filter((c) => c.status == 1) : []);
      } catch (err) {
        console.error("get-city error:", err);
      } finally {
        setCitiesLoading(false);
      }
    };
    fetchCities();
  }, []);

  // ── 2. Fetch schools by city_id via POST ──────────────────────────────────
  const fetchSchoolsByCity = async (cityId) => {
    setSchoolsLoading(true);
    setSchools([]);
    try {
      const formData = new FormData();
      formData.append("city_id", cityId);

      const response = await axios.post(get_city_category, formData, {
        headers: {
          Accept: ACCEPT_HEADER,
          // Content-Type is set automatically by browser for FormData
        },
      });

      // API returns { success: 1, records: [...] }
      const data = response.data?.records || response.data?.data || [];
      setSchools(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("get-city-category error:", err);
      setSchools([]);
    } finally {
      setSchoolsLoading(false);
    }
  };

  // ── 3. Handle city click ──────────────────────────────────────────────────
  const handleCityClick = (city) => {
    setSelectedCity(city);
    fetchSchoolsByCity(city.id);
    setTimeout(() => {
      schoolSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  // ── 4. Password submit (same as CategoryGrid.SigninMall) ──────────────────
  const SigninMall = async () => {
    if (getpassword === "") {
      alert("Enter the password......!");
      return;
    }
    const params = { category: getCategoryId, password: getpassword };
    localStorage.setItem("shiftingcharge", "0");
    localStorage.setItem("categoryid", "");
    const data = await setMallRegister(params);
    if (data && data.status === 1) {
      localStorage.setItem(
        "shiftingcharge",
        JSON.stringify(data?.shipping_rate || ""),
      );
      localStorage.setItem(
        "categoryid",
        JSON.stringify(data?.category_id || ""),
      );
      setModal(false);
      setShowlogin(true);
      setdrop(1);
      if (isLogin === true) {
        history.push("/products");
      }
    }
  };

  return (
    <>
      {/* <PageHero title="City" /> */}
      <Wrapper>
        {/* ── City Section ── */}
        <div className="section-center">
          <div className="cities-heading">
            <p>Popular Cities</p>
            <div className="underline" />
          </div>

          {citiesLoading ? (
            <p className="loading-text">Loading cities...</p>
          ) : cities.length === 0 ? (
            <p className="loading-text">No cities found.</p>
          ) : (
            <div className="city-row">
              {cities.map((city, index) => (
                <div
                  key={city.id || index}
                  className={`city-card ${
                    selectedCity?.id === city.id ? "active" : ""
                  }`}
                  onClick={() => handleCityClick(city)}
                >
                  <div className="city-icon">
                    {city.image_full_path ? (
                      <img src={city.image_full_path} alt={city.name} />
                    ) : (
                      <span className="svg-icon">
                        <DefaultCityIcon />
                      </span>
                    )}
                  </div>
                  <p className="city-name">{city.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── School Section (appears after city click) ── */}
        {selectedCity && (
          <div className="school-section" ref={schoolSectionRef}>
            <div className="section-center">
              <div className="school-section-title">
                <h3>
                  Schools in{" "}
                  <span className="selected_school_name">
                    {selectedCity.name}
                  </span>
                </h3>
                <div className="underline" />
              </div>

              {schoolsLoading ? (
                <p className="loading-text">Loading schools...</p>
              ) : schools.length === 0 ? (
                <p className="loading-text">No schools found for this city.</p>
              ) : (
                <div className="row">
                  {schools.map((c, index) => (
                    <div
                      key={c.id || index}
                      style={{ cursor: "pointer" }}
                      className="col-md-4 resp_cat_img_card"
                      onClick={() => {
                        setModal(true);
                        setslug(c.slug);
                        setCategoryId(c.id);
                      }}
                    >
                      <div className="a">
                        <img
                          className="resp_cat_img"
                          src={c.image_full_path}
                          alt={c.name}
                          style={{ marginBottom: "0px !important" }}
                        />
                        <button
                          onClick={updateFilters}
                          type="button"
                          name="category"
                          value={c.name}
                        >
                          {c.name}
                        </button>
                      </div>
                      <p
                        className="cat_school_name"
                        style={{
                          color: "#000",
                          fontWeight: "500",
                          fontSize: "18px",
                          marginBottom: "10px",
                        }}
                      >
                        {c.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Password Modal (same as CategoryGrid) ── */}
        <ReactModal
          isOpen={getModal}
          onRequestClose={() => setModal(false)}
          style={customModalStyles}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0.6rem",
              background: "gainsboro",
            }}
          >
            <b style={{ fontSize: "18px", margin: "0px" }}>PASSWORD</b>
          </div>
          <div className="model_sizing">
            <div>
              <input
                type="text"
                placeholder="Enter password"
                className="password_input_modal"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <button
              className="btn"
              style={{ width: "100%", margin: "0px" }}
              onClick={SigninMall}
            >
              Submit
            </button>
          </div>
        </ReactModal>

        {!isLogin && (
          <LoginModule showscreen={showscreen} setShowlogin={setShowlogin} />
        )}
      </Wrapper>
    </>
  );
};

// ─── Styles ───────────────────────────────────────────────────────────────────
const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding: 60px 0;

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }

  /* ── City heading ── */
  .cities-heading {
    text-align: center;
    margin-bottom: 2rem;
    p {
      font-size: 22px;
      font-weight: 600;
      color: #333;
      margin: 0;
    }
    .underline {
      width: 60px;
      height: 3px;
      background: #fa6d5a;
      margin: 0 auto;
      border-radius: 2px;
    }
  }

  .loading-text {
    text-align: center;
    color: #888;
    padding: 2rem 0;
  }

  /* ── City row ── */
  .city-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.5rem;
    margin-bottom: 3rem;
  }

  .city-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease;
    min-width: 80px;

    &:hover {
      transform: translateY(-4px);
    }

    &.active .city-icon {
      border-color: #5d5d9c;
      background: #efeff7;
    }

    &.active .city-name {
      color: #5d5d9c;
      font-weight: 600;
    }
  }

  .city-icon {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 2px solid #d0d0d0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
    background: #fff;
    transition: border-color 0.2s, background 0.2s;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .svg-icon {
      width: 44px;
      height: 44px;
      color: #5d5d9c;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  .city-name {
    font-size: 14px;
    color: #444;
    margin: 0;
    text-align: center;
    transition: color 0.2s;
  }

  /* ── School section ── */
  .school-section {
    padding-top: 2rem;
    scroll-margin-top: 80px;
  }

  .school-section-title {
    text-align: center;
    margin-bottom: 2rem;
    h3 {
      font-size: 24px;
      font-weight: 600;
      color: #000;
      margin-bottom: 0.5rem;
    }
    .underline {
      width: 60px;
      height: 3px;
      background: #fa6d5a;
      margin: 0 auto;
      border-radius: 2px;
    }
    .selected_school_name {
      color: #5d5d9c;
    }
  }

  /* ── School grid (same as CategoryGrid) ── */
  .row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .col-md-4 {
    height: 100%;
    width: 275px;
    max-width: 275px;
    flex: 0 0 33.333333%;
    text-align: center;
    position: relative;
    overflow: hidden;

    .a {
      img {
        height: 275px;
        width: 275px;
        display: flex;
      }
      button {
        border: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0px;
        background: rgb(0 0 0 / 0.5);
        width: calc(100% - 75px);
        margin: 0 auto;
        color: #fff;
        font-size: 28px;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        transform: translateY(100%);
        transition: all 0.5s ease;
        visibility: hidden;
        opacity: 0;
        cursor: pointer;
      }
      :hover button {
        transform: translateY(0%);
        visibility: visible;
        opacity: 1;
        cursor: pointer;
      }
    }
  }

  button {
    border: none;
  }

  @media (max-width: 767px) {
    .city-row {
      gap: 1.5rem;
    }
    .row {
      margin-right: -15px;
      margin-left: -15px;
    }
    .col-md-4 {
      padding: 0 15px;
      max-width: 100%;
      flex: 0 0 100%;
    }
  }
`;

export default CityGrid;
