import { useMemo } from "react";
import PropTypes from "prop-types";

const Column = ({
  className = "",
  riarrowDownLine,
  columnFlex,
  columnMinWidth,
  columnWidth,
}) => {
  const columnStyle = useMemo(() => {
    return {
      flex: columnFlex,
      minWidth: columnMinWidth,
      width: columnWidth,
    };
  }, [columnFlex, columnMinWidth, columnWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.006rem] box-border gap-[3.431rem] min-w-[27.875rem] max-w-full text-left text-[1.288rem] text-text-default font-heading-h6 mq825:gap-[1.688rem] mq825:min-w-full ${className}`}
      style={columnStyle}
    >
      <div className="self-stretch relative text-[4.569rem] tracking-[-0.03em] leading-[110%] font-medium shrink-0 mq825:text-[3.625rem] mq825:leading-[4rem] mq450:text-[2.75rem] mq450:leading-[3rem]">
        Need help?
      </div>
      <div className="w-[27.763rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[2.287rem] max-w-full shrink-0 mq450:gap-[1.125rem]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[1.712rem] max-w-full shrink-0 mq450:flex-wrap">
          <div className="h-[3.569rem] w-[3.569rem] rounded-[114.29px] bg-whitesmoke-100 flex flex-row items-center justify-center pt-[0.781rem] px-[0.75rem] pb-[0.787rem] box-border">
            <img
              className="h-[2rem] w-[2rem] relative"
              loading="lazy"
              alt=""
              src="/riphonefill.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.287rem] min-w-[14.625rem] max-w-full">
            <div className="self-stretch relative tracking-[-0.03em] leading-[1.813rem] font-medium whitespace-nowrap mq450:text-[1rem] mq450:leading-[1.438rem]">
              +91 99999 99999
            </div>
            <div className="self-stretch relative text-[1rem] leading-[1.625rem] font-medium font-text-small text-text-muted">
              Support Hotline
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[1.712rem] max-w-full shrink-0 mq450:flex-wrap">
          <div className="h-[3.569rem] w-[3.569rem] rounded-[114.29px] bg-whitesmoke-100 flex flex-row items-center justify-center pt-[0.787rem] px-[0.75rem] pb-[0.781rem] box-border">
            <img
              className="h-[2rem] w-[2rem] relative"
              loading="lazy"
              alt=""
              src="/rimailunreadline.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.287rem] min-w-[14.625rem] max-w-full">
            <div className="self-stretch relative tracking-[-0.03em] leading-[1.813rem] font-medium whitespace-nowrap mq450:text-[1rem] mq450:leading-[1.438rem]">
              contact@greattr.com
            </div>
            <div className="self-stretch relative text-[1rem] leading-[1.625rem] font-medium font-text-small text-text-muted">
              Support Email
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0.568rem] text-background-primary">
        <div className="relative tracking-[-0.03em] leading-[1.313rem] font-medium inline-block min-w-[4.75rem] mq450:text-[1rem] mq450:leading-[1rem]">
          Support
        </div>
        <img
          className="h-[1.713rem] w-[1.713rem] relative object-contain"
          loading="lazy"
          alt=""
          src={riarrowDownLine}
        />
      </div>
    </div>
  );
};

Column.propTypes = {
  className: PropTypes.string,
  riarrowDownLine: PropTypes.string,

  /** Style props */
  columnFlex: PropTypes.any,
  columnMinWidth: PropTypes.any,
  columnWidth: PropTypes.any,
};

export default Column;
