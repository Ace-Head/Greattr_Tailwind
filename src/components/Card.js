import { useMemo } from "react";
import PropTypes from "prop-types";

const Card = ({
  className = "",
  forConsumers,
  enjoyFlexiblePaymentOptio,
  suitYourBudget,
  app,
  propPadding,
}) => {
  const cardStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`w-[41.713rem] rounded-[22.86px] bg-background-muted overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[4.568rem] pb-[0.031rem] pr-[1.25rem] pl-[1.437rem] box-border gap-[2.831rem] min-w-[41.713rem] max-w-full text-center text-[2.856rem] text-text-default font-heading-h6 mq825:gap-[1.438rem] mq825:pt-[3rem] mq825:pb-[1.25rem] mq825:box-border mq825:min-w-full mq1575:flex-1 ${className}`}
      style={cardStyle}
    >
      <div className="w-[28.569rem] flex flex-col items-start justify-start gap-[0.575rem] max-w-full">
        <div className="self-stretch relative tracking-[-0.03em] leading-[3.438rem] font-medium mq825:text-[2.313rem] mq825:leading-[2.75rem] mq450:text-[1.688rem] mq450:leading-[2.063rem]">
          {forConsumers}
        </div>
        <div className="self-stretch relative text-[1.288rem] leading-[180%] font-medium font-text-small text-text-muted mq450:text-[1rem] mq450:leading-[1.875rem]">
          <p className="m-0">{enjoyFlexiblePaymentOptio}</p>
          <p className="m-0">{suitYourBudget}</p>
        </div>
      </div>
      <div className="w-[28.65rem] h-[19.644rem] flex flex-row items-start justify-start py-[0rem] pr-[0.812rem] pl-[0.625rem] box-border max-w-full">
        <div className="h-[20.356rem] w-[28.575rem] rounded-t-[57.14px] rounded-b-none box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[2.425rem] px-[1.687rem] pb-[0.006rem] max-w-[105%] border-t-[11.4px] border-solid border-black border-r-[11.4px] border-l-[11.4px]">
          <img
            className="w-[23.713rem] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full"
            loading="lazy"
            alt=""
            src={app}
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  forConsumers: PropTypes.string,
  enjoyFlexiblePaymentOptio: PropTypes.string,
  suitYourBudget: PropTypes.string,
  app: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default Card;
