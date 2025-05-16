// 외부 데이터 요청 관련 코드
const sliderWrapper = document.querySelector('.swiper-wrapper');

const getData = async () => {
  await fetch(
    'https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=4'
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let dataElement = '';
      data.map((item) => {
        // console.log(item);
        dataElement = `
          <div class="swiper-slide">
            <div class="slider-image">
              <img src="../images/${item.pro_img}" alt="" />
            </div>
            <div class="slider-text">
              <h4>${item.pro_name}</h4>
              <p>
                ${item.pro_desc}
              </p>
              <a href="#" class="common-btn">자세히 보기</a>
            </div>
          </div>
        `;
        sliderWrapper.insertAdjacentHTML('beforeend', dataElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

getData();
