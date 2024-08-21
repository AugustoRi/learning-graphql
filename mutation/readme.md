# Query to request

```
# Write your query or mutation here
{
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

fragment userPayload on User {
  status id name email age salary vip
  profile { ...profilePayload }
}

fragment profilePayload on Profile {
  id name permissions
}
```
