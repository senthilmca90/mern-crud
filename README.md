# mern-crud


## Getting Started


## Preview
<img src='https://github.com/senthilmca90/mern-crud/blob/master/customers_api.gif?raw=true' alt='Preview'>

Express(server)
---------------

```sh
git clone https://github.com/senthilmca90/mern-crud.git

cd mern-crud/server
npm install
npm start
```
Open [http://localhost:3001](http://localhost:3001)<br>

Check [http://localhost:3001/api/customers](http://localhost:3001/api/customers)

output
-------

```
{
    "success": true,
    "message": "Customers fetched successfully",
    "customers": []
}
```
Postman
--------
Post API
--------
[http://localhost:3001/api/customers](http://localhost:3001/api/customers)
```
{
	"firstName": "senthil",
    "lastName": "kumar"
}
```
Output
------
```
{
    "success": true,
    "message": "Customer fetched successfully",
    "result": {
        "firstName": "senthil",
        "lastName": "kumar",
        "_id": "5b376579a6555b0b9c7861ae",
        "createdAt": "2018-06-30T11:11:53.703Z",
        "updatedAt": "2018-06-30T11:11:53.703Z",
        "customerId": 1,
        "__v": 0
    }
}

```


React-Rdux(client) - Side
-------------------------


## Preview
<img src='https://github.com/senthilmca90/mern-crud/blob/master/Redux%20MERN%20CRUD%20Example%20.gif?raw=true' alt='Preview'>

```
cd mern-crud/client
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000)<br>

