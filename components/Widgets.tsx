import { SearchIcon } from '@heroicons/react/solid'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='px-2 mt-2 col-span-2 hidden lg:inline'>
        {/* serach box */}
        <div className='flex items-center space-x-2 bg-slate-100 p-3 rounded-full'>
            <SearchIcon className='h-5 w5 text-slate-400'/>
            <input className='flex-1 bg-transparent outline-none' type="text"  placeholder='Search Twitter'/>
        </div>
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="kodnashion"
            options={{height: 1000}}
        />
    </div>
  )
}

export default Widgets