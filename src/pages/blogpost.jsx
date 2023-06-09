import React, { Suspense, useState, useEffect } from "react";
import { client } from "../../lib/client";
import { Link } from "react-router-dom";
import { Image } from 'react-img-placeholder';
import placeholder from '/placeholder.webp';

function Blog() {
  const [stories, setStories] = useState([]);

localStorage.setItem('pageId', 'blog');

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
        setStories(data);
      })
      .catch(console.error);
  }, []);
  if (!stories === null) {
    return <h2>Loading posts...</h2>;
  }

window.onload = function() {
  const pageId = localStorage.getItem('pageId');
  console.log(pageId);
}

  return (
    <>
      <div className="container">
        <h1 className="textHead">All Blog Posts</h1>
      <section className="grid_post">
        <Suspense fallback={<h1 className="loading"> Loading... </h1>}>
        {stories.map((story) => (
          <div key={story.slug.current}>
            <article className="postCard">
            <div className="postCard_img">
              {story.mainImage && (
                <img
                  src={story.mainImage.asset.url}
                  alt={story.mainImage.alt}
                  loading="lazy"
                  placeholderSrc={placeholder}
                />
              )}
                <h2 className="titleBox">{story.title}</h2>
                </div>

              <div className="textBox">
                <div className="textContent">
                <h2 className="text2">{story.title}</h2>
                <p className="text leading">
                  {`${story.body[0].children[0].text.substring(0, 100)}...`}
                </p>
              <Link className="button" to={`/article/${story.slug.current}`} key={story.slug.current}> Baca </Link>
                </div>
              </div>
            </article>
          </div>
        ))}
        </Suspense>
      </section>
      </div>
    </>
  );
}
export default Blog;
