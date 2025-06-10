![Status](https://img.shields.io/badge/status-finished-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

![2025-06-0920-47-39-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/53ec8ef4-a33f-41ea-8217-3eb4d9a8a9e3)
<!--Title Image-->
# :computer: Dani&Co. - Healthy Food Restaurant - Landing-Page
<p>
Dani&Co. is a landing page for a local healthy food restaurant located in São Mateus do Sul-PR, Brazil.<br>
This website features a simple yet visually appealing parallax effect in the hero section.
</p>

Check out the ***Table of Contents*** section to navigate through this documentation.

<!--Menu-->
## :large_orange_diamond: Table of Contents
- [1. Introduction](#large_orange_diamond-introduction)
  - [1.1 Description](#arrow_forward-description)
- [2. Patch Notes](#large_orange_diamond-patch-notes)
  - [2.1 Latest Update](#pushpin-latest-update)
- [3. Features](#large_orange_diamond-features)
  - [3.1 Parallax Effect](#arrow_forward-parallax-effect)
  - [3.2 Responsiveness](#arrow_forward-responsiveness)
    - [3.2.1 Mobile](#small_red_triangle_down-mobile)
    - [3.2.2 Tablet](#small_red_triangle_down-tablet)
    - [3.2.3 Desktop](#small_red_triangle_down-desktop)
- [4. Tools and Technologies](#large_orange_diamond-tools-and-technologies) 
  - [4.1 Stacks Used](#arrow_forward-stacks-used)
- [5. Result](#large_orange_diamond-result)
  - [5.1 Deploy](#arrow_forward-deploy)
- [6. Links](#large_orange_diamond-links)
  - [6.1. Project Repository](#arrow_forward-project-repository)
  - [6.2. Social Links](#arrow_forward-social-links)
  - [6.3. Other Links](#arrow_forward-other-links)
- [7. Etcetera](#large_orange_diamond-etcetera)
  - [7.1 About](#arrow_forward-about)
  - [7.2 Licenses](#arrow_forward-license)

<!--Introduction-->
## :large_orange_diamond: Introduction
### :arrow_forward: Description
Dani&Co. is a landing page for a local healthy food restaurant. The client wanted to showcase their menu to potential customers and redirect traffic to their WhatsApp number in order to take new orders.<br>
The main feature of this website, is a parallax effect on the hero-section. To see how it was done, check out the [3.1 Parallax Effect](#arrow_forward-parallax-effect) section.

<!--Patch Notes-->
## :large_orange_diamond: Patch Notes
### :pushpin: Latest Update
<strong>10/03/2025</strong>
- Website finished.
- Website hosted and Indexed on Google.

<!--Features-->
## :large_orange_diamond: Features
### :arrow_forward: Parallax Effect
![2025-06-0920-50-47-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/b4a96eb9-6b8b-41dc-b9d7-a54a1f9504b7)

<p>
  This parallax effect was designed to impress users right from the moment they open the page.<br>
  It creates a dynamic visual by deconstructing the product (fruits and cup) alongside the brand's logo (Dani&Co.), delivering an engaging and memorable first impression.<br>
  <br>Check out the Parallax effect code:
</p>

    let listBg = document.querySelectorAll(".bg");
    let titleBanner = document.querySelector(".motto");
    let ticking = false;
    
    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                let top = window.scrollY;
                listBg.forEach((bg, index) => {
                    if (index !== 0 && index !== 10) {
                        bg.style.transform = `translateY(${top * index / 2}px)`;
                    } else if (index === 1) {
                        bg.style.transform = `translateY(${top / 3}px)`;
                    }
                });
                titleBanner.style.transform = `translateY(${top * 3 / 2}px)`;
                ticking = false;
            });
            ticking = true;
        }
    });

### :arrow_forward: Responsiveness
<p>
The website uses Bootstrap breakpoints to provide a responsive experience.
</p>

#### :small_red_triangle_down: Mobile
![2025-06-0920-55-05-ezgif com-crop](https://github.com/user-attachments/assets/4f86d62e-07b2-4a5f-aa8e-3f69fa0ea3e6)
<p>- Mobile View</p>

#### :small_red_triangle_down: Tablet
![2025-06-0920-55-57-ezgif com-crop](https://github.com/user-attachments/assets/223469ae-951f-47ad-924a-40b9c8d778c5)
<p>- Tablet View</p>

#### :small_red_triangle_down: Desktop
![2025-06-0919-20-05-ezgif com-crop(2)](https://github.com/user-attachments/assets/f24d94e6-9cdb-4e3b-a3ca-ca9808f0f3be)
<p>- Desktop View</p>

<!--Tools Used-->
## :large_orange_diamond: Tools and Technologies
### :arrow_forward: Stacks Used
[![My Skills](https://skillicons.dev/icons?i=html,css,js,bootstrap)](https://skillicons.dev) <br>
<br>
This website uses:<br>
  - Bootstrap: Framework used to create responsive and mobile-first layouts quickly.<br>

<!--Deploy-->
## :large_orange_diamond: Result

### :arrow_forward: Deploy
* <a href="https://www.danicompany.com.br/" alt="Deploy page">Dani&Co.</a>

<!--Links-->
## :large_orange_diamond: Links
### :arrow_forward: Project Repository
* [Dani&Co. GitHub Repository](https://github.com/jeanjusten/Dani-Co.)

### :arrow_forward: Social Links
* [Jean Justen's Github page](https://github.com/jeanjusten)
* [Jean Justen's LinkedIn page](https://www.linkedin.com/in/jeanjusten/)

### :arrow_forward: Other Links
* [Bootstrap Documentation](https://getbootstrap.com/docs/)

## :large_orange_diamond: Etcetera
### :arrow_forward: About
Dani&Co. Landing Page was created by ![logo](https://github.com/user-attachments/assets/0894beaf-f587-4d0a-983a-caf7fb551554) <strong>JEAN JUSTEN</strong>.

### :arrow_forward: License
You may use, copy, share and modify the code as you please. No credits needed.</p>
