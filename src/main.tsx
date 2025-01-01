import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home.tsx';
import './main.css';
import Hobbies from './pages/Hobbies.tsx';
import Work from './pages/Work.tsx';
import SideProjects from './pages/SideProjects.tsx';
import Blog from './pages/Blog.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/hobbies" element={<Hobbies />} />
        <Route path="/portfolio/work" element={<Work />} />
        <Route path="/portfolio/side-projects" element={<SideProjects />} />
        <Route path="/portfolio/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
