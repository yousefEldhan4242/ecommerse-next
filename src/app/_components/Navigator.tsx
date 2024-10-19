import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import PropTypes from "prop-types";

const Navigator = () => {
  return (
    <section
      className={`container flex gap-12 text-nowrap md:flex-nowrap flex-wrap`}
    >
      <div
        className={`navigator pt-10 md:border-r-[1px] md:border-border-color flex grow gap-3 md:justify-between w-[22%]`}
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
        <ul className="arrows mr-5">
          <li>
            <KeyboardArrowRightOutlinedIcon className="cursor-pointer" />
          </li>
          <li>
            <KeyboardArrowRightOutlinedIcon className="cursor-pointer" />
          </li>
        </ul>
      </div>
      <div className="image pt-10 flex items-center w-full md:w-fit">
        <img className="w-full" src="/homepng.png" alt="" />
      </div>
    </section>
  );
};
Navigator.propTypes = {
  photo: PropTypes.bool,
};

export default Navigator;
