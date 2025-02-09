import Link from "next/link";
import Image from "next/image";
import Form from "./Form";

const Contact = () => {

  return (
    <main className="container my-[100px]">
      <ul className=" flex gap-2 mb-[150px]">
        <li className="text-[#878787] hover:text-lis-hover-color duration-300">
          <Link href="/">Home</Link>
        </li>
        <span className="text-[#878787]">/</span>
        <li>Contact</li>
      </ul>
      <section className="flex gap-8 flex-wrap lg:flex-nowrap">
        <section className="p-10 shadow-contactShadow rounded w-full lg:w-[31%]">
          <div className="flex gap-4 items-center mb-5">
            <div>
              <Image width={100} height={100} src="/icons-phone.png" alt="" />
            </div>
            <div>Call To Us</div>
          </div>
          <div className="flex flex-col gap-3">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>

          <hr className="my-5 border-border-color" />
          <div className="flex gap-4 items-center mb-5">
            <div>
              <Image width={100} height={100} src="/icons-mail.png" alt="" />
            </div>
            <div>Write To US</div>
          </div>
          <div className="flex flex-col gap-3">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </section>
        <section>
          <Form/>
        </section>
      </section>
    </main>
  );
};

export default Contact;
