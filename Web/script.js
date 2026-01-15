document.addEventListener("DOMContentLoaded", () => {


  const profileToggle = document.getElementById("profileToggle");
  const authModal = document.getElementById("authModal");
  const closeAuth = document.getElementById("closeAuth"g);
  const switchAuth = document.getElementById("switchAuth");
  const authTitle = document.getElementById("authTitle");
  const authForm = document.getElementById("authForm");
  const authBtn = authForm?.querySelector("button");

  let isLogin = true;

  profileToggle?.addEventListener("click", (e) => {
    e.preventDefault();
    authModal.classList.add("show");
  });

  closeAuth?.addEventListener("click", () => {
    authModal.classList.remove("show");
  });

  authModal?.addEventListener("click", (e) => {
    if (e.target === authModal) {
      authModal.classList.remove("show");
    }
  });

  switchAuth?.addEventListener("click", () => {
    isLogin = !isLogin;

    authTitle.textContent = isLogin ? "Login" : "Register";
    authBtn.textContent = isLogin ? "Login" : "Create Account";
    switchAuth.textContent = isLogin ? "Register" : "Login";
  });

  authForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(isLogin ? "Logged in (demo)" : "Account created (demo)");
    authModal.classList.remove("show");
  });

 

  const categoriesToggle = document.getElementById("categoriesToggle");
  const categoriesMenu = document.getElementById("categoriesMenu");
  const arrow = categoriesToggle?.querySelector(".arrow");

  categoriesToggle?.addEventListener("click", (e) => {
    e.preventDefault();
    categoriesMenu.classList.toggle("show");
    arrow.classList.toggle("rotate");
  });

  document.addEventListener("click", (e) => {
    if (
      categoriesToggle &&
      !categoriesToggle.contains(e.target) &&
      !categoriesMenu.contains(e.target)
    ) {
      categoriesMenu.classList.remove("show");
      arrow?.classList.remove("rotate");
    }
  });

 

  function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }

  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function updateCartCount() {
    const countEl = document.getElementById("cartCount");
    if (countEl) countEl.textContent = getCart().length;
  }

  updateCartCount();

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-cart");
    if (!btn) return;

    const productId = btn.dataset.id;
    const cart = getCart();

    cart.push(productId);
    saveCart(cart);
    updateCartCount();

    btn.textContent = "Added ✓";
    btn.disabled = true;

    showToast("Item added to cart");
  });

  function showToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;

    Object.assign(toast.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      background: "#022b14",
      color: "#fff",
      padding: "10px 16px",
      borderRadius: "6px",
      zIndex: "9999",
      fontSize: "14px"
    });

    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }

});