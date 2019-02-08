import React from 'react';
import CourseService from "./CourseService";

var courseService = new CourseService();

class ModuleService {
  findAllModules(courseId) {
    let course = courseService.findCourseById(courseId);
    return course.modules ? course.modules : [];
  }

  findModuleById(courseId, moduleId) {
    let course = courseService.findCourseById(courseId);
    return course.modules.filter(m => m.id == moduleId)[0]
  }

  deleteModule(courseId, moduleId) {

    let course = {...courseService.findCourseById(courseId)};
    let newModules = course.modules.filter(m => m.id != moduleId);
    course.modules = newModules;
    courseService.updateCourse(courseId, course);
  }

  updateModule(courseId, module) {
    let modules = this.findAllModules(courseId).map(m => {
      if (m.id == module.id) {
        return module;
      } else {
        return m;
      }
    });
    let course = {...courseService.findCourseById(courseId)};
    course.modules = modules;
    courseService.updateCourse(courseId, course);
  }

  createModule(courseId, module) {
    let modules = this.findAllModules(courseId);
    modules.push(module);
    let course = {...courseService.findCourseById(courseId)};
    course.modules = modules;
    courseService.updateCourse(courseId, course);
  }
}

export default ModuleService;