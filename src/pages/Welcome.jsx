import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
                Animal Welfare
              </h1>
            </div>
            <div>
              <img
                className="w-full object-cover h-[350px] transform hover:scale-105 transition duration-300"
                src="https://musculardystrophynews.com/forums/wp-content/uploads/2019/04/shutterstock_499979860-1400x480@2x-1024x684.jpg"
                alt="https://musculardystrophynews.com/forums/wp-content/uploads/2019/04/shutterstock_499979860-1400x480@2x-1024x684.jpg"
              />
              <h1 className="text-2xl font-bold !my-5 text-center">
                Animal Care
              </h1>
            </div>
            <div>
              <img
                className="w-full object-cover h-[350px] transform hover:scale-105 transition duration-300"
                src="https://www.presbyterianliving.org/wp-content/uploads/senior-woman-with-a-cat-at-senior-living-community.jpeg"
                alt="https://www.presbyterianliving.org/wp-content/uploads/senior-woman-with-a-cat-at-senior-living-community.jpeg"
              />
              <h1 className="text-2xl font-bold !my-5 text-center">
                Animal Shelter
              </h1>
            </div>
            <div>
              <img
                className="w-full object-cover h-[350px] transform hover:scale-105 transition duration-300"
                src="https://blog.ferplast.com/wp-content/uploads/2018/05/ferplast-lavare-denti-gatto-anziano.jpg"
                alt="https://blog.ferplast.com/wp-content/uploads/2018/05/ferplast-lavare-denti-gatto-anziano.jpg"
              />
              <h1 className="text-2xl font-bold !my-5 text-center">
                Animal Protection
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-white !py-15">
          <div className="flex gap-20 max-w-6xl !mx-auto">
            <div className="flex flex-col w-full">
              <h1 className="text-4xl font-extrabold">
                Help and <span className="text-blue-400">donate</span>
              </h1>
              <p className="!my-6">
                Every small act of kindness makes a big difference. By
                supporting Adoppets, you’re helping rescued animals find food,
                shelter, medical care, and a chance for a loving home. Your
                donation no matter the amount brings hope and healing to pets in
                need. Together, we can give them the second chance they deserve.
                ❤️
              </p>
              <Button className="transform hover:translate-y-[-5px] transition duration-300">
                SUPPORT US
              </Button>
            </div>

            <div className="">
              <img
                className="rounded w-full"
                src="https://people.com/thmb/BJO005QLK6f4YcZHW0iONQxoJ1g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/family-adopt-dog-6c2f1eedd593433f85549e94e07af8bf.jpg"
                alt="https://people.com/thmb/BJO005QLK6f4YcZHW0iONQxoJ1g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/family-adopt-dog-6c2f1eedd593433f85549e94e07af8bf.jpg"
              />
            </div>
          </div>
        </div>

        <div className="bg-white !py-10">
          <div className="flex flex-row-reverse gap-20 max-w-6xl !mx-auto">
            <div className="flex flex-col">
              <h1 className="text-4xl font-extrabold">
                Be part of our <span className="text-blue-400">mission</span>
              </h1>
              <p className="!my-6">
                AdopPets is dedicated to rescuing, rehabilitating, and rehoming
                abused and neglected animals. We advocate for animal welfare to
                end cruelty and inspire a culture of kindness. Join us in
                creating a compassionate world for all living beings.
              </p>
              <Button className="transform hover:translate-y-[-5px] transition duration-300">
                HOW TO HELP
              </Button>
            </div>

            <div className="">
              <img
                className="rounded"
                src="https://autumntrailsvet.com/wp-content/uploads/2021/11/general-pet-care-rules.jpg"
                alt="https://autumntrailsvet.com/wp-content/uploads/2021/11/general-pet-care-rules.jpg"
              />
            </div>
          </div>
        </div>

        <div className="max-w-6xl !mx-auto">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>
      </main>
    </div>
  );
}

export default Welcome;
