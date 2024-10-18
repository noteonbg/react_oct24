import React, { useState } from 'react';
import './styles.scss';

// Sample data for pharmaceutical products
const initialProducts = [
  { id: 1, name: 'Aspirin', category: 'Pain Relief' },
  { id: 2, name: 'Ibuprofen', category: 'Pain Relief' },
  { id: 3, name: 'Acetaminophen', category: 'Pain Relief' },
  { id: 4, name: 'Amoxicillin', category: 'Antibiotic' },
  { id: 5, name: 'Metformin', category: 'Diabetes' },
  { id: 6, name: 'Simvastatin', category: 'Cholesterol' },
  { id: 7, name: 'Lisinopril', category: 'Blood Pressure' },
  { id: 8, name: 'Levothyroxine', category: 'Thyroid' },
  { id: 9, name: 'Albuterol', category: 'Asthma' },
  { id: 10, name: 'Omeprazole', category: 'Acid Reducer' },
  { id: 11, name: 'Sildenafil', category: 'ED Treatment' },
  { id: 12, name: 'Fluticasone', category: 'Allergy' },
  { id: 13, name: 'Clonazepam', category: 'Anxiety' },
  { id: 14, name: 'Gabapentin', category: 'Neuropathic Pain' },
  { id: 15, name: 'Citalopram', category: 'Depression' },
  { id: 16, name: 'Atorvastatin', category: 'Cholesterol' },
  { id: 17, name: 'Hydrochlorothiazide', category: 'Blood Pressure' },
  { id: 18, name: 'Sertraline', category: 'Depression' },
  { id: 19, name: 'Bupropion', category: 'Depression' },
  { id: 20, name: 'Ranitidine', category: 'Acid Reducer' },
];

const AnotherPharmaProductList = () => {
  const [products, setProducts] = useState(initialProducts);
  const [nameSearchTerm, setNameSearchTerm] = useState('');
  const [categorySearchTerm, setCategorySearchTerm] = useState('');

  // Filter products based on name and category
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(nameSearchTerm.toLowerCase()) &&
    product.category.toLowerCase().includes(categorySearchTerm.toLowerCase())
  );

  const handleEdit = (product) => {
    console.log('Edit product:', product);
    // Logic for editing the product would go here
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1>Pharmaceutical Products</h1>
      <input
        type="text"
        placeholder="Search by product name..."
        value={nameSearchTerm}
        onChange={(e) => setNameSearchTerm(e.target.value)}
        style={{ marginBottom: '10px', padding: '10px', width: '300px' }}
      />
      <input
        type="text"
        placeholder="Search by category..."
        value={categorySearchTerm}
        onChange={(e) => setCategorySearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
      />
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {filteredProducts.map(product => (
          <li key={product.id} style={{ marginBottom: '10px' }}>
            <strong>{product.name}</strong> - {product.category}
            <span style={{ marginLeft: '10px', cursor: 'pointer', color: 'blue' }} onClick={() => handleEdit(product)}>
              Edit
            </span>
            <span style={{ marginLeft: '10px', cursor: 'pointer', color: 'red' }} onClick={() => handleDelete(product.id)}>
              Delete
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnotherPharmaProductList;
