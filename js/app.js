window.onload = function(){ 
// youtube video popup
var videoButtons = document.getElementsByClassName('video-button')
var popup = document.getElementById('popup-wrapper')

// document.querySelector('#social-media').addEventListener('click', function(event){
//     if(event.target.matches('.video-button')){
//         var videoId = this.getAttribute("data-video-id");
//          var videoPopup = document.getElementById("video-popup");

//          videoPopup.innerHTML = '<iframe width="100%" height="360" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
//          popup.classList.add('show');

//     }
// })

for (var i = 0; i < videoButtons.length; i++) {
  videoButtons[i].onclick = function (eve) {
    var videoId = this.getAttribute('data-video-id')
    var videoPopup = document.getElementById('video-popup')

    videoPopup.innerHTML =
      '<iframe width="100%" height="360" src="https://www.youtube.com/embed/' +
      videoId +
      '" frameborder="0" allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    popup.classList.add('show')
  }
  //   videoButtons[i].addEventListener('click', function (event) {
  //   })
}
let clsbtn = document.getElementById('close')
clsbtn.onclick = function () {
  popup.classList.remove('show')
}

window.onclick = function (event) {
  if (event.target == popup) {
    popup.classList.remove('show')
  }
}
// youtube video popup end

var player,
  card = document.querySelector('.card'),
  video = document.querySelector('.card-video')

// Shine effect
card.onmousemove = function (e) {
  const x = e.pageX - card.offsetLeft
  const y = e.pageY - card.offsetTop

  card.style.setProperty('--x', x + 'px')
  card.style.setProperty('--y', y + 'px')
}
window.onload = function () {
  var imgs = document.querySelectorAll('.card-video img')
  var divs = document.querySelectorAll('.card')
  for (var i = 0; i < imgs.length; i++) {
    //  console.log(divs[i]);
    divs[i].style.backgroundImage = 'url(' + imgs[i].src + ')'
  }
}

let ytviditem = [
  {
    id: 1,
    datavideoid: '5QoVTIlm8Do',
    cardthumbImg: 'image-452.png',
    sharePlatform: 'Facebook',
    name: 'Prema',
    profiledesc: "Facebook's Professional Profiles",
  },
  {
    id: 2,
    datavideoid: 'zM3rDvfx7Pg',
    cardthumbImg: 'image-452.png',
    sharePlatform: 'Facebook',
    name: 'Prema',
    profiledesc: "Facebook's Professional Profiles",
  },
  {
    id: 3,
    datavideoid: 'DESJSNxhq8k',
    cardthumbImg: 'image-452.png',
    sharePlatform: 'Facebook',
    name: 'Prema',
    profiledesc: "Facebook's Professional Profiles",
  },
  {
    id: 4,
    datavideoid: '5QoVTIlm8Do',
    cardthumbImg: 'image-452.png',
    sharePlatform: 'Facebook',
    name: 'Prema',
    profiledesc: "Facebook's Professional Profiles",
  },
  {
    id: 5,
    datavideoid: '378R-xBqTf4',
    cardthumbImg: 'image-452.png',
    sharePlatform: 'Facebook',
    name: 'Prema',
    profiledesc: "Facebook's Professional Profiles",
  },
  {
    id: 6,
    datavideoid: '5QoVTIlm8Do',
    cardthumbImg: 'image-452.png',
    sharePlatform: 'Facebook',
    name: 'Prema',
    profiledesc: "Facebook's Professional Profiles",
  },
  {
    id: 7,
    datavideoid: '5QoVTIlm8Do',
    cardthumbImg: 'image-452.png',
    sharePlatform: 'Facebook',
    name: 'Prema',
    profiledesc: "Facebook's Professional Profiles",
  },
  {
    id: 8,
    datavideoid: '5QoVTIlm8Do',
    cardthumbImg: 'image-452.png',
    sharePlatform: 'Facebook',
    name: 'Prema',
    profiledesc: "Facebook's Professional Profiles",
  },
]

// option 1
// var loadmorebtn = document.getElementById('loadmore');
// var itemcontainer = document.getElementsByClassName('thumbimg')[0];
// let curindx = 0;
// var batchsize = 2;

// function loadData(){
//   let nextitem = ytviditem.slice(curindx, curindx + batchsize);
//     var thumbHtml = '';

//     nextitem.forEach(function(item){
//         //    console.log(item.datavideoid);
//     thumbHtml += `<div class="thumbnail">
//     <div class="card video-button" data-video-id="${item.datavideoid}">
//         <div class="card-play"></div>
//         <div class="card-video">
//             <img src="img/${item.cardthumbImg}" class="card-img" alt="">
//         </div>
//     </div>
//     <p class="sub-txt">${item.sharePlatform}</p>
//     <div class="di-flex icon-txt">
//         <div class="thumb-icon">
//             <a href='#' class="playBut sm video-button" data-video-id="${item.datavideoid}">
//                 <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
//                     xmlns:xlink="http://www.w3.org/1999/xlink"
//                     xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px"
//                     y="0px" width="38px" height="38px" viewBox="0 0 213.7 213.7"
//                     enable-background="new 0 0 213.7 213.7" xml:space="preserve">
//                     <polygon class='triangle' id="XMLID_18_" fill="none" stroke-width="10"
//                         stroke-linecap="round" stroke-linejoin="round"
//                         stroke-miterlimit="10" points="
//     73.5,62.5 128.5,95.8 73.5,129.1 " />
//                 </svg>
//             </a>
//         </div>
//         <div class="thumbTxt">
//             <p class="thumbNam">${item.name}</p>
//             <p class="thumbsmltxt">${item.profiledesc}</p>
//         </div>
//     </div>
// </div>`

//     curindx += batchsize

//         itemcontainer.innerHTML += thumbHtml;

//         if(curindx >= ytviditem.length){
//             loadmorebtn.disabled = true
//          }
//     })

// }
// loadmorebtn.addEventListener('click', function(){
//     loadData()
// })
// loadData()

// option 2
let itemloaded = 0
var loadmorebtn = document.getElementById('loadmore')

function loadMoreitem() {
  // get the container item added in the container div
  const container = document.getElementById('thumbimg')

  // loop through the next 3 item in the array
  for (var i = itemloaded; i < itemloaded + 3; i++) {
    if (i >= ytviditem.length) {
      // if there are no more items to load, break out of the loop
      break
    }

    // create the HTML for the string of item
    const htmlThumb = `<div class="thumbnail">
        <div class="card video-button" data-video-id="${ytviditem[i].datavideoid}">
            <div class="card-play"></div>
            <div class="card-video">
                <img src="img/${ytviditem[i].cardthumbImg}" class="card-img" alt="">
            </div>
        </div>
        <p class="sub-txt">${ytviditem[i].sharePlatform}</p>
        <div class="di-flex icon-txt">
            <div class="thumb-icon">
                <a href='#' class="playBut sm video-button" data-video-id="${ytviditem[i].datavideoid}">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px"
                        y="0px" width="38px" height="38px" viewBox="0 0 213.7 213.7"
                        enable-background="new 0 0 213.7 213.7" xml:space="preserve">
                        <polygon class='triangle' id="XMLID_18_" fill="none" stroke-width="10"
                            stroke-linecap="round" stroke-linejoin="round"
                            stroke-miterlimit="10" points="
        73.5,62.5 128.5,95.8 73.5,129.1 " />
                    </svg>
                </a>
            </div>
            <div class="thumbTxt">
                <p class="thumbNam">${ytviditem[i].name}</p>
                <p class="thumbsmltxt">${ytviditem[i].profiledesc}</p>
            </div>
        </div>
    </div>`

    // append the item to the HTML container
    container.innerHTML += htmlThumb
  }
  // update the items to be loaded into the conateiner
  itemloaded += 3

  // disabled the load more button
  if (itemloaded > ytviditem.length) {
    loadmorebtn.classList.add('inactive')
  }
  // console.log(ytviditem.length);
}

// attach the event listenr to the button for show the load more item
loadmorebtn.addEventListener('click', loadMoreitem)

loadMoreitem()
};
/* script use for job listing */
//  JOB list tabs
// [Biddable Performance
// Business Alliance
// Client Success
// Consulting (Product)
// Creative
// Data Solutions
// Design
// Digital Planning & Strategy
// Google Analytics
// HR
// IT
// Legal
// Marcom
// Media Buying
// PR
// Programmatic Buying
// QA and PMO
// SEO
// Social
// Strategic Partnerships
// showJobsBasedOnDepartment('Account & Finance')
// showJobsBasedOnDepartment('Ad Management & Measurement')
// showJobsBasedOnDepartment('Admin')
// showJobsBasedOnDepartment('Adobe')]

