"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

const Account = () => {
  //  destrucure this component into smaller components and make it a server component by using rdk for the interactions

  const [firstName, setFirstName] = useState(
    localStorage.getItem("first-name") ? localStorage.getItem("first-name") : ""
  );
  const [secondName, setSecondName] = useState(
    localStorage.getItem("second-name")
      ? localStorage.getItem("second-name")
      : ""
  );
  const [email, setEmail] = useState(
    localStorage.getItem("email-or-phone-number")
      ? localStorage.getItem("email-or-phone-number")
      : ""
  );
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [address, setAddress] = useState(
    localStorage.getItem("address") ? localStorage.getItem("address") : ""
  );

  const nameSpanRef = useRef<HTMLSpanElement>(null);

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

          setCurrentPassword("");
          setNewPassword("");
          setConfirmNewPassword("");

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
    <main className="container py-[100px]">
      <section className="flex justify-between mb-[100px] flex-wrap gp-3">
        <ul className=" flex gap-2">
          <li className="text-[#878787] hover:text-lis-hover-color duration-300">
            <Link href="/">Home</Link>
          </li>
          <span className="text-[#878787]">/</span>
          <li>My Account</li>
        </ul>
        <div>
          <span>Welcome! </span>
          <span className="text-main-color" ref={nameSpanRef}>
            {localStorage.getItem("first-name") &&
            localStorage.getItem("second-name")
              ? `${localStorage.getItem("first-name")} ${localStorage.getItem(
                  "second-name"
                )}`
              : "Md Rimel"}
          </span>
        </div>
      </section>
      <section className="flex gap-32 justify-center flex-wrap lg:justify-stretch lg:flex-nowrap">
        <div className="lg:block flex gap-[5vw] flex-wrap">
          <dl>
            <dt className="text-[18px] mb-2 text-nowrap">Manage My Account</dt>
            <dd className="ml-9 text-main-color text-nowrap">My Profile</dd>
            <dd className="text-[#808080] ml-9 text-nowrap">Address Book</dd>
            <dd className="text-[#808080] ml-9 text-nowrap">
              My Payment Options
            </dd>
          </dl>
          <dl>
            <dt className="text-[18px] mb-2 lg:mt-4 text-nowrap">My Orders</dt>
            <dd className="text-[#808080] ml-9 text-nowrap">My Returns</dd>
            <dd className="text-[#808080] ml-9 text-nowrap">
              My Cancellations
            </dd>
          </dl>
          <dl>
            <dt className="text-[18px] lg:mt-4 text-nowrap">My WishList</dt>
          </dl>
        </div>
        <section className="py-11 grow shadow-accountSahdow px-[88px]">
          <h2 className="text-[20px] font-semibold text-main-color mb-5">
            Edit Your Profile
          </h2>

          <div className="flex gap-10">
            <div className="grow">
              <label htmlFor="first-name">First Name</label>
              <input
                placeholder="Md"
                className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7 text-[#7b7b7b]"
                type="text"
                id="first-name"
                value={firstName as string}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="grow">
              <label htmlFor="last-name">Last Name</label>
              <input
                placeholder="Rimel"
                className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7 text-[#7b7b7b]"
                type="text"
                id="last-name"
                value={secondName as string}
                onChange={(e) => {
                  setSecondName(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex gap-10">
            <div className="grow">
              <label htmlFor="email">Email</label>
              <input
                placeholder="rimel1111@gmail.com"
                className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7 text-[#7b7b7b]"
                type="email"
                id="email"
                value={email as string}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="grow">
              <label htmlFor="address">Address</label>
              <input
                placeholder="Kingston, 5236, United State"
                className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7 text-[#7b7b7b]"
                type="text"
                id="address"
                value={address as string}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password">Password Changes</label>
            <input
              type="password"
              placeholder="Current Passwod"
              className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-3 text-[#7b7b7b]"
              id="password"
              value={currentPassword}
              onChange={(e) => {
                setCurrentPassword(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="New Passwod"
              className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-3 text-[#7b7b7b]"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Confirm New Passwod"
              className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-3 text-[#7b7b7b]"
              value={confirmNewPassword}
              onChange={(e) => {
                setConfirmNewPassword(e.target.value);
              }}
            />
          </div>
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
      </section>
    </main>
  );
};

export default Account;
