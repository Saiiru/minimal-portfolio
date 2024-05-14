import React from "react";

interface PortfolioItemProps {
  title: string;
  description?: string;
  imgUrl: string;
  stack: string[];
  link: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, imgUrl, stack, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
    >
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="p-4 w-full">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;
