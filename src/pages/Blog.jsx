import React, { useState, useEffect } from "react";
import { client } from "../lib/client";
import AdSense from "../components/Adsense";
import { Link } from "react-router-dom";

function Blog() {
  const [stories, setStories] = useState([]);

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

  return (
    <>
      <div id="Blog" className="max-w-7xl px-5 mx-auto mt-20 mb-10">
        <h1 className="text-4xl lg:text-6xl mb-6 capitalize">All Blog Posts</h1>
      <section className="grid_post">
        {stories.map((story) => (
          <div key={story.slug.current}>
            <article className="postCard">
            <div className="postCard_img">
              {story.mainImage && (
                <img
                  src={story.mainImage.asset.url}
                  alt={story.mainImage.alt}
                  loading="lazy"
                />
              )}
                <h2 className="titleBox">{story.title}</h2>
                </div>

              <div className="textBox">
                <div className="textContent">
                <h2 className="text-xl my-2">{story.title}</h2>
                <p className="text-sm leading-relaxed">
                  {`${story.body[0].children[0].text.substring(0, 100)}...`}
                </p>
              <Link className="button" to={`/blog/${story.slug.current}`} key={story.slug.current}> Baca </Link>
                </div>
              </div>
            </article>
          </div>
        ))}
        <div className="iklanGoogle">
        <AdSense/>
        </div>
      </section>
      </div>
    </>
  );
}
export default Blog;
