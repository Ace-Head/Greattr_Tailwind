import PropTypes from "prop-types";

const Grid = ({
  className = "",
  badgeName,
  paperless,
  badgeName1,
  noCollateralFree,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[1.143rem] text-left text-[1.288rem] text-text-default font-text-small ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-[1.143rem]">
        <div
          className="h-[1.856rem] w-[1.856rem] rounded-[114.29px] bg-whitesmoke-200 flex flex-row items-center justify-center pt-[0.281rem] px-[0.25rem] pb-[0.287rem] box-border"
          name={badgeName}
        >
          <img
            className="h-[1.288rem] w-[1.288rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/richeckfill.svg"
          />
        </div>
        <div className="relative leading-[180%] font-medium mq450:text-[1rem] mq450:leading-[1.875rem]">
          {paperless}
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[1.081rem]">
        <div
          className="h-[1.856rem] w-[1.856rem] rounded-[114.29px] bg-whitesmoke-200 flex flex-row items-center justify-center pt-[0.281rem] px-[0.25rem] pb-[0.287rem] box-border"
          name={badgeName1}
        >
          <img
            className="h-[1.288rem] w-[1.288rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/richeckfill.svg"
          />
        </div>
        <div className="relative leading-[180%] font-medium mq450:text-[1rem] mq450:leading-[1.875rem]">
          {noCollateralFree}
        </div>
      </div>
    </div>
  );
};

Grid.propTypes = {
  className: PropTypes.string,
  badgeName: PropTypes.string,
  paperless: PropTypes.string,
  badgeName1: PropTypes.string,
  noCollateralFree: PropTypes.string,
};

export default Grid;
