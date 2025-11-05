import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";

function Donate() {
  return (
    <div>
      <Navigation />

      <div className="relative w-full h-[65vh] bg-[url('https://lolahemp.com/cdn/shop/articles/1_f87bb3c4-ca0e-4de7-b754-a04980f6a5da.png?v=1741126466')] bg-cover bg-top-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative flex flex-col gap-5 items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">Support and <span className="text-blue-400">Donate</span></h1>
            <Button className="!p-5">Donate Now</Button>
        </div>
      </div>
    </div>
  );
}

export default Donate;
