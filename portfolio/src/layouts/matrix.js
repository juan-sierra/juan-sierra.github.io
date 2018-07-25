import styled, { injectGlobal } from "styled-components"
import InterUI from "../assets/fonts/InterUI.woff2";

const green = "#84dcc6";
const blue = "#3ABEFF";

const white = "#FDFFF7";
const black = "#50514F"
const bone = "#F7F4EA";

injectGlobal`
    @font-face {
        font-family: InterUI;
        font-style:  normal;
        font-weight: 400;
        src: url(${InterUI}) format("woff2");
    }
`

export const Container = styled.div`

    height: 100%;
    width: 1000px;
    margin: auto;
    background: ${white};
    box-sizing: border-box;
    font-family: 'InterUI';
`

export const MyName = styled.h1`
    font-size: 4em;
    font-weight: 300;
    color: ${black};
`