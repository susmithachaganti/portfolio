<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js"></script>
    <script>
        // Typing Effect
        new Typed(".typing", {
            strings: ["Susmitha","A Student", " A Developer", "A Learner"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });
        function toggleMenu() {
            document.querySelector('.navbar').classList.toggle('active');
        }
        document.addEventListener("DOMContentLoaded", function() {
            let circles = document.querySelectorAll(".progress-circle");
            
            circles.forEach(circle => {
                let percent = circle.closest(".skill").getAttribute("data-percent");
                let circumference = 2 * Math.PI * 50;
                let offset = circumference * (1 - percent / 100);
                
                circle.setAttribute("stroke-dasharray", circumference);
                circle.setAttribute("stroke-dashoffset", circumference);
                
                setTimeout(() => {
                    circle.style.transition = "stroke-dashoffset 1s ease-in-out";
                    circle.setAttribute("stroke-dashoffset", offset);
                }, 500);
            });
        }); 
</script>
</body>
</html>
