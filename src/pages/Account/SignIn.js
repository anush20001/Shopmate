import React, { useState,  } from "react";
import { Link, useNavigate } from "react-router-dom";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import  logowhite  from "../assests/logowhite.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import shopmatelogo8 from '../../assets/images/shopmatelogo8.png'

 import {MutatingDots} from "react-loader-spinner"
// import wellcome2grp from "../assests/wellcome2grp.jpg"

import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/shopSlice"; 

const Signin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
 
    const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  // Firebase Error

  const[userEmailErr, setUserEmailErr] = useState("")
  const[userParserErr, setUserParserErr] = useState("")
  const [Loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("")
  // Loading State start here


  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
 
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
    
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Enter your email");
    }
    if (!password) {
      setErrPassword("Enter your password");
    }
    if (email && password) {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // console.log(user)
          dispatch(setUserInfo(
           {
            _id:user.uid,
            userName:user.displayName,
            email:user.email,
            image:user.photoURL
           }
          ))
          // ...
          // console.log(user)
         
          //setSuccessMsg("Logged in Successfully! Welcome back!")
          
          setTimeout(() => {
            toast("Logged in Successfully!")
            navigate("/")
        },1000)
        })
        .catch((error) => {
            setLoading(false);
             
          const errorCode = error.code;
          // const errorMessage = error.message;
          // console.log(errorCode, errorMessage) 

         if (errorCode.includes("auth/invalid-email")){
            setUserEmailErr("Invalid Email")
          }
          if (errorCode.includes("auth/wrong-password")){
            setUserParserErr("Wrong password! try again")
          }
      
           console.log("Something is up,  Try correct Credential!");
        });
        
      
        
        
        
        
        
        setEmail("")

      setPassword("")
    }
  };
  
  return (
    <div className="w-full bg-gray-100 m-0 ">
      <div className="w-full bg-gray-100 pb-10 ">     
        
            
             <div className="   mx-auto flex flex-col pt-5 items-center">
     <Link to="/">
            <img className=" w-28" src={shopmatelogo8} alt="logowhite" />
          </Link>
     </div>
           
                <form className="w-[350px] mx-auto flex flex-col pt-12 items-center ">
           
           <div className="w-full border border-zinc-200 p-6">
             <h2 className="font-titleFont text-3xl font-medium mb-4">
               Sign in
             </h2>
             <div className="flex flex-col gap-3">
               <div className="flex flex-col gap-2">
                 <p className="text-sm font-medium">
                   Email or mobile phone number
                 </p>
                 <input
                   onChange={handleEmail}
                   value={email}
                   className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                   type="email"
                 />
                 {errEmail && (
                   <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                     <span className="italic font-titleFont font-extrabold text-base">
                       !
                     </span>
                     {errEmail}
                   </p>
                 )}
                  {userEmailErr && (
                   <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                     <span className="italic font-titleFont font-extrabold text-base">
                       !
                     </span>
                     {userEmailErr}
                   </p>
                 )}
                
               </div>
               <div className="flex flex-col gap-2">
                 <p className="text-sm font-medium">Password</p>
                 <input
                   onChange={handlePassword}
                   value={password}
                   className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                   type="password"
                 />
                 {errPassword && (
                   <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                     <span className="italic font-titleFont font-extrabold text-base">
                       !
                     </span>
                     {errPassword}
                   </p>
                 )}
                   
                  {userParserErr && (
                   <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                     <span className="italic font-titleFont font-extrabold text-base">
                       !
                     </span>
                     {userParserErr}
                   </p>
                 )}
                
               </div>
               <button
                 onClick={handleLogin}
                 className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#e53935] to-[#e53935] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
               >
                 Continue
               </button>
               {
               Loading && (
                   <div className="flex justify-center">
                       <MutatingDots 
                            height="200"
                            width="100"
                            color="#4fa94d"
                            secondaryColor= '#4fa94d'
                            radius='12.5'
                            ariaLabel="mutating-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                             />
                   </div>
                 
               ) }
              
           
             <p className="text-xs text-black leading-4 mt-4">
               By Continuing, you agree to Shopzone's{" "}
               <span className="text-blue-600">Conditions of Use </span>and{" "}
               <span className="text-blue-600">Privace Notice.</span>
             </p>
             <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
               {/* <ArrowRightIcon />{" "} */}
               <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                 Need help?
               </span>
             </p>
           </div>
           <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
             <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
             <span className="w-1/3 text-center">New to Shopmate?</span>
             <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
           </p>
           <Link className="w-full" to="/signup">
             <button className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">
               Create your Shopmate account
             </button>
           </Link>
           </div>
         </form>
           {/* )
         } */}
      
      </div>
      <div className="w-full  border-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
        <div className="flex items-center gap-6">
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Conditions of Use
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
        </div>
        <p className="text-xs text-gray-600">
          © 1996-2023, ReactBd.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Signin;