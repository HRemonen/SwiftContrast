import Link from "next/link";

const Footer = () => (
  <footer className="bg-white dark:bg-gray-900 border-t-2 border-gray-200 dark:border-gray-700">
    <div className="w-full mx-auto p-4 md:py-8">
      <div className="flex sm:items-center sm:justify-between px-2">
        <div className="w-3/4">
          <Link
            href="https://swiftcontrast.com/"
            className="self-center text-2xl font-semibold whitespace-nowrap underline dark:text-white focus:text-blue-500 dark:focus:text-blue-500 hover:text-blue-500 dark:hover:text-blue-300"
          >
            Swift Contrast
          </Link>
        </div>
        <div className="flex flex-wrap justify-end w-1/4 border-l-[1px] pl-16 text-sm font-medium border-gray-200 dark:border-gray-700 text-gray-500 sm:mb-0 dark:text-gray-400">
          <Link
            className="dark:fill-white focus:fill-blue-500 dark:focus:fill-blue-500 hover:fill-blue-500 dark:hover:fill-blue-300"
            href="https://github.com/HRemonen/SwiftContrast"
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            aria-label="GitHub repository"
          >
            <svg
              className="octicon octicon-mark-github"
              data-view-component="true"
              width="24"
              version="1.1"
              viewBox="0 0 16 16"
              aria-hidden="true"
              height="24"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <hr className="my-2 border-gray-200 dark:border-gray-700 lg:my-4" />
      <span className="block text-xs uppercase text-gray-500 dark:text-gray-400">
        All Rights Reserved © Henri Remonen 2024
      </span>
    </div>
  </footer>
);

export default Footer;
