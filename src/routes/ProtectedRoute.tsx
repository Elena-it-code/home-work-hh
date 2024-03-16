import React, {ReactComponentElement} from "react";
import {Navigate} from "react-router-dom";

type PropsType = {
    children: ReactComponentElement<any>
}

export const ProtectedRoute: React.FC<PropsType> = ({children}) => {
    const logged = true

    return logged ? children : <Navigate to={"page/:error"}/> // если я залогинен вставь эту компоненту children,т.е. <ProtectedPage/>, а если я не залогинен, то бери ошибку Error404
}

