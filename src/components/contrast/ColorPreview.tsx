const ColorPreview = ({ textColor, backgroundColor }: Colors) => (
  <div
    className="flex flex-col justify-center items-center mx-2 lg:mx-0 mb-4 md:mb-0 md:order-3 lg:w-full max-w-[600px] min-h-[200px] md:p-4 border-solid border-[1px] border-gray-400 dark:border-0 rounded-md"
    style={{ backgroundColor, color: textColor }}
  >
    <p className="text-center font-normal text-[24px]">
      Large text 18pt / 24px
    </p>
    <p className="text-center font-normal text-[18.5px]">
      Small text 14pt / 18.5px
    </p>
  </div>
);

export default ColorPreview;
