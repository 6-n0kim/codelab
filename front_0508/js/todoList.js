// 전역변수 설정
const section2 = document.querySelector('.section2');
const calendar = document.querySelector('.calendar');




makeCal();
function makeCal() {

    let monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let last = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let currentDate = new Date();
    // 현재 년 월 일
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDay();
    let startDay = new Date(currentYear, currentMonth, 1).getDay() + 1;
    let lastDay = last[currentMonth];

    let totalweek = 5;


    // 현재 월 표시
    let currentMonthName = monthNames[currentMonth];
    section2.insertAdjacentHTML('afterbegin', `<h1>${currentMonthName}</h1>`);

    // 요일 표시
    let calendarHtml = "<table border='1'><tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr>"

    let day = 1;
    for (let i = 0; i < 5; i++) {
        calendarHtml += "<tr>"
        for (let k = 0; k < 7; k++) {
            if (i == 0 && startDay > k + 1 || day > lastDay) {
                calendarHtml += "<th> &nbsp </th>";
            }
            else {
                calendarHtml += `<th> ${day} </th>`;
                day++;
            }
        }
    }
    calendar.insertAdjacentHTML('afterbegin', calendarHtml);

}