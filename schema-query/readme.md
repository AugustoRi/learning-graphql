# Query to request

```
# Write your query or mutation here
{
  # ola,
  # exactlyTime,
  # user {
  #   id name email age salary vip
  # },
  # users {
  # 	id name email vip
  # },
  # findUser(id: 1) {
  #   name vip
  # }
  # highlightProduct {
  #   name price discount
  # },
  # loteryNumbers,
  # profiles {
  #   name permissions
  # },
  # profile(id: 2) {
  #   name permissions
  # },
  # users {
  #   name
  #   vip
  #   profile {
  #     name
  #     permissions
  #   }
  # }

  findUser(id: 3) {
    ...userPayload
  }
  users {
    ...userPayload
  }
}

fragment userPayload on User {
  status id name email age salary vip
  profile { id name permissions }
}
```