var jobtabscnt = ['ALL', 'Accounts & Finance','Admin','Adobe', 'Business Alliance' , 'Client Success', 'Ad Management & Measurement','Data Solutions', 'QA and PMO', 'Social'];

var jobdetailscnt = {
    'Accounts & Finance':{
        position: 'Jr. Executive ',
        location : 'Navi Mumbai, Maharashtra',
        jobtype : ['Full Time', 'Design'],
    },
    'Admin':{
        position: 'Programmatic Buying',
        location : 'Navi Mumbai, Maharashtra',
        jobtype : ['Full Time','Front End']
    },
    'Adobe':{
        position: 'Programmatic Buying',
        location : 'Navi Mumbai, Maharashtra',
        jobtype : ['Full Time','Front End']
    },
    'Business Alliance':{
        position: 'MT - Client Success',
        location : 'Navi Mumbai, Maharashtra',
        jobtype : ['SEM','AdWords Management']
    },
    'Client Success':{
        position: 'Google Tag Manager',
        location : 'Navi Mumbai, Maharashtra',
        jobtype : ['Full Time','Paid Listing Ads Management']
    },
    'Ad Management & Measurement':{
        position: 'Ad Tag Manager',
        location : 'Navi Mumbai, Maharashtra',
        jobtype : ['SEO Services', ' Website SEO Audit']
    },
    'Data Solutions':{
        position: 'Data Solutions Manager',
        location : 'Navi Mumbai, Maharashtra',
        jobtype : ['SEO Services', ' Website SEO Audit']
    },
    'QA and PMO':{
        position: 'QA and PMO',
        location : 'Navi Mumbai, Maharashtra',
        jobtype : ['SEO Services', ' Website SEO Audit']
    },
    'Social':{
        position: 'Social',
        location : 'Navi Mumbai, Maharashtra',
        jobtype : ['SEO Services', ' Website SEO Audit']
    },
    
}

