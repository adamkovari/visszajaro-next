'use client'

import React from "react";
import SubComponent from "./subComponent";

const Tab = () => {

    const [act, setAct] = React.useState(1);
    
    const cls1 = 'mb-3 md:mb-0 basis-1/4 text-light-purple bg-white-bg px-4 py-2 rounded-full text-lg cursor-pointer hover:text-white-bg hover:bg-deep-purple';
    const cls2 = 'mb-3 md:mb-0 basis-1/4 text-white-bg bg-deep-purple px-4 py-2 rounded-full text-lg cursor-pointer'

    const handleClick = (nb: number) =>{
        return (event: React.MouseEvent) => {
            setAct(nb);
            event.preventDefault();
          }
    }

    function sw(){

    }

    return (

        <div className="w-11/12 mx-auto">
            <div id='btns' className='flex flex-row flex-wrap justify-around md:flex-nowrap gap-x-4 md:gap-x-6 mb-6'>
                <div className={ act !== 1 ? cls1 : cls2} onClick={handleClick(1)}>Feature 1</div>
                <div className={ act !== 2 ? cls1 : cls2} onClick={handleClick(2)}>Feature 2</div>
                <div className={ act !== 3 ? cls1 : cls2} onClick={handleClick(3)}>Feature 3</div>
                <div className={ act !== 4 ? cls1 : cls2} onClick={handleClick(4)}>Feature 4</div>
            </div>

            <div className="flex flex-col md:flex-row gap-x-6 items-center justify-between">

                <SubComponent sel={ act == 1 } head={"Egyszerű különfizetés"} text={"Mondj búcsút a nehézkes és lassú különfizetésnek. Mindegy hányan vagytok, mindenki egyszerűen és gyorsan tudja a telefonján keresztül kifizetni a fogyasztását."} img={"/assets/f1.jpeg"} />

                <SubComponent sel={ act == 2 } head={"Törzsvendégprogram"} text={"Sokat jársz egy helyre, de nem érzed magad igazi törzsvendégnek? Az alkalmazáson keresztül a vendéglátóhely pontosan és egyszerűen tudja jutalmazni a visszajáró vendégeket, így mindenki jól jár."} video={"/assets/f2.mp4"} />

                <SubComponent sel={ act == 3 } head={"Zökkenőmentes integráció"} text={"Nem kell még egy tablet! A Visszajáró gond nélkül kapcsolódik a vendéglátós szoftverek nagy részéhez, így könnyen a vendéglátó helyek könnyen tudnak csatlakozni hozzánk."} video={"/assets/f3.mp4"} />

                <SubComponent sel={ act == 4 } head={"Fogyasztási adatok a te kezedben"} text={"Az alkalmazáson keresztül fizetett tételek adatai alapján könnyen átlátható kimutatásokat kaphatsz vendégeid fogyasztási szokásairól, így tájékozottaban tudsz döntést hozni a forgalom növelése érdekében."} img={"/assets/f4.jpeg"} />

            </div>
        </div>
    )
}



export default Tab;