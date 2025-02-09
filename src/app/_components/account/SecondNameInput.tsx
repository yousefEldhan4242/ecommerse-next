
"use client"
import { addSecondName } from '@/app/rtk/slices/account-slice';
import React from 'react'
import { useDispatch } from 'react-redux';

const SecondNameInput = ({secondName}:{secondName:string}) => {
    const dispatch = useDispatch()
  return (
    <div className="grow">
        <label htmlFor="last-name">Last Name</label>
        <input
          placeholder="Rimel"
          className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7 text-[#7b7b7b]"
          type="text"
          id="last-name"
          value={secondName as string}
          onChange={(e) => {
            dispatch(addSecondName(e.target.value));
          }}
        />
  </div>
  )
}

export default SecondNameInput
