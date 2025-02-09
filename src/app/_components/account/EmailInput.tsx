"use client"
import { addEmail } from '@/app/rtk/slices/account-slice'
import React from 'react'
import { useDispatch } from 'react-redux'

const EmailInput = ({email}:{email:string}) => {
      const dispatch = useDispatch()
  return (
    <div className="grow">
        <label htmlFor="email">Email</label>
        <input
          placeholder="rimel1111@gmail.com"
          className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7 text-[#7b7b7b]"
          type="email"
          id="email"
          value={email as string}
          onChange={(e) => {
            dispatch(addEmail(e.target.value));
          }}
        />
    </div>
  )
}

export default EmailInput
