
import { useEffect, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri"
import { MdArrowForwardIos } from "react-icons/md";
import { Select, Space } from 'antd';
import { Link } from "react-router-dom";

const MostPopular = () => {
    const [showAll, setShowAll] = useState(false);
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("/popularData.json") 
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const displayedProducts = showAll ? products : products.slice(0, 4);
    const handleViewAllClick = () => {
        setShowAll(true);
    };

    const handleChange = () => {
        console.log('first')
    }

    return (
        <section className="max-w-[1167px] mx-auto px-4 mt-8 md:mt-20 pb-[64px]">
            <div className="">
                <div className="flex justify-between">
                    <h2 className="text-[24px] font-medium font-Poppins text-[#000000]">
                        Most popular
                        <span className="font-Roboto font-normal text-[14px] text-[#666666] ml-4 pr-2">short by</span>
                        <Space wrap >
                            <Select
                                defaultValue="All"
                                style={{ width: 120, borderRadius: '9999px', }}
                                onChange={handleChange}
                                options={[
                                    { value: 'all', label: 'All' },
                                    { value: 'free', label: 'Free' },
                                    { value: 'paid', label: 'Paid' },
                                ]}
                            />
                        </Space>
                    </h2>


                    {!showAll && (
                        <button
                            className="flex items-center gap-3 text-secondery text-[14px]  font-Roboto underline"
                            onClick={handleViewAllClick}>
                            Explore all
                            <span><MdArrowForwardIos /></span>
                        </button>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[14px] mt-[16px]">
                    {displayedProducts.map((product, idx) => (
                        <Link to={'/view-all'} key={idx}>
                        <div className="">
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
                        </Link>
                    ))}
                </div>
            </div>




            {/* Recommended section */}
            <div className="pt-[32px]">
                <div className="flex justify-between">
                    <h2 className="text-[24px] font-medium font-Poppins text-[#000000]">
                        Recommended
                    </h2>


                    {!showAll && (
                        <button
                            className="flex items-center gap-3 text-secondery text-[14px]  font-Roboto underline"
                            onClick={handleViewAllClick}>
                            Explore all
                            <span><MdArrowForwardIos /></span>
                        </button>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[14px] mt-[16px]">
                    {displayedProducts.map((product, idx) => (
                        <Link to={'/view-all'} key={idx}>
                        <div className="">
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
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MostPopular