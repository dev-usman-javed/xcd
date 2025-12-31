import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Image Section */}
        <div className="w-full h-80 bg-gradient-to-br from-pink-200 to-purple-300 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          <div className="relative z-10 text-center p-8 w-full h-full flex items-center justify-center">
            <img 
              src="/abc.png" 
              alt="New Year Wish" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-white bg-opacity-20 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-32 h-32 bg-white bg-opacity-20 rounded-full blur-xl"></div>
        </div>

        {/* Text Section */}
        <div className="p-8 md:p-12">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Happy New Year
            </h1>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-xl md:text-2xl font-medium text-gray-800">
                My Dearest Love,
              </p>
              
              <p className="text-lg md:text-xl">
                As we step into this new year together, I want you to know how incredibly blessed I am to have you by my side. 
                Just married, and already you've filled my life with more joy, love, and happiness than I ever imagined possible.
              </p>
              
              <p className="text-lg md:text-xl">
                This new year marks the beginning of our beautiful journey together as husband and wife. 
                I look forward to every moment, every laugh, every adventure, and every quiet evening we'll share.
              </p>
              
              <p className="text-lg md:text-xl font-semibold text-pink-600">
                May this year bring us countless memories, endless love, and dreams come true. 
                Here's to our first full year together as one.
              </p>
              
              <p className="text-xl md:text-2xl font-bold text-purple-600 mt-8">
                Usman ❤️
              </p>
            </div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
      </div>
    </div>
  )
}

export default App

