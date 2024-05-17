import React from 'react'

 const Header = () => {
  return (
    <header className="bg-gray-800 text-indigo-400 p-4"> {/* Cambia text-white a text-purple-500 */}
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">ED MONTERO</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#hero" className="hover:text-purple-300">HOME</a></li> {/* Cambia hover:text-gray-300 a hover:text-purple-300 */}
          <li><a href="#about" className="hover:text-purple-300">ABOUT ME</a></li> {/* Cambia hover:text-gray-300 a hover:text-purple-300 */}
          <li><a href="#portfolio" className="hover:text-purple-300">PORTFOLIO</a></li> {/* Cambia hover:text-gray-300 a hover:text-purple-300 */}
          <li><a href="#contact" className="hover:text-purple-300">CONTACT</a></li> {/* Cambia hover:text-gray-300 a hover:text-purple-300 */}
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header;



