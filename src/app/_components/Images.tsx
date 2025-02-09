import Image from "next/image";

const Images = () => {
  return (
    <section className="container images flex gap-5 mb-[100px] flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/2">
        <Image width={100} height={100} className="h-full w-full" src="/Playstation.png" alt="" />
      </div>
      <div className="flex flex-col gap-5 md:gap-[30px] w-full md:w-1/2">
        <Image width={100} height={100}
          className="w-full h-[284px]"
          src="/40-Extra-10-Site-Promo-Drawer.webp"
          alt=""
        />
        <div className="flex gap-5 h-[calc(100%_-_314px)] flex-wrap xs:flex-nowrap">
          <div className="grow">
            <Image width={100} height={100} className="w-full h-full " src="/Speakers.png" alt="" />
          </div>
          <div className="grow">
            <Image width={100} height={100} className="w-full h-full " src="/perfume.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Images;
