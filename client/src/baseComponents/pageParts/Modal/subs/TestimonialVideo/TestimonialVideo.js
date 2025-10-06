import { useSelector } from "react-redux";

import Div from "@/baseComponents/reusableComponents/Div";
import AppVideo from "@/baseComponents/reusableComponents/AppVideo";

import useDivWidth from "@/hooks/useDivWidth";

const TestimonialVideo = () => {
  const { video, previewPhoto } = useSelector((state) => state.modal.props);

  const { containerRef, width } = useDivWidth();
  return (
    <>
      <Div
        ref={containerRef}
        className="br-rad-md of-hidden width-per-100 global-img-reg-asp"
      >
        {width ? (
          <AppVideo
            key={`tipVideo-${width}`}
            src={video}
            width={width * 1}
            height={(width * 1 * 1080) / 1920}
            poster={previewPhoto}
            autoPlay
          />
        ) : (
          ""
        )}
      </Div>
    </>
  );
};

export default TestimonialVideo;
