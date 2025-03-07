import React, { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";
import {formatDate} from "../lib/FormatDate"
export default function LearningMaterialsComponent() {
  const [matter, setMaterials] = useState(learningMaterials);
  const [filter, setFilter] = useState("");


  console.log("filter", filter);

  const sortedMatter = [...matter].sort((a, b) => {
    if (filter === "A-Z") {
      return a.title.localeCompare(b.title);
    } else if (filter === "Z-A") {
      return b.title.localeCompare(a.title);
    } else {
      return 0;
    }


    
  });

  // const handlerStar = (id) => {
  //   setMaterials((prevState) => {
  //     console.log("prev", prevState);
  //     return prevState.map((items) =>
  //       // console.log("item",items)
  //       items.id === id ? { ...items, isFavorite: !items.isFavorite } : items
  //     );
  //   });
  // };

  function handleFav(id) {
    setMaterials((prevState) => {
      return prevState.map((items) => 
        items.id == id ? { ...items, isFavorite: !items.isFavorite } : items
      )
      // console.log("newMa   tter",newMater)
      // setMaterials(newMater)
    });
  }
  return (
    <div className="bg-white drop-shadow-lg rounded-2xl  h-[80vh] overflow-y-auto scrollbar-hidden">
      {/* calling filter component */}
      <FilterComponent setFilter={setFilter} />

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-md font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}

      {sortedMatter.map((materials) => (
        <div key={materials.id} className="space-y-3">
          <div className="bg-light-gray px-4 py-2 flex gap-5 items-center">
            {materials.image && (
              <img
                src={materials.image}
                alt={materials.title}
                width={50}
                height={50}
                className="rounded-xl"
              />
            )}

            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium">{materials.title}</p>
                <Star
                  onClick={() => handleFav(materials.id)}
                  color={materials.isFavorite ? "#FAA300" : "black"}
                  fill={materials.isFavorite ? "#FAA300" : "white"}
                  size={20}
                  className="cursor-pointer"
                />
              </div>
              <p className="text-gray-400 text-xs">
                {/* Posted at: {materials.postedAt} */}
                Posted at : {formatDate(materials.postedAt)}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="space-y-3">
        <div className="bg-light-gray px-4 py-2 flex gap-5 items-center">
          <img
            src="https://i.pinimg.com/736x/ca/e1/b4/cae1b4f6b223fe5a7bb712b680cffa67.jpg"
            alt="HTML5"
            width={50}
            height={50}
            className="rounded-xl"
          />

          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-base font-medium">HTML5</p>
              <Star size={20} />
            </div>
            <p className="text-gray-400 text-sm">Posted at: 2025/01/13</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
