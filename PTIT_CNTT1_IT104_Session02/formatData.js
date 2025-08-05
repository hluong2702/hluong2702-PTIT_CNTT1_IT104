/**
 * @description Hàm định dạng thời gian
 * @param {*} currentDate chuỗi thời gian cần định dạng
 * @returns chuỗi thời gian cần định dạng 
 */

const formatDate = (currentDate, format = "DD/MM/YYYY") => {
  const toDay = new Date(currentDate);

  let day = toDay.getDate();
  if (day > 0 && day < 10) {
    day = `0${day}`;
  }

  let month = toDay.getMonth() + 1;
  if (month > 0 && month < 10) {
    month = `0${month}`;
  }

  const year = toDay.getFullYear();

  if (format === "YYYY-MM-DD") {
    return `${year}-${month}-${day}`;
  }

  return `${day}/${month}/${year}`;
};

export default formatDate;

