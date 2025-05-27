document.addEventListener("DOMContentLoaded", () => {
  // 세부메뉴 요소들 선택
  const menuButton = document.querySelector(".submenu3");

  // 나중에 동적으로 넣을 overlay, submenu 요소
  let overlay, submenu;

  // 함수: submenu.html을 fetch해서 body 끝에 삽입
  async function loadSubmenu() {
    const response = await fetch("./html/submenu3.html");
    const htmlText = await response.text();
    const div = document.createElement("div");
    div.innerHTML = htmlText;
    document.body.appendChild(div.firstElementChild);

    overlay = document.getElementById("overlay");
    submenu = document.getElementById("submenu");

    // 오버레이 클릭 시 닫기 기능
    overlay.addEventListener("click", (e) => {
      if (!submenu.contains(e.target)) {
        overlay.style.display = "none";
      }
    });
  }

  // 세부메뉴 열기
  menuButton.addEventListener("click", async () => {
    if (!overlay) {
      await loadSubmenu();
    }
    overlay.style.display = "flex";
  });
});
