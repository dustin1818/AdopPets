import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";

function Welcome() {
  return (
    <div>
      <Navigation />

      <main className=" w-full">
        <div className="bg-gray-50">
          <div className="max-w-6xl !mx-auto !py-10 grid grid-cols-4 gap-4">
            <div>
              <img
                className="w-full object-cover h-[350px] transform hover:scale-105 transition duration-300"
                src="https://latchkeypets.com/wp-content/uploads/dental-care-dog-care-guide.jpg"
                alt="https://latchkeypets.com/wp-content/uploads/dental-care-dog-care-guide.jpg"
              />
              <h1 className="text-2xl font-bold !my-5 text-center">
                Animal <span className="text-blue-400">Welfare</span>
              </h1>
            </div>
            <div>
              <img
                className="w-full object-cover h-[350px] transform hover:scale-105 transition duration-300"
                src="https://musculardystrophynews.com/forums/wp-content/uploads/2019/04/shutterstock_499979860-1400x480@2x-1024x684.jpg"
                alt="https://musculardystrophynews.com/forums/wp-content/uploads/2019/04/shutterstock_499979860-1400x480@2x-1024x684.jpg"
              />
              <h1 className="text-2xl font-bold !my-5 text-center">
                Animal <span className="text-blue-400">Care</span>
              </h1>
            </div>
            <div>
              <img
                className="w-full object-cover h-[350px] transform hover:scale-105 transition duration-300"
                src="https://www.presbyterianliving.org/wp-content/uploads/senior-woman-with-a-cat-at-senior-living-community.jpeg"
                alt="https://www.presbyterianliving.org/wp-content/uploads/senior-woman-with-a-cat-at-senior-living-community.jpeg"
              />
              <h1 className="text-2xl font-bold !my-5 text-center">
                Animal <span className="text-blue-400">Shelter</span>
              </h1>
            </div>
            <div>
              <img
                className="w-full object-cover h-[350px] transform hover:scale-105 transition duration-300"
                src="https://blog.ferplast.com/wp-content/uploads/2018/05/ferplast-lavare-denti-gatto-anziano.jpg"
                alt="https://blog.ferplast.com/wp-content/uploads/2018/05/ferplast-lavare-denti-gatto-anziano.jpg"
              />
              <h1 className="text-2xl font-bold !my-5 text-center">
                Animal <span className="text-blue-400">Protection</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-white !py-30">
          <div className="flex gap-20 max-w-6xl !mx-auto">
            <div className="flex flex-col">
              <h1 className="text-4xl font-extrabold">Be part of our <span className="text-blue-400">mission</span></h1>
              <p className="!my-6">
                AdopPets is dedicated to rescuing, rehabilitating, and rehoming
                abused and neglected animals. We advocate for animal welfare to
                end cruelty and inspire a culture of kindness. Join us in
                creating a compassionate world for all living beings
              </p>
              <Button className="transform hover:translate-y-[-5px] transition duration-300">HOW TO HELP</Button>
            </div>

            <div className="">
              <img className="rounded" src="https://autumntrailsvet.com/wp-content/uploads/2021/11/general-pet-care-rules.jpg" alt="https://autumntrailsvet.com/wp-content/uploads/2021/11/general-pet-care-rules.jpg" />
            </div>
          </div>
        </div>


      </main>
    </div>
  );
}

export default Welcome;
