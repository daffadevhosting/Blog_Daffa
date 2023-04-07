import React, { Suspense, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { client } from "../../lib/client";
import { Image } from 'react-img-placeholder';
import { format } from "date-fns";
import Header from '../components/Header';
import Footer from '../components/Footer';
import placeholder from '/placeholder.webp';

export default function HomePage() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    client
      .fetch(
`*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": author -> name,
      } | order(publishedAt desc)`
		)
      .then((data) => {
        setPosts(data.slice(0, 3));
      })
      .catch(console.error);
  }, []);

  if (posts === null) {
    return <Suspense
    		fallback={
    			<h1>Loading posts...</h1>
    		}></Suspense>;
  }

  useEffect(() => {
    document.title = "Daffa Blog";
  }, []);

	return (
	<div className="container">
	<Header/>
	  <section className="homePage section_grid">
        {posts.map((post) => (
          <div className="card_grid" key={post.slug.current}>
            <article className="box">
            <div className="card_img">
              {post.mainImage && (
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt}
                  loading="lazy"
                  height={300}
                  width={'100%'}
                  placeholderSrc={placeholder}
                />
              )}
                    <span className="title">{post.title}</span>
                <p className="author">
                  By {post.name}
                </p>
            </div>
              <div className="contentBox">
              <div>
                <h2>{post.title}</h2>
                <p className="contentText">
                  {`${post.body[0].children[0].text.substring(0, 100)}...`}
                </p>
                <Link className="button" to={`/article/${post.slug.current}`} key={post.slug.current}>Baca</Link>
              </div>
              </div>
            </article>
          </div>
        ))}
      </section>
      <Footer/>
	</div>
		)
}