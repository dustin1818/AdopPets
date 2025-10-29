import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
 const [showPassword, setShowPassword] = useState(false);
 const [buttonDisabled, setButtonDisabled] = useState(true);
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email, password]);


 const togglePassword = () => {
    setShowPassword(!showPassword);
  };

const navigate = useNavigate()
const navigateToHome = () => {
    navigate('/welcome');
}

  return (
    <div className="flex">
      <div className="bg-[url('https://cdn.prod.website-files.com/5babc11099f97ea5dbcf24d5/66d73cbda2ea6a21d047904b_can-nurses-have-dogs.jpg')] bg-cover bg-center h-screen w-[50%]"></div>

      <div className="w-[50%]">
        <div className="mx-auto flex flex-col items-center justify-center h-screen">
          <div className="block">
            <h1 className="font-extrabold text-4xl text-center !mb-[20px] ">
              Adop<span className=" text-blue-400">Pets</span>
            </h1>
            <p className="text-xl">One stop website for pet adoption</p>
          </div>

          <div className="grid w-full max-w-sm items-center gap-3 !mt-5">
            <Input
              value={email}
             onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border-2 !p-5 outline-none bg-gray-50 text-gray-800 focus-visible:ring-2 focus-visible:ring-blue-500"
            />

            <div className="relative">
            <i className="fa-solid fa-eye-slash cursor-pointer !absolute !right-4 !top-1/2 !-translate-y-1/2" onClick={togglePassword}></i>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Password"
              className="border-2 !p-5 outline-none bg-gray-50 text-gray-800 focus-visible:ring-2 focus-visible:ring-blue-500"
            />
            </div>

            <Button
              type="submit"
              className="w-full !p-5 outline-none bg-blue-500 text-white focus-visible:ring-2 focus-visible:ring-blue-500"
              onClick={navigateToHome}
              disabled={buttonDisabled}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
