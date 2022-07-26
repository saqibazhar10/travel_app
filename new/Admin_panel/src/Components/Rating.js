import React from 'react'
import Reviewsdisplay from './Reviewsdisplay'
import Vector2 from '../assets/photo.png';

function Rating() {



    const Reviews = [
        {
            id: 0,
            name: 'Jason Crejza',
            desc: 'Enjoy a Thrilling Shared Airboat Ride, and Explore the Exhibits',
            Rating: 5,
            img: '1',

        },
        {
            id: 1,
            name: 'Emily Watson',
            desc: 'Enjoy a Thrilling Shared Airboat Ride, and Explore the Exhibits',
            Rating: 4,
            img: '5',

        },
        {
            id: 2,
            name: 'Sarah Taylor',
            desc: 'Enjoy a Thrilling Shared Airboat Ride, and Explore the Exhibits',
            Rating: 3,
            img: '3',
        },

    ]
    const len= Reviews.length+122


    return (
        <div>
            <div className='w-[950px] ml-[350px] bg-white rounded-[8px] border-[1px] absolute mt-[10px]'>
                <div className='flex  justify-end'>
                    <div className='mr-auto flex m-5 '>
                        <img src={Vector2} alt='' className='   h-[50px] ' />
                        <div className='ml-2'>
                            <label className='pt-3  font-Poppins font-medium  '> To Cruise</label>
                            <p className='  font-Poppins text-sm text-gray-400  '>Uploaded 1hr ago</p>
                        </div>
                    </div>
                    <a href='/' className='pt-3 font-Poppins font-medium m-5 '>View All</a>
                </div>
                <div className='w-[750px] m-5 font-Poppins'>
                    From Pioneers to Private Mega-Yachts: A Half-Day Tour through
                    126 YearsFrom Pioneers to Private Mega-Yachts: A Half-Day Tou
                    r through 126 YearsFrom Pioneers to Private Mega-Yachts:
                    A Half-Day Tour through 126 YearsFrom Pioneers to Private
                    Mega-Yachts: A Half-Day Tour through 126 Years
                </div>
                <div className='ml-8 mb-5'>
                <label className='text-xl font-Poppins font-medium flex mt-10 '>Seller Reviews ( {len} )</label>
            <hr className='w-[450px]'/>
            {
                Reviews.map((val, id) => {

                    const a = val.img
                    // eslint-disable-next-line react/jsx-pascal-case
                    return <Reviewsdisplay
                        key={id}
                        name={val.name}
                        desc={val.desc}
                        value={val.Rating}
                        img={require('./profile/img' + a + '.png')}

                    />
                })
            }
 <button type="submit" class="w-[450px] h-[60px] mt-10 text-white bg-[#A1D3D9] font-Poppins text-lg rounded-[7px] ">Contact Traveller</button>
 </div>
            </div>
           
        </div>
    )
}

export default Rating