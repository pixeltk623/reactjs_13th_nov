import './App.css';
import ComponentDidMount from './ClassComponents/ComponentDidMount';
import ComponentWillUnmount from './ClassComponents/ComponentWillUnmount';
import Employee from './ClassComponents/Employee';
import Getderivedstatefromprops from './ClassComponents/Getderivedstatefromprops';
import ScrollingList from './ClassComponents/ScrollingList';
import ShouldComponentUpdate from './ClassComponents/ShouldComponentUpdate';
import Company from './FunctionComp/Company';
// import Footer from './Components/Footer';
// import Header from './Components/Header';
// import Hero from './Components/Hero';
// import Main from './Components/Main';
// import Layout from './pages/Layout';
// import Home from './pages/Home';
// import Blogs from './pages/Blogs';
// import Contact from './pages/Contact';
// import NoPage from './pages/NoPage';
// import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <Hero />
    //   <Main />
    //   <Footer />
    // </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    // <Employee />

    // <Getderivedstatefromprops username="sharvan123"/>

    // <ShouldComponentUpdate />
    // <ScrollingList />
    // <ComponentDidMount />
    // <ComponentWillUnmount />
    <Company />
  );
}
export default App;
