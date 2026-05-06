# 🐕🐈 Pet Symptom Checker

A modern, interactive web application designed to help pet owners identify common biological diseases and health issues in dogs and cats. Users can search through symptoms, select what applies to their pet, and receive potential diagnoses based on keyword matching.

## 🌟 Features

### 1. **Pet Selection**
- Simple interface to choose between dogs or cats
- Beautiful, intuitive UI with emoji icons
- Sets the foundation for pet-specific symptom matching

### 2. **Symptom Search & Selection**
- Real-time search through an extensive symptom database
- Symptoms organized for both dogs and cats
- Selected symptoms display as removable tags at the top
- Click symptoms to add or remove them instantly

### 3. **Smart Disease Matching Algorithm**
- Matches selected symptoms to conditions based on keyword associations
- Displays match percentage for each potential condition (highest first)
- Shows which specific symptoms matched
- Severity indicators (Low/Medium/High) for each condition

### 4. **Comprehensive Disease Database**
- **10 common dog diseases** with keywords, descriptions, and severity levels
- **10 common cat diseases** with keywords, descriptions, and severity levels
- Each condition includes:
  - Symptom keywords for intelligent matching
  - Detailed description and information
  - Severity classification

### 5. **Beautiful User Interface**
- Professional purple gradient theme
- Smooth animations and transitions
- Fully responsive design (mobile, tablet, desktop)
- Expandable condition cards for detailed information
- Color-coded severity badges

## 📁 Files Structure

```
pet-symptom-checker/
├── index.html      # Main HTML structure
├── styles.css      # Professional styling
├── app.js         # Application logic and event handlers
├── data.js        # Disease and symptom database
└── README.md      # Documentation
```

## 🚀 Quick Start

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Select your pet type (Dog or Cat)
4. Search for and select symptoms that apply to your pet
5. View matching conditions with match percentages and descriptions

**No server, no installation needed!** The app works entirely in the browser.

## 📊 How It Works

### Symptom Selection Process
1. User selects pet type (Dog 🐕 or Cat 🐈)
2. Search bar filters through relevant symptoms
3. Click symptoms to add them to selected list
4. Selected symptoms appear as tags above the search
5. System automatically matches to conditions

### Matching Algorithm
- Compares selected symptoms to disease keywords
- Calculates match percentage based on keyword overlap
- Sorts results by highest match percentage
- Displays matched symptoms for each condition
- Shows severity level for awareness

## 💾 Disease Database

### Dogs Include:
- Canine Parvovirus
- Ear Infection (Otitis)
- Hip Dysplasia
- Allergies (Environmental/Food)
- Kennel Cough
- Diabetes Mellitus
- Arthritis
- Urinary Tract Infection
- Dental Disease
- Gastroenteritis

### Cats Include:
- Feline Leukemia Virus (FeLV)
- Lower Urinary Tract Disease (LUTD)
- Hyperthyroidism
- Chronic Kidney Disease
- Ear Mites
- Respiratory Infection
- Diabetes Mellitus
- Intestinal Parasites
- Dental Disease
- Feline Infectious Peritonitis (FIP)

## 🎨 Customization

### Add More Diseases
Edit `data.js` and add to `diseaseDatabase`:

```javascript
{
    name: 'Your Disease Name',
    severity: 'low|medium|high',
    keywords: ['symptom1', 'symptom2', 'symptom3'],
    description: 'Detailed description of the disease...'
}
```

### Add More Symptoms
Edit `data.js` and add to `symptomDatabase`:

```javascript
symptomDatabase.dog.push('New Symptom Here');
symptomDatabase.cat.push('New Symptom Here');
```

### Change Color Scheme
Edit `styles.css` and modify the `:root` variables:

```css
:root {
    --primary-color: #667eea;     /* Change this */
    --secondary-color: #764ba2;   /* Change this */
    --accent-color: #f093fb;      /* Change this */
}
```

## 📱 Responsive Design

- **Desktop**: Full-featured grid layout
- **Tablet**: Optimized two-column display
- **Mobile**: Single column with optimized spacing
- **Small Devices**: Compact symptom grid and readable text

## ⚠️ Important Disclaimer

**This tool is for educational purposes only and should NOT be used as a substitute for professional veterinary care.** Always consult with a licensed veterinarian for proper diagnosis and treatment of your pet's health concerns. If your pet shows signs of serious illness or injury, seek immediate veterinary attention.

## 🔧 Technical Details

### Built With:
- **HTML5** - Semantic markup
- **CSS3** - Gradients, animations, flexbox, grid
- **Vanilla JavaScript** - No frameworks or dependencies
- **Responsive Design** - Mobile-first approach

### Browser Support:
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Any modern browser supporting ES6 JavaScript

## 🎯 Future Enhancements

Potential features to add:
- Severity level indicators with visual cues
- Symptom confidence scoring
- Pet breed-specific conditions
- Age-based disease recommendations
- Emergency alert system
- Export/share diagnosis results
- Multi-language support
- Integration with veterinary clinics
- Symptom severity duration tracking

## 📝 License

This project is open source and available for educational and personal use.

## 🤝 Contributing

Feel free to fork, modify, and improve this project! To contribute:
1. Add more diseases to the database
2. Improve the matching algorithm
3. Enhance the UI/UX
4. Add new features
5. Submit improvements

## 📧 Support

For questions, suggestions, or bug reports, please open an issue in the repository.

---

**Made with ❤️ for pet owners everywhere** 🐾
