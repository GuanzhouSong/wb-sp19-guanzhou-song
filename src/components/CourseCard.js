import React from 'react'
import {Link} from 'react-router-dom';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const CourseCard = ({course, useCoupon}) => {
    return (
        <div className="container p-0  col-md-4 col-sm-4 col-lg-2 h-100">
            <div className="card" styles="width: '50rem'">
                <div className="card-body">
                    <p className="card-text">
                        {(function() {
                            switch(course.cpType) {
                                //TODO: add type for future.
                                case 'PA_PA':
                                    return "啪啪啪一次 :)";
                                case 'NO_HUNG_UP':
                                    return "不准挂电话一次";
                                case 'DINNER':
                                    return "做晚饭一次";
                                case 'MASSAGE':
                                    return "按摩一次";
                                default:
                                    return null;
                            }
                        })()}
                    </p>
                    <p className="card-text">{(function() {
                        switch(course.cpType) {
                            //TODO: add type for future.
                            case 'PA_PA':
                                return "嘿嘿嘿";
                            case 'NO_HUNG_UP':
                                return "勉强不挂你电话";
                            case 'DINNER':
                                return "给你做一顿晚饭";
                            case 'MASSAGE':
                                return "给你按摩一小时";
                            default:
                                return null;
                        }
                    })()}</p>
                    <p className="card-text">{course.inUse ? '准备一下，马上就来' : ''}</p>
                    <a className="btn btn-primary" onClick={() => {useCoupon(course.id);}}>
                        {course.inUse ? 'In Progress' : 'Use'}
                    </a>
                </div>
            </div>
        </div>

    )
};
export default CourseCard;