This is the course project. This project uses the server arranged by the professor.
A webpage about Winona's tree. It implements cross-region, zoom and other functions.

This is a **Tree Information Web Application** built using **HTML, CSS, JavaScript, and XML**. It dynamically loads tree data, displays images, and allows users to search for tree names.

## 📂 Project Structure

### 🖥️ Frontend (Client-Side)
| File | Description |
|------|------------|
| `Homepage.html` | Main webpage structure |
| `Homepage.css` | Stylesheet for the website |
| `Homepage.js` | JavaScript logic for UI interactions, XML loading, and search |

### 🗂️ Data Storage
| File | Description |
|------|------------|
| `1.xml` | XML file containing tree information |
| `280.xml` | XML file storing additional tree descriptions |

### 🏗️ JavaScript Functionalities
| Function | Description |
|----------|------------|
| `loadXMLDoc(funct)` | Loads XML files and calls the appropriate function (`myFunction1()` or `buildWordLists()`) |
| `myFunction1(xml)` | Extracts tree images, names, and IDs from XML, dynamically adding them to the webpage |
| `buildWordLists(xml)` | Generates an A-Z list of tree names for the left-side menu |
| `createSections()` | Creates alphabetized sections for tree categorization |
| `createLists()` | Builds an interactive A-Z navigation menu |
| `Search()` | Allows users to search for trees dynamically |
| `fillEmptySections()` | Fills empty A-Z sections with "Coming Soon!" placeholders |
| `treeDescriptionXML(funct)` | Loads tree descriptions from `280.xml` and updates the webpage |
| `topFunction()` | Scrolls the page back to the top when a button is clicked |

## 🚀 Features
- 🌲 **Tree Name & Image Display**: Fetches tree data dynamically from XML.
- 🔍 **Search Functionality**: Users can search for trees by name.
- 📜 **Tree Descriptions**: Loads tree information from `280.xml` and displays relevant data.
- 📂 **A-Z Tree Categorization**: Organizes trees into alphabetical sections.
- 🔄 **Dynamic HTML Generation**: JavaScript dynamically creates list elements and sections.
