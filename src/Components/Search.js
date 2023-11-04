import React from 'react'
import Subscribe from './Subscribe'

const Search = () => {
  return (
    <div className='border-2 h-14 items-center border-transparent w-96 justify-between flex p-2 space-x-2 hover:border-[#15b4eb] hover:border-2 rounded-3xl bg-[#1e293b] focus-within:border-[#15b4eb]'>
      <input className='w-9/12 bg-transparent outline-none text-white pl-2 group/text '></input>
        <Subscribe/>
    </div>
  )
}

export default Search
