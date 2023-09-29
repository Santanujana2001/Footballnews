import React from "react";

function Pagination({totalposts,postperpage,setcurrentpage,currentpage}) {

    let pages = []
    for (let i = 1; i < Math.ceil(totalposts/postperpage); i++) {
        pages.push(i)
    }


  return (
    <div className="join">
    {pages.map((page,index)=>{
        return (
            <button className={`join-item btn btn-outline lg:m-5 btn-warning ${page===currentpage?'btn-active':''}`} key={index} onClick={()=>setcurrentpage(page)}>{page}</button>
        );
    })}
    </div>
  );
}

export default Pagination;
