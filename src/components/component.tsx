'use client'

import React from "react";

const Tab = () => {

    const [act, setAct] = React.useState(1);
    
    const cls1 = 'basis-1/4 text-light-purple bg-white-bg px-4 py-2 rounded-full text-lg cursor-pointer hover:text-white-bg hover:bg-deep-purple';
    const cls2 = 'basis-1/4 text-white-bg bg-deep-purple px-4 py-2 rounded-full text-lg cursor-pointer'

    const handleClick = (nb: number) =>{
        return (event: React.MouseEvent) => {
            setAct(nb);
            event.preventDefault();
          }
    }

    return (

        <div className="w-11/12 mx-auto">
            <div id='btns' className='flex flex-row gap-x-6 mb-6'>
                <div className={ act !== 1 ? cls1 : cls2} onClick={handleClick(1)}>Feature 1</div>
                <div className={ act !== 2 ? cls1 : cls2} onClick={handleClick(2)}>Feature 2</div>
                <div className={ act !== 3 ? cls1 : cls2} onClick={handleClick(3)}>Feature 3</div>
                <div className={ act !== 4 ? cls1 : cls2} onClick={handleClick(4)}>Feature 4</div>
            </div>

            <div className="flex flex-row gap-x-6 items-center justify-between">

                {/* 1 */}
                <div className={ act !== 1 ? "hidden" : "basis-1/2"}>
                    <h1 className="text-3xl leading-10 mb-3 font-semibold text-start">Egyszerű különfizetés</h1>
                    <p className="text-xl text-start">Mondj búcsút a nehézkes és lassú különfizetésnek. Mindegy hányan vagytok, mindenki egyszerűen és gyorsan tudja a telefonján keresztül kifizetni a fogyasztását.</p>
                </div>
                <div className={ act !== 1 ? "hidden" : "basis-1/2"}>
                    <img className="rounded-xl" src="/assets/f1.jpeg" alt="" />
                </div>

                {/* 2 */}
                <div className={ act !== 2 ? "hidden" : "basis-1/2"}>
                    <h1 className="text-3xl leading-10 mb-3 font-semibold text-start">Törzsvendégprogram</h1>
                    <p className="text-xl text-start">Sokat jársz egy helyre, de nem érzed magad igazi törzsvendégnek? Az alkalmazáson keresztül a vendéglátóhely pontosan és egyszerűen tudja jutalmazni a visszajáró vendégeket, így mindenki jól jár.</p>
                </div>
                <div className={ act !== 2 ? "hidden" : "basis-1/2"}>
                    <video
                            autoPlay
                            loop
                            muted
                            className="h-auto rounded-xl mx-auto"
                        >
                            <source
                            src="/assets/f2.mp4"
                            type="video/mp4"
                            />
                            
                    </video>
                </div>

                {/* 3 */}
                <div className={ act !== 3 ? "hidden" : "basis-1/2"}>
                    <h1 className="text-3xl leading-10 mb-3 font-semibold text-start">Zökkenőmentes integráció</h1>
                    <p className="text-xl text-start">Nem kell még egy tablet! A Visszajáró gond nélkül kapcsolódik a vendéglátós szoftverek nagy részéhez, így könnyen a vendéglátó helyek könnyen tudnak csatlakozni hozzánk.</p>
                </div>
                <div className={ act !== 3 ? "hidden" : "basis-1/2"}>
                    <video
                        autoPlay
                        loop
                        muted
                        className="h-auto rounded-xl mx-auto"
                    >
                        <source
                        src="/assets/f3.mp4"
                        type="video/mp4"
                        />
                        
                    </video>
                </div>

                {/* 4 */}
                <div className={ act !== 4 ? "hidden" : "basis-1/2"}>
                    <h1 className="text-3xl leading-10 mb-3 font-semibold text-start">Fogyasztási adatok a te kezedben</h1>
                    <p className="text-xl text-start">Az alkalmazáson keresztül fizetett tételek adatai alapján könnyen átlátható kimutatásokat kaphatsz vendégeid fogyasztási szokásairól, így tájékozottaban tudsz döntést hozni a forgalom növelése érdekében.</p>
                </div>
                <div className={ act !== 4 ? "hidden" : "basis-1/2"}>
                    <img className="rounded-xl" src="/assets/f4.jpeg" alt="" />
                </div>

            </div>
        </div>
    )
}



export default Tab;