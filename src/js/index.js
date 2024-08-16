//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Navbar from "./component/Navbar.jsx";
import Header from "./component/Header.jsx";
import Cardsection from "./component/Cardsection.jsx";
import Footer from "./component/Footer.jsx";
import Container from "./component/Container.jsx";

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
       <Navbar/>
       <Container>
        <Header/>
        <Cardsection/>
        </Container>
        <Footer/>
      </div>
    );
  }

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<App/>);

