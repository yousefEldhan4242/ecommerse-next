import React, { RefObject } from 'react'
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setUserLoggedState } from "../../rtk/slices/user-loggedIn-slice";
import useHandleSubmitBtn from './useHandleSubmitBtn';
import useHandleRefs from './useHandleRefs';
import useValidatePass from './useValidatePass';

interface Props{
  formRef:RefObject<HTMLFormElement>
  passwordInput:string
  emailOrPhoneNumberInput:string
  passwordRef:RefObject<HTMLSpanElement>
  passwordInputRef:RefObject<HTMLInputElement>
  emailOrPhoneNumberRef:RefObject<HTMLSpanElement>
  emailOrPhoneNumberInputRef:RefObject<HTMLInputElement>
  submitBtnRefLogIn:RefObject<HTMLButtonElement>
  submitBtnRefSignUp:RefObject<HTMLButtonElement>
}

const useHandleSubmit = ({formRef,passwordInput,emailOrPhoneNumberInput,passwordRef,
    passwordInputRef,emailOrPhoneNumberRef,emailOrPhoneNumberInputRef,submitBtnRefLogIn,submitBtnRefSignUp}:Props
) => {

  const handleSubmitBtn = useHandleSubmitBtn({submitBtnRefLogIn,submitBtnRefSignUp})
  const handleRefs = useHandleRefs()
  const validatePassword = useValidatePass()

    const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    const oneLetterRegex = /[a-zA-Z]/;
    const regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    const regPhone =
      /^\+?\d{1,3}?[-.\s]?(\(?\d{1,4}?\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    const router = useRouter();
    
    const dispatch = useDispatch();
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
    
  return handleSubmit
}

export default useHandleSubmit
