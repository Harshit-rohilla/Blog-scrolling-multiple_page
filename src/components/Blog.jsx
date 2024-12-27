function Blog({obj}){
    return(
        <>
        <div className="w-[600px]">
            <h1 className="text-lg font-semibold mb-2">{obj.title}</h1>
            <h1 className="text-sm">By {obj.author} on {obj.category}</h1>
            <h1 className="text-sm mb-2">Posted on {obj.date}</h1>
            <p className="text-base mb-2">{obj.content}</p>
            <div className="flex gap-x-2 underline font-semibold decoration-blue-500">{(obj.tags).map((value)=>(<span className="text-sm text-blue-500">{value}</span>))}</div>
        </div>
        </>
    )
}
export default Blog