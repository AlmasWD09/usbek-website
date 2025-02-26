
import { useState } from "react";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    "Beauty esthetics",
    "Restaurant & catering",
    "Hair stylist",
    "Medical doctors",
    "Electronic stores",
    "Supermarkets malls",
    "Recreational activities",
    "Auto mechanic",
  ];

  const allData = [
    { id: 1, name: "Salon XYZ", category: "Beauty esthetics" },
    { id: 2, name: "Tasty Foods", category: "Restaurant & catering" },
    { id: 3, name: "Supercuts", category: "Hair stylist" },
    { id: 4, name: "City Hospital", category: "Medical doctors" },
    { id: 5, name: "Gadget World", category: "Electronic stores" },
    { id: 6, name: "BigMart", category: "Supermarkets malls" },
    { id: 7, name: "Adventure Club", category: "Recreational activities" },
    { id: 8, name: "AutoFix", category: "Auto mechanic" },
  ];

  const filteredData = activeCategory
    ? allData.filter((item) => item.category === activeCategory)
    : allData;


  return (
    <div className="pt-4">
      <div className="flex justify-center gap-3 overflow-x-auto whitespace-nowrap ">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-2 rounded-lg border font-Roboto text-[14px] ${activeCategory === category ? "bg-[#333333] text-white" : "bg-[#F8F9FA]"
              }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Filtered Data */}
      <div className="mt-4">
        {filteredData.length > 0 ? (
          <ul className="list-disc pl-5">
            {/* {filteredData.map((item, index) => (
              <p key={item.id}>{index + 1}. {item.name}</p>
            ))} */}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>

    </div>
  )
}

export default Categories