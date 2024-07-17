import React, { useState } from "react";
import Column from "./Column";
import FAQ from "./FAQ";
import PropTypes from "prop-types";

const BenefitTitleContainer = ({ className = "" }) => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Greattr?",
      answer:
        "Greattr is an impact fintech offering small ticket loans (BNPL) and insurance to low-income individuals through its NBFC, Jainex Finance Limited.",
    },
    {
      question: "How does the Greattr customer app work?",
      answer:
        "Customers can easily apply for micro-loans and insurance through the app and manage repayments with flexible options. ",
    },
    {
      question: "What support do merchants receive?",
      answer:
        "Merchants can assist customers with loan applications and repayments, boosting their sales and customer loyalty.",
    },
    {
      question: "Is my information secure with Greattr?",
      answer:
        "Yes, we use robust security measures to ensure all transactions and personal information are safe and confidential.",
    },
    {
      question: "Who can use Greattr?",
      answer:
        "Greattr is designed for low-income individuals, including those earning minimum wages and those without a trustworthy credit history.",
    },
  ];

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[11.425rem] box-border max-w-full text-left text-[1.288rem] text-text-default font-heading-h6 mq825:pb-[7.438rem] mq825:box-border ${className}`}
    >
      <div className="w-[85.713rem] flex flex-row flex-wrap items-start justify-start pt-[0rem] px-[0rem] pb-[0.006rem] box-border max-w-full [row-gap:20px]">
        <Column riarrowDownLine="/riarrowdownline@2x.png" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[2.287rem] min-w-[27.875rem] max-w-full text-[1.431rem] mq825:gap-[1.125rem] mq825:min-w-full">
          {faqItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="self-stretch flex flex-row items-start justify-start gap-[1.143rem] max-w-full">
                <div className="flex-1 relative tracking-[-0.03em] leading-[120%] font-medium inline-block shrink-0 max-w-[calc(100%_-_46px)] mq450:text-[1.125rem] mq450:leading-[1.375rem]">
                  {item.question}
                </div>
                <img
                  className="h-[1.713rem] w-[1.713rem] relative overflow-hidden shrink-0 cursor-pointer"
                  loading="lazy"
                  alt=""
                  src={
                    openItem === index ? "/riclosefill.svg" : "/riaddfill.svg"
                  }
                  onClick={() => toggleItem(index)}
                />
              </div>
              {openItem === index && (
                <div className="self-stretch relative text-[1.144rem] leading-[160%] font-medium font-text-small text-text-muted inline-block min-h-[5.438rem] z-[1]">
                  <p className="m-0">{item.answer}</p>
                </div>
              )}
              <div className="self-stretch h-[0.069rem] relative bg-border-default" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

BenefitTitleContainer.propTypes = {
  className: PropTypes.string,
};

export default BenefitTitleContainer;
