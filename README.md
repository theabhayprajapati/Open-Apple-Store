
# Open Apple Store Api
>  A simple project to helping developer's to access open api's.

## How to use:

***`BaseUrl`*** : ***`https://oas.vercel.app/api`***

### /all
>***baseUrl*** **`/all`**
> it provides all the data from the database, from all the categories without filteration. 😊
### /category/:category
>**baseurl** **`/category/iphone`**
> here you can add category for your output. and result will be from that category only.
> example: + `/category/watch`
>          + `/category/iphone`
>          + `/category/macbook`
>          + `/category/airpods`
>          + `/category/ipad`

### /series/:series

>**baseurl** **`/series/MacBook Air`**
>🧑‍💻every product has series name such as iPhone 13 has series name such as iPhone 13, under  iPhone 13 two products come iPhone 13 & iPhone 13 mini.
>>They are `case sentitive` 😓 so iphone_13, iPhone_13 won't work ❌,
>correct way /series/iPhone 13 ✅
>without `%20`
### /:_Id
>**baseurl** **`/6228d7ac2e00fb1164b2df27`**
> for getting results realted to single product the /:_Id is used.
> example: /6228d7ac2e00fb1164b2df27,
> these are id sentitive `fetch` with their respective id's.😅
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
}
}
```


## Contributors:


**[`Abhay Prajapati`](https://www.twitter.com/AbhayPrajapati_)**

we are counting on you...

### Ready to know about your view's share with us.

