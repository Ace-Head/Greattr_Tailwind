import PropTypes from "prop-types";

const FAQ = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[1.143rem] max-w-full text-left text-[1.431rem] text-text-default font-heading-h6 ${className}`}
    >
      <div className="flex-1 relative tracking-[-0.03em] leading-[120%] font-medium inline-block shrink-0 max-w-[calc(100%_-_46px)] mq450:text-[1.125rem] mq450:leading-[1.375rem]">
        Who can use Greattr?
      </div>
      <img
        className="h-[1.713rem] w-[1.713rem] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/riaddfill.svg"
      />
    </div>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
};

export default FAQ;
