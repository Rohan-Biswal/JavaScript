const programming=["Javascript","Java","Pyhton","Cpp","C"]

// programming.forEach((item)=>{
//     console.log(item);
// })

const books=[
    {title:"book one",genre:"science",publish:2003,edition:2013},
    {title:"book two",genre:"history",publish:1983,edition:2000},
    {title:"book three",genre:"friction",publish:2009,edition:2017},
    {title:"book five",genre:"science",publish:2001,edition:2012},
    {title:"book six",genre:"non-friction",publish:2005,edition:2011},
    {title:"book seven",genre:"history",publish:1980,edition:2016},
    {title:"book eight",genre:"friction",publish:1991,edition:2018}
]

let userBook=books.filter((bk)=> bk.genre=="friction")//it we are writting arrow function without {} or
// in one line no need to write return.
userBook=books.filter((bk)=>{return bk.publish>=2000 && bk.genre=="friction"})
console.log(userBook);