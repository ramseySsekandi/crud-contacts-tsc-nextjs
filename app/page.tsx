import React from 'react'
import { Button } from '@/components/ui/button'
import Contact from '@/components/Contact';
import { Link, Plus } from 'lucide-react'


const page = () => {
  const contacts = [
    {
        fullname: "John Doe",
        tel: "+256 701 234 567"
    },
    {
        fullname: "Jane Smith",
        tel: "+256 702 345 678"
    },
    {
        fullname: "Alice Johnson",
        tel: "+256 703 456 789"
    },
    {
        fullname: "Bob Brown",
        tel: "+256 704 567 890"
    },
    {
        fullname: "Sarah White",
        tel: "+256 705 678 901"
    },
    {
        fullname: "Michael Green",
        tel: "+256 706 789 012"
    },
    {
        fullname: "Emily Davis",
        tel: "+256 707 890 123"
    },
    {
        fullname: "Daniel Lee",
        tel: "+256 708 901 234"
    },
    {
        fullname: "Laura Wilson",
        tel: "+256 709 012 345"
    },
    {
        fullname: "James Taylor",
        tel: "+256 710 123 456"
    }
];

  return (
    <main className=' min-w-full'>
      <div className='p-8 grid grid-cols-12 min-h-screen'>
        <div className="col-span-3 border-r-2 flex justify-center">
          <Button><span><Plus /></span><span>Create Contact</span></Button>
        </div>
        <div className="col-span-9 px-8 mt-4 ">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Hello ! You've Got ({contacts.length}) Contacts
          </h2>
          <div className="grid grid-cols-12 row-auto px-4 mt-4">
            <div className="col-span-12 grid grid-cols-12 mb-8 ">
              <div className="col-span-4">
                <h4 className="scroll-m-20 text-xl font-medium tracking-tight">
                  Phone
                </h4>
              </div>
              <div className="col-span-4">
                <h4 className="scroll-m-20 text-xl font-medium tracking-tight">
                  Contact
                </h4>
              </div>
              <div className="col-span-4">
                <h4 className="scroll-m-20 text-xl font-medium tracking-tight">
                  Action
                </h4>
              </div>
            </div>
            {/*This is where the ContactsComponent Goes !  */}
            {
              contacts.map((item, index) => (
                <Contact item={item} key={index} />
                ))
            }
          </div>
                
            
        </div>
      </div>
    </main>
  )
}

export default page