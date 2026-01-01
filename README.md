🍔 Yumzy

A Modern Food Ordering Web Application

Yumzy is a scalable, responsive food ordering web application designed to deliver a seamless restaurant discovery and ordering experience. The project follows modern frontend best practices with a clean architecture, reusable components, and centralized state management.


🌐 Live Application : -

👉 Live App: https://yumzy-lo1m.vercel.app/

👉 GitHub Repo: https://github.com/Dhruvang0011/Yumzy

🧩 Overview : -

Yumzy enables users to browse restaurants, explore categorized menus, apply filters, and manage a shopping cart with real-time updates. The application emphasizes performance, usability, and maintainability, closely resembling real-world food delivery platforms.


✨ Features : -

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

🛠️ Tech Stack : -

Frontend: React

Routing: React Router DOM

State Management: Redux Toolkit

Styling: Tailwind CSS (v4)

Bundler: Parcel

Deployment: Vercel

📂 Project Structure : -

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


⚙️ Installation & Setup : -

Clone the repository:

git clone https://github.com/Dhruvang0011/Yumzy.git
cd Yumzy


Install dependencies:

npm install


Start development server:

npx parcel index.html


Build for production:

npx parcel build index.html

🧠 Key Learnings : -

React component architecture

Redux state management

Cart logic with duplicate items

React Router Outlet & navigation

Responsive UI with Tailwind CSS

Real-world UI patterns (Swiggy/Zomato style)


🔮 Future Improvements :-

➕ Quantity control for cart items

💰 Price summary & checkout flow

🔐 Authentication (Login / Signup)

🌐 Real API integration

❤️ Favorites & order history

🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

👨‍💻 Author : -

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
