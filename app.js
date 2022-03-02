const toggleSpinner = displaySpinner =>{
     document.getElementById('spinner').style.display = displaySpinner;
}

const toggleInfo = displayInfo => {
     document.getElementById('information').style.display = displayInfo;
}

const toggleError = displayError =>{
     document.getElementById('error').style.display = displayError;
}

const searchButton = () =>{
     const inputText = document.getElementById('searchInput').value;
     document.getElementById('searchInput').value ='';

     search.style.display="none"
     

          const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`
          fetch(url)
          .then(res => res.json())
          .then(data => displayShow(data.data)) 
          // display workd
          toggleSpinner('block')    
          toggleInfo('none')  

     
}
const displayShow = phones => {
     const container = document.getElementById('phone-card');
     container.textContent = '';
          if(!phones || phones == 0){
          error.innerHTML=`<h5>Please Try Again</h5>`

          }
          else{
               for(const phone of phones.slice(0, 20)){
                    const div = document.createElement('div');
                    div.innerHTML=`
                    <div id="rounded"  class="card h-100 ">
                          <img id="image" src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                         <h5 class="card-title">${phone.phone_name}</h5>
                         <h5 class="card-title">${phone.brand}</h5>
                          <button onclick="displayDetails('${phone.slug}')" type="button" class="btn px-4 btn-primary rounded-pill">Details</button>
                    </div>
                  </div>
                    `
                    container.appendChild(div);
                    toggleError('none')
               }                    
          }
          // display workd

          toggleSpinner('none')
          toggleInfo('block')
     }

   
     
const displayDetails = details =>{
     const url =`https://openapi.programming-hero.com/api/phone/${details}`
     fetch(url)
     .then(res => res.json())
     .then(data => displayShowDetails(data.data))
}



const displayShowDetails = info =>{
     const information = document.getElementById('information');
     information.innerHTML ='';
     if(!info){
          error.innerHTML=`<h5>Please Try Again</h5>`

     }
     
     const div = document.createElement('div');
     div.innerHTML=`
     <div id="info" class="card my-5" style="max-width: 1000px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${info.image}" class="img-fluid rounded-start ms-3 mt-3" alt="...">
      <h6 class="ms-4 mt-1">Name : ${info.name} </h6>
      <h6 class="ms-4 ">Brand : ${info.brand} </h6>
      
      
    </div>
    <div class="col-md-8 ">
      <div id="font" class="card-body">
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
         <h6 class="card-title">WLAN : ${info.others?.WLAN  ? info.others?.WLAN : 'No Found'}</h6>
        <h6 class="card-title">Bluetooth : ${info.others?.Bluetooth ? info.others?.Bluetooth : 'No Found'}</h6>
        <h6 class="card-title">GPS : ${info.others?.GPS ? info.others?.GPS : 'No Found'}</h6>
        <h6 class="card-title">NFS : ${info.others?.NFC ? info.others?.NFC : 'No Found'} </h6>
        <h6 class="card-title">Radio : ${info.others?.Radio ? info.others?.Radio : 'No Found'}</h6>
        <h6 class="card-title">USB : ${info.others?.USB ? info.others?.USB : 'No Found'}</h6>
        
      </div>
    </div>
  </div>
</div>

     `
     information.appendChild(div);
   
}

