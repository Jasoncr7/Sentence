const name = document.querySelector('.name');
const age = document.querySelector('.age');
const gender = document.querySelector('.gender');
const colour = document.querySelector('.colour');
const movie = document.querySelector('.movie');
const hobby = document.querySelector('.hobby');
const sport = document.querySelector('.sport');
const btn = document.querySelector('.done');
const inputs = document.querySelectorAll('.input');
const show = document.querySelector('.show');
const downArrow = document.querySelector('.displaycase');
const result = document.querySelector('.result');
btn.addEventListener('click', (e) => {
   let nameValue = name.value;
   let ageValue = age.value;
   let genderValue = gender.value;
   let colourValue = colour.value;
   let movieValue = movie.value;
   let hobbyValue = hobby.value;
   let sportValue = sport.value;
   if(nameValue.length < 1 || ageValue.length < 1 || genderValue.length < 1 || colourValue.length < 1 || movieValue.length < 1 || hobbyValue.length < 1 || sportValue.length < 1) {
       show.textContent = 'Answer All Questions';
       setTimeout(() => show.remove(), 3000);
   }
   else{
        downArrow.style.display = 'block';
        result.style.display = 'block';
        result.style.backgroundColor = colourValue;
   }
   // time to do the sentence
   result.textContent = `Your Name is ${nameValue} and you are ${ageValue} years old. You are a ${genderValue} and your favourite colour is ${colourValue} your favourite movie is ${movieValue} and your most enjoyable hobby is ${hobbyValue}. Let's hope that with time you will be able to watch the next ${sportValue} match. Hope you like the background color of this it's your favourite color.`
   if(colourValue === 'black') {
       result.style.color = 'white';
   }
});
//Done be a boss