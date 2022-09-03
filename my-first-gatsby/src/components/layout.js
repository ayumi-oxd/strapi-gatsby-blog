import React from "react"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <div className="container flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900  mx-auto ">
      <div>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
