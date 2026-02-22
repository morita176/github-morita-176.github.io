// ===== 設定 =====
const PASSWORD = "morita2026";
const REDIRECT_URL = "./list.html";

// ===== 要素取得 =====
const pwInput = document.getElementById("pw");
const loginBtn = document.getElementById("loginBtn");
const showPwCheckbox = document.getElementById("showpassword");
const loginError = document.getElementById("loginError");

// ===== ログイン処理 =====
function login() {
  const inputPw = pwInput.value;

  if (inputPw === PASSWORD) {
    localStorage.setItem("login_auth", "true");
    location.href = REDIRECT_URL;
  } else {
    loginError.textContent = "パスワードが違います";
  }
}

// ===== 表示・非表示切り替え =====
function togglePassword() {
  pwInput.type = showPwCheckbox.checked ? "text" : "password";
}

// ===== 入力時にエラー消す（UX向上）=====
pwInput.addEventListener("input", () => {
  loginError.textContent = "";
});

// ===== イベント登録 =====
loginBtn.addEventListener("click", login);
showPwCheckbox.addEventListener("change", togglePassword);