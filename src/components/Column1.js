import PropTypes from "prop-types";

const Column1 = ({
  className = "",
  badgeName,
  paperless,
  badgeName1,
  noCollateralFree,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[1.143rem] text-left text-[1.144rem] text-text-inverse font-text-small ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-[1.143rem]">
        <div
          className="h-[1.856rem] w-[1.856rem] rounded-[114.29px] bg-text-inverse flex flex-row items-center justify-center pt-[0.287rem] px-[0.25rem] pb-[0.281rem] box-border"
          name={badgeName}
        >
          <img
            className="h-[1.288rem] w-[1.288rem] relative overflow-hidden shrink-0"
            alt=""
            src="/richeckfill-4.svg"
          />
        </div>
        <div className="relative leading-[160%] font-medium">{paperless}</div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[1.143rem]">
        <div
          className="h-[1.856rem] w-[1.856rem] rounded-[114.29px] bg-text-inverse flex flex-row items-center justify-center pt-[0.287rem] px-[0.25rem] pb-[0.281rem] box-border"
          name={badgeName1}
        >
          <img
            className="h-[1.288rem] w-[1.288rem] relative overflow-hidden shrink-0"
            alt=""
            src="/richeckfill-4.svg"
          />
        </div>
        <div className="relative leading-[160%] font-medium">
          {noCollateralFree}
        </div>
      </div>
    </div>
  );
};

Column1.propTypes = {
  className: PropTypes.string,
  badgeName: PropTypes.string,
  paperless: PropTypes.string,
  badgeName1: PropTypes.string,
  noCollateralFree: PropTypes.string,
};

export default Column1;
