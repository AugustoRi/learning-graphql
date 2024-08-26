# Challenge
Apply UserInput to updateUser

# Query to request

```
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
    data: {
      name: "Ana",
      email: "teste4@email.com",
      age: 40
    }
  ) {
  	...userPayload
  }
  deleteUser(
    filter: {
      id: 2
    }
  ) {
    ...userPayload
  }
  updateUser(
    filter: {
      id: 1
    }
    data: {
      name: "Augusto R.",
      email: "testando@email.com",
      age: 12
    }
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
