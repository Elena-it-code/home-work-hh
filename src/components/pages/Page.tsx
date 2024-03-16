import {PagesType} from "../../data/dataState";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
    pages: PagesType[]
}

export const Page: React.FC<PropsType> = ({pages}) => {
    const params = useParams() // hook
    console.log(params.id)

    const Location = useLocation() // hook
    console.log(Location)

    const navigate = useNavigate() // hook Если мы используем кнопку, то мы должныиспользовать hook useNavigate()

    const onclickBackHandler = () => { // логика для кнопки НАЗАД
        navigate(-1) // нам нужно указать для кнопки сдать назад. Поэтому все просто и легко. Пишем -1 шаг, значит назад
    }

    const onclickMainHandler = () => { // логика для кнопки ГЛАВНАЯ СТРАНИЦА
        navigate("/page/0") // здесь просто винтим/прописываем по адресу 0, тем самым указав адрес нашей главной страницы
    }

    return (
        <div>
            {Location.pathname === '/page/0' && <div>SECRET TEXT</div>}
            {pages[Number(params.id)]
                ? <div>
                    {pages[Number(params.id)].heading}
                    {pages[Number(params.id)].about}
                    <div>
                        <button onClick={onclickBackHandler}>НАЗАД</button>
                        <button onClick={onclickMainHandler}>ГЛАВНАЯ СТРАНИЦА</button>
                    </div>

                </div>
                //: <Error404/>
                : <Navigate to={'/page/error'}/>
            }
        </div>
    )
}