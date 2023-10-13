import { useState } from "react";
import CategoryButton from "./CategoryButton";

const BlogCategory = ({ categories, onFilterBlogs }) => {
	const [activeCategory, setActiveCategory] = useState("all");

	const changeCategory = (activeCat) => {
		setActiveCategory(activeCat);
		onFilterBlogs(activeCat);
	};

	return (
		<div className="flex flex-wrap gap-6 md:gap-8 mb-3 mx-2 md:mx-0">
			{categories.map((category) => (
				<CategoryButton
					key={category}
					category={category}
					onChangeCategory={() => changeCategory(category)}
					className={` capitalize ${
						activeCategory == category
							? "bg-[#430680] text-[#ffffff] border-2 border-solid border-[#430680] px-[12px] py-[4px]"
							: "bg-[#ffffff] px-[14px] py-[6px]"
					} rounded-lg hover:scale-110 hover:bg-[#b6b6b6] transition ease-in-out duration-150 active:bg-[#858585]`}
				/>
			))}
		</div>
	);
};

export default BlogCategory;
