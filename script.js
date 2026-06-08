// ==================== قاعدة البيانات ====================
const questionsBank = [
    // جغرافيا
    { q: "ما هي عاصمة المملكة العربية السعودية؟", a: "الرياض", hint: "تقع في وسط المملكة", cat: "جغرافيا", difficulty: 1 },
    { q: "ما هي عاصمة جمهورية مصر العربية؟", a: "القاهرة", hint: "مدينة الألف مئذنة", cat: "جغرافيا", difficulty: 1 },
    { q: "ما هي عاصمة الإمارات العربية المتحدة؟", a: "أبوظبي", hint: "ليست دبي", cat: "جغرافيا", difficulty: 1 },
    { q: "ما هي عاصمة المملكة الأردنية الهاشمية؟", a: "عمان", hint: "مدينة التلال السبع", cat: "جغرافيا", difficulty: 2 },
    { q: "ما هي عاصمة دولة الكويت؟", a: "الكويت", hint: "نفس اسم الدولة", cat: "جغرافيا", difficulty: 1 },
    { q: "ما هي عاصمة مملكة البحرين؟", a: "المنامة", hint: "تقع على جزيرة", cat: "جغرافيا", difficulty: 2 },
    { q: "ما هي عاصمة سلطنة عمان؟", a: "مسقط", hint: "تطل على بحر العرب", cat: "جغرافيا", difficulty: 2 },
    { q: "ما هي عاصمة دولة قطر؟", a: "الدوحة", hint: "تقع على الخليج العربي", cat: "جغرافيا", difficulty: 1 },
    { q: "ما هو أكبر محيط في العالم؟", a: "الهادي", hint: "يقع بين آسيا والأمريكتين", cat: "جغرافيا", difficulty: 2 },
    { q: "ما هي أطول قارة في العالم؟", a: "آسيا", hint: "تضم الصين والهند", cat: "جغرافيا", difficulty: 2 },
    { q: "ما هو أطول نهر في العالم؟", a: "النيل", hint: "يمر بمصر", cat: "جغرافيا", difficulty: 1 },
    { q: "ما هو البحر الذي يفصل بين أفريقيا وأوروبا؟", a: "المتوسط", hint: "الأبيض المتوسط", cat: "جغرافيا", difficulty: 2 },
    { q: "كم عدد الدول العربية؟", a: "22", hint: "اثنان وعشرون", cat: "جغرافيا", difficulty: 3 },
    { q: "في أي قارة تقع السعودية؟", a: "آسيا", hint: "القارة الصفراء", cat: "جغرافيا", difficulty: 1 },
    { q: "ما هي أصغر دولة عربية مساحة؟", a: "البحرين", hint: "جزيرة في الخليج", cat: "جغرافيا", difficulty: 3 },
    
    // تاريخ
    { q: "في أي عام تأسست المملكة العربية السعودية؟", a: "1932", hint: "في القرن العشرين", cat: "تاريخ", difficulty: 2 },
    { q: "من هو مؤسس المملكة العربية السعودية؟", a: "عبدالعزيز", hint: "الملك المؤسس", cat: "تاريخ", difficulty: 2 },
    { q: "متى تم فتح مكة المكرمة؟", a: "8هـ", hint: "في السنة الثامنة للهجرة", cat: "تاريخ", difficulty: 3 },
    { q: "من هو أول الخلفاء الراشدين؟", a: "أبوبكر", hint: "الصديق", cat: "تاريخ", difficulty: 2 },
    { q: "في أي عام حدثت غزوة بدر الكبرى؟", a: "2هـ", hint: "السنة الثانية للهجرة", cat: "تاريخ", difficulty: 3 },
    
    // علوم
    { q: "ما هو الكوكب الأحمر؟", a: "المريخ", hint: "رابع كوكب من الشمس", cat: "علوم", difficulty: 1 },
    { q: "ما هو الغاز الذي نتنفسه؟", a: "الأكسجين", hint: "رمزه O", cat: "علوم", difficulty: 1 },
    { q: "كم عدد عظام الإنسان البالغ؟", a: "206", hint: "أكثر من 200", cat: "علوم", difficulty: 2 },
    { q: "ما هي أكبر عضوة في جسم الإنسان؟", a: "الجلد", hint: "يغطي الجسم بالكامل", cat: "علوم", difficulty: 1 },
    { q: "ما هو أسرع حيوان بري؟", a: "الفهد", hint: "يعيش في أفريقيا", cat: "علوم", difficulty: 1 },
    { q: "ما هو الكوكب الأقرب للشمس؟", a: "عطارد", hint: "الأصغر في المجموعة الشمسية", cat: "علوم", difficulty: 2 },
    { q: "ما هو أذكى حيوان في العالم؟", a: "الدلفين", hint: "يعيش في الماء", cat: "علوم", difficulty: 2 },
    { q: "كم عدد ألوان قوس قزح؟", a: "7", hint: "سبعة", cat: "علوم", difficulty: 1 },
    
    // ثقافة وألغاز
    { q: "ما هي لغة الضاد؟", a: "العربية", hint: "لغة القرآن الكريم", cat: "ثقافة", difficulty: 1 },
    { q: "كم عدد حروف اللغة العربية؟", a: "28", hint: "ثمانية وعشرون", cat: "ثقافة", difficulty: 2 },
    { q: "العملة الرسمية للسعودية؟", a: "الريال", hint: "العملة السعودية", cat: "ثقافة", difficulty: 1 },
    { q: "ما هو الحيوان الذي يلقب بسفينة الصحراء؟", a: "الجمل", hint: "يتحمل العطش", cat: "ثقافة", difficulty: 1 },
    { q: "ما هو الشيء الذي له رقبة بدون رأس؟", a: "الزجاجة", hint: "تشرب منه", cat: "ثقافة", difficulty: 2 },
    { q: "ما هو البيت الذي ليس له أبواب ولا نوافذ؟", a: "بيت الشعر", hint: "يقوله الشاعر", cat: "ثقافة", difficulty: 3 },
    { q: "كم شهر في السنة الميلادية؟", a: "12", hint: "اثنا عشر", cat: "ثقافة", difficulty: 1 },
    { q: "ما هو أول يوم في الأسبوع؟", a: "الأحد", hint: "يأتي بعد السبت", cat: "ثقافة", difficulty: 1 },
    
    // دين
    { q: "من هو النبي الذي ابتلعه الحوت؟", a: "يونس", hint: "ذو النون", cat: "دين", difficulty: 2 },
    { q: "ما هي السورة التي تسمى قلب القرآن؟", a: "يس", hint: "حرفان", cat: "دين", difficulty: 3 },
    { q: "كم جزء في القرآن الكريم؟", a: "30", hint: "ثلاثون", cat: "دين", difficulty: 1 }
];

