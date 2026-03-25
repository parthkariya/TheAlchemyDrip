import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  DashboardMenu,
  PageHero,
  UserProfile,
  UserAddress,
  MyOrders,
  ReferFriend,
  OrderIssue,
  Notifications,
} from "../components";
import {
  PROFILE_SCREEN,
  ADDRESS_TAB,
  MY_ORDER_TAB,
  NOTIFICAION_TAB,
  RAISE_TICKET_TAB,
  USER_PROFILE_TAB,
} from "../utils/constants";

const MyProfile = () => {
  const [activeTab, setTabMenu] = useState(USER_PROFILE_TAB);

  window.scrollTo(0, 0);

  useEffect(() => {
    var activetabs = localStorage.getItem("activetab");
    // console.log("activetabs", activetabs);
    if (activetabs) {
      var tabInt = parseInt(activetabs);
      changeTab(tabInt);
    }
  }, []);

  const changeTab = (selecttab) => {
    localStorage.setItem("activetab", selecttab);
    setTabMenu(selecttab);
  };
  return (
    <main>
      <PageHero title="My Profile" />
      <Wrapper className="page section section-center">
        <div className="left-part">
          <DashboardMenu activeTab={activeTab} changeTab={changeTab} />
        </div>
        <div className="right-part">
          {activeTab == USER_PROFILE_TAB ? (
            <UserProfile />
          ) : activeTab == ADDRESS_TAB ? (
            <UserAddress screenType={PROFILE_SCREEN} />
          ) : activeTab == MY_ORDER_TAB ? (
            <MyOrders />
          ) : activeTab == RAISE_TICKET_TAB ? (
            <OrderIssue />
          ) : activeTab == NOTIFICAION_TAB ? (
            <Notifications />
          ) : null}

          {activeTab == MY_ORDER_TAB ? (
            <>
              <p className="return_exchange_note">
                Note: Orders can be exchanged/returned once full order is
                completed. For any concerns kindly contact us at{" "}
                <a
                  style={{ cursor: "pointer", color: "#5d5d9c" }}
                  href="tel:+918073209270"
                >
                  +91 80732 09270
                </a>
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: flex;
  .left-part {
    max-width: 100%;
    width: 100%;
  }
  .right-part {
    flex: 0 0 100%;
    max-width: calc(100% - 280px);
    padding-left: 30px;
    max-height: 530px !important;
  }

  .return_exchange_note {
    margin-top: 1rem;
    font-weight: 600;
  }
  @media screen and (max-width: 980px) {
    flex-wrap: wrap;
    .right-part,
    .left-part {
      padding: 0px;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;
export default MyProfile;
