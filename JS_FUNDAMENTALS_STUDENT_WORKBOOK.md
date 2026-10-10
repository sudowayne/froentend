# 📘 JavaScript Fundamentals: Student Workbook & Capstone Lab Manual (2026 Edition)
> **For Students**: Type every snippet on your laptop. Watch the output appear in your **Terminal** or **Chrome Console**.
> **Instructor Rule**: Study Modules 1 to 6. At the end, **choose either Assignment 1 or Assignment 2** (or any 1–2 projects assigned by your teacher) and complete all tasks.

---

## Table of Contents
1. [Module 0: How to Run Code & See Results Instantly](#module-0-how-to-run-code--see-results-instantly)
2. [Module 1: Variables & Data Types](#module-1-variables--data-types)
3. [Module 2: Conditionals & Logical Operators](#module-2-conditionals--logical-operators)
4. [Module 3: Functions (The 3 Styles & Return Values)](#module-3-functions-the-3-styles--return-values)
5. [Module 4: Loops & Repetition (Classic for, while, for...of)](#module-4-loops--repetition)
6. [Module 5: Arrays & The Big 4 Array Methods](#module-5-arrays--the-big-4-array-methods)
7. [Module 6: Objects, Destructuring & Optional Chaining](#module-6-objects-destructuring--optional-chaining)
8. [Module 7: The 6 Capstone Project Assignments (Choose 1 or 2)](#module-7-the-6-capstone-project-assignments)
   - [Project 1: E-Commerce Store & Order Checkout Engine](#project-1-e-commerce-store--order-checkout-engine)
   - [Project 2: School Academic Portal & Grade Auditor](#project-2-school-academic-portal--grade-auditor)
   - [Project 3: Digital Banking & Multi-Transaction Ledger](#project-3-digital-banking--multi-transaction-ledger)
   - [Project 4: Hospital Triage & Patient Billing System](#project-4-hospital-triage--patient-billing-system)
   - [Project 5: Logistics & Delivery Fleet Dispatcher](#project-5-logistics--delivery-fleet-dispatcher)
   - [Project 6: Gym Membership & Fitness Tracker](#project-6-gym-membership--fitness-tracker)

---

## Module 0: How to Run Code & See Results Instantly

Before writing JavaScript, set up your testing environment. You have two reliable ways to run code. Choose whichever you prefer:

### Track A: Terminal Runner (Recommended for Speed)
1. Open **VS Code** on your laptop.
2. Create a folder (e.g., `js-practice`) and create a file named `app.js`.
3. Open the built-in terminal in VS Code: press `` Ctrl + ` `` (backtick) or `Terminal -> New Terminal`.
4. Type your code in `app.js` and save (`Ctrl + S`).
5. Run the file in the terminal:
   ```bash
   node app.js
   ```
6. The output appears immediately in your terminal window!

---

### Track B: Browser DevTools Console Runner
1. In the same folder, create a file named `index.html`:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>JS Practice</title>
   </head>
   <body>
     <h1>Check Console (Press F12)</h1>
     <script src="app.js"></script>
   </body>
   </html>
   ```
2. Open `index.html` in **Google Chrome** or **Microsoft Edge** (double-click the file).
3. Press `F12` (or right-click anywhere on the page → click **Inspect**).
4. Click the **Console** tab at the top.
5. Every time you edit and save `app.js`, refresh your browser (`Ctrl + R`), and your results will print in the console!

---

## Module 1: Variables & Data Types

### The Mental Model
Think of variables as **labeled jars** in a kitchen:
* `const` = **Sealed Jar**. Once you put a label and value inside, you cannot change it. Use this by default!
* `let` = **Open Jar**. Contents can be changed or updated later (e.g., counters, changing scores).
* `var` = **Broken Jar from 1995**. Outdated and dangerous. Never use it in modern JavaScript.

### Core Data Types
* **String**: Text wrapped in quotes (`"Ameen"`, `'Lagos'`)
* **Number**: Whole numbers or decimals (`25`, `99.99`)
* **Boolean**: True or false values (`true`, `false`)
* **Undefined**: Variable created, but nothing placed inside yet
* **Null**: Intentionally empty / blank value

### Code to Type (`app.js`)
```javascript
// ── 1. Declaring Variables ───────────────────
const schoolName = "Apex Tech Academy"; // Sealed jar
let studentCount = 30;                 // Open jar

console.log("School:", schoolName);
console.log("Initial Students:", studentCount);

// ── 2. Updating Variables ────────────────────
studentCount = 35; // Allowed because it's 'let'
console.log("Updated Students:", studentCount);

// ── 3. Checking Types ────────────────────────
const studentAge = 21;
const isEnrolled = true;
const graduationYear = null;

console.log("Type of schoolName:", typeof schoolName);
console.log("Type of studentAge:", typeof studentAge);
console.log("Type of isEnrolled:", typeof isEnrolled);
```

```text
🖥️ EXPECTED OUTPUT:
School: Apex Tech Academy
Initial Students: 30
Updated Students: 35
Type of schoolName: string
Type of studentAge: number
Type of isEnrolled: boolean
```

> 🧪 **Break It & Fix It:** Add `schoolName = "New Academy";` to line 8 and run the code. Notice the red error: `TypeError: Assignment to constant variable.` This proves `const` protects your data from accidental modification!

---

## Module 2: Conditionals & Logical Operators

### The Mental Model
Conditionals act as the **security bouncer at a club door**:
* `if`: If your name is on the guest list, come inside.
* `else if`: If you're not on the guest list, but you have VIP pass, enter.
* `else`: Otherwise, turn around and go home.

### Operators to Know
* `===` : Strict equality (checks value AND type). Always use `===`, never `==`.
* `!==` : Not equal to.
* `&&` : **AND** (All conditions must be true).
* `||` : **OR** (At least one condition must be true).
* `??` : **Nullish Coalescing** (Provides a default fallback if value is `null` or `undefined`).
* `? :` : **Ternary Operator** (One-liner if/else: `condition ? ifTrue : ifFalse`).

### Code to Type (`app.js`)
```javascript
// ── 1. If / Else If / Else ───────────────────
const score = 82;

if (score >= 90) {
  console.log("Grade: A - Outstanding!");
} else if (score >= 75) {
  console.log("Grade: B - Very Good!");
} else if (score >= 50) {
  console.log("Grade: C - Pass");
} else {
  console.log("Grade: F - Try Again");
}

// ── 2. Logical AND (&&) & OR (||) ───────────
const age = 19;
const hasValidID = true;

if (age >= 18 && hasValidID) {
  console.log("Access Granted: Welcome to the Exam Hall 🎓");
} else {
  console.log("Access Denied: Missing requirements ❌");
}

// ── 3. Ternary Operator (One-Liner) ─────────
const attendance = 85;
const status = attendance >= 75 ? "ELIGIBLE" : "BARRED";
console.log("Exam Clearance:", status);

// ── 4. Nullish Coalescing (??) Fallback ─────
const customNickname = null;
const displayName = customNickname ?? "Student";
console.log("Hello,", displayName);
```

```text
🖥️ EXPECTED OUTPUT:
Grade: B - Very Good!
Access Granted: Welcome to the Exam Hall 🎓
Exam Clearance: ELIGIBLE
Hello, Student
```

> 🧪 **Break It & Fix It:** Change `hasValidID` to `false` and run the file again. Verify that the output switches to `"Access Denied"`.

---

## Module 3: Functions (The 3 Styles & Return Values)

### The Mental Model
Functions are **kitchen recipes**:
* **Parameters** = The raw ingredients you pass in.
* **Logic** = The cooking process inside the curly braces `{}`.
* **Return** = Serving the finished dish on a plate. If a function doesn't have `return`, it gives back `undefined`!

### The 3 Ways to Write Functions
1. **Function Declaration:** Classic way. Hoisted automatically.
2. **Function Expression:** Stored inside a `const` variable.
3. **Arrow Function:** Modern, concise syntax (`=>`). The standard in React.

### Code to Type (`app.js`)
```javascript
// ── 1. Function Declaration ──────────────────
function calculateDiscount(price, discountPercent) {
  const savings = (price * discountPercent) / 100;
  return price - savings;
}

const finalPrice1 = calculateDiscount(100, 20);
console.log("Discounted Price (Declaration): $" + finalPrice1);

// ── 2. Function Expression ───────────────────
const checkPass = function (mark) {
  return mark >= 50 ? "PASS" : "FAIL";
};
console.log("Result (Expression):", checkPass(68));

// ── 3. Arrow Function (Modern Industry Standard) ─
const formatInvoice = (customerName, total) => {
  return `Receipt for ${customerName}: Total Due = $${total}`;
};
console.log(formatInvoice("Ameen", 150));

// ── 4. Default Parameters ────────────────────
const greetUser = (name = "Guest") => {
  return `Welcome, ${name}!`;
};
console.log(greetUser());         // Uses default "Guest"
console.log(greetUser("Kemi"));   // Overrides with "Kemi"
```

```text
🖥️ EXPECTED OUTPUT:
Discounted Price (Declaration): $80
Result (Expression): PASS
Receipt for Ameen: Total Due = $150
Welcome, Guest!
Welcome, Kemi!
```

> 🧪 **Break It & Fix It:** Remove the `return` keyword from `formatInvoice` and run the code. Notice how it prints `Receipt for Ameen: Total Due = undefined`. Always remember to `return` when you want data back!

---

## Module 4: Loops & Repetition

### The Mental Model
Think of loops as a **runner running laps on a track**:
* Instead of building 5 separate tracks, you run the **same track 5 times**.
* A loop runs a block of code repeatedly until a condition tells it to stop.

### Key Types of Loops
1. **Classic `for` loop:** When you know the exact number of times to run (`start`, `condition`, `step`).
2. **`while` loop:** When you keep going as long as a condition remains true (e.g., charging a phone).
3. **`for...of` loop:** The cleanest loop in modern JavaScript. Visually steps through every item in a list without dealing with index numbers or `.length`!
4. **Emergency Controls:**
   * `break`: Emergency stop. Exits the loop immediately.
   * `continue`: Skip turn. Jumps directly to the next lap.

### Code to Type (`app.js`)
```javascript
// ── 1. Classic for Loop (Counting Laps) ──────
console.log("--- CLASSIC FOR LOOP ---");
for (let lap = 1; lap <= 3; lap++) {
  console.log(`Lap ${lap} completed 🏃`);
}

// ── 2. while Loop (Charging Battery) ─────────
console.log("--- WHILE LOOP ---");
let battery = 85;
while (battery < 100) {
  battery += 5;
  console.log(`Charging... Battery at ${battery}% 🔋`);
}
console.log("Battery Full! ⚡");

// ── 3. break and continue ───────────────────
console.log("--- BREAK & CONTINUE ---");
for (let seat = 1; seat <= 5; seat++) {
  if (seat === 2) {
    console.log(`Seat ${seat} is RESERVED (skipping)`);
    continue; // Skips printing Seat 2
  }
  if (seat === 4) {
    console.log(`Seat ${seat} occupied. Bus is FULL (stopping)`);
    break; // Stops the loop entirely
  }
  console.log(`Passenger seated at Seat ${seat}`);
}

// ── 4. Modern for...of Loop ─────────────────
console.log("--- FOR...OF LOOP ---");
const programmingLanguages = ["HTML", "CSS", "JavaScript", "React"];
for (const lang of programmingLanguages) {
  console.log("Learning:", lang);
}
```

```text
🖥️ EXPECTED OUTPUT:
--- CLASSIC FOR LOOP ---
Lap 1 completed 🏃
Lap 2 completed 🏃
Lap 3 completed 🏃
--- WHILE LOOP ---
Charging... Battery at 90% 🔋
Charging... Battery at 95% 🔋
Charging... Battery at 100% 🔋
Battery Full! ⚡
--- BREAK & CONTINUE ---
Passenger seated at Seat 1
Seat 2 is RESERVED (skipping)
Passenger seated at Seat 3
Seat 4 occupied. Bus is FULL (stopping)
--- FOR...OF LOOP ---
Learning: HTML
Learning: CSS
Learning: JavaScript
Learning: React
```

> ⚠️ **The Infinite Loop Trap:** If you write `while (battery < 100)` but forget to add `battery += 5;`, the loop will run forever and freeze your computer. If this happens in your terminal, press `Ctrl + C` immediately to kill it!

---

## Module 5: Arrays & The Big 4 Array Methods

### The Mental Model
An Array is a **numbered shelf** in a warehouse:
* The first slot is **index 0** (not 1!).
* You can store strings, numbers, or even objects inside.
* In modern frontend and React, arrays are the #1 data structure for rendering lists.

### The Big 4 Array Methods (The Modern Standard)
1. `.forEach()`: Visit each shelf and do an action (does **not** return a new array).
2. `.map()`: Transform every item and return a **brand new array** (The undisputed King of React!).
3. `.filter()`: Pick and keep only items that pass a true/false condition.
4. `.find()`: Find and return the **first single item** that matches.

### Code to Type (`app.js`)
```javascript
const scores = [45, 82, 95, 30, 68, 77];

// ── 1. forEach (Visit each item) ─────────────
console.log("--- forEach ---");
scores.forEach((score, index) => {
  console.log(`Student ${index + 1}: ${score}`);
});

// ── 2. map (Transform into new array) ────────
console.log("--- map ---");
// Add 5 bonus marks curve to all students
const curvedScores = scores.map((score) => score + 5);
console.log("Originals:", scores);
console.log("Curved Scores:", curvedScores);

// ── 3. filter (Keep items matching condition) ─
console.log("--- filter ---");
// Keep only passing scores (>= 50)
const passingScores = scores.filter((score) => score >= 50);
console.log("Passing Scores:", passingScores);

// ── 4. find (Grab first matching item) ───────
console.log("--- find ---");
// Find the first score above 90
const firstDistinction = scores.find((score) => score >= 90);
console.log("First Distinction:", firstDistinction);

// ── 5. Spread Operator (...) ────────────────
const squadA = ["Ameen", "Kemi"];
const squadB = [...squadA, "Tunde"]; // Copies squadA without mutating it!
console.log("New Squad:", squadB);
```

```text
🖥️ EXPECTED OUTPUT:
--- forEach ---
Student 1: 45
Student 2: 82
Student 3: 95
Student 4: 30
Student 5: 68
Student 6: 77
--- map ---
Originals: [ 45, 82, 95, 30, 68, 77 ]
Curved Scores: [ 50, 87, 100, 35, 73, 82 ]
--- filter ---
Passing Scores: [ 82, 95, 68, 77 ]
--- find ---
First Distinction: 95
New Squad: [ 'Ameen', 'Kemi', 'Tunde' ]
```

> 💡 **Immutability Concept:** Notice that `.map()` and `.filter()` never modify the original `scores` array. They create brand new copies. This rule is called **immutability**, and it is rule #1 in React.

---

## Module 6: Objects, Destructuring & Optional Chaining

### The Mental Model
An Object is an **official ID Card**:
* Instead of numbered slots (`0, 1, 2`), it uses **named keys** (`name`, `age`, `email`, `scores`).
* **Destructuring** = unpacking properties directly into variables so you don't have to keep typing `student.name`, `student.age`.
* **Optional Chaining (`?.`)** = your safety belt. If a nested property doesn't exist, it gives `undefined` instead of crashing your program.

### Code to Type (`app.js`)
```javascript
// ── 1. Creating Objects ──────────────────────
const student = {
  id: 101,
  name: "Ameen Wasiu",
  age: 22,
  course: "Fullstack Engineering",
  contact: {
    email: "ameen@apextech.com",
    phone: null // phone not provided
  },
  isGraduated: false
};

// Accessing properties (Dot Notation)
console.log("Student Name:", student.name);
console.log("Course:", student.course);

// ── 2. Object Destructuring ──────────────────
const { name, age, course } = student;
console.log(`Profile: ${name} is ${age} years old, studying ${course}.`);

// ── 3. Optional Chaining (?.) & Fallback (??) ─
// student.address does NOT exist. Without ?. this would crash with an error!
const city = student.address?.city ?? "City Not Specified";
console.log("Location:", city);

// ── 4. Arrays of Objects (Real-World Standard) ─
const studentList = [
  { id: 1, name: "Ameen", score: 85, active: true },
  { id: 2, name: "Kemi", score: 92, active: true },
  { id: 3, name: "John", score: 40, active: false }
];

// Filtering active students with passing scores
const activePassed = studentList.filter((s) => s.active && s.score >= 50);
console.log("Active Passed Students:", activePassed);

// Find student by ID
const searchedStudent = studentList.find((s) => s.id === 2);
console.log("Found Student:", searchedStudent?.name);
```

```text
🖥️ EXPECTED OUTPUT:
Student Name: Ameen Wasiu
Course: Fullstack Engineering
Profile: Ameen Wasiu is 22 years old, studying Fullstack Engineering.
Location: City Not Specified
Active Passed Students: [
  { id: 1, name: 'Ameen', score: 85, active: true },
  { id: 2, name: 'Kemi', score: 92, active: true }
]
Found Student: Kemi
```

---

## Module 7: The 6 Capstone Project Assignments

> 🎯 **INSTRUCTION FOR STUDENTS:**
> You have learned all core fundamentals of JavaScript! Below are **6 real-world capstone assignments**.
> **Choose either Assignment 1 or Assignment 2** (or the specific project your instructor assigns).
> Create a new file (e.g., `assignment.js`), write all code, run it with `node assignment.js` or in your browser console, and ensure your terminal output matches the **Expected Output Report**.

---

### Project 1: E-Commerce Store & Order Checkout Engine

#### Business Scenario
You are building the checkout and billing engine for an online tech store called **"Apex Gadgets"**. The store received a shopping cart order containing multiple products. You must validate item availability, apply tiered discount rules, compute taxes, and generate an itemized checkout receipt.

#### Starter Dataset (Copy & Paste)
```javascript
const cart = [
  { id: "P101", name: "Wireless Mechanical Keyboard", category: "Hardware", price: 120, quantity: 2, inStock: true, discountRate: 10 },
  { id: "P102", name: "Ergonomic Gaming Mouse", category: "Hardware", price: 60, quantity: 1, inStock: true, discountRate: 0 },
  { id: "P103", name: "USB-C Fast Charging Cable", category: "Accessories", price: 25, quantity: 4, inStock: true, discountRate: 15 },
  { id: "P104", name: "Ultra-Wide Monitor 34\"", category: "Screens", price: 450, quantity: 1, inStock: false, discountRate: 5 }, // Out of stock!
  { id: "P105", name: "Bluetooth Noise-Canceling Headset", category: "Audio", price: 180, quantity: 1, inStock: true, discountRate: 20 },
  { id: "P106", name: "Microfiber Cleaning Kit", category: "Accessories", price: 15, quantity: 2, inStock: true, discountRate: 0 }
];

const customer = {
  name: "Zainab Bello",
  isVIP: true,
  shippingAddress: { city: "Abuja", country: "Nigeria" }
};
```

#### Step-by-Step Requirements
1. **Filter Available Items (`.filter`):**
   * Filter out any item where `inStock === false`. Store the result in `validCart`.
   * Log an alert for each out-of-stock item: `"⚠️ Out of stock removed: [Item Name]"`.
2. **Calculate Item Price Function (Arrow Function + Ternary):**
   * Write an arrow function `calculateItemSubtotal(item)` that takes an item object.
   * Calculate: `rawTotal = price * quantity`.
   * Apply discount: `discountAmount = rawTotal * (discountRate / 100)`.
   * Return an object: `{ finalSubtotal: rawTotal - discountAmount, saved: discountAmount }`.
3. **Itemized Receipt Loop (`for...of` + Destructuring):**
   * Use a `for...of` loop to iterate through `validCart`.
   * Destructure `{ name, price, quantity, discountRate }` from each item.
   * Print each line formatted like: `"- [Name] | Qty: [Qty] x $[Price] | Disc: [Rate]% -> Subtotal: $[finalSubtotal]"`.
4. **VIP & Order Discount Engine (Conditionals + Logical Operators):**
   * Sum all item subtotals to find `cartSubtotal`.
   * If `customer.isVIP === true` AND `cartSubtotal > 300`, give an **additional 10% loyalty discount** off `cartSubtotal`.
   * Otherwise, if `cartSubtotal > 200`, give a flat $15 discount.
5. **Tax & Delivery Calculation (Ternary + Nullish Coalescing `??`):**
   * Compute 7.5% VAT on the post-discount total.
   * Delivery fee: If `customer.shippingAddress?.city === "Abuja"`, shipping is `$10`, otherwise `$25`. Use `??` to default to `$25` if city is missing.
6. **Find Item Function (`.find`):**
   * Write a function `lookupProduct(id)` that uses `.find()`. Search for `"P105"` and print details.
7. **Print Final Checkout Invoice:**
   * Print a formatted invoice matching the output below.

```text
🖥️ EXPECTED OUTPUT REPORT:
==================================================
        APEX GADGETS - CHECKOUT INVOICE
==================================================
Customer: Zainab Bello (VIP Member: Yes)
Destination: Abuja

⚠️ Alert: Out of stock removed: Ultra-Wide Monitor 34"

--- ITEMIZED ORDER ---
- Wireless Mechanical Keyboard | Qty: 2 x $120 | Disc: 10% -> Subtotal: $216.00
- Ergonomic Gaming Mouse | Qty: 1 x $60 | Disc: 0% -> Subtotal: $60.00
- USB-C Fast Charging Cable | Qty: 4 x $25 | Disc: 15% -> Subtotal: $85.00
- Bluetooth Noise-Canceling Headset | Qty: 1 x $180 | Disc: 20% -> Subtotal: $144.00
- Microfiber Cleaning Kit | Qty: 2 x $15 | Disc: 0% -> Subtotal: $30.00

--- ORDER FINANCIALS ---
Raw Subtotal:        $535.00
VIP Loyalty Saved:   $53.50 (10% applied)
Tax (7.5% VAT):      $36.11
Delivery Fee:        $10.00
--------------------------------------------------
GRAND TOTAL DUE:     $527.61
==================================================
Product Lookup [P105]: Bluetooth Noise-Canceling Headset ($180) - In Stock!
==================================================
```

---

### Project 2: School Academic Portal & Grade Auditor

#### Business Scenario
You are developing the graduation clearance and honor roll auditing engine for **"Lagos Institute of Technology"**. The software must process student profiles, calculate weighted averages, assign letter grades, verify administrative clearance, and detect students who need academic intervention.

#### Starter Dataset (Copy & Paste)
```javascript
const cohort = [
  { id: "ST-01", name: "Chinedu Okafor", scores: [88, 92, 85, 90], attendancePercent: 92, tuitionCleared: true, disciplinaryIssues: false, sponsor: "Federal Scholarship" },
  { id: "ST-02", name: "Fatima Aliyu", scores: [65, 70, 72, 68], attendancePercent: 80, tuitionCleared: true, disciplinaryIssues: false, sponsor: null },
  { id: "ST-03", name: "David Adeleke", scores: [42, 38, 50, 45], attendancePercent: 65, tuitionCleared: false, disciplinaryIssues: false, sponsor: "Private" },
  { id: "ST-04", name: "Blessing Johnson", scores: [95, 98, 92, 94], attendancePercent: 96, tuitionCleared: true, disciplinaryIssues: false, sponsor: "State Grant" },
  { id: "ST-05", name: "Emmanuel Victor", scores: [78, 82, 80, 85], attendancePercent: 74, tuitionCleared: false, disciplinaryIssues: false, sponsor: null }, // Attendance < 75%
  { id: "ST-06", name: "Grace Danjuma", scores: [85, 88, 90, 87], attendancePercent: 88, tuitionCleared: true, disciplinaryIssues: true, sponsor: "Self" } // Disciplinary flag
];
```

#### Step-by-Step Requirements
1. **Average & Grade Calculator (Arrow Function + Conditionals):**
   * Write an arrow function `calculateAcademicStanding(scores)` that:
     * Calculates the average of the 4 scores in the array.
     * Assigns grade using `if / else if`:
       * 90–100: `"A - First Class"`
       * 75–89:  `"B - Second Class Upper"`
       * 60–74:  `"C - Second Class Lower"`
       * 50–59:  `"D - Third Class"`
       * Below 50: `"F - Fail"`
     * Returns an object: `{ average: Number, grade: String }`.
2. **Clearance Auditor (Logical Operators `&&`, `||`, `!`):**
   * A student is `"CLEARED FOR GRADUATION"` if and only if:
     * `tuitionCleared === true` AND `attendancePercent >= 75` AND `!disciplinaryIssues`.
   * Otherwise, return `"BLOCKED"`.
3. **Filter Honor Roll Students (`.filter`):**
   * Use `.filter()` to extract all students who have an average >= 85 AND are `"CLEARED FOR GRADUATION"`.
4. **Format Profile Cards (`.map`):**
   * Use `.map()` to create formatted strings for the honor roll.
5. **Class Cohort Loop (`for...of` + `continue`):**
   * Loop through the cohort. If a student's average is below 50, log an `"⚠️ Academic Probation Warning"` and use `continue`.
   * Find the cohort's top-performing student (Valedictorian).
6. **Student Verification by ID (`.find`):**
   * Search for student `"ST-04"` using `.find()`.
7. **Print Class Audit Report:**
   * Format the final summary table matching the output below.

```text
🖥️ EXPECTED OUTPUT REPORT:
==================================================
   LAGOS INSTITUTE OF TECHNOLOGY - ACADEMIC AUDIT
==================================================
Total Students Evaluated: 6

--- STUDENT ACADEMIC BREAKDOWN ---
[ST-01] Chinedu Okafor | Avg: 88.75% | Grade: B - Second Class Upper | Clearance: CLEARED
[ST-02] Fatima Aliyu | Avg: 68.75% | Grade: C - Second Class Lower | Clearance: CLEARED
[ST-03] David Adeleke | Avg: 43.75% | Grade: F - Fail | Clearance: BLOCKED
⚠️  PROBATION ALERT: David Adeleke placed on Academic Probation!
[ST-04] Blessing Johnson | Avg: 94.75% | Grade: A - First Class | Clearance: CLEARED
[ST-05] Emmanuel Victor | Avg: 81.25% | Grade: B - Second Class Upper | Clearance: BLOCKED (Low Attendance & Tuition Owed)
[ST-06] Grace Danjuma | Avg: 87.50% | Grade: B - Second Class Upper | Clearance: BLOCKED (Disciplinary Sanction)

--- 🏆 GRADUATION HONOR ROLL ---
1. Blessing Johnson (Avg: 94.75% - First Class)
2. Chinedu Okafor (Avg: 88.75% - Second Class Upper)

Valedictorian: Blessing Johnson with an average of 94.75%!
==================================================
Verified Student [ST-04]: Blessing Johnson | Sponsor: State Grant
==================================================
```

---

### Project 3: Digital Banking & Multi-Transaction Ledger

#### Business Scenario
You are developing the transaction validation engine for **"SafeVault Digital Bank"**. The system processes an incoming queue of deposits, withdrawals, and transfers, checks account limits, applies overdraft protection, flags suspicious activity, and produces an end-of-day bank statement.

#### Starter Dataset (Copy & Paste)
```javascript
const account = {
  accountNumber: "SVB-008921",
  accountHolder: "Ibrahim Musa",
  startingBalance: 1200,
  dailyWithdrawalLimit: 800,
  isFrozen: false,
  accountType: "Premium Savings"
};

const incomingTransactions = [
  { id: "TX-101", type: "DEPOSIT", amount: 500, category: "Salary", note: "Freelance gig" },
  { id: "TX-102", type: "WITHDRAWAL", amount: 150, category: "Groceries", note: "Supermarket" },
  { id: "TX-103", type: "WITHDRAWAL", amount: 950, category: "Electronics", note: "New TV" }, // Exceeds daily limit!
  { id: "TX-104", type: "WITHDRAWAL", amount: 300, category: "Utilities", note: "Electricity bill" },
  { id: "TX-105", type: "DEPOSIT", amount: 200, category: "Refund", note: "Cancelled order" },
  { id: "TX-106", type: "WITHDRAWAL", amount: 2000, category: "Luxury", note: "Crypto purchase" } // Exceeds balance!
];
```

#### Step-by-Step Requirements
1. **Transaction Processing Loop (`for...of` + Conditionals):**
   * Keep a running `currentBalance` (starting at `account.startingBalance`).
   * For each transaction:
     * If `type === "DEPOSIT"`: add `amount` to `currentBalance`.
     * If `type === "WITHDRAWAL"`:
       * Check if `amount > account.dailyWithdrawalLimit`: Decline transaction! Log `"Declined: Daily withdrawal limit exceeded ($800 max)"`.
       * Check if `amount > currentBalance`: Decline transaction and charge a **$20 Insufficient Funds Penalty** from `currentBalance`.
       * If both checks pass: deduct `amount` from `currentBalance`.
2. **Filter Specific Expenses (`.filter`):**
   * Extract all successful transactions under the category `"Utilities"` or `"Groceries"`.
3. **Suspicious Transaction Detector (`.find`):**
   * Use `.find()` to detect any transaction where `amount >= 1000`.
4. **Statement Generator (Template Literals + Totals):**
   * Calculate total deposited, total successfully withdrawn, and total penalty fees.
   * Print the end-of-day statement report.

```text
🖥️ EXPECTED OUTPUT REPORT:
==================================================
           SAFEVAULT BANK - DAILY STATEMENT
==================================================
Account: SVB-008921 | Holder: Ibrahim Musa
Account Type: Premium Savings | Status: ACTIVE

Starting Balance: $1,200.00

--- TRANSACTION EXECUTION LOG ---
[TX-101] DEPOSIT: +$500.00 (Salary) -> Balance: $1,700.00
[TX-102] WITHDRAWAL: -$150.00 (Groceries) -> Balance: $1,550.00
[TX-103] DECLINED: Withdrawal of $950.00 exceeds Daily Limit ($800.00)
[TX-104] WITHDRAWAL: -$300.00 (Utilities) -> Balance: $1,250.00
[TX-105] DEPOSIT: +$200.00 (Refund) -> Balance: $1,450.00
[TX-106] DECLINED: Insufficient Funds for $2,000.00! ($20 Penalty Applied) -> Balance: $1,430.00

--- SUMMARY FINANCIALS ---
Total Deposits:      +$700.00
Total Withdrawals:   -$450.00
Penalty Fees:        -$20.00
--------------------------------------------------
ENDING BALANCE:      $1,430.00
==================================================
Flagged High-Value Event: TX-106 ($2,000.00 - Crypto purchase)
==================================================
```

---

### Project 4: Hospital Triage & Patient Billing System

#### Business Scenario
You are developing the Emergency Room Triage and Discharge Billing Engine for **"St. Jude Metropolitan Hospital"**. The system must prioritize incoming patients based on vitals, route emergency cases, handle insurance copay deductions, and output doctor handover notes.

#### Starter Dataset (Copy & Paste)
```javascript
const patients = [
  { id: "P-01", name: "Chidi Obi", age: 72, vitals: { heartRate: 110, temp: 39.5 }, symptoms: "High fever & breathing difficulty", insurance: { covered: true, copayPercent: 20 }, baseTreatmentCost: 400 },
  { id: "P-02", name: "Amaka Eze", age: 28, vitals: { heartRate: 75, temp: 36.8 }, symptoms: "Sprained wrist", insurance: { covered: true, copayPercent: 15 }, baseTreatmentCost: 150 },
  { id: "P-03", name: "Tunde Bakare", age: 64, vitals: { heartRate: 130, temp: 37.2 }, symptoms: "Severe chest pain", insurance: { covered: false, copayPercent: 0 }, baseTreatmentCost: 650 },
  { id: "P-04", name: "Ngozi Adeleke", age: 8, vitals: { heartRate: 85, temp: 38.9 }, symptoms: "Ear infection", insurance: null, baseTreatmentCost: 200 }, // No insurance object
  { id: "P-05", name: "Femi Adele", age: 34, vitals: { heartRate: 72, temp: 36.5 }, symptoms: "Routine health check", insurance: { covered: true, copayPercent: 10 }, baseTreatmentCost: 100 }
];
```

#### Step-by-Step Requirements
1. **Triage Severity Evaluator (Arrow Function + Logical Operators):**
   * Write a function `evaluateTriage(patient)`:
     * If `vitals.temp >= 39.0` OR `vitals.heartRate >= 120` OR `age >= 70`: Return `"RED - EMERGENCY"`.
     * Else if `vitals.temp >= 38.0`: Return `"YELLOW - URGENT"`.
     * Else: Return `"GREEN - STABLE"`.
2. **Safe Billing Calculator (Optional Chaining `?.` + Nullish Coalescing `??`):**
   * If `patient.insurance?.covered` is `true`:
     * Copay percent is `patient.insurance?.copayPercent ?? 0`.
     * Patient pays only their copay percentage of `baseTreatmentCost`.
   * If uninsured, patient pays 100% of `baseTreatmentCost`.
3. **Filter Emergency Queue (`.filter`):**
   * Extract all `"RED - EMERGENCY"` patients who must see the doctor immediately.
4. **Discharge Summary Loop (`for...of`):**
   * Loop through all patients, calculate their triage level, compute their final bill, and print each patient card.
5. **Lookup Patient (`.find`):**
   * Search for patient `"P-03"` and print their immediate medical alert.

```text
🖥️ EXPECTED OUTPUT REPORT:
==================================================
  ST. JUDE METROPOLITAN HOSPITAL - TRIAGE & BILLING
==================================================
Total Patients Checked In: 5

--- TRIAGE & DISCHARGE BILLING ---
[P-01] Chidi Obi (Age 72) | Triage: RED - EMERGENCY | HR: 110, Temp: 39.5°C
       Base: $400.00 | Insured: YES (20% copay) -> Patient Owes: $80.00

[P-02] Amaka Eze (Age 28) | Triage: GREEN - STABLE | HR: 75, Temp: 36.8°C
       Base: $150.00 | Insured: YES (15% copay) -> Patient Owes: $22.50

[P-03] Tunde Bakare (Age 64) | Triage: RED - EMERGENCY | HR: 130, Temp: 37.2°C
       Base: $650.00 | Insured: NO (Self-pay) -> Patient Owes: $650.00

[P-04] Ngozi Adeleke (Age 8) | Triage: YELLOW - URGENT | HR: 85, Temp: 38.9°C
       Base: $200.00 | Insured: NO (Self-pay) -> Patient Owes: $200.00

[P-05] Femi Adele (Age 34) | Triage: GREEN - STABLE | HR: 72, Temp: 36.5°C
       Base: $100.00 | Insured: YES (10% copay) -> Patient Owes: $10.00

--- SHIFT TOTALS ---
Emergency Cases (RED): 2
Total Hospital Revenue Due: $962.50
==================================================
Immediate Alert [P-03]: Tunde Bakare - Severe chest pain (RED PRIORITY)
==================================================
```

---

### Project 5: Logistics & Delivery Fleet Dispatcher

#### Business Scenario
You are developing the cargo dispatch engine for **"SpeedLink Logistics"**. A delivery van has a **maximum payload capacity of 100 kg**. You must calculate freight charges, sort express parcels, load packages up to the van's limit using loop control, and produce a flight/freight manifest.

#### Starter Dataset (Copy & Paste)
```javascript
const cargoPackages = [
  { trackingId: "TRK-901", destination: "Ibadan", weightKg: 25, priority: "EXPRESS", fragile: true, value: 500, recipient: { name: "Toyin Ajayi", phone: "0803111222" } },
  { trackingId: "TRK-902", destination: "Abeokuta", weightKg: 35, priority: "STANDARD", fragile: false, value: 150, recipient: { name: "Segun Arinze", phone: "0802333444" } },
  { trackingId: "TRK-903", destination: "Ibadan", weightKg: 30, priority: "EXPRESS", fragile: false, value: 320, recipient: { name: "Funke Akindele", phone: null } },
  { trackingId: "TRK-904", destination: "Ibadan", weightKg: 40, priority: "STANDARD", fragile: true, value: 200, recipient: { name: "Kunle Afolayan", phone: "0805555666" } }, // Will exceed van limit!
  { trackingId: "TRK-905", destination: "Osogbo", weightKg: 10, priority: "EXPRESS", fragile: true, value: 180, recipient: { name: "Bukky Wright", phone: "0807777888" } }
];

const vanCapacityKg = 100;
```

#### Step-by-Step Requirements
1. **Shipping Fee Calculator (Arrow Function + Ternary):**
   * Write `calculateShippingRate(pkg)`:
     * Base rate: `$5 per kg` (`weightKg * 5`).
     * Express surcharge: If `priority === "EXPRESS"`, add `$25`.
     * Fragile insurance fee: If `fragile === true`, add `$15`.
     * Return calculated total shipping fee.
2. **Filter Express Packages (`.filter`):**
   * Filter all packages where `priority === "EXPRESS"`.
3. **Van Loading Loop with Weight Cap (`for...of` + `break`):**
   * Keep running totals: `loadedWeight = 0`, `loadedPackages = []`.
   * Loop through `cargoPackages`:
     * If `(loadedWeight + pkg.weightKg) > vanCapacityKg`:
       * Log: `"⛔ Van capacity reached! Cannot load [trackingId] ([weightKg]kg)"`.
       * Break out of the loop!
     * Otherwise: add package to `loadedPackages` and increase `loadedWeight`.
4. **Format Dispatch Labels (`.map`):**
   * Use `.map()` to format labels showing tracking ID, destination, and recipient.
5. **Find Package by Tracking ID (`.find`):**
   * Search for `"TRK-903"`.
6. **Print Van Dispatch Manifest:**
   * Print final report matching expected output.

```text
🖥️ EXPECTED OUTPUT REPORT:
==================================================
         SPEEDLINK LOGISTICS - VAN DISPATCH
==================================================
Max Payload: 100 kg | Route: Western Corridor

--- LOADING PACKAGES ONTO VAN ---
✅ Loaded [TRK-901] | Ibadan (25kg - EXPRESS, Fragile) | Fee: $165.00
✅ Loaded [TRK-902] | Abeokuta (35kg - STANDARD) | Fee: $175.00
✅ Loaded [TRK-903] | Ibadan (30kg - EXPRESS) | Fee: $175.00
⛔ Van capacity reached (90kg/100kg)! Cannot load TRK-904 (40kg)

--- DISPATCH MANIFEST SUMMARY ---
Total Packages Loaded: 3
Total Payload Weight:  90 kg / 100 kg (90% capacity)
Remaining Capacity:    10 kg
Total Freight Revenue: $515.00
==================================================
Tracking Search [TRK-903]: Funke Akindele (Ibadan) - Express Priority
==================================================
```

---

### Project 6: Gym Membership & Fitness Tracker

#### Business Scenario
You are developing the membership audit and monthly billing engine for **"IronPulse Fitness Club"**. The software calculates subscription fees, applies annual member loyalty discounts, tracks personal trainer add-ons, checks monthly check-in attendance streaks, and rewards active members.

#### Starter Dataset (Copy & Paste)
```javascript
const members = [
  { id: "M-101", name: "Olumide Bakare", tier: "VIP", monthsActive: 14, checkInsThisMonth: 22, personalTrainer: { name: "Coach Mike", fee: 50 }, autoRenew: true },
  { id: "M-102", name: "Sade Adu", tier: "PREMIUM", monthsActive: 6, checkInsThisMonth: 16, personalTrainer: null, autoRenew: true },
  { id: "M-103", name: "Chukwudi Nze", tier: "BASIC", monthsActive: 18, checkInsThisMonth: 8, personalTrainer: null, autoRenew: false }, // Inactive/Cancelling
  { id: "M-104", name: "Amina Yusuf", tier: "VIP", monthsActive: 24, checkInsThisMonth: 26, personalTrainer: { name: "Coach Sarah", fee: 60 }, autoRenew: true },
  { id: "M-105", name: "Tariq Danladi", tier: "BASIC", monthsActive: 3, checkInsThisMonth: 14, personalTrainer: { name: "Coach Mike", fee: 40 }, autoRenew: true }
];
```

#### Step-by-Step Requirements
1. **Tier Pricing & Loyalty Calculator (Arrow Function + Conditionals):**
   * Base monthly subscription:
     * `"VIP"` = `$100`
     * `"PREMIUM"` = `$60`
     * `"BASIC"` = `$30`
   * Loyalty discount: If `monthsActive >= 12`, give a **15% discount** off the base subscription!
   * Personal Trainer Add-On: Use optional chaining and nullish coalescing `member.personalTrainer?.fee ?? 0`.
   * Return the total monthly bill.
2. **Attendance Streak Badge (Conditionals):**
   * If `checkInsThisMonth >= 20`: Award `"🦁 Beast Mode (Gold Badge)"`.
   * Else if `checkInsThisMonth >= 12`: Award `"💪 Dedicated (Silver Badge)"`.
   * Else: Award `"🌱 Casual (Bronze Badge)"`.
3. **Filter Active VIP & Dedicated Members (`.filter`):**
   * Filter all members with checkIns >= 15 AND `autoRenew === true`.
4. **Member Audit Loop (`for...of`):**
   * Loop through all members, calculate their renewal fee and badge, and print their membership summary.
5. **Search Member (`.find`):**
   * Search for member `"M-104"`.
6. **Print Gym Monthly Revenue & Attendance Report:**
   * Print final report matching expected output.

```text
🖥️ EXPECTED OUTPUT REPORT:
==================================================
        IRONPULSE FITNESS CLUB - MEMBER AUDIT
==================================================
Total Registered Members: 5

--- MEMBER BILLING & ATTENDANCE ---
[M-101] Olumide Bakare | Tier: VIP (14 mos) | Check-ins: 22 (🦁 Beast Mode)
        Base: $100.00 | Loyalty Disc: -$15.00 | Trainer: $50.00 (Coach Mike) -> Total: $135.00

[M-102] Sade Adu | Tier: PREMIUM (6 mos) | Check-ins: 16 (💪 Dedicated)
        Base: $60.00 | Loyalty Disc: $0.00 | Trainer: $0.00 -> Total: $60.00

[M-103] Chukwudi Nze | Tier: BASIC (18 mos) | Check-ins: 8 (🌱 Casual)
        Base: $30.00 | Loyalty Disc: -$4.50 | Trainer: $0.00 -> Total: $25.50 (NON-RENEWING)

[M-104] Amina Yusuf | Tier: VIP (24 mos) | Check-ins: 26 (🦁 Beast Mode)
        Base: $100.00 | Loyalty Disc: -$15.00 | Trainer: $60.00 (Coach Sarah) -> Total: $145.00

[M-105] Tariq Danladi | Tier: BASIC (3 mos) | Check-ins: 14 (💪 Dedicated)
        Base: $30.00 | Loyalty Disc: $0.00 | Trainer: $40.00 (Coach Mike) -> Total: $70.00

--- MONTHLY CLUB FINANCIALS ---
Total Active Members Renewing: 4
Total Projected Revenue:       $410.00
Top Fitness Champion:          Amina Yusuf (26 workouts!)
==================================================
Verified Member [M-104]: Amina Yusuf | VIP Tier | Personal Trainer: Coach Sarah
==================================================
```

---

## Grading Rubric for All 6 Assignments (100 Marks Total)

| Section | Marks | Criteria |
|---|---|---|
| **1. Variables & Clean Data Setup** | **10** | Appropriate use of `const` and `let`, proper array of objects structure, zero variable pollution. |
| **2. Conditionals & Business Logic** | **20** | Flawless `if / else if / else`, ternary operators, `&&`, `||`, and edge cases handled without errors. |
| **3. Reusable Helper Functions** | **20** | Clean arrow functions with parameters, accurate calculations, and explicit `return` values. |
| **4. Loops & Iteration Control** | **15** | Proper use of `for...of` or `while`, correct usage of `break` or `continue` when specified. |
| **5. Array Methods (`filter`, `map`, `find`)** | **20** | Correct non-destructive use of `.filter()`, `.map()`, and `.find()` with accurate predicates. |
| **6. Destructuring & Safe Access (`?.`, `??`)** | **10** | Clean object destructuring, safe optional chaining, nullish coalescing default fallbacks. |
| **7. Console Output Formatting** | **5** | Clean, formatted multi-line summary report matching the expected report layout. |
| **TOTAL** | **100** | **Pass Mark: 70/100** |
