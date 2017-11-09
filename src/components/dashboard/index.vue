<script src="./dashboard.component.js"></script>
<template src="./dashboard.component.html"></template>


<style> 
*{
    margin: 0px;
    padding: 0px;
}
nav{
    display: inline-block;
    position: fixed;
    height: 100%;
    background: #2f3532;
    width: 250px;
}
.edit{
    min-width: 50px !important;
}
.dropdown{
    overflow: hidden;
}
#myModal{
    padding-right: 0px !important;
}
.catTable{
    margin-top: 5px;
}
table.table tbody td:first-child, table.table tbody td:not(:first-child), table.table tbody th:first-child, table.table tbody th:not(:first-child), table.table thead td:first-child, table.table thead td:not(:first-child), table.table thead th:first-child, table.table thead th:not(:first-child) {
    padding: 10px 24px;
}
.application .theme--dark.table thead th{
    font-size: 18px;
}
.datatable , .datatable  th,.datatable  td{
    text-align: center;
    vertical-align: baseline !important;
    text-align: center !important;
}
.catTable tr:first-child{
    border-top: 2px solid ;
}
.catTable td{
    font-family: serif;
    font-size: 18px !important;
    color: black;
}
.catTable th{
    font-size: 20px !important;
}
.catImage img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    text-align: center;
}
.leftMenu{
    list-style-type: none;
    padding: 20px;
}
.leftMenu a{
    display: inline-block;
    width: 180px;
    font-size: 18px;
    margin-bottom: 10px;
    padding: 10px 0px;
    text-decoration: none;
    color: #b5a99a;
    border-bottom: 1px dashed white;
    transition: .5s all ease;
}
.leftMenu a:hover{
    background: #4b524e;
    border-bottom: 1px solid white;
}

.mainSecation{
    margin-left: 250px;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}


/* Table css Start */
a.del
{
    background:#d9534f;
    border-radius: 2px; 
    width: 35px;
    height:28px; 
    padding-left:12px;
    line-height:10px;
}

a.edit
{
    background:#337ab7;
    color:#fff;
    border-radius:2px;
    border:none;
}

tr.row-name
{
    font-size: 18px;
    color:#448aff;
}

tr.row-content
{
    color:#6c7173;
}

table
{
    border-bottom: 8px solid #448aff;
}

td.check
{
    text-align: center;
}

.table-striped>tbody>tr:nth-of-type(odd)
{
    background:#F0F2F2 !important; 
}

a.btn-danger:hover
{
    background: #de6c69;
}

a.btn-danger
{
    background:#d9534f;  
}

a.btn-top
{
    background:#448aff;
    color:#fff;
    border:1px solid #448aff; 
    padding: 7px 10px; 
    border-radius:4px; 
}

a.btn-top:hover
{
    text-decoration: none;
    box-shadow:3px 3px 5px #222; 
    transition:box-shadow 0.5s; 
}

/* Table css End */

</style>

