# Bored Killer Website

**List of Routes User:**

| **Route**       | **HTTP** | **Description**                                      |
| --------------- | -------- | ---------------------------------------------------- |
| /users/register | POST     | Sign up with new user info                           |
| /users/login    | POST     | Sign in and get an access token based on credentials |

**List of Routes  Api:**

| **Route**    | **HTTP** | **Description**                       |
| ------------ | -------- | ------------------------------------- |
| /apis/trivia | GET      | Get Trivia's Questions List           |
| /apis/bored  | GET      | Get advice to do something            |
| /apis/quote  | GET      | Get a daily quote to pump up your day |

**Errors:**

| Code | Name                  | Description                               |
| ---- | --------------------- | ----------------------------------------- |
| 400  | Authentication Failed | Email or Password is incorrect            |
| 401  | Unauthorized Access   | We could not process that action          |
| 404  | Not Found             | The requested resource could not be found |
| 500  | Internal Server Error | We had a problem with our server          |


**Register User**
----
* **URL:** `/users/register`
* **Method:** `POST`
* **URL Params:** `None`
* **Data Params:** `email, username, password`

* **Success Response:**
  * **Status:** `201`
    **Content:** 
    
    ```
        {
            "id": 1,
            "email": "winata.luk@gmail.com",
            "username": "lukywinata",
            "password": "hashhashahsahsahhs",
            "updatedAt": "2019-10-29T15:21:41.639Z",
            "createdAt": "2019-10-29T15:21:41.639Z"
        }
    ```
* **Error Response:**
  * **Status:** `500`
    **Content:**
    
    ```
        {
            "message": 'Internal Server Error'
        }
    ```

**Login User**
----
* **URL:** `/users/login`
* **Method:** `POST`
* **URL Params:** `None`
* **Data Params:** `email, password`

* **Success Response:**
  * **Status:** `200`
    **Content:** 
    
    ```
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTcyMzYzNzUwfQ.Gf0JAtSpcI1r5C6VHAlp-znvaFxJZL5b5pJ5gaCTrNs"
    }
    ```
* **Error Response:**
  * **Status:** 400
    **Content:**
    ```
        {
            "message": 'Email/Password is Incorrect'
        }
    ```



**Get Questions from TrivianDb API**
----

* **URL:** `/apis/trivia`
* **Method:** `GET`
* **URL Params:** `None`
* **Data Params:** `subject to change`

* **Success Response:**
  
  * **Status:** `200`
    **Content:** 
    
    ```
    {
        "response_code": 0,
        "results": [
            {
                "category": "Entertainment: Video Games",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Which was the first video game to be produced by development company Rare?",
                "correct_answer": "Slalom",
                "incorrect_answers": [
                    "R.C. Pro-Am",
                    "Donkey Kong Country",
                    "Battletoads"
                ]
            },...
          ]
    }
    ```
* **Error Response:**
  
  * **Status:** `500`
    **Content:**
    
    ```
        {
            "message": 'Internal Server Error'
        }
    ```



**Get Advice**
----

* **URL:** `/apis/bored`
* **Method:** `GET`
* **URL Params:** `None`
* **Data Params:** `None`

* **Success Response:**
  
  * **Status:** 200
    **Content:** 
    
    ```
    {
        "activity": "Make a new friend",
        "accessibility": 0,
        "type": "social",
        "participants": 1,
        "price": 0,
        "link": "",
        "key": "1000000"
    }
    ```
* **Error Response:**
  
  * **Status:** 500
    **Content:**
    
    ```
        {
            "message": 'Internal Server Error'
        }
    ```



#### Usage
Make sure you have Node.js and npm installed on your computer, then run these command.
````
$ npm install
````

#### Environment Variables
````
JWT_SECRET = to-do-api
````
