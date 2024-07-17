import Card from "./Card";
import PropTypes from "prop-types";

const ConsumerMerchantItems = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center gap-[2.287rem] max-w-full text-center text-[2.856rem] text-text-default font-heading-h6 mq825:gap-[1.125rem] mq1575:flex-wrap ${className}`}
    >
      <Card
        forConsumers="For Consumers"
        enjoyFlexiblePaymentOptio="Enjoy flexible payment options that "
        suitYourBudget="suit your budget."
        app="/app@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-center pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[2.318rem] min-w-[43.938rem] max-w-full shrink-0 text-left text-[2.319rem] mq825:gap-[1.188rem] mq1250:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border gap-[2.4rem] max-w-full shrink-0 mq825:gap-[1.188rem] mq1250:flex-wrap">
          <div className="flex-1 rounded-[24.03px] bg-background-muted overflow-hidden flex flex-col items-start justify-start py-[4.206rem] px-[2.437rem] box-border min-w-[24.438rem] max-w-full mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.6rem]">
              <div className="self-stretch relative tracking-[-0.03em] leading-[2.813rem] font-medium mq825:text-[1.875rem] mq825:leading-[2.25rem] mq450:text-[1.375rem] mq450:leading-[1.688rem]">
                Ease of Use
              </div>
              <div className="self-stretch relative text-[1.35rem] leading-[180%] font-medium font-text-small text-text-muted mq450:text-[1.063rem] mq450:leading-[1.938rem]">
                Apply for loans in minutes with our intuitive app interface.
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-[24.03px] bg-background-muted overflow-hidden flex flex-col items-start justify-start py-[4.206rem] px-[2.437rem] box-border min-w-[24.438rem] max-w-full mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.6rem]">
              <div className="self-stretch relative tracking-[-0.03em] leading-[2.813rem] font-medium mq825:text-[1.875rem] mq825:leading-[2.25rem] mq450:text-[1.375rem] mq450:leading-[1.688rem]">
                Financial Flexibility
              </div>
              <div className="self-stretch relative text-[1.35rem] leading-[180%] font-medium font-text-small text-text-muted mq450:text-[1.063rem] mq450:leading-[1.938rem]">
                Manage your cash flow better with flexible repayment plans.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border gap-[2.4rem] max-w-full shrink-0 mq825:gap-[1.188rem] mq1250:flex-wrap">
          <div className="flex-1 rounded-[24.03px] bg-background-muted overflow-hidden flex flex-col items-start justify-start pt-[4.2rem] px-[2.437rem] pb-[4.212rem] box-border min-w-[24.438rem] max-w-full mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.6rem]">
              <div className="self-stretch relative tracking-[-0.03em] leading-[2.813rem] font-medium mq825:text-[1.875rem] mq825:leading-[2.25rem] mq450:text-[1.375rem] mq450:leading-[1.688rem]">
                Instant Transactions
              </div>
              <div className="self-stretch relative text-[1.35rem] leading-[180%] font-medium font-text-small text-text-muted mq450:text-[1.063rem] mq450:leading-[1.938rem]">
                Access credit to make necessary purchases promptly.
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-[24.03px] bg-background-muted overflow-hidden flex flex-col items-start justify-start pt-[4.2rem] px-[2.437rem] pb-[4.212rem] box-border min-w-[24.438rem] max-w-full mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.6rem]">
              <div className="self-stretch relative tracking-[-0.03em] leading-[2.813rem] font-medium mq825:text-[1.875rem] mq825:leading-[2.25rem] mq450:text-[1.375rem] mq450:leading-[1.688rem]">
                Convenient Access
              </div>
              <div className="self-stretch relative text-[1.35rem] leading-[180%] font-medium font-text-small text-text-muted mq450:text-[1.063rem] mq450:leading-[1.938rem]">
                Access through a user-friendly app, anytime and anywhere.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ConsumerMerchantItems.propTypes = {
  className: PropTypes.string,
};

export default ConsumerMerchantItems;
