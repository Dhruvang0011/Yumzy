import React, { useState } from "react";
import ItemList from "./IL";

const RestaurantCategory = ({ data,showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
    }  
    return (
        <div >
            <div className="justify-between flex items-center cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">
                    {data.sectionName}({data.items.length})
                </span>
                <span>⬇️</span>
            </div >
            {showItems && data.items.map((item, name) => (
                                <ItemList items={item} key={item.name} showAddButton={true}/>
                            ))}
        </div>
    );
};

export default RestaurantCategory;