import Blog from "./Blog"

function Blogs({currentPageData}){
    if (!currentPageData?.posts) return null;
    return(
        <>
        <div className="flex-1 py-4 flex flex-col items-center gap-y-6 overflow-y-auto scrollbar-hide">
            {(currentPageData.posts).map((obj)=>(<Blog obj={obj}/>))}
        </div>
        </>
    )
}
export default Blogs