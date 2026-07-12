# Travel Discovery UI - Practice Exercises & Challenges

## Practice Exercises for Students

---

## **LEVEL 1: Beginner (Start with these - 15-20 min)**

### Exercise 1.1: Change Navbar Colors
**Difficulty**: ⭐ Easy

**Task**: Modify the navbar styling
```
1. Change the navbar background from dark blue to a different color (try #FF6B35 for orange)
2. Change the "Sign Up" button background from gold to green (#22C55E)
3. Change the logo text color from gold to white
```

**Code to modify**:
```css
/* Find this in the CSS */
nav {
    background-color: #1a2b4d;  /* Change this */
}

.btn-signup {
    background: #ffd700;  /* Change this */
}
```

**Hint**: Look for the `nav` selector and `btn-signup` class

---

### Exercise 1.2: Modify Feature Cards Layout
**Difficulty**: ⭐ Easy

**Task**: Change how many feature cards show per row
```
Currently: 5 cards per row
Goal: Make it 3 cards per row
```

**Code to modify**:
```css
.features {
    grid-template-columns: repeat(5, 1fr);  /* Change 5 to 3 */
}
```

**What you'll see**: Cards will be larger and stack differently

---

### Exercise 1.3: Change Destination Cards Per Row
**Difficulty**: ⭐ Easy

**Task**: Change destination cards layout
```
Currently: 6 cards per row
Goal: Make it 4 cards per row
```

**Code to modify**:
```css
.destinations {
    grid-template-columns: repeat(6, 1fr);  /* Change 6 to 4 */
}
```

---

### Exercise 1.4: Modify Button Styling
**Difficulty**: ⭐ Easy

**Task**: Make buttons bigger and more colorful
```
1. Increase button padding from "8px 20px" to "12px 30px"
2. Change button background from gold to purple (#8B5CF6)
3. Make the text bold
```

**Code to modify**:
```css
.btn-signup {
    background: #ffd700;  /* Change to #8B5CF6 */
    padding: 8px 20px;     /* Change to 12px 30px */
}
```

---

## **LEVEL 2: Intermediate (Try these next - 20-30 min)**

### Exercise 2.1: Add Gradient to Hero Section
**Difficulty**: ⭐⭐ Medium

**Task**: Add a gradient background to the hero section
```
Change the background from a flat color to a gradient
From: Blue to Purple to Pink
```

**Code to modify**:
```css
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
                url('...') center/cover;
    /* Add a gradient background color instead */
}
```

**Hint**: You can use `background-color: linear-gradient(135deg, #667eea 0%, #764ba2 100%);`

---

### Exercise 2.2: Add New Feature Cards
**Difficulty**: ⭐⭐ Medium

**Task**: Add 2 new feature cards to the features section
```html
Currently: 5 cards (flights, hotels, buses, offers, support)
Goal: Add "Car Rentals" and "Travel Insurance" cards
```

**What to do**:
1. Find the `.features` section in HTML
2. Copy one feature card
3. Paste it twice and change the icon and text

**Example**:
```html
<div class="feature-card">
    <div class="feature-icon">🚗</div>
    <h3>Car Rentals</h3>
    <p>Rent cars at affordable rates</p>
</div>
```

---

### Exercise 2.3: Add Hover Effect to Feature Cards
**Difficulty**: ⭐⭐ Medium

**Task**: Make feature cards change color on hover
```
Currently: Cards only move up on hover
Goal: Add a color change when hovering
```

**Code to modify**:
```css
.feature-card:hover {
    transform: translateY(-10px);
    /* Add this line: */
    background: #e8f4ff;  /* Light blue background */
}
```

---

### Exercise 2.4: Modify Form Styling
**Difficulty**: ⭐⭐ Medium

**Task**: Make the search form look better
```
1. Make input fields larger (increase padding)
2. Change the border color when focused from blue to green
3. Make the input text bigger
```

**Code to modify**:
```css
.form-group input {
    padding: 10px;  /* Change to 15px */
    font-size: 0.95em;  /* Change to 1.1em */
}

.form-group input:focus {
    border-color: #0066cc;  /* Change to #22C55E (green) */
}
```

---

## **LEVEL 3: Advanced (Challenge yourself - 30-45 min)**

### Exercise 3.1: Create a New Section
**Difficulty**: ⭐⭐⭐ Advanced

**Task**: Add a "Testimonials" section between Promo and Footer
```html
Create 3 cards with:
- Customer name
- Rating (⭐⭐⭐⭐⭐)
- Quote/Review text
```

**HTML Structure**:
```html
<section class="testimonials">
    <h2>What Our Customers Say</h2>
    <div class="testimonial-cards">
        <div class="testimonial-card">
            <h4>John Doe</h4>
            <p>⭐⭐⭐⭐⭐</p>
            <p>"Amazing experience! Best travel website ever."</p>
        </div>
        <!-- Add 2 more testimonial cards -->
    </div>
</section>
```

**CSS to add**:
```css
.testimonials {
    padding: 60px 40px;
    background: white;
    text-align: center;
}

.testimonial-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 30px;
}

.testimonial-card {
    background: #f5f5f5;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}
```

