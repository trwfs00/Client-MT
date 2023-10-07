import { ShoppingBagIcon, ShoppingCartIcon, UsersIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function sidebar() {
  return (
    <div >

          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
          </button>

          <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
              <div className="h-full px-3 py-4 overflow-y-auto bg-white shadow-md ">
                  
                  <ul className="space-y-2 font-medium">
                      <li>
                          <a href="#" className="flex items-center p-2  rounded-lg hover:bg-gray-100  group">
                              <ShoppingCartIcon className="h-6  w-6 text-gray-500 group-hover:text-gray-900" />
                              <span className="ml-3">purchase order</span>
                          </a>
                      </li>
                      <li>
                          <a href="#" className="flex items-center p-2  rounded-lg  hover:bg-gray-100  group">
                              
                              <UsersIcon className="h-6 w-6 group-hover:text-gray-900 text-gray-500" />
                              <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                          </a>
                      </li>
                      <li>
                          <a href="#" className="flex items-center p-2  rounded-lg  hover:bg-gray-100  group">
                              <ShoppingBagIcon className="h-6 w-6 group-hover:text-gray-900 text-gray-500" />
                              <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
                          </a>
                      </li>
                      
                  </ul>
              </div>
          </aside>

          
          

    </div>
  )
}
