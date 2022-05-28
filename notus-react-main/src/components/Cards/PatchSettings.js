import React, {useState} from "react";
import axios from "axios";

// components

export default function CardSettings() {
  const[criminal_name,set_criminal_name]=useState("")
  const[criminal_age,set_criminal_age]=useState("")
  const[status,set_status]=useState("")
  const[crime_committed,set_crime_committed]=useState("")
  const[id,set_id]=useState("")

  //const form_data=new FormData();
  //form_data.append("id",id);
  const handleDelete = (id) => {
    try {
      axios.delete("http://127.0.0.1:8000/api/criminal-details/"+id,).then(res=>{
        alert("Deleted!!");
      })
      .catch(err=>console.log(err))
    }catch(err){console.log(err);};
  }

  const handleUpdate = (id) => {
    const form_data=new FormData();
    if(criminal_name)
      form_data.append("criminal_name",criminal_name);
    if(criminal_age)
      form_data.append("criminal_age",criminal_age);
    if(status)
      form_data.append("status",status);
    if(crime_committed)
      form_data.append("crime_committed",crime_committed);
    try {
      axios.patch("http://127.0.0.1:8000/api/criminal-details/"+id+"/",form_data,{
        headers: {
          'content-type':'multipart/form_data'
        }
      }).then(res=>{
        alert("Details Updated");
      })
      .catch(err=>console.log(err))
    }catch(err){console.log(err);};
  }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">CRIMINAL DATA</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={()=>handleUpdate(id)}
            >
              PATCH
            </button>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={()=>handleDelete(id)}
            >
              DELETE
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Criminal Details
            </h6>
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    id-number
                  </label>
                  <input
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={e => set_id(e.target.value)}
                  />
                </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Criminal name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={e => set_criminal_name(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Criminal age
                  </label>
                  <input
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={e => set_criminal_age(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              OTHER DETAILS
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Current Status
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={e => set_status(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Crime committed
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={e => set_crime_committed(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </form>
        </div>
      </div>
    </>
  );
}