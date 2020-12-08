This repository is based upon a simple starting repository at https://github.com/divinedela/express-typescript-apis for the basic scaffolding

# The Project

## Technology Stack
- Node.js
- TypeScript
- Express

## Functionality and Design
The application must expose restful endpoints that will parse data (passed in the request body) and return the value back to the client. The API will have two versions and depending on the version endpoint, the parsing of the data will return a different value back to the client. Use TypeScript interfaces so the code assumes the design / object properties.

## Endpoints
```
/api/v1/parse (POST)
```
```
/api/v2/parse (POST)
```

## Request Body
```
{
  data: “JOHN0000MICHAEL0009994567”
}
```

## Expected Results
```
/api/v1/parse – Response Body
```
```
{
  statusCode: 200,
  data:  {
    firstName: “JOHN0000”,
    lastName: “MICHAEL000”,
    clientId: “9994567”
  }
}
```
```
/api/v2/parse – Response Body
```
```
{
  statusCode: 200,
  data:  {
    firstName: “JOHN”,
    lastName: “MICHAEL”,
    clientId: “999-4567”
  }
}
```

# Run the test

Download the code from GitHub






## For v1
```
curl --header "Content-Type: application/json"   --request POST   --data '{"data": "JOHN0000MICHAEL0009994567"}'   http://localhost:3000/api/v1/parse
```
## For v2
```
curl --header "Content-Type: application/json"   --request POST   --data '{"data": "JOHN0000MICHAEL0009994567"}'   http://localhost:3000/api/v2/parse
```