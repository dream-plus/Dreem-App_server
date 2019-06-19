# Dreamplus 동아리 App의 server입니다.

* AWS - EC2의 ubuntu를 이용하여 서버를 구축하였습니다.

* * *

## App 

* git URL : https://github.com/dream-plus/DreamPlus_App


## Database

* AWS - RDS의 Mysql을 이용하여 구축하였습니다.


* * * 

## restapi url

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

