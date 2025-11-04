import PetDatas from "../../assets/UpdatePetData.json";
import { Button } from "@/components/ui/button";
import Navigation from "../pages/Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";

function Adopt() {
  const [PetData, setPetData] = useState(PetDatas);
  const filterAllData = () => {
    setPetData(PetDatas);
  };
  const filterCatData = () => {
    setPetData(PetDatas.filter((pet) => pet.Type === "Cat"));
  };
  const filterDogData = () => {
    setPetData(PetDatas.filter((pet) => pet.Type === "Dog"));
  };

  return (
<>
    <Navigation />
     <div className="max-w-6xl !mx-auto !py-8">
      <div className="flex gap-3 !mb-5">
        <Button className="!p-5" onClick={filterAllData}>
          All
        </Button>
        <Button className="!p-5" onClick={filterCatData}>Cats</Button>
        <Button className="!p-5" onClick={filterDogData}>Dogs</Button>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {PetData?.map((pet, index) => (
            <Link to={`/animal/${pet.postTitle}`} className="flex flex-col" key={index}>
                <div className="overflow-hidden rounded border-2 border-blue-400">
                <img 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-125" 
                    src={pet.attachmentFull} 
                    alt={pet.attachmentFull} 
                />
                </div>
                <h1 className="text-center text-xl font-bold !mt-2">
                <span className="text-blue-400 !mr-2">~</span>{pet.postTitle}
                </h1>
          </Link>
        ))}
      </div>
    </div>
    </>
   
  );
}

export default Adopt;
