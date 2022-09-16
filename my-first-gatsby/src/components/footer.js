import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 py-8 text-neutral-700">
      <div>
        <p>Copyright {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer
