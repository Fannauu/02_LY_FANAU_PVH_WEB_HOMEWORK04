import "./App.css";
import React, { useState } from "react";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import DashboardComponent from "./components/DashboardComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import CardComponent from "./components/CardComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import Profile from "./components/Profile";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
function App() {
  const [card, setCard] = useState([]);
  const [search, setSearch] = useState("");

  const handlerSubmit = (project) => {
    setCard([...card, project]);
  };

  const filteredCard = card.filter((item) => {
    return item.projectName.toLowerCase().includes(search.trim().toLowerCase());
  });
  console.log("filteredCard", filteredCard);
  console.log("cardInCardComponent", card);
  return (
    <>
      <div className="grid grid-cols-12 bg-light-gray dark:bg-gray-800">
        <div className="col-span-2">
          <SidebarComponent />
        </div>

        <div className="col-span-8 flex flex-col p-10 pb-0">
          <TopNavbarComponent setSearch={setSearch} />
          <div className="w-full py-10 ">
            <DashboardComponent />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <AssignmentsComponent />
            </div>
            <div className="">
              <AddNewProjectComponent handlerSubmitProject={handlerSubmit} />
            </div>
          </div>

          {/* <div className="flex items-center justify-between px-10"></div> */}
          <div className=" h-[19rem] mt-10 overflow-y-auto scrollbar-hidden">
            <CardComponent card={filteredCard} />
          </div>
        </div>

        <div className="col-span-2 mt-8 px-3">
          <Profile />
          <div className="w-full mt-8">
            <LearningMaterialsComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
