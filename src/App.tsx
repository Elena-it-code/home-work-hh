import React, {useEffect, useState} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import './App.css';
import {Site} from "./components/Site";
import styles from "./components/Site.module.css";
import {S} from "./components/pages/__styles";
import {useWindowSize} from "./helpers/useWindowSize";


function App() {
    //const [burger, setBurger] = useState(false) // стэйт для отслеживания изменения меню в burger

    const size = useWindowSize()

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            {/* подтянули шапку для сайта*/}
            <div className={styles.body}> {/*стили для body*/}
                {size > 900 // установили зависимость размер экрана
                    ? <div className={styles.nav}> {/*подтянули наши кнопки правый сайдбар*/}
                    <S.NavWrapper><NavLink to={'/page/0'}>Page1</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/1'}>Page2</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/2'}>Page3</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/protected'}>Protected Page</NavLink></S.NavWrapper>
                </div>
                : <div>☰</div>} {/*по идее сюда ставим значок бургера*/}
                <div className={styles.content}> {/*стили для страниц*/}
                    <Outlet/> {/* Outlet это наш children: [] из файла router.tsx*/} {/* ВСЕГДА МЕНЯЕТСЯ ВНУТРЕННОСТЬ СТРАНИЦЫ КОНТЕНТ СОГЛАСНО ВЫБРАННОЙ СТРАНИЦЫ ПОЛЬЗОВАТЕЛЕМ*/}
                </div>
            </div>
        </div>
    );
}


export default App;


// в App в родителе(бате) у нас находится то, что всегда не будет изменяться во время route(инга), статичная часть нашей страницы HEADER, FOOTER, NAVLINK
// Outlet это та часть, которая всегда МЕНЯЕТСЯ и зависит от route(инга)
/*
function App() {
    return (
<div>
    <div>
        HEADER {/!*остается всегда при обновлении страницы сайта*!/}
    </div>
        <Outlet/> {/!* Outlet это наш children: [] из файла router.tsx*!/} {/!* ВСЕГДА МЕНЯЕТСЯ ВНУТРЕННОСТЬ СТРАНИЦЫ КОНТЕНТ СОГЛАСНО ВЫБРАННОЙ СТРАНИЦЫ ПОЛЬЗОВАТЕЛЕМ*!/}
        {/!*<Site/>*!/}
    <div>
        FOOTER {/!*остается всегда при обновлении страницы сайта*!/}
    </div>
</div>
    );
}*/

