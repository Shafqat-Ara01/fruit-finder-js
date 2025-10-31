#  Fruit Finder

A mini JavaScript project that lets users search through a list of fruits in real-time.  
It’s part of my **JavaScript Pattern Practice Tracker (Week 5)** — focused on filtering lists dynamically using user input.

---

##  Features

- Live filtering as you type  
- Case-insensitive search (APPLE = apple = Apple)  
- Smart handling for empty input  
- "No fruits found" message when no match exists  
- Result count display for matched items  
- Responsive layout using Flexbox  

---

## Concepts Practiced

- DOM selection (`querySelector`, `querySelectorAll`)
- Event handling with `input` event
- Using `.toLowerCase()` for case-insensitive comparison
- Dynamically showing/hiding elements with `style.display`
- Updating content dynamically with `.textContent`

---

##  How It Works

1. User types a fruit name in the search box.  
2. The script loops through all `<li>` items.  
3. It compares the input with each fruit’s name.  
4. Only matching fruits remain visible, others hide.  
5. Displays count of visible fruits or “No fruits found” message.

---

## Author

**Shafqat Ara**  
Built as part of my JavaScript learning roadmap.
