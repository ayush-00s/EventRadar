import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const LogIn = ({ onClose,onSignUpClick }) => {
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSignUp = () => {
        onClose();
        onSignUpClick();
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!email || !password ){
            setError("All feilds are required");
            return;
        }

        setLoading(true);
        setError("");

        try{
            const userInfo = {
                email: email,
                password: password
            };

            const res = await axios.post("http://localhost:5001/user/login", userInfo);

            console.log(res.data);

            alert("signed in sucessfully");
            navigate("/Home");
            onClose();

        } catch (err) {
            console.log(err);
            if (err.response?.status === 400 ){
                setError("Invalid email or password");
            } else {
                setError(err.response?.data?.message || "Error siging in");
            }
        } finally {
            setLoading(false);
        }
    };

    return (

    <div className='fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm'>
      <div className='relative flex flex-col gap-2 p-6 items-center bg-white w-100 rounded-3xl shadow-2xl'>
        
        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
        >
            ✕
        </button>

        
        <span className='font-sans font-semibold text-2xl'>Welcome to Event Radar</span>
        {error && <p className='text-red-500 text-sm'>{error}</p>}
        
        <form 
        onClick={handleSubmit}
        className='flex flex-col gap-2 mt-4 w-full'>
            
            <span className='text-sm font-medium'>Email address</span>
            <input 
                type='email'
                placeholder='Email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='border border-gray-300 p-2 rounded-xl focus:outline-blue-500'
            />
            
            <span className='text-sm font-medium'>Password</span>
            <input
                type='password'
                placeholder='Create a password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='border border-gray-300 p-2 rounded-xl focus:outline-blue-500'
            />
            <Link 
            to=""
            className='text-sm text-blue-500 hover:underline hover:underline-offset-1'
            >
                Forgotten your password?
            </Link>
            
            <button 
            type='submit'
            disabled={loading}
            className='bg-blue-500 text-white p-2 mt-2 rounded-2xl hover:bg-blue-600 active:scale-95 transition-all disabled:opacity-50'>
                {loading ? "Creating account..." : "Continue"}
            </button>

            <div className='flex items-center gap-2 my-2'>
                <div className='flex-1 h-px bg-gray-300'></div>
                <span className='text-xs text-gray-500'>OR</span>
                <div className='flex-1 h-px bg-gray-300'></div>
            </div>

            <button 
            type='button'
            className='border border-gray-300 p-2 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 active:scale-95 transition-all'>
                Continue With Google
            </button>
        </form>

        <p className='font-light text-sm mt-4'>
            Not on Radar yet? 
            <Link 
            onClick={handleSignUp}
            className='font-semibold text-blue-600 ml-1'>Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default LogIn