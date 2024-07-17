import Grid from "./Grid";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[9.143rem] box-border max-w-full text-left text-[7.144rem] text-text-default font-heading-h6 mq825:pb-[5.938rem] mq825:box-border mq450:pb-[3.875rem] mq450:box-border ${className}`}
    >
      <div className="w-[85.713rem] flex flex-row items-start justify-start gap-[5.5rem] max-w-full mq825:gap-[2.75rem] mq1250:flex-wrap mq450:gap-[1.375rem]">
        <div className="w-[42.856rem] flex flex-col items-start justify-start pt-[4.018rem] px-[0rem] pb-[0rem] box-border min-w-[42.856rem] max-w-full mq825:pt-[2.625rem] mq825:box-border mq825:min-w-full mq1250:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start shrink-0 max-w-full mq825:gap-[2.313rem] mq450:gap-[1.125rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.287rem] max-w-full mq825:gap-[1.125rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.143rem] max-w-full shrink-0">
                <div className="relative tracking-[-0.03em] leading-[110%] font-medium inline-block max-w-full mq825:text-[3.563rem] mq825:leading-[4.688rem] mq450:text-[2.125rem] mq450:leading-[3.125rem]">
                  <p className="m-0">Buy now,</p>
                  <p className="m-0">Pay Later</p>
                </div>
                <div className="self-stretch relative text-[1.713rem] leading-[170%] font-medium font-text-small mq450:text-[1.375rem] mq450:leading-[2.313rem]">
                  <p className="m-0">{`Enjoy the convenience of easy payments `}</p>
                  <p className="m-0">with low cost or in EMIs</p>
                </div>
              </div>
              <div className="w-[33.65rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-[1.288rem] font-text-small mq825:flex-wrap">
                <Grid
                  badgeName="radioGroup-1"
                  paperless="100% Paperless"
                  badgeName1="radioGroup-1"
                  noCollateralFree="No Collateral Free"
                />
                <Grid
                  badgeName="radioGroup-2"
                  paperless="Flexible Tenure"
                  badgeName1="radioGroup-2"
                  noCollateralFree="Manage Your Bills"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-[11.85px] overflow-hidden flex flex-row items-start justify-end pt-[8.675rem] px-[0.437rem] pb-[8.687rem] box-border bg-[url('/public/banner@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[24.313rem] shrink-0 max-w-full text-[4.25rem] text-text-inverse mq825:pt-[5.625rem] mq825:pb-[5.625rem] mq825:box-border mq825:min-w-full">
          <h1 className="m-0 w-[32.956rem] relative text-inherit leading-[120%] font-bold font-inherit inline-block shrink-0 max-w-full mq825:text-[3.375rem] mq825:leading-[4.063rem] mq450:text-[2.563rem] mq450:leading-[3.063rem]">
            The power to choose you own loan, now in you hands!
          </h1>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
