import Link from "next/link";

const NotFound = () => {
  return (
    <section className="container mb-[150px] mt-[100px]">
      <ul className=" flex gap-2 mb-[150px]">
        <li className="text-[#878787] hover:text-lis-hover-color duration-300">
          <Link href="/">Home</Link>
        </li>
        <span className="text-[#878787]">/</span>
        <li>404 Error</li>
      </ul>
      <div className="flex flex-col items-center">
        <h1 className="text-[8.1vmax]">404 Not Found</h1>
        <p className="text-balance text-center">
          Your visited page not found. You may go home page.
        </p>
        <button className="bg-main-color duration-300 hover:bg-main-hover-bg text-white py-3 px-[4vw] w-fit mt-16 rounded">
          Back to home page
        </button>
      </div>
    </section>
  );
};

export default NotFound;
