"use client";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Swal from "sweetalert2";
import { State } from "../../rtk/store";
import Image from "next/image";
import Form from "./Form";


const SignUpAndLogIn = ({ isInLogIn }: { isInLogIn: boolean }) => {

  const loggedInState = useSelector((state: State) => state.loggedIn);


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
      <Image width={100} height={100}
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
        <Form isInLogIn={isInLogIn}/>
        {!isInLogIn && (
          <div className="foot">
            <div className="mb-9">
              <Image width={100} height={100} src="/Google SIgn up.png" alt="" />
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
