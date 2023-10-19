import { Link } from "react-router-dom";
import courseData from '../data.json'

const BlogPage = () => {

  const courses = courseData.courseData;
  return (
    <div className="container">
      <div className="row g-4">

        {courses.map((card, index) => (
          <div className="col-lg col-md-6" key={index}>
            <div className="card h-100">
              <div>
                <Link className="nav-link" to={`/blog/${card.link}`}>
                  <img src={card.image} className="card-img-top" alt="..." />
                </Link>
              </div>
              <div className="card-body">
                <p className="card-title">
                  <Link className="nav-link" to={`/blog/${card.link}`}>
                    {card.title}
                  </Link>
                </p>
                <p className="card-text">{card.description}</p>
                <p>
                  <Link className="nav-link read" to={`/blog/${card.link}`}>
                    READ MORE »
                  </Link>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary d-inline-flex w-100 text-align-left">
                  {card.publishedDate} <ul><li>
                    {card.comments > 0 ? (
                      <>{card.comments} Comment{card.comments !== 1 ? 's' : ''}</>
                    ) : (
                      ' No comments'
                    )}</li></ul>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage