// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import HomePage from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import MainLayout from './MainLayout';
import Signup from './components/SignUp';
import Signin from './components/Signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap all pages with MainLayout */}
        <Route path="/" element={<MainLayout />}>
          {/* Nested routes will render inside <Outlet /> */}
          <Route index element={<HomePage />} />  
          <Route path="about" element={<About />} />  
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} /> 
          <Route path="blog" element={<Blog />} /> 
          <Route path="signup" element={<Signup />} /> 
          <Route path ="signin" element = {<Signin/>}/>
          <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* fallback */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
