import PropTypes from "prop-types";

const StepIconsParent = ({
  className = "",
  googlePlaySvgrepoCom1,
  heading3SpecialFinancingO,
  getStartedByDownloadingTh,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[1.431rem] min-w-[17.625rem] max-w-full text-left text-[1.431rem] text-gray font-heading-h6 ${className}`}
    >
      <img
        className="w-[3.569rem] h-[3.569rem] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={googlePlaySvgrepoCom1}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
        <div className="self-stretch relative leading-[1.714rem] font-medium mq450:text-[1.125rem] mq450:leading-[1.375rem]">
          {heading3SpecialFinancingO}
        </div>
        <div className="self-stretch relative text-[1.069rem] leading-[1.982rem]">
          {getStartedByDownloadingTh}
        </div>
      </div>
    </div>
  );
};

StepIconsParent.propTypes = {
  className: PropTypes.string,
  googlePlaySvgrepoCom1: PropTypes.string,
  heading3SpecialFinancingO: PropTypes.string,
  getStartedByDownloadingTh: PropTypes.string,
};

export default StepIconsParent;
