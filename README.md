# DFabrica
This is a Ecommerce site with clothing having both client and admin side

# Deployed Site Link
### https://dfabrica.netlify.app/

# API Data base in `db.json file`
Hard collected from the cloning example site https://www.bewakoof.com/
# Deployed API Link for DFabrica : 
### https://dfabrica-data-app.onrender.com

# API github Link
### https://github.com/RamR3R/Dfabrica-data-app

# DFabrica API

## API Reference
We can perform all CRUD Operation Using the deployed API   `GET` ,`POST` , `PUT` ,`PATCH` and `DELETE`
### `api/admin` Routes are proteced and need to be accesed with `JWT token`
#### Get all items



```http
  GET http://dfabrica-data-app.onrender.com/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | gets all the user data |

#### Get item

```http
  GET http://dfabrica-data-app.onrender.com/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |


## 🔗 Deployed Link

  `http://dfabrica-data-app.onrender.com`
  [![logo](https://user-images.githubusercontent.com/121308432/229314546-0b7bca65-b132-485a-a20f-ee7900106ddc.jpg)](http://dfabrica-data-app.onrender.com/)
  
  
# Landing Page
![image](https://user-images.githubusercontent.com/121308432/229394485-cb418a61-a5f2-45eb-ba7d-ab6ac283a56e.png)

# User Login Page
## This page has the feature of ` Email verification ` for the new users Signing Up. This is done by using SMTPJS.
By sending OTP to verify user Email address.

### https://smtpjs.com/

![image](https://user-images.githubusercontent.com/121308432/229394568-608effad-00d6-4368-b8f7-4a816a67ede0.png)

# Category Page
## Here the api data for each category is displayed and the filter functionality could be used simaltaneously with different combinations
![image](https://user-images.githubusercontent.com/121308432/229394785-ec281354-9996-41ba-a18a-065dc09eecd1.png)

# Individual Product Page
Here the currency funtionality is used we can change the country loction and get the respiective price of the corresponding countries.
![image](https://user-images.githubusercontent.com/121308432/229395104-7e8549b1-26fd-472e-8241-d23bd1ab8b18.png)
![image](https://user-images.githubusercontent.com/121308432/229395116-7dc0c811-1e8d-487e-ad59-f2227b7eddc8.png)


## The check availability funtion uses ` GoogleMaps Api ` to calculate the distance between source of the product and destination of the user using 
## ` Distance Matrix API ` from Google Maps API.
![image](https://user-images.githubusercontent.com/121308432/229395368-9c502394-cfe4-45c7-b0a8-935ac4e0aa96.png)
 
# Checkout Page
## Here the user details are fetched from the LS from key ` login-info ` stored during Login or Signup of a user.
## When the user enters the ` PINCODE ` the data of City , State and Country is fetched Automatically with the help of ` GoogleMapsAPI `.
#
![image](https://user-images.githubusercontent.com/121308432/229396055-8f3858e8-4ca6-481c-beee-70642aaabf32.png)

#Admin Login Page
Admin can Login from here
# 
![image](https://user-images.githubusercontent.com/121308432/229397057-de90680f-0b81-456c-b510-b58e95475ffe.png)

#Admin AddItem Page

# 

 Admin would be able to add Products from the admin page in the api and allow the users to get them from the client side.
` POST ` method - adding products
` PATCH ` method - Updating products
` DELETE ` method - Deleting products

#
![image](https://user-images.githubusercontent.com/121308432/229397352-fcdd5472-ea0f-428e-86f8-5afa1ba00992.png)



# The APIs Used in this project are below:
### https://smtpjs.com/                   = Email sender usgin API in JS.
### https://cloud.google.com/apis         = Locating the User, Fetching Address using Location (Lat , Lng)
### DistanceMatrixApi                     = Calculate the route , distance and duration between 2 end points
### http://dfabrica-data-app.onrender.com = Api database with all CRUD operations and JWT Protected Routes.
