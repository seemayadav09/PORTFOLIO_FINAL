const navToggler = document.querySelector('.nav-toggler');
const sidebar = document.querySelector('.sidebar');

navToggler.addEventListener('click', () => {
    sidebar.classList.toggle('show'); /* toggle the 'show' class on the sidebar when the toggle button is clicked */
});


 
 const categories = [
        "HTML CSS",
        
        "DSA",
        "Random Thoughts"
    ];

    const categoryDropdown = document.getElementById("category-dropdown");
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.innerText = category;
        categoryDropdown.appendChild(option);
    });

    categoryDropdown.addEventListener("change", () => {
        const selectedCategory = categoryDropdown.value;
        filterBlogs(selectedCategory);
    });

    function filterBlogs(category) {
        const blogElements = document.querySelectorAll(".blog-item");
        blogElements.forEach(blogElement => {
            const blogCategory = blogElement.dataset.category;
            if (category === "All" || blogCategory === category) {
                blogElement.style.display = "block";
            } else {
                blogElement.style.display = "none";
            }
        });
    }


/* typing animation */
const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'Python', 'Java', 'git',
    'MySQL', 'SQL',
];

var tagCloud = TagCloud('.content', myTags,{

  // radius in px
  radius: 250,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});


var typed = new Typed(".typingg",{
    strings:["Passionate Coder","Passionate Coder", "Quiet Confident", "Naturally Curious", "Well-Organized Person", "Problem Solver"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* sidebar */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click",function(){
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.remove("back-section");
            }
            for(let j=0; j<totalNavList; j++)  
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                   allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            /* click any mavbar button to close the navbar in 1199px views */
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn(); 
            }
          })
      }
      function showSection(element)
      {
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.remove("active");
          }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active")
      }
      const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click",()=>
        {
            asideSectionTogglerBtn()
        })
        function asideSectionTogglerBtn() {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.toggle("open");
            }
        }

