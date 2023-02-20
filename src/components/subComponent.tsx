const SubComponent = (props: { sel: boolean, head: string, text: string, img?: string, video?: string}) => {

    return (
        
        <>
            <div className={ !props.sel ? "hidden" : "mb-10 md:mb-0 md:basis-1/2"}>
                <h1 className="text-3xl leading-10 mb-3 font-semibold text-start">{props.head}</h1>
                <p className="text-xl text-start">{props.text}</p>
            </div>
            <div className={ !props.sel ? "hidden" : "md:basis-1/2"}>
                <img className={ props.img ? "rounded-xl" : "hidden"} src={props.img} alt="" />
                <video
                            autoPlay
                            loop
                            muted
                            className={ props.img ? "hidden" : "h-auto rounded-xl mx-auto"}
                        >
                            <source
                            src={props.video}
                            type="video/mp4"
                            />
                            
                    </video>
            </div>
        </>
    )
}

export default SubComponent;