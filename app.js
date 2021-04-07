// function getText(){

//     fetch("text.txt").then(function(data){

//         return data.text();
//     }).then(function(data){
//         console.log(data);

//     })
//  }


// getText();
function updateData(){

setTimeout(function(){
  document.querySelector("#update").style.position="fixed";

  document.querySelector("#tablo").innerHTML=`<img src="loading.gif" alt="Girl in a jacket" width="150" height="150" style="margin-left:575px;" >`
  
},400)
    setTimeout(function(){
        fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/asia", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "8fc6e10ab3msha7fe1dbb0240fe1p1cb818jsn6457af1b3b12",
                "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
            }
        })
        .then(response => {
            return response.text();
        }).then(function(data){
         
            let a = JSON.parse(data);
            console.log("deneme")
           var html=`
           <thead>
           <table class="mt-3 mb-0 table table-dark table-striped"  id="tablo">
           <tr>
          
             <th scope="col">Ülke</th>
             <th scope="col">Vaka</th>   
             <th scope="col">Ölüm</th>
             <th scope="col">ToplamVaka</th>
             <th scope="col">ToplamÖlüm</th>
             <th scope="col">Ülke Nüfusu</th>
    
           </tr>
         </thead>  
           
          `;
           for(let i=0;i<10;i++){
    
            html+=`  
            
            <tbody>
              <tr>
               
                <td>${a[i].Country}</td>
                <td>${a[i].NewCases}</td>
                <td>${a[i].NewDeaths}</td>
                <td>${a[i].TotalCases}</td>
                <td>${a[i].TotalDeaths}</td>
                <td>${a[i].Population}</td>
    
    
              </tr>
             
            </tbody>
      `
    
           }
           
           document.querySelector("#tablo").innerHTML=html+`</table>`;
          
           console.log(a); 
           /*
            let country=a[0].Country;
            let vaka=a[0].confirmed;
            let olum=a[0].TotalDeaths;
            document.querySelector("#tableofcountry").style.display="inline-block";
            document.querySelector("#ulke").textContent=country;
            document.querySelector("#vaka").textContent=vaka;
            document.querySelector("#olum").textContent=olum;
            */
        })
        .catch(err => {
            console.error(err);
        });
    
    }, 2000);
    }


document.querySelector("#update").addEventListener("click",updateData);
