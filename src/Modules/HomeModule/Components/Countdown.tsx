import { useState,useEffect } from "react";

const COUNTDOWN_TARGET = new Date("2027-12-31T23:59:59");
const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_TARGET.getTime() - new Date().getTime();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60 )) % 60);
    const seconds = Math.floor((totalTimeLeft /1000) % 60);
    return { days, hours, minutes, seconds };
}
export default function Countdown() {
    const [timeLeft,setTimeLeft]=useState(()=>getTimeLeft());
    useEffect(()=>{
        const timer=setInterval(()=>{
            setTimeLeft(getTimeLeft());
        },1000);
        return()=>{
            clearInterval(timer);
        }
    },[])
    return (
        <>
            <div className="counter-wrapper flex flex-wrap gap-10 uppercase mb-17.5">
                <div className="box">
                    <div className="value text-[#ED553B] font-bold md:text-[26px]  text-[20px]">{timeLeft.days}</div>
                    <div className="label  text-[10px] md:text-[16px]">Days</div>
                </div>
                <div className="box">
                    <div className="value text-[#ED553B] font-bold md:text-[26px]  text-[20px]">{timeLeft.hours}</div>
                    <div className="label  text-[10px] md:text-[16px]">Hour</div>
                </div>
                <div className="box">
                    <div className="value text-[#ED553B] font-bold md:text-[26px]  text-[20px]">{timeLeft.minutes}</div>
                    <div className="label  text-[10px] md:text-[16px]">Minute</div>
                </div>
                <div className="box">
                    <div className="value text-[#ED553B] font-bold md:text-[26px]  text-[20px]">{timeLeft.seconds}</div>
                    <div className="label  text-[10px] md:text-[16px]">Second</div>
                </div>
            </div>
        </>
    )
}
