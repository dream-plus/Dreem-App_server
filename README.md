# DreamPlus 
* * *
## 1. DreamPlus 소개
### 1.1 DreamPlus란?
  
건양대학교 융합IT학부, 융합디자인 학생들이 모여 만든 동아리 입니다.  

### 1.2 DreamPlusApp_server

Dreamplus 동아리 App의 server를 올린 github 페이지 입니다.

* * *
## 2. 개발 환경
### 2.1 서버
* node-js 8.10.0
### 2.2 Cloud  
* AWS - EC2 : ubuntu 18.04 LTS
### 2.3 데이터베이스  
* RDS - mysql 5.6.40
### 2.4 RESTAPI url
|기능|세부기능|Call|메소드|url|body|
|---|---|---|---|---|---|
|회원가입|-|App|post|/users/signup|_id,pw, ETC...
|로그인|-|App|post|/users/signin|username, password
|로그아웃|-|App|get|/users/signout| -

|기능|세부기능|Call|메소드|url|body|
|---|---|---|---|---|---|
|게시판|글쓰기|App|post|/board/am|..ETC|
|게시판|목록|App|get|/board/:cur|-|
|게시판|삭제|App|delete|/board/am|_id, name, ETC...|
|게시판|수정|App|put|/board/edit|...|

|기능|세부기능|Call|메소드|url|body|
|---|---|---|---|---|---|
|달력|...|...|...|...|...| 
   
etc...  
* * * 
## 3. Related to git repository
### 3.1 APP
* git URL : https://github.com/dream-plus/DreamPlus_App

* * * 



