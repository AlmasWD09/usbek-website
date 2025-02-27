import { useEffect, useState } from "react"
import Categories from "../../components/home/Categories"
import { IoMdPlay } from "react-icons/io";
import { Link } from "react-router-dom";

const ViewAll = () => {
    const [allData, setAllData] = useState([])

    useEffect(() => {
        fetch("/recommendedData.json")
            .then((response) => response.json())
            .then((data) => setAllData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <Categories />

            <div className="max-w-[1167px] mx-auto px-4 pb-[40px] lg:pb-[64px]">
                {/* all data show */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[14px] mt-[16px]">
                    {allData.map((item, idx) => (
                        <Link to={'/view-details'} key={idx}>
                        <div className="">
                            <div className="">
                                <div className="flex flex-col max-w-lg md:min-h-[238px] space-y-6 overflow-hidden rounded-lg pb-2">
                                    <div>
                                        <div className="relative z-10">
                                            {/* Image container with hover effect */}
                                            <div className="relative group">
                                                <img
                                                    src={item.image}
                                                    alt="popular photo"
                                                    className="object-contain w-full mb-4 transition-transform duration-300 transform group-hover:scale-105 group-hover:opacity-70 group-hover:transform-origin-center"
                                                />
                                                {/* Home Icon in the middle */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <a href="#" className="text-[#FFFFFF] text-3xl">
                                                        <IoMdPlay className="text-[#FFFFFF]" /> {/* Home icon */}
                                                    </a>
                                                </div>

                                                <div className="absolute top-0 right-0 z-30 m-2 px-4 py-1 rounded-md bg-[#999999] text-[12px] font-Roboto text-[#FFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    Paid
                                                </div>
                                            </div>
                                            <span className="absolute z-20 bottom-0 right-0 m-2 px-2 py-1 rounded-md bg-[#999999] text-[12px] font-Roboto text-[#333333]">
                                                17:08
                                            </span>
                                        </div>

                                        <div className="flex justify-between gap-2 p-1">
                                            <img
                                                src="/mostPopular/photo1.png"
                                                alt=""
                                                className="w-[40px] h-[40px] object-cover rounded-full"
                                            />
                                            <div>
                                                <h1 className="font-Roboto text-[14px] text-[#333333]">
                                                    Get the Best Discounts at Michail vs Robert's Barbershop! Only ...
                                                </h1>
                                                <p className="font-Roboto text-[14px] text-[#666666]">Karla Blair</p>
                                                <div className="flex items-center gap-3">
                                                    <p className="font-Roboto text-[12px] text-[#666666]">
                                                        <span>10.5k</span> views
                                                    </p>
                                                    <span className="h-2 w-2 bg-[#999999] rounded-full"></span>
                                                    <p className="font-Roboto text-[12px] text-[#666666]">
                                                        <span>2</span> weeks ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ViewAll