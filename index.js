
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});


// // let myLeads = `["www.abhishekchavda.com"]`
// // myLeads = JSON.parse(myLeads)
// // myLeads.push("www.abhishek.com")
// // myLeads = JSON.stringify(myLeads)
// // console.log(typeof myLeads )

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const  inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// // localStorage.setItem("myLeads", "www.abhishekchavda.com") //key-value
// // let lead = localStorage.getItem("myLeads")
// // console.log(lead)
// //localStorage.clear()

// //console.log(localStorage.getItem("myLeads")); 
// const deleteBtn = document.getElementById("delete-btn")
// const leadsFromLocalStrorage = JSON.parse( localStorage.getItem("myLeads") )
// //console.log(leadsFromLocalStorage)
// const tabBtn = document.getElementById("tab-btn")

// if (leadsFromLocalStrorage){
//   myLeads = leadsFromLocalStrorage
//   render(myLeads)
// }

// // const tabs = [
// //   {url: "https://github.com/abhishekchavda/"}
// // ]

// tabBtn.addEventListener("click", function(){
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//     //console.log(tabs)
//     myLeads.push(tabs[0].url)
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
//   })
//   // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//   //   let activeTab = tabs[0]
//   //   let activeTabId = activeTab.id
//   // })
//   //console.log(tabs[0].url)
// })

// function render(leads) {
//   let listItems = ""
//   for (let i = 0; i < leads.length; i++) {
//     // console.log(myLeads[i])
//     //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

//     //listItems += "<li> <a  target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
//     //template strings/literals
//     listItems += `
//             <li> 
//               <a  target='_blank' href='${leads[i]}'>
//                  ${leads[i]}
//               </a>
//             </li>
//     `

//     // //create element
//     // const li = document.createElement("li")

//     // //set text content
//     // li.textContent = myLeads[i]

//     // //append to ul
//     // Uint8ClampedArray.append(li)
//   }
//   ulEl.innerHTML = listItems;
// }

// deleteBtn.addEventListener("dblclick", function(){
//   //console.log("double click!")
//   localStorage.clear()
//   myLeads = []
//   render(myLeads)
// })

// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     inputBtn.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
// })



// //truthy
// //falsy - false,0,"",null,undefined,NaN

