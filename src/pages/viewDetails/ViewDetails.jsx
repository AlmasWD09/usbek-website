import { useEffect, useState } from "react";
import Categories from "../../components/home/Categories"

const ViewDetails = () => {
    const [allData, setAllData] = useState([])

    useEffect(() => {
        fetch("/popularData.json")
            .then((response) => response.json())
            .then((data) => setAllData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);


    return (
        <div>
            <Categories />

            <div className="max-w-[1167px] mx-auto px-4 pt-[24px] pb-[30px] lg:pb-[64px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[23px]">
                    <div className="col-span-2  ">
                        <div className="bg-[#E9ECEF] h-[300px] lg:h-[476px] rounded-xl">
                        </div>

                        <div className="py-8">
                            <h1 className="py-[15px] font-Poppins md:text-[20px] lg:text-[24px] font-medium text-[#333333]">Gaston's Bistro Catering - Chicago & Suburbs</h1>
                            <div className="flex flex-wrap justify-between gap-3 lg:gap-0">
                                <div className="flex items-center gap-[8px]">
                                    <img src="/mostPopular/photo1.png" alt="" className="h-[40px] w-[40px] rounded-full" />
                                    <h1 className="md:text-[20px] lg:text-[20px] font-Poppins font-medium text-[#000000]">Karla Blair</h1>
                                </div>

                                <div className="flex flex-wrap md:flex-row items-center gap-2 md:gap-1 lg:gap-[8px]">

                                    <h1 className="bg-[#E9ECEF] px-4 py-2 md:py-[6px] lg:py-[8px] rounded-full flex items-center gap-1 cursor-pointer">
                                        <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_63_2705" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_63_2705)">
                                                <path d="M12.001 16.0002C13.251 16.0002 14.3135 15.5627 15.1885 14.6877C16.0635 13.8127 16.501 12.7502 16.501 11.5002C16.501 10.2502 16.0635 9.18774 15.1885 8.31274C14.3135 7.43774 13.251 7.00024 12.001 7.00024C10.751 7.00024 9.68848 7.43774 8.81348 8.31274C7.93848 9.18774 7.50098 10.2502 7.50098 11.5002C7.50098 12.7502 7.93848 13.8127 8.81348 14.6877C9.68848 15.5627 10.751 16.0002 12.001 16.0002ZM12.001 14.2002C11.251 14.2002 10.6135 13.9377 10.0885 13.4127C9.56348 12.8877 9.30098 12.2502 9.30098 11.5002C9.30098 10.7502 9.56348 10.1127 10.0885 9.58774C10.6135 9.06274 11.251 8.80024 12.001 8.80024C12.751 8.80024 13.3885 9.06274 13.9135 9.58774C14.4385 10.1127 14.701 10.7502 14.701 11.5002C14.701 12.2502 14.4385 12.8877 13.9135 13.4127C13.3885 13.9377 12.751 14.2002 12.001 14.2002ZM12.001 19.0002C9.56764 19.0002 7.35098 18.3211 5.35098 16.9627C3.35098 15.6044 1.90098 13.7836 1.00098 11.5002C1.90098 9.21691 3.35098 7.39608 5.35098 6.03774C7.35098 4.67941 9.56764 4.00024 12.001 4.00024C14.4343 4.00024 16.651 4.67941 18.651 6.03774C20.651 7.39608 22.101 9.21691 23.001 11.5002C22.101 13.7836 20.651 15.6044 18.651 16.9627C16.651 18.3211 14.4343 19.0002 12.001 19.0002ZM12.001 17.0002C13.8843 17.0002 15.6135 16.5044 17.1885 15.5127C18.7635 14.5211 19.9676 13.1836 20.801 11.5002C19.9676 9.81691 18.7635 8.47941 17.1885 7.48774C15.6135 6.49608 13.8843 6.00024 12.001 6.00024C10.1176 6.00024 8.38848 6.49608 6.81348 7.48774C5.23848 8.47941 4.03431 9.81691 3.20098 11.5002C4.03431 13.1836 5.23848 14.5211 6.81348 15.5127C8.38848 16.5044 10.1176 17.0002 12.001 17.0002Z" fill="#999999" />
                                            </g>
                                        </svg>
                                        </span>
                                        <span>11.2k</span>
                                    </h1>
                                    <h1 className="bg-[#E9ECEF] px-4 py-2 md:py-[6px] lg:py-[8px] rounded-full flex items-center gap-1 cursor-pointer">
                                        <span>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.2381 20H4.7619V7L11.4286 0L12.619 1.25C12.7302 1.36667 12.8214 1.525 12.8929 1.725C12.9643 1.925 13 2.11667 13 2.3V2.65L11.9524 7H18.0952C18.6032 7 19.0476 7.2 19.4286 7.6C19.8095 8 20 8.46667 20 9V11C20 11.1167 19.9841 11.2417 19.9524 11.375C19.9206 11.5083 19.8889 11.6333 19.8571 11.75L17 18.8C16.8571 19.1333 16.619 19.4167 16.2857 19.65C15.9524 19.8833 15.6032 20 15.2381 20ZM6.66667 18H15.2381L18.0952 11V9H9.52381L10.8095 3.5L6.66667 7.85V18ZM4.7619 7V9H1.90476V18H4.7619V20H0V7H4.7619Z" fill="#666666" />
                                            </svg>
                                        </span>
                                        <span>1.2k</span>
                                    </h1>


                                    <h1 className="bg-[#E9ECEF] px-4 py-2 md:py-[6px] lg:py-[8px] rounded-full flex items-center gap-1 cursor-pointer">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_63_2784" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                    <rect width="24" height="24" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_63_2784)">
                                                    <path d="M6 3H17V16L10 23L8.75 21.75C8.63333 21.6333 8.5375 21.475 8.4625 21.275C8.3875 21.075 8.35 20.8833 8.35 20.7V20.35L9.45 16H3C2.46667 16 2 15.8 1.6 15.4C1.2 15 1 14.5333 1 14V12C1 11.8833 1.01667 11.7583 1.05 11.625C1.08333 11.4917 1.11667 11.3667 1.15 11.25L4.15 4.2C4.3 3.86667 4.55 3.58333 4.9 3.35C5.25 3.11667 5.61667 3 6 3ZM15 5H6L3 12V14H12L10.65 19.5L15 15.15V5ZM17 16V14H20V5H17V3H22V16H17Z" fill="#666666" />
                                                </g>
                                            </svg>
                                        </span>
                                        <span>1.2k</span>
                                    </h1>


                                    <h1 className="bg-[#E9ECEF] px-4 py-2 md:py-[6px] lg:py-[8px] rounded-full flex items-center gap-1 cursor-pointer">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_63_2796" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                    <rect width="24" height="24" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_63_2796)">
                                                    <path d="M2 22V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H6L2 22ZM5.15 16H20V4H4V17.125L5.15 16Z" fill="#666666" />
                                                </g>
                                            </svg>

                                        </span>
                                        <span>1.2k</span>
                                    </h1>


                                    <h1 className="bg-[#E9ECEF] px-4 py-2 md:py-[6px] lg:py-[8px] rounded-full flex items-center gap-1 cursor-pointer">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_63_2817" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                    <rect width="24" height="24" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_63_2817)">
                                                    <path d="M8.27441 23.6784L0.274414 9.82202L20.7289 7.25022L8.27441 23.6784ZM8.50646 20.0804L16.2689 9.82522L3.50646 11.4201L5.25646 14.4512L11.2026 12.7502L6.75646 17.0493L8.50646 20.0804Z" fill="#666666" />
                                                </g>
                                            </svg>
                                        </span>
                                        <span>Share</span>
                                    </h1>
                                </div>
                            </div>
                            <div className="bg-[#F8F9FA] px-4 py-6 rounded my-5">
                                <p className="font-Roboto text-[16px] text-[#666666] leading-[25px]">Gaston's French/American Bistro offers on-site and delivery catering for your special events. Our catering menu includes party trays of pastas, salads, prime rib, baked chicken, salmon <span className="text-secondery font-Roboto text-[14px] cursor-pointer">Read more...</span></p>
                            </div>


                            {/* text area component */}
                            <div>
                                <div className="flex items-center gap-4">
                                    <img
                                        src="/mostPopular/photo1.png"
                                        alt=""
                                        className="h-[40px] w-[40px] rounded-full"
                                    />
                                    <div className="w-full border-b flex items-center">
                                        <textarea
                                            className="w-full h-[40px] resize-none outline-none p-0 pt-2 text-base leading-normal"
                                            placeholder="I’d love to hear your thoughts on this"
                                        />
                                    </div>
                                </div>












                                <div className="flex items-center justify-end gap-2 pt-3">
                                    <button className="border border-[#E0E0E0] text-[#666666] font-Roboto text-[16px] px-6 py-[3px] rounded-full">Cancel</button>

                                    <button className="bg-secondery text-[#FFFFFF] font-Roboto text-[16px] px-6 py-[3px] rounded-full">Comment</button>
                                </div>
                            </div>
                        </div>
                    </div>




                    {/* left site video/text */}
                    <div className="col-span-2 md:col-span-1">
                        <h1 className="font-Poppins text-[20px] font-medium text-[#000000] pb-4">You might interest in related videos</h1>
                        <div className={`max-h-[800px] overflow-y-auto ${allData.length > 6 ? "scrollbar-thin scrollbar-thumb-red-100" : ""}`}>
                            {allData.slice(0,6).map((item, index) => {
                                return (
                                    <div key={index} className="">
                                        <div className="mb-4 lg:mb-[8px]">

                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                                <div className="md:col-span-1 h-full rounded">
                                                    <div className=" relative z-10">
                                                        <img src={item.image} alt="" className="w-full h-full object-cover" />
                                                        <span className="absolute z-20 bottom-0 right-0 m-2 px-2 py-1 rounded-md bg-[#999999] text-[12px] font-Roboto text-[#333333]">17:08</span>
                                                    </div>
                                                </div>

                                                <div className="lg:col-span-1">
                                                    <h1 className="font-Roboto text-[14px] text-[#333333] ">Get the Best Discounts at Michail vs Robert's ...</h1>
                                                    <p className="font-Roboto text-[14px] text-[#666666]">Karla Blair</p>
                                                    <div className="flex items-center gap-3">
                                                        <p className="font-Roboto text-[12px] text-[#666666]"><span>10.5k</span> views</p>
                                                        <span className="h-2 w-2 bg-[#999999] rounded-full"></span>
                                                        <p className="font-Roboto text-[12px] text-[#666666]"><span>2</span> weeks ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDetails