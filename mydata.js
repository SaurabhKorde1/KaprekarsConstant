function myFunction() {
  let value = document.getElementById("data").value;
  recursion(value);
}

recursion = (num) => {
  let num1 = ("" + num).length;
  // find how many digit of number entered by user
  if (num <= 0 || num1 != 4) {
    let val = `Please Enter Four Digit correct number`;
    document.getElementById(
      "opdata"
    ).innerHTML = `Please Enter Four Digit correct number.`;
    console.log("Please Enter Four Digit correct number");
    return val;
  } else if (num == 6174) {
    document.getElementById("opdata").innerHTML += `Final Value:-${num}.`;
    console.log("Final Value:-" + num);
    return num;
  } else {
    let arr = []; // Make an Array
    let convertToStr = num.toString(); // Number Convert to String Format
    let pushEleArr = arr.push(convertToStr); //Push element inside the arr
    let splitArr = arr[0].split(""); // split array element ['3','2','3','4']
    let sortVal = splitArr.sort(); // Sort an array in assending order ['2','3','3','4']
    let assending = sortVal.join(""); // join assending value 2334
    let splitValDes = sortVal.reverse(); // Sort an array in dessending order using reverse function ['4','3','3','2']
    let desending = splitValDes.join(""); // join dessending value 4332
    console.log("Assending No." + assending);
    document.getElementById(
      "opdata"
    ).innerHTML += `Assending No. ${assending}. <br>`;
    console.log("Dessending No." + desending);
    document.getElementById(
      "opdata"
    ).innerHTML += `Dessending No. ${desending}. <br>`;
    let difference = desending - assending; //take difference between both
    console.log("Difference " + difference);
    document.getElementById(
      "opdata"
    ).innerHTML += `Difference. ${difference}. <br>`;
    num = difference; //put ther difference in num
    return recursion(num);
  }
};
