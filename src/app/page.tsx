"use client"
import Image from 'next/image'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { menu, menuItems } from '@/constants/menu'


export default function Home() {
  const [currentSelection, setCurrentSelection] = useState(1);
  return (
    <main className='min-h-screen items-center justify-between max-w-[1300px] mx-auto py-32 bg-white px-8'>
      <div className='w-full text-center mb-[60px]'>
        {menu.map((item) => {
            return <a href="#" className={`text-[18px] px-4 py-2 font-semibold inline-block rounded-lg ${currentSelection === item.id ? `bg-[#F8D000] shadow-md` : `bg-white`}`} onClick={() => setCurrentSelection(item.id)}>{item.name}</a>
        })}
      </div>
      <div className='w-full grid lg:grid-cols-3 gap-[32px] md:grid-cols-2'>
        {menuItems.filter((x) => x.category.includes(currentSelection)).map((item) => 
          <div key={item.id} className='col-span-1 w-full h-[400px] bg-white rounded-lg shadow-xl overflow-hidden relative cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl'>
            <img src={item.imageUrl} alt="" className='h-full w-full object-cover'/>
            <div className='m-4 p-4 bg-white shadow-lg rounded-lg absolute bottom-0 w-[calc(100%-32px)] font-semibold flex justify-between items-center'>
                <div>{item.title}</div>
                <ChevronRight size={14}></ChevronRight>
            </div>
          </div> 
            )}
      </div>
    </main>
  )
}
