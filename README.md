# DOB Matrix Generator

A dynamic 4x4 Date of Birth based matrix generator built using HTML, CSS and JavaScript.

The application accepts a user's Date of Birth and generates a mathematically structured 4x4 matrix where multiple combinations produce the same total.

---

# Features

✅ Date Picker Input
✅ Automatic Matrix Generation
✅ Row Total Calculation
✅ Column Total Calculation
✅ Diagonal Total Calculation
✅ Corner Value Total
✅ Center Value Total
✅ Dynamic Highlighting
✅ Mobile Friendly UI
✅ Fast and Lightweight

---

# Formula Logic

For a Date of Birth:

18-04-1972

Variables are generated as:

* A = Day = 18
* B = Month = 4
* C = First Half of Year = 19
* D = Second Half of Year = 72

Matrix Formation:

| A   | B   | C   | D   |
| --- | --- | --- | --- |
| D+1 | C-1 | B-3 | A+3 |
| B-2 | A+2 | D+2 | C-2 |
| C+1 | D-1 | A+1 | B-1 |

---

# Example Matrix

| 18 | 4  | 19 | 72 |
| -- | -- | -- | -- |
| 73 | 18 | 1  | 21 |
| 2  | 20 | 74 | 17 |
| 20 | 71 | 19 | 3  |

All major rows, columns, diagonals, corner values and center values total:

113

---

# Technologies Used

* HTML5
* CSS3
* JavaScript

---

# Future Enhancements

* AI Powered Analysis
* Tamil Language Support
* PDF Export
* Image Export
* Animated Highlights
* Voice Input
* Numerology Interpretation
* Mobile App Version

---

# Live Demo

GitHub Pages deployment coming soon.

---

# Author

Premanandhan N K

---
