<template src="./product.component.html"></template>

<script src="./product.component.js"></script>

<style>

.prodCat{
    list-style-type: none;
    margin-top: 5px;
    display: inline-flex;
}
.catInfo{
    background: #126c77;
    margin-top: 2px;
    box-shadow: 0px 3px 13px aliceblue;
    border-radius: 5px;
    display: flex;
    margin-bottom: 20px;
}
.leftInfo img{
    width: 50px;
    border-radius: 50%;
    height: 50px;
}
.application .theme--dark.btn:not(.btn--icon):not(.btn--flat){
    background: #00bcd4 !important;
    color: white !important;
}
.catInfo div{
    flex: 1;
    text-align: center;
}
.centerDiv p{
    color: white;
    font-size: 18px;
    padding-top: 11px;
}
.application--light .card, .application .theme--light.card{
    background: white !important;
}
.lab{
    color: gray;
    font-size: 15px;
}
.layout.row{
    justify-content: flex-start;
    align-items: baseline;
}
.exampleFormControlSelect1{
    border: 0;
    box-shadow: none;
    border-bottom: 1px solid;
    border-radius: 0px;
}
.container.grid-list-md{
    width:100% !important;
}
/* .mainProd{
    overflow: auto;
    text-align: center;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: rgba(113, 129, 145, 0.5);
    box-shadow: 0px 0px 11px skyblue;
} */
.tabs__item:hover{
    text-decoration: none ;
}
.tabs__slider yellow{
    width: 15% !important;
}
.tabs__wrapper{
    overflow: hidden !important;
}
.mainProd::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: transparent;
}
.mainProd::-webkit-scrollbar
{
	width: 3px;
	background-color: transparent;
}
.mainProd::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
.row {
    margin-left: 0px !important;
    margin-right: 0px !important;
}
.ed{
    margin-right: 5px;
}
.prodCat li button{
    padding: 12px 40px;
    background: #735858;
    border-radius: 5px;
    color: whitesmoke;
    margin: 0px 10px;
    position: relative;
    /*-webkit-animation: mymove 5s infinite;  Safari 4.0 - 8.0 */
    /* animation: mymove .5s infinite; */
}
.prodCat li button:hover{
    background: #c76262;
    animation: mymove .5s infinite;
}
.flex.lg3 {
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 33% !important;
    margin-bottom: 10px;
}
.Cboth{
    clear: both;
}
.layout{
    display: inline-flex !important;
    width: 100%;
}
.flex.offset-sm3{
    margin-left: 10px !important;
}
.flex.offset-sm3:first-child{
    margin-left: 0px !important;
}
.flex.offset-sm3:nth-child(4n){
    margin-left: 0px !important;
}
/* Standard syntax */
@keyframes mymove {
    0%   {top: 0px;}
    25%  {top: 10px;}
    75%  {top: 10px}
    100% {top: 0px;}
}
</style>