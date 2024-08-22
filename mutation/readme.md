# Query to request

```
# Write your query or mutation here
# Write your query or mutation here
query allQuerys {
  users {
    ...userPayload
  }
	user(id: 3) {
    ...userPayload
  }
  profiles {
    ...profilePayload
  },
  profile(id: 2) {
    ...profilePayload
  },
}

mutation allMutations {
  createUser(
    name: "Ana",
    email: "teste4@email.com",
    age: 40
  ) {
  	...userPayload
  }
  deleteUser(id: 2) {
    ...userPayload
  }
	updateUser(
    id: 4, 
    name: "Ana Alterada",
    email: "testealt@email.com",
    age: 42
  ) {
    ...userPayload
  }
}

fragment userPayload on User {
  status id name email age salary vip
  profile { ...profilePayload }
}

fragment profilePayload on Profile {
  id name permissions
}
```
