import Column1 from "./Column1";
import PropTypes from "prop-types";

const FeatureGrid = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[4.187rem] pb-[11.431rem] box-border max-w-full text-left text-[4.569rem] text-text-inverse font-heading-h6 mq1250:pl-[2.063rem] mq1250:pr-[2.063rem] mq1250:pb-[7.438rem] mq1250:box-border mq450:pb-[4.813rem] mq450:box-border ${className}`}
    >
      <div className="flex-1 rounded-[22.86px] bg-darkslateblue overflow-hidden flex flex-row items-start justify-between pt-[6.856rem] pb-[0rem] pr-[15.125rem] pl-[5.375rem] box-border max-w-full shrink-0 gap-[1.25rem] mq825:pl-[1.313rem] mq825:pt-[4.438rem] mq825:pr-[3.75rem] mq825:box-border mq1250:pl-[2.688rem] mq1250:pr-[7.563rem] mq1250:box-border mq450:pr-[1.25rem] mq450:box-border mq1575:flex-wrap">
        <div className="w-[37.431rem] flex flex-col items-start justify-start gap-[3.431rem] min-w-[37.431rem] max-w-full mq825:gap-[1.688rem] mq1250:min-w-full mq1575:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.287rem] max-w-full mq825:gap-[1.125rem]">
            <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0rem] box-border gap-[1.143rem] max-w-full">
              <div className="w-[42.856rem] flex flex-col items-start justify-start max-w-[115%] shrink-0">
                <div className="self-stretch relative tracking-[-0.03em] leading-[110%] font-medium mq825:text-[3.625rem] mq825:leading-[4rem] mq450:text-[2.75rem] mq450:leading-[3rem]">
                  <p className="m-0">{`Small Loans, `}</p>
                  <p className="m-0">Big Changes</p>
                </div>
              </div>
              <div className="self-stretch relative text-[1.288rem] leading-[180%] font-medium font-text-small mq450:text-[1rem] mq450:leading-[1.875rem]">
                <p className="m-0">{`Enjoy the convenience of easy payments `}</p>
                <p className="m-0">with low cost or in EMIs</p>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[4.568rem] max-w-full text-[1.144rem] font-text-small mq825:flex-wrap mq825:gap-[2.313rem]">
              <Column1
                badgeName="radioGroup-3"
                paperless="100% Paperless"
                badgeName1="radioGroup-3"
                noCollateralFree="No Collateral Free"
              />
              <Column1
                badgeName="radioGroup-4"
                paperless="Flexible Tenure"
                badgeName1="radioGroup-4"
                noCollateralFree="Manage Your Bills"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <img
              className="h-[3.569rem] w-[12.056rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/google-store.svg"
            />
          </div>
        </div>
        <img
          className="w-[27.25rem] relative max-h-full overflow-hidden shrink-0 max-w-full mq1575:flex-1"
          loading="lazy"
          alt=""
          src="/ctaimage.svg"
        />
      </div>
    </section>
  );
};

FeatureGrid.propTypes = {
  className: PropTypes.string,
};

export default FeatureGrid;
