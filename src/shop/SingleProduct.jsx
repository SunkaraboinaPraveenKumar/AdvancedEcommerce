import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from './Review';
import PopularPost from './PopularPost';
import Tags from './Tags'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import ProductDisplay from './ProductDisplay';
const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch("/src/products.json").then(res => res.json()).then(data => setProduct(data))
    }, [])
    const result = product.filter((p) => p.id === id);
    return (
        <div>
            <PageHeader title={"Our SHOP Single"} currPage={<>Shop / Single Product</>} />
            <div className='shop-single padding-tb aside-bg'>
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className='col-lg-8 col-12'>
                            {/* left side */}
                            <article>
                                <div className='product-detail'>
                                    <div className="row align-items-center">
                                        <div className='col-md-6 col-12'>
                                            <div className='product-thumb'>
                                                <div className="swiper-container pro-single">
                                                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                                        {
                                                            result.map((item, i) => (
                                                                <SwiperSlide key={i}>
                                                                    <div className='single-thumb'>
                                                                        <img src={item.img} alt="" />
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))
                                                        }
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-12'>
                                            <div className="post-content">
                                                <div>
                                                    {
                                                       result.map(item=><ProductDisplay key={item.id} item={item}/>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='review'>
                                    <Review/>
                                </div>
                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <aside className='ps-lg-4'>
                                <PopularPost/>
                                <Tags/>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct