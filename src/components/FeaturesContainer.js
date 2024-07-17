import Card from "./Card";
import PropTypes from "prop-types";

const FeaturesContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center gap-[2.287rem] max-w-full text-left text-[2.319rem] text-text-default font-heading-h6 mq825:gap-[1.125rem] mq1575:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-center pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[2.318rem] min-w-[43.938rem] max-w-full shrink-0 mq825:gap-[1.188rem] mq1250:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border gap-[2.4rem] max-w-full shrink-0 mq825:gap-[1.188rem] mq1250:flex-wrap">
          <div className="flex-1 rounded-[24.03px] bg-background-muted overflow-hidden flex flex-col items-start justify-start py-[4.206rem] px-[2.437rem] box-border min-w-[24.438rem] max-w-full mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.6rem]">
              <div className="self-stretch relative tracking-[-0.03em] leading-[2.813rem] font-medium mq825:text-[1.875rem] mq825:leading-[2.25rem] mq450:text-[1.375rem] mq450:leading-[1.688rem]">
                Increased Sales
              </div>
              <div className="self-stretch relative text-[1.35rem] leading-[180%] font-medium font-text-small text-text-muted mq450:text-[1.063rem] mq450:leading-[1.938rem]">
                Offer BNPL options to attract more customers and boost sales.
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-[24.03px] bg-background-muted overflow-hidden flex flex-col items-start justify-start py-[4.206rem] px-[2.437rem] box-border min-w-[24.438rem] max-w-full mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.6rem]">
              <div className="self-stretch relative tracking-[-0.03em] leading-[2.813rem] font-medium mq825:text-[1.875rem] mq825:leading-[2.25rem] mq450:text-[1.375rem] mq450:leading-[1.688rem]">
                Customer Support
              </div>
              <div className="self-stretch relative text-[1.35rem] leading-[180%] font-medium font-text-small text-text-muted mq450:text-[1.063rem] mq450:leading-[1.938rem]">
                Guide customers seamlessly through loans and repayments.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border gap-[2.4rem] max-w-full shrink-0 mq825:gap-[1.188rem] mq1250:flex-wrap">
          <div className="flex-1 rounded-[24.03px] bg-background-muted overflow-hidden flex flex-col items-start justify-start py-[4.206rem] px-[2.437rem] box-border min-w-[24.438rem] max-w-full mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.6rem]">
              <div className="self-stretch relative tracking-[-0.03em] leading-[2.813rem] font-medium mq825:text-[1.875rem] mq825:leading-[2.25rem] mq450:text-[1.375rem] mq450:leading-[1.688rem]">
                Enhanced Loyalty
              </div>
              <div className="self-stretch relative text-[1.35rem] leading-[180%] font-medium font-text-small text-text-muted mq450:text-[1.063rem] mq450:leading-[1.938rem]">
                Build customer trust and loyalty with flexible financial
                solutions.
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-[24.03px] bg-background-muted overflow-hidden flex flex-col items-start justify-start py-[4.206rem] px-[2.437rem] box-border min-w-[24.438rem] max-w-full mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.6rem]">
              <div className="self-stretch relative tracking-[-0.03em] leading-[2.813rem] font-medium mq825:text-[1.875rem] mq825:leading-[2.25rem] mq450:text-[1.375rem] mq450:leading-[1.688rem]">
                Business Growth
              </div>
              <div className="self-stretch relative text-[1.35rem] leading-[180%] font-medium font-text-small text-text-muted mq450:text-[1.063rem] mq450:leading-[1.938rem]">
                Broaden your customer base with flexible payment options.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card
        forConsumers="For Merchants"
        enjoyFlexiblePaymentOptio="Increase sales and customer satisfaction"
        suitYourBudget="with BNPL options."
        app="/app-1@2x.png"
        propPadding="4.568rem 1.25rem 0.031rem 1.375rem"
      />
    </div>
  );
};

FeaturesContainer.propTypes = {
  className: PropTypes.string,
};

export default FeaturesContainer;
