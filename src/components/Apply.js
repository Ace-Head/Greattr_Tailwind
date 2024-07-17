import StepIconsParent from "./StepIconsParent";
import PropTypes from "prop-types";

const Apply = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-text-inverse flex flex-col items-center justify-start pt-[0rem] px-[4.187rem] pb-[8rem] box-border min-h-[43.313rem] max-w-full text-center text-[5.713rem] text-text-default font-heading-h6 mq825:gap-[1.313rem] mq825:pb-[5.188rem] mq825:box-border mq1250:gap-[2.688rem] mq1250:pl-[2.063rem] mq1250:pr-[2.063rem] mq1250:box-border ${className}`}
    >
      <div className="self-stretch rounded-[18.29px] bg-ghostwhite flex flex-col items-center justify-start pt-[3.568rem] px-[1.25rem] pb-[8.212rem] box-border gap-[5.5rem] max-w-full mq825:gap-[2.75rem] mq825:pt-[2.313rem] mq825:pb-[5.313rem] mq825:box-border mq450:gap-[1.375rem]">
        <div className="w-[83rem] flex flex-col items-center justify-center max-w-full">
          <div className="w-[36.375rem] relative tracking-[-0.03em] leading-[6.313rem] font-medium inline-block max-w-full mq825:text-[2.875rem] mq825:leading-[3.75rem] mq450:text-[1.688rem] mq450:leading-[2.5rem]">
            How to apply?
          </div>
        </div>
        <div className="w-[98.794rem] flex flex-row flex-wrap items-center justify-center gap-[3.287rem] max-w-full text-left text-[1.431rem] text-gray mq825:gap-[1.625rem]">
          <StepIconsParent
            googlePlaySvgrepoCom1="/applyicon.svg"
            heading3SpecialFinancingO="Download Greattr App"
            getStartedByDownloadingTh="Get started by downloading the Greattr app from the App Store or Google Play Store."
          />
          <StepIconsParent
            googlePlaySvgrepoCom1="/applyicon-1.svg"
            heading3SpecialFinancingO="Create Your Account"
            getStartedByDownloadingTh="Create your account and provide basic information to set up your profile."
          />
          <StepIconsParent
            googlePlaySvgrepoCom1="/applyicon-2.svg"
            heading3SpecialFinancingO="Choose Your Product"
            getStartedByDownloadingTh="From daily needs to big requirements, choose the type of product you need."
          />
          <StepIconsParent
            googlePlaySvgrepoCom1="/applyicon-3.svg"
            heading3SpecialFinancingO="Apply For Loan"
            getStartedByDownloadingTh="Once applied, you'll receive confirmation and approval details from our team."
          />
        </div>
      </div>
    </section>
  );
};

Apply.propTypes = {
  className: PropTypes.string,
};

export default Apply;
