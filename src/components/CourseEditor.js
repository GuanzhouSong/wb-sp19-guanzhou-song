import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import WidgetList from "./WidgetList";
import CourseService from "../services/CourseService"
import "../../node_modules/bootstrap/dist/js/bootstrap.min"

class CourseEditor extends React.Component {
  constructor(props) {
    super(props);
    this.courseService = new CourseService();
    const courseId = props.match.params.id;
    const course = this.courseService.findCourseById(courseId);
    this.state = {
      course: course,
      module: course.modules[0],
      lesson: course.modules[0].lessons[0]
    }
  }

  selectModule = module =>
      this.setState({
        module: module
      });

  selectLesson = lesson =>
      this.setState({
        lesson: lesson
      });

  lessonChanged = (event) => {
    this.setState(
        {
          lesson: {title: event.target.key}
        });
    alert("hhh");
  };

  changeTopics = () => {

  };

  render() {
    return (
        <div>
          <h2>Course Editor: {this.state.course.title}</h2>
          <div className="row">
            <div className="col-4">
              <ModuleList
                  selectModule={this.selectModule}
                  modules={this.state.course.modules}/>
            </div>
            <div className="col-8">
              <LessonTabs
                  lessons={this.state.module.lessons}
                  onClick={this.selectLesson}
              />
              <TopicPills lesson={this.state.lesson.topics}/>
              <WidgetList/>

            </div>
          </div>
        </div>
    )
  }
}

export default CourseEditor