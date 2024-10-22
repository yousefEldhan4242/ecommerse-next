const Services = () => {
  return (
    <>
      <section className="container flex justify-evenly items-center text-center pb-[100px] gap-10 flex-wrap">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center">
            <img src="/Services.png" alt="" />
          </div>
          <div>
            <h4 className="text-[22px] font-semibold mb-2">
              FREE AND FAST DELIVERY
            </h4>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center">
            <img src="/Customer-Services.png" alt="" />
          </div>
          <div>
            <h4 className="text-[22px] font-semibold mb-2">
              24/7 CUSTOMER SERVICE
            </h4>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center">
            <img src="/Gutranteed.png" alt="" />
          </div>
          <div>
            <h4 className="text-[22px] font-semibold mb-2">
              MONEY BACK GUARANTEE
            </h4>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
