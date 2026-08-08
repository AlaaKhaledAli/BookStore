import { Outlet } from 'react-router-dom';

export default function Auth() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
                <div className=" hidden md:block min-h-dvh" style={{ background: "url('images/loginImg.jpg') center/cover" }}>
                </div>
                <div className="flex flex-col pt-5 items-center">
                    <div >
                        <img
                            className="mx-auto mb-5"
                            src="images/Logo.png"
                            alt="Live from space album cover"
                        />
                        <Outlet />

                    </div>
                </div>
            </div>
        </>
    )
}
