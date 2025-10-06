import cx from "classnames";

import Div from "@/baseComponents/reusableComponents/Div";

import Moon from "./subs/Moon";
import Sun from "./subs/Sun";
import Arrow from "./subs/Arrow";
import Quote from "./subs/Quote";
import Google from "./subs/Google";

const SVGIcon = ({
  type,
  fill = "none",
  stroke = "black",
  width = 30,
  height = 30,
}) => {
  const IconComponent = iconMap[type];
  if (!IconComponent) return null;
  return (
    <IconComponent fill={fill} stroke={stroke} height={height} width={width} />
  );
};

const iconMap = {
  moon: Moon,
  sun: Sun,
  arrow: Arrow,
  quote: Quote,
  google: Google,
};

export default SVGIcon;
