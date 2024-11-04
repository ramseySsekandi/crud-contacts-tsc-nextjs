import React from 'react'
import { Eye, Pencil, Trash } from 'lucide-react'

const Contact = ({ item }: {item:{fullname:string, tel:string}}) => {
  return (
    <div className="grid grid-cols-12 col-span-12 rounded-md mb-2 hover:border-2 border-red-400">
                <div className="col-span-4 pl-1">
                <p className="leading-7 [&:not(:first-child)]:mt-6">{item.fullname}</p>
                </div>
                <div className="col-span-4">
                <p className="leading-7 [&:not(:first-child)]:mt-6">{item.tel}</p>
                </div>
                <div className="col-span-4 flex gap-4 items-center">
                <Eye className='w-5 h-5'/>
                <Pencil className='w-5 h-5'/>
                <Trash className='w-5 h-5'/>
                </div>
                </div>
            
  )
}

export default Contact