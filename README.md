# Sorting Visualizer

A simple web-based Sorting Visualizer built with **HTML, CSS, and JavaScript**. It displays an array as vertical bars and animates sorting algorithms so you can watch how the values move into ascending order.

## Features

- Generates a random array of 25 values.
- Displays each array value as a vertical bar.
- Animates sorting with color changes to highlight comparisons and progress.
- Includes these sorting algorithms:
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Quick Sort
  - Merge Sort
- Lets you generate a new random array and try another algorithm.

## Tech Stack

- **HTML** — page structure and buttons
- **CSS** — layout and bar styling
- **JavaScript** — array generation, sorting logic, and animations

## Project Structure

```text
sorting-visualizer/
├── index.html
├── style.css
├── script.js
└── README.md
```

> Your filenames may differ; update the structure above to match your project.

## How to Run

1. Download or clone this repository.
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in a web browser.
4. Click **Generate Array** to create a new set of bars.
5. Click a sorting algorithm button to watch it sort the array.

No installation or build tools are required.

## How It Works

1. The JavaScript creates random numeric values and renders each value as a bar.
2. Each sorting algorithm updates the array in ascending order.
3. The bar heights are updated to reflect changes in the array.
4. Short pauses between operations make the sorting process visible.
5. Colors distinguish bars being compared and bars that have reached their sorted position.

## Sorting Algorithms

| Algorithm | Average Time Complexity | Worst-Case Time Complexity | Extra Space (typical) |
|---|---:|---:|---:|
| Bubble Sort | O(n²) | O(n²) | O(1) |
| Selection Sort | O(n²) | O(n²) | O(1) |
| Insertion Sort | O(n²) | O(n²) | O(1) |
| Quick Sort | O(n log n) | O(n²) | O(log n) average recursion stack |
| Merge Sort | O(n log n) | O(n log n) | O(n) |