---

### Exercise 3.2: Add Animation to Cards
**Difficulty**: ⭐⭐⭐ Advanced

**Task**: Make destination cards fade in when page loads
```
Currently: Cards appear instantly
Goal: Cards fade in smoothly with a slide-up animation
```

**CSS to add**:
```css
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.destination-card {
    animation: slideUp 0.5s ease-out;
}
```

---

### Exercise 3.3: Make Website Mobile Responsive
**Difficulty**: ⭐⭐⭐ Advanced

**Task**: Make the website work well on phones (375px width)
```
Current: Desktop layout
Goal: Create mobile-friendly layout
```

**What to modify**:
```css
@media (max-width: 480px) {
    nav {
        flex-direction: column;  /* Stack navigation vertically */
    }

    .nav-links {
        flex-direction: column;  /* Stack links vertically */
        gap: 10px;
    }

    .search-form {
        grid-template-columns: 1fr;  /* Stack form fields */
    }

    .features {
        grid-template-columns: 1fr;  /* Show 1 card per row */
    }

    .destinations {
        grid-template-columns: 1fr;  /* Show 1 destination per row */
    }

    .hero h1 {
        font-size: 1.8em;  /* Make title smaller */
    }
}
```

---

### Exercise 3.4: Add Interactive Features
**Difficulty**: ⭐⭐⭐ Advanced

**Task**: Make the heart button actually work (change color on click)
```html
Currently: Heart shows ❤️ on hover
Goal: Heart changes color when clicked
```

**JavaScript to add** (at end of body before closing tag):
```html
<script>
    // Get all heart buttons
    const hearts = document.querySelectorAll('.heart-btn');
    
    // Add click event to each heart
    hearts.forEach(heart => {
        heart.addEventListener('click', function(e) {
            e.preventDefault();
            // Toggle between white and red heart
            if (this.textContent === '🤍') {
                this.textContent = '❤️';
            } else {
                this.textContent = '🤍';
            }
        });
    });
</script>
```

---

## **BONUS CHALLENGES** 🏆

### Challenge 1: Change Color Scheme
**Difficulty**: ⭐⭐⭐ Advanced

**Task**: Change the entire color scheme from Blue/Gold to Green/Purple
```
Current: #1a2b4d (dark blue), #ffd700 (gold)
Change to: #10b981 (green), #8b5cf6 (purple)
```

**Find and Replace**:
- Replace `#1a2b4d` with `#10b981`
- Replace `#ffd700` with `#8b5cf6`
- Update text colors accordingly

---

### Challenge 2: Add Search Functionality (Advanced JavaScript)
**Difficulty**: ⭐⭐⭐⭐ Very Advanced

**Task**: Add working search that filters destinations
```
When user types in destination search box,
show/hide only matching destination cards
```

---

### Challenge 3: Create Dark Mode Toggle
**Difficulty**: ⭐⭐⭐⭐ Very Advanced

**Task**: Add button to switch between light and dark themes
```
Click "Dark Mode" button → entire website becomes dark
Colors flip automatically
```

---

## **QUICK CSS REFERENCE CHEAT SHEET**

### Flexbox (for layouts)
```css
.container {
    display: flex;
    justify-content: center;      /* horizontal centering */
    align-items: center;          /* vertical centering */
    gap: 20px;                    /* space between items */
    flex-direction: row;          /* row = horizontal, column = vertical */
}
```

### Grid (for card layouts)
```css
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 columns equal size */
    gap: 20px;                              /* space between cards */
}
```

### Colors & Backgrounds
```css
.element {
    background: #FF5733;                              /* solid color */
    background: linear-gradient(135deg, #667eea, #764ba2);  /* gradient */
    color: white;                                     /* text color */
}
```

### Sizing
```css
.element {
    width: 100%;                /* full width */
    height: 200px;              /* fixed height */
    padding: 20px;              /* space inside */
    margin: 20px;               /* space outside */
}
```

### Borders & Shadows
```css
.element {
    border: 2px solid #333;         /* border */
    border-radius: 10px;            /* rounded corners */
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);  /* shadow */
}
```

### Hover Effects
```css
.element {
    transition: all 0.3s ease;  /* smooth animation */
}

.element:hover {
    background: blue;                   /* change color */
    transform: scale(1.1);              /* grow 10% */
    transform: translateY(-10px);       /* move up 10px */
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);  /* bigger shadow */
}
```

### Responsive Design
```css
@media (max-width: 768px) {
    /* These styles apply only on tablets/phones */
    .grid {
        grid-template-columns: 1fr;  /* change to 1 column */
    }
}
```

---

## **Answers & Solutions**

*(Save these for after class)*

**Solution files will be provided with completed versions of all exercises.**

---

## **Tips for Teachers**

1. ✅ Do Exercise 1.1-1.4 as **live demo** with students
2. ✅ Let students **pair program** for Level 2 exercises
3. ✅ Challenge advanced students with **Level 3** tasks
4. ✅ Have students **share** their modified versions
5. ✅ Ask: "What changed? Why?" to reinforce learning

---

**Good luck! Ask questions if anything is unclear!** 🚀
