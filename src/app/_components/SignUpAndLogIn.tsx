"use client";
import PropTypes from "prop-types";
import { RefObject, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { setUserLoggedState } from "../rtk/slices/user-loggedIn-slice";
import { State } from "../rtk/store";

const SignUpAndLogIn = ({ isInLogIn }: { isInLogIn: boolean }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const loggedInState = useSelector((state: State) => state.loggedIn);

  const [emailOrPhoneNumberInput, setEmailOrPhoneNumberInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const emailOrPhoneNumberRef = useRef<HTMLSpanElement>(null);
  const emailOrPhoneNumberInputRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLSpanElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const submitBtnRefSignUp = useRef<HTMLButtonElement>(null);
  const submitBtnRefLogIn = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmitBtn = () => {
    if (window.location.pathname == "/logIn") {
      submitBtnRefLogIn.current?.classList.add("pointer-events-none");
      setTimeout(() => {
        submitBtnRefLogIn.current?.classList.remove("pointer-events-none");
      }, 1000);
    } else {
      submitBtnRefSignUp.current?.classList.add("pointer-events-none");
      setTimeout(() => {
        submitBtnRefSignUp.current?.classList.remove("pointer-events-none");
      }, 1000);
    }
  };

  const handleRefs = (
    firstRef: RefObject<HTMLSpanElement>,
    firstRefTextContent: string,
    secondRefInput: RefObject<HTMLInputElement>,
    ThirdRef: RefObject<HTMLSpanElement>
  ) => {
    if (firstRef.current) {
      firstRef.current.textContent = firstRefTextContent;
    }

    firstRef.current?.classList.remove("animate-coolHorizontalShake");
    setTimeout(() => {
      firstRef.current?.classList.add("animate-coolHorizontalShake");
    }, 0);

    secondRefInput.current?.focus();
    if (ThirdRef.current) {
      ThirdRef.current.textContent = "";
    }
  };

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    } else if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    } else if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    } else if (!/[0-9]/.test(password)) {
      return "Password must contain at least one digit.";
    } else if (!/[!@#$%^&*]/.test(password)) {
      return "Password must contain at least one special character (!@#$%^&*).";
    } else if (!regPassword.test(password)) {
      return "Password is invalid.";
    } else {
      return "";
    }
  };

  const oneLetterRegex = /[a-zA-Z]/;
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const regPhone =
    /^\+?\d{1,3}?[-.\s]?(\(?\d{1,4}?\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current?.checkValidity()) {
      if (passwordInput && emailOrPhoneNumberInput) {
        if (oneLetterRegex.test(emailOrPhoneNumberInput.slice(0, 1))) {
          // if email
          if (regEmail.test(emailOrPhoneNumberInput)) {
            // if valid email
            if (regPassword.test(passwordInput)) {
              // if valid Password
              if (
                passwordInput == localStorage.getItem("password") &&
                emailOrPhoneNumberInput ==
                  localStorage.getItem("email-or-phone-number")
              ) {
                if (window.location.pathname == "/logIn") {
                  Swal.fire({
                    title: "Good Job",
                    text: `You Have Successfully Logged In Now You Can Buy Products And Make Orders`,
                    icon: "success",
                  });

                  localStorage.setItem("password", passwordInput);
                  localStorage.setItem(
                    "email-or-phone-number",
                    emailOrPhoneNumberInput
                  );

                  router.push("/");
                  dispatch(setUserLoggedState(true));
                  window.scrollTo({ top: 0 });
                } else {
                  Swal.fire({
                    title: "The Account Already Exists",
                    text: `Please, LogIn Your Account Is Already Exists`,
                    icon: "info",
                  });
                  router.push("/logIn");
                }
              } else {
                if (window.location.pathname == "/logIn") {
                  Swal.fire({
                    title: "No Accounts Found",
                    text: `There Is No Account With These Info`,
                    icon: "info",
                  });
                } else {
                  Swal.fire({
                    title: "Good job!",
                    text: `You Have Successfully Created An Account Log In And Then You Can Buy Products And Make Orders`,
                    icon: "success",
                  });

                  localStorage.setItem("password", passwordInput);
                  localStorage.setItem(
                    "email-or-phone-number",
                    emailOrPhoneNumberInput
                  );

                  router.push("/logIn");
                }
              }
            } else {
              // if not valid password
              handleSubmitBtn();

              handleRefs(
                passwordRef,
                validatePassword(passwordInput),
                passwordInputRef,
                emailOrPhoneNumberRef
              );
            }
          } else {
            // if not valid email
            handleSubmitBtn();
            handleRefs(
              emailOrPhoneNumberRef,
              "Please, Write A Valid Email",
              emailOrPhoneNumberInputRef,
              passwordRef
            );
          }
        } else {
          // if phone number
          if (regPhone.test(emailOrPhoneNumberInput)) {
            // if valid phone number
            if (regPassword.test(passwordInput)) {
              // if valid Password
              if (
                passwordInput == localStorage.getItem("password") &&
                emailOrPhoneNumberInput ==
                  localStorage.getItem("email-or-phone-number")
              ) {
                Swal.fire({
                  title: "The Account Already Exists",
                  text: `Please, LogIn Your Account Is Already Exists`,
                  icon: "info",
                });
                router.push("/logIn");
              } else {
                Swal.fire({
                  title: "Good job!",
                  text: `You Have Successfully Created An Account Log In And Then You Can Buy Products And Make Orders`,
                  icon: "success",
                });

                localStorage.setItem("password", passwordInput);
                localStorage.setItem(
                  "email-or-phone-number",
                  emailOrPhoneNumberInput
                );

                router.push("/logIn");
              }
            } else {
              // if not valid password
              handleSubmitBtn();

              handleRefs(
                passwordRef,
                validatePassword(passwordInput),
                passwordInputRef,
                emailOrPhoneNumberRef
              );
            }
          } else {
            // if not valid phone number
            handleSubmitBtn();

            handleRefs(
              emailOrPhoneNumberRef,
              "Please, Write A Valid Phone Number",
              emailOrPhoneNumberInputRef,
              passwordRef
            );
          }
        }
      } else if (emailOrPhoneNumberInput.trim().length == 0) {
        handleSubmitBtn();

        handleRefs(
          emailOrPhoneNumberRef,
          "This Field Is Required",
          emailOrPhoneNumberInputRef,
          passwordRef
        );
      } else {
        handleSubmitBtn();

        handleRefs(
          passwordRef,
          "This Filed Is Required",
          passwordInputRef,
          emailOrPhoneNumberRef
        );
      }
    } else {
      formRef.current?.reportValidity();
    }
  };

  useEffect(() => {
    if (loggedInState) {
      Swal.fire({
        title: "Take Care",
        text: `You Are Already Logged In`,
        icon: "info",
      });
    }
  }, []);

  return (
    <section className="flex container pb-[100px] h-[800px] items-center justify-center">
      <div className="grow hidden lg:block"></div>
      <img
        className="absolute h-[50vw] max-h-[600px] left-0 hidden lg:block"
        src="/Side Image.png"
        alt=""
      />
      <div className="md:w-[371px]">
        <div className="text mb-8">
          <h2 className="text-[40px]">
            {isInLogIn ? "Log in to Exclusive" : "Create an account"}
          </h2>
          <p>Enter your details below</p>
        </div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-8 mb-4"
          ref={formRef}
        >
          {!isInLogIn && (
            <input
              className="border-b-[2px] border-b-border-color outline-none py-2 px-1"
              placeholder="Name"
              type="text"
              required
            />
          )}

          <input
            onChange={(e) => {
              setEmailOrPhoneNumberInput(e.target.value);
            }}
            ref={emailOrPhoneNumberInputRef}
            className="border-b-[2px] border-b-border-color outline-none py-2 px-1"
            placeholder="Email or Phone Number"
            type="text"
          />
          <span
            ref={emailOrPhoneNumberRef}
            className="mt-[-32px] text-red-600 block text-[15px]"
          ></span>

          <input
            onChange={(e) => {
              setPasswordInput(e.target.value);
            }}
            className="border-b-[2px] border-b-border-color outline-none py-2 px-1"
            placeholder="Password"
            type="password"
            ref={passwordInputRef}
          />
          <span
            ref={passwordRef}
            className="mt-[-32px] text-red-600 block text-[15px]"
          ></span>

          {isInLogIn ? (
            <div className="btns flex justify-between items-center gap-3 flex-wrap">
              <button
                className="bg-main-color text-white py-3 rounded px-10 hover:bg-main-hover-bg duration-300"
                type="submit"
                ref={submitBtnRefLogIn}
              >
                Log In
              </button>
              <span className="text-main-color hover:text-main-hover-bg duration-300">
                Forget Password?
              </span>
            </div>
          ) : (
            <button
              type="submit"
              ref={submitBtnRefSignUp}
              className="bg-main-color text-white py-3 rounded outline-none hover:bg-main-hover-bg duration-300"
            >
              Create Account
            </button>
          )}
        </form>
        {!isInLogIn && (
          <div className="foot">
            <div className="mb-9">
              <img src="/Google SIgn up.png" alt="" />
            </div>
            <div className="flex items-center gap-3 justify-center text-[#4d4d4d]">
              <span className="hover:text-[rgb(10_10_10)] duration-300">
                Already have account?
              </span>{" "}
              <Link
                href={"/logIn"}
                className="py-1 border-b-[2px] border-b-border-color font-semibold outline-none hover:text-[rgb(10_10_10)] duration-300"
              >
                Log in
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

SignUpAndLogIn.propTypes = {
  isInLogIn: PropTypes.bool,
};

export default SignUpAndLogIn;
