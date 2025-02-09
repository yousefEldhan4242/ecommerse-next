"use client"
import { addConfirmNewPassword, addCurrentPassword, addNewPassword } from '@/app/rtk/slices/account-slice';
import { State } from '@/app/rtk/store';
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';
import FirstNameInput from './FirstNameInput';
import SecondNameInput from './SecondNameInput';
import AddressInput from './AddressInput';
import PasswordsFields from './PasswordsFields';
import EmailInput from './EmailInput';

const Form = ({nameSpanRef}:{nameSpanRef: React.RefObject<HTMLSpanElement>}) => {
    const address = useSelector((state:State)=> state.account.address);
    const firstName = useSelector((state:State) => state.account.firstName) as string;
    const currentPassword = useSelector((state:State) => state.account.currentPassword) as string
    const newPassword = useSelector((state:State) => state.account.newPassword) as string
    const confirmNewPassword = useSelector((state:State) => state.account.confirmNewPassword) as string
    const secondName = useSelector((state:State) => state.account.secondName) as string;
    const email = useSelector((state:State) => state.account.email) as string

    const dispatch = useDispatch()




    const handleSubmit = () => {
        
        if (
          firstName &&
          secondName &&
          email &&
          newPassword &&
          confirmNewPassword &&
          address
        ) {
          if (newPassword == confirmNewPassword) {
            if (currentPassword == localStorage.getItem("password")) {
              Swal.fire({
                title: "Good Job",
                text: `You Have Successfully Changed The Settings Of Your Account`,
                icon: "warning",
              });
    
              window.scrollTo({ top: 0 });
    
              localStorage.setItem("first-name", firstName);
              localStorage.setItem("second-name", secondName);
              localStorage.setItem("address", address);
              localStorage.setItem("password", newPassword);
    
              dispatch(addCurrentPassword(""))
              dispatch(addNewPassword(""))
              dispatch(addConfirmNewPassword(""))
    
              if (
                localStorage.getItem("first-name") &&
                localStorage.getItem("second-name")
              ) {
                if (nameSpanRef.current) {
                  nameSpanRef.current.textContent = `${localStorage.getItem(
                    "first-name"
                  )} ${localStorage.getItem("second-name")}`;
                }
              } else {
                if (nameSpanRef.current) {
                  nameSpanRef.current.textContent = "Md Rimel";
                }
              }
            } else {
              Swal.fire({
                title: "Check Current Password",
                text: `The Current Password Isn't Corresct`,
                icon: "warning",
              });
            }
          } else {
            Swal.fire({
              title: "Not Matched Passwords",
              text: `The New Password Field And Confirm Password Field Isn't Matched`,
              icon: "warning",
            });
          }
        } else {
          Swal.fire({
            title: "Complete Fields",
            text: `Please Complete All The Fields To Save The Changes`,
            icon: "warning",
          });
        }
      };


      useEffect(() => {
        if (
          localStorage.getItem("first-name") &&
          localStorage.getItem("second-name")
        ) {
          if (nameSpanRef.current) {
            nameSpanRef.current.textContent = `${localStorage.getItem(
              "first-name"
            )} ${localStorage.getItem("second-name")}`;
          }
        } else {
          if (nameSpanRef.current) {
            nameSpanRef.current.textContent = "Md Rimel";
          }
        }
      }, []);


  return (
    <section className="py-11 grow shadow-accountSahdow px-[88px]">
    <h2 className="text-[20px] font-semibold text-main-color mb-5">
      Edit Your Profile
    </h2>

    <div className="flex gap-10">
          <FirstNameInput firstName={firstName}/>
          <SecondNameInput secondName={secondName}/>
    </div>

    <div className="flex gap-10">
          <EmailInput email={email}/>
          <AddressInput address={address}/>
    </div>
          <PasswordsFields newPassword={newPassword} currentPassword={currentPassword} confirmNewPassword={confirmNewPassword}/>
    <div className="flex justify-end items-center gap-9">
      <span>Cancel</span>
      <button
        onClick={() => {
          handleSubmit();
        }}
        className="btn px-[4vw] py-3 bg-main-color hover:bg-main-hover-bg duration-300 text-white rounded"
      >
        Save Changes
      </button>
    </div>
  </section>
  )
}

export default Form
