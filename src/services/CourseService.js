import courses from '../services/Data/courses2.json'

class CourseService {
  constructor() {
    this.courses = courses.courseData;
  }

  createCourse = course => {
    if (course === null) {
      course = {
        id: (new Date()).getTime(),
        title: 'New Course'
      }
    }
    this.courses.push(course);
    return this.courses
  };

  updateCourse = (id, course) => {
    this.deleteCourse(id);
    this.createCourse(course);
    return this.courses;
  };

  findCourseById = courseId => {
    return this.courses.find(
        course => course.id === courseId
    )
  };

  findAllCourses = () =>
      this.courses;

  deleteCourse = Cid =>
      this.courses = this.courses.filter(
          course => course.id !== Cid
      )
}

export default CourseService