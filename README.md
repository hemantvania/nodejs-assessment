# nodejs-assessment
This is a assignment of nodejs

## APIs

**userlist is ToDo list**

**Register user**

__http://{hostname}:{port}/signup__

{

	"email":"hemant1@test-user.com",
  
	"firstName": "Hemant",
  
	"lastName" : "Vaniya",
  
	"password": "user123"
  
}

**Login user**

__http://{hostname}:{port}/login__

{

	"email":"hemant1@test-user.com",
  
	"password": "user123"
  
}

**Add in todo list**

__http://{hostname}:{port}/userlist__ (POST method)

{


	"description": "this is test",
    "completed": true
    
}

**GET all todos**

**http://{hostname}:{port}/userlist** (GET method)

> **using _Authorization_ Token** 


**Get single user**

**http://{hostname}:{port}/userlist/{_id}**


**update user details**

**http://{hostname}:{port}/user/{_id}** (PUT method)

{

	"role": "admin"
  
}


**Delete user list**

**http://{hostname}:{port}/userlist/{_id}** (DELETE method)
