let MyName:any =  document.getElementById('name');
let des:any =  document.getElementById('des');
let phone:any =  document.getElementById('phone');
let email:any =  document.getElementById('email');
let address:any =  document.getElementById('address');
let pass1:any =  document.getElementById('pass1');
let deg1:any =  document.getElementById('deg1');
let uni1:any =  document.getElementById('uni1');
let pass2:any =  document.getElementById('pass2');
let deg2:any =  document.getElementById('deg2');
let uni2:any =  document.getElementById('uni2');
let skill1:any =  document.getElementById('skill1');
let skill2:any =  document.getElementById('skill2');
let skill3:any =  document.getElementById('skill3');
let lang1:any =  document.getElementById('lang1');
let lang2:any =  document.getElementById('lang2');
let lang3:any =  document.getElementById('lang3');
let startYear:any =  document.getElementById('startYear');
let endYear:any =  document.getElementById('endYear');
let company:any =  document.getElementById('company');
let cmplocation:any =  document.getElementById('cmplocation');
let jobTitle:any =  document.getElementById('jobTitle');
let ach1:any =  document.getElementById('ach1');
let ach2:any =  document.getElementById('ach2');
let ach3:any =  document.getElementById('ach3');
let picture:any =  document.getElementById('pic');


let submit = document.getElementById('submit');
let resumeForm = document.getElementById('resumeForm');

resumeForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  localStorage.setItem("name",MyName.value);
  localStorage.setItem("des",des.value);
  localStorage.setItem("phone",phone.value);
  localStorage.setItem("email",email.value);
  localStorage.setItem("address",address.value);
  localStorage.setItem("pass1",pass1.value);
  localStorage.setItem("deg1",deg1.value);
  localStorage.setItem("uni1",uni1.value);
  localStorage.setItem("pass2",pass2.value);
  localStorage.setItem("deg2",deg2.value);
  localStorage.setItem("uni2",uni2.value);
  localStorage.setItem("skill1",skill1.value);
  localStorage.setItem("skill2",skill2.value);
  localStorage.setItem("skill3",skill3.value);
  localStorage.setItem("lang1",lang1.value);
  localStorage.setItem("lang2",lang2.value);
  localStorage.setItem("lang3",lang3.value);
  localStorage.setItem("startYear",startYear.value);
  localStorage.setItem("endYear",endYear.value);
   localStorage.setItem("company",company.value);
   localStorage.setItem("cmplocation",cmplocation.value);
   localStorage.setItem("jobTitle",jobTitle.value);
   localStorage.setItem("ach1",ach1.value);
   localStorage.setItem("ach2",ach2.value);
   localStorage.setItem("ach3",ach3.value);
   
   if(picture.files && picture.files[0]){
    let reader = new FileReader();
    reader.addEventListener("load",() => {
      let file:any = reader.result;
      localStorage.setItem("pic",file)
    })
reader.readAsDataURL(picture.files[0]);
   }

  

  window.location.href="./resume/index.html";
})

