import Div from "@/baseComponents/reusableComponents/Div";

const NotFound = () => {
  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className="global-min-full-vh"
      >
        <Div className="width-per-100 max-width-px-500 p-all-temp-8 text-center bg-black br-rad-md text-white">
          Oops! The page you're looking for isn't here.
        </Div>
      </Div>
    </>
  );
};

export default NotFound;
