import PropTypes from "prop-types";

const Card1 = ({
  className = "",
  riflashlightLine,
  instant,
  loanApproval,
  getQuickAccessToMicroLoan,
}) => {
  return (
    <div
      className={`flex-1 rounded-[22.47px] box-border flex flex-col items-start justify-start py-[2.625rem] pr-[2.437rem] pl-[2.812rem] gap-[1.406rem] min-w-[16.188rem] max-w-full text-left text-[1.756rem] text-text-default font-heading-h6 border-[2.8px] border-solid border-border-default mq450:pl-[1.25rem] mq450:pt-[1.688rem] mq450:pb-[1.688rem] mq450:box-border ${className}`}
    >
      <div className="w-[4.388rem] h-[4.388rem] rounded-[140.43px] bg-whitesmoke-200 flex flex-row items-center justify-center pt-[0.968rem] px-[0.937rem] pb-[0.962rem] box-border">
        <img
          className="h-[2.456rem] w-[2.456rem] relative"
          loading="lazy"
          alt=""
          src={riflashlightLine}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.7rem]">
        <div className="self-stretch relative tracking-[-0.03em] leading-[120%] font-medium mq450:text-[1.375rem] mq450:leading-[1.688rem]">
          <p className="m-0">{instant}</p>
          <p className="m-0">{loanApproval}</p>
        </div>
        <div className="self-stretch relative text-[1.406rem] leading-[160%] font-medium font-text-small mq450:text-[1.125rem] mq450:leading-[1.813rem]">
          {getQuickAccessToMicroLoan}
        </div>
      </div>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  riflashlightLine: PropTypes.string,
  instant: PropTypes.string,
  loanApproval: PropTypes.string,
  getQuickAccessToMicroLoan: PropTypes.string,
};

export default Card1;
