import React from 'react'
import strings from '../localization'

function Navbar() {
    return (
        <nav class="flex items-center justify-between flex-wrap p-6">
            <div class="flex items-center flex-shrink-0 text-black mr-6">
                <span class="font-semibold text-xl tracking-tight">{strings.companyName}</span>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black mr-4">Consulting</a>
                    <a href="/products" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black mr-4">Products</a>
                    <a href="/blog" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black mr-4">Blog</a>
                    <a href="/impressum" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black">Impressum</a>
                </div>
                <div>
                    <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-600 border-black hover:border-transparent hover:text-white hover:bg-blue-700 mt-4 lg:mt-0">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;