import { useFloatingCursor } from '@/hooks/guard/ContextGuard'

const FloatingCursor = () => {
	const { getCursorStyles, getOuterRingStyles } = useFloatingCursor()

	return (
		<>
			{/* Main cursor dot */}
			<div
				className="fixed top-0 left-0 w-8 h-8 bg-primary rounded-full pointer-events-none z-50"
				style={{
					...getCursorStyles(),
					mixBlendMode: 'difference',
				}}
			/>

			{/* Outer ring */}
			<div
				className="fixed top-0 left-0 w-10 h-10 border-2 border-white rounded-full pointer-events-none z-40"
				style={getOuterRingStyles()}
			/>

			{/* Demo content
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <h1 
            className="text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 cursor-pointer select-none"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            Custom Floating Cursor
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">Smooth Animation</h2>
              <p className="text-gray-300">
                CSS-based smooth animations with cubic-bezier easing.
                Hover over text to see the cursor transform!
              </p>
            </div>
            
            <div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Interactive States</h2>
              <p className="text-gray-300">
                The cursor changes size and behavior based on what element you're hovering over.
                Try different interactions!
              </p>
            </div>

            <div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <h2 className="text-2xl font-semibold mb-4 text-pink-300">Lightweight</h2>
              <p className="text-gray-300">
                Pure React and CSS implementation - no external dependencies required
                for smooth cursor following.
              </p>
            </div>
          </div>
          
          <div className="text-center space-y-6">
            <button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl transform hover:scale-105 active:scale-95"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Hover for Button Effect
            </button>

            <div className="flex justify-center space-x-6">
              <div
                className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full cursor-pointer transform transition-all duration-300 hover:scale-125 hover:rotate-180"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              />
              <div
                className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full cursor-pointer transform transition-all duration-300 hover:scale-125 hover:-rotate-180"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              />
              <div
                className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full cursor-pointer transform transition-all duration-300 hover:scale-125 hover:rotate-360"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              />
            </div>

            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-sm text-gray-400 mb-2">Current cursor state:</p>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-mono">
                {cursorVariant}
              </span>
            </div>
          </div>
        </div> 
      </div>*/}
		</>
	)
}

export default FloatingCursor
