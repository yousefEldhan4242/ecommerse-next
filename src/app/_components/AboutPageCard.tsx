import React from "react";
import Image from "next/image";

interface Props {
  job: string;
  name: string;
  image: string;
}

const AboutPageCard = ({ job, name, image }: Props) => {
  return (
    <article className="rounded m-auto flex flex-col gap-5">
      <div>
        <Image width={100} height={100}src={image} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-[25px] tracking-wider">{name}</h4>
        <p>{job}</p>
        <div className="flex gap-3">
          <Image width={100} height={100}src="/Icon-Twitter.png" className="invert" alt="" />
          <Image width={100} height={100}src="/icon-instagram.png" className="invert" alt="" />
          <Image width={100} height={100}src="/Icon-Linkedin.png" className="invert" alt="" />
        </div>
      </div>
    </article>
  );
};

export default AboutPageCard;
