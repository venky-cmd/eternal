

function scrollAppear() {
  var introText = document.querySelector('.side-text');
  var sideImage = document.querySelector('.sideImage');
  var introPosition = introText.getBoundingClientRect().top;
  var imagePosition = sideImage.getBoundingClientRect().top;
  
  var screenPosition = window.innerHeight / 1.2;

  if(introPosition < screenPosition) {
    introText.classList.add('side-text-appear');
  }
  if(imagePosition < screenPosition) {
    sideImage.classList.add('sideImage-appear');
  }
}

window.addEventListener('scroll', scrollAppear);  


var i = 2;
function switchTAB() {
	var x = document.getElementById("list-switch");
	if(i%2 == 0) {
		document.getElementById("list-switch").style= "display: grid; height: 50vh; margin-left: 5%;";
		document.getElementById("search-switch").style= "display: block; margin-left: 5%;";
	}else {
		document.getElementById("list-switch").style= "display: none;";
		document.getElementById("search-switch").style= "display: none;";
	}
	i++;
}

// For LOGIN
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var a = document.getElementById("log");
var b = document.getElementById("reg");
var w = document.getElementById("other");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
  w.style.visibility = "hidden";
  b.style.color = "#fff";
  a.style.color = "#000";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
  w.style.visibility = "visible";
  a.style.color = "#fff";
  b.style.color = "#000";
}
  
// CheckBox Function
function goFurther(){
  if (document.getElementById("chkAgree").checked == true) {
    document.getElementById('btnSubmit').style = 'background: linear-gradient(to right, #FA4B37, #DF2771);';
  }
  else{
    document.getElementById('btnSubmit').style = 'background: lightgray;';
  }
}

function google() {
  	window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
}

// QUIZ Page
function quizt(frame) {
  document.getElementById('f1').style='display: none;';
  document.getElementById('f2').style='display: none;';
  document.getElementById('f3').style='display: none;';
  document.getElementById('f4').style='display: none;';
  document.getElementById('f5').style='display: none;';
  document.getElementById('f6').style='display: none;';
  document.getElementById('f7').style='display: none;';
  document.getElementById('f8').style='display: none;';
  document.getElementById('f9').style='display: none;';
  document.getElementById('f10').style='display: none;';
  document.getElementById('f11').style='display: none;';
  if(frame == 1) document.getElementById('f1').style = 'display: block';
  else if(frame == 2) document.getElementById('f2').style = 'display: block';
  else if(frame == 3) document.getElementById('f3').style = 'display: block';
  else if(frame == 4) document.getElementById('f4').style = 'display: block';
  else if(frame == 5) document.getElementById('f5').style = 'display: block';
  else if(frame == 6) document.getElementById('f6').style = 'display: block';
  else if(frame == 7) document.getElementById('f7').style = 'display: block';
  else if(frame == 8) document.getElementById('f8').style = 'display: block';
  else if(frame == 9) document.getElementById('f9').style = 'display: block';
  else if(frame == 10) document.getElementById('f10').style = 'display: block';
  else if(frame == 11) document.getElementById('f11').style = 'display: block'; 
  else alert('error');
}

function startquiz() {
  document.getElementById('title').style = 'display: none;'; 

  document.getElementById('panel').style = 'display: inline-flex;'; 
  document.getElementById('left').style = 'display: block;'; 
  document.getElementById('right').style = 'display: block;'; 
}
function searchdisplay() {
  document.getElementById('searchpanel').style.display="block";
}

function display(n) {
  var img1 = document.getElementById('img1');
  var img2 = document.getElementById('img2');
  var img3 = document.getElementById('img3');
  var img4 = document.getElementById('img4');
  var s1 = document.getElementById('s1');
  var s2 = document.getElementById('s2');
  var s3 = document.getElementById('s3');
  var s4 = document.getElementById('s4');

  img1.style = 'display: none;';
  img2.style = 'display: none;';
  img3.style = 'display: none;';
  img4.style = 'display: none;';
  s1.style = 'background: #DF2771; color: #FFF;';
  s2.style = 'background: #DF2771; color: #FFF;';
  s3.style = 'background: #DF2771; color: #FFF;';
  s4.style = 'background: #DF2771; color: #FFF;';

  if(n==1) {
    img1.style = 'display: block;';
    s1.style = 'background: #E5E8EF; color: #DF2771;';
  }
  if(n==2) {
    img2.style = 'display: block;';
    s2.style = 'background: #E5E8EF; color: #DF2771;';
  }
  if(n==3) {
    img3.style = 'display: block;';
    s3.style = 'background: #E5E8EF; color: #DF2771;';
  }
  if(n==4) {
    img4.style = 'display: block;';
    s4.style = 'background: #E5E8EF; color: #DF2771;';
  } 
}


function sideMenu(side) {
  var menu = document.getElementById('side-menu');
  if(side==0) {
    menu.style = 'transform: translateX(0vh); position:fixed;';
  }
  else {
    menu.style = 'transform: translateX(-100%);';
  }
  side++;
}

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

// Auto advance slides every 4 seconds
setInterval(() => {
    changeSlide(1);
}, 4000);

// Next/previous controls
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Function to download sample papers
function downloadSamplePaper(examType, year) {
    // Get the button element
    const button = event.currentTarget;
    const originalContent = button.innerHTML;
    
    // Add loading state
    button.classList.add('download-loading');
    button.innerHTML = '<span>Downloading...</span>';
    
    try {
        // Create a link element
        const link = document.createElement('a');
        
        // Set the file path based on exam type and year
        const filePath = `samplePapers/${examType.toLowerCase()}/${examType.toLowerCase()}-${year}.pdf`;
        link.href = filePath;
        
        // Set suggested filename for download
        link.download = `${examType}-Sample-Papers-${year}.pdf`;
        
        // Add link to document
        document.body.appendChild(link);
        
        // Trigger download
        link.click();
        
        // Remove link from document
        document.body.removeChild(link);
        
        // Show success message
        setTimeout(() => {
            button.classList.remove('download-loading');
            button.innerHTML = originalContent;
            
            // Create and show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'download-message success';
            successMsg.textContent = `${examType} ${year} papers download started!`;
            document.body.appendChild(successMsg);
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        }, 1000);
        
    } catch (error) {
        console.error('Download error:', error);
        
        // Reset button state
        button.classList.remove('download-loading');
        button.innerHTML = originalContent;
        
        // Show error message
        const errorMsg = document.createElement('div');
        errorMsg.className = 'download-message error';
        errorMsg.textContent = 'Download failed. Please try again.';
        document.body.appendChild(errorMsg);
        
        // Remove error message after 3 seconds
        setTimeout(() => {
            errorMsg.remove();
        }, 3000);
    }
}

// Function to show year selection modal
function showYearSelection(examType) {
    const modal = document.createElement('div');
    modal.className = 'year-selection-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Select Year for ${examType} Papers</h3>
            <div class="year-grid">
                ${generateYearButtons(examType)}
            </div>
            <button class="close-modal" onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Function to generate year buttons
function generateYearButtons(examType) {
    const currentYear = new Date().getFullYear();
    let buttons = '';
    
    // Generate buttons from 2013 to current year
    for (let year = 2013; year <= currentYear; year++) {
        buttons += `
            <button onclick="downloadSamplePaper('${examType}', ${year})" class="year-btn">
                ${year}
            </button>
        `;
    }
    
    return buttons;
}