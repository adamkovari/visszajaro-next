'use client'

import React from "react";
import SubComponent from "./subComponent";

const Tab = ( props: { headers: Array<string>, features: Array<string>, images: Array<string> }) => {

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
                <div className={ act !== 1 ? cls1 : cls2} onClick={handleClick(1)}># 1</div>
                <div className={ act !== 2 ? cls1 : cls2} onClick={handleClick(2)}># 2</div>
                <div className={ act !== 3 ? cls1 : cls2} onClick={handleClick(3)}># 3</div>
            </div>

            <div className="flex flex-col md:flex-row gap-x-6 items-center justify-between">
                {
                    props.features.map((e,i) => (
                        <div key={i}>
                            {
                                props.images[i].includes('mp4')
                                ? <SubComponent sel={ act === (i+1)} head={props.headers[i]} text={e} video={props.images[i]} />
                                : <SubComponent sel={ act === (i+1)} head={props.headers[i]} text={e} img={props.images[i]} />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}



export default Tab;