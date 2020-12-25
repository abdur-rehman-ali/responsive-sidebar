const app = () => {
    let hamburger = document.querySelector('.hamburger');
    let nav = document.querySelector('.nav-links');
 
    console.log(hamburger);
    console.log(nav);

    hamburger.addEventListener('click',()=> {
        
        nav.classList.toggle('nav-active');
        hamburger.classList.toggle('cross');
    })
  
   
}
app();
