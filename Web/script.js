document.addEventListener("DOMContentLoaded", function () { 
const profileToggle = document.getElementById("profileToggle");
const authModal = document.getElementById("authModal");
const closeAuth = document.getElementById("closeAuth");
const switchAuth = document.getElementById("switchAuth");
const authTitle = document.getElementById("authTitle");
const authForm = document.getElementById("authForm");
const authBtn = authForm.querySelector("button");

let isLogin = true;

profileToggle?.addEventListener("click", (e) => {
  e.preventDefault();
  authModal.classList.add("show");
});

closeAuth.addEventListener("click", () => {
  authModal.classList.remove("show");
});

authModal.addEventListener("click", (e) => {
  if (e.target === authModal) {
    authModal.classList.remove("show");
  }
});

switchAuth.addEventListener("click", () => {
  isLogin = !isLogin;

  authTitle.textContent = isLogin ? "Login" : "Register";
  authBtn.textContent = isLogin ? "Login" : "Create Account";
  switchAuth.textContent = isLogin ? "Register" : "Login";
});

authForm.addEventListener("submit", (e) => {
  e.preventDefault();

  alert(isLogin ? "Logged in (demo)" : "Account created (demo)");
  authModal.classList.remove("show");
});

  const toggle = document.getElementById("categoriesToggle");
  const menu = document.getElementById("categoriesMenu");

  if (toggle && menu) {
    const arrow = toggle.querySelector(".arrow");

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      menu.classList.toggle("show");
      arrow.classList.toggle("rotate");
    });

    document.addEventListener("click", function (e) {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("show");
        arrow.classList.remove("rotate");
      }
    });
  }

  function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }

  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

 
  function updateCartCount() {
    const countEl = document.getElementById("cartCount");
    if (countEl) {
      countEl.textContent = getCart().length;
    }
  }

  updateCartCount();

 
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart")) {

      const productId = e.target.dataset.id;
      const cart = getCart();

      cart.push(productId);
      saveCart(cart);
      updateCartCount();

      e.target.textContent = "Added ✓";
      e.target.disabled = true;

      showToast("Item added to cart");
    }
  });

 
  function showToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#022b14";
    toast.style.color = "white";
    toast.style.padding = "10px 16px";
    toast.style.borderRadius = "6px";
    toast.style.zIndex = "9999";

    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }
  profileToggle = document.getElementById("profileToggle");
  const profileMenu = document.getElementById("profileMenu");
  const arrow = profileToggle.querySelector(".arrow");

  profileToggle.addEventListener("click", () => {
    profileMenu.classList.toggle("show");
    
  });

  document.addEventListener("click", (e) => {
    if (!profileToggle.contains(e.target) && !profileMenu.contains(e.target)) {
      profileMenu.classList.remove("show");
    
    }
    });
    document.addEventListener("click", (e) => {
  if (!profileToggle.contains(e.target) && !profileMenu.contains(e.target)) {
    profileMenu.classList.remove("show");
  }
});
});