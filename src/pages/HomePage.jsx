import React, { Suspense, useState, useEffect } from "react";
import { client } from "../lib/client";
import { Image, useImage } from 'react-img-placeholder';
import { format } from "date-fns";
import { Link } from "react-router-dom";
import '../App.css';
import placeholder from '../assets/Placeholder.svg';


function Homepage() {
  const [stories, setStories] = useState([]);

localStorage.setItem('pageId', 'home');

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
        setStories(data.slice(0, 3));
      })
      .catch(console.error);
  }, []);
  if (stories === null) {
    return <h2>Loading posts...</h2>;
  }

  useEffect(() => {
    document.title = "Daffa Blog";
  }, []);

window.onload = function() {
  const pageId = localStorage.getItem('pageId');
  console.log(pageId);
}

  return (
    <>
        <Suspense fallback={<h1 className="loading"> Loading... </h1>}>
      <section className="homePage section_grid">
        {stories.map((story) => (
          <div className="card_grid" key={story.slug.current}>
            <article className="box">
            <div className="card_img">
              {story.mainImage && (
                <Image
                  src={story.mainImage.asset.url}
                  alt={story.mainImage.alt}
                  loading="lazy"
                  height={300}
                  width={300}
                  placeholderSrc={placeholder}
                />
              )}
                    <span className="title">{story.title}</span>
                <p className="author">
                  By {story.name}
                </p>
            </div>
              <div className="contentBox">
              <div>
                <h2>{story.title}</h2>
                <p className="contentText">
                  {`${story.body[0].children[0].text.substring(0, 100)}...`}
                </p>
                <Link className="button" to={`/blog/${story.slug.current}`} key={story.slug.current}>Baca</Link>
              </div>
              </div>
            </article>
          </div>
        ))}
      </section>
        </Suspense>
    </>
  );
}
export default Homepage