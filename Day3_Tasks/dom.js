// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=eccd9882')
// fetch(`http://www.omdbapi.com/?s=${name}&apikey=dc982c25`)
// .then(response => response.json())
// .then((data) => {
//     console.log(data)
//     let div = document.getElementById("root");
//     for(n in data){
//         div.append(`${n} : ${data[n]}`);
//     }
    
// })

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const page1 = document.getElementById("page1");
const page = document.getElementById("page");


// btn.onclick = 
function mainfn () {
    const name = input.value;
    fetch(`http://www.omdbapi.com/?s=${name}&apikey=eccd9882`)
.then(response => response.json())
.then((data) => {
    console.log(data)
    let div = document.getElementById("root");
    let res = data.Search;
    div.innerHTML="";
    page.innerHTML="";
    if(res.length>6){
        let page1 = document.createElement('button');
        page1.setAttribute('class','btn btn-outline-dark');
        page1.innerText = 1;
        page1.setAttribute('onclick','mainfn()');
        let page2 = document.createElement('button');
        page2.setAttribute('class','btn btn-outline-dark');
        page2.setAttribute('onclick','page2fn()');
        page2.innerText = 2;
        page.append(page1);
        page.append(page2);
    }
    for(n in res){
        if(n<6){
            console.log(res[n].Title);
            let card = document.createElement('div');
            card.setAttribute('class','card');
            div.append(card);
            let image = document.createElement('img');
            let sr=document.createAttribute('src');
            sr.value = res[n].Poster;
            image.setAttribute('class','card-img-top');
            image.setAttributeNode(sr);
            card.append(image);
            let title = document.createElement('h6');
            title.setAttribute('class','card-title')
            title.innerText = res[n].Title;
            card.append(title); 
        }
        // div.append(`${res[n].Title}`);
        
    }
    // if(res.length<5){
    //     page.setAttribute('class','disnone');
    // }


    
})  
}




  function page2fn () {
    const movie = input.value;
    fetch(`http://www.omdbapi.com/?s=${movie}&apikey=6bb978b0`)
.then(response => response.json())
.then((data) => {
    console.log(data)
    let div = document.getElementById("root");
    let res = data.Search;
    div.innerHTML="";
    for(n in res){
        if(n>=6){
            console.log(res[n].Title);
            // mycode
            let card = document.createElement('div');
            card.setAttribute('class','card');
            div.append(card);
            let image = document.createElement('img');
            let sr=document.createAttribute('src');
            sr.value = res[n].Poster;
            image.setAttribute('class','card-img-top');
            image.setAttributeNode(sr);
            card.append(image);
            let title = document.createElement('h6');
            title.setAttribute('class','card-title')
            title.innerText = res[n].Title;
            card.append(title); 
        }
        // div.append(`${res[n].Title}`);
        
    }
    // if(res.length<5){
    //     page.setAttribute('class','disnone');
    // }
    
})  
}


function voice(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function(event){
        console.log(event);
        console.log(event.results[0][0].transcript);
        document.getElementById('input').value = event.results[0][0].transcript;
        mainfn();
    }
    recognition.start();
    
}



// function page1fn () {
//     const name = input.value;
//     fetch(`http://www.omdbapi.com/?s=${name}&apikey=eccd9882`)
// .then(response => response.json())
// .then((data) => {
//     console.log(data)
//     let div = document.getElementById("root");
//     let res = data.Search;
//     div.innerHTML="";
//     for(n in res){
//         if(n<6){
//             console.log(res[n].Title);
//             // mycode
//             let card = document.createElement('div');
//             card.setAttribute('class','card');
//             div.append(card);
//             let image = document.createElement('img');
//             let sr=document.createAttribute('src');
//             sr.value = res[n].Poster;
//             image.setAttribute('class','card-img-top');
//             image.setAttributeNode(sr);
//             card.append(image);
//             let title = document.createElement('h6');
//             title.setAttribute('class','card-title')
//             title.innerText = res[n].Title;
//             card.append(title); 
//         }
//         // div.append(`${res[n].Title}`);
        
//     }
//     // if(res.length>5){
//     //     page.removeAttribute('class');
//     //     page.setAttribute('class','pagination pagination-sm justify-content-center')
//     // }
    
// })  
// }