
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

window.location.href = "survey.html";

        
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
    
    document.body.style.background = "red";
    
  });
  
};
const submitBtn = document.getElementById("submitBtn");

if (submitBtn) {
  
  submitBtn.addEventListener("click", function() {
    
    const fullname = document.getElementById("fullname").value;
    const department = document.getElementById("department").value;
    const career = document.getElementById("career").value;
    const study = document.getElementById("study").value;
    
    if (
      fullname === "" ||
      department === "" ||
      career === ""
    ) {
      alert("Please complete all required fields.");
      return;
    }
    
    localStorage.setItem("fullname", fullname);
    localStorage.setItem("department", department);
    localStorage.setItem("career", career);
    localStorage.setItem("study", study);
    
    window.location.href = "result.html";
    
  });
  
}
// RESULT PAGE

const studentName = document.getElementById("studentName");

if (studentName) {
  
  const fullname = localStorage.getItem("fullname");
  
  const department = localStorage.getItem("department");
  
  const career = localStorage.getItem("career");
  
  const study = localStorage.getItem("study");
  
  const departmentResult = document.getElementById("departmentResult");
  
  const careerResult = document.getElementById("careerResult");
  
  const analysis = document.getElementById("analysis");
  
  const score = document.getElementById("score");
  
  studentName.innerHTML = "Welcome, " + fullname;
  
  departmentResult.innerHTML = department;
  
  careerResult.innerHTML = career;
  
  let percentage = 60;
  
  let message = "";
  
  let badge = "";
  
  if (study === "More than 5 Hours") {
    
    percentage = 96;
    
    badge = "🏆 Excellent Student";
    
    message =
      
      "Based on your responses, you demonstrate excellent study habits, strong discipline and high academic commitment. You appear to be well prepared for future academic and professional success.";
    
  }
  
  else if (study === "3-5 Hours") {
    
    percentage = 88;
    
    badge = "🚀 Future Leader";
    
    message =
      
      "Your responses indicate that you have a good learning habit and positive academic potential. With consistency, you can achieve excellent results.";
    
  }
  
  else if (study === "1-2 Hours") {
    
    percentage = 75;
    
    badge = "📚 Developing Student";
    
    message =
      
      "You have good potential, but increasing your daily study time will greatly improve your academic performance and confidence.";
    
  }
  
  else {
    
    percentage = 60;
    
    badge = "💡 Keep Improving";
    
    message =
      
      "Your study habit suggests there is room for improvement. Creating a consistent study routine will help you achieve better academic success.";
    
  }
  
  let current = 0;

let counter = setInterval(function() {
  
  current++;
  
  score.innerHTML = current + "%";
  
  if (current >= percentage) {
    
    clearInterval(counter);
    
  }
  
}, 20);
  document.getElementById("studyBar").style.width = percentage + "%";

document.getElementById("ictBar").style.width = (percentage - 5) + "%";

document.getElementById("leaderBar").style.width = (percentage - 12) + "%";

document.getElementById("careerBar").style.width = (percentage - 3) + "%";

document.getElementById("badge").innerHTML = badge;
  
  analysis.innerHTML =
  
    
    "<b>" + badge + "</b><br><br>" +
    
    message +
    
    "<br><br><b>Recommendation:</b> Continue making good use of ICT tools such as Google Forms, Zoom, Microsoft Teams, KoboToolbox and other digital technologies to improve learning and research.";
    const chart = document.getElementById("studentChart");

if (chart) {
  
  new Chart(chart, {
    
    type: "pie",
    
    data: {
      
      labels: [
        
        "Study Habit",
        
        "ICT Knowledge",
        
        "Leadership",
        
        "Career"
        
      ],
      
      datasets: [{
        
        data: [
          
          percentage,
          
          percentage - 5,
          
          percentage - 12,
          
          percentage - 3
          
        ],
        
        backgroundColor: [
          
          "#3498db",
          
          "#2ecc71",
          
          "#f1c40f",
          
          "#e74c3c"
          
        ]
        
      }]
      
    }
    
  });
  
}
  
}

const downloadBtn = document.getElementById("downloadBtn");

if (downloadBtn) {
  
  downloadBtn.onclick = function() {
    
    window.print();
    
  }
  
}
