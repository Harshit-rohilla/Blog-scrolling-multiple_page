import { useState, useEffect } from "react"
import Blogs from "./components/Blogs"
import Loader from "./components/Loader"

function App(){
    const[currentPage,changeCurrentPage]=useState(1)
    const[totalPage,changeTotalPage]=useState(null)
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(false)
    
    async function apiCall(){
        setLoading(true)
        try{
            let res=await fetch(`https://codehelp-apis.vercel.app/api/get-blogs?page=${currentPage}`)
            let res2=await res.json()
            setData(res2)
            changeTotalPage(data.totalPages)
            setLoading(false)   
        }
        catch(error){
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(()=>{
        apiCall()
    },[currentPage])

    return (
        <>
        <div className="wrapper flex flex-col h-screen w-full">
            <div className="header w-full border-b shadow-[0_2px_10px] py-2 text-center font-bold text-2xl">MY BLOGS</div>
            {loading?(<Loader/>):(<Blogs currentPageData={data}/>)}
            <div className="footer w-full py-2 flex justify-evenly border border-t-gray-300">
                <div>
                    <button onClick={()=>{changeCurrentPage((prev)=>{if(prev>1){return prev-1}else{return prev}})}} className="py-1 px-3 border border-black mr-2">Previous</button>
                    <button onClick={()=>{changeCurrentPage((prev)=>{if(prev<6){return prev+1}else{return prev}})}} className="py-1 px-3 border border-black ml-2">Next</button>
                </div>
                <div>Page {currentPage} of {totalPage}</div>
            </div>
        </div>
        </>
    )
}
export default App