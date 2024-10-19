import { useDispatch, useSelector } from "react-redux";
import { Coupon, Total } from "./Pay";
import { useRef } from "react";
import { clearCart } from "../rtk/slices/cart-slice";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import Link from "next/link";
import { State } from "../rtk/store";

const CheckOut = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loggedInState = useSelector((state: State) => state.loggedIn);
  const cartState = useSelector((state: State) => state.cart);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    if (cartState.length > 0) {
      if (formRef.current?.checkValidity()) {
        if (loggedInState) {
          dispatch(clearCart());
          if (cartState.length == 1) {
            Swal.fire({
              title: "Good job!",
              html: `You Have Successfully Purshased Order With <span class="text-green-600">${cartState.length}</span> Product Your Order Is Being Processing.`,
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Good job!",
              html: `You Have Successfully Purshased Order With <span class="text-green-600">${cartState.length}</span> Products Your Order Is Being Processing.`,
              icon: "success",
            });
          }
        } else {
          Swal.fire({
            title: "Log In Firstly",
            text: `Please Log In First.`,
            icon: "info",
          });
          router.push("/logIn");
          window.scrollTo({ top: 0 });
        }
      } else {
        formRef.current?.reportValidity();
      }
    } else {
      Swal.fire({
        title: "Add Products First",
        text: `Please Add Products First Before Placing An Order.`,
        icon: "info",
      });
    }
  };
  return (
    <main className="container">
      <ul className=" flex gap-2 my-[100px] flex-wrap">
        <li className="text-[#878787] hover:text-lis-hover-color duration-300">
          <Link href="/account">Account</Link>
        </li>
        <span className="text-[#878787]">/</span>
        <li className="text-[#878787] hover:text-lis-hover-color duration-300">
          <Link href={"/account"}>My Account</Link>
        </li>
        <span className="text-[#878787]">/</span>
        <li className="text-[#878787] hover:text-lis-hover-color duration-300">
          Product
        </li>
        <span className="text-[#878787]">/</span>
        <li className="text-[#878787] hover:text-lis-hover-color duration-300">
          <Link href={"/cart"}>View Cart</Link>
        </li>
        <span className="text-[#878787]">/</span>
        <li>CheckOut</li>
      </ul>
      <h2 className="font-semibold text-[30px] mb-10">Billing Details</h2>
      <section className="flex mb-[100px] justify-center lg:justify-between flex-wrap gap-10">
        <form ref={formRef} className=" lg:w-[48%]" action="">
          <label className="text-[#999999]" htmlFor="name">
            First Name
            <span className="text-[#f1b5b5]">*</span>
          </label>
          <input
            className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7"
            type="text"
            id="name"
            required
          />
          <label className=" text-[#999999]" htmlFor="company">
            Company Name
          </label>
          <input
            className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7"
            type="text"
            id="company"
            required={true}
          />
          <label className=" text-[#999999]" htmlFor="street-address">
            Street Address
            <span className="text-[#f1b5b5]">*</span>
          </label>
          <input
            className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7"
            type="text"
            id="street-address"
            required
          />
          <label className=" text-[#999999]" htmlFor="address">
            Apartment, floor, etc. (optional)
          </label>
          <input
            className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7"
            type="text"
            id="address"
          />
          <label className=" text-[#999999]" htmlFor="place">
            Town/City
            <span className="text-[#f1b5b5]">*</span>
          </label>
          <input
            className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7"
            type="text"
            id="place"
            required
          />
          <label className=" text-[#999999]" htmlFor="number">
            Phone Number
            <span className="text-[#f1b5b5]">*</span>
          </label>
          <input
            className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7"
            type="tel"
            id="number"
            pattern="^\+?[1-9]\d{1,14}$"
            required
          />
          <label className=" text-[#999999]" htmlFor="email">
            Email Address
            <span className="text-[#f1b5b5]">*</span>
          </label>
          <input
            className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-5"
            type="email"
            id="email"
            required
          />
          <div className="flex gap-3 items-center">
            <input
              className="accent-main-color w-5 h-5 rounded"
              type="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox" className="select-none">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>
        <section className="w-full lg:w-fit">
          <div className="mr-24">
            <div className="flex flex-col gap-8 mb-8 max-h-[400px] overflow-auto">
              {cartState.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 mr-4 object-contain"
                        src={product.main_image}
                        alt=""
                      />
                      <div>{product.title}</div>
                    </div>
                    <div>${product.currentPrice}</div>
                  </div>
                );
              })}
            </div>

            <Total />
            <div className="flex justify-between my-6">
              <div className="flex flex-col gap-5">
                <div>
                  <input
                    className="mr-2 accent-black"
                    id="bank"
                    type="radio"
                    name="payment-method"
                  />
                  <label htmlFor="bank">Bank</label>
                </div>
                <div>
                  <input
                    className="mr-2 accent-black"
                    id="cash"
                    type="radio"
                    name="payment-method"
                  />
                  <label htmlFor="cash">Cash on delivery</label>
                </div>
              </div>
              <div className="self-start flex">
                <img src="/Bkash.png" alt="" />
                <img src="/Visa.png" alt="" />
                <img src="/Mastercard.png" alt="" />
                <img src="/Nagad.png" alt="" />
              </div>
            </div>
          </div>
          <Coupon />
          <button
            onClick={() => {
              handleSubmit();
            }}
            className="btn px-[4vw] py-3 bg-main-color duration-300 hover:bg-main-hover-bg text-white rounded mt-6"
          >
            Place Order
          </button>
        </section>
      </section>
    </main>
  );
};

export default CheckOut;
