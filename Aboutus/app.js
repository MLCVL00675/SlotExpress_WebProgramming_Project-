let intro = document.querySelector('.intro');
let logo =  document.querySelector('.logo-header');
let logospan = document.querySelectorAll('.slotexpress')

window.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{

    logospan.forEach((span,idx)=>{
    setTimeout(()=>
      {
        span.classList.add('active');
      },(idx+1)*400)
    });
    setTimeout(()=>{

      logospan.forEach((span,idx)=>{
      setTimeout(()=>
        {
          span.classList.remove('active');
          span.classList.add('fade');
        },(idx+1)*50)
      });
   
    },2000)

      setTimeout(() => {
        intro.style.left = '-210vh'
      }, 2300);
 
  })
})

