
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';
import Layout from './components/layout/Layout';
import Layout1 from './components/layout1/Layout1';
import Courses from './components/courses/Courses';
import Advertise from './components/advertise/advertise';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Card/>
      <Layout/>
      <Layout1/>
      <Courses/>
      <Advertise/>
      <Form/>
      <Footer/>
    </>
  )
}

export default App
