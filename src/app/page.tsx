import React, { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card'

import Checkbox from '../components/Checkbox';
import '../styles/globals.css';


const HomePage: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  return (
    <div className="container">
      
      <section className="section">
        <h2>Use the Styles</h2>
        <p>
          Styles in Figma mean you don't have to repetitively enter values for typography, colors,
          and elevations, minimizing inconsistencies.
        </p>
        <div className="grid grid-3">
          <div>
            <h3>Text Styles</h3>
            <p>Headings, Body, and more</p>
          </div>
          <div>
            <h3>Images</h3>
            <p>Blue Chair, Large Sofa, etc.</p>
          </div>
          <div>
            <h3>Color Styles</h3>
            <p>Primary, Dark Primary, Light Grey</p>
          </div>
        </div>
      </section>

      
      <section className="section">
        <h2>Use the Components</h2>
        <div>
          <Button label="Primary Button" onClick={() => alert('Primary clicked')} />
          <Button label="Secondary Button" variant="secondary" onClick={() => alert('Secondary clicked')} />
        </div>
        <div>
          <Checkbox
            label="Furniture"
            checked={selected.includes('Furniture')}
            onChange={() => toggleSelection('Furniture')}
          />
          <Checkbox
            label="Homeware"
            checked={selected.includes('Homeware')}
            onChange={() => toggleSelection('Homeware')}
          />
        </div>
      </section>

     
      <section className="section">
        <h2>Check the Layouts</h2>
        <div className="grid grid-3">
          <Card title="Dandy Chair" price="£250" imageUrl="https://via.placeholder.com/150" />
          <Card title="Small Table" price="£150" imageUrl="https://via.placeholder.com/150" />
          <Card title="Vase" price="£80" imageUrl="https://via.placeholder.com/150" />
        </div>
      </section>

      
      <section className="section">
        <h2>Use the Content Blocks</h2>
        <div className="card">
          <h3>Join the Club</h3>
          <p>Sign up for exclusive offers and updates.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <Button label="Sign Up" onClick={() => alert('Signed Up!')} />
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
