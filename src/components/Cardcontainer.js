import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Pagination from "./Pagination";

function Cardcontainer() {
    const [viddata, setviddata] = useState([])
    const [currentpage, setcurrentpage] = useState(1)
    const postperpage = 12
    const getdata = async () => {
        const options = {
          method: "GET",
          url: "https://free-football-soccer-videos.p.rapidapi.com/",
          headers: {
            "X-RapidAPI-Key": "96a598104emsh1d6e277e408e1aep1f7703jsnd4a1022119bf",
            "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
          },
        };
      
        try {
          const response = await axios.request(options);
          console.log(response.data);
          setviddata(response.data);
          console.log(viddata);
        } catch (error) {
          console.error(error);
        }
      };
      const handle=()=>{
        getdata();
      }
      useEffect(() => {
        handle();
      }, [])
      const Lastpostindex = currentpage * postperpage ;
      const Firstpostindex = Lastpostindex - postperpage;
      const Currentposts = viddata.slice(Firstpostindex,Lastpostindex);
  return (
    <>
    <div className="grid gap-y-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid justify-items-center">
      {Currentposts && Currentposts.map((e) => {
        const { competition
, date, thumbnail, title, url } = e;
        return (
            <Card key={url} competition={competition.name} date={date} thumbnail={thumbnail} title={title} url={url}/>
        );
      })}
      </div>
      <div className="grid justify-items-center mb-3.5">
      <Pagination
        totalposts={viddata.length}
        postperpage={postperpage}
        setcurrentpage={setcurrentpage}
        currentpage={currentpage}
      />
      </div>
    </>
  );
}

export default Cardcontainer;
