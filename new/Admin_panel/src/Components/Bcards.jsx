import React from 'react'

function Bcards() {
    const values =
    {
        id: 0,
        req: 4238,
        respone: 1005,
        pending: 914


    }

    return (
        <div className='flex ml-[300px]  mt-10 mb-5 '>
            <div className='w-[600px] h-[340px] bg-white rounded-[8px] border-[1px] border-[#DFE0EB]'>
                <div className='flex pt-4 pl-5 '>
                    <label className='font-Poppins  font-semibold text-[24px] '>Underdiscussion Orders</label>
                    <label className='text-[rgb(55,81,255)] font-Poppins font-medium  ml-[120px] mt-2'>View Details</label>
                </div>
                <div className='text-sm pl-5 font-Poppins'>
                    <label className='text-[#9FA2B4] '>Group: </label>
                    <label> Support</label>
                </div>

                <div className='flex flex-col pt-6 font-Poppins font-medium '>
                    <label className='pl-5 pb-3 flex '>
                        Waiting on Message Request <p className='ml-[200px] text-[#9FA2B4] '>{values.req}</p>
                    </label>
                    <hr />
                    <label className='pl-5 pb-3 flex'>
                        Awating Customers Response
                        <p className='ml-[195px] text-[#9FA2B4] '>{values.respone}</p>
                    </label >
                    <hr />
                    <label className='pl-5 pb-3 flex  '>
                        Pending
                        <p className='ml-[375px] text-[#9FA2B4] '>{values.pending}</p>
                    </label>
           
                </div>


            </div>


            <div className='w-[600px] h-[340px] bg-white rounded-[8px] border-[1px] border-[#DFE0EB]'>
                <div className='flex pt-4 pl-5 '>
                    <label className='font-Poppins  font-semibold text-[24px] '>Admin Todo</label>
                    <label className='text-[rgb(55,81,255)] font-Poppins font-medium  ml-[260px] mt-2'>View all</label>
                </div>
                <div className='text-sm pl-5 font-Poppins'>
                    <label className='text-[#9FA2B4] '>Today </label>

                </div>

                <div className='flex flex-col pt-6 font-Poppins font-medium  '>
                    <div className='flex'>

                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 ml-5 mt-1 rounded-full text-blue-600 " />
                    <label className='pl-5 pb-3  '>
                    Finish Order Update</label>
                    <button type="button" className="ml-[200px] text-white bg-yellow-400  font-medium rounded-lg text-sm px-4 py-1 mr-2 mb-2 ">URGENT</button>
                    </div>

                    <hr />
                    <div className='flex'>

                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 ml-5 mt-1 rounded-full text-blue-600 " />
                    <label className='pl-5 pb-3  '>
                    Create new order example</label>
                    <button type="button" className="ml-[175px] text-white bg-[#29CC97]  font-medium rounded-lg text-sm px-3 py-1 mr-2 mb-2 ">NEW</button>
                    </div>
                    <hr />
                    <div className='flex'>

                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 ml-5 mt-1 rounded-full text-blue-600 " />
                    <label className='pl-5 pb-3 w-[180px]  '>
                    Update order report</label>
                    <button type="button" className="ml-[200px] text-white bg-[#9FA2B4] font-medium rounded-lg text-sm px-4 py-1 mr-2 mb-2 ">DEFAULT</button>
                    </div>
   
                </div>


            </div>


        </div>
    )
}

export default Bcards