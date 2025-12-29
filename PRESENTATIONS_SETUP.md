# 📊 הוראות להטמעת המצגות

## 🎯 מה יש לך:

האתר תומך ב-2 מצגות טכניות:

1. **MCP Client Presentation** (`/mcp-presentation`) - מצגת על MCP
2. **Root-Cause AI Presentation** (`/rootCauseAi-presentation`) - מצגת על Root-Cause AI

---

## 📁 איפה לשים את הקבצים:

```
portfolio-project/
└── public/
    ├── mcp-presentation/
    │   └── index.html          ← מצגת MCP
    └── rootCauseAi-presentation/
        └── index.html          ← מצגת Root-Cause AI
```

---

## 🔄 תרחיש 1: יש לך קובץ HTML

**צעדים:**

1. מחק את קובץ ה-`index.html` הקיים (placeholder)
2. העתק את קובץ ה-HTML שלך
3. שים אותו בתור `index.html` בתיקייה המתאימה
4. אם יש קבצי CSS/JS/תמונות, שים אותם באותה תיקייה

**דוגמה:**
```
public/mcp-presentation/
├── index.html       ← המצגת שלך
├── styles.css       ← אם יש
├── script.js        ← אם יש
└── images/
    └── logo.png
```

---

## 📄 תרחיש 2: יש לך קובץ PowerPoint או PDF

### שלב 1: המרה ל-PDF (אם זה PowerPoint)

אם יש לך `.pptx`:
1. פתח את PowerPoint
2. File → Export → Create PDF/XPS
3. שמור בשם `slides.pdf`

### שלב 2: שים את ה-PDF

העתק את `slides.pdf` לתיקייה המתאימה:
- MCP: `public/mcp-presentation/slides.pdf`
- Root-Cause AI: `public/rootCauseAi-presentation/slides.pdf`

### שלב 3: עדכן את index.html

**פתח את הקובץ** `public/mcp-presentation/index.html`

**מחק הכל והחלף בזה:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MCP Client Presentation</title>
    <style>
        body { 
            margin: 0; 
            padding: 0; 
            overflow: hidden; 
            background: #000;
        }
        embed { 
            width: 100vw; 
            height: 100vh; 
            border: none;
        }
    </style>
</head>
<body>
    <embed src="slides.pdf" type="application/pdf" width="100%" height="100%">
</body>
</html>
```

**עשה את אותו דבר** ל-`public/rootCauseAi-presentation/index.html`

---

## 🌐 תרחיש 3: המצגת ב-Google Slides

### אם המצגת שלך ב-Google Slides:

1. **פתח את המצגת ב-Google Slides**
2. **File → Share → Publish to web**
3. **בחר: Embed**
4. **העתק את קוד ה-iframe**

קוד ה-iframe ייראה כך:
```html
<iframe src="https://docs.google.com/presentation/d/e/XXXXXXX/embed?start=false&loop=false&delayms=3000" 
        frameborder="0" 
        width="960" 
        height="569" 
        allowfullscreen="true">
</iframe>
```

### עדכן את הקוד:

**פתח את** `app/mcp-presentation/page.tsx`

**החלף את ה-src:**

```tsx
export default function MCPPresentationPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">MCP Client - Technical Presentation</h1>
      </div>
      <div className="flex-1">
        <iframe
          src="YOUR_GOOGLE_SLIDES_EMBED_LINK_HERE"
          className="w-full h-full border-0"
          title="MCP Client Presentation"
          allowFullScreen
        />
      </div>
    </div>
  );
}
```

שים את הלינק שהעתקת במקום `YOUR_GOOGLE_SLIDES_EMBED_LINK_HERE`

---

## ✅ בדיקה שהכל עובד:

```bash
cd portfolio-project
npm install
npm run dev
```

גלוש ל:
- http://localhost:3000/mcp-presentation
- http://localhost:3000/rootCauseAi-presentation
- http://localhost:3000/presentation

---

## 🎨 עצות נוספות:

### PDF לא נטען?
אם ה-PDF לא נטען בדפדפן מסוים (Safari לפעמים מתנהג מוזר):

**פתרון אלטרנטיבי - השתמש ב-object במקום embed:**

```html
<object data="slides.pdf" type="application/pdf" width="100%" height="100%">
    <p>Your browser doesn't support PDFs. 
       <a href="slides.pdf">Download the PDF</a>
    </p>
</object>
```

### רוצה navigation בתוך המצגת?

אם אתה משתמש ב-PDF, תוכל להוסיף כפתורים:

```html
<div style="position: absolute; top: 10px; right: 10px; z-index: 999;">
    <button onclick="document.querySelector('embed').contentWindow.print()">
        🖨️ Print
    </button>
    <a href="slides.pdf" download style="margin-left: 10px;">
        📥 Download
    </a>
</div>
```

---

## 🆘 תקלות נפוצות:

**בעיה:** המצגת לא נטענת
- ✅ בדוק ששם הקובץ נכון: `index.html` בדיוק
- ✅ בדוק ש-PDF בשם `slides.pdf` אם אתה משתמש ב-PDF
- ✅ בדוק שהנתיב נכון ברשימת ה-src

**בעיה:** CSS/JS לא עובד במצגת HTML
- ✅ בדוק שכל הקבצים באותה תיקייה
- ✅ בדוק שהנתיבים relative נכונים

**בעיה:** הניווט לא מופיע
- ✅ הפעל מחדש את השרת: `npm run dev`
- ✅ נקה cache: Ctrl+Shift+R (או Cmd+Shift+R)

---

🎯 **בהצלחה!**
