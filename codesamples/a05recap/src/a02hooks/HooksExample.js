import React, { useState, useEffect, useContext, createContext } from 'react';

// Sample data for pharmaceutical products
const initialProducts = [
  { id: 1, name: 'Aspirin', category: 'Pain Relief' },
  { id: 2, name: 'Ibuprofen', category: 'Pain Relief' },
  { id: 3, name: 'Acetaminophen', category: 'Pain Relief' },
  { id: 4, name: 'Amoxicillin', category: 'Antibiotic' },
  { id: 5, name: 'Metformin', category: 'Diabetes' },
];

// Create a Context for managing global state
const ProductContext = createContext();

// Custom Hook for using the Product Context
const useProducts = () => {
  return useContext(ProductContext);
};

// Product Provider Component
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Main Component
const PharmaProductList = () => {
  const { products, deleteProduct } = useProducts();
  const [nameSearchTerm, setNameSearchTerm] = useState('');
  const [categorySearchTerm, setCategorySearchTerm] = useState('');
  const [message, setMessage] = useState('');

  /*

  The useEffect hook is useful for managing side effects in functional components.
   It allows you to handle data fetching, subscriptions, DOM updates,
    timers, and cleanup logic effectively,
     making your components more interactive and responsive to changes in state or props.
      
	effect means something that is
independent of the component... example

In React, “side effects” refer to any operations or behaviors that occur in a component after rendering, and that don’t directly impact the current component render cycle. These side effects can include tasks such as data fetching, subscriptions, manually changing the DOM, or other interactions with the outside world.



	  

  */

  // Effect to show a message when a product is deleted
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(nameSearchTerm.toLowerCase()) &&
    product.category.toLowerCase().includes(categorySearchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    deleteProduct(id);
    setMessage('Product deleted successfully!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Pharmaceutical Products</h1>
      <input
        type="text"
        placeholder="Search by product name..."
        value={nameSearchTerm}
        onChange={(e) => setNameSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by category..."
        value={categorySearchTerm}
        onChange={(e) => setCategorySearchTerm(e.target.value)}
      />
      {message && <div style={{ color: 'green' }}>{message}</div>}
      
      {filteredProducts.length === 0 ? (
        <div style={{ color: 'red' }}>No products found.</div>
      ) : (
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id}>
              <strong>{product.name}</strong> - {product.category}
              <button onClick={() => handleDelete(product.id)} style={{ marginLeft: '10px', color: 'red' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};



// Main App Component
const HooksExample = () => {
  return (
    <ProductProvider>
      <PharmaProductList />
    </ProductProvider>
  );
};

export default HooksExample;