var jobtabs = document.getElementById('joblist');
var jobTabContent = document.getElementById('jobcard')

// option 1 start

// jobtabscnt.forEach( function(tabitem){

//     var tablistItem = document.createElement('li');
//     tablistItem.innerHTML = tabitem;   
//     tablistItem.onclick = function(){
//         actTabs = document.querySelectorAll('.act');
//         actTabs.forEach( function (actab) {
//             actab.classList.remove('act')
//         })
//         tablistItem.classList.add('act')
//         // this.classList.toggle('act')
//         if(tabitem === 'ALL'){
//             showTabAllcnt()
            
//         }else{
//             showTabcnt(tabitem)           
            
//         }        
//     }
//     jobtabs.appendChild(tablistItem);
// });

// option 1 end

// option 2 start

// var nextBtn = document.getElementById('nextBtn');
// var maxTab = 4;
// var currentTab = 0;

// jobtabscnt.forEach(function(tabitem){
//     var tabListItme = document.createElement('li');

//     tabListItme.innerHTML = tabitem;
//     if(currentTab >= maxTab){
//         tabListItme.classList.add('hidden')
//     }
//     tabListItme.onclick = ()=>{
//         var actTabs = document.querySelectorAll('.act');
//         actTabs.forEach( (curactTab)=>{
//             curactTab.classList.remove('act')
//         })
//         tabListItme.classList.add('act')
//         if(tabitem === 'All'){
//             showTabAllcnt()
//         }else{
//             showTabcnt(tabitem)
//         }
//     }
//     // console.log("Tab List", tabListItme);
//     jobtabs.appendChild(tabListItme);

// })

// nextBtn.onclick = ()=>{
//     var tablistItems = document.querySelectorAll('#joblist li');
//     var nextTab = 0;
//     for(var i = 0; i >= tablistItems.length; i++){
//         if(!tablistItems[i].classList.contains('hidden')){
//             nextTab = i + maxTab;
//             if(nextTab >= tablistItems.length){
//                 nextTab = 0;
//             }
//         }
//     }
//     for(var i =0; i < tablistItems.length; i++){
//         tablistItems[i].classList.add('hidden')
//         if(i >= nextTab && i < nextTab + maxTab){
//             tablistItems[i].classList.remove('hidden')
//         }
//     }

// }

var nextBtn = document.getElementById('nextBtn');
var maxTab = 6;
var currTab = 0;
var nextTab = 6;

