import React from 'react';

function Signup() {
    return (
        <div className="flex flex-col justify-center px-6 py-12 lg:px-8 ">
           
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                {/* <img 
                    className="mx-auto h-10 w-auto" 
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" 
                    alt="Your Company" 
                /> */}
                <h2 className="mt-10 text-center text-orange-400 text-2xl font-bold leading-9 tracking-tight">
                    Sign in to your account
                </h2>
            </div>

{/* email feild */}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label 
                            htmlFor="email" 
                            className="block text-sm font-medium leading-6 text-orange-600"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                autoComplete="email" 
                                required 
                                className="block w-full rounded-md border-0 py-1.5 text-orange-600 shadow-sm ring-1 ring-inset ring-orange-400 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

{/* pasword feild */}
<div>
                        <div className="flex items-center justify-between">
                            <label 
                                htmlFor="password" 
                                className="block text-sm font-medium leading-6 text-orange-600"
                            >
                                Password
                            </label>
                            
                        </div>
                        <div className="mt-2 text-orange-600">
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                autoComplete="current-password" 
                                required 
                                className="block  w-full rounded-md  py-1.5 text-orange-600 ring-1 ring-inset ring-orange-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                
{/* confirm pasword feild */}
<div>
                        <div className="flex items-center justify-between">
                            <label 
                                htmlFor="password" 
                                className="block text-sm font-medium leading-6 text-orange-600"
                            >
                                Confirm Password
                            </label>
                           
                        </div>
                        <div className="mt-2 text-orange-600">
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                autoComplete="current-password" 
                                required 
                                className="block  w-full rounded-md  py-1.5 text-orange-600 ring-1 ring-inset ring-orange-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


{/* first name feild */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label 
                                htmlFor="fname" 
                                className="block text-sm font-medium leading-6 text-orange-600"
                            >
                                First Name
                            </label>
                            
                        </div>
                        <div className="mt-2 text-orange-600">
                            <input 
                                id="fName" 
                                name="firstName" 
                                type="text" 
                                // autoComplete="current-password" 
                                required 
                                className="block  w-full rounded-md  py-1.5 text-orange-600 ring-1 ring-inset ring-orange-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
{/* last name feild */}
<div>
                        <div className="flex items-center justify-between">
                            <label 
                                htmlFor="fname" 
                                className="block text-sm font-medium leading-6 text-orange-600"
                            >
                                Last Name
                            </label>
                            
                        </div>
                        <div className="mt-2 text-orange-600">
                            <input 
                                id="fName" 
                                name="firstName" 
                                type="text" 
                                // autoComplete="current-password" 
                                required 
                                className="block  w-full rounded-md  py-1.5 text-orange-600 ring-1 ring-inset ring-orange-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    


                    <div>
                        <button 
                            type="submit" 
                            className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 "
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    If your account is registered? 
                    <a href="#" className="font-semibold leading-6 text-orange-400 hover:text-orange-600">
                        login
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Signup;
