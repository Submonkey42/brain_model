// JavaScript File
var brainImage = document.getElementById("brainImage");
var brainSelect = document.getElementById("brainSelect");
var button = document.getElementById("submitButton");

button.addEventListener("click", chImg)


function chImg() {
    
    if (brainSelect.value == "fl") {
        brainImage.src = "Brain_1.png";
        document.getElementById("infoTitle").innerHTML = "Frontal Lobe";
        document.getElementById("infoText").innerHTML = "The Frontal Lobe is the frontmost part of the brain. It controls many different cognitive functions, including emotional expression, problem solving, memory, language, judgment, and sexual behavior.";
    }

    if (brainSelect.value == "pl") {
        brainImage.src = "Brain_2.png"        
        document.getElementById("infoTitle").innerHTML = "Parietal Lobe";
        document.getElementById("infoText").innerHTML = "The Parietal Lobe is the part of the brain that processes sensory information. It processes senses from the skin, such as warmth, cold, pain, and touch.";

    }

    if (brainSelect.value == "ol") {
        brainImage.src = "Brain_3.png";        
        document.getElementById("infoTitle").innerHTML = "Occipital Lobe";
        document.getElementById("infoText").innerHTML = "The Occipital Lobe is the part of the brain that recieves and processes visual infromation. It is involved in many different functions, including visual perception, color recognision, reading, reading comprehension, depth perception and recognition of object movement.";

    }

    if (brainSelect.value == "tl") {
        brainImage.src = "Brain_4.png";        
        document.getElementById("infoTitle").innerHTML = "Temporal Lobe";
        document.getElementById("infoText").innerHTML = "The Temporal Lobe is the part of the brain that processes auditory information from the ears. It also is what lets us comprehend language.";

    }

    if (brainSelect.value == "cb") {
        brainImage.src = "Brain_5.png";        
        document.getElementById("infoTitle").innerHTML = "Cerebellum";
        document.getElementById("infoText").innerHTML = "The Cerebellum recieves information from the spinal cord and the other parts of the brain and uses it to regulate motor functions. The Cerebellum is inbvolved in maintenance of balance and posture, coordination of voluntary movements, motor learning, and cognitive functions.";

    }

    if(brainSelect.value == "bs") {
        brainImage.src = "Brain_6.png";        
        document.getElementById("infoTitle").innerHTML = "Brainstem";
        document.getElementById("infoText").innerHTML = "The Brainstem is what connects the brain to the rest of the body. It also controls basic bodily functions such as breathing, swallowing, heart rate, blood pressure, consciousness, and if you are tired or awake.";

    }

}