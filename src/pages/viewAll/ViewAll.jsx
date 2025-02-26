import { useEffect, useState } from "react"
import Categories from "../../components/home/Categories"

const ViewAll = () => {
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

           <div className="max-w-[1167px] mx-auto px-4 pb-[64px]">
             {/* all data show */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[14px] mt-[16px]">
                {allData.map((product, idx) => (
                    <div key={idx} className="">
                        <div className="flex flex-col max-w-lg md:min-h-[238px]  space-y-6 overflow-hidden rounded-lg pb-2">
                            <div>
                                <div className=" relative z-10">
                                    <img src="/mostPopular/photo01.png" alt="popular photo" className="object-contain w-full mb-4" />
                                    <span className="absolute z-20 bottom-0 right-0 m-2 px-2 py-1 rounded-md bg-[#999999] text-[12px] font-Roboto text-[#333333]">17:08</span>
                                </div>

                                <div className="flex justify-between gap-2 p-1">
                                    <img src="/mostPopular/photo01.png" alt="" className="w-[40px] h-[40px] rounded-full" />
                                    <div>
                                        <h1 className="font-Roboto text-[14px] text-[#333333] ">Get the Best Discounts at Michail vs Robert's Barbershop! Only ...</h1>
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
                    </div>
                ))}
            </div>
           </div>
        </div>
    )
}

export default ViewAll