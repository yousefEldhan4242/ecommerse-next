"use client"
import React from 'react'
import { useRef } from "react";

import CheckProducts from './CheckProducts';
import Form from './Form';



const CheckoutContent = () => {


    const formRef = useRef<HTMLFormElement>(null);
    

  return (
    <section className="flex mb-[100px] justify-center lg:justify-between flex-wrap gap-10">
        <Form formRef={formRef}/>
    <CheckProducts formRef={formRef}/>
  </section>
  )
}

export default CheckoutContent
