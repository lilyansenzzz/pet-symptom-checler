// Application Logic
let currentPet = null;
let selectedSymptoms = [];

// Pet Selection
document.querySelectorAll('.pet-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentPet = e.currentTarget.dataset.pet;
        initializeChecker();
    });
});

// Back Button
document.getElementById('backBtn').addEventListener('click', () => {
    resetApp();
});

// Initialize Checker Screen
function initializeChecker() {
    document.getElementById('petSelectionScreen').classList.remove('active');
    document.getElementById('checkerScreen').classList.add('active');
    
    const petEmoji = currentPet === 'dog' ? '🐕' : '🐈';
    const petName = currentPet === 'dog' ? 'Dog' : 'Cat';
    document.getElementById('petTitle').textContent = `${petEmoji} ${petName} Symptom Checker`;
    
    populateSymptoms();
    setupSearchListener();
}

// Populate Symptoms List
function populateSymptoms() {
    const symptomsList = document.getElementById('symptomsList');
    symptomsList.innerHTML = '';
    
    const symptoms = symptomDatabase[currentPet];
    symptoms.forEach(symptom => {
        const div = document.createElement('div');
        div.className = 'symptom-item';
        div.textContent = symptom;
        div.addEventListener('click', () => toggleSymptom(symptom));
        symptomsList.appendChild(div);
    });
}

// Search Functionality
function setupSearchListener() {
    const searchInput = document.getElementById('symptomSearch');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const symptomItems = document.querySelectorAll('.symptom-item');
        
        symptomItems.forEach(item => {
            const symptomText = item.textContent.toLowerCase();
            if (symptomText.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Toggle Symptom Selection
function toggleSymptom(symptom) {
    const index = selectedSymptoms.indexOf(symptom);
    
    if (index > -1) {
        selectedSymptoms.splice(index, 1);
    } else {
        selectedSymptoms.push(symptom);
    }
    
    updateSelectedDisplay();
    updateSymptomItemsUI();
    matchConditions();
}

// Update Selected Symptoms Display
function updateSelectedDisplay() {
    const selectedList = document.getElementById('selectedSymptomsList');
    
    if (selectedSymptoms.length === 0) {
        selectedList.innerHTML = '<p class="empty-message">No symptoms selected yet</p>';
        return;
    }
    
    selectedList.innerHTML = selectedSymptoms.map(symptom => `
        <div class="symptom-tag">
            <span>${symptom}</span>
            <button onclick="removeSymptom('${symptom}')" title="Remove">×</button>
        </div>
    `).join('');
}

// Remove Symptom from Selection
function removeSymptom(symptom) {
    selectedSymptoms = selectedSymptoms.filter(s => s !== symptom);
    updateSelectedDisplay();
    updateSymptomItemsUI();
    matchConditions();
}

// Update UI to show selected symptoms
function updateSymptomItemsUI() {
    document.querySelectorAll('.symptom-item').forEach(item => {
        if (selectedSymptoms.includes(item.textContent)) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

// Match Symptoms to Conditions
function matchConditions() {
    if (selectedSymptoms.length === 0) {
        document.getElementById('resultsSection').classList.add('hidden');
        return;
    }
    
    const diseases = diseaseDatabase[currentPet];
    const matches = [];
    
    diseases.forEach(disease => {
        let matchCount = 0;
        const matchedKeywords = [];
        
        disease.keywords.forEach(keyword => {
            const matchedSymptom = selectedSymptoms.find(symptom => 
                symptom.toLowerCase().includes(keyword.toLowerCase()) ||
                keyword.toLowerCase().includes(symptom.toLowerCase())
            );
            
            if (matchedSymptom) {
                matchCount++;
                if (!matchedKeywords.includes(matchedSymptom)) {
                    matchedKeywords.push(matchedSymptom);
                }
            }
        });
        
        if (matchCount > 0) {
            const matchPercentage = Math.round((matchCount / disease.keywords.length) * 100);
            matches.push({
                ...disease,
                matchCount,
                matchPercentage,
                matchedKeywords
            });
        }
    });
    
    // Sort by match percentage (highest first)
    matches.sort((a, b) => b.matchPercentage - a.matchPercentage);
    
    displayResults(matches);
}

// Display Results
function displayResults(matches) {
    const resultsSection = document.getElementById('resultsSection');
    const conditionsList = document.getElementById('conditionsList');
    
    resultsSection.classList.remove('hidden');
    
    if (matches.length === 0) {
        conditionsList.innerHTML = '<p class="empty-message">No matching conditions found for selected symptoms.</p>';
        return;
    }
    
    conditionsList.innerHTML = matches.map((condition, index) => `
        <div class="condition-card" onclick="toggleConditionDetails(this)">
            <div class="condition-header">
                <div>
                    <div class="condition-name">${condition.name}</div>
                    <span class="severity-badge severity-${condition.severity.toLowerCase()}">${condition.severity.charAt(0).toUpperCase() + condition.severity.slice(1)} Severity</span>
                </div>
                <div class="condition-match">${condition.matchPercentage}% Match</div>
            </div>
            <div class="matched-symptoms">
                <strong>Matched symptoms:</strong> ${condition.matchedKeywords.join(', ')}
            </div>
            <div class="condition-details">
                <div class="condition-description">${condition.description}</div>
            </div>
        </div>
    `).join('');
}

// Toggle Condition Card Details
function toggleConditionDetails(card) {
    card.classList.toggle('expanded');
}

// Clear Results
document.getElementById('clearResultsBtn').addEventListener('click', () => {
    selectedSymptoms = [];
    document.getElementById('symptomSearch').value = '';
    updateSelectedDisplay();
    updateSymptomItemsUI();
    document.getElementById('resultsSection').classList.add('hidden');
});

// Reset App
function resetApp() {
    currentPet = null;
    selectedSymptoms = [];
    document.getElementById('checkerScreen').classList.remove('active');
    document.getElementById('petSelectionScreen').classList.add('active');
    document.getElementById('symptomSearch').value = '';
    document.getElementById('resultsSection').classList.add('hidden');
}
