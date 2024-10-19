"use client";
import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isFocused, setIsFocused] = useState({
    nameInput: false,
    emailInput: false,
    PhoneInput: false,
  });
  const [inputValue, setInputValue] = useState({
    nameInput: "",
    emailInput: "",
    PhoneInput: "",
  });

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current?.checkValidity()) {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      Swal.fire({
        title: "Good Job",
        html: `Thanks MR <span class="text-green-600">${name}</span> For Your Trust, Your Message Is Being Processing And We Will Contact You Soon ⌚⌚.`,
        icon: "success",
      });
    } else {
      formRef.current?.reportValidity();
    }
  };

  return (
    <main className="container my-[100px]">
      <ul className=" flex gap-2 mb-[150px]">
        <li className="text-[#878787] hover:text-lis-hover-color duration-300">
          <Link href="/">Home</Link>
        </li>
        <span className="text-[#878787]">/</span>
        <li>Contact</li>
      </ul>
      <section className="flex gap-8 flex-wrap lg:flex-nowrap">
        <section className="p-10 shadow-contactShadow rounded w-full lg:w-[31%]">
          <div className="flex gap-4 items-center mb-5">
            <div>
              <img src="/icons-phone.png" alt="" />
            </div>
            <div>Call To Us</div>
          </div>
          <div className="flex flex-col gap-3">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>

          <hr className="my-5 border-border-color" />
          <div className="flex gap-4 items-center mb-5">
            <div>
              <img src="/icons-mail.png" alt="" />
            </div>
            <div>Write To US</div>
          </div>
          <div className="flex flex-col gap-3">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </section>
        <section>
          <form
            className="p-10 rounded shadow-contactShadow w-full h-full lg:w-fit flex flex-col"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div className="flex gap-3 mb-5 flex-wrap sm:flex-nowrap">
              <div className="relative w-full">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  onFocus={() =>
                    setIsFocused({ ...isFocused, nameInput: true })
                  }
                  onBlur={() =>
                    setIsFocused({ ...isFocused, nameInput: false })
                  }
                  className="py-2 px-4 bg-[#f5f5f5] rounded outline-none w-full"
                />
                {!name && !isFocused.nameInput && (
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none py-2 px-4 text-[#9ba3b0]">
                    {/* Placeholder element here */}
                    Your Name <span className="text-[#f1b5b5] ml-1"> *</span>
                  </div>
                )}
              </div>
              <div className="relative w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setInputValue({
                      ...inputValue,
                      emailInput: e.target.value,
                    });
                    setEmail(e.target.value);
                  }}
                  onFocus={() =>
                    setIsFocused({ ...isFocused, emailInput: true })
                  }
                  onBlur={() =>
                    setIsFocused({ ...isFocused, emailInput: false })
                  }
                  className="py-2 px-4 bg-[#f5f5f5] rounded outline-none w-full"
                />
                {!email && !isFocused.emailInput && (
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none py-2 px-4 text-[#9ba3b0]">
                    {/* Placeholder element here */}
                    Your Email <span className="text-[#f1b5b5] ml-1"> *</span>
                  </div>
                )}
              </div>
              <div className="relative w-full">
                <input
                  type="tel"
                  required
                  value={phone}
                  pattern="^\+?[1-9]\d{1,14}$"
                  onChange={(e) => {
                    setInputValue({
                      ...inputValue,
                      PhoneInput: e.target.value,
                    });
                    setPhone(e.target.value);
                  }}
                  onFocus={() =>
                    setIsFocused({ ...isFocused, PhoneInput: true })
                  }
                  onBlur={() =>
                    setIsFocused({ ...isFocused, PhoneInput: false })
                  }
                  className="py-2 px-4 bg-[#f5f5f5] rounded outline-none w-full"
                />
                {!phone && !isFocused.PhoneInput && (
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none py-2 px-4 text-[#9ba3b0]">
                    {/* Placeholder element here */}
                    Your Phone <span className="text-[#f1b5b5] ml-1">*</span>
                  </div>
                )}
              </div>
            </div>
            <div className="grow">
              <textarea
                required
                value={message}
                className="bg-[#f5f5f5] py-2 px-4 outline-none resize-none h-full w-full min-h-[250px] rounded"
                placeholder="Your Message"
                name=""
                id=""
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-main-color duration-300 hover:bg-main-hover-bg py-4 px-[4vw] rounded text-white mt-7"
              >
                Send Massage
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
};

export default Contact;
