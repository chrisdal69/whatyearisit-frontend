/*
fetch("https://whatyearisit-backend-nu-seven.vercel.app/year")
    .then(res => res.json())
    .then(d=>{
        console.log(d);
        document.querySelector('#year').textContent = d.year;
    })
*/
let date = Date()
document.querySelector('#year').textContent = date