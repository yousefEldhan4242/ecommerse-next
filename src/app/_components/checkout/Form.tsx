import React from 'react'

const Form = ({formRef}:{formRef:React.RefObject<HTMLFormElement>}) => {
  return (
    <form ref={formRef} className=" lg:w-[48%]" action="">
      <label className="text-[#999999]" htmlFor="name">
        First Name
        <span className="text-[#f1b5b5]">*</span>
      </label>
      <input
        className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7"
        type="text"
        id="name"
        required
      />
      <label className=" text-[#999999]" htmlFor="company">
        Company Name
      </label>
      <input
        className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7"
        type="text"
        id="company"
        required={true}
      />
      <label className=" text-[#999999]" htmlFor="street-address">
        Street Address
        <span className="text-[#f1b5b5]">*</span>
      </label>
      <input
        className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7"
        type="text"
        id="street-address"
        required
      />
      <label className=" text-[#999999]" htmlFor="address">
        Apartment, floor, etc. (optional)
      </label>
      <input
        className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7"
        type="text"
        id="address"
      />
      <label className=" text-[#999999]" htmlFor="place">
        Town/City
        <span className="text-[#f1b5b5]">*</span>
      </label>
      <input
        className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7"
        type="text"
        id="place"
        required
      />
      <label className=" text-[#999999]" htmlFor="number">
        Phone Number
        <span className="text-[#f1b5b5]">*</span>
      </label>
      <input
        className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7"
        type="tel"
        id="number"
        pattern="^\+?[1-9]\d{1,14}$"
        required
      />
      <label className=" text-[#999999]" htmlFor="email">
        Email Address
        <span className="text-[#f1b5b5]">*</span>
      </label>
      <input
        className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-5"
        type="email"
        id="email"
        required
      />
      <div className="flex gap-3 items-center">
        <input
          className="accent-main-color w-5 h-5 rounded"
          type="checkbox"
          id="checkbox"
        />
        <label htmlFor="checkbox" className="select-none">
          Save this information for faster check-out next time
        </label>
      </div>
    </form>
  )
}

export default Form
