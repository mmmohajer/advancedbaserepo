import { useState, useEffect, use } from "react";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";

import Div from "@/baseComponents/reusableComponents/Div";
import Anchor from "@/baseComponents/reusableComponents/Anchor";
import Icon from "@/baseComponents/reusableComponents/Icon";

import Hamburger from "./subs/Hamburger";
import { MENU_ITEMS } from "./constants";

const SideBarDashboard = () => {
  const profile = useSelector((state) => state.profile);
  const sideBarDashboardIsActive = useSelector(
    (state) => state.sideBarDashboardIsActive
  );
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
        className={cx(
          "height-vh-full of-y-auto global-transition-one of-x-hidden flex--shrink--0",
          sideBarDashboardIsActive ? "width-px-150" : "width-px-50"
        )}
      >
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className="br-bottom-solid-2 br-black height-px-85"
        >
          <Hamburger />
        </Div>
        <Div className="p-all-16 br-right-solid-2 br-black flex--grow--1">
          {menuItems?.map((item, idx) => (
            <Div type="flex" key={idx}>
              <Anchor to={item?.url} anchorType={"scale"}>
                <Div type="flex" vAlign="center" key={idx} className="m-b-16">
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
                  {sideBarDashboardIsActive ? (
                    <Div
                      className={cx(
                        "mouse-hand m-l-4",
                        activeDashboardItem === item?.identifier
                          ? "text-blue"
                          : "text-gray"
                      )}
                    >
                      {item?.title}
                    </Div>
                  ) : null}
                </Div>
              </Anchor>
            </Div>
          ))}
        </Div>
      </Div>
    </>
  );
};

export default SideBarDashboard;
