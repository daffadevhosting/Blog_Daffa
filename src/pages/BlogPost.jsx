import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../lib/client";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import AdSense from '../components/Adsense';
import { Image, useImage } from 'react-img-placeholder';
import placeholder from '../assets/Placeholder.svg';
import '../App.css';

function Blogpost() {
  const [blogpost, setBlogpost] = useState([]);

localStorage.setItem('pageId', 'blogpost');

  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
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
      }`
      )
      .then((data) => {
        setBlogpost(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  useEffect(() => {
    document.title = `Daffa Blog | ${blogpost.title}`;
  }, [blogpost.title]);

window.onload = function() {
  const pageId = localStorage.getItem('pageId');
  console.log(pageId);
}

  return (
    <>
      {blogpost && (
        <section className="blog_post">
          {blogpost.mainImage && (
            <Image
              src={blogpost.mainImage.asset.url}
              alt={blogpost.mainImage.alt}
              height={200}
              width={200}
              className="img_post"
              placeholderSrc={placeholder}
            />
          )}
          <div className="post_body">
          <h1 className="text-4xl my-8 xl:text-6xl">{blogpost.title}</h1>
          <p className="font-bold text-sm mb-8">
            By {blogpost.name}{" "}
            {blogpost.publishedAt && (
              <>
                &middot;{" "}
                {format(new Date(blogpost.publishedAt), "dd MMMM yyyy")}
              </>
            )}
          </p>

          <PortableText value={blogpost.body} />
          </div>
        </section>
      )}
    </>
  );
}

export default Blogpost;
