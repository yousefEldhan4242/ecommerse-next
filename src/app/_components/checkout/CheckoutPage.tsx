import Link from "next/link";
import CheckoutContent from "./CheckoutContent";

const CheckOut = () => {

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
      <CheckoutContent/>
    </main>
  );
};

export default CheckOut;
