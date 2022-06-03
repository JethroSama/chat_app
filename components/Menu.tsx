import React from 'react'
import { CogIcon, UsersIcon } from '@heroicons/react/solid'
type Props = {}

const Menu = (props: Props) => {
    return (
        <div className='w-full flex flex-col justify-between h-full bg-secondary-dark'>
            {/* Header */}
            <div className='w-full flex flex-col justify-center px-2 shadow-md h-16'>
                <input type='text' placeholder='Test' className='input bg-primary-dark text-white placeholder:text-white ring-gray-500' />
            </div>

            {/* Chat list */}
            <div className='flex-1'>Chat list</div>

            {/* User bar */}
            <div className='w-full flex h-16 justify-between bg-gray-900 px-2'>
                <div className='flex h-full space-x-2 items-center justify-center w-fit'>
                    <div className='h-10 w-10 rounded-3xl bg-white'></div>
                    <p className='text-white font-semibold text-md'>Username</p>
                </div>
                <div className='flex items-center space-x-3'>
                    <UsersIcon className='h-10 w-10 text-gray-50 cursor-pointer' />
                    <CogIcon className='h-10 w-10 text-gray-50 cursor-pointer' />
                </div>

            </div>
        </div>
    )
}

export default Menu