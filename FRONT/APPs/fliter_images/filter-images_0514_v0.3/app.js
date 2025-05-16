// Common GET Request
async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    return response.json();
  });
}

async function getProducts() {
  const getProductsUrl =
    "https://www.dabipyeung.com/baexang_back/product/get_products?cate=dp&limit=8&sort=new";
  const filterWrapper = document.querySelector(".filter-images");

  try {
    const data = await getRequest(getProductsUrl);
    // console.log(data[0].pr_ttl, data[0].pr_type, data[0].pr_img);
    // const { pr_ttl, pr_type, pr_img } = data[0]; // 구조 분해 할당

    // console.log(data);

    data.map((item) => {
      const { pr_type, pr_img } = item;

      const itemElmt = `
        <div class="filter-image" data-filter="${pr_type}">
          <span><img src="${pr_img}" alt="" /></span>
        </div>
      `;

      filterWrapper.insertAdjacentHTML("beforeend", itemElmt);
    });

    const filterImages = document.querySelectorAll(".filter-image");
    getItemElmts(filterImages);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

function getItemElmts(items) {
  items.forEach((item) => {
    item.addEventListener("click", showLightBox);
  });

  const btnChars = ["all", "bag", "shoe", "watch", "camera", "headphone"];
  const btnsWrapper = document.querySelector(".filter-btns");

  btnChars.map((btnChar) => {
    const modifiedChar = btnChar.charAt(0).toUpperCase() + btnChar.slice(1);
    // charAt(): 파라미터 인덱스에 해당하는 문자 선택
    // toUpperCase(): 대문자로 변환
    // toLowerCase(): 소문자로 변환
    // slice(): 문자열을 추출 - 파라미터 인덱스부터 추출

    const btnElmt = `<button class="filter-btn" data-filter="${btnChar}">${modifiedChar}</button>`;

    btnsWrapper.insertAdjacentHTML("beforeend", btnElmt);
  });

  // 첫번째 버튼 active 클래스 추가
  const btns = document.querySelectorAll(".filter-btn");
  btns[0].classList.add("active");

  // 각각의 버튼을 클릭했을 때 이벤트 함수 정의
  function activateFilter() {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    this.classList.add("active");
    // getAttribute('a'): a라는 이름의 DOM 요소의 속성 값 가져옴
    // setAttribute('a', 'b'): a라는 이름의 DOM 요소 속성 값을 b로 지정
    const selectedBtn = this.getAttribute("data-filter");

    items.forEach((item) => {
      item.classList.add("hide");

      setTimeout(() => {
        if (
          item.getAttribute("data-filter") === selectedBtn ||
          selectedBtn === "all"
        ) {
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.classList.add("hide");
          item.classList.remove("show");
        }
      }, 100); // 시간 지연 함수: 첫번째 파라미터 = 지연할 기능 함수, 두번째 파라미터 = 지연시간(ms)
    });
  }

  // 각각의 버튼을 클릭했을 때 activateFilter 함수 실행
  btns.forEach(function (btn) {
    btn.addEventListener("click", activateFilter);
  });
} // 벗어나면 안됨

const closeBtn = document.querySelector(".close");
const lightBox = document.querySelector(".light-box");
const overlay = document.querySelector(".overlay");

function showLightBox() {
  const selectedImage = this.querySelector("img").src;
  const categoryName = this.getAttribute("data-filter");

  const lightBoxImage = document.querySelector(".light-box-image img");
  const lightBoxCategory = document.querySelector(".title p");

  lightBoxImage.setAttribute("src", selectedImage);
  lightBoxCategory.textContent = categoryName;

  lightBox.style.display = "block";
  overlay.style.display = "block";
}

function closeLightBox() {
  lightBox.style.display = "none";
  overlay.style.display = "none";
}

[closeBtn, overlay].forEach((elmt) => {
  elmt.addEventListener("click", closeLightBox);
});

getProducts();
