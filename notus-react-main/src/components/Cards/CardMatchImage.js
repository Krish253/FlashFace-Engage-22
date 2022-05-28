import axios from "axios";
import React, {useState,useRef} from "react";

// components

export default function CardSettings() {
  const[url,setUrl]=useState(null);
  const[data,setData]=useState([]);
  const[files,setFiles]=useState([]);
  const fileRef= useRef(null);
  const detectCriminal = () => {
    const file= files[0];
    const form_data = new FormData();

    form_data.append("test_image",files[0]);
    if(file){
      try{
        axios.post("http://127.0.0.1:8000/api/match-image/",form_data,{
          headers: {
            'content-type': 'multipart/form_data'
          }
        })
        .then(res=> {
          console.log(res.data);
          setUrl(res.data.url);
          setData(res.data.data);
        })
        .catch(err=>{console.log(err)
      })
    }
     catch(err){
       console.log(err);
      };
    }
  } 
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">TEST DATA</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => detectCriminal()}
            >
              START MATCH
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Test Image Detail
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Image URL
                  </label>
                  <input
                    type="File"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={e => setFiles(e.target.files)}
                    ref={fileRef}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </form>
        </div>
      </div>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">RESULTS</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <img src= {"http://localhost:8000" + url}
          alt="..."
          />
          <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">{data+" "}</h6>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}