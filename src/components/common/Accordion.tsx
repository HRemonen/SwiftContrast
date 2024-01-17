"use client";

import React, { useState } from "react";

import { IoInformationCircleOutline } from "react-icons/io5";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoArrowUpCircleOutline } from "react-icons/io5";

interface AccordionProps {
  id: string;
  title: string;
  expanded?: boolean;
  children: React.ReactNode;
}

const Accordion = ({
  id,
  title,
  expanded = false,
  children,
}: AccordionProps) => {
  const [expandedBody, setExpandedBody] = useState(expanded);

  return (
    <div id={id}>
      <h2 id={`accordion-heading-${id}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-600 border border-gray-200 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          aria-label={`Toggle '${title}' section`}
          aria-expanded={expandedBody}
          onClick={() => setExpandedBody(!expandedBody)}
        >
          <span className="flex items-center">
            <IoInformationCircleOutline size={24} />
            <span className="ml-2">{title}</span>
          </span>
          {expandedBody ? (
            <IoArrowUpCircleOutline size={24} />
          ) : (
            <IoArrowDownCircleOutline size={24} />
          )}
        </button>
      </h2>
      <div
        id={`accordion-body-${id}`}
        className={`${expandedBody ? "block" : "hidden"}`}
        aria-labelledby={`accordion-heading-${id}`}
      >
        <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
