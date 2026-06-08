![Game Title](https://img.shields.io/badge/تحدي%20الذكاء-Quiz%20Game-blue?style=flat-square)

# 🧠 تحدي الذكاء - Trivia Game

A modern, responsive trivia game built with vanilla HTML, CSS, and JavaScript. Test your knowledge with 30+ questions across multiple categories and difficulty levels.

## ✨ Features

- 🎮 **Three Difficulty Levels**: Easy, Medium, and Hard
- 📂 **6 Categories**: Geography, History, Science, Culture, Religion, and More
- 🏆 **Scoring System**: Earn points and track your best score
- 💾 **Persistent Storage**: Your stats are saved locally
- 🎯 **Streak Tracking**: Keep track of your consecutive correct answers
- 💡 **Hint System**: Use up to 3 hints per game
- ⏭️ **Skip Questions**: Move to the next question if stuck
- 📊 **Statistics**: View your game statistics after completion
- 🌙 **Dark Theme**: Beautiful dark interface with gradient effects
- 📱 **Fully Responsive**: Works on all devices (mobile, tablet, desktop)
- 🌍 **Arabic Language**: Full RTL support for Arabic language

## 🚀 Getting Started

### Option 1: Play Online
Simply open `index.html` in your web browser.

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/ssmmacer-lgtm/-.git
cd -

# Open in your browser
open index.html
# or
start index.html
```

### Option 3: Deploy to GitHub Pages
1. Go to Repository Settings
2. Navigate to Pages
3. Select `main` branch as source
4. Your game will be live at `https://ssmmacer-lgtm.github.io/-`

## 📁 File Structure

```
├── index.html          # Main HTML file with structure and UI
├── styles.css          # All styling and animations
├── script.js           # Game logic and functionality
└── README.md          # This file
```

## 🎮 How to Play

1. **Select Difficulty Level**: Choose Easy, Medium, or Hard
2. **Pick a Category** (Optional): Select a specific category or "All"
3. **Start the Game**: Click "ابدأ اللعبة" button
4. **Answer Questions**: Type your answer and click "تحقق" or press Enter
5. **Use Hints**: Click "💡 تلميح" if you need help (3 hints total)
6. **Skip Questions**: Click "⏭ تجاوز" to skip a difficult question
7. **View Results**: See your score, accuracy, and rating

## 🎯 Scoring System

- **Correct Answer**: +10 points
- **Correct Without Hint**: +5 bonus points
- **Wrong Answer**: -3 points
- **Skip Question**: -2 points

## 📊 Difficulty Levels

| Level | Icon | Description |
|-------|------|-------------|
| Easy | 🟢 | Basic questions, great for beginners |
| Medium | 🟡 | Balanced difficulty, intermediate level |
| Hard | 🔴 | Challenging questions for experts |

## 🏅 Rating System

| Accuracy | Stars | Message |
|----------|-------|---------|
| 90%+ | ⭐⭐⭐⭐⭐ | 🏅 Legendary! Exceptional performance! |
| 75-89% | ⭐⭐⭐⭐ | 👏 Excellent! Very smart! |
| 60-74% | ⭐⭐⭐ | 👍 Good job! Keep going! |
| 40-59% | ⭐⭐ | 💪 Not bad. Try again to improve! |
| <40% | ⭐ | 🌱 Good start. Practice makes perfect! |

## 🎨 Customization

### Change Theme Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #1e40af;           /* Main color */
    --secondary: #f59e0b;         /* Accent color */
    --success: #10b981;           /* Success color */
    --error: #ef4444;             /* Error color */
    --background: #0f172a;        /* Background */
}
```

### Add More Questions
Edit `questionsBank` in `script.js`:

```javascript
{ 
    q: "Your question here?", 
    a: "Your answer", 
    hint: "Your hint", 
    cat: "Category", 
    difficulty: 1  // 1: Easy, 2: Medium, 3: Hard
}
```

## 💾 Data Storage

The game uses browser's `localStorage` to save:
- Total games played
- High score
- All scores history
- Average score

Clear cache to reset all data.

## 📱 Browser Support

- Chrome/Chromium: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- Mobile Browsers: ✅ Full support

## 🌐 Responsive Design

- **Desktop** (1024px+): Full layout with optimized spacing
- **Tablet** (768-1023px): Adjusted font sizes and buttons
- **Mobile** (480-767px): Stacked layout, touch-friendly
- **Small Mobile** (<480px): Compact design

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript (ES6+)**: Game logic and DOM manipulation
- **LocalStorage API**: Data persistence

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created by **ssmmacer-lgtm**

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add more questions
- Improve the UI/UX
- Fix bugs
- Add new features

## 📧 Support

For issues or suggestions, please open an issue on GitHub.

---

**Enjoy the game! تمتع باللعبة!** 🎮✨
