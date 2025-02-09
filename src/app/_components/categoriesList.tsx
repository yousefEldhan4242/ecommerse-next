import Image from "next/image";


const categories = [
  {
    title: "10.5k",
    name: "Sallers active our site",
    icon: (
      <Image width={100} height={100}
        className="group-hover:filter-white duration-300"
        src="/Services (1).png"
        alt="services"
      />
    ),
  },
  {
    title: "33k",
    name: "Mopnthly Produduct Sale",
    icon: (
      <Image width={100} height={100}
        className="invert brightness-100 group-hover:invert-0 duration-300"
        src="/money1).png"
        alt="money"
      />
    ),
  },
  {
    title: "45.5k",
    name: "Customer active in our site",
    icon: (
      <Image width={100} height={100}
        className="group-hover:filter-white duration-300"
        src="/Salespng.png"
        alt="sales"
      />
    ),
  },
  {
    title: "25k",
    name: "Anual gross sale in our site",
    icon: (
      <Image width={100} height={100} src="/Money.png" className="group-hover:filter-white duration-300"
      alt="anual gross" />
    ),
  },
];

export default categories;
