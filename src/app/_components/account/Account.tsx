"use client"
import Link from "next/link";
import Form from "./Form";
import { useRef } from "react";

const Account = () => {

  const nameSpanRef = useRef<HTMLSpanElement>(null);



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
        <Form nameSpanRef={nameSpanRef}/>
      </section>
    </main>
  );
};

export default Account;
