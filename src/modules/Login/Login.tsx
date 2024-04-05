import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'; // Import Redux functions
// import { setToken } from '../../store/AuthSlice';
// import { FaUserAlt } from 'react-icons/fa';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";
// import { RootState } from '../../store/store';
// import instance from '../../axiosInstance';
import verification from "../../assets/img/verification.png";
// import { setUser } from '../../store/userSlice';
import { setLoggedIn } from '../shared/store/LoginSlice';

const Login = () => {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [error, setError] = useState("");
  const welcomeTextControls = useAnimation();
  const loginCardControls = useAnimation();

  useEffect(() => {
    welcomeTextControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    });

    loginCardControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 },
    });
  }, [welcomeTextControls, loginCardControls]);

  // Get token from Redux store
  // const token = useSelector((state: RootState) => state.auth.token);
  //   const token = localStorage.getItem('token');
    const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    dispatch(setLoggedIn(false));
    localStorage.setItem("loggedIn", 'false');
    localStorage.setItem("username",userName);
    // try {
    //   // Send login request to server
    //   console.log(emailId, password);
    //   const response = await instance.post('/auth/signin', {
    //     emailId,
    //     password,
    //   });

    //   if (response.status === 201) {
    //     const { accessToken, emailId, id } = response.data;
    //     console.log('Login successful');
    //     // Set token in Redux store

    //     console.log('Access Token : ',response.data.accessToken);
    //     console.log('Email Id : ',response.data.emailId);
    //     console.log('Unique Id : ',response.data.id);
    //     dispatch(setToken(accessToken));
    //     localStorage.setItem('token', accessToken);
    //     localStorage.setItem('emailId', emailId);
    //     localStorage.setItem('id', id);
    //     dispatch(setUser({ emailId, id }));
    //     localStorage.setItem('loggedIn', 'false');
    //     dispatch(setLoggedIn(false));
    //   } else {
    //     setError('Invalid email or password.');
    //   }

    //   setEmail('');
    //   setPassword('');
    // } catch (error) {
    //   console.log('Error occurred during login:', error);
    //   setError('An error occurred during login.');
    // }
  };

  const handleShowClick = () => {
    setShowPassword(!showPassword);
  };

  //   const handleSignUpClick = () => {
  //     setShowLoginForm(false);
  //   };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    dispatch(setLoggedIn(false));
    localStorage.setItem("loggedIn", 'false');
    localStorage.setItem("username",userName);
    // try {
    //   // Send signup request to the server
    //   const response = await instance.post('/auth/signup', {
    //     emailId,
    //     password,
    //     firstName,
    //     lastName,
    //   });

    //   if (response.status === 201) {
    //     console.log('Signup successful');
    //     // Any other action
    //   } else {
    //     setError('Signup failed. Please try again.');
    //   }

    //   setEmail('');
    //   setPassword('');
    //   setFirstName('');
    //   setLastName('');
    //   // Hide the signup form after successful signup
    //   setShowLoginForm(true);
    // } catch (error) {
    //   console.log('Error occurred during signup:', error);
    //   setError('An error occurred during signup.');
    // }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-1 flex flex-col justify-center sm:py-1">
      <div className="flex flex-col sm:flex-row-reverse">
        <div className="relative py-1 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-2xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className=" relative px-4 py-4 bg-gradient-to-r from-zinc-100 to-white shadow-2xl sm:rounded-3xl sm:p-20 ">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">
                  {showLoginForm ? "Login Form" : "Sign Up Form"}
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  {!showLoginForm && (
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <label
                        htmlFor="firstName"
                        className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        First Name
                      </label>
                    </div>
                  )}
                  {!showLoginForm && (
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <label
                        htmlFor="lastName"
                        className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Last Name
                      </label>
                    </div>
                  )}
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="left-2 -top-8.5 text-gray-600 text-md peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-16.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                    <input
                      autoComplete="off"
                      id="emailId"
                      name="emailId"
                      type="text"
                      value={emailId}
                      onChange={(e) => setEmail(e.target.value)}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="left-2 -top-8.5 text-gray-600 text-md peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-16.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      User Name
                    </label>
                    <input
                      autoComplete="off"
                      id="emailId"
                      name="emailId"
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="User Name"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="left-2 -top-8.5 text-gray-600 text-md peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-16.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                    <div className="flex items-center">
                      <input
                        autoComplete="off"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                        placeholder="Password"
                      />
                      <div
                        className="cursor-pointer absolute top-7 right-0 p-2"
                        onClick={handleShowClick}
                      >
                        {showPassword ? <IoEyeOff /> : <IoEye />}
                      </div>
                    </div>
                  </div>
                  {!showLoginForm && (
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="passwordConfirm"
                        name="passwordConfirm"
                        type="password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                        placeholder="Confirm Password"
                      />
                      <label
                        htmlFor="passwordConfirm"
                        className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Confirm Password
                      </label>
                    </div>
                  )}
                  <div className="relative ">
                    {showLoginForm ? (
                      <button
                        onClick={handleLogin}
                        className="bg-blue-400 text-white rounded-md px-3 py-2 hover:bg-blue-500 cursor-pointer"
                      >
                        Login
                      </button>
                    ) : (
                      <button
                        onClick={handleSignUp}
                        className="bg-blue-400 text-white rounded-md px-2 py-2 hover:bg-blue-500 cursor-pointer"
                      >
                        Sign Up
                      </button>
                    )}
                  </div>
                </div>
                {error && (
                  <div className="py-2 text-red-500 text-sm">{error}</div>
                )}
              </div>
              <div className="text-center mt-4">
                {showLoginForm ? (
                  <p className="text-sm">
                    Don't have an account?{" "}
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => setShowLoginForm(false)}
                    >
                      Sign Up
                    </span>
                  </p>
                ) : (
                  <p className="text-sm">
                    Already have an account?{" "}
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => setShowLoginForm(true)}
                    >
                      Login
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-4 py-0">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={welcomeTextControls}
              className="text-center mb-0"
            >
              <motion.h1 className="text-blue-600 text-5xl font-semibold mb-0">
                Welcome to VeriFi...
              </motion.h1>
            </motion.div>
            <div className="md:mr-8 flex mt-16">
              <img src={verification} alt="Image" className="w-auto h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
