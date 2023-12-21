import {PagesType} from "../../data/dataState";
import {useLocation, useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
    pages: PagesType[]
}

export const Page: React.FC<PropsType> = ({pages}) => {
    const params = useParams()
    console.log(params.id)

    const Location = useLocation()
    console.log(Location)
    return (
        <div>
            {Location.pathname === '/page/0' && <div>SECRET TEXT</div>}
            {pages[Number(params.id)]
            ? <div>
                {pages[Number(params.id)].heading}
                {pages[Number(params.id)].about}
            </div>
            : <Error404/>
            }
        </div>
    )
}