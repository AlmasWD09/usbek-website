import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/navbar/Navbar"
import Footer from "../components/shared/footer/Footer"

const MailLayout = () => {
  return (
    <div>
      <Navbar />

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default MailLayout