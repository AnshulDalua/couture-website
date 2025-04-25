import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 px-6 border-t border-[#ececec] stussy-footer bg-white z-40">
      <div className="flex flex-row justify-between items-center">
        <div>
          <Link 
            href="https://instagram.com/couturebyikigai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity group"
          >
            <div className="instagram-gradient-icon"></div>
            <span className="uppercase font-normal relative">
              <span className="instagram-gradient-text">INSTAGRAM</span>
              <span className="absolute inset-0 uppercase font-normal opacity-0 group-hover:opacity-100 transition-opacity">INSTAGRAM</span>
            </span>
          </Link>
        </div>

        <div>
          <p>&copy; {currentYear} COUTUREBYIKIGAI</p>
        </div>
      </div>
    </footer>
  )
}
