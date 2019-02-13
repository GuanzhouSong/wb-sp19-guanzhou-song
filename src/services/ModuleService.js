import React from 'react';

var COURSE_API_URL = "http://localhost:8080/api/course/";
var MODULE_API_URL = "http://localhost:8080/api/module/";

class ModuleService {
  findAllModules(moduleId) {
    return fetch(COURSE_API_URL + moduleId + "/module"
    ).then(response => response.json());
  }

  findModuleById(courseId, moduleId) {
    return fetch(MODULE_API_URL + moduleId
    ).then(response => response.json());
  }

  deleteModule(courseId, moduleId) {
    return fetch(MODULE_API_URL + moduleId, {
      method: 'delete'
    });
  }

  updateModule(moduleId, module) {
    return fetch(MODULE_API_URL + moduleId, {
      method: 'PUT',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
  }

  createModule(courseId, module) {
    return fetch(COURSE_API_URL + courseId + "/module", {
      body: JSON.stringify(module),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(response => response.json())
  }
}

export default ModuleService;