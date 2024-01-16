const ColorPreview = ({ textColor, backgroundColor }: Colors) => (
  <div
    className="flex flex-col justify-center items-center lg:mx-0 md:p-4 mb-4 md:mb-0 md:order-3 w-full h-full min-h-[200px] max-w-[600px] border-solid border-[1px] border-gray-400 dark:border-0 rounded-md"
    style={{ backgroundColor, color: textColor }}
  >
    <p className="text-center font-normal text-[24px]">
      Large text 18pt / 24px
    </p>
    <p className="text-center font-normal text-[18.5px] mt-2 lg:mt-4">
      Small text 14pt / 18.67px
    </p>
  </div>
);

export default ColorPreview;
