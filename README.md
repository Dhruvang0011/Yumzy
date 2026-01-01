🍔 Yumzy – Food Ordering App

Yumzy is a modern food ordering web application built with React, Redux, and Tailwind CSS.
It allows users to explore restaurants, view menus, add items to cart, and manage their orders with a clean and responsive UI.

🚀 Live Demo

👉 Live App: https://yumzy-lo1m.vercel.app/

👉 GitHub Repo: https://github.com/Dhruvang0011/Yumzy

✨ Features

🏪 Browse restaurants

⭐ Filter top-rated restaurants

📜 View restaurant menus with categories

🥗 Veg / 🍗 Non-Veg filters

🛒 Add items to cart

➖ Remove single item from cart

🧹 Clear entire cart

🌙 Dark / Light mode

📱 Fully responsive design

⬅️➡️ Scrollable poster carousel with arrows

🛠️ Tech Stack

Frontend: React

Routing: React Router DOM

State Management: Redux Toolkit

Styling: Tailwind CSS (v4)

Bundler: Parcel

Deployment: Vercel

📂 Project Structure
src/
├── components/
│   ├── Header.jsx
│   ├── Body.jsx
│   ├── BodyWrapper.jsx
│   ├── RestaurantCard.jsx
│   ├── RestaurantMenu.jsx
│   ├── RestaurantCategory.jsx
│   ├── Cart.jsx
│   ├── ItemList.jsx
│   └── PosterImages.jsx
│
├── utils/
│   ├── store.js
│   ├── cartSlice.js
│   └── mockdata.js
│
├── App.jsx
├── index.css
└── main.jsx

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/Dhruvang0011/Yumzy.git
cd Yumzy


Install dependencies:

npm install


Start development server:

npx parcel index.html


Build for production:

npx parcel build index.html

🧠 Key Learnings

React component architecture

Redux state management

Cart logic with duplicate items

React Router Outlet & navigation

Responsive UI with Tailwind CSS

Real-world UI patterns (Swiggy/Zomato style)

🔮 Future Improvements

➕ Quantity control for cart items

💰 Price summary & checkout flow

🔐 Authentication (Login / Signup)

🌐 Real API integration

❤️ Favorites & order history

🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

👨‍💻 Author

Dhruvang
GitHub: @Dhruvang0011

📄 License

This project is open-source and available under the MIT License.

✅ How to add this to your project

Create a file called README.md in project root

Paste everything above

Commit & push

git add README.md
git commit -m "Add project README"
git push
