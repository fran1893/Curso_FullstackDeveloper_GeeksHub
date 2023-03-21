// definiciones
const root = document.getElementById("root");

// users
const getAllUsers = async () => {
  const API_URL =
    "https://dummyjson.com/users?limit=20&select=firstName,age,image";

  const response = await axios.get(API_URL);
  const users = response.data.users;

  renderAllUsers(users);
};

const renderAllUsers = (users) => {
  let view = "<h2>Users</h2>";
  view += '<div id="users">';
  for (const u of users) {
    view += renderSingleUser(u);
  }
  view += "</div>";
  root.innerHTML = view;
};

const renderSingleUser = (user) => {
  return `
    <div class="user"> 
          <img class="user__image" src="${user.image}" >
         <div class="user__name">${user.firstName}</div>
         <div class="user__age">${user.age}</div>
    </div>`;
};

// products
const getAllProducts = async () => {
  const API_URL =
    "https://dummyjson.com/products?limit=20&select=title,price,images";

  const response = await axios.get(API_URL);
  const products = response.data.products;
  renderAllProducts(products);
};

const renderAllProducts = (products) => {
  let view = "<h2>Products</h2>";
  view += '<div id="products">';
  for (const p of products) {
    view += renderSingleProduct(p);
  }
  view += "</div>";
  root.innerHTML = view;
};

const renderSingleProduct = (product) => {
  return `
     <div class="product"> 
           <img class="product__image" src="${product.images[0]}" >
          <div class="product__title">${product.title}</div>
          <div class="product__price">${product.price}</div>
     </div>`;
};

// eventos
document.getElementById("btn-users").addEventListener("click", getAllUsers);

document
  .getElementById("btn-products")
  .addEventListener("click", getAllProducts);

// Principal
