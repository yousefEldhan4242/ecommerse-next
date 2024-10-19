import React from "react";

interface Props {
  job: string;
  name: string;
  image: string;
}

const AboutPageCard = ({ job, name, image }: Props) => {
  return (
    <article className="rounded m-auto flex flex-col gap-5">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-[25px] tracking-wider">{name}</h4>
        <p>{job}</p>
        <div className="flex gap-3">
          <img src="/Icon-Twitter.png" className="invert" alt="" />
          <img src="/icon-instagram.png" className="invert" alt="" />
          <img src="/Icon-Linkedin.png" className="invert" alt="" />
        </div>
      </div>
    </article>
  );
};

export default AboutPageCard;
