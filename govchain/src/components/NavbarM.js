import React from 'react'
import { Disclosure } from '@headlessui/react'
import navlogotran from '../images/whitebgtrans.png'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavbarM() {
    return (
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-12 w-auto"
                      src={navlogotran}
                      alt="GovChain"
                    />
                  </div>
                  
                </div>
                
              </div>
            </div>
  
           
          </>
        )}
      </Disclosure>
    )
  }