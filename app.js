const toggleSpinner = displaySpinner =>{
     document.getElementById('spinner').style.display = displaySpinner;
}

const searchButton = () =>{
     const inputText = document.getElementById('searchInput').value;
     document.getElementById('searchInput').value ='';

     if(!inputText){
          error.innerHTML=`<h5>Please Try Again</h5>`
     } 
     
     const url = `https://openapi.programming-hero.com/api/phones?search=${inputText.slice(1, 20)}`
          fetch(url)
          .then(res => res.json())
          .then(data => displayShow(data.data)) 
          toggleSpinner('block')        


     
}
const displayShow = phones => {
     const container = document.getElementById('phone-card');
     container.textContent = '';
          console.log(phones);
          if(!phones){
          error.innerHTML=`<h5>Please Try Again</h5>`

          }                
          for(const phone of phones.slice(0, 20)){
               const div = document.createElement('div');
               div.innerHTML=`
               <div id="rounded"  class="card h-100 ">
                     <img id="image" src="${phone.image}" class="card-img-top" alt="...">
               <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <h5 class="card-title">${phone.brand}</h5>
                     <button onclick="displayDetails('${phone.slug}')" type="button" class="btn px-4 btn-primary rounded-pill">Detais</button>
               </div>
             </div>
               `
               container.appendChild(div);
          }
                

                   
        
     
     
         
          toggleSpinner('none')
     


     }



   
    
     
const displayDetails = details =>{
     const url =`https://openapi.programming-hero.com/api/phone/${details}`
     fetch(url)
     .then(res => res.json())
     .then(data => displayShowDetails(data.data))
}

const displayShowDetails = info =>{
     const information = document.getElementById('information');
     if(!info){
          error.innerHTML=`<h5>Please Try Again</h5>`

     }
     information.innerHTML ='';
     const div = document.createElement('div');
     div.innerHTML=`
     <div id="info" class="card my-5" style="max-width: 1000px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${info.image}" class="img-fluid rounded-start ms-3 mt-4" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h6 class="card-title">Release : ${info.releaseDate ? info.releaseDate: 'No Relase Date found'}</h6>
        <h6 class="card-title">Chip Set : ${info.mainFeatures.chipSet} </h6>
        <h6 class="card-title">Display Size : ${info.mainFeatures.displaySize}</h6>
        <h6 class="card-title">Memory : ${info.mainFeatures.memory}</h6>
        <b>Sensors</b><br>
        <spaner class="card-title text-b fw-bolder">${info.mainFeatures.sensors[0]}, </spaner>
        <spaner class="card-title text-b fw-bolder">${info.mainFeatures.sensors[1]}, </spaner>
        <spaner class="card-title text-b fw-bolder">${info.mainFeatures.sensors[2]}, </spaner>
        <spaner class="card-title text-b fw-bolder">${info.mainFeatures.sensors[3]}, </spaner>
        <spaner class="card-title text-b fw-bolder">${info.mainFeatures.sensors[4]}, </spaner>
        <spaner class="card-title text-b fw-bolder">${info.mainFeatures.sensors[5] ? info.mainFeatures.sensors[5] : "No Found"} </spaner> <br>
        <b>Others</b>
        <h6 class="card-title">WLAN : ${info.others.WLAN}</h6>
        <h6 class="card-title">Bluetooth : ${info.others.Bluetooth}</h6>
        <h6 class="card-title">GPS : ${info.others.GPS}</h6>
        <h6 class="card-title">NFS : ${info.others.NFC} </h6>
        <h6 class="card-title">Radio : ${info.others.Radio}</h6>
        <h6 class="card-title">USB : ${info.others.USB}</h6>
        
      </div>
    </div>
  </div>
</div>

     `
     information.appendChild(div);
   
}

