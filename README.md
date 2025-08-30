# Webia Ecommerce

Webia is a modern ecommerce web application built with React, Redux Toolkit, and Firebase. It features a clean UI, user authentication, product browsing, cart and wishlist management, and order tracking.

![Webia Logo](src/assets/Logo.png)

## 🚀 Features

- User authentication (Sign Up / Log In)
- Browse products by category (Men, Women, Kids)
- Add products to cart and wishlist
- Place orders and view order history
- Responsive carousel for featured products
- Trending and new arrival sections
- Email notification signup
- Toast notifications for actions
- Persistent user data with Firebase Firestore

## 🛠️ Tech Stack

- **Frontend:** React, Redux Toolkit, React Router, Framer Motion, React Icons, Slick Carousel
- **Backend:** Firebase Authentication & Firestore
- **Styling:** CSS, Google Fonts

## 📦 Project Structure

```
src/
  components/
    Carousel/
    EmailNotify/
    Footer/
    NavBar/
    NewArrival/
    ProductPage/
    ProductScreener/
    TrendingSection/
  features/
    CartSlice.js
    OrdersSlice.js
    ProductSlice.js
    ScrollToTop.js
    Toast.js
    useFetch.js
    UserDetailSlice.js
    Utility.js
    WishlistSlice.js
  pages/
    Cart/
    Home/
    Kids.jsx
    Login/
    Men.jsx
    OrderSummary/
    Orders/
    Products.jsx
    SignUp/
    WishList/
    Women.jsx
  assets/
    Logo.png
    products/
    scrollImages/
  App.js
  App.css
  firebase.js
  index.js
  RoutesConfig.js
  store.js
public/
  index.html
  favicon.ico
```

## 🖥️ Getting Started

1. **Clone the repository**
   ```sh
   git clone https://github.com/DemonMMM/Ecommerce-Webia.git
   cd Ecommerce-Webia
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure Firebase**
   - Create a `.env` file in the root directory.
   - Add your Firebase config:
     ```
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

4. **Start the development server**
   ```sh
   npm start
   ```

5. **Open in browser**
   - Visit [http://localhost:3000](http://localhost:3000)

## 📝 Scripts

- `npm start` — Run development server
- `npm run build` — Build for production
- `npm test` — Run tests

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Firebase Documentation](https://firebase.google.com/docs)

## 📄 License

This project is licensed under the MIT License.

---

**Crafted with ❤️ by Dev Methi**