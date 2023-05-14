//const WorkflowCard = (props: {className: string, dir: boolean, head: string, text:string, icon: string, idx: number}) => {
//
//    return(
//        <div className={"relative rounded-[4rem] flex flex-wrap lg:flex-nowrap md:flex-row justify-center bg-[#AD8BB6] py-6 md:py-6 px-10 md:px-10 gap-x-4 items-center " + props.className }>
//            <div className={!props.dir ? 'absolute w-16 h-8 top-[-1rem] md:top-0 md:left-[-2rem] left-0 rounded-[4rem] bg-[#411A4B]' : 'absolute w-16 h-8 top-[-1rem] md:top-0 right-0 md:right-[-2rem] rounded-[4rem] bg-[#411A4B]'}>
//                <p className={!props.dir ? "flex items-center ml-3 text-white font-bold justify-start" : "flex items-center mr-3 text-white font-bold justify-end"}>
//                    {props.idx + '.'}
//                </p>
//            </div>
//            <div className={!props.dir ? 'basis-full lg:basis-1/3 md:pr-6 lg:border-r-2 lg:border-[#411A4B] lg:block hidden' : 'hidden'}>
//                <img className="w-1/2 my-5 mx-auto lg:my-0  lg:w-full" src={props.icon} alt="" />
//            </div>
//            <div className="basis-full lg:basis-2/3 flex flex-col text-[#411A4B] pl-3">
//                <h3 className="mb-2 text-2xl font-bold text-start">
//                    {props.head}
//                </h3>
//                <p className="text-justify">
//                    {props.text}
//                </p>
//            </div>
//            <div className={props.dir ? 'basis-full lg:basis-1/3 md:pl-6 lg:border-l-2 lg:border-[#411A4B]' : 'basis-full lg:hidden'}>
//                <img className="w-1/2 my-5 mx-auto lg:my-0 lg:w-full" src={props.icon} alt="" />
//            </div>
//        </div>
//    )
//}
//
//export default WorkflowCard;
//
//{/*
//
//*/}