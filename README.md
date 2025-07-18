### **📌 Project: Portfolio Website of SHAIL K PATEL**  
#### **1. Metadata Summary**  
- **Title:** Shail K Patel  
- **Description:** Portfolio website of SHAIL K PATEL  
- **Viewport:** Responsive (meta tag for mobile compatibility)  
- **Stylesheet:** External CSS (`css/style.css`)  

#### **2. Sections & Features**  
- **Landing Section**  
  - Displays a Profile picture, name, and short motto  
  - Shows a role description: *Machine Learning Enthusiast*  
  - Includes a motivational quote  

- **Social Media Links**  
  - GitHub, LinkedIn, Hire Me button, YouTube  



- **Projects Section**  
  - Showcases multiple projects with a **slideshow** format  
  - Each project has an image, title, and description  
  - GitHub links provided for each project  

- **Skills Section**  
  - Displays a **grid layout** with tooltips for each skill  
  - Skills include Python, NumPy, Pandas, Matplotlib, HTML, CSS, JS, etc.  

- **Education Section**  
  - Lists **Bachelor of Engineering in AI & ML (2023 - 2027)**  
  - Skills learned in each semester (Sem 1, Sem 2, Sem 3)  
  - Buttons to toggle between different semesters  

- **JavaScript Integration**  
  - Uses `script.js` for dynamic behavior (not provided)  
  - Includes functions for theme toggle, slideshow navigation, testimonials, and skills toggle  

---


### **📌 CSS Documentation for Portfolio Website**  
#### **1. Theme & Color Variables:**  
  - Background: `#000000`  
  - Text Color: `#ffffff`  
  - Heading Color: `#23a7c2` (Lighter Cyan)  
  - Button Background: `#48c1d9`  
  - Skill Section Background: `#444`

#### **2. Typography & Fonts**  
- **Custom Fonts Used**:
  - `'Cabin Sketch'` (Bold Handwriting for Titles)  
  - `'SF'` (Sans-serif for Role Text)  
  - `'Typewriter'` (Typewriter-style font for About Section)  
  - `'Motto'` (Italic font for Quotes)  

#### **3. General Styles**  
- **Body**:
  - `overflow-x: hidden;` → Prevents horizontal scrolling  
  - `scroll-behavior: smooth;` → Enables smooth scrolling  
  - `background-color: var(--bg-color);` → Dynamic theme adaptation  

- **Scroll Bar**:
  - `::-webkit-scrollbar { width: 0; height: 0; }` → Hides the scrollbar  

- **Section Layouts**:
  - `.section { height: 100vh; scroll-snap-align: start; }` → Full-screen sections with snap scrolling  
  - `text-align: center; display: flex; align-items: center; flex-direction: column;`  

#### **4. Landing Section**  
- `.profile-photo-landing { width: 15vw; margin-top: 5%; }`  
- `.name { font-size: 6vw; font-weight: bold; color: var(--heading-color); }`  
- `.role { font-size: 4vw; color: var(--role-color); }`  
- `.myquote { font-size: 2.2vw; font-style: italic; }`  

#### **5. Sidebar (Fixed for Larger Screens)**  
- `.left-section { width: 30vw; position: fixed; height: 100vh; display: none; }`  
- `.sidebar a { text-decoration: none; color: inherit; }`  
- `.profile-photo-left { width: 12vw; height: 12vw; border-radius: 50%; }`  

#### **6. Social Media Icons**  
- `.social-media { display: flex; gap: 1.5vw; justify-content: center; }`  
- `.social-icon { width: 5vw; border-radius: 30%; cursor: pointer; transition: transform 0.3s ease; }`  
- `.social-icon:hover { transform: scale(1.15); box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }`  

#### **7. Navigation Styles**  
- `.left-section nav ul { list-style: none; text-align: left; }`  
- `.left-section nav ul li a { text-decoration: none; font-weight: bold; border-left: 0.2vw solid #fff; padding-left: 1vw; }`  

