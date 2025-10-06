import { useSelector } from "react-redux";

import Div from "@/baseComponents/reusableComponents/Div";
import AppImage from "@/baseComponents/reusableComponents/AppImage";
import Icon from "@/baseComponents/reusableComponents/Icon";
import Anchor from "@/baseComponents/reusableComponents/Anchor";

import { COLORS } from "@/constants/vars";
import { STORAGE_BASE_URL } from "config";

const AppHeader = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <>
      <Div
        type="flex"
        distributedBetween
        vAlign="center"
        className="height-px-85 br-bottom-solid-2 br-black p-r-16"
      >
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className="mouse-hand p-x-16"
        >
          <Anchor to="/" ariaLabel="Go to Dashboard" anchorType="no-effect">
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              className="width-px-50 height-px-50 br-rad-per-50 of-hidden br-all-solid-2 br-black"
            >
              Logo
            </Div>
          </Anchor>
        </Div>
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className="width-px-50 height-px-50 br-rad-per-50 of-hidden"
        >
          {profile?.profile_photo ? (
            <AppImage
              src={profile?.profile_photo}
              width={50}
              heightOverWidthAsprctRatio={1}
              alt="User Avatar"
              className=""
            />
          ) : (
            <Icon type="circle-user" scale={3} color={"black"} />
          )}
        </Div>
      </Div>
    </>
  );
};

export default AppHeader;
