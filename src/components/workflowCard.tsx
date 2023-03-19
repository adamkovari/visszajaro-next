const WorkflowCard = (props: {className: string, dir: boolean, head: string, text:string, icon: string, idx: number}) => {

    return(
        <div className={"relative rounded-[4rem] flex flex-row bg-[#9DBADA] py-2 px-10 gap-x-4 items-center " + props.className }>
            <div className={!props.dir ? 'absolute w-16 h-8 top-0 left-[-2rem] rounded-[4rem] bg-[#244872]' : 'absolute w-16 h-8 top-0 right-[-2rem] rounded-[4rem] bg-[#244872]'}>
                <p className={!props.dir ? "flex items-center ml-3 text-white font-bold justify-start" : "flex items-center mr-3 text-white font-bold justify-end"}>
                    {props.idx + '.'}
                </p>
            </div>
            <div className={!props.dir ? 'basis-1/3 pr-6 border-r-2 border-[#244872]' : 'hidden'}>
                <img className="w-22" src={props.icon} alt="" />
            </div>
            <div className="basis-2/3 flex flex-col text-[#244872] pl-3">
                <h3 className="mb-2 text-2xl font-bold text-start">
                    {props.head}
                </h3>
                <p className="text-justify">
                    {props.text}
                </p>
            </div>
            <div className={props.dir ? 'basis-1/3 pl-6 border-l-2 border-[#244872]' : 'hidden'}>
                <img className="w-22" src={props.icon} alt="" />
            </div>
        </div>
    )
}

export default WorkflowCard;

{/*

*/}