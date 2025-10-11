import cx from "classnames";

import Div from "@/baseComponents/reusableComponents/Div";

const AppSectionContainer = ({ hasPadding = true, children }) => {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        className={cx("width-per-100", {
          "p-all-16": hasPadding,
        })}
      >
        {children}
      </Div>
    </>
  );
};

export default AppSectionContainer;
