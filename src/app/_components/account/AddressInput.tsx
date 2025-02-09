"use client"

import { addAddress } from '@/app/rtk/slices/account-slice';
import React from 'react'
import { useDispatch } from 'react-redux';

const AddressInput = ({address}: {address:string}) => {
    const dispatch = useDispatch()
  return (
    <div className="grow">
        <label htmlFor="address">Address</label>
        <input
          placeholder="Kingston, 5236, United State"
          className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7 text-[#7b7b7b]"
          type="text"
          id="address"
          value={address as string}
          onChange={(e) => {
            dispatch(addAddress(e.target.value));
          }}
        />
  </div>
  )
}

export default AddressInput
