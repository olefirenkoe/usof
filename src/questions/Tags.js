function Tags(props) {
    return (
        <>
            {props.tags.map((item) => <div className="tagItem" key={item}>{item}</div>)}
        </>
    )
}

export default Tags;