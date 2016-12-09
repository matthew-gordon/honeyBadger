
https://www.youtube.com/watch?v=4r7wHMg5Yjg

# Planning my application

### Answer questions

 - What am I building?
 - Who am I building it for?
 - What features do I need to have?

### User Stories
### Model our Data
### Think through the pages I need in my app

## Questions

1. What am I building? A learning Managment System (LMS) for technical learning platform.

2. Who am I building it for? I am building it for Educators(admin), as well as students(user) in Web Development. Having an affective, engaging learning management platform for students and educators can boost retention and student participation.

3. What features do we need to have?

- Educator(admin)
  - dashboard
   1. alerts
     - assignments
       - submitted
     - messages
   2. courses
     - [ create | read | update | destroy ]
     - training material
       [ create | read | update | destroy ]
   3. students
     - [ create | read | update | destroy ]
   4. badges
     - [ create | read | update | destroy ]
   5. Forum
     
- Student(user)
  - dashboard
   1. alerts
     - assignments
       - submitted
       - graded
       - badges
     - messages
   2. courses
     - tracks
       - training material 
       - coursework
   3. badges
     - [ read ]
   4. Forum

- Forum/wiki
   - admin [ create | read | update | destroy ]
   
   - user [ create | read | update ]
## User Stories

 - [ ] as an admin, I want to be able to create courses so I can build out an entire curriculum from one dashboard.
 
 - [ ] as an admin, I want to be able to manage students so I can easily assign courses/enroll students.
 
 - [ ] as an admin, I want to be able to add training material/course work to created courses so students can access them.
 
 - [ ] as an admin, I want to be able to create badges so that students can earn them for completed work.
 
 - [ ] as an admin, I want an alerts panel to show relevant information about my created course(s) so I can manage them.
 
 - [ ] as an admin, I want to have easy access to view enrolled students profiles so I can get to know them.
 
 - [ ] as a user, I want to be able to access courses that I am enrolled in so I can access training material/coursework.
 
 - [ ] as a user, I want the course to be structured with "tracks" so I can earn badges for completed work (gamify).
 
 - [ ] as a user, I want to be able to communicate with my instructor so that I can ask for help.
 
 - [ ] as a user, I want to be able to communicate with my peers so that I can ask for help.
 
 - [ ] as a user, I want to submit feature requests through my dashboard so that I can see improvements in the LMS.

## Modeling our Data

Course
 - title:string
 - description:string
 - badges:object
   - name:string
   - description:textarea
   - value:integer

Training Material
 - title:string
 - description:string
 
User(admin/user)
 - id:integer
 - post_id:integer
 - name:string
 - role:string
 - email:string
 - bio:textarea
 - isAdmin:boolean

Forum Post
 - title:string
 - user_id:integer
 - description:textarea
 - timestamp:dateTime
 
## Think thorught the pages I need in my app

1. - Landing page
2. - Log in - Sign up
3. - Dashboard ( admin / user )
  - courses/index (manager) 
    - courses/index/:id (show)
    - courses/index/tracks (manager)
      - courses/index/tracks/:id (show)
  - forum/index (manager)
    - forum/index/:id (show)
  - badges/index (manager)
    - badges/index/:id (show)
4. - Contact

// Pivotal Tracker

https://www.pivotaltracker.com/n/projects/1933341
