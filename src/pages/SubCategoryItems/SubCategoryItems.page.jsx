import React from 'react';
import { useParams } from 'react-router-dom';

const SubCategoryItems = () => {
    const {subcategoryId} = useParams()
    return (
        <>
           subcategory {subcategoryId}
        </>
    );
};

export default SubCategoryItems;