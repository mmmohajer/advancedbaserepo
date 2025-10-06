import cx from "classnames";
import Div from "@/baseComponents/reusableComponents/Div";

const Type1 = ({ btnText, className, ...props }) => {
  return (
    <>
      <button
        className={cx(
          "p-y-8 p-x-16 br-rad-px-50 mouse-hand bg-black br-all-solid-2 br-color-black bg-black-on-hover text-blue text-white-on-hover br-color-five-on-hover",
          className
        )}
        {...props}
      >
        {btnText}
      </button>
    </>
  );
};

export default Type1;
