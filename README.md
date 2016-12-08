# lms

Planning our application

Answer questions
What am I building?
Who am I building it for?
What features do I need to have?
User Stories
Model our Data
Think through the pages I need in my app
Questions

What am I building? A project manager for web developers. A place where I can create projects to share with collaborators, or manage by myself.
Who am I building it for? I am building it for myself, also for the web development community. Managing a project with a central location for tasks, assets, and planning. This will help project workflow and time management.
What features do we need to have?
Projects
Create / Edit/ Destroy
Info roadmap wizard (Gather basic project information for skeleton)
Kanban board
Collaboration
Communication
Comments
Tasks
Priority level
Task type
Wireframes
Create / Edit / Destroy
User flow
Low fidelity
Mid fidelity
Modeling data
Users
Project manager
Collaborators
User Stories

As a user, I want to be able to create empty project so that I can work on the specific project.
As a user, I want to be able to edit and delete projects so that I can manage the project easily.
As a user, I want to be able to invite collaborators to my project.
As a user, I want to be able to leave comments for collaborators.
As a collaborator, I want to be able to leave messages/comments for the project manager.
As a user, I want to be able to create tasks inside of the project so that I can track work to be done, and stay organized.
As a user, I want to be able to assign the type of task, and priority level.
As a user, I want to have a project wizard so that I can build a roadmap for the project.
As a user, I want to have the ability to create/read/update/delete userflow wireframes so that I can plan the users experience through the app.
As a user, I want to be able to create/read/update/delete low fidelity wireframes so that I can develop the project layout
As a user, I want to be able to create/read/update/delete mid fidelity wireframes so that I can model the projects actual layout
As a user, I want to be able to model my projects necessary data.
Modeling our Data

Project

title:string
description:textarea
projectmanager:string
comments:object
name:string
comment:textarea
collaborators:object
name:string
tasks:object
title:string
desc:textarea
wireframes:array:object
type:string
desc:textarea
datamodel:object
title:string
desc:textarea
Users

username:string
authToken:string
projects:object
role:string
Think thorught the pages I need in my app

- Home
- Projects#index(dashboard)
Project#show(manager)
Tasks#index
Task#show(manager)
Wireframes#index
Wireframe#show(manager)
Datamodel#index
Datamodel#show(manager)
Collaborators#index(manager)
Collaborators#show(manager)
- Contact
