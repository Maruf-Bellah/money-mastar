const searchButton = () =>{
     const inputText = document.getElementById('searchInput').value;
   
      const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`
     fetch(url)
     .then(res => res.json())
     .then(data => displayShow(data.data)) 
}
const displayShow = phones => {
     const container = document.getElementById('phone-card');
     container.textContent = '';
     phones.forEach(phone => {
          // console.log(phone);
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
     })
}

const displayDetails = details =>{
     const url =`https://openapi.programming-hero.com/api/phone/${details}`
     fetch(url)
     .then(res => res.json())
     .then(data => displayShowDetails(data.data))
}

const displayShowDetails = info =>{
     console.log(info);
     const information = document.getElementById('information');
     information.textContent ='';
     const div = document.createElement('div');
     div.innerHTML=`
     <div class="card my-5" style="max-width: 1000px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${info.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${info.releaseDate ? info.releaseDate: 'No Relase Date found'}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

     `
     information.appendChild(div);
}