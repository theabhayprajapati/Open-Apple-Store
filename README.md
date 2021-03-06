
# ![Fury](/public/favicon.ico) Open Source Apple Store
<!-- image -->

Open Apple Store has data of almost all Apple Store's Products.

## API Reference
## Comminity 

[![Discord Server](https://img.shields.io/badge/%3CServer%3E-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/kKdf2ptP)


### Base Url

``base url`` **[`oas.vercel.app/api`](https://oas.vercel.app/api)**

#### Get All Items

```http
  GET /api/all
```

returns everything in the database.

#### Get Single item based on id

```http
  GET /api/${id}
```

| Route | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get **Categoried** products

```http
  GET /api/category/${category}
```

```java
Categories = ["Mac", "iPhone", "iPad", "Apple Watch"]
```

| Route | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `string` | **Required**. category of of item to fetch |

#### Get **Series of** products

```http
  GET /api/series/${series} 
```

```java
Series = ["MacBook Air","MacBook Pro" ,"MacBook Pro 13","MacBook Pro 14","MacBook Pro 16", "iPhone 13", "iPhone __", "Series 7", "Series __", "iMac"]
```

| Route | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `series`      | `string` | **Required**. category of of item to fetch |

## Tech Stack

**Client:** [`Next.js`](https://github.com/vercel/next.js/), [`Recoil`](https://github.com/facebookexperimental/Recoil), [`TailwindCSS`](https://github.com/tailwindlabs/tailwindcss)

**Server:**  [`MongoDB`](https://github.com/mongodb/mongo)


## Authors

- [`@AbhayPrajapati`](https://www.github.com/theabhayprajapati)
