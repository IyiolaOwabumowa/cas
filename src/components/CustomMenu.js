import React, { useState } from "react";
import { Menu, Header } from "semantic-ui-react";

function CustomMenu(props) {
  return (
    <>
      <Menu className="menu-cas" pointing secondary>
        <Menu.Item>
          <Header
            as="h3"
            style={{ color: "#0e2a45", fontFamily: "Raleway", marginLeft: 20 }}
          >
            {props.title}
          </Header>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item name="Sign Out"  />
        </Menu.Menu>
      </Menu>
    </>
  );
}

export default CustomMenu;