jobtabscnt.forEach( function(tabitem){
    var tablistItem = document.createElement('li');
    tablistItem.innerHTML = tabitem;   
    if(currTab >= maxTab) {
        tablistItem.classList.add('hidden');
    }
    tablistItem.onclick = function(){
        var actTabs = document.querySelectorAll('.act');
        actTabs.forEach( function (actab) {
            actab.classList.remove('act');
        });
        tablistItem.classList.add('act');
        if(tabitem === 'ALL'){
            showTabAllcnt();
        }else{
            showTabcnt(tabitem);
        }        
    };
    jobtabs.appendChild(tablistItem);
    currTab++;
});


// for the show by set of after 4th item on click next
// nextBtn.onclick = function(){
//     var tabListItems = document.querySelectorAll('#joblist li');
//     for(var i = 0; i < tabListItems.length; i++) {
//         if(i >= nextTab && i < nextTab + maxTab ) {
//             tabListItems[i].classList.remove('hidden');
//         } else {
//             tabListItems[i].classList.add('hidden');
//         }
//     }
//     nextTab += maxTab;
//     if(nextTab >= tabListItems.length) {
//         nextTab = 0;
//     }
// };

// for the show by one or display one by one on click next
// nextBtn.onclick = function(){
//     var tabListItems = document.querySelectorAll('#joblist li');
//     for(var i = 0; i < tabListItems.length; i++) {
//         if(i === nextTab ) {
//             tabListItems[i].classList.remove('hidden');
//         } else {
//             tabListItems[i].classList.add('hidden');
//         }
//     }
//     nextTab++;
//     if(nextTab >= tabListItems.length) {
//         nextTab = 0;
//     }
// };

nextBtn.onclick = function(){
    var tabListItems = document.querySelectorAll('#joblist li');
    jobtabs.classList.add('shift-left');
    setTimeout(function(){
        // tabListItems[0].classList.add('hidden');
        tabListItems[nextTab].classList.remove('hidden');
        jobtabs.classList.remove('shift-left');
        nextTab++;
        if(nextTab >= tabListItems.length) {
            nextTab = maxTab;
        }
    }, 500);
};



function showTabcnt(jbtab){
    var tabCntTab = jobdetailscnt[jbtab];
    jobtype = "";
    tabCntTab.jobtype.forEach( (subjobtype)=>{
        jobtype += `<li><a href="#">${subjobtype}</a></li>`
    })

    jobTabContent.innerHTML = `
    <dl>
        <dt>${tabCntTab.position}</dt>
        <dd>
            <p>${tabCntTab.location}</p>
            <ul>
                ${jobtype}               
            </ul>
        </dd>
    </dl>
    `
}

function showTabAllcnt(){
    var allTabcnt = "";
    for(var tabitem in jobdetailscnt){
        var tabCntTab = jobdetailscnt[tabitem];
        var jobtype ='';
        tabCntTab.jobtype.forEach( function(subjobtype){
            jobtype+= `<li><a href="#">${subjobtype}</a></li>` 
        })
        allTabcnt+= `
        <dl>
        <dt>${jobdetailscnt[tabitem].position}</dt>
        <dd>
            <p>${jobdetailscnt[tabitem].location}</p>
            <ul>
                ${jobtype}       
            </ul>
        </dd>
    </dl>
        `
    }
    jobTabContent.innerHTML = allTabcnt;
    // jobTabContent.innerHTML = 
}




// function showTabcnt(jbtab){
//     var tabCntTab = jobdetailscnt[jbtab];
//     jobTabContent.innerHTML = `
//     <dl>
//         <dt>${tabCntTab.position}</dt>
//         <dd>
//             <p>${tabCntTab.location}</p>
//             <ul>
//                 <li><a href="#">${tabCntTab.jobtype}</a></li>                
//             </ul>
//         </dd>
//     </dl>
//     `
// }

// function showTabAllcnt(){
//     var allTabcnt = "";
//     for(tabitem in jobdetailscnt){
//         allTabcnt+= `
//         <dl>
//         <dt>${jobdetailscnt[tabitem].position}</dt>
//         <dd>
//             <p>${jobdetailscnt[tabitem].location}</p>
//             <ul>
//                 <li><a href="#">${jobdetailscnt[tabitem].jobtype}</a></li>                
//             </ul>
//         </dd>
//     </dl>
//         `
//     }
//     jobTabContent.innerHTML = allTabcnt;
//     // jobTabContent.innerHTML = 
// }

