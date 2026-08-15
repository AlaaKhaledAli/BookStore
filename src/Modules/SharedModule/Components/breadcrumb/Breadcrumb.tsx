import {Link} from "react-router-dom"
type BreadcrumbProps={
    pageName:string
}
export default function Breadcrumb({pageName}:BreadcrumbProps) {
  return (
    <>
    <div className="breadcrumb h-24.25 font-medium text-[20px] items-center text-[#393280] uppercase flex justify-center bg-linear-to-r from-[#FFE5E5] to-[#F5FFFE]">
      <Link className="home" to="/">home</Link>/
      <p className="page-name">{pageName}</p>
    </div>
    </>
  )
}
