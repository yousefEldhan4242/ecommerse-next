"use client"
import React, { useRef, useState } from 'react'
import useHandleSubmit from './useHandleSubmit';

const Form = ({ isInLogIn }: { isInLogIn: boolean }) => {

  const [emailOrPhoneNumberInput, setEmailOrPhoneNumberInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const emailOrPhoneNumberRef = useRef<HTMLSpanElement>(null);
  const emailOrPhoneNumberInputRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLSpanElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const submitBtnRefSignUp = useRef<HTMLButtonElement>(null);
  const submitBtnRefLogIn = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);


  const handleSubmit = useHandleSubmit({formRef,passwordInput,emailOrPhoneNumberInput,passwordRef,passwordInputRef,
    emailOrPhoneNumberRef,emailOrPhoneNumberInputRef,submitBtnRefLogIn,submitBtnRefSignUp}
  )

  return (
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
  )
}

export default Form
