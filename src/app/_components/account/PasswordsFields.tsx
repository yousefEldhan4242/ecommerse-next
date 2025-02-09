import { addConfirmNewPassword, addCurrentPassword, addNewPassword } from '@/app/rtk/slices/account-slice';
import React from 'react'
import { useDispatch } from 'react-redux';

const PasswordsFields = ({currentPassword,newPassword,confirmNewPassword}:
  {currentPassword:string,newPassword:string,confirmNewPassword:string}) => {


    const  dispatch = useDispatch()
  return (

    <div>
        <label htmlFor="password">Password Changes</label>
        <input
          type="password"
          placeholder="Current Passwod"
          className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-3 text-[#7b7b7b]"
          id="password"
          value={currentPassword}
          onChange={(e) => {
            dispatch(addCurrentPassword(e.target.value));
          }}
        />
        <input
          type="password"
          placeholder="New Passwod"
          className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-3 text-[#7b7b7b]"
          value={newPassword}
          onChange={(e) => {
            dispatch(addNewPassword(e.target.value));
          }}
        />
        <input
          type="password"
          placeholder="Confirm New Passwod"
          className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-3 text-[#7b7b7b]"
          value={confirmNewPassword}
          onChange={(e) => {
            dispatch(addConfirmNewPassword(e.target.value));
          }}
        />
  </div>
  )
}

export default PasswordsFields
