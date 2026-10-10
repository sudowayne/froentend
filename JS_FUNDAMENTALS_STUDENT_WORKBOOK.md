# JavaScript Fundamentals: Student Workbook & Capstone Lab Manual (2026 Edition)

> **For Students:** Type every snippet on your laptop. Watch the output appear in your **Terminal** or **Chrome Console**.
> **Instructor Rule:** Study Modules 0 through 6. At the end, **choose either Assignment 1 or Assignment 2** (or the specific project your instructor assigns) and complete all tasks.

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
   - [Project 2: Tertiary Institution Academic & Clearance Portal](#project-2-tertiary-institution-academic--clearance-portal)
   - [Project 3: Mobile Money & Transaction Ledger](#project-3-mobile-money--transaction-ledger)
   - [Project 4: General Hospital Triage & Billing System](#project-4-general-hospital-triage--billing-system)
   - [Project 5: Interstate Logistics & Fleet Dispatcher](#project-5-interstate-logistics--fleet-dispatcher)
   - [Project 6: Fitness Club Membership & Attendance Tracker](#project-6-fitness-club-membership--attendance-tracker)
9. [Grading Rubric for All 6 Assignments](#grading-rubric-for-all-6-assignments-100-marks-total)

---

## Module 0: How to Run Code & See Results Instantly

Before writing JavaScript, set up your testing environment. You have two reliable ways to run code on your laptop. Choose whichever you prefer:

### Track A: Terminal Runner (Recommended for Speed)
1. Open **VS Code** on your laptop.
2. Create a folder (for example, `js-class`) and create a file inside named `app.js`.
3. Open the built-in terminal in VS Code: press `Ctrl + ~` (backtick) or go to `Terminal -> New Terminal`.
4. Type your code inside `app.js` and save with `Ctrl + S`.
5. Run the file in your terminal:
   ```bash
   node app.js
   ```
6. The output appears immediately inside your terminal window.

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
3. Press `F12` (or right-click anywhere on the page -> click **Inspect**).
4. Click the **Console** tab at the top.
5. Every time you edit and save `app.js`, refresh your browser (`Ctrl + R`), and your results will print in the console.

---

## Module 1: Variables & Data Types

### The Mental Model
Think of variables as **labeled storage tins in a provision store**:
* `const` = **Sealed Tin**. Once you put a label and value inside, you cannot reassign it. Use `const` by default for safety.
* `let` = **Open Tin**. Contents can change when things update (for example, your bank balance, airtime balance, or scores).
* `var` = **Old rusty tin from 1995**. Outdated and dangerous. Never use it in modern JavaScript.

### Core Data Types
* **String**: Words or text wrapped in quotation marks (`"Lagos"`, `'Amina'`)
* **Number**: Whole numbers or decimals (`25`, `4500.50`)
* **Boolean**: True or false values (`true`, `false`)
* **Undefined**: Variable created, but nothing placed inside yet
* **Null**: Intentionally empty (for example, no middle name provided)

### Code to Type (`app.js`)
```javascript
// ── 1. Declaring Variables ───────────────────
const schoolName = "Federal Tech University"; // Sealed tin — never changes
let studentCount = 120;                       // Open tin — changes as students enroll

console.log("School:", schoolName);
console.log("Initial Students:", studentCount);

// ── 2. Updating Variables ────────────────────
studentCount = 125; // Works fine because it was declared with 'let'
console.log("Updated Students:", studentCount);

// ── 3. Checking Types ────────────────────────
const studentAge = 21;
const isRegistered = true;
const hostelRoom = null;

console.log("Type of schoolName:", typeof schoolName);
console.log("Type of studentAge:", typeof studentAge);
console.log("Type of isRegistered:", typeof isRegistered);
```

```text
[EXPECTED OUTPUT]
School: Federal Tech University
Initial Students: 120
Updated Students: 125
Type of schoolName: string
Type of studentAge: number
Type of isRegistered: boolean
```

> **[TRY THIS]:** Add `schoolName = "New University";` to your code and run it. Notice the red error: `TypeError: Assignment to constant variable.` This proves `const` protects your data from being mistakenly changed!

---

## Module 2: Conditionals & Logical Operators

### The Mental Model
Conditionals act as the **security guard at a bank door or exam hall**:
* `if`: If your name is on the approved list, enter.
* `else if`: If not on the list, but you have your student ID card, enter.
* `else`: If neither condition is met, turn back and go home.

### Operators to Know
* `===` : Strict equality (checks value AND type). Always use `===`, never `==`.
* `!==` : Not equal to.
* `&&` : **AND** (All conditions must be true).
* `||` : **OR** (At least one condition must be true).
* `??` : **Nullish Coalescing** (Provides a default fallback if value is `null` or `undefined`).
* `? :` : **Ternary Operator** (One-line shorthand for if/else: `condition ? ifTrue : ifFalse`).

### Code to Type (`app.js`)
```javascript
// ── 1. If / Else If / Else ───────────────────
const examScore = 78;

if (examScore >= 75) {
  console.log("Grade: A - Excellent");
} else if (examScore >= 60) {
  console.log("Grade: B - Very Good");
} else if (examScore >= 50) {
  console.log("Grade: C - Credit Pass");
} else {
  console.log("Grade: F - Carryover");
}

// ── 2. Logical AND (&&) & OR (||) ───────────
const age = 19;
const hasNIN = true;

if (age >= 18 && hasNIN) {
  console.log("Voter Clearance: APPROVED to vote");
} else {
  console.log("Voter Clearance: DISQUALIFIED (Must be 18+ and have NIN)");
}

// ── 3. Ternary Operator (One-Liner) ─────────
const attendanceRate = 80;
const examClearance = attendanceRate >= 75 ? "CLEARED" : "BARRED";
console.log("Exam Clearance Status:", examClearance);

// ── 4. Nullish Coalescing (??) Fallback ─────
const middleName = null;
const studentDisplayName = middleName ?? "No Middle Name";
console.log("Middle Name Record:", studentDisplayName);
```

```text
[EXPECTED OUTPUT]
Grade: A - Excellent
Voter Clearance: APPROVED to vote
Exam Clearance Status: CLEARED
Middle Name Record: No Middle Name
```

> **[TRY THIS]:** Change `hasNIN` to `false` and run the file again. Notice that the clearance changes immediately to `DISQUALIFIED`.

---

## Module 3: Functions (The 3 Styles & Return Values)

### The Mental Model
Think of a function as a **kitchen recipe for cooking jollof rice**:
* **Parameters** = The raw ingredients you provide (rice, tomato, spices).
* **Function Body** = The actual cooking process inside the curly braces `{}`.
* **Return** = Serving the cooked food on a plate. If your function does not have a `return` statement, you leave the kitchen with empty hands (`undefined`)!

### The 3 Ways to Write Functions
1. **Function Declaration:** Classic style. Hoisted automatically by JavaScript.
2. **Function Expression:** Stored inside a `const` variable.
3. **Arrow Function:** Modern, clean syntax (`=>`). The industry standard in React.

### Code to Type (`app.js`)
```javascript
// ── 1. Function Declaration (Classic) ────────
function calculateDiscount(originalPrice, discountPercent) {
  const savings = (originalPrice * discountPercent) / 100;
  return originalPrice - savings;
}
const promoPrice = calculateDiscount(10000, 15);
console.log("Promo Price (Declaration): NGN", promoPrice);

// ── 2. Function Expression ───────────────────
const verifyPassingGrade = function (score) {
  return score >= 50 ? "PASSED" : "FAILED";
};
console.log("Result (Expression):", verifyPassingGrade(64));

// ── 3. Modern Arrow Function ─────────────────
const generateReceiptLine = (customerName, amountPaid) => {
  return `Payment confirmed for ${customerName}: NGN ${amountPaid}`;
};
console.log(generateReceiptLine("Chinedu Okafor", 25000));

// ── 4. Default Parameters ────────────────────
const greetStudent = (name = "Student") => {
  return `Good morning, ${name}! Welcome to class.`;
};
console.log(greetStudent());               // Uses default value "Student"
console.log(greetStudent("Fatima Aliyu")); // Overrides default with "Fatima Aliyu"
```

```text
[EXPECTED OUTPUT]
Promo Price (Declaration): NGN 8500
Result (Expression): PASSED
Payment confirmed for Chinedu Okafor: NGN 25000
Good morning, Student! Welcome to class.
Good morning, Fatima Aliyu! Welcome to class.
```

> **[TRY THIS]:** Remove the word `return` inside `generateReceiptLine` and run your code. You will see `undefined`. Always remember: without `return`, a function gives nothing back.

---

## Module 4: Loops & Repetition

### The Mental Model
Think of loops as a **bus conductor boarding passengers or an ATM counting notes**:
* If an ATM needs to dispense five ₦1000 notes, it does not build 5 separate cash machines. It repeats the **same dispensing action 5 times** until the count is complete.
* A loop runs a block of code repeatedly until a condition tells it to stop.

### Key Types of Loops
1. **Classic `for` loop:** Use when you know the exact count in advance (`start`, `condition`, `step`).
2. **`while` loop:** Keep running as long as a condition stays true (for example, charging a phone battery until it reaches 100%).
3. **`for...of` loop:** The cleanest modern way to loop through a list without worrying about index numbers or `.length`.
4. **Emergency Controls:**
   * `break`: Emergency stop. Exits the loop immediately.
   * `continue`: Skip this turn. Skips the current item and moves directly to the next.

### Code to Type (`app.js`)
```javascript
// ── 1. Classic for Loop (Counting Dispensed Notes) ──
console.log("--- CLASSIC FOR LOOP ---");
for (let note = 1; note <= 3; note++) {
  console.log(`Dispensing NGN 1000 note ${note}`);
}

// ── 2. while Loop (Charging Phone Battery) ─────────
console.log("--- WHILE LOOP ---");
let batteryPercent = 85;
while (batteryPercent < 100) {
  batteryPercent += 5;
  console.log(`Charging... Battery now at ${batteryPercent}%`);
}
console.log("Phone battery is fully charged");

// ── 3. break and continue (Bus Passenger Check) ───
console.log("--- BREAK & CONTINUE ---");
for (let seatNumber = 1; seatNumber <= 5; seatNumber++) {
  if (seatNumber === 2) {
    console.log(`Seat ${seatNumber} is reserved (skipping)`);
    continue; // Skips seat 2 and moves straight to seat 3
  }
  if (seatNumber === 4) {
    console.log(`Seat ${seatNumber} occupied. Bus is now FULL (stopping)`);
    break; // Stops the entire loop
  }
  console.log(`Passenger seated at Seat ${seatNumber}`);
}

// ── 4. Modern for...of Loop ────────────────────────
console.log("--- FOR...OF LOOP ---");
const departments = ["Computer Science", "Accounting", "Biochemistry", "Mass Comm"];
for (const dept of departments) {
  console.log("Department:", dept);
}
```

```text
[EXPECTED OUTPUT]
--- CLASSIC FOR LOOP ---
Dispensing NGN 1000 note 1
Dispensing NGN 1000 note 2
Dispensing NGN 1000 note 3
--- WHILE LOOP ---
Charging... Battery now at 90%
Charging... Battery now at 95%
Charging... Battery now at 100%
Phone battery is fully charged
--- BREAK & CONTINUE ---
Passenger seated at Seat 1
Seat 2 is reserved (skipping)
Passenger seated at Seat 3
Seat 4 occupied. Bus is now FULL (stopping)
--- FOR...OF LOOP ---
Department: Computer Science
Department: Accounting
Department: Biochemistry
Department: Mass Comm
```

> **[CAUTION - The Infinite Loop]:** If you write `while (batteryPercent < 100)` but forget to increase the percentage with `batteryPercent += 5;`, the loop will run forever and freeze your VS Code. If this ever happens in your terminal, press `Ctrl + C` immediately to stop it!

---

## Module 5: Arrays & The Big 4 Array Methods

### The Mental Model
An array is a **numbered row of shelves in a supermarket**:
* The very first slot is always **index 0** (not 1!).
* Arrays hold lists of items: numbers, strings, or objects.
* In modern web development and React, arrays are the primary way lists of data are handled.

### The Big 4 Array Methods
1. `.forEach()`: Visits every item and performs an action (does **not** produce a new array).
2. `.map()`: Transforms every item and returns a **brand new array** (The most important method in React).
3. `.filter()`: Filters through items and keeps only those that pass a true/false condition.
4. `.find()`: Searches through the array and returns the **first single item** that matches.

### Code to Type (`app.js`)
```javascript
const testScores = [45, 82, 95, 30, 68, 77];

// ── 1. forEach (Visit each item) ─────────────
console.log("--- forEach ---");
testScores.forEach((score, index) => {
  console.log(`Candidate ${index + 1}: ${score} marks`);
});

// ── 2. map (Transform into a brand new array) 
console.log("--- map ---");
// Add 5 marks grace to all candidate scores
const boostedScores = testScores.map((score) => score + 5);
console.log("Original Scores:", testScores);
console.log("Boosted Scores:", boostedScores);

// ── 3. filter (Keep only passing scores) ─────
console.log("--- filter ---");
// Keep only scores of 50 and above
const passedCandidates = testScores.filter((score) => score >= 50);
console.log("Passed Candidates:", passedCandidates);

// ── 4. find (Locate first distinction) ───────
console.log("--- find ---");
// Find the first score reaching 90 and above
const firstDistinction = testScores.find((score) => score >= 90);
console.log("First Distinction Score:", firstDistinction);

// ── 5. Spread Operator (...) ────────────────
const mainCampus = ["Ikeja", "Yaba"];
const allCampuses = [...mainCampus, "Lekki"]; // Copies without modifying original
console.log("Campuses:", allCampuses);
```

```text
[EXPECTED OUTPUT]
--- forEach ---
Candidate 1: 45 marks
Candidate 2: 82 marks
Candidate 3: 95 marks
Candidate 4: 30 marks
Candidate 5: 68 marks
Candidate 6: 77 marks
--- map ---
Original Scores: [ 45, 82, 95, 30, 68, 77 ]
Boosted Scores: [ 50, 87, 100, 35, 73, 82 ]
--- filter ---
Passed Candidates: [ 82, 95, 68, 77 ]
--- find ---
First Distinction Score: 95
Campuses: [ 'Ikeja', 'Yaba', 'Lekki' ]
```

> **[IMPORTANT - Immutability]:** Notice that `.map()` and `.filter()` never touch or damage the original `testScores` array. They create fresh copies. This clean practice is called **immutability**.

---

## Module 6: Objects, Destructuring & Optional Chaining

### The Mental Model
An object is like a **Student ID Card or Biodata Form**:
* Instead of numbered slots (`0, 1, 2`), it uses **named keys** (`name`, `department`, `matricNumber`, `phone`).
* **Destructuring** = unpacking properties into standalone variables so you don't have to keep writing `student.name`, `student.department`.
* **Optional Chaining (`?.`)** = your safety net. If a nested property is missing, JavaScript safely gives back `undefined` instead of crashing your whole program.

### Code to Type (`app.js`)
```javascript
// ── 1. Object Definition ─────────────────────
const student = {
  id: 101,
  fullName: "Tunde Bakare",
  age: 22,
  department: "Software Engineering",
  contact: {
    email: "tunde.bakare@campus.edu",
    phone: null // Phone not provided yet
  },
  isCleared: true
};

// Accessing properties with Dot Notation
console.log("Student Name:", student.fullName);
console.log("Department:", student.department);

// ── 2. Object Destructuring ──────────────────
const { fullName, age, department } = student;
console.log(`Profile: ${fullName} (${age} years old) - Department of ${department}`);

// ── 3. Optional Chaining (?.) & Fallback (??) ─
// student.address does NOT exist. Without ?. this would crash with an error!
const residentState = student.address?.state ?? "State Not Provided";
console.log("State of Residence:", residentState);

// ── 4. Arrays of Objects (Industry Standard) ─
const studentRecords = [
  { id: 1, name: "Tunde", score: 85, feePaid: true },
  { id: 2, name: "Amina", score: 92, feePaid: true },
  { id: 3, name: "Emeka", score: 42, feePaid: false }
];

// Filtering students who passed and paid fees
const clearedStudents = studentRecords.filter((s) => s.feePaid && s.score >= 50);
console.log("Cleared Students Count:", clearedStudents.length);

// Searching a student by ID
const selectedStudent = studentRecords.find((s) => s.id === 2);
console.log("Found Student Name:", selectedStudent?.name);
```

```text
[EXPECTED OUTPUT]
Student Name: Tunde Bakare
Department: Software Engineering
Profile: Tunde Bakare (22 years old) - Department of Software Engineering
State of Residence: State Not Provided
Cleared Students Count: 2
Found Student Name: Amina
```

---

## Module 7: The 6 Capstone Project Assignments

> **INSTRUCTION FOR STUDENTS:**
> You have mastered all core JavaScript fundamentals. Below are **6 comprehensive capstone projects**.
> **Choose either Assignment 1 or Assignment 2** (or the specific project your instructor assigns).
> Create a new file (e.g., `assignment.js`), write all your code, run it with `node assignment.js` or in your Chrome console, and make sure your printed terminal output matches the **Expected Output Report**.

---

### Project 1: E-Commerce Store & Order Checkout Engine

#### Business Scenario
You are developing the checkout and billing engine for **"Apex Gadgets Store"** in Lagos. The store received an online order containing a shopping cart of several items. Your program must check stock availability, compute item subtotals with discounts, apply VIP customer perks, calculate delivery fees to different Nigerian cities, and print a clean final receipt.

#### Starter Dataset (Copy & Paste into your file)
```javascript
const cart = [
  { id: "P101", name: "Wireless Mechanical Keyboard", category: "Hardware", price: 65000, quantity: 2, inStock: true, discountRate: 10 },
  { id: "P102", name: "Ergonomic Optical Mouse", category: "Hardware", price: 18000, quantity: 1, inStock: true, discountRate: 0 },
  { id: "P103", name: "Type-C Fast Charging Cable", category: "Accessories", price: 6000, quantity: 4, inStock: true, discountRate: 15 },
  { id: "P104", name: "Ultra-Wide Monitor 34-Inch", category: "Screens", price: 380000, quantity: 1, inStock: false, discountRate: 5 }, // Out of stock!
  { id: "P105", name: "Noise-Canceling Wireless Headset", category: "Audio", price: 95000, quantity: 1, inStock: true, discountRate: 20 },
  { id: "P106", name: "Screen Cleaning Cloth", category: "Accessories", price: 3500, quantity: 2, inStock: true, discountRate: 0 }
];

const customer = {
  name: "Zainab Bello",
  isVIP: true,
  shippingAddress: { city: "Abuja", state: "FCT" }
};
```

#### Tasks to Complete
1. **Filter Available Items (`.filter`):**
   * Filter out any product where `inStock === false`. Save the valid items in `validCart`.
   * Log a notice for each out-of-stock product removed: `"[NOTICE] Out of stock item removed: [Product Name]"`.
2. **Item Subtotal Calculator (Arrow Function):**
   * Write an arrow function `calculateItemSubtotal(item)` that takes an item object.
   * Calculate: `rawTotal = price * quantity`.
   * Calculate: `discountSavings = rawTotal * (discountRate / 100)`.
   * Return an object: `{ finalSubtotal: rawTotal - discountSavings, saved: discountSavings }`.
3. **Itemized Receipt Loop (`for...of` + Destructuring):**
   * Use a `for...of` loop to iterate through `validCart`.
   * Destructure `{ name, price, quantity, discountRate }` from each item.
   * Print each item line formatted as:
     `"- [Name] | Qty: [Qty] x NGN [Price] | Disc: [Rate]% -> Subtotal: NGN [finalSubtotal]"`.
4. **VIP & Order Discount Engine (Conditionals + Logical Operators):**
   * Sum all item subtotals together to get `cartSubtotal`.
   * If `customer.isVIP === true` AND `cartSubtotal > 200000`, give an **additional 10% loyalty discount** off the subtotal.
   * Otherwise, if `cartSubtotal > 150000`, give a flat NGN 10,000 discount.
5. **Tax & Delivery Calculation (Ternary + Nullish Coalescing `??`):**
   * Calculate 7.5% VAT on the post-discount subtotal.
   * Delivery fee: If `customer.shippingAddress?.city === "Lagos"`, shipping is `NGN 3000`. If `"Abuja"`, shipping is `NGN 6000`. For any other city (or if missing), default to `NGN 9000` using `??`.
6. **Product Lookup Function (`.find`):**
   * Write a function `lookupProduct(id)` that uses `.find()`. Search for `"P105"` and print its name, price, and stock status.
7. **Print Final Checkout Receipt:**
   * Format and print the complete summary invoice matching the expected report.

```text
[EXPECTED OUTPUT REPORT]
==================================================
        APEX GADGETS STORE - CHECKOUT INVOICE
==================================================
Customer: Zainab Bello (VIP Status: YES)
Delivery City: Abuja

[NOTICE] Out of stock item removed: Ultra-Wide Monitor 34-Inch

--- ITEMIZED ORDER ---
- Wireless Mechanical Keyboard | Qty: 2 x NGN 65000 | Disc: 10% -> Subtotal: NGN 117000.00
- Ergonomic Optical Mouse | Qty: 1 x NGN 18000 | Disc: 0% -> Subtotal: NGN 18000.00
- Type-C Fast Charging Cable | Qty: 4 x NGN 6000 | Disc: 15% -> Subtotal: NGN 20400.00
- Noise-Canceling Wireless Headset | Qty: 1 x NGN 95000 | Disc: 20% -> Subtotal: NGN 76000.00
- Screen Cleaning Cloth | Qty: 2 x NGN 3500 | Disc: 0% -> Subtotal: NGN 7000.00

--- ORDER FINANCIALS ---
Raw Subtotal:        NGN 238400.00
VIP Loyalty Saved:   NGN 23840.00 (10% applied)
VAT (7.5%):          NGN 16092.00
Delivery Fee:        NGN 6000.00
--------------------------------------------------
GRAND TOTAL DUE:     NGN 236652.00
==================================================
Product Search [P105]: Noise-Canceling Wireless Headset (NGN 95000) - In Stock
==================================================
```

---

### Project 2: Tertiary Institution Academic & Clearance Portal

#### Business Scenario
You are developing the graduation clearance and honor roll auditing engine for **"Lagos Institute of Technology"**. The software must process student semester records, calculate grade point averages, assign honours classifications, verify administrative clearance (tuition fees paid, attendance rate, disciplinary records), and identify students who qualify for the Dean's Honor Roll.

#### Starter Dataset (Copy & Paste into your file)
```javascript
const cohort = [
  { id: "ST-01", name: "Chinedu Okafor", scores: [88, 92, 85, 90], attendancePercent: 92, tuitionCleared: true, disciplinaryIssues: false, sponsor: "Federal Scholarship" },
  { id: "ST-02", name: "Fatima Aliyu", scores: [65, 70, 72, 68], attendancePercent: 80, tuitionCleared: true, disciplinaryIssues: false, sponsor: null },
  { id: "ST-03", name: "David Adeleke", scores: [42, 38, 50, 45], attendancePercent: 65, tuitionCleared: false, disciplinaryIssues: false, sponsor: "Private" },
  { id: "ST-04", name: "Blessing Johnson", scores: [95, 98, 92, 94], attendancePercent: 96, tuitionCleared: true, disciplinaryIssues: false, sponsor: "State Grant" },
  { id: "ST-05", name: "Emmanuel Victor", scores: [78, 82, 80, 85], attendancePercent: 74, tuitionCleared: false, disciplinaryIssues: false, sponsor: null }, // Attendance below 75%
  { id: "ST-06", name: "Grace Danjuma", scores: [85, 88, 90, 87], attendancePercent: 88, tuitionCleared: true, disciplinaryIssues: true, sponsor: "Self" } // Disciplinary issue flagged
];
```

#### Tasks to Complete
1. **Average & Grade Calculator (Arrow Function + Conditionals):**
   * Write an arrow function `calculateAcademicStanding(scores)`:
     * Calculates the average of the 4 course scores.
     * Assigns classification using `if / else if`:
       * 90–100: `"First Class"`
       * 75–89:  `"Second Class Upper"`
       * 60–74:  `"Second Class Lower"`
       * 50–59:  `"Third Class"`
       * Below 50: `"Academic Probation"`
     * Returns an object: `{ average: Number, classification: String }`.
2. **Clearance Auditor (Logical Operators `&&`, `||`, `!`):**
   * A student receives `"CLEARED"` status if and only if:
     * `tuitionCleared === true` AND `attendancePercent >= 75` AND `!disciplinaryIssues`.
   * Otherwise, return `"BLOCKED"`.
3. **Filter Honor Roll Students (`.filter`):**
   * Use `.filter()` to extract all students who have an average >= 85 AND are `"CLEARED"`.
4. **Format Honor Roll Cards (`.map`):**
   * Use `.map()` to create formatted strings displaying each honor roll student's name and classification.
5. **Class Cohort Loop (`for...of` + `continue`):**
   * Loop through the cohort. If a student's average is below 50, log an alert: `"[PROBATION NOTICE] [Student Name] placed on Academic Probation"` and use `continue` to proceed to the next student.
   * Keep track of the top-performing student (Valedictorian).
6. **Student Verification by ID (`.find`):**
   * Search for student `"ST-04"` using `.find()`. Use nullish coalescing (`??`) to handle their sponsor name.
7. **Print Class Audit Report:**
   * Print the final summary report matching the expected layout.

```text
[EXPECTED OUTPUT REPORT]
==================================================
   LAGOS INSTITUTE OF TECHNOLOGY - ACADEMIC AUDIT
==================================================
Total Students Evaluated: 6

--- STUDENT ACADEMIC BREAKDOWN ---
[ST-01] Chinedu Okafor | Avg: 88.75% | Class: Second Class Upper | Clearance: CLEARED
[ST-02] Fatima Aliyu | Avg: 68.75% | Class: Second Class Lower | Clearance: CLEARED
[ST-03] David Adeleke | Avg: 43.75% | Class: Academic Probation | Clearance: BLOCKED
[PROBATION NOTICE] David Adeleke placed on Academic Probation
[ST-04] Blessing Johnson | Avg: 94.75% | Class: First Class | Clearance: CLEARED
[ST-05] Emmanuel Victor | Avg: 81.25% | Class: Second Class Upper | Clearance: BLOCKED
[ST-06] Grace Danjuma | Avg: 87.50% | Class: Second Class Upper | Clearance: BLOCKED

--- GRADUATION HONOR ROLL ---
1. Blessing Johnson (Avg: 94.75% - First Class)
2. Chinedu Okafor (Avg: 88.75% - Second Class Upper)

Valedictorian: Blessing Johnson with an outstanding average of 94.75%!
==================================================
Verified Student [ST-04]: Blessing Johnson | Sponsor: State Grant
==================================================
```

---

### Project 3: Mobile Money & Transaction Ledger

#### Business Scenario
You are developing the transaction validation engine for **"SafePay Mobile Money"**. The application processes a daily queue of user deposits, transfers, and bill payments, verifies daily withdrawal limits, handles insufficient funds penalties, flags large transactions, and prints an end-of-day bank statement.

#### Starter Dataset (Copy & Paste into your file)
```javascript
const account = {
  accountNumber: "0145892100",
  accountHolder: "Ibrahim Musa",
  startingBalance: 150000,
  dailyWithdrawalLimit: 100000,
  isFrozen: false,
  accountType: "Tier-3 Savings"
};

const incomingTransactions = [
  { id: "TX-101", type: "DEPOSIT", amount: 45000, category: "Salary", note: "Web design project" },
  { id: "TX-102", type: "WITHDRAWAL", amount: 15000, category: "Groceries", note: "Market purchase" },
  { id: "TX-103", type: "WITHDRAWAL", amount: 120000, category: "Electronics", note: "Phone purchase" }, // Exceeds daily limit!
  { id: "TX-104", type: "WITHDRAWAL", amount: 25000, category: "Utilities", note: "Electricity bill token" },
  { id: "TX-105", type: "DEPOSIT", amount: 10000, category: "Refund", note: "Airtime reversal" },
  { id: "TX-106", type: "WITHDRAWAL", amount: 250000, category: "Transfer", note: "Business stock" } // Exceeds balance!
];
```

#### Tasks to Complete
1. **Transaction Processing Loop (`for...of` + Conditionals):**
   * Keep a running `currentBalance` (starting at `account.startingBalance`).
   * For each transaction:
     * If `type === "DEPOSIT"`: add `amount` to `currentBalance`.
     * If `type === "WITHDRAWAL"`:
       * Check if `amount > account.dailyWithdrawalLimit`: Decline transaction! Log `"[DECLINED] Withdrawal of NGN [Amount] exceeds daily limit (NGN 100000 max)"`.
       * Check if `amount > currentBalance`: Decline transaction and deduct an **NGN 2000 Insufficient Funds Penalty Fee** from `currentBalance`.
       * If both checks pass: deduct `amount` from `currentBalance`.
2. **Filter Specific Expenses (`.filter`):**
   * Extract all successful transactions under the categories `"Utilities"` or `"Groceries"`.
3. **High-Value Transaction Detector (`.find`):**
   * Use `.find()` to detect the first transaction where `amount >= 100000`.
4. **Statement Summary Generator:**
   * Calculate total deposits, total successful withdrawals, and total penalty deductions.
   * Print the end-of-day statement matching the expected layout.

```text
[EXPECTED OUTPUT REPORT]
==================================================
        SAFEPAY MOBILE MONEY - DAILY STATEMENT
==================================================
Account: 0145892100 | Holder: Ibrahim Musa
Account Type: Tier-3 Savings | Status: ACTIVE

Starting Balance: NGN 150000.00

--- TRANSACTION EXECUTION LOG ---
[TX-101] DEPOSIT: +NGN 45000.00 (Salary) -> Balance: NGN 195000.00
[TX-102] WITHDRAWAL: -NGN 15000.00 (Groceries) -> Balance: NGN 180000.00
[TX-103] [DECLINED] Withdrawal of NGN 120000.00 exceeds daily limit (NGN 100000.00 max)
[TX-104] WITHDRAWAL: -NGN 25000.00 (Utilities) -> Balance: NGN 155000.00
[TX-105] DEPOSIT: +NGN 10000.00 (Refund) -> Balance: NGN 165000.00
[TX-106] [DECLINED] Insufficient funds for NGN 250000.00! (NGN 2000 Penalty Applied) -> Balance: NGN 163000.00

--- SUMMARY FINANCIALS ---
Total Deposits:      +NGN 55000.00
Total Withdrawals:   -NGN 40000.00
Penalty Charges:     -NGN 2000.00
--------------------------------------------------
CLOSING BALANCE:     NGN 163000.00
==================================================
High-Value Event Flagged: TX-103 (NGN 120000.00 - Phone purchase)
==================================================
```

---

### Project 4: General Hospital Triage & Billing System

#### Business Scenario
You are developing the Emergency Room Triage and Discharge Billing Engine for **"St. Jude General Hospital"**. The system must prioritize incoming patients based on their body temperature and pulse rate, route emergency cases, handle national health insurance (NHIS) copay deductions, and output doctor handover notes.

#### Starter Dataset (Copy & Paste into your file)
```javascript
const patients = [
  { id: "P-01", name: "Chidi Obi", age: 72, vitals: { heartRate: 110, temp: 39.5 }, symptoms: "High fever & breathing difficulty", insurance: { covered: true, copayPercent: 20 }, baseTreatmentCost: 45000 },
  { id: "P-02", name: "Amaka Eze", age: 28, vitals: { heartRate: 75, temp: 36.8 }, symptoms: "Sprained wrist", insurance: { covered: true, copayPercent: 15 }, baseTreatmentCost: 15000 },
  { id: "P-03", name: "Tunde Bakare", age: 64, vitals: { heartRate: 130, temp: 37.2 }, symptoms: "Severe chest pain", insurance: { covered: false, copayPercent: 0 }, baseTreatmentCost: 80000 },
  { id: "P-04", name: "Ngozi Adeleke", age: 8, vitals: { heartRate: 85, temp: 38.9 }, symptoms: "Ear infection", insurance: null, baseTreatmentCost: 22000 }, // No insurance on file
  { id: "P-05", name: "Femi Adele", age: 34, vitals: { heartRate: 72, temp: 36.5 }, symptoms: "Routine checkup", insurance: { covered: true, copayPercent: 10 }, baseTreatmentCost: 10000 }
];
```

#### Tasks to Complete
1. **Triage Severity Evaluator (Arrow Function + Logical Operators):**
   * Write an arrow function `evaluateTriage(patient)`:
     * If `vitals.temp >= 39.0` OR `vitals.heartRate >= 120` OR `age >= 70`: Return `"RED - EMERGENCY"`.
     * Else if `vitals.temp >= 38.0`: Return `"YELLOW - URGENT"`.
     * Else: Return `"GREEN - STABLE"`.
2. **Safe Billing Calculator (Optional Chaining `?.` + Nullish Coalescing `??`):**
   * If `patient.insurance?.covered` is `true`:
     * Copay percentage is `patient.insurance?.copayPercent ?? 0`.
     * Patient pays only their copay percentage of `baseTreatmentCost`.
   * If uninsured (or `insurance === null`), the patient pays 100% of `baseTreatmentCost`.
3. **Filter Emergency Queue (`.filter`):**
   * Extract all `"RED - EMERGENCY"` patients who must be examined by the doctor right away.
4. **Discharge Summary Loop (`for...of`):**
   * Loop through all patients, calculate their triage status, calculate their final bill, and print each patient record.
5. **Lookup Patient (`.find`):**
   * Search for patient `"P-03"` and print their immediate medical alert.

```text
[EXPECTED OUTPUT REPORT]
==================================================
   ST. JUDE GENERAL HOSPITAL - TRIAGE & BILLING
==================================================
Total Patients Checked In: 5

--- TRIAGE & DISCHARGE BILLING ---
[P-01] Chidi Obi (Age 72) | Triage: RED - EMERGENCY | HR: 110 bpm, Temp: 39.5 C
       Base: NGN 45000.00 | Insured: YES (20% copay) -> Patient Owes: NGN 9000.00

[P-02] Amaka Eze (Age 28) | Triage: GREEN - STABLE | HR: 75 bpm, Temp: 36.8 C
       Base: NGN 15000.00 | Insured: YES (15% copay) -> Patient Owes: NGN 2250.00

[P-03] Tunde Bakare (Age 64) | Triage: RED - EMERGENCY | HR: 130 bpm, Temp: 37.2 C
       Base: NGN 80000.00 | Insured: NO (Self-pay) -> Patient Owes: NGN 80000.00

[P-04] Ngozi Adeleke (Age 8) | Triage: YELLOW - URGENT | HR: 85 bpm, Temp: 38.9 C
       Base: NGN 22000.00 | Insured: NO (Self-pay) -> Patient Owes: NGN 22000.00

[P-05] Femi Adele (Age 34) | Triage: GREEN - STABLE | HR: 72 bpm, Temp: 36.5 C
       Base: NGN 10000.00 | Insured: YES (10% copay) -> Patient Owes: NGN 1000.00

--- SHIFT TOTALS ---
Emergency Cases (RED): 2
Total Hospital Revenue Due: NGN 114250.00
==================================================
Critical Alert [P-03]: Tunde Bakare - Severe chest pain (RED Priority)
==================================================
```

---

### Project 5: Interstate Logistics & Fleet Dispatcher

#### Business Scenario
You are developing the cargo dispatch engine for **"SpeedLink Logistics Hub"** in Ibadan. A delivery dispatch van is preparing to travel down the western corridor. The van has a **maximum payload limit of 100 kg**. You must calculate freight charges, prioritize express parcels, load packages up to the van's weight capacity using loop control, and produce the final delivery manifest.

#### Starter Dataset (Copy & Paste into your file)
```javascript
const cargoPackages = [
  { trackingId: "TRK-901", destination: "Ibadan", weightKg: 25, priority: "EXPRESS", fragile: true, recipient: { name: "Toyin Ajayi", phone: "0803111222" } },
  { trackingId: "TRK-902", destination: "Abeokuta", weightKg: 35, priority: "STANDARD", fragile: false, recipient: { name: "Segun Arinze", phone: "0802333444" } },
  { trackingId: "TRK-903", destination: "Ibadan", weightKg: 30, priority: "EXPRESS", fragile: false, recipient: { name: "Funke Akindele", phone: null } },
  { trackingId: "TRK-904", destination: "Ibadan", weightKg: 40, priority: "STANDARD", fragile: true, recipient: { name: "Kunle Afolayan", phone: "0805555666" } }, // Will exceed capacity!
  { trackingId: "TRK-905", destination: "Osogbo", weightKg: 10, priority: "EXPRESS", fragile: true, recipient: { name: "Bukky Wright", phone: "0807777888" } }
];

const vanCapacityKg = 100;
```

#### Tasks to Complete
1. **Shipping Fee Calculator (Arrow Function + Ternary):**
   * Write `calculateShippingFee(pkg)`:
     * Base freight rate: `NGN 1500 per kg` (`weightKg * 1500`).
     * Express priority fee: If `priority === "EXPRESS"`, add `NGN 5000`.
     * Fragile insurance fee: If `fragile === true`, add `NGN 3000`.
     * Return calculated total shipping fee.
2. **Filter Express Packages (`.filter`):**
   * Filter all parcels where `priority === "EXPRESS"`.
3. **Van Loading Loop with Weight Cap (`for...of` + `break`):**
   * Keep running trackers: `totalWeightLoaded = 0`, `loadedPackages = []`.
   * Loop through `cargoPackages`:
     * If `(totalWeightLoaded + pkg.weightKg) > vanCapacityKg`:
       * Log: `"[CAPACITY ALERT] Van payload reached! Cannot load [trackingId] ([weightKg]kg)"`.
       * Break out of the loop immediately!
     * Otherwise: add package to `loadedPackages` and increase `totalWeightLoaded`.
4. **Format Dispatch Labels (`.map`):**
   * Use `.map()` to format labels showing tracking ID, destination, and recipient name.
5. **Find Package by Tracking ID (`.find`):**
   * Search for package `"TRK-903"`.
6. **Print Dispatch Manifest:**
   * Print the final dispatch manifest report matching the expected layout.

```text
[EXPECTED OUTPUT REPORT]
==================================================
      SPEEDLINK LOGISTICS - INTERSTATE DISPATCH
==================================================
Maximum Van Capacity: 100 kg | Route: Western Corridor

--- LOADING PACKAGES ONTO DISPATCH VAN ---
[LOADED] TRK-901 | Ibadan (25kg - EXPRESS, Fragile) | Fee: NGN 45500.00
[LOADED] TRK-902 | Abeokuta (35kg - STANDARD) | Fee: NGN 52500.00
[LOADED] TRK-903 | Ibadan (30kg - EXPRESS) | Fee: NGN 50000.00
[CAPACITY ALERT] Van payload reached (90kg/100kg)! Cannot load TRK-904 (40kg)

--- DISPATCH MANIFEST SUMMARY ---
Total Packages Loaded: 3
Total Van Payload:     90 kg / 100 kg (90% capacity)
Remaining Capacity:    10 kg
Total Freight Revenue: NGN 148000.00
==================================================
Tracking Query [TRK-903]: Funke Akindele (Ibadan) - Express Priority
==================================================
```

---

### Project 6: Fitness Club Membership & Attendance Tracker

#### Business Scenario
You are developing the monthly billing and attendance auditing software for **"IronPulse Fitness Club"** in Ikeja, Lagos. The software calculates monthly membership dues, applies annual loyalty discounts for long-standing members, includes personal trainer fees, checks monthly gym workout attendance streaks, and prints an end-of-month club report.

#### Starter Dataset (Copy & Paste into your file)
```javascript
const members = [
  { id: "M-101", name: "Olumide Bakare", plan: "VIP", monthsActive: 14, checkInsThisMonth: 22, personalTrainer: { name: "Coach Mike", fee: 25000 }, autoRenew: true },
  { id: "M-102", name: "Sade Adu", plan: "PREMIUM", monthsActive: 6, checkInsThisMonth: 16, personalTrainer: null, autoRenew: true },
  { id: "M-103", name: "Chukwudi Nze", plan: "BASIC", monthsActive: 18, checkInsThisMonth: 8, personalTrainer: null, autoRenew: false }, // Cancelling membership
  { id: "M-104", name: "Amina Yusuf", plan: "VIP", monthsActive: 24, checkInsThisMonth: 26, personalTrainer: { name: "Coach Sarah", fee: 30000 }, autoRenew: true },
  { id: "M-105", name: "Tariq Danladi", plan: "BASIC", monthsActive: 3, checkInsThisMonth: 14, personalTrainer: { name: "Coach Mike", fee: 20000 }, autoRenew: true }
];
```

#### Tasks to Complete
1. **Tier Pricing & Loyalty Calculator (Arrow Function + Conditionals):**
   * Base monthly subscription:
     * `"VIP"` = `NGN 50000`
     * `"PREMIUM"` = `NGN 30000`
     * `"BASIC"` = `NGN 15000`
   * Loyalty discount: If `monthsActive >= 12`, apply a **15% discount** off the base subscription fee.
   * Personal Trainer Add-On: Use optional chaining and nullish coalescing: `member.personalTrainer?.fee ?? 0`.
   * Return the total monthly bill.
2. **Attendance Streak Badge (Conditionals):**
   * If `checkInsThisMonth >= 20`: Award `"Gold Attendance Champion"`.
   * Else if `checkInsThisMonth >= 12`: Award `"Silver Active Member"`.
   * Else: Award `"Bronze Casual Member"`.
3. **Filter Active Consistent Members (`.filter`):**
   * Filter members who attended >= 15 times this month AND have `autoRenew === true`.
4. **Member Audit Loop (`for...of`):**
   * Loop through all members, calculate their total monthly bill and badge, and print their membership summary line.
5. **Search Member by ID (`.find`):**
   * Search for member `"M-104"`.
6. **Print Club Financial & Attendance Report:**
   * Format and print the monthly report matching the expected layout.

```text
[EXPECTED OUTPUT REPORT]
==================================================
       IRONPULSE FITNESS CLUB - MEMBER AUDIT
==================================================
Total Registered Members: 5

--- MEMBER BILLING & ATTENDANCE ---
[M-101] Olumide Bakare | Plan: VIP (14 mos) | Check-ins: 22 (Gold Attendance Champion)
        Base: NGN 50000.00 | Loyalty Disc: -NGN 7500.00 | Trainer: NGN 25000.00 (Coach Mike) -> Total: NGN 67500.00

[M-102] Sade Adu | Plan: PREMIUM (6 mos) | Check-ins: 16 (Silver Active Member)
        Base: NGN 30000.00 | Loyalty Disc: NGN 0.00 | Trainer: NGN 0.00 -> Total: NGN 30000.00

[M-103] Chukwudi Nze | Plan: BASIC (18 mos) | Check-ins: 8 (Bronze Casual Member)
        Base: NGN 15000.00 | Loyalty Disc: -NGN 2250.00 | Trainer: NGN 0.00 -> Total: NGN 12750.00 (NON-RENEWING)

[M-104] Amina Yusuf | Plan: VIP (24 mos) | Check-ins: 26 (Gold Attendance Champion)
        Base: NGN 50000.00 | Loyalty Disc: -NGN 7500.00 | Trainer: NGN 30000.00 (Coach Sarah) -> Total: NGN 72500.00

[M-105] Tariq Danladi | Plan: BASIC (3 mos) | Check-ins: 14 (Silver Active Member)
        Base: NGN 15000.00 | Loyalty Disc: NGN 0.00 | Trainer: NGN 20000.00 (Coach Mike) -> Total: NGN 35000.00

--- MONTHLY CLUB FINANCIALS ---
Total Active Members Renewing: 4
Total Projected Revenue:       NGN 205000.00
Top Fitness Champion:          Amina Yusuf (26 workouts!)
==================================================
Verified Member [M-104]: Amina Yusuf | Plan: VIP | Trainer: Coach Sarah
==================================================
```

---

## Grading Rubric for All 6 Assignments (100 Marks Total)

| Section | Marks | Criteria |
|---|---|---|
| **1. Variables & Clean Data Setup** | **10** | Appropriate use of `const` and `let`, proper array of objects structure, zero global variable pollution. |
| **2. Conditionals & Business Logic** | **20** | Flawless `if / else if / else`, ternary operators, `&&`, `||`, and edge cases handled properly. |
| **3. Reusable Helper Functions** | **20** | Clean arrow functions with parameters, accurate mathematical calculations, and explicit `return` values. |
| **4. Loops & Iteration Control** | **15** | Proper use of `for...of` or `while`, with correct usage of `break` or `continue` when required. |
| **5. Array Methods (filter, map, find)** | **20** | Correct non-destructive use of `.filter()`, `.map()`, and `.find()` with accurate conditions. |
| **6. Destructuring & Safe Access (?. and ??)** | **10** | Clean object destructuring, safe optional chaining, and nullish coalescing default fallbacks. |
| **7. Console Output Formatting** | **5** | Clean, formatted multi-line summary report matching the expected report layout. |
| **TOTAL** | **100** | **Passing Benchmark: 70 / 100** |
