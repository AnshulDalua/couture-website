export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 px-6 border-t border-[#ececec] stussy-footer bg-white z-40">
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
