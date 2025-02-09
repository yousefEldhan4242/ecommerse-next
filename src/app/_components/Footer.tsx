import Image from "next/image";
import PropTypes from "prop-types";

const Footer = () => {
  return (
    <footer className="bg-black text-[#fafafa]">
      <div className="container flex justify-between py-[80px] flex-wrap gap-10">
        <div className=" flex flex-col gap-5">
          <h6 className="text-[30px] font-semibold mt-[-10px]">Exclusive</h6>
          <ul className="flex flex-col gap-4 text-[#e5e7eb]">
            <li className="text-[20px] hover:text-footer-lis-hover duration-300">
              Subscribe
            </li>
            <li className="hover:text-footer-lis-hover duration-300">
              Get 10% off your first order
            </li>
            <li className="relative">
              <input
                className="bg-black p-2 border-[#e5e7eb] border-[1px] rounded mt-[-3px]"
                placeholder="Enter your email"
                type="text"
              />
              <Image width={50} height={50}
                className="absolute right-[1px] top-[calc(25%_-_3px)] bg-black pr-[10px] pl-5"
                src={"/icon-send.png"}
                alt=""
              />
            </li>
          </ul>
        </div>

        <div className=" flex flex-col gap-5">
          <h6 className="text-[20px] font-semibold">Support</h6>
          <ul className="flex flex-col gap-4 text-[#e5e7eb]">
            <li className="hover:text-footer-lis-hover duration-300">
              111 Bijoy sarani, Dhaka,
              <br /> DH 1515, Bangladesh.
            </li>
            <li className="hover:text-footer-lis-hover duration-300">
              exclusive@gmail.com
            </li>
            <li className="hover:text-footer-lis-hover duration-300">
              +88015-88888-9999
            </li>
          </ul>
        </div>

        <div className=" flex flex-col gap-5">
          <h6 className="text-[20px] font-semibold">Account</h6>
          <ul className="flex flex-col gap-4 text-[#e5e7eb]">
            <li className="hover:text-footer-lis-hover duration-300">
              My Account
            </li>
            <li className="hover:text-footer-lis-hover duration-300">
              Login / Register
            </li>
            <li className="hover:text-footer-lis-hover duration-300">Cart</li>
            <li className="hover:text-footer-lis-hover duration-300">
              Wishlist
            </li>
            <li className="hover:text-footer-lis-hover duration-300">Shop</li>
          </ul>
        </div>

        <div className=" flex flex-col gap-5">
          <h6 className="text-[20px] font-semibold">Quick Link</h6>
          <ul className="flex flex-col gap-4 text-[#e5e7eb]">
            <li className="hover:text-footer-lis-hover duration-300">
              Privacy Policy
            </li>
            <li className="hover:text-footer-lis-hover duration-300">
              Terms Of Use
            </li>
            <li className="hover:text-footer-lis-hover duration-300">FAQ</li>
            <li className="hover:text-footer-lis-hover duration-300">
              Contact
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-[20px] font-semibold mb-5">Download App</h6>
          <div className="text-[#afafaf]">Save $3 with App New User Only</div>
          <div className="flex gap-1 mb-4 mt-2">
            <Image width={100} height={100} src={"/Qr Code.png"} alt="" />
            <div className="flex flex-col gap-1">
              <Image width={100} height={100} src={"/GooglePlay.png"} alt="" />
              <Image width={100} height={100}src={"/AppStore.png"} alt="" />
            </div>
          </div>
          <div className="flex gap-[13px]">
            <Image width={38} height={25}
              className="hover:bg-[#1877f2] duration-300 rounded p-1"
              src={"/Icon-Facebook.png"}
              alt=""
            />
            <Image width={38} height={25}
              className="rounded hover:bg-[#1DA1F2] duration-300 p-1"
              src={"/Icon-Twitter.png"}
              alt=""
            />
            <div className="z-10 group relative p-1">
              <div className="overlay rounded z-20 absolute w-full h-full top-0 left-0 opacity-0 bg-instagram-gradient duration-300 group-hover:opacity-100"></div>
              <Image width={38} height={25}
                className="z-30 relative"
                src={"/icon-instagram.png"}
                alt=""
              />
            </div>
            <Image width={38} height={25}
              className="rounded hover:bg-[#0077B5] duration-300 p-1"
              src={"/Icon-Linkedin.png"}
              alt=""
            /> 
          </div>
        </div>
      </div>
      <hr className="border-[#141414]" />
      <div className="copyright container text-center text-[#313131] py-3 flex items-center justify-center">
        <span className="text-[24px] mr-1">&copy; </span>
        <p> Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};
Footer.propTypes = {
  isInProductsPage: PropTypes.bool,
};
export default Footer;
