

import { useParams } from 'react-router-dom';
import courseData from '../data.json'

const CourseDetail = () => {

  const courses = courseData.courseData;
  const params = useParams();
  console.log(params.courseTitle);
  // Using this dynamic validation all other courses pages can be reduced.
  // const fullStackCourses = courses.filter((course) => course.category === courseName);
  const courseDetails = courses.filter((course) => course.link === params.courseTitle);
  console.log(courseDetails);
  return (<>
    <div className='container text-center'>
      <h1 className='course-title text-center m-5 p-5 pb-0'>{courseDetails[0].title}</h1>
      <div className='extra-info text-center'>
        <span className='d-inline'>{courseDetails[0].publishedDate}</span>
        <span className='d-inline'>{courseDetails[0].comments > 0 ? (
          <>{courseDetails[0].comments} Comment{courseDetails[0].comments !== 1 ? 's' : ''}</>
        ) : (
          ' No comments'
        )}</span>
      </div>
      <img src={courseDetails[0].image} className='course-image mt-5' />
      <div className='mt-5 p-2'>
        {courseDetails[0].content}
      </div>
    </div>
  </>)
}

export default CourseDetail