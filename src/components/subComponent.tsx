const SubComponent = (props: { sel: boolean, head: string, text: string, img?: Array<string>, video?: Array<string>, dir: boolean}) => {

    return (
        
        <>
            <div className={ props.sel && !props.dir ? "mb-10 md:mb-0 md:basis-1/2" : "hidden"}>
                <h1 className="text-3xl leading-10 mb-3 font-semibold text-start">{props.head}</h1>
                <p className="text-xl text-start">{props.text}</p>
            </div>
        <div className={ props.sel ? "mb-10 md:mb-0 md:basis-1/2" : "hidden"}>
                {
                    props.img
                    ? <img className={ props.img ? "rounded-xl" : "hidden"} src={props.img[0]} alt={props.img[1]} />
                    : ''
                }
                {
                 props.video
                ?   <video
                     autoPlay
                     loop
                     muted
                     className={ props.img ? "hidden" : "h-auto rounded-xl mx-auto"}
                     >
                     <source
                         src={props.video[0]} alt={props.video[1]}
                         type="video/mp4"
                     />
                    </video>
                : ''
                }

            </div>
            <div className={ props.sel && props.dir ? "mb-10 md:mb-0 md:basis-1/2" : "hidden"}>
                <h1 className="text-3xl leading-10 mb-3 font-semibold text-start">{props.head}</h1>
                <p className="text-xl text-start">{props.text}</p>
            </div>
        </>
    )
}

export default SubComponent;