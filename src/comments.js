const faker = require('faker');
const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
 res.send([
  {
   "author" : [
    {
     "id": 1,
     "username": faker.internet.userName(),
     "surname":"Wilson",
     "email" : "Jane@biz.net"
    }
   ],
   
   "date": "01.02.2022",
   "text" : "Lorem..."
  },
  
  {
  
  
  "author": [
   {
    "id": 2,
    "username": faker.internet.userName(),
    "surname":"Doe",
    "email" : "John.doe@biz.net"
   } 
  ],
  "date": "03.02.2022",
  "text" : "Ipsum"
   },
  {
  
  "author": [
   {
    "id": 3,
    "username": faker.internet.userName(),
    "surname":"Tivi",
    "email" : "michaelus@gne.net"
   } 
  ],
  "date": "04.02.2022",
  "text" : "Hjdijud"
  
  
  },
  {
  "author": [
   {
    "id": 4,
    "username": faker.internet.userName(),
    "surname":"Jordan",
    "email" : "LJh@sdot.net"
   } 
  ],
  "date": "05.02.2022",
  "text" : "ofkrfmr"
  
  
  },
  {
  "author": [
   {
    "id": 5,
    "username": faker.internet.userName(),
    "surname":"Daniels",
    "email" : "MD2e@dot.net"
   } 
  ],
  "date": "06.02.2022",
  "text" : "Hkjfjfjujff"
  
  
  },
  {
  "author": [
   {
    "id": 6,
    "username": faker.internet.userName(),
    "surname":"Petroff",
    "email" : "ivpetrov@gmail.com"
   } 
  ],
  "date": "07.02.2022",
  "text" : "Uhjdhjuddk"
  
  
  },
  {
  "author": [
   {
    "id": 7,
    "username": faker.internet.userName(),
    "surname":"Mars",
    "email" : "BrunoMS@dot.net"
   } 
  ],
  "date": "08.02.2022",
  "text" : "Fkahkahghfyfa"
  
  
  }
 ]);
});
module.exports = router;


