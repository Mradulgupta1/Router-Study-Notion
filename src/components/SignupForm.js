                            // ॥ श्री गणेशाय नमः ॥ 

import React, { useState,} from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


function SignupForm({setIsLoggedIn}){

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false)

    const [showConfirmPassword, setShowConfirmPassword] = useState(false)


    const [accountType, setAccountType] = useState("student")

    const navigate = useNavigate();



    function changeHandler(event){
        setFormData((prev) => (
            {
                ...prev,
                [event.target.name] : event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match");
        }
        else{
            setIsLoggedIn(true);
            toast.success("Account Created");
            const accountData = {
                ...formData,
                accountType
            }
            console.log("Printing Account Data");
            console.log(accountData);
            navigate("/dashboard");
        }
        

    }

    return(
        <div>

            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 max-w-max rounded-full border-b-[2px] border-richblack-700 ">
                <button 
                    className={`${accountType === "student" ? 
                    "bg-richblack-900 text-richblack-5" : 
                    "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("student")}>
                    Student
                </button>

                <button 
                    className={`${accountType === "instructor" ? 
                    "bg-richblack-900 text-richblack-5" : 
                    "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* First and Last Name */}
                <div className="flex gap-x-4 mt-4">
                    <label>

                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name<sup className="text-pink-200">*</sup></p>

                        <input
                            required
                            type="text"
                            name="firstName"
                            placeholder="Enter First Name"
                            onChange={changeHandler}
                            value={formData.firstName}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[2px] border-richblack-700"
                        />

                    </label>

                    <label>

                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name<sup className="text-pink-200">*</sup></p>

                        <input
                            required
                            type="text"
                            name="lastName"
                            placeholder="Enter Last Name"
                            onChange={changeHandler}
                            value={formData.lastName}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[2px] border-richblack-700"                    
                        />

                    </label>

                </div>

                {/* <br/> */}

                {/* Email Address */}
                
                <div className="mt-4">

                    <label>

                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>

                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="Enter Email Address"
                            onChange={changeHandler}
                            value={formData.email}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[2px] border-richblack-700"
                        />

                    </label>
                </div>
                

                {/* <br/> */}

                {/* Create and Confirm Password */}

                <div className="flex gap-x-4 mt-4">
                    <label className="relative">

                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup></p>

                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            placeholder="Enter Password"
                            onChange={changeHandler}
                            value={formData.password}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[2px] border-richblack-700"
                        />

                        <span 
                            className="absolute right-3 top-[38px] cursor-pointer"
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? 

                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                            (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                        </span>

                    </label>

                    <label className="relative">

                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password<sup className="text-pink-200">*</sup></p>

                        <input
                            required
                            type={showConfirmPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={changeHandler}
                            value={formData.confirmPassword}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[2px] border-richblack-700"
                        />

                        <span 
                            className="absolute right-3 top-[38px] cursor-pointer"
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? 

                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                            (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                        </span>

                    </label>
                </div>

                <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">Create Account</button>

            </form>

        </div>
    )
}


export default SignupForm;