import React, { useEffect } from 'react'
import { CogIcon, UsersIcon } from '@heroicons/react/solid'
import ChatItem from './ChatItem'
import useUser from '../hooks/useUser'
import { ChatGroup } from '../types/Chats'
import SearchBar from './SearchBar'
import Image from 'next/image'

type Props = {
    openChatGroupId: string | null
    setOpenChatGroupId: (chatGroupId: string) => void
}

const Menu = ({ openChatGroupId, setOpenChatGroupId }: Props) => {
    const currentUser = useUser()
    console.log(currentUser)
    const chatGroupIds: string[] = currentUser?.chatGroups ?? []
    return (
        <div className='w-full flex flex-col justify-between h-full bg-secondary-dark'>
            {/* Header */}
            <div className='w-full flex flex-col justify-center px-2 shadow-md h-16'>
                <SearchBar />
            </div>

            {/* Chat list */}
            <div className='flex-1 p-2'>
                {chatGroupIds.map((chatGroupId) => (
                    <ChatItem key={chatGroupId} chatGroupId={chatGroupId} openChatGroupId={openChatGroupId} setOpenChatGroupId={setOpenChatGroupId} />
                ))}

            </div>

            {/* User bar */}
            <div className='w-full flex h-16 justify-between bg-gray-900 px-2'>
                <div className='flex h-full space-x-2 items-center justify-center w-fit'>
                    <div className='h-10 w-10 rounded-3xl bg-white relative overflow-hidden'>
                        {
                            currentUser?.profilePicture ? (
                                <Image src={currentUser.profilePicture} layout="fill" objectFit='cover' />
                            ) : null
                        }
                    </div>
                    <div className='flex justify-center items-center space-x-2'>
                        <p className='text-white font-semibold text-md'>{currentUser?.username}</p>
                        <p className='text-md font-semibold text-gray-500'>#{currentUser?.uniqueNumber}</p>
                    </div>
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