let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    window.speechSynthesis.speak(text_speak)
}
function wishme()
{
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12)
        {
            speak("good morning my boss")
        }
        else if(hours>=12 && hours <16){
            speak("good afternoon my boss")
        }
        else{
            speak("good evening my boss")
        }
}
window.addEventListener('load',()=>{
    wishme()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello boss, what can i help you ?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant , created by het sir")
        }
        else if(message.includes("jarvis tell me about your boss")){
            speak("my boss name is het sharma he made me with his knowledge and skills he is a web developer")
            }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.co.in/")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...")
        window.open("https://www.calculator.net/")
    }
    else if(message.includes("play tere bina song")){
        speak("ok sir playing tere bina song...")
        window.open("https://www.youtube.com/watch?v=9JDSGhhiOwI")
    }
    else if(message.includes("play rcb any match")){
        speak("ok sir playing rcb match")
        window.open("https://www.youtube.com/watch?v=Oj7e43zyU9Q")
    }
    else if(message.includes("play taarak mehta")){
        speak("ok sir opening tarak mehta")
        window.open("https://www.youtube.com/watch?v=PVuJqWWXXlc")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("https://web.whatsapp.com/")
    }
    else if(message.includes("who is real jarvis")){
        speak("opening real jarvis")
        window.open("https://www.google.com/search?q=who+is+jarvis+in+iron+man&sca_esv=2ca2b7159f1ded92&sxsrf=ADLYWILDrjUzBFTTt0SvNGgYdfa62qe8ww%3A1727691746617&ei=4nv6Zr-mJcP34-EPq9vRyAI&oq=who+is+jarvis+in+&gs_lp=Egxnd3Mtd2l6LXNlcnAiEXdobyBpcyBqYXJ2aXMgaW4gKgIIADILEAAYgAQYkQIYigUyCxAAGIAEGJECGIoFMgsQABiABBiRAhiKBTILEAAYgAQYkQIYigUyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQLhiABDILEAAYgAQYhgMYigVI8DBQzAJY5CZwAngBkAEBmAGYAqAB_A-qAQUwLjguM7gBA8gBAPgBAZgCC6AClQ3CAgoQABiwAxjWBBhHwgIIEAAYBxgIGB7CAggQABiABBiiBMICChAjGIAEGCcYigXCAgYQABgHGB7CAgoQABiABBgUGIcCwgIGEAAYFhgemAMAiAYBkAYIkgcFMi43LjKgB4RR&sclient=gws-wiz-serp")
    }
    
}