import React from 'react'
import { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Tags from '../shop/Tags'
import PopularPost from '../shop/PopularPost'
const socialList = [
    {
        link: "#",
        iconName: "icofont-facebook",
        className: "facebook",
    },
    {
        link: "#",
        iconName: "icofont-twitter",
        className: "twitter",
    },
    {
        link: "#",
        iconName: "icofont-linkedin",
        className: "linkedin",
    },
    {
        link: "#",
        iconName: "icofont-instagram",
        className: "instagram",
    },
    {
        link: "#",
        iconName: "icofont-pinterest",
        className: "pinterest",
    },
];

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList)
    const { id } = useParams();
    const result = blog.filter((b) => b.id === Number(id))
    return (
        <div>
            <PageHeader title={"Single Blog Page"} currPage={"Blog/Blog Details"} />
            <div className='blog-section blog-single padding-tb section-bg'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className='section-wrapper'>
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className='post-thumb'>
                                                                    <img src={item.imgUrl} alt="" className='w-100' />
                                                                </div>
                                                                <div className='post-content'>
                                                                    <h2>{item.title}</h2>
                                                                    <div className='meta-post'>
                                                                        <ul className='lab-ul'>
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}>
                                                                                        <i className={val.iconName}></i>
                                                                                        {val.text}
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quos qui facilis perferendis alias! Rerum iure temporibus nisi deleniti voluptates sint, eligendi delectus ipsum eaque beatae odit totam, dolorum modi.
                                                                        Voluptates fugit quaerat eaque sint ad minima quasi dicta modi consequatur beatae! Earum, quaerat natus debitis maxime blanditiis velit nesciunt quidem a inventore, autem voluptatum et laboriosam perspiciatis consequatur recusandae?
                                                                        Eaque qui ducimus mollitia, perferendis dolor nisi, adipisci placeat aspernatur esse possimus corrupti laudantium quasi repudiandae explicabo quis vel exercitationem quam vitae praesentium sapiente nobis reiciendis. Consequuntur optio facere eveniet?
                                                                        Tenetur assumenda nihil repudiandae praesentium nam voluptates ab ducimus doloremque dignissimos odio, eligendi rerum commodi itaque quam adipisci! Ea molestias dicta accusamus numquam adipisci fugit tempora. Minus a odit architecto.</p>
                                                                    <blockquote>
                                                                        <p>
                                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente eos, repellat ipsum explicabo perspiciatis beatae dignissimos esse eius amet dolorem, quam sint minima fuga rem iusto ratione optio, quaerat tempore?
                                                                            Similique facilis voluptas eaque dicta, aut ad non molestias reprehenderit libero possimus vel accusantium consectetur consequatur deserunt vero tenetur iste sed autem illum modi, ab iusto facere dolorem! Molestiae, nisi?
                                                                        </p>
                                                                        <cite>
                                                                            <a href="#">....Praveen Kumar</a>
                                                                        </cite>
                                                                    </blockquote>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vel dolorem exercitationem tempora harum consequatur quod voluptatibus iusto minima repellendus, sapiente omnis officia minus autem reprehenderit! Id aliquid quasi ipsa.
                                                                        Inventore quas laboriosam et quam quidem fugiat perspiciatis obcaecati dolore nulla vero qui error praesentium temporibus iste adipisci nostrum necessitatibus recusandae facilis, autem eos! Deleniti numquam quae ea illo aspernatur.
                                                                        Corporis, praesentium fugit delectus sed, dolores veniam vel non ex eaque doloribus, expedita ab aspernatur repudiandae provident odit minima quibusdam aut! Ad ullam vero porro veniam corrupti officia similique quisquam.
                                                                        Nulla voluptatem laboriosam totam ut ea error nostrum aliquid, molestias deserunt perferendis repellat ducimus ipsum doloribus, ad itaque. Aspernatur ex doloribus odit tempore deserunt voluptatum sapiente distinctio, ullam ipsum placeat?
                                                                        Iusto recusandae quas saepe corrupti vel repellendus impedit optio. Recusandae obcaecati veniam, eaque iste, nesciunt voluptatem similique nobis dolores illum sequi nostrum? Suscipit quas, earum repellat sequi autem inventore nulla?
                                                                    </p>
                                                                    <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                                                    <p>
                                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt illum eum veniam explicabo? Accusantium ea consequatur dolorem enim incidunt ipsa commodi debitis ipsam laudantium. Culpa reiciendis delectus et illo commodi.
                                                                        Consequuntur at architecto similique nesciunt, accusantium quisquam eveniet inventore exercitationem possimus deleniti eaque amet beatae necessitatibus vitae facere iste illo. Nostrum ea culpa nihil ipsa optio numquam doloremque consequuntur iure!
                                                                        Reiciendis, repudiandae odio itaque eveniet voluptate nostrum distinctio impedit neque libero ipsam? Cupiditate, corporis optio! Sequi, optio sunt? A maiores esse molestiae quaerat eos repellat quasi nulla repudiandae dolores dolor.
                                                                        Deleniti vitae ducimus qui eligendi officia aperiam porro aspernatur, magni odio tempora accusamus, optio a dicta dolores officiis earum, doloribus aliquam consequatur reiciendis ab delectus illum similique recusandae iusto! Porro.
                                                                    </p>
                                                                    <div className='video-thumb'>
                                                                        <img src="/src/assets/images/blog/single/03.jpg" alt="" />
                                                                        <a href="https://youtu.be/PGuKjkdGrEI"
                                                                            className='video-button popup' target='_blank'>
                                                                            <i className='icofont-ui-play'></i>
                                                                        </a>
                                                                    </div>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem blanditiis iusto omnis dolore? Minima quam pariatur consectetur magnam nostrum fuga aut quia molestias temporibus ipsum, quae in ipsam voluptatibus eos!
                                                                        Quae maiores quisquam debitis nam laudantium, consequatur cum quo! Ea dicta, aspernatur tempore rerum voluptatibus ut exercitationem maiores ducimus, eius amet voluptatum dolores beatae maxime dolorem harum eaque neque quasi?
                                                                        Debitis temporibus esse aliquid asperiores velit repellendus hic magni. Ipsum, dolor nihil quas rem architecto maxime consectetur ratione quidem aspernatur laboriosam corrupti, accusantium quaerat a facere nesciunt vel asperiores error.
                                                                    </p>
                                                                    <div className='tags-section'>
                                                                        <ul className='tags-lab-ul'>
                                                                            <li>
                                                                                <a href="#">Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Personal</a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="lab-ul social-icons">
                                                                            {
                                                                                socialList.map((val,i)=>(
                                                                                    <li key={i}>
                                                                                        <a href="#" className={val.className}>
                                                                                            <i className={val.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className='navigation-part d-flex'>
                                            <div className='left'>
                                                <a href="#" className='prev'>
                                                    <i className='icofont-double-left'></i>Previous Blog
                                                </a>
                                                <a href="#" className='title'>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, delectus!
                                                </a>
                                            </div>
                                            <div className='right'>
                                                <a href="#" className='next'>
                                                    <i className='icofont-double-right'></i>Next Blog
                                                </a>
                                                <a href="#" className='title'>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, delectus!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                           <aside>
                            <Tags/>
                            <PopularPost/>
                           </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog