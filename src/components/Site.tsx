import React from 'react';
import styles from './Site.module.css'
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./pages/Error404";
import {S} from "./pages/__styles";



export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    {/*<div><NavLink className={({isActive})=>isActive ? styles.active : styles.navlink} to={'/page1'}>Page1</NavLink></div>*/}
                    {/*<div><NavLink className={({isActive})=>isActive ? styles.active : styles.navlink} to={'/page2'}>Page2</NavLink></div>*/}
                    {/*<div><NavLink className={({isActive})=>isActive ? styles.active : styles.navlink} to={'/page3'}>Page3</NavLink></div>*/}
                    <S.NavWrapper><NavLink to={'/page1'}>Page1</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page2'}>Page2</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page3'}>Page3</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page1'}/>}/>
                        <Route path={'/page1'} element={<PageOne/>}/>
                        <Route path={'/page2'} element={<PageTwo/>}/>
                        <Route path={'/page3'} element={<PageThree/>}/>
                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>

                </div>
            </div>
        </div>
    );
};

/*const NavWrapper = styled.div`
  margin-left: 18px;
  font-size: 20px;
  
  & > a {
    text-decoration: none;
    color: #1e3786;
  }
  
  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }
  
  & > a:hover {
    color: steelblue; /!* Цвет ссылки*!/
  }
  
`*/



