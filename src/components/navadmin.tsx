import React from 'react'
import MyLogo from '@/images/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import MyBest from '@/images/best.svg'
import { InformationCircleIcon, MagnifyingGlassIcon, PencilSquareIcon, PlusCircleIcon, ShoppingBagIcon, ShoppingCartIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline';
import { input } from '@material-tailwind/react';

export default function navadmin() {
  return (
    <>
      <div className="navbar bg-base-100">
          <div className="flex lg:flex-1 ">
              <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Mentor Diamond</span>
                  <Image className="h-10 w-auto" src={MyLogo} alt="Logo" />
              </Link>
          </div>
          <div className="flex-none  gap-5">

              <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                          <Image className="h-30 w-auto" src={MyBest} alt="Logo" />
                      </div>
                  </label>
                  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                      <li>
                          <a className="justify-between">
                              Profile
                              <span className="badge">New</span>
                          </a>
                      </li>
                      <li><a>Settings</a></li>
                      <li><a>Logout</a></li>
                  </ul>
              </div>
          </div>
      </div>
      </>
  )
}
