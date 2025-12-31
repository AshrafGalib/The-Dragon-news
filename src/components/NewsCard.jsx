import { FaEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md mt-5">
      {/* ---------- Header ---------- */}
      <div className="flex items-center justify-between bg-base-200 p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-600">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* ---------- Body ---------- */}
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold">
          {title}
        </h2>

        <figure className="my-4">
          <img
            src={thumbnail_url}
            alt={title}
            className="rounded-lg w-full"
          />
        </figure>

        <p className="text-gray-600 text-sm">
          {details.length > 200
            ? details.slice(0, 200) + "..."
            : details}
          <Link to={`/news-details/${id}`} className="hover:underline text-primary font-semibold cursor-pointer ml-1">
            Read more
          </Link>
        </p>
      </div>
       <div className="divider w-11/12 mx-auto"></div>

      {/* ---------- Footer ---------- */}
      <div className="flex justify-between items-center px-4 pb-4">
        <div className="flex items-center gap-1 text-orange-400">
  {[...Array(rating.number)].map((_, index) => (
    <FaStar key={index} />
  ))}

  <span className="text-gray-700 font-medium ml-2">
    {rating.number}
  </span>
</div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
