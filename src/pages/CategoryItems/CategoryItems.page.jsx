import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryItems = () => {
    const { categoryId } = useParams();
    return (
        <>
         Hello category  {categoryId}
        </>
    );
};

export default CategoryItems;