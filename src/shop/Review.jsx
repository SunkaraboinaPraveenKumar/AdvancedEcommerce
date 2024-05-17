import React, { useState } from 'react'
import Rating from '../components/Rating';

const reviewtitle = "Add a Review";

let ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovative initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];

const Review = () => {
    const [reviewShow, setReviewShow] = useState(true)

    return (
        <div>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className='desc mt-4' onClick={() => setReviewShow(!reviewShow)}>Description</li>
                <li className='rev mt-4' onClick={() => setReviewShow(!reviewShow)}>Reviews 4</li>
            </ul>
            {/* desc and review contact */}
            <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                <div className='review-showing'>
                    <ul className='content lab-ul'>
                        {
                            ReviewList.map((review, i) => (
                                <li key={i}>
                                    <div className='post-thumb'>
                                        <img src={review.imgUrl} alt="" />
                                    </div>
                                    <div className='post-content'>
                                        <div className='entry-meta'>
                                            <div className='posted-on'>
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                        </div>
                                        <div className='entry-content'>
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    {/* add view feild */}
                    <div className='client-review'>
                        <div className='review-form'>
                            <div className="review-title">
                                <h5>{reviewtitle}</h5>
                            </div>
                            <form action="action" className='row'>
                                <div className='col-md-4 col-12'>
                                    <input type="text" name="name" id="name" placeholder='Full Name' required/>
                                </div>
                                <div className='col-md-4 col-12'>
                                    <input type="email" name="email" id="email" placeholder='Your Email'  required/>
                                </div>
                                <div className='col-md-4 col-12'>
                                    <div className='rating text-align-center'>
                                        <span className='me-2'>Your Rating  </span>
                                        <Rating />
                                    </div>
                                </div>
                                <div className='col-md-12 col-12'>
                                    <textarea name='message' id="message" rows="8" placeholder='Type Here Message'></textarea>
                                </div>
                                <div className='col-12'>
                                    <button type="submit" className='lab-btn default-btn'>
                                        Submit Reviews
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* description */}
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, pariatur inventore impedit soluta minima officiis? Maiores neque, optio saepe veritatis, sapiente facere commodi reiciendis itaque amet sit suscipit nam ad.
                    Laborum, quasi! Fugiat vel dolores, laboriosam aliquid temporibus, ut ex, sunt tempore culpa laudantium excepturi praesentium totam dolorem voluptatibus ipsum quod harum porro pariatur ipsa voluptas quis officia perspiciatis? Nesciunt!
                    Fugit quidem, commodi quia dolor dicta possimus cumque deserunt saepe quaerat temporibus blanditiis, perspiciatis omnis esse numquam explicabo vel alias quo expedita? Ea eveniet, dolore laborum laboriosam alias pariatur voluptas.
                    Cupiditate voluptatem odio itaque soluta est nisi molestias cum temporibus culpa excepturi consequuntur officiis ut mollitia, accusantium harum voluptatibus reiciendis velit distinctio asperiores molestiae deleniti! Vel, vero. Earum, saepe fugiat?
                    </p>
                    <div className="post-item">
                        <div className="post-thumb">
                            <img src="/src/assets/images/shop/01.jpg" alt="" />
                        </div>
                        <div className="post-content">
                            <ul className='lab-ul'>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, pariatur inventore impedit officiis? </li>
                            <li>Maiores neque, optio saepe veritatis, sapiente facere commodi reiciendis itaque amet sit suscipit nam ad.</li>
                            <li>Laborum, quasi! Fugiat vel dolores, laboriosam aliquid temporibus, ut ex, sunt tempore culpa laudantium excepturi </li>
                            <li>praesentium totam dolorem voluptatibus ipsum quod harum porro pariatur ipsa voluptas quis officia perspiciatis? Nesciunt!</li>
                            </ul>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, pariatur inventore impedit soluta minima officiis? Maiores neque, optio saepe veritatis, sapiente facere commodi reiciendis itaque amet sit suscipit nam ad.
                    Laborum, quasi! Fugiat vel dolores, laboriosam aliquid temporibus, ut ex, sunt tempore culpa laudantium excepturi praesentium totam dolorem voluptatibus ipsum quod harum porro pariatur ipsa voluptas quis officia perspiciatis? Nesciunt!
                    Fugit quidem, commodi quia dolor dicta possimus cumque deserunt saepe quaerat temporibus blanditiis, perspiciatis omnis esse numquam explicabo vel alias quo expedita? Ea eveniet, dolore laborum laboriosam alias pariatur voluptas.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Review