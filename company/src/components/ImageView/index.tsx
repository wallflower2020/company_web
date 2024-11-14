import React from 'react';
import { Carousel } from 'antd';
import './style.css'

const contentStyle: React.CSSProperties = {
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const carouselStyle: React.CSSProperties = {
    width: '70vw',
    height: '70vh',
}

interface imageViewProps {
    imageUrls: string[]
    index: number
}

const ImageView: React.FC<imageViewProps> = (props) => {
    const list = props.imageUrls
    return (
        <>
            <Carousel effect="fade" style={carouselStyle} arrows>
                {list.map((item, index) => (
                    <div key={index} style={contentStyle}>
                        <img src={item} alt="" className='view_img' />
                    </div>
                ))}
            </Carousel>
        </>
    )
};

export default ImageView;