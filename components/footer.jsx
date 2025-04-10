export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© {currentYear} Your Name. All rights reserved.</p>
          </div>

          <div>
            <p className="text-gray-400">
              Made by Afaq with <span className="text-pink-500">❤️</span>
            </p>

          </div>
        </div>
      </div>
    </footer>
  )
}

