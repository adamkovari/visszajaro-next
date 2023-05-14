const WorkflowCard = (props: {className: string, dir: boolean, head: string, text:string, icon: string, idx: number}) => {

    return(
        <div className={"basis-full md:basis-5/12 bg-[url('/assets/fogyasztas-kovetes.webp')] h-80 relative " + props.className}>
            <div className='bg-deep-blue rounded-xl text-white p-4 m-4 absolute bottom-0'>
                <p className='uppercase text-lg font-semibold'>{props.idx}. {props.head}</p>
                <p className=''>{props.text}</p>
            </div>
        </div>
        )
}

export default WorkflowCard;

{/*

*/}