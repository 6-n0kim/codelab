// 외부 데이터 요청 관련 코드
const getData = async () => {
  await fetch('https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=4')
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
}

getData();

