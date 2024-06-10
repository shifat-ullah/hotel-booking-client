/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string'

const ShowCategory = ({ label, icon: Icon, selected }) => {

    const [params, setParams] = useSearchParams()

  const navigate = useNavigate()
  const handleClick = () => {
    let currentQuery = {}
    if (params) {
      currentQuery = qs.parse(params.toString())
    }
    const updatedQuery = {
      ...currentQuery,
      category: label,
    }

    const url = qs.stringifyUrl(
      {
        url: '/room',
        query: updatedQuery,
      },
      { skipNull: true }
    )

    navigate(url)
  }


    return (
        <div onClick={handleClick} className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected
                ? 'border-b-neutral-800 text-neutral-800'
                : 'border-transparent text-neutral-500'
            }
     
      `}>
            <Icon size={26} />
            <p>{label}</p>

        </div>
    );
};

export default ShowCategory;