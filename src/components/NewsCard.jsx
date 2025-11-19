import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    details,
    thumbnail_url,
    author,
    rating,
    total_view,
    // tags,
  } = news;

  // Format published date
  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md   space-y-4">

      {/* HEADER */}
      <div className="flex items-center bg-base-200 p-5 justify-between">
        {/* Author */}
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt="author"
            className="w-12 h-12 rounded-full border"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-gray-500 text-sm">{formattedDate}</p>
          </div>
        </div>

        {/* Share Button */}
        <div className="flex gap-2 text-gray-500 text-lg cursor-pointer">
            <FaRegBookmark />
            <FaShareAlt  />
        </div>
      </div>

    <div className=" space-y-4 ml-4 mr-4 mb-2">


       {/* TITLE */}
      <h2 className="text-xl font-bold text-gray-900">
        {title}
      </h2>

      {/* THUMBNAIL */}
      <figure>
        <img
          src={thumbnail_url}
          alt="news"
          className="rounded-lg w-full"
        />
      </figure>

      {/* DETAILS */}
      <p className="text-gray-600 text-sm leading-6">
        {details.slice(0, 200)}...
        <Link to={`/news_details/${id}`} className="text-primary font-semibold cursor-pointer"> Read More</Link>
      </p>

      {/* TAGS */}
      {/* <div className="flex flex-wrap gap-2">
        {tags?.map((tag, i) => (
          <span
            key={i}
            className="badge badge-outline px-3 py-2 text-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div> */}

      {/* FOOTER */}
      <div className="flex items-center justify-between pt-2 border-t">
        {/* Rating */}
        <div className="flex items-center gap-1 text-primary">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          {rating.number < 5 && <FaStar className="text-gray-300" />}
          <span className="ml-2 font-medium text-gray-700">
            {rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span className="font-medium">{total_view}</span>
        </div>
      </div>



    </div>

    </div>
  );
};

export default NewsCard;
