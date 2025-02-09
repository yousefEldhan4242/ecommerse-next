import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Image from "next/image";
import PropTypes from "prop-types";

const Navigator = () => {
  return (
    <section
      className={`container flex gap-10 text-nowrap md:flex-nowrap flex-wrap  pt-10`}
    >
      <div
        className={`navigator flex w-[22%]`}
      >
        <ul className="flex flex-col justify-between">
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Woman’s Fashion</span>
          </li>
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Men’s Fashion</span>
          </li>
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Electronics</span>
          </li>
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Home & Lifestyle</span>
          </li>
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Medicine</span>
          </li>
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Sports & Outdoor</span>
          </li>
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Baby’s & Toys</span>
          </li>
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Groceries & Pets</span>
          </li>
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Health & Beauty</span>
          </li>
        </ul>
        <ul className="arrows pr-4 md:border-r-[1px] md:border-border-color">
          <li>
            <KeyboardArrowRightOutlinedIcon className="cursor-pointer" />
          </li>
          <li>
            <KeyboardArrowRightOutlinedIcon className="cursor-pointer" />
          </li>
        </ul>
      </div>
      <div className="image flex items-center w-full grow">
        <Image width={100} height={100} className="w-full" src="/homepng.png" alt="" />
      </div>
    </section>
  );
};
Navigator.propTypes = {
  photo: PropTypes.bool,
};

export default Navigator;
