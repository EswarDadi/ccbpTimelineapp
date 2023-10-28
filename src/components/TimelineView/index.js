import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'

import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderTimelineView = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard projectDetails={item} key={item.id} />
    }
    return <CourseTimelineCard courseDetails={item} key={item.id} />
  }
  return (
    <div>
      <h1>
        MY JOURNEY OF <br />
        CCBP 4.0
      </h1>
      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(eachCard => renderTimelineView(eachCard))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
