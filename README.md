# OnlineStoreApi

## Api for MobileOnlineStore
### 2 Enteties:
* Product [
    get('api/products/'),
    get('api/products/:id'),
    get('api/products/category/:id'),
    post('api/products/'),
    put('api/products/:id'),
    delete('api/products/:id')
]
* Category [
    get('api/categories/'),
    get('api/categories/:id'),
    post('api/categories/'),
    put('api/categories/:id'),
    delete('api/categories/:id')
]
<br>
<br>

### Auth:
* post('api/auth/register')
* post('api/auth/login')

<br>
<br>
Used technologies: Node.js, Express.js, Mongoose, bcrypt, jsonwebtoken
