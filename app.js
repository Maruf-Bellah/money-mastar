const searchButton = () =>{
     const inputText = document.getElementById('searchInput').value;
   
      const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`
     fetch(url)
     .then(res => res.json())
     .then(data => displayShow(data.data)) 
}
const displayShow = phones => {
     const container = document.getElementById('phone-card');
     phones.forEach(phone => {
          console.log(phone);
          const div = document.createElement('div');
          div.innerHTML=`
          <div class="card h-100">
                <img width="60" src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
               <h5 class="card-title">${phone.phone_name}</h5>
               <h5 class="card-title">${phone.brand}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
          `
          container.appendChild(div);
     })
}