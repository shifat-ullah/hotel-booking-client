import { useSearchParams } from "react-router-dom";
import { categories } from "../data/categoriesData";
import ShowCategory from "./ShowCategory";


const Category = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')

    return (
        <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
            {
                categories.map(item => <ShowCategory label={item.label}
                    icon={item.icon}
                    key={item.label}
                    selected={category === item.label}></ShowCategory>)
            }
        </div>
    );
};

export default Category;