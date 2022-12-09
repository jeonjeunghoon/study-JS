import { $ } from "./utils/dom.js";
import MenuApi from "./api/index.js";

function App() {
  // 상태는 변하는 데이터 - 메뉴명
  this.menu = {
    espresso: [],
    frappuccino: [],
    blended: [],
    teavana: [],
    desert: [],
  };
  this.currentCategory = "espresso";

  this.init = async () => {
    this.menu[this.currentCategory] = await MenuApi.getAllMenuByCategory(
      this.currentCategory
    );
    render();
    initEventListeners();
  };

  const render = async () => {
    this.menu[this.currentCategory] = await MenuApi.getAllMenuByCategory(
      this.currentCategory
    );
    const template = this.menu[this.currentCategory]
      .map(
        (item) => `
			<li data-menu-id="${item.id}" class="menu-list-item d-flex items-center py-2">
				<span class="w-100 pl-2 menu-name ${item.isSoldOut ? "sold-out" : ""} ">${
          item.name
        }</span>
				<button
  			  type="button"
  			  class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
  			>
  			  품절
  			</button>
				<button
					type="button"
					class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
				>
					수정
				</button>
				<button
					type="button"
					class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
				>
					삭제
				</button>
			</li>`
      )
      .join("");
    $("#menu-list").innerHTML = template;
    countMenu();
  };

  const countMenu = () => {
    const menuCount = this.menu[this.currentCategory].length;
    $(".menu-count").innerText = `총 ${menuCount}개`;
  };

  const addMenu = async () => {
    if ($("#menu-name").value === "") {
      alert("값을 입력해주세요");
      return;
    }
    const menuName = $("#menu-name").value;
    $("#menu-name").value = "";
    const duplicatedItem = this.menu[this.currentCategory].find(
      (item) => item.name === menuName
    );
    if (duplicatedItem) {
      alert("중복된 메뉴입니다.\n다시 입력해주세요.");
      return;
    }
    await MenuApi.addMenu(this.currentCategory, menuName);
    render();
  };

  const editMenu = async (e) => {
    const { menuId } = e.target.closest("li").dataset;
    const $menuName = e.target.closest("li").querySelector(".menu-name");
    const newMenuName = prompt("메뉴명을 수정하세요", $menuName.innerText);

    await MenuApi.editMenu(this.currentCategory, menuId, newMenuName);
    render();
  };

  const removeMenu = async (e) => {
    if (!confirm("삭제하시겠습니까?")) {
      return;
    }
    const { menuId } = e.target.closest("li").dataset;
    await MenuApi.removeMenu(this.currentCategory, menuId);
    render();
  };

  const soldOutMenu = async (e) => {
    const { menuId } = e.target.closest("li").dataset;
    await MenuApi.toggleSoldOutMenu(this.currentCategory, menuId);
    render();
  };

  const changeCategory = async (e) => {
    const isCategoryButton = e.target.classList.contains("cafe-category-name");
    if (!isCategoryButton) {
      return;
    }
    const { categoryName } = e.target.dataset;
    this.currentCategory = categoryName;
    $("#category-title").innerText = `${e.target.innerText} 메뉴 관리`;
    this.menu[this.currentCategory] = await MenuApi.getAllMenuByCategory(
      this.currentCategory
    );
    render();
  };

  const initEventListeners = () => {
    // form 태그가 자동으로 전송되는 것을 막아준다.
    $("#menu-form").addEventListener("submit", (e) => {
      e.preventDefault();
    });

    // 메뉴를 품절/수정/삭제한다.
    $("#menu-list").addEventListener("click", (e) => {
      // 품절
      if (e.target.classList.contains("menu-sold-out-button")) {
        soldOutMenu(e);
        return;
      }
      // 수정
      if (e.target.classList.contains("menu-edit-button")) {
        editMenu(e);
        return;
      }
      // 삭제
      if (e.target.classList.contains("menu-remove-button")) {
        removeMenu(e);
      }
    });

    // 메뉴를 추가한다.
    // 확인 버튼 클릭으로 추가
    $("#menu-submit-button").addEventListener("click", addMenu);
    // 엔터로 추가
    $("#menu-name").addEventListener("keypress", (e) => {
      if (e.key !== "Enter") {
        return;
      }
      addMenu();
    });

    $("nav").addEventListener("click", (e) => {
      changeCategory(e);
    });
  };
}

const app = new App();
app.init();
