// Index.tsx or your component file

import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../../data/category/category-service';
import { Category } from '../../data/category/category';

export default function Index() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchCategories();
        setCategories(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Category Selector</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <select>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
