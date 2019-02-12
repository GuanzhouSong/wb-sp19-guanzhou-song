import React from 'react';

var courses = [
  {
    "id": "123",
    "title": "CS5800",
    "modules": [
      {
        "id": "1",
        "title": "Module 1",
        "lessons": [
          {
            "id": "1",
            "title": "Jquery",
            "topics": [
              {
                "id": "1",
                "title": "CSS",
                "preview": true,
                "widgets": [
                  {
                    "id": 1,
                    "title": "Widget 1",
                    "name": "Heading 1",
                    "type": "HEADING",
                    "text": "This is a heading",
                    "size": 2,
                    "order": 0
                  },
                  {
                    "id": 2,
                    "title": "Widget 2",
                    "name": "Image 1",
                    "type": "IMAGE",
                    "order": 1,
                    "link": "https://picsum.photos/300/200"
                  }, {
                    "id": 3,
                    "title": "Widget 3",
                    "type": "HEADING",
                    "name": "Heading 2",
                    "text": "This is a heading",
                    "size": 2,
                    "order": 2
                  }, {
                    "id": 4,
                    "title": "Widget 4",
                    "type": "LIST",
                    "name": "List 1",
                    "text": "This is a list",
                    "ordered": 1,
                    "order": 3
                  }, {
                    "id": 5,
                    "title": "Widget 5",
                    "type": "LINK",
                    "name": "Link 5",
                    "text": "This is a link",
                    "order": 4,
                    "url": "https://www.baidu.com"
                  }, {
                    "id": 6,
                    "title": "Widget 6",
                    "type": "PARAGRAPH",
                    "name": "Paragraph 5",
                    "text": "This is a paragraph",
                    "order": 5
                  }
                ]
              },
              {
                "id": "2",
                "title": "React",
                "widgets": [
                  {
                    "id": "1",
                    "type": "HEADING",
                    "size": 1,
                    "text": "HTML CSS",
                    "order": 0
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "title": "CSS",
            "topics": [
              {
                "id": "1",
                "title": "CSS3",
                "widgets": [
                  {
                    "id": "1",
                    "type": "HEADING",
                    "size": 1,
                    "text": "CSS#",
                    "order": 0
                  }
                ]
              },
              {
                "id": "2",
                "title": "bootstrap",
                "widgets": [
                  {
                    "id": "1",
                    "type": "HEADING",
                    "size": 1,
                    "text": "bootstrap flex",
                    "order": 0
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "2",
        "title": "Module 2",
        "lessons": [
          {
            "id": "1",
            "title": "HTML",
            "topics": [
              {
                "id": "1",
                "title": "React",
                "widgets": [
                  {
                    "id": "1",
                    "type": "HEADING",
                    "size": 1,
                    "text": "The is JSX doc",
                    "order": 0
                  },
                  {
                    "id": "2",
                    "type": "PARAGRAPH",
                    "text": "intro to Components",
                    "order": 1
                  },
                  {
                    "id": "3",
                    "type": "LIST",
                    "items": " ",
                    "order": 2
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "3",
        "title": "Module 3",
        "lessons": [
          {
            "id": "1",
            "title": "Redux",
            "topics": [
              {
                "id": "1",
                "title": "spring",
                "widgets": [
                  {
                    "id": "1",
                    "type": "HEADING",
                    "size": 1,
                    "text": "redux",
                    "order": 0
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

var COURSE_API_URL = "http://localhost:8080/api/course";

class CourseService {

  findAllCourses() {
    /*return fetch(COURSE_API_URL).then(response => response.json());*/
    return courses
  }

  findCourseById = courseId =>
      fetch(COURSE_API_URL + "/" + courseId)
      .then(response => response.json());

  updateCourse(courseId, course) {
    courses = courses.map(s => {
      if (s.id === courseId) {
        return course
      } else {
        return s;
      }
    });
  }

  deleteCourse = courseId => fetch(COURSE_API_URL + "/" + courseId, {
    method: 'delete', headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json());

  createCourse(course) {
    fetch(COURSE_API_URL, {
      body: JSON.stringify(course),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(response => response.json())
  }

}

export default CourseService;