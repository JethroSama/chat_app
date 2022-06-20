import React, { useEffect, useState } from 'react'
import { searchUsers } from '../lib/functions/user'
import { User } from '../types/User'

type Props = {}

const SearchBar = (props: Props) => {
    const [searchText, setSearchText] = useState<string>('')
    const [searchResults, setSearchResults] = useState<User[]>([])

    useEffect(() => {
        const fn = async () => {

            if (searchText.length > 0) {
                const results = await searchUsers(searchText)
                return setSearchResults(results)
            }
            setSearchResults([])
        }
        fn()
    }, [searchText])

    // {"uniqueNumber":2,"username":"Jethro","following":[],"email":"kel73896@gmail.com","followers":[],"uid":"GXn7G4cupjP5YwGXWUOkLCxwSPK2","chatGroups":[]}
    return (
        <div className='relative'>
            <input onChange={(e) => {
                setSearchText(e.currentTarget.value)
            }} value={searchText} type='text' placeholder='Search users' className='input bg-primary-dark text-white placeholder:text-white ring-gray-500 w-full' />

            <div className='absolute top-11 left-0 bg-black h-28 w-full'>
                <p className='text-white'>{JSON.stringify(searchResults)}</p>
                Yo
            </div>
        </div>
    )
}

export default SearchBar