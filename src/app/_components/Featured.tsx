import Images from "./Images";
import SectionTitle from "./SectionTitle";

const Featured = () => {
  return (
    <>
      <section className="pt-[20px]">
        <div className="container flex flex-col gap-8 mb-8">
          <SectionTitle
            sectionName={"Featured"}
            sectionTitle={"New Arrival"}
            showCounter={false}
            showArrows={false}
            showBtn={false}
          />
        </div>

        <Images />
      </section>
    </>
  );
};

export default Featured;
