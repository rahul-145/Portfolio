/**=====================typing animation================= */
var typed = new Typed(".typing", {
    strings: ["", "Data Analyst", "Business Analyst", "SEO Intern", "Teaching Assistant", "Residence Don", "Web Developer", "Service Center Assistant"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

/**=====================Aside================= */
const nav = document.querySelector(".nav"),
    navList=nav.querySelectorAll("li"),
     totalNavList=navList.length,
     allSection=document.querySelectorAll(".section"),
     totalSection=allSection.length;

for(let i=0;i<totalNavList;i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click",function()
    {
        removeBackSection();
        for(let j=0;j<totalNavList;j++){
            if (navList[j].querySelector("a").classList.contains("active")) 
            {
                addBackSection(j);
                //allSection[j].classList.add("back-section");                
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth<1200) {
            asideSectionTogglerBtn();
            
        }


    })
}
function removeBackSection(){
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
        
    }
}

function addBackSection(num){
    allSection[num].classList.add("back-section");

}
function showSection(element){
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
        
    }
    const target=element.getAttribute("href").split('#')[1];
    document.querySelector("#"+target).classList.add("active")

}
function updateNav(element){
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target===navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");

            
        }

        
    }

}
document.querySelector(".hire-me").addEventListener("click",function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);

})

const navTogglerBtn=document.querySelector(".nav-toggler"),
      aside=document.querySelector(".aside");
      navTogglerBtn.addEventListener("click",()=>{
        asideSectionTogglerBtn();
      })
      function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection;i++){
            allSection[i].classList.toggle("open");
        }

      }

      document.addEventListener('DOMContentLoaded', () => {
        document.body.classList.add('dark');
    });

    document.getElementById("contactform").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission
        document.getElementById("message").textContent = "Submitting..";
        document.getElementById("message").style.display = "block";
        document.getElementById("submit-button").disabled = true;

        // Collect the form data
        var formData = new FormData(this);
        var keyValuePairs = [];
        for (var pair of formData.entries()) {
          keyValuePairs.push(pair[0] + "=" + pair[1]);
        }

        var formDataString = keyValuePairs.join("&");

        // Send a POST request to your Google Apps Script
        fetch(
          "https://script.google.com/macros/s/AKfycbyPU-f-C3KRMomxUypcfm8rpIfE4JfjYSvpDqV7gkEunY_URxbUPNp9qSw3AcpQxyxS7w/exec",
          {
            redirect: "follow",
            method: "POST",
            body: formDataString,
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
          }
        )
          .then(function (response) {
            // Check if the request was successful
            if (response) {
              return response; // Assuming your script returns JSON response
            } else {
              throw new Error("Failed to submit the form.");
            }
          })
          .then(function (data) {
            // Display a success message
            document.getElementById("message").textContent =
              "Data submitted successfully!";
            document.getElementById("message").style.display = "block";
            document.getElementById("message").style.backgroundColor = "green";
            document.getElementById("message").style.color = "beige";
            document.getElementById("submit-button").disabled = false;
            document.getElementById("contactform").reset();

            setTimeout(function () {
              document.getElementById("message").textContent = "";
              document.getElementById("message").style.display = "none";
            }, 2600);
          })
          .catch(function (error) {
            // Handle errors, you can display an error message here
            console.error(error);
            document.getElementById("message").textContent =
              "An error occurred while submitting the form.";
            document.getElementById("message").style.display = "block";
          });
      });

    






