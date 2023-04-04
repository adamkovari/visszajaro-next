import Image from 'next/image'

const SubComponent = (props: { sel: boolean, head: string, text: string, img?: Array<string>, video?: Array<string>, dir: boolean}) => {

    return (
        
        <>
            <div className={ props.sel && !props.dir ? "mb-10 md:mb-0 md:basis-1/2" : "hidden"}>
                <h1 className="text-3xl leading-10 mb-3 font-semibold text-start">{props.head}</h1>
                <p className="text-xl text-start">{props.text}</p>
            </div>
        <div className={ props.sel ? "relative mb-10 md:mb-0 md:basis-1/2" : "hidden"}>
                {
                    props.img
                    ? <Image className={ props.img ? "rounded-xl w-full h-full" : "hidden"} src={props.img[0]} width={1600}
                        height={900} alt={props.img[1]} />
                    : ''
                }
                {
                 props.video
                ?   <video
                     autoPlay
                     loop
                     muted
                     className={ props.img ? "hidden" : "h-auto rounded-xl mx-auto"}
                     title={props.video[1]}
                     >
                     <source
                         src={props.video[0]}
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