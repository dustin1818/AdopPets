import { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";
import Modal from "../components/react-ui/Modal";
import PetDetails from "../../assets/PetDetails.json";

function PetDetail() {
  const { id } = useParams();
  const [petDetails, setPetDetails] = useState(PetDetails);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const filteredPet = petDetails.filter((pet) => pet.data.id === id);
  console.log(filteredPet);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Navigation />
      <div className="max-w-7xl !mx-auto !py-8">
        <div className="flex gap-15">
          <div className="flex gap-7 w-[50%]">
            <div className="flex flex-col items-start gap-2 w-[55%]">
              <h1 className="!p-2 !pr-18 rounded bg-blue-400 text-md border border-blue-400">
                Before
              </h1>
              <div className="overflow-hidden">
              <img
                className="w-full rounded object-cover transition-transform duration-300 hover:scale-125 cursor-pointer"
                src={filteredPet[0].data.img1}
                alt={filteredPet[0].data.img1}
                onClick={() => handleImageClick(filteredPet[0].data.img1)}
              />
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 w-[42%]">
            <div className="overflow-hidden">
              <img
                className="w-full rounded object-cover transition-transform duration-300 hover:scale-125 cursor-pointer"
                src={filteredPet[0].data.img2}
                alt={filteredPet[0].data.img2}
                onClick={() => handleImageClick(filteredPet[0].data.img2)}
              />
            </div>
              <h1 className="!p-2 !pr-18 !ml-auto rounded bg-blue-400 text-md border border-blue-400">
                After
              </h1>
            </div>
          </div>

          <div className="block !pt-7 w-[42%]">
            <h1 className="text-3xl font-bold">{filteredPet[0].data.id}</h1>
            <div className="!my-7">
              <span className="!py-2 !pl-3 !pr-6 font-bold text-center text-lg rounded bg-gray-300 text-md border border-gray-300">
                Age:{" "}
              </span>
              <span className="!ml-4 text-lg">{filteredPet[0].data.age}</span>
            </div>

            <div className="border border-2 border-blue-400 w-full"></div>

            <div className="!my-7">
              <span className="!py-2 !pl-3 !pr-6 font-bold text-center text-lg rounded bg-gray-300 text-md border border-gray-300">
                Sex:{" "}
              </span>
              <span className="!ml-4 text-lg">{filteredPet[0].data.b}</span>
            </div>

            <div className="border border-2 border-blue-400 w-full"></div>

            <p className="!my-5">{filteredPet[0].data.p_2}</p>
            <p>{filteredPet[0].data.p_3}</p>
            {filteredPet[0].data.p_4 ? <p className="!my-5">{filteredPet[0].data.p_4}</p> : null}
       
            <Button className="!p-5 !mt-5"> Adopt Now </Button>
          </div>
        </div>
      </div>
      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={selectedImage}
      />
    </div>
  );
}

export default PetDetail;
