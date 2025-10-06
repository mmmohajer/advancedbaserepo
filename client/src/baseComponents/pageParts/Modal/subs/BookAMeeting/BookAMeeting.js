import Script from "next/script";

import Div from "@/baseComponents/reusableComponents/Div";

const BookAMeeting = () => {
  const username = "mohammad-aqd6";
  const showDetails = 1;
  const showCookies = 1;
  const type = "introductory-mentorship-consultation";
  return (
    <>
      <Div
        className="calendly-inline-widget of-hidden width-per-100"
        data-url={`https://calendly.com/${username}${
          type ? `/${type}` : ""
        }?hide_landing_page_details=${showDetails}&hide_gdpr_banner=${showCookies}`}
        style={{ height: "70vh" }}
      ></Div>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  );
};

export default BookAMeeting;
