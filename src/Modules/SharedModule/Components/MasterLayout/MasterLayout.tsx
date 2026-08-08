import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function MasterLayout() {
  return (
    <>
      <div className="min-h-dvh flex flex-col justify-between">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
