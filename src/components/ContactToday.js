import React from 'react'

function ContactToday() {
    return (
        <div class="bg-gray-50">
            <div
                class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span class="block">Ready?</span>
                    <span class="block text-blue-600">Contact us!</span>
                </h2>
                <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div class="inline-flex rounded-md shadow">
                        <a
                            href="#"
                            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactToday