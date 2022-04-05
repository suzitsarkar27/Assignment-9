import React from "react";

const Blogs = () => {
  return (
    <div className="">
      <div className="content-api card w-50 m-auto p-4 mt-5">
        <h2>What Is Content Api</h2>
        <p>
          {" "}
          Content API is a RESTful API that lets advertisers programmatically
          manage their Microsoft Merchant Center catalogs. Content API is an
          alternative to managing your catalog using the Microsoft Merchant
          Center web page or by using FTP/SFTP. Content API has the following
          advantages:{" "}
        </p>
        <p>
          {" "}
          Provides the ability to update product offers incrementally rather
          than uploading the entire data feed. Being able to update a subset of
          your products is more efficient than having to upload the entire feed
          by using FTP/SFTP.
        </p>
        <p>
          {" "}
          Provides the ability to make changes to product pricing and
          availability to reflect close to real-time market conditions. For
          example, if your product goes out of stock, you can quickly update its
          Availability field using the Content API.
        </p>
      </div>
      <div className="card w-50 m-auto p-4 mt-5">
        <h2>Whit Is Block Element</h2>
        <p>
          In line block element : Inline-block elements are similar to inline
          elements, except they can have padding and margins added on all four
          sides. You'll have to declare display: inline-block in your CSS code.
          One common use for using inline-block is for creating navigation links
          horizontally, as shown below.
        </p>
        <p>
          {" "}
          A block-level element always starts on a new line, and the browsers
          automatically add some space (a margin) before and after the element.
          A block-level element always takes up the full width available
          (stretches out to the left and right as far as it can).
        </p>
        <p> form,h1,h6,header,hr,li,main,nav,nav, all this block element</p>

        <h2>In Line Element</h2>
        <p>
          {" "}
          Displays an element as an inline element. Any height and width
          properties will have no effect.
        </p>
        <p>
          The display property specifics the display behavior of an element.
          It’s a must know for controlling the layout of an element. There’s a
          bunch of property values. But let’s start off with the essential
          inline. This one displays the element inline or on the same line. In
          other words, inline elements do NOT start on a new line and only takes
          up as much width as its content. So, if you try to set any width and
          height, it will have NO effects.
        </p>
        <p>a ,br ,small ,img,sup ,button all this inline tag</p>
      </div>
      <div className="card w-50 m-auto p-4 mt-5">
        <h2>What is semantic HTML5?</h2>
        <p>
          Semantic HTML5 addresses this shortcoming by defining specific tags to
          indicate clearly what role is played by the content those tags
          contain. That explicit information helps robots/crawlers like Google
          and Bing to better understand which content is important, which is a
          subsidiary, which is for navigation, and so on.
        </p>
        <p>
          By adding semantic HTML tags to your pages, you provide additional
          information that helps Google and Bing understand the roles and
          relative importance of the different parts of your page.
        </p>
        <p>Header,nav,footer,section,sider</p>
      </div>
    </div>
  );
};

export default Blogs;
