import React from "react";
import APP_STORE from "../assets/appstore.svg";
import GOOGLE_PLAY from "../assets/googleplay.webp";

const ProjectCard = ({ item = {} }) => {
  return (
    <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <div className="relative bg-blue-100">
        <img
          className="w-full h-72  object-contain"
          src={item.image}
          alt="banner"
        />
        {!!item.country && (
          <span class="absolute inline-block bg-black self-start rounded-full px-3 py-1 text-sm font-medium text-white bottom-2 left-2">
            {item.country}
          </span>
        )}
        {!!item.icon && (
          <div className="absolute h-16 w-16 bg-white rounded-md top-3/4 right-2 shadow-2xl rounded border-white">
            <img
              className="w-full h-full object-center"
              src={item.icon}
              alt="icon"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 px-6 py-4 h-auto">
        {item?.domains?.length > 0 && (
          <div className="flex">
            {item?.domains?.map?.((domain, index) => (
              <span
                key={`domain-${index}`}
                class="inline-block bg-gray-200 self-start rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {domain}
              </span>
            ))}
          </div>
        )}
        <div className="font-bold text-lg mb-2">{item?.name}</div>
        <p className="text-gray-700 text-sm">{item?.desc}</p>
      </div>
      <div className="px-6 pb-4 flex justify-center">
        {!!item?.playStore && (
          <img
            className="inline-block w-1/2 mr-2 cursor-pointer"
            src={GOOGLE_PLAY}
            onClick={() => {
              window.open(item?.playStore, "_blank");
            }}
          />
        )}
        {!!item?.appStore && (
          <img
            className="inline-block w-1/2 cursor-pointer"
            src={APP_STORE}
            onClick={() => {
              window.open(item?.appStore, "_blank");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
