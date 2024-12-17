var colors = ["#38cb8e","#fbb220","#ca2030","#78002c","#084165","#0896d2"],
spinBtn = document.querySelector('#spinner'),
spinArrow = document.querySelector('#spin-arrow'),
offerBtn = document.querySelector('#si-btn'),
spinOffer = document.querySelectorAll('.spin-offer'),
    num,
    rot = 0;
    function spinToWin() { 
        spinner.classList.add('fast-fix')
        spinArrow.classList.add('fast-fix')
        spinner.style.transform = "rotate(0deg)"
        spinArrow.style.transform = "rotate(0deg)"
        setTimeout(function(){
            if(localStorage.getItem("spintowin")) {
              num = Number(localStorage.getItem("spintowin"))
            } else {
              num = Math.floor(Math.random() * 360)
            } 
            console.log(num)
            spinner.classList.remove('fast-fix')
    spinArrow.classList.remove('fast-fix')
    spinner.style.pointerEvents = "none"
    rot = (360*3) + num
    spinner.style.transform = "rotate("+(rot)+"deg)"
    spinArrow.style.transform = "rotate("+(-rot)+"deg)"

    setTimeout(function(){
        if(num >= 0 && num < 60) {
          spinOffer[5].style.background = colors[5];  
          spinOffer[5].style.display = "inline-block";

          offerBtn.style.opacity = "1";
          offerBtn.style.transition= "1.5s";
          localStorage.setItem("spintowin", num)
        }
        if(num >= 60 && num < 120) {
          spinOffer[4].style.background = colors[4];  
          spinOffer[4].style.display = "inline-block";
      
          offerBtn.style.opacity = "1";
          offerBtn.style.transition= "1.5s";
          localStorage.setItem("spintowin", num)
        }
        if(num >= 120 && num < 180) {
          spinner.style.pointerEvents = "all"
        }
        if(num >= 180 && num < 240) {
          spinOffer[2].style.background = colors[2];  
          spinOffer[2].style.display = "inline-block";
          offerBtn.style.opacity = "1";
          offerBtn.style.transition= "1.5s";
          localStorage.setItem("spintowin", num)
        }
        if(num >= 240 && num < 300) {
          spinOffer[1].style.background = colors[1];  
          spinOffer[1].style.display = "inline-block";
          offerBtn.style.opacity = "1";
          offerBtn.style.transition= "1.5s";
          localStorage.setItem("spintowin", num)
        }
        if(num >= 300 && num < 360) {
          spinner.style.pointerEvents = "all"
        }
      }, 3000)
    }, 250)
  }
  
  spinBtn.addEventListener('click', function(){   
    spinToWin()   
  })
  
  window.onload = function(){
    if(localStorage.getItem("spintowin")) {
      setTimeout(function(){
        spinBtn.click()  
      }, 1000)
    }
  }