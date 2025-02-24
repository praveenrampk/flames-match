# 🔥 flames-match

[![NPM Version](https://img.shields.io/npm/v/flames-match.svg)](https://www.npmjs.com/package/flames-match)
[![Downloads](https://img.shields.io/npm/dt/flames-match.svg)](https://www.npmjs.com/package/flames-match)
[![License](https://img.shields.io/npm/l/flames-match.svg)](https://github.com/yourusername/flames-match/blob/main/LICENSE)

🔥 A simple and fun **FLAMES game** package to check relationship compatibility between two names. Get your match result instantly using this package!

---

## 🚀 Installation

Install the package using **npm** or **yarn**:

```sh
npm install flames-match
```

or  

```sh
yarn add flames-match
```

---

## 🎮 Usage

Import the package and use it to determine the relationship between two names:

```js
const flamesMatch = require("flames-match");

const result = flamesMatch("Alice", "Bob");

console.log(result); // Output: "Friends" | "Love" | "Affection" | "Marriage" | "Enemy" | "Siblings"
```

### **Using in ES Modules**
```js
import flamesMatch from "flames-match";

console.log(flamesMatch("John", "Doe")); 
// Output: One of "Friends", "Love", "Affection", "Marriage", "Enemy", or "Siblings"
```

---

## 📜 FLAMES Meaning

The result will be one of the following:
- **F** → Friends 👬  
- **L** → Love ❤️  
- **A** → Affection 😊  
- **M** → Marriage 💍  
- **E** → Enemy 😠  
- **S** → Siblings 👩‍👦  

---

## 📌 How It Works

1. The common letters between the two names are removed.  
2. The remaining letters are counted.  
3. The count is used to cycle through the word **"FLAMES"** until one letter remains.  
4. The letter determines the relationship outcome.

---

## 🛠️ Development & Contributions

Want to improve the package? Feel free to **fork** the repo and submit a **pull request**. Contributions are welcome! 😊  

```sh
git clone https://github.com/praveenrampk/flames-match.git
cd flames-match
npm install
npm run test
```

---

## 📜 License

This package is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## 📞 Contact

For queries or suggestions, feel free to reach out:

- **GitHub:** [@praveenrampk](https://github.com/praveenrampk)
- **Twitter/X:** [@praveenrampk](https://twitter.com/praveenrampk)
- **Portfolio:** [praveenram.dev](https://praveenram.netlify.app/)
- **Email:** praveenrampk@gmail.com

---

Enjoy the **FLAMES** game! 🔥🔥🔥  
