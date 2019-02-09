import React from 'react';
import ModuleService from "./ModuleService";

var moduleService = new ModuleService();

class LessonService {

  findAllLessons(courseId, moduleId) {
    console.log(courseId, moduleId);
    var module = moduleService.findModuleById(courseId, moduleId);
    return module ? (module.lessons ? module.lessons : []) : [];
  }

  findLessonById(courseId, moduleId, lessonId) {
    var lessons = this.findAllLessons(courseId, moduleId);
    return lessons.filter(l => l.id == lessonId)[0]
  }

  deleteLesson(courseId, moduleId, lessonId) {
    var module = {...moduleService.findModuleById(courseId, moduleId)};
    var newLessons = module.lessons.filter(l => l.id != lessonId);
    module.lessons = newLessons;
    moduleService.updateModule(courseId, module);
  }

  updateLesson(courseId, moduleId, lesson) {
    var lessons = this.findAllLessons(courseId, moduleId).map(l => {
      if (l.id == lesson.id) {
        return lesson;
      } else {
        return l;
      }
    });
    var module = {...moduleService.findModuleById(courseId, moduleId)};
    module.lessons = lessons;
    moduleService.updateModule(courseId, module);
  }

  createLesson(courseId, moduleId, lesson) {
    var lessons = this.findAllLessons(courseId, moduleId);
    lessons.push(lesson);
    var module = {...moduleService.findModuleById(courseId, moduleId)};
    module.lessons = lessons;
    moduleService.updateModule(courseId, module);
  }
}

export default LessonService;