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

            <div className="max-w-[1167px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[23px]">
                    <div className="col-span-2 border bg-[#E9ECEF] h-[476px] rounded-xl">

                    </div>



                    {/* left site video/text */}
                    <div className="col-span-2 md:col-span-1">
                        {allData.map((item, index) => {
                            return (
                                <div key={index} className="">
                                    <div className="mb-4 lg:mb-[8px]">

                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                            <div className="bg-red-300 md:col-span-1 h-full rounded">
                                                <div className=" relative z-10">
                                                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                                                    <span className="absolute z-20 bottom-0 right-0 m-2 px-2 py-1 rounded-md bg-[#999999] text-[12px] font-Roboto text-[#333333]">17:08</span>
                                                </div>
                                            </div>



                                            {/* content */}
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
    )
}

export default ViewDetails