const content = document.querySelector("#content")

getProd();

async function getProd(){
const response = await fetch('https://fakestoreapi.com/products');
console.log(response);
const catalog = await response.json();
console.log(catalog);

renderProd(catalog);
}

function renderProd(prodArr){
prodArr.forEach(function(item){
  const prodHTML = `
  <div class="card">
  <div class="content">
      <img src="${item.image}" alt="product-img" class="img">
            <p class="price">
                Price: ${item.price}
            </p>
            <p class="discount">
                Discount: ${item.rating.count}
            </p>
            <p class="desc">
                Desc: ${item.description}
            </p>
            <p class="name">
                Name: ${item.title}
            </p>
            <button data-id="${item.id}" class="btn" align="bottom">🗑️</button>
    </div>
    </div>
 `;
 
 content.insertAdjacentHTML('beforeend', prodHTML); 
});
}
