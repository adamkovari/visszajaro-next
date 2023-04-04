'use client'

import React from "react";
import SubComponent from "./subComponent";

const Tab = ( props: { headers: Array<Array<string>>, features: Array<string>, images: Array<Array<string>>, dir: boolean }) => {

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
                {
                 props.headers.map((e,i) => (
                     <div className={ act !== i+1 ? cls1 : cls2} onClick={handleClick(i+1)} key={i}>{e[1]}</div>
                     ))
                }
            </div>

            {
                props.features.map((e,i) => (
                    <div key={i} className={'flex flex-col md:flex-row gap-x-6 items-center justify-center'}>
                        {
                            props.images[i][0].includes('mp4')
                            ? <SubComponent sel={ act === (i+1)} head={props.headers[i][0]} text={e} video={props.images[i]} dir={props.dir} />
                            : <SubComponent sel={ act === (i+1)} head={props.headers[i][0]} text={e} img={props.images[i]} dir={props.dir} />
                        }
                    </div>
                ))
            }
        </div>
    )
}



export default Tab;