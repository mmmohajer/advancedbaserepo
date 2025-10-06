import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import cx from "classnames";

import Div from "@/baseComponents/reusableComponents/Div";
import Anchor from "@/baseComponents/reusableComponents/Anchor";
import Icon from "@/baseComponents/reusableComponents/Icon";

import { MENU_ITEMS } from "./constants";

const FooterNavigation = () => {
  const profile = useSelector((state) => state.profile);

  const activeDashboardItem = useSelector((state) => state.activeDashboardItem);

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    if (profile?.user?.groups?.length && MENU_ITEMS) {
      if (profile?.user?.groups.includes("ADMIN")) {
        setMenuItems(MENU_ITEMS["ADMIN"]);
      }
    }
  }, [profile, MENU_ITEMS]);

  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        className="width-per-100 br-top-solid-2 br-black height-px-80 p-x-16"
      >
        <Div
          type="flex"
          vAlign="center"
          distributedBetween
          className="flex--grow--1"
        >
          {menuItems?.map((item, idx) => (
            <Div type="flex" key={idx}>
              <Anchor to={item?.url} anchorType={"scale"}>
                <Div
                  type="flex"
                  direction="vertical"
                  hAlign="center"
                  vAlign="center"
                  key={idx}
                  className=""
                >
                  <Div
                    type="flex"
                    hAlign="center"
                    vAlign="center"
                    className="width-px-20 height-px-20"
                  >
                    <Icon
                      type={item?.icon}
                      color={
                        activeDashboardItem === item?.identifier
                          ? "blue"
                          : "gray"
                      }
                    />
                  </Div>

                  <Div
                    className={cx(
                      "mouse-hand",
                      activeDashboardItem === item?.identifier
                        ? "text-blue"
                        : "text-gray"
                    )}
                  >
                    {item?.title}
                  </Div>
                </Div>
              </Anchor>
            </Div>
          ))}
        </Div>
      </Div>
    </>
  );
};

export default FooterNavigation;
