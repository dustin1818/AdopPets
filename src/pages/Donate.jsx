import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";

function Donate() {
  return (
    <div>
      <Navigation />

      <div className="relative w-full h-[65vh] bg-[url('https://lolahemp.com/cdn/shop/articles/1_f87bb3c4-ca0e-4de7-b754-a04980f6a5da.png?v=1741126466')] bg-cover bg-top-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative flex flex-col gap-5 items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">
            Support and <span className="text-blue-400">Donate</span>
          </h1>
          <Button className="!p-5">
            {" "}
            <a href="https://donatetopaws.org.ph/" target="_blank">
              {" "}
              Donate Now
            </a>
          </Button>
        </div>
      </div>

      <div className="flex items-stretch gap-8 max-w-7xl !mx-auto !py-10">
        <div className="w-[35%]">
          <img
            className="w-full h-full object-cover rounded"
            src="https://media.4-paws.org/4/a/0/6/4a062f66d2b7cf02de4f41838ebd689bb11cc2bf/VIER_PFOTEN_2021-02-21_00011-2472x2000.jpg"
            alt=""
          />
        </div>

        <div className="w-[65%] bg-amber-50 rounded !p-6">
          <div className="flex gap-20">
            <div className="block">
              <p className="font-semibold">
                US Donations - Tax Deductible:{" "}
                <a
                  className="text-blue-400"
                  target="_blank"
                  href="https://www.every.org/pawsphilippines?viewport=desktop"
                >
                  every.org
                </a>
              </p>

              <div className="!my-5">
                <p className="text-gray-600 text-md font-semibold">
                  ACCOUNT NAME
                </p>
                <h2 className="font-semibold text-2xl">
                  The Philippine Animal Welfare Society, Inc.
                </h2>
              </div>

              <div className="flex">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="20" fill="#000000" />

                  <path
                    d="M 47 40 L 57 50 L 47 60"
                    stroke="#F5E6D3"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                </svg>

                <div className="block !mt-1">
                  <h3 className="font-semibold text-lg">
                    {" "}
                    Bank of the Philippine Islands (Swift no. BOPIPHMM)
                  </h3>
                  <p className="text-gray-600 text-sm font-semibold leading-7">
                    USD Account Number: 3944-0021-61
                  </p>
                  <p className="text-gray-600 text-sm font-semibold leading-7">
                    PHP Account Number: PHP Acct No: 3943-0086-11
                  </p>
                </div>
              </div>

              <div className="flex">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="20" fill="#000000" />

                  <path
                    d="M 47 40 L 57 50 L 47 60"
                    stroke="#F5E6D3"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                </svg>

                <div className="block !mt-1">
                  <h3 className="font-semibold text-lg">
                    {" "}
                    Philippine National Bank (Swift no. PNBM PHMM)
                  </h3>
                  <p className="text-gray-600 text-sm font-semibold leading-7">
                    Account Number: 1888-70015305
                  </p>
                </div>
              </div>
              <div className="flex">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="20" fill="#000000" />

                  <path
                    d="M 47 40 L 57 50 L 47 60"
                    stroke="#F5E6D3"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                </svg>

                <div className="block !mt-1">
                  <h3 className="font-semibold text-lg"> BDO Savings</h3>
                  <p className="text-gray-600 text-sm font-semibold leading-7">
                    Account Number: 007648005860
                  </p>
                </div>
              </div>

              <p className="italic !mt-3.5">
                *Checks should be issued to Philippine Animal Welfare Society,
                Inc.
              </p>
            </div>

            <div className="flex flex-col">
              <img
                src="https://donatetopaws.org.ph/wp-content/uploads/2024/06/PAWS-Philippines-QR-1-1-1.png"
                alt="https://donatetopaws.org.ph/wp-content/uploads/2024/06/PAWS-Philippines-QR-1-1-1.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white h-full max-w-7xl !mx-auto rounded-2xl !p-8">
        <h1 className="font-bold text-4xl !mb-8">BECOME A SUPPORTING MEMBER</h1>

        <p>
          You can be a Supporting Member for a minimum contribution of
          P300/month.
        </p>

        <p className="!my-8">
          Supporting Members are also considered active PAWS Volunteers and can
          participate in events such as fundraisers and other shelter
          activities. You can donate manually each month make it a recurring
          donation with your credit card.
        </p>

        <p>
          {" "}
          REFUND & CANCELLATION POLICY: You may cancel your support at any time.
          We can refund verified donations upon request and submission of
          receipt or proof of payment.
        </p>
      </div>

      <div className="bg-gray-100 !py-9 !mt-10">
        <div className="max-w-7xl !mx-auto">
          <div className="!mb-5">
            <h1 className="text-4xl font-extrabold">Donate in kind</h1>
            <p className="!mt-2">Donations can be dropped off at<a className="hover:underline" target="_blank" href="https://www.google.com/maps/place/The+Philippine+Animal+Welfare+Society/@14.6328519,121.0739269,17z/data=!3m1!4b1!4m5!3m4!1s0x3397b784329550fd:0x55bbd6106c1c6ffb!8m2!3d14.6328467!4d121.0761156?shorturl=1">   Aurora Boulevard cor. Katipunan Avenue, Loyola Heights Quezon City, Philippines 1108</a></p>
          </div>
          <div className="flex justify-between items-stretch">
            <div className="rounded w-[40%]">
              <img
                className="h-full object-cover"
                src="https://img.apmcdn.org/67a67513f9d731846f30f3ce76b6532721cc3411/widescreen/63823f-20190128-a-beautiful-world-animal-rescue-01.jpg"
                alt="https://img.apmcdn.org/67a67513f9d731846f30f3ce76b6532721cc3411/widescreen/63823f-20190128-a-beautiful-world-animal-rescue-01.jpg"
              />
            </div>

            <div className="block bg-blue-400 !px-10 !py-5">
              <h1 className="text-2xl font-bold !mb-3">
                CATS & DOGS WISH LIST
              </h1>
              <ul>
                <li className="!mt-2"> Dog food (kibble and canned)</li>
                <li className="!mt-2"> Cat food (kibble and canned)</li>
                <li className="!mt-2"> Crates, carriers or cages</li>
                <li className="!mt-2"> Pee pads</li>
                <li className="!mt-2"> Scratching posts for the cats</li>
                <li className="!mt-2"> Brushes and toys for cats</li>
                <li className="!mt-2"> Vaccines, medicine and vitamins</li>
                <li className="!mt-2"> Dog and cat treats</li>
                <li className="!mt-2"> Leashes, harnesses and collars</li>
              </ul>
            </div>

            <div className="block bg-blue-400 !px-10 !py-5">
            <h1 className="text-2xl font-bold !mb-3">
                SHELTER WISH LIST
              </h1>              <ul>
                <li className="!mt-2"> Detergent powder and bleach</li>
                <li className="!mt-2"> Dishwashing paste or liquid</li>
                <li className="!mt-2"> Bath towels</li>
                <li className="!mt-2"> Garbage bags (XXL)</li>
                <li className="!mt-2"> Foot rugs or door mats</li>
                <li className="!mt-2">
                  {" "}
                  Clinic supplies (alcohol, cotton, etc.)
                </li>
                <li className="!mt-2"> Old newspapers</li>
                <li className="!mt-2"> Toilet paper</li>
                <li className="!mt-2"> Mops and brooms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
