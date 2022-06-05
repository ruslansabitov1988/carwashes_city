'use strict'

let box = $ ("#box");

let btnCarwash = $("#btn_carwash");
let centerInfo = $("#center_info")
let centerInfoCity = $('#center_info_city')

btnCarwash.click(()=>{
    let settings = {
        url: 'http://localhost:8080/carwashes',
        method: 'GET',
        success: (response) =>{
            let carWashesArray = response;
            box.empty();
            for(let i = 0; i < carWashesArray.length; i++){
                box.append(`
                    <div class='carWashes_info'>
                        
                        <div class="name"><b>Название:</b> ${carWashesArray[i].name}</div>
                        
                        <div class="city"><b>Город : </b> ${carWashesArray[i].city} </div>
                        
                    </div>
                `);
            }
        }
    }
    $.ajax(settings);
})


function getCarWashes(){
    
    let settings = {
        url: 'http://localhost:8080/carwashes',
        method: 'GET',
        success: (response) =>{
            let carWashesArray = response;
            centerInfo.empty();
            for(let i = 0; i < carWashesArray.length; i++){
                centerInfo.append(`
                    <div class='carWashes_info'>
                        <div class="name"><b>Название:</b> ${carWashesArray[i].name}</div>
                        
                        
                    </div>
                `);
            }
        }
    }
    $.ajax(settings);
    
}

getCarWashes();


let selectBtn = $("#selectBtn");

function forSelect (){
    let url = 'http://localhost:8080/carwashes'
    let settings = {
            url:url,
            methos:'get',
            success: (response) =>{
                console.log (response);
                localStorage.setItem('city',JSON.stringify(response))
                
                let cityForSelect = ["Almaty", "Astana","Atyrau"]
                
                for(let i =0; i <cityForSelect.length; i++){
                    
                    selectBtn.append(`
                        <option value='${cityForSelect[i]}'>${cityForSelect[i]} </option>
                            
                `)
                        
            }
        }
    }
    $.ajax(settings)

}
forSelect ()

let btnCity = $("#btnCity");

btnCity.click(()=>{
    let cityIdSelect = JSON.parse(localStorage.getItem('city')) || [];
    console.log((cityIdSelect[0].cityId))
    console.log(selectBtn.val())
    let numId = 1
    for(let i =0; i < cityIdSelect.length; i++){
        if(selectBtn.val() == cityIdSelect[i].cityId){
            numId = cityIdSelect[i].cityId
        }
    }
    console.log((numId))
    let url = 'http://localhost:8080/carwashes/'
    let settings = {
        url:url,
        methos:'get',
        success: (response) =>{       
            console.log (response);
            for(let i =0; i <response.length; i++){
                if(response[i].city == selectBtn.val()){
                    
                    centerInfoCity.append(`
                    <div class='carWashes_info'>
                        <div class="name"><b>Название:</b> ${response[i].name}</div>
                        <div class="name"><b>Цена:</b> ${response[i].price} тг. </div>
                    
                    </div>
                    `)
                }



                
                
            }
            
        }
    }
    $.ajax(settings)

})











// function forSelect (){
//     let url = 'https://jsonplaceholder.typicode.com/users'

//     let settings = {
//         url:url,
//         methos:'get',
//         success: (response) =>{
//             console.log (response);
//             localStorage.setItem('users',JSON.stringify(response))
//             for(let i =0; i <response.length; i++){
//                 selectBtn.append(`
//                     <option value='${response[i].name}'>${response[i].name.toUpperCase()} </option>
                    
//                 `)
                
//             }
//         }
//     }
//     $.ajax(settings)
// }
// forSelect ()










// btnBtn.click(()=>{
//     let usersId = JSON.parse(localStorage.getItem('users')) || [];
//     console.log(selectBtn.val())
//     let numId = 0
//     for(let i =0; i < usersId.length; i++){
//         if(selectBtn.val() == usersId[i].name){
//             numId = usersId[i].id
//         }
//     }
//     console.log(numId)

//     let url = `https://jsonplaceholder.typicode.com/posts?userId=${numId}`

//     let settings = {
//         url:url,
//         methos:'get',
//         success: (response) =>{
//             console.log (response);
//             localStorage.setItem('postTitle',JSON.stringify(response))
//             content.empty()
//             for(let i =0; i <response.length; i++){
                
//                 content.append(`
//                     <div class='content_post_title' onclick="showInfo(${i})">
//                         <h2 class='title'>Post title: ${response[i].title}</h2>
//                         <span class="post">${response[i].body}</span>
//                     </div>
//                 `)
                
//             }
            
//         }
//     }
//     $.ajax(settings)
// })
