# Project: quicksilver

## End-point: Signup
### Description: Create a user
Method: POST
>```
>https://quicksilver-server.herokuapp.com/auth/signup
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
	"user": {
		"username": "slug00guls",
		"password": "password",
		"role": "admin" 
	}
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Login
### Description: login a user
Method: POST
>```
>http://quicksilver-server.herokuapp.com/auth/login
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
	"user": {
		"username": "slug00guls",
		"password": "password"
	}
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Post 
### Description: create a forum thread
Method: POST
>```
>http://quicksilver-server.herokuapp.com/posts/post
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJkOTM0YzUzLThkNzYtNDY2NC04ODBiLTM4NWUwZTUxMDdlMiIsImlhdCI6MTU5MzUzMjYxMCwiZXhwIjoxNTkzNjE5MDEwfQ.-CVpHOF50sND1kcEkfVy3BDCIaNNRgjaoSRUEOYuQ0M|


### Body (**raw**)

```json
{
	"post": {
		"language": "JavaScript",
		"title": "Postman Test",
		"content": "Testing",
		"upvote": 0
	}
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Comment
### Description: post a comment to a Post
Method: POST
>```
>http://quicksilver-server.herokuapp.com/comments/comment
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJkOTM0YzUzLThkNzYtNDY2NC04ODBiLTM4NWUwZTUxMDdlMiIsImlhdCI6MTU5MzUzMjYxMCwiZXhwIjoxNTkzNjE5MDEwfQ.-CVpHOF50sND1kcEkfVy3BDCIaNNRgjaoSRUEOYuQ0M|


### Body (**raw**)

```json
{
	"comment": {
		"post_id": "d1519e17-4cbd-4ee7-b991-bc8f4f096066",
		"content": "Postman testing - comment"
	}
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Get All
### Description: get all, including associations
Method: GET
>```
>http://quicksilver-server.herokuapp.com/auth/users
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhkMmQ5YzMyLTM4YTEtNGY1ZS1iYzFkLWQzMWFlNDI3ZjFmNyIsImlhdCI6MTU3NDY0OTA1NSwiZXhwIjoxNTc0NzM1NDU1fQ.st97pk9144BONYh_wmhXn6kThnD71TFQPQZpsh2cTwc|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Update Post
### Description: update post content
Method: PUT
>```
>http://quicksilver-server.herokuapp.com/posts/post/a60bfac5-3139-4a5b-ac85-be43887dc879
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhZTRkMTk4LTQ4MWYtNDdmMy1iMDdiLTYyYTU1MThjNTY1MiIsImlhdCI6MTU3NDE4Nzc2OSwiZXhwIjoxNTc0Mjc0MTY5fQ.n0oGjuX00jaZRyfPY-11LdAGmJejFmLi78yuUc5zzak|


### Body (**raw**)

```json
{
	"post": {
		"content": "updated test post"
	}
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Delete Post
### Description: delete post from database
Method: DELETE
>```
>http://quicksilver-server.herokuapp.com/posts/post/232c0ca5-1d96-4620-b299-79b7ca904cfe
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhZTRkMTk4LTQ4MWYtNDdmMy1iMDdiLTYyYTU1MThjNTY1MiIsImlhdCI6MTU3NDE4NzIzMSwiZXhwIjoxNTc0MjczNjMxfQ.pRnxRmEFEtkzbBNY4D9ABWGeRk4_rELvxjLEx05BP50|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Update Comment
### Description: update comment content
Method: PUT
>```
>http://quicksilver-server.herokuapp.com/comments/comment/37f26de1-aebb-4772-9f3e-198fc884df5d
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhZTRkMTk4LTQ4MWYtNDdmMy1iMDdiLTYyYTU1MThjNTY1MiIsImlhdCI6MTU3NDE4Nzc2OSwiZXhwIjoxNTc0Mjc0MTY5fQ.n0oGjuX00jaZRyfPY-11LdAGmJejFmLi78yuUc5zzak|


### Body (**raw**)

```json
{
	"post": {
		"content": "updated test comment"
	}
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Delete comment
### Description: remove comment from database
Method: DELETE
>```
>http://quicksilver-server.herokuapp.com/comments/comment/37f26de1-aebb-4772-9f3e-198fc884df5d
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhZTRkMTk4LTQ4MWYtNDdmMy1iMDdiLTYyYTU1MThjNTY1MiIsImlhdCI6MTU3NDE4Nzc2OSwiZXhwIjoxNTc0Mjc0MTY5fQ.n0oGjuX00jaZRyfPY-11LdAGmJejFmLi78yuUc5zzak|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

_________________________________________________
Author: [bautistaj](https://github.com/bautistaj)

Package: [postman-to-markdown](https://github.com/bautistaj)