#### **8. Project Section**  
- `.project-image { width: 60%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }`  
- `.pname { font-size: 2vw; font-weight: bold; color: #ffffff; }`  
- `.prev, .next { cursor: pointer; position: absolute; font-size: 2vw; padding: 3%; }`  
- `.dot-container .dot { height: 15px; width: 15px; border-radius: 50%; transition: background-color 0.6s ease; }`  
- `.active, .dot:hover { background-color: #717171; }`  

#### **9. Skills Section (Grid Format with Tooltip Hover Effects)**  
- `.skills-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2vw; }`  
- `.skill { cursor: pointer; padding: 5px 15px; border-radius: 15px; }`  
- `.skill:hover .icon { transform: scale(1.1); opacity: 0.5; }`  
- `.skill .tooltip { visibility: hidden; background: black; padding: 0.5vw; border-radius: 0.5vw; opacity: 0; }`  
- `.skill:hover .tooltip { visibility: visible; opacity: 1; }`  

#### **10. Education Section**  
- `.college-logo { width: 20vw; height: auto; margin-bottom: 1vh; }`  
- `.semester-buttons { display: flex; justify-content: center; gap: 1vw; }`  
- `.semester-buttons button { padding: 0.5vh 0.5vw; background: #007BFF; border-radius: 1vw; }`  
- `.college-skills-list { display: none; grid-template-columns: repeat(3,1fr); }`  

#### **11. Testimonials Section**  
- `.testimonial-box { padding: auto; border-left: 5px solid #007BFF; border-radius: 5px; }`  
- `.testimonial-message { font-style: italic; font-size: 16px; padding: 5%; }`  
- `.testimonial-author { font-weight: bold; text-align: right; font-size: large; }`  


### **📌 JavaScript Documentation for Portfolio Website**  

---

### **1. Core Functionalities**  

#### ✅ **Page Scroll & Navigation**  
- **Smooth Section Scrolling** (`scrollToSection(index)`)  
- **Infinite Scroll** (Loops back to the first section after reaching the last)  
- **Arrow Key Navigation** (Up/Down to move between sections)  
- **Dynamic Body Class Update** (Adds class based on current section)  

#### ✅ **Project Slideshow Navigation**  
- Uses `prev-project` and `next-project` buttons to navigate projects.  
- Disables navigation when on the first/last project.  

---

### **2. Functions & Code Breakdown**  

#### **📍 Section Navigation**  
```js
function scrollToSection(index) {
    const sections = document.querySelectorAll(".section");
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: "smooth" });
    }
}
```
- Smoothly scrolls to a section when triggered.  

```js
document.addEventListener("keydown", (e) => {
    let currentIndex = Math.round(window.scrollY / window.innerHeight);
    if (e.key === "ArrowDown") {
        scrollToSection(currentIndex + 1);
    } else if (e.key === "ArrowUp") {
        scrollToSection(currentIndex - 1);
    }
});
```
- Enables **keyboard-based navigation** using Arrow keys.  

---

#### **📍 Infinite Scroll (Looping Back)**  
```js
document.addEventListener("wheel", (e) => {
    let currentIndex = Math.round(window.scrollY / window.innerHeight);
    let nextIndex = e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;

    if (nextIndex >= sections.length) nextIndex = 0; // Reset to first section
    else if (nextIndex < 0) nextIndex = sections.length - 1; // Reset to last section

    scrollToSection(nextIndex);
});
```
- **Loops back** to the **first section** when scrolling past the last one.  

---

#### **📍 Project Navigation**  
```js
function updateProjectVisibility() {
    projectSections.forEach((section, index) => {
        section.style.display = index === currentProjectIndex ? "block" : "none";
    });

    prevButton.disabled = currentProjectIndex === 0;
    nextButton.disabled = currentProjectIndex === projectSections.length - 1;
}
```
- Hides all projects except the currently selected one.  

---

#### **📍 Slideshow for Projects**  
```js
let slideIndex = 0;
function showSlides(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? "block" : "none";
    });
}
```
- Implements a **circular slideshow** (resets to the first slide after the last).  

---