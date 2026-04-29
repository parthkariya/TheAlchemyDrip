import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer, NavbarHome } from "./components";

import {
  Home,
  About,
  Cart,
  Checkout,
  Products,
  SingleProduct,
  Error,
  PrivateRoute,
  ContactUs,
  AuthWrapper,
  Wishlist,
  MyProfile,
  PrivacyPolicy,
  TermsCondition,
  ShippingDeliveryPolicy,
} from "./pages";
import CancellationRefund from "./pages/CancellationRefund";
import ProPage from "./pages/ProPage";
import ExchangeReturnPg from "./pages/ExchangeReturnPg";
import ExchangeReturnDetails from "./pages/ExchangeReturnDetails";
import ExchangeReturnPolicy from "./pages/exchangeReturnPolicy/ExchangeReturnPolicy";
import Cookies from "js-cookie";
import CheckoutsPage from "./pages/CheckoutsPage";
import MaintenanceBanner from "./components/MaintenanceBanner";

function App() {
  useEffect(() => {
    const clearCookiesForPath = (path) => {
      const allCookies = Cookies.get(); // Get all cookies
      for (let cookieName in allCookies) {
        Cookies.remove(cookieName, { path }); // Remove each cookie for the specific path
      }
    };

    clearCookiesForPath("https://theAlchemydripuniforms.com/");
  }, []);

  document.cookie.split(";").forEach((c) => {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });

  return (
    <AuthWrapper>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            {/* <NavbarHome /> */}
            <Home />
          </Route>
          <Route exact path="/about">
            {/* <Navbar /> */}

            <NavbarHome />
            <MaintenanceBanner />

            <About />
          </Route>
          <Route exact path="/contactus">
            {/* <Navbar /> */}
            <NavbarHome />
            <MaintenanceBanner />

            <ContactUs />
          </Route>
          <Route exact path="/cart">
            {/* <Navbar /> */}
            <NavbarHome />
            <MaintenanceBanner />

            <Cart />
          </Route>
          <Route exact path="/wishlist">
            {/* <Navbar /> */}
            <NavbarHome />
            <MaintenanceBanner />

            <Wishlist />
          </Route>
          <Route exact path="/checkout">
            {/* <Navbar /> */}
            <NavbarHome />
            <MaintenanceBanner />

            <Checkout />
          </Route>
          <Route exact path="/checkouts">
            {/* <Navbar /> */}
            <NavbarHome />
            <MaintenanceBanner />

            <CheckoutsPage />
          </Route>
          <Route exact path="/products">
            <NavbarHome />
            <MaintenanceBanner />

            <Products />
          </Route>
          <Route exact path="/ExchangeReturnPg">
            <NavbarHome />
            <MaintenanceBanner />

            <ExchangeReturnPg />
          </Route>
          <Route exact path="/ExchangeReturnDetails">
            <NavbarHome />
            <MaintenanceBanner />

            <ExchangeReturnDetails />
          </Route>
          <PrivateRoute exact path="/MyProfile">
            {/* <Navbar /> */}
            <NavbarHome />
            <MaintenanceBanner />

            <MyProfile />
          </PrivateRoute>
          <Route exact path="/PrivacyPolicy">
            {/* <Navbar /> */}
            <NavbarHome />
            <MaintenanceBanner />

            <PrivacyPolicy />
          </Route>
          <Route exact path="/TermsCondition">
            {/* <Navbar /> */}
            <NavbarHome />
            <MaintenanceBanner />

            <TermsCondition />
          </Route>
          <Route exact path="/CancellationRefund">
            <Navbar />
            <MaintenanceBanner />

            <CancellationRefund />
          </Route>
          <Route exact path="/ShippingDeliveryPolicy">
            <NavbarHome />
            <MaintenanceBanner />

            <ShippingDeliveryPolicy />
          </Route>
          <Route exact path="/ExchangeReturnPolicy">
            <NavbarHome />
            <MaintenanceBanner />

            <ExchangeReturnPolicy />
          </Route>
          <Route exact path="/Propage/:id">
            {/* <Navbar /> */}
            <NavbarHome />
            <MaintenanceBanner />

            <ProPage />
          </Route>

          {/* <Route exact path="/MyProfile">
            <Navbar />
            <MyProfile />
          </Route> */}
          <Route
            exact
            path="/products/:id/abc/:idd"
            children={<SingleProduct />}
          >
            {/* <Navbar /> */}
          </Route>
          <Route exact path="*">
            {/* <Navbar /> */}
            <NavbarHome />
            <MaintenanceBanner />

            <Error />
          </Route>
          {/* </Route> */}
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
