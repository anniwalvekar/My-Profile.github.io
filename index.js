const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })

        // Auto Text effect
        const textEl = document.querySelector(".auto-text");
        const careers = [" Web Devloper"];

        let careerIndex =0;
        let characterIndex = 0;
        updateText();
        function updateText(){
            characterIndex++
            textEl.innerHTML = `<h1> I Am ${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)} <h1>`;
            if(characterIndex=== careers[careerIndex].length){
                careerIndex++
                characterIndex = 0
            }
            if(careerIndex === careers.length){
                careerIndex = 0;
            }
               setTimeout(updateText,200);
        }
        
        //  AOS Animation of scroll
        AOS.init({
            duration:700
        });
