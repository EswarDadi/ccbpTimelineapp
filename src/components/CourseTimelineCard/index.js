import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList} = courseDetails
  return (
    <div>
      <h1>{courseTitle}</h1>
      <AiFillClockCircle />
      <p>{duration}</p>
      <p>{description}</p>
      <ul className="list-container">
        {tagsList.map(each => (
          <li key={each.id} className="list-items">
            {each.name}{' '}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