// ==================== متغيرات اللعبة ====================
let gameState = {
    currentMode: null,
    currentCategory: 'الكل',
    questions: [],
    currentIndex: 0,
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    streak: 0,
    maxStreak: 0,
    hintsUsed: 0,
    hintsTotal: 3,
    gameActive: false,
    currentHintUsed: false,
    totalGames: parseInt(localStorage.getItem('totalGames')) || 0,
    highScore: parseInt(localStorage.getItem('highScore')) || 0,
    allScores: JSON.parse(localStorage.getItem('allScores')) || []
};

// ==================== دوال مساعدة ====================
function shuffleArray(arr) {
    let a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function normalizeAnswer(text) {
    return text.trim()
        .replace(/[ًٌٍَُِّْ]/g, '')
        .replace(/[أإآ]/g, 'ا')
        .replace(/ة/g, 'ه')
        .replace(/ى/g, 'ي')
        .replace(/\s+/g, ' ')
        .toLowerCase();
}

function getDifficultyIcon(difficulty) {
    if (difficulty === 1) return '🟢';
    if (difficulty === 2) return '🟡';
    return '🔴';
}

function saveStats() {
    localStorage.setItem('totalGames', gameState.totalGames);
    localStorage.setItem('highScore', gameState.highScore);
    localStorage.setItem('allScores', JSON.stringify(gameState.allScores));
}

function updateHomeStats() {
    document.getElementById('totalGames').textContent = gameState.totalGames;
    document.getElementById('highScore').textContent = gameState.highScore;
    
    if (gameState.allScores.length > 0) {
        const avg = Math.round(gameState.allScores.reduce((a, b) => a + b, 0) / gameState.allScores.length);
        document.getElementById('avgScore').textContent = avg;
    }
}

function createParticles() {
    const container = document.getElementById('particles');
    container.innerHTML = '';
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 8 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 8 + 10) + 's';
        container.appendChild(particle);
    }
}

