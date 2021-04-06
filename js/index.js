// docs[0]=”Bank regulation: Bank regulation is a form of government regulation which
//subjects banks to certain requirements”
// docs[1]=”Banking crisis: When banks suffer a sudden rush of withdrawals by depositors,
// this is called a bank run”

let docs = [
  "Bank regulation: Bank regulation is a form of government regulation which subjects banks to certain requirements",
  "Banking crisis: When banks suffer a sudden rush of withdrawals by depositors,this is called a bank run",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis repudiandae accusamus atque ab eos inventore numquam esse sapiente pariatur aliquid.  ",
];

// search function

const search = (item, arr, ketQua) => {
  return arr.forEach((d, index) => {
    let copyDocs = d.toLowerCase();
    let copyItem = item.toLowerCase();

    let check = copyDocs.includes(copyItem);

    if (check === true) {
      return ketQua.push(index);
    }
  });
};

let result = [];
search("when", docs, result);
// console.log(result);

// ====================================================

// Display docs on client
let displayDoc = "";
const viewDocs = docs.map((item, index) => {
  return (displayDoc += `<div class="d-block mx-1 my-1 ">
  <li class="text-decoration-none  my-2 px-3 py-5 d-flex align-items-center rounded">
    <span class="docs"> <span style="color: #fd8925;">${index}</span>: ${item} </span>;
  </li>
</div>`);
});
document.getElementById("list").innerHTML = displayDoc;

// input

document
  .getElementById("search-bar")
  .addEventListener("keyup", function (event) {
    let keyword = event.target.value;
    let viewResult = [];
    search(keyword, docs, viewResult);
    console.log(viewResult);
    let displayResult = "";
    if (!keyword) {
      document.getElementById("result").innerHTML = "";
    } else {
      viewResult.map((item) => {
        return (displayResult += `<div class="col-4 text-center" ><p style="font-weight: bold; font-size: 35px" class="p-result">${item}</p></div> `);
      });
      document.getElementById("result").innerHTML = displayResult;
    }
  });
