import React from 'react';

const ImageList = (props) => {
   const images = props.images.map(({description, id, urls}) =>{
       return <img  style={{display: 'grid'}, {width: '250px'}} alt={description} key={id} src={urls.regular}/>
   })

return <div>{images}</div>;

};

export default ImageList;