import fleetMapLogo from './assets/fleetmaplogo.png'
import bgImg from './assets/bgimg3.jpg'
import { LoginForm } from "@/components/login-form"



export default function LoginPage() {

  return (
        <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <img src={fleetMapLogo} alt="FleetMap Logo" className="w-60 mb-4 rounded-xl" />
          <h1 className="text-2xl font-bold">Sign in to FleetMap</h1>
        </div>

        <LoginForm />
      </div>
    </div>
  )
}

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import bgImg from './assets/bgimg3.jpg'
// import fleetMapLogo from './assets/fleetmaplogo.png'


// const LoginPage = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
//   const navigate = useNavigate();

  // const handleSignIn = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (username && password) {
  //     navigate("/home");
  //   }
  // };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: `url(${bgImg})` }}
//     >
//       <form
//         className="bg-white backdrop-blur-md p-8 w-80 shadow-md rounded-2xl"
//         onSubmit={handleSignIn}
//       >
//         <img
//           src={fleetMapLogo}
//           alt="FleetMap Logo"
//           className="mb-4 mx-auto w-32"
//         />
//         <h2 className="text-2xl font-bold mb-3 text-center">Login</h2>

//         <input
//           className="w-full mb-4 p-2 border rounded"
//           placeholder="Username"
//           value={username}
//           type="text"
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
          // className="w-full mb-4 p-2 border rounded"
          // type="password"
          // placeholder="Password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-2"
//           type="submit"
//         >
//           Sign In
//         </button>
//         <button
//           className="w-full bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400"
//           type="button"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;