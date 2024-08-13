# How to run
- Clone this project
- install Node(version 15)
- *npm i* to install dependencies
- *npm start* to run this app

# Query to request

```json
{
  ola,
  exactlyTime,
  user {
    id name email age salary vip
  },
  users {
  	id name email vip
  },
  findUser(id: 1) {
    name vip
  }
  highlightProduct {
    name price discount
  },
  loteryNumbers,
}
```
