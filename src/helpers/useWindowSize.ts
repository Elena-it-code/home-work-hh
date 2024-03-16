import {useEffect, useState} from "react";

/*
*  Я ИЗМЕРЯЮ ШИРИНУ ЭКРАНА
*/
export function useWindowSize() {
    const [windowSize, setWindowSize] = useState(0)
    useEffect(() => {

        function handleResize() {
            setWindowSize(window.innerWidth); // .innerWidth свойство в native JS, которое следит за изменением экрана.
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return ()=> window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}



/*Эта функция useWindowSize является пользовательским хуком (custom hook) в React, который позволяет получить текущий размер окна браузера.
Хуки в React предоставляют возможность использовать состояние и другие возможности React в функциональных компонентах. Хуки должны начинаться с префикса "use" и могут использоваться только внутри других компонентов или пользовательских хуков.
Давайте разберем, как работает эта функция:
Внутри useWindowSize определена переменная состояния windowSize и функция setWindowSize, которая будет использоваться для обновления значения windowSize. Начальное значение windowSize установлено равным 0.
Затем используется хук useEffect. useEffect позволяет выполнять побочные эффекты в функциональном компоненте. В данном случае, useEffect используется для добавления обработчика события изменения размера окна и его удаления при размонтировании компонента.
Внутри useEffect определена функция handleResize, которая обновляет значение windowSize с помощью window.innerWidth. window.innerWidth является свойством в JavaScript, которое предоставляет текущую ширину окна браузера.
Затем вызывается window.addEventListener("resize", handleResize), чтобы добавить обработчик события изменения размера окна. Таким образом, при каждом изменении размера окна будет вызываться функция handleResize.
После этого вызывается handleResize() один раз, чтобы установить начальное значение windowSize при монтировании компонента.
В конце useEffect возвращается функция, которая будет вызвана при размонтировании компонента. В данном случае, она удаляет обработчик события изменения размера окна с помощью window.removeEventListener("resize", handleResize).
После завершения useEffect возвращается значение windowSize, которое можно использовать внутри компонента для получения текущего размера окна.
Таким образом, когда вы используете useWindowSize внутри функционального компонента, он будет отслеживать изменения размера окна браузера и предоставлять актуальное значение windowSize.*/