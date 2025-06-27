
fetch("http://localhost:3000/year")
    .then(res => res.json())
    .then(d=>{
        console.log(d);
        document.querySelector('#year').textContent = d.year;
    })