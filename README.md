# DO Shark Challenge

Normally Typescript is our language of choice. Unfortunately Typescript isn't supported yet by DigitalOcean's cloud functions, so we will use plain Javascript.

## The Challenge
How to complete the Functions Challenge and add your shark to the Aquarium! ✖

### 1. Create a DigitalOcean Function
Visit the docs and create your DigitalOcean Function. You can create a function one of two ways. As a standalone function or a function in an App Platform app.

### 2. Make an API request to create your shark

`POST`: `https://functionschallenge.digitalocean.com/api/sammy`
|                        |                                                                |
|------------------------|----------------------------------------------------------------|
| Header: `Accept`       | `application/json` |
| Header: `Content-Type` | `application/json` |
| Parameter: `name`      |  YOUR NAME!        |
| Parameter: `type`      | The type of Sammy (see below)|


| Types of Sammys | | | 
|---------------------------|-|-|
| sammy    | retro | pony     |
| punk     | pizza | bootcamp | 
| dinosaur | robot | xray     |

### 3. See your Shark swimming in the Aquarium!
Visit functionschallenge.digitalocean.com and see your shark swimming in the aquarium!


## Deploying
When you run the function locally you will get the following error.

```json
{
  "error": "Your API call looks good. Now make sure to make it using a DigitalOcean Function :)"
}
```

Only thing left to do is to deploy the function.