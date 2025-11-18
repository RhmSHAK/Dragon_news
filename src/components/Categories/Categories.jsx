
import { useEffect, useState } from "react";
import { NavLink } from "react-router";


const Categories = () => {

    const [categories, setCategories] = useState([]) 

    useEffect(
           ()=>{
            fetch("/categories.json")
            .then((res)=>res.json())
            .then((data)=> setCategories(data))
           }
        ,[])

    return (
        <div>
            <h2 className="font-bold ml-3 text-2xl">All Categories</h2>
            <div className="grid grid-cols-1  mt-3 gap-5">
                {
                   categories.map((category)=>
                    <NavLink key={category.id} className="btn bg-base-100 border-0 hover:bg-base-300 " to={`/category/${category.id}`} >
                        {category.name}
                    </NavLink>
                )
                }
            </div>
        </div>
    );
};

export default Categories;