import {useState} from "react";
import {className} from "postcss-selector-parser";

const WorkflowCard = (props: {className: string, dir: boolean, head: string, text:string, icon: string, idx: number, alt: string}) => {

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    const [active, setActive] = useState(false)

    return(
        <div className={"basis-full md:basis-5/12 relative " + props.className} onTransitionEnd={() => setActive(true)}>
            <img className={classNames( active ? 'blur-[1px]' : '', 'rounded-xl transition-[blur] duration-700 ease-in' )} src={props.icon} alt={props.alt} />
            <div className={classNames(
                active ? 'opacity-100' : 'opacity-0',
                'bg-blue/60 rounded-xl w-full h-full text-white p-4 absolute top-0 flex flex-col justify-center transition-opacity duration-700 ease-in'
            )}>
                <p className='uppercase text-lg font-semibold'>#{props.idx}. {props.head}</p>
                <p className='font-medium'>{props.text}</p>
            </div>
        </div>
        )
}

export default WorkflowCard;

{/*

*/}