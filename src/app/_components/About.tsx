import Link from "next/link";
// import categories from "./categoriesList";
import AboutPageCard from "./AboutPageCard";
import Image from "next/image";
// import Services from "./Services";
// import ShowCategories from "./ShowCategories";

const About = () => {
  return (
    <>
      <section className="container">
        <ul className=" flex gap-2 mt-[100px]">
          <li className="text-[#878787] hover:text-lis-hover-color duration-300">
            <Link href="/">Home</Link>
          </li>
          <span className="text-[#878787]">/</span>
          <li>About</li>
        </ul>
      </section>
      <section className="flex container pb-[100px] h-[800px] items-center gap-10">
        <div className="flex flex-col gap-10 lg:w-[560px] lg:mr-[44vw] text-center lg:text-start text-balance">
          <h2 className="font-semibold text-[45px] tracking-[6px] pl-3">
            Our Story
          </h2>
          <p className="text-[19px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="text-[19px]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <Image width={100} height={100}
          className="absolute h-[34vw] max-h-[600px] right-0 hidden lg:block"
          src="/pexels-mart-production-8801197.jpg"
          alt=""
        />
        <div className=" hidden lg:block"></div>
      </section>
      <section className="container flex flex-col gap-8 pb-[80px]">
        {/* <ShowCategories categories={categories} /> */}
        <section className="grid grid-cols-[repeat(auto-fill,minmax(265px,1fr))] gap-7 mt-[120px]">
          <AboutPageCard
            job="Founder & Chairman"
            name="Tom Cruise"
            image="/TomCruise.png"
          />
          <AboutPageCard
            job="Managing Director"
            name="Emma Watson"
            image="/WillSmithpng.png"
          />
          <AboutPageCard
            job="Product Designer"
            name="Will Smith"
            image="/TomCruise.png"
          />
        </section>
        <div className="m-auto mt-2">
          <Image width={100} height={100} src="/Frame 883.png" alt="" />
        </div>
        <section className="mt-[150px]">{/* <Services /> */}</section>
      </section>
    </>
  );
};

export default About;
