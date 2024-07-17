import FrameComponent from "../components/FrameComponent";
import Features from "../components/Features";
import Apply from "../components/Apply";
import ConsumerMerchantItems from "../components/ConsumerMerchantItems";
import FeaturesContainer from "../components/FeaturesContainer";
import FeatureGrid from "../components/FeatureGrid";
import BenefitTitleContainer from "../components/BenefitTitleContainer";
import Footer from "../components/Footer";

const Website = () => {
  return (
    <div className="w-full relative bg-text-inverse flex flex-col items-start justify-start leading-[normal] tracking-[normal] overflow-x-hidden">
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[9.143rem] box-border max-w-full text-center text-[3.431rem] text-text-inverse font-heading-h6 mq825:pb-[3.875rem] mq825:box-border mq1250:pb-[5.938rem] mq1250:box-border">
        <div className="flex-1 flex flex-col items-center justify-start pt-[23.887rem] px-[1.25rem] pb-[28.743rem] box-border gap-[2.931rem] bg-[url('/public/hero@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq825:gap-[1.438rem] mq825:pt-[10.063rem] mq825:pb-[12.125rem] mq825:box-border mq1250:pt-[15.5rem] mq1250:pb-[18.688rem] mq1250:box-border">
          <b className="w-[78.713rem] relative tracking-[-0.02em] leading-[31%] inline-block min-h-[8.5rem] max-w-full mq825:text-[2.688rem] mq825:leading-[1.438rem] mq450:text-[2rem] mq450:leading-[1.063rem]">
            <p className="[margin-block-start:0] [margin-block-end:68.57px]">
              Empower Your Future with Greattr
            </p>
            <p className="m-0 text-[5.788rem]">Small Loans, Big Changes</p>
          </b>
          <div className="w-[78.75rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.062rem] box-border max-w-full text-[1.713rem]">
            <b className="h-[3.438rem] w-[60.431rem] relative leading-[130%] inline-block shrink-0 max-w-full mq450:text-[1.375rem] mq450:leading-[1.75rem]">
              <p className="[margin-block-start:0] [margin-block-end:22.86px]">
                We’re Different. Greattr Brings Financial Freedom to Your
                Doorstep.
              </p>
              <p className="m-0">
                Transforming Lives with Seamless, Accessible Financial Solutions
                for All.
              </p>
            </b>
          </div>
        </div>
      </section>
      <FrameComponent />
      <Features />
      <Apply />
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[4.187rem] pb-[11.431rem] box-border max-w-full text-center text-[4.569rem] text-text-default font-heading-h6 mq825:pb-[4.813rem] mq825:box-border mq1250:pl-[2.063rem] mq1250:pr-[2.063rem] mq1250:pb-[7.438rem] mq1250:box-border mq450:pb-[3.125rem] mq450:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[2.287rem] max-w-full mq825:gap-[1.125rem]">
          <div className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[4.568rem] box-border max-w-full">
            <div className="w-[57.144rem] flex flex-col items-start justify-start gap-[1.143rem] max-w-full">
              <div className="self-stretch relative tracking-[-0.03em] leading-[110%] font-medium mq825:text-[3.625rem] mq825:leading-[4rem] mq450:text-[2.75rem] mq450:leading-[3rem]">
                Discover the Benefits
              </div>
              <div className="self-stretch relative text-[1.431rem] leading-[180%] font-medium font-text-small mq450:text-[1.125rem] mq450:leading-[2.063rem]">
                Unlock Your Financial Potential with Greattr
              </div>
            </div>
          </div>
          <ConsumerMerchantItems />
          <FeaturesContainer />
        </div>
      </section>
      <FeatureGrid />
      <BenefitTitleContainer />
      <Footer />
    </div>
  );
};

export default Website;
