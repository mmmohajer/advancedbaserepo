export const baseClass = () => "p-y-8 p-x-16 br-rad-px-50 mouse-hand";

export const disabledClass = () =>
  "bg-silver text-gray-500 cursor-not-allowed opacity-60";

export const typeClass = (btnType) => {
  if (btnType === 1) {
    return "bg-black br-all-solid-2 br-color-black bg-black-on-hover text-blue text-white-on-hover br-color-five-on-hover";
  }
  return "";
};
