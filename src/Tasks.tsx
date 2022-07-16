import React from 'react';
import SubmitComponent from './SubmitComponent';

export function SubmitTask() {
    // onChange() {

    // }
    return (
        <>
            <div className="flex text-center p-5 border-bottom-1 font-face dark-purple-font purple-border-bottom fs-6 purple-hover">
                <label className="btn-success btn rounded p-2" htmlFor="file-upload">Submit task</label>
            </div>
            <SubmitComponent />
        </>
    )
}


export function TaskForm() {
    return (
        <>
            <div className="flex text-center p-5 font-face dark-purple-font fs-3">
                Create a Task
            </div>

            <div className="bootstrap-iso font-face dark-purple-font fs-5">
                <div className="container-flui ">
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <form method="post">
                                <div className="form-group ">
                                    <label className="control-label requiredField" htmlFor="name">
                                        Task Name
                                        <span className="asteriskField">
                                            *
                                        </span>
                                    </label>
                                    <input className="form-control mb-5" id="name" name="name" type="text" />
                                </div>
                                <div className="form-group ">
                                    <label className="control-label requiredField" htmlFor="message">
                                        Task Description
                                        <span className="asteriskField">
                                            *
                                        </span>
                                    </label>
                                    <textarea className="form-control mb-5" id="message" name="message" ></textarea>
                                </div>
                                <div className="form-group ">
                                    <label className="control-label requiredField" htmlFor="date">
                                        Due Date
                                        <span className="asteriskField">
                                            *
                                        </span>
                                    </label>
                                    <input className="form-control mb-5" id="date" name="date" placeholder="MM/DD/YYYY" type="text" />
                                </div>
                                <div className="form-group ">
                                    <label className="control-label" htmlFor="text">
                                        Necessary Skills
                                    </label>
                                    <input className="form-control mb-5" id="text" name="text" placeholder="JavaScript, React, C#..." type="text" />
                                </div>
                                <div className="form-group">
                                    <div>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <SubmitTask />







            
            <Tasks />
        </>
    )
}

export function Tasks() {
    // onChange() {

    // }
    return (
        <>
            <div className="flex text-center pt-5 pb-5 font-face dark-purple-font fs-3">Current Tasks</div>

            <div className="flex text-center pb-5 t-5">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.9125 10.4625L21.0375 2.5875C20.8125 2.3625 20.5875 2.25 20.25 2.25H9C7.7625 2.25 6.75 3.2625 6.75 4.5V31.5C6.75 32.7375 7.7625 33.75 9 33.75H27C28.2375 33.75 29.25 32.7375 29.25 31.5V11.25C29.25 10.9125 29.1375 10.6875 28.9125 10.4625ZM20.25 4.95L26.55 11.25H20.25V4.95ZM27 31.5H9V4.5H18V11.25C18 12.4875 19.0125 13.5 20.25 13.5H27V31.5Z" fill="#4b474d" />
                    <path d="M11.25 24.75H24.75V27H11.25V24.75ZM11.25 18H24.75V20.25H11.25V18Z" fill="#4b474d" />
                </svg>
                <div className="font-face dark-purple-font fs-4">Create master tracker</div>
                <div className="dark-purple-hover font-face medium-purple-font m-1">Necessary Skills: React, Typescript, Firebase</div>
                <div className="dark-purple-hover font-face medium-purple-font fw-bold m-1">DUE: 04/20/22</div>
                <div className="dark-purple-hover font-face medium-purple-font fw-bold m-1 btn text-success">SUBMIT</div><div className="dark-purple-hover font-face medium-purple-font fw-bold m-1 btn text-danger">DELETE</div>
            </div>

            <div className="flex text-center pb-5 t-5">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.9125 10.4625L21.0375 2.5875C20.8125 2.3625 20.5875 2.25 20.25 2.25H9C7.7625 2.25 6.75 3.2625 6.75 4.5V31.5C6.75 32.7375 7.7625 33.75 9 33.75H27C28.2375 33.75 29.25 32.7375 29.25 31.5V11.25C29.25 10.9125 29.1375 10.6875 28.9125 10.4625ZM20.25 4.95L26.55 11.25H20.25V4.95ZM27 31.5H9V4.5H18V11.25C18 12.4875 19.0125 13.5 20.25 13.5H27V31.5Z" fill="#4b474d" />
                    <path d="M11.25 24.75H24.75V27H11.25V24.75ZM11.25 18H24.75V20.25H11.25V18Z" fill="#4b474d" />
                </svg>
                <div className="font-face dark-purple-font fs-4">Optimize SEO</div>
                <div className="dark-purple-hover font-face medium-purple-font m-1">Necessary Skills: SEO, Web Development</div>
                <div className="dark-purple-hover font-face medium-purple-font fw-bold m-1">DUE: 04/22/22</div>
                <div className="dark-purple-hover font-face medium-purple-font fw-bold m-1 btn text-success">SUBMIT</div><div className="dark-purple-hover font-face medium-purple-font fw-bold m-1 btn text-danger">DELETE</div>
            </div>
        </>
    )
}

