import React, { useEffect, useState } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 flex items-center justify-center p-4 bg-animated relative overflow-hidden" style={{background: 'linear-gradient(-45deg, #fce7f3, #f3e8ff, #e0e7ff, #fce7f3)'}}>
      {/* Confetti */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="confetti" style={{ borderRadius: i % 2 === 0 ? '50%' : '0' }}></div>
      ))}
        <div 
          className={`max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden card-hover transition-all duration-1000 ${
            isVisible ? 'animate-zoom-in' : 'opacity-0'
          }`}
        >
          {/* Image Section */}
          <div className="w-full h-80 bg-gradient-to-br from-pink-200 to-purple-300 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <div className="relative z-10 text-center p-8 w-full h-full flex items-center justify-center">
              <img 
                src="/abc.png" 
                alt="New Year Wish" 
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  isVisible ? 'animate-zoom-in' : 'opacity-0 scale-95'
                }`}
                style={{animationDelay: '0.2s'}}
              />
            </div>
            {/* Decorative elements with animation */}
            <div className={`absolute top-4 right-4 w-20 h-20 bg-white bg-opacity-20 rounded-full blur-xl animate-float ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`} style={{animationDelay: '0.4s'}}></div>
            <div className={`absolute bottom-4 left-4 w-32 h-32 bg-white bg-opacity-20 rounded-full blur-xl animate-float ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`} style={{animationDelay: '0.6s', animationDuration: '4s'}}></div>
          </div>

          {/* Text Section */}
          <div className="p-8 md:p-12">
            <div className="text-center space-y-6">
              <h1 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent ${
                isVisible ? 'animate-fade-in-up delay-100' : ''
              }`}>
                Happy New Year
              </h1>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className={`text-xl md:text-2xl font-medium text-gray-800 ${
                  isVisible ? 'animate-fade-in-up delay-200' : ''
                }`}>
                  The most beautiful wife in the world,
                </p>
                
                <p className={`text-lg md:text-xl ${
                  isVisible ? 'animate-fade-in-up delay-300' : ''
                }`}>
                  As we step into this new year together, I want you to know how incredibly blessed I am to have you by my side. 
                  Just married, and already you've filled my life with more joy, love, and happiness than I ever imagined possible.
                </p>
                
                <p className={`text-lg md:text-xl ${
                  isVisible ? 'animate-fade-in-up delay-400' : ''
                }`}>
                  This new year marks the beginning of our beautiful journey together as husband and wife. 
                  I look forward to every moment, every laugh, every adventure, and every quiet evening we'll share.
                </p>
                
                <p className={`text-lg md:text-xl font-semibold text-pink-600 ${
                  isVisible ? 'animate-fade-in-up delay-500' : ''
                }`}>
                  May this year bring us countless memories, endless love, and dreams come true. 
                  Here's to our first full year together as one.
                </p>
                
                <p className={`text-xl md:text-2xl font-bold text-purple-600 mt-8 ${
                  isVisible ? 'animate-fade-in-up delay-600' : ''
                }`}>
                  Usman <span className="heart-beat">❤️</span>
                </p>
              </div>
            </div>
          </div>

          {/* Decorative bottom border with animation */}
          <div className={`h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 ${
            isVisible ? 'animate-fade-in delay-700' : 'opacity-0'
          }`}></div>
        </div>
      </div>
  )
}

export default App

