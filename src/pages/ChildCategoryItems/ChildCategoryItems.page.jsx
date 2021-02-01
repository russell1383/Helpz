import React from 'react';
import { useParams } from 'react-router-dom';

const ChildCategoryItems = () => {
    const {childCategoryId} = useParams()
    return (
        <div>
            Child Category {childCategoryId}
        </div>
    );
};

export default ChildCategoryItems;