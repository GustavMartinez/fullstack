let sentence = ["Hello", "my", "name", "is", "Gus"]

let greetingEl = document.getElementById("greeting-el")


for (let i = 0; i< sentence.length; i +=1){
    greetingEl.textContent += sentence[i] + " "
}