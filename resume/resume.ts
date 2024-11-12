
let myName = localStorage.getItem("name");
window.addEventListener("load", () => {
  
  let des = localStorage.getItem("des");
  let phone = localStorage.getItem("phone");
  let email = localStorage.getItem("email");
  let address = localStorage.getItem("address");
  let pass1 = localStorage.getItem("pass1");
  let deg1 = localStorage.getItem("deg1");
  let uni1 = localStorage.getItem("uni1");
  let pass2 = localStorage.getItem("pass2");
  let deg2 = localStorage.getItem("deg2");
  let uni2 = localStorage.getItem("uni2");
  let skill1 = localStorage.getItem("skill1");
  let skill2 = localStorage.getItem("skill2");
  let skill3 = localStorage.getItem("skill3");
  let lang1 = localStorage.getItem("lang1");
  let lang2 = localStorage.getItem("lang2");
  let lang3 = localStorage.getItem("lang3");
  let startYear = localStorage.getItem("startYear");
  let endYear = localStorage.getItem("endYear");
  let company = localStorage.getItem("company");
  let cmplocation = localStorage.getItem("cmplocation");
  let jobTitle = localStorage.getItem("jobTitle");
  let ach1 = localStorage.getItem("ach1");
  let ach2 = localStorage.getItem("ach2");
  let ach3 = localStorage.getItem("ach3");
  let pic = localStorage.getItem("pic");
  

  let myName1: any = document.getElementById("myName");
  myName1.textContent = myName;

  let ref: any = document.getElementById("ref");
  ref.textContent = des;

  let image: any = document.getElementById("resImg");
  image.src = pic;

  let phone1: any = document.getElementById("resphone");
  phone1.textContent = phone;

  let getEmail: any = document.getElementById("resemail");
  getEmail.textContent = email;

  let getAdd: any = document.getElementById("resaddress");
  getAdd.textContent = address;

  let getPass1: any = document.getElementById("resPass1");
  getPass1.textContent = pass1;

  let getDegree1: any = document.getElementById("resDeg1");
  getDegree1.textContent = deg1;

  let getUni1: any = document.getElementById("resUni1");
  getUni1.textContent = uni1;

  let getPass2: any = document.getElementById("resPass2");
  getPass2.textContent = pass2;

  let getDegree2: any = document.getElementById("resDeg2");
  getDegree2.textContent = deg2;

  let getUni2: any = document.getElementById("resUni2");
  getUni2.textContent = uni2;

  let getskill1: any = document.getElementById("resSkill1");
  getskill1.textContent = skill1;

  let getskill2: any = document.getElementById("resSkill2");
  getskill2.textContent = skill2;

  let getskill3: any = document.getElementById("resSkill3");
  getskill3.textContent = skill3;

  let getLang1: any = document.getElementById("resLang1");
  getLang1.textContent = lang1;

  let getLang2: any = document.getElementById("resLang2");
  getLang2.textContent = lang2;

  let getLang3: any = document.getElementById("resLang3");
  getLang3.textContent = lang3;

  let getstYear: any = document.getElementById("resStYear");
  getstYear.textContent = startYear;

  let getEndYear: any = document.getElementById("resEndYear");
  getEndYear.textContent = endYear;

  let getComp: any = document.getElementById("resComp");
  getComp.textContent = company;

  let getJob: any = document.getElementById("resJobTitle");
  getJob.textContent = jobTitle;

  let getAch1: any = document.getElementById("resach1");
  getAch1.textContent = ach1;

  let getAch2: any = document.getElementById("resach2");
  getAch2.textContent = ach2;

  let getAch3: any = document.getElementById("resach3");
  getAch3.textContent = ach3;
});

// ..........print button........
let printBtn = document.getElementById("printBtn");
printBtn?.addEventListener("click", () =>{
  window.print();
})


// ...........Edit button........
let editBtn = document.getElementById("editBtn");
editBtn?.addEventListener("click", () =>{
  window.history.back();
})

// ..........Share button.......

let shareBtn = document.getElementById("shareBtn");
let anc = document.getElementById("anc");
let userName;
if(myName){
  userName = myName.toLowerCase().replace(/\s+/g , "-");
}else{
  userName = "user";
}
  let baseUrl = "file:///C:/Users/LENOVO/Desktop/hacathon/Milestone5/resume/index.html"

let uniqUrl = `${baseUrl}?/${myName}`

shareBtn?.addEventListener("click",() => {
anc?.setAttribute("href",uniqUrl)
});

//.........copy button....

let copyButton = document.getElementById("copyBtn");

copyButton?.addEventListener("click",() => {
navigator.clipboard.writeText(uniqUrl).then(() => {
  alert("Copy successfully");
});
})