// ==================== بدء اللعبة ====================
function startGame(mode) {
    gameState.currentMode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.${mode}-mode`).classList.add('active');
    document.getElementById('startBtn').disabled = false;
}

function setCategory(category) {
    gameState.currentCategory = category;
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function beginGame() {
    if (!gameState.currentMode) return;
    
    // تصفية الأسئلة حسب الصعوبة والفئة
    let filtered = questionsBank.filter(q => {
        let categoryMatch = gameState.currentCategory === 'الكل' || q.cat === gameState.currentCategory;
        let difficultyMatch = true;
        
        if (gameState.currentMode === 'easy') difficultyMatch = q.difficulty <= 1;
        else if (gameState.currentMode === 'medium') difficultyMatch = q.difficulty <= 2;
        else if (gameState.currentMode === 'hard') difficultyMatch = true;
        
        return categoryMatch && difficultyMatch;
    });
    
    gameState.questions = shuffleArray(filtered).slice(0, 20);
    gameState.currentIndex = 0;
    gameState.score = 0;
    gameState.correctAnswers = 0;
    gameState.wrongAnswers = 0;
    gameState.streak = 0;
    gameState.maxStreak = 0;
    gameState.hintsUsed = 0;
    gameState.hintsTotal = 3;
    gameState.gameActive = true;
    gameState.currentHintUsed = false;
    
    // تبديل الشاشات
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    document.getElementById('endScreen').style.display = 'none';
    
    // تحديث المعلومات
    document.getElementById('modeBadge').textContent = gameState.currentMode;
    document.getElementById('categoryBadge').textContent = gameState.currentCategory;
    
    showQuestion();
}

function showQuestion() {
    if (gameState.currentIndex >= gameState.questions.length) {
        endGame();
        return;
    }
    
    const q = gameState.questions[gameState.currentIndex];
    
    document.getElementById('questionNumber').textContent = `${gameState.currentIndex + 1}/20`;
    document.getElementById('difficultyIcon').textContent = getDifficultyIcon(q.difficulty);
    document.getElementById('questionText').textContent = q.q;
    document.getElementById('hintText').textContent = '';
    document.getElementById('answerInput').value = '';
    document.getElementById('answerInput').className = '';
    document.getElementById('resultMsg').textContent = '';
    document.getElementById('resultMsg').className = 'result-message';
    document.getElementById('checkBtn').disabled = false;
    document.getElementById('hintBtn').disabled = gameState.hintsUsed >= gameState.hintsTotal;
    document.getElementById('nextBtn').classList.add('btn-hidden');
    document.getElementById('answerInput').disabled = false;
    document.getElementById('answerInput').focus();
    
    gameState.currentHintUsed = false;
    updateGameUI();
}

function updateGameUI() {
    document.getElementById('scoreDisplay').textContent = gameState.score;
    document.getElementById('streakDisplay').textContent = gameState.streak;
    document.getElementById('progressText').textContent = `${gameState.currentIndex} / 20`;
    
    const progress = (gameState.currentIndex / 20) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    document.getElementById('hintCount').textContent = gameState.hintsTotal - gameState.hintsUsed;
}

// ==================== التحقق من الإجابة ====================
function checkAnswer() {
    if (!gameState.gameActive) return;
    
    const userAnswer = document.getElementById('answerInput').value;
    if (!userAnswer.trim()) {
        document.getElementById('resultMsg').textContent = '⚠️ الرجاء كتابة إجابة';
        document.getElementById('resultMsg').className = 'result-message warning';
        return;
    }
    
    const correctAnswer = gameState.questions[gameState.currentIndex].a;
    const userNorm = normalizeAnswer(userAnswer);
    const correctNorm = normalizeAnswer(correctAnswer);
    
    const inputField = document.getElementById('answerInput');
    let isCorrect = (userNorm === correctNorm);
    
    // مرونة إضافية
    if (!isCorrect) {
        if (correctNorm === 'عبدالعزيز' && userNorm.includes('عبدالعزيز')) isCorrect = true;
        if (correctNorm === 'أبوبكر' && (userNorm.includes('ابوبكر') || userNorm.includes('أبوبكر'))) isCorrect = true;
        if (correctNorm === 'الهادي' && (userNorm.includes('هادي') || userNorm === 'المحيط الهادي' || userNorm === 'المحيط الهادئ')) isCorrect = true;
        if (correctNorm === 'المتوسط' && (userNorm.includes('متوسط') || userNorm === 'البحر المتوسط')) isCorrect = true;
        if (correctNorm === 'النيل' && userNorm === 'نهر النيل') isCorrect = true;
        if (correctNorm === 'الجمل' && userNorm === 'جمل') isCorrect = true;
        if (correctNorm === 'الزجاجة' && userNorm === 'زجاجة') isCorrect = true;
        if (correctNorm === 'الدلفين' && userNorm === 'دلفين') isCorrect = true;
        if (correctNorm === 'الريال' && userNorm === 'ريال') isCorrect = true;
    }
    
    if (isCorrect) {
        inputField.classList.add('correct-flash');
        document.getElementById('resultMsg').textContent = '✅ إجابة صحيحة!';
        document.getElementById('resultMsg').className = 'result-message success';
        
        gameState.score += 10;
        if (!gameState.currentHintUsed) gameState.score += 5;
        gameState.correctAnswers++;
        gameState.streak++;
        if (gameState.streak > gameState.maxStreak) gameState.maxStreak = gameState.streak;
    } else {
        inputField.classList.add('wrong-flash');
        document.getElementById('resultMsg').textContent = `❌ خاطئة! الإجابة: ${correctAnswer}`;
        document.getElementById('resultMsg').className = 'result-message error';
        
        gameState.score = Math.max(0, gameState.score - 3);
        gameState.wrongAnswers++;
        gameState.streak = 0;
        
        setTimeout(() => {
            inputField.classList.remove('wrong-flash');
        }, 500);
    }
    
    document.getElementById('checkBtn').disabled = true;
    document.getElementById('hintBtn').disabled = true;
    document.getElementById('answerInput').disabled = true;
    document.getElementById('nextBtn').classList.remove('btn-hidden');
    document.getElementById('nextBtn').focus();
    
    updateGameUI();
    
    setTimeout(() => {
        inputField.classList.remove('correct-flash');
    }, 800);
}

function useHint() {
    if (!gameState.gameActive || gameState.currentHintUsed || gameState.hintsUsed >= gameState.hintsTotal) return;
    
    gameState.hintsUsed++;
    gameState.currentHintUsed = true;
    document.getElementById('hintText').textContent = '💡 ' + gameState.questions[gameState.currentIndex].hint;
    
    if (gameState.hintsUsed >= gameState.hintsTotal) {
        document.getElementById('hintBtn').disabled = true;
    }
    updateGameUI();
}

function skipQuestion() {
    if (!gameState.gameActive) return;
    
    gameState.score = Math.max(0, gameState.score - 2);
    gameState.wrongAnswers++;
    gameState.streak = 0;
    gameState.currentIndex++;
    
    updateGameUI();
    showQuestion();
}

function nextQuestion() {
    gameState.currentIndex++;
    showQuestion();
}

function quitGame() {
    if (confirm('هل تريد الخروج من اللعبة؟')) {
        returnHome();
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        if (document.getElementById('nextBtn').classList.contains('btn-hidden')) {
            checkAnswer();
        } else {
            nextQuestion();
        }
    }
}

// ==================== نهاية اللعبة ====================
function endGame() {
    gameState.gameActive = false;
    gameState.totalGames++;
    gameState.allScores.push(gameState.score);
    
    if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
    }
    
    saveStats();
    
    // حساب النسبة
    const accuracy = gameState.correctAnswers + gameState.wrongAnswers > 0 
        ? Math.round((gameState.correctAnswers / (gameState.correctAnswers + gameState.wrongAnswers)) * 100)
        : 0;
    
    // تحديد الرسالة والنجوم
    let message = '';
    let stars = '⭐';
    let trophy = '👑';
    
    if (accuracy >= 90) {
        stars = '⭐⭐⭐⭐⭐';
        message = '🏅 أسطورة! أداء استثنائي يا بطل!';
        trophy = '👑';
    } else if (accuracy >= 75) {
        stars = '⭐⭐⭐⭐';
        message = '👏 أداء ممتاز! أنت ذكي جداً.';
        trophy = '🏆';
    } else if (accuracy >= 60) {
        stars = '⭐⭐⭐';
        message = '👍 أداء جيد. واصل التحدي!';
        trophy = '🎖️';
    } else if (accuracy >= 40) {
        stars = '⭐⭐';
        message = '💪 لا بأس. حاول مرة أخرى لتتحسن.';
        trophy = '🎯';
    } else {
        stars = '⭐';
        message = '🌱 بداية موفقة. التدريب يصنع البطل!';
        trophy = '🎪';
    }
    
    // تحديث شاشة النهاية
    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('finalCorrect').textContent = gameState.correctAnswers;
    document.getElementById('finalWrong').textContent = gameState.wrongAnswers;
    document.getElementById('finalAccuracy').textContent = accuracy + '%';
    document.getElementById('starsDisplay').textContent = stars;
    document.getElementById('endMessage').textContent = message;
    document.getElementById('trophyIcon').textContent = trophy;
    
    // تبديل الشاشات
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('endScreen').style.display = 'block';
}

function restartGame() {
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById('homeScreen').style.display = 'block';
    document.getElementById('endScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'none';
    
    document.getElementById('startBtn').disabled = true;
    gameState.currentMode = null;
    gameState.currentCategory = 'الكل';
    
    updateHomeStats();
}

function returnHome() {
    restartGame();
}

function shareScore() {
    const accuracy = gameState.correctAnswers + gameState.wrongAnswers > 0 
        ? Math.round((gameState.correctAnswers / (gameState.correctAnswers + gameState.wrongAnswers)) * 100)
        : 0;
    
    const text = `🎮 حصلت على ${gameState.score} نقطة في لعبة تحدي الذكاء! 🏅\nدقة: ${accuracy}% | صحيحة: ${gameState.correctAnswers}/20`;
    
    if (navigator.share) {
        navigator.share({
            title: 'تحدي الذكاء',
            text: text
        });
    } else {
        alert(text);
    }
}

// ==================== التهيئة ====================
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    updateHomeStats();
});

// إعادة إنشاء الجزيئات عند تغيير حجم النافذة
window.addEventListener('resize', createParticles);
