/**
 * Biblioteca de manipulação de datas
 * @author Davi Souto
 * @since 04/09/2018
 */

/**
 * Retorna a data atual
 */
export const getCurrentDate = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  if(dd<10) dd = '0' + dd;
  if(mm<10) mm = '0' + mm;

  today = mm + '/' + dd + '/' + yyyy;

  return today;
}

/**
 * Retorna a data e hora atual
 */
export const getCurrentDateTime = () => {
  var today = new Date();

  var hh = today.getHours();
  var mm = today.getMinutes();
  var ss = today.getSeconds();

  if(hh<10) hh = '0' + hh;
  if(mm<10) mm = '0' + mm;
  if(ss<10) ss = '0' + ss;

  // curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	// curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	// curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),

  today = getCurrentDate() + " " + hh + ":" + mm + ":" + ss;

  return today;
}
