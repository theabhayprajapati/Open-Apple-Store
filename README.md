# Open Apple Store Api
>  A simple project to helping developer's to access open api's.

## How to use:

***`Baseurl`*** : *`https://oas.vercel.app/api`*

```javascript
let res =   fetch('https://oas.vercel.app/api/all')
    .then(res => res.json())
    .then(res => {
        console.log(res)
    });
alert(s);
```

### /all
> it provides all the data from the database, from all the categories without filteration
### /category/:category
> here you can add category for your output. and result will be from that category only.
> example: + `/category/watch`
>          + `/category/iphone`
>          + `/category/macbook`
>          + `/category/airpods`
>          + `/category/ipad`

### /:_Id
> for getting results realted to single product the /:_Id is used.
> example: /6228d7ac2e00fb1164b2df27
```json
{
    "data": {
        "_id": "6228d7ac2e00fb1164b2df27",
        "product_name": "MacBook Pro",
        "product_price": {
            "IN": 109000,
            "US": 999,
            "GBP": 899
    },
    "product_description": "Id culpa aliquip ipsum excepteur sunt incididunt laboris magna incididunt nostrud.",
    "createdAt": {
        "$timestamp": "7073140344224743438"
    }
}
}
```


## Contributors:
[`Abhay Prajapati`]('https://twitter.com/AbhayPrajapati_')
## we are counting on you.

## Thanks and Share your project that you have create with this data we are very happy to see.

