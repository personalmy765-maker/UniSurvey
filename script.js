// Wait until the whole page has loaded
window.onload = function() {
  
  const launchBtn = document.getElementById("launchBtn");
  const welcomePage = document.getElementById("welcomePage");
  const loadingScreen = document.getElementById("loadingScreen");
  const surveyPage = document.getElementById("surveyPage");
  const progress = document.querySelector(".progress");
  const nextBtn = document.getElementById("nextBtn");
  
  loadingScreen.style.display = "none";
  surveyPage.style.display = "none";
  
  // Launch Button
  launchBtn.addEventListener("click", function() {
    
    welcomePage.style.display = "none";
    
    loadingScreen.style.display = "flex";
    loadingScreen.style.flexDirection = "column";
    loadingScreen.style.justifyContent = "center";
    loadingScreen.style.alignItems = "center";
    loadingScreen.style.height = "100vh";
    
    let width = 0;
    
    const timer = setInterval(function() {
      
      width++;
      
      progress.style.width = width + "%";
      
      if (width >= 100) {
        
        clearInterval(timer);
        
        loadingScreen.style.display = "none";
        surveyPage.style.display = "block";
        
      }
      
    }, 25);
    
  });
  
  // Next Button
  nextBtn.addEventListener("click", function() {
    
    const fullname = document.getElementById("fullname").value.trim();
    const regno = document.getElementById("regno").value.trim();
    const department = document.getElementById("department").value.trim();
    const faculty = document.getElementById("faculty").value.trim();
    const level = document.getElementById("level").value;
    const age = document.getElementById("age").value.trim();
    const gender = document.getElementById("gender").value;
    
    if (
      fullname === "" ||
      regno === "" ||
      department === "" ||
      faculty === "" ||
      age === "" ||
      level === "Select Level" ||
      gender === "Select Gender"
    ) {
      
      alert("Please complete all the required fields.");
      
      return;
      
    }
    
    localStorage.setItem("fullname", fullname);
localStorage.setItem("regno", regno);
localStorage.setItem("department", department);
localStorage.setItem("faculty", faculty);
localStorage.setItem("level", level);
localStorage.setItem("age", age);
localStorage.setItem("gender", gender);

window.location.href = "survey.html";
    
  });
  
};
