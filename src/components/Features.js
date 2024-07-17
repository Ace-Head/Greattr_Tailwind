import Card1 from "./Card1";
import PropTypes from "prop-types";

const Features = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start pt-[11.425rem] px-[1.25rem] pb-[11.431rem] box-border max-w-full text-left text-[5.713rem] text-text-default font-heading-h6 mq825:pt-[4.813rem] mq825:pb-[4.813rem] mq825:box-border mq1250:pt-[7.438rem] mq1250:pb-[7.438rem] mq1250:box-border ${className}`}
    >
      <div className="w-[94.788rem] flex flex-row items-start justify-center gap-[8.856rem] max-w-full mq825:gap-[2.188rem] mq1250:gap-[4.438rem] mq450:gap-[1.125rem] mq1575:flex-wrap">
        <img
          className="w-[33rem] relative max-h-full overflow-hidden shrink-0 max-w-full mq1575:flex-1"
          loading="lazy"
          alt=""
          src="/featureimage.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[5.3rem] min-w-[34.438rem] max-w-full mq825:gap-[2.625rem] mq825:min-w-full mq450:gap-[1.313rem]">
          <div className="self-stretch relative tracking-[-0.03em] leading-[110%] font-medium mq825:text-[2.875rem] mq825:leading-[3.75rem] mq450:text-[1.688rem] mq450:leading-[2.5rem]">
            <p className="m-0">One app.</p>
            <p className="m-0">Endless Possibilities.</p>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.806rem] max-w-full text-[1.756rem] mq450:gap-[1.375rem]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[2.806rem] max-w-full mq825:flex-wrap mq450:gap-[1.375rem]">
              <Card1
                riflashlightLine="/riflashlightline.svg"
                instant="Instant"
                loanApproval="Loan Approval"
                getQuickAccessToMicroLoan="Get quick access to micro-loans with our streamlined application process."
              />
              <Card1
                riflashlightLine="/risafe2fill.svg"
                instant="Secure"
                loanApproval="Transactions"
                getQuickAccessToMicroLoan="Enjoy peace of mind with our robust security and confidential transactions."
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[2.806rem] max-w-full mq825:flex-wrap mq450:gap-[1.375rem]">
              <Card1
                riflashlightLine="/rismartphoneline.svg"
                instant="User-Friendly"
                loanApproval="Interface"
                getQuickAccessToMicroLoan="Navigate our app with ease, whether you're a customer or a merchant."
              />
              <Card1
                riflashlightLine="/rilinechartline.svg"
                instant="Dedicated"
                loanApproval="Merchant Support"
                getQuickAccessToMicroLoan="Merchants can assist customers in real-time, simplifying the loan process."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Features.propTypes = {
  className: PropTypes.string,
};

export default Features;
