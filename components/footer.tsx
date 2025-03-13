export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-4 px-6 border-t border-[#ececec] stussy-footer">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h3 className="uppercase font-normal">NEWSLETTER</h3>
        </div>

        <div>
          <p>© {currentYear} COUTUREBYIKIGAI</p>
        </div>
      </div>
    </footer>
  )
}

