const html = document.querySelector('.images-grid')
const hiddenText= document.querySelector('#hiddenText')
const tech = document.querySelector('#technologies')


tech.onclick = function(e){
    
    const techVariable = e.target.id;
   
    if(techVariable === "html"){
        hiddenText.innerHTML="<u>HTML</u> <br> I had brief experience with HTML during my studies. However, over the last few months of self study, I have gained lots of useful knowledge. I have put these skills to the test by creating multiple websites, all of varying complexity."
        hiddenText.style.display='block'
    }
    else if(techVariable === "css"){
        hiddenText.innerHTML="<u>CSS</u> <br> Similar to HTML, I believe I have a good understanding of CSS and how it functions. I have used CSS on all of my self built projects and believe with each project I am getting a deeper understanding of it. I also have strong understandings of both Flexbox and Grid."
        hiddenText.style.display='block'
    }
    else if(techVariable === "js"){
        hiddenText.innerHTML="<u>HTML</u> <br> Because of my regular usage of Java, migrating over to Javascript was not as challenging as I had first imagined. I believe I have all the fundamentals and continue to learn every day of using it."
        hiddenText.style.display='block'
    }
    else if(techVariable === "react"){
        hiddenText.innerHTML="<u>React</u> <br>React is my most recent skill I am learning, I believe I have a basic understanding of the framework, however due to my lack of experience by no means am I an expert. I am learning new things every day with React"
        hiddenText.style.display='block'
    }
    else if(techVariable === "java"){
        hiddenText.innerHTML="<u>Java</u> <br> Java is the language I have the most experience with as it was the main lanugage I used during my studies at university. Therefore migrating over from Java to Javascript was fairly straightforward as I had already gained all the programming fundamentals and OOP principles prior to my web development learning. "
        hiddenText.style.display='block'
    }
    else if(techVariable === "sass"){
        hiddenText.innerHTML="<u>Sass</u> <br>I have little experience with Sass however I have used it in small doses throughout my web development career and I do understand its benefits. Due to my lack of experience however, I do tend to feel more comfortable with standard CSS."
        hiddenText.style.display='block'
    }
    else if(techVariable === "bootstrap"){
        hiddenText.innerHTML="<u>Bootstrap</u> <br> Bootstrap is a technology I have recently picked up and I am so glad I did. It has made my frontend development life so much easier. Prior to learning bootstrap I was using media queries for my responsive mobile first websites."
        hiddenText.style.display='block'
    }
    else if(techVariable ==='hiddenText'){
        hiddenText.style.display='none'
    }
}
