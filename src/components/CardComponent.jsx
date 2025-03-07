import { EllipsisVertical } from "lucide-react";
import React from "react";
import { getDaysLeft } from "../lib/DeadlineDate";

export default function CardComponent({ card }) {
  console.log("cardInCardComponent", card);

  const getProgressColor = (progress) => {
    if (progress == 100) return "bg-custom-sky-blue text-custom-sky-blue";
    if (progress >= 75) return "bg-custom-carrot text-custom-carrot";
    if (progress >= 50) return "bg-custom-yellow text-custom-yellow";
    if (progress >= 25) return "bg-custom-pink text-custom-pink";
    return "bg-gray-300 text-gray-500"; // Default color
  }

    const dueDateColor = (progress) => {
      if (progress === 100) return " text-custom-sky-blue";
      if (progress >= 75) return " text-custom-carrot";
      if (progress >= 50) return " text-custom-yellow";
      if (progress >= 25) return " text-custom-pink";
      return " text-gray-500"; 
    }



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
      {card.map((item) => (
        <div
          key={item.id}
          className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between mb-5">
            {/* date */}
            <p className={` font-medium ${dueDateColor(+item.progress)}`}>
              {/* 
                className={`text-custom-sky-blue font-medium ${
                +item.progress === 100
                  ? "text-custom-sky-blue"
                  : +item.progress === 75
                  ? "text-custom-carrot"
                  : +item.progress === 50
                  ? "text-custom-yellow"
                  : +item.progress === 25
                  ? "text-custom-pink"
                  : ""
              }`}>

              */}

              {item.dueDate}
            </p>
            <EllipsisVertical size={20} color="#374957" />
          </div>

          <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {item.projectName}
          </h5>
          <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
            {item.description}
          </p>

          {/* progress bar */}
          {/* <div
            className={`h-4 rounded-full transition-all duration-300 ${
                getProgressColor(item.progress).split(" ")[0]
              }`} // Only extracting background color class
              style={{ width: `${item.progress}%` }}>
            <p className={getProgressColor(item.progress)}>{item.progress}%</p>
          </div> */}

          {/* tessting */}

          <div className="w-full flex justify-between font-medium mb-1">
            <p>Progress</p>
            <p>{item.progress}%</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className={`h-4 rounded-full transition-all duration-300 ${
                getProgressColor(item.progress).split(" ")[0]
              }`} // Only extracting background color class
              style={{ width: `${item.progress}%` }}></div>
          </div>

          {/* <div className="relative">
            <div
              className="border-l-4 rounded-full border-l-custom-pink h-5 absolute -top-1 left-1/4"
              title="25%"></div>
            <div
              className="border-l-4 rounded-full border-l-custom-yellow-500 h-5 absolute -top-1 left-2/4"
              title="50%"></div>
            <div
              className="border-l-4 rounded-full border-l-custom-carrot h-5 absolute -top-1 left-3/4"
              title="75%"></div>
          </div> */}

          {/* deadline */}
          <div className="flex justify-end mt-4">
            <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-32 text-center">
              {getDaysLeft(item.dueDate)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
