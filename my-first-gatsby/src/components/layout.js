import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="container flex min-h-screen flex-col justify-between text-neutral-900 mx-auto">
      <div>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
