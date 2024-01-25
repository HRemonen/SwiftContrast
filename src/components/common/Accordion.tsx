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
      <h2>
        <button
          id={`${id}-heading`}
          type="button"
          aria-controls={`${id}-body`}
          aria-expanded={expandedBody}
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-600 border border-gray-200 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={() => setExpandedBody(!expandedBody)}
        >
          <span className="flex items-center">
            <IoInformationCircleOutline
              aria-hidden="true"
              focusable="false"
              size={24}
            />
            <span className="ml-2">{title}</span>
          </span>
          {expandedBody ? (
            <IoArrowUpCircleOutline
              aria-hidden="true"
              focusable="false"
              size={24}
            />
          ) : (
            <IoArrowDownCircleOutline
              aria-hidden="true"
              focusable="false"
              size={24}
            />
          )}
        </button>
      </h2>
      <div
        id={`${id}-body`}
        role="region"
        aria-hidden={!expandedBody}
        aria-labelledby={`${id}-heading`}
        className={`${expandedBody ? "block" : "hidden"}`}
      >
        <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
