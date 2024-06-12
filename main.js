document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form data
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const bmi = parseFloat(document.getElementById('bmi').value);
    const liquorConsumption = parseInt(document.getElementById('liquorConsumption').value);
    const smokingFrequency = parseInt(document.getElementById('smokingFrequency').value);
    const exerciseDays = parseInt(document.getElementById('exerciseDays').value);
    const hypertension = document.getElementById('hypertension').checked;
    const diabetes = document.getElementById('diabetes').checked;
    const heartDisease = document.getElementById('heartDisease').checked;
    const asthma = document.getElementById('asthma').checked;
    const highCholesterol = document.getElementById('highCholesterol').checked;
    const kidneyDisease = document.getElementById('kidneyDisease').checked;
    const liverDisease = document.getElementById('liverDisease').checked;

    // Calculate health score (example calculation)
    let healthScore = 100;

    // Adjust health score based on gender and age
    if (gender === 'male') {
        healthScore -= (age >= 18 && age <= 40) ? 0 : (age < 18 ? 5 : 10);
    } else if (gender === 'female') {
        healthScore -= (age >= 18 && age <= 40) ? 5 : (age < 18 ? 10 : 15);
    } else {
        healthScore -= (age >= 18 && age <= 40) ? 2 : (age < 18 ? 7 : 12);
    }

    // Adjust health score based on BMI, liquor consumption, and smoking frequency
    healthScore -= Math.max((bmi > 25) ? ((bmi - 25) * 2) : 0, 0);
    healthScore -= Math.max((liquorConsumption > 14) ? ((liquorConsumption - 14) * 1) : 0, 0);
    healthScore -= Math.max((smokingFrequency > 10) ? ((smokingFrequency - 10) * 2) : 0, 0);

    // Adjust health score based on days of exercise
    healthScore -= (7 - exerciseDays) * 5; // Each day of not exercising loses 5 points
    healthScore += exerciseDays * 5; // Each day of exercising adds 5 points

    // Adjust health score based on health conditions
    if (hypertension) {
        healthScore -= 5;
    }
    if (diabetes) {
        healthScore -= 5;
    }
    if (heartDisease) {
        healthScore -= 5;
    }
    if (asthma) {
        healthScore -= 5;
    }
    if (highCholesterol) {
        healthScore -= 5;
    }
    if (kidneyDisease) {
        healthScore -= 15;
    }
    if (liverDisease) {
        healthScore -= 15;
    }

    // Ensure health score is between 0 and 100
    healthScore = Math.max(0, Math.min(healthScore, 100));

    // Display health score
    const healthScoreElement = document.getElementById('healthScore');
    healthScoreElement.textContent = healthScore;

    // Update the health meter
    const healthMeterFill = document.querySelector('#healthMeter .meter-fill');
    healthMeterFill.style.width = healthScore + '%';
});

// Make header transparent on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});
