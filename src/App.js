import Nav_Bar from './components/nav';
import Template_Area from './components/template';
import products from './components/products';
import Footer_Bar from './components/footer';
import ProductSection from './components/articles';


function App() {
  return (
    <div>
      <Nav_Bar />

      <Template_Area />

      <ProductSection products={products} />

      <Footer_Bar />
    </div>
  );
}

export default App;
