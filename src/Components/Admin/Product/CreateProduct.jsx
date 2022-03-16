import React, { useState } from 'react'

export default function CreateProduct() {
    const [images, setimages] = useState([])
    const createProduct = async () => {
        try {
        let form = new FormData()


        form.append('title[fa]',"محصول اول")
        form.append('title[en]',"product")

        form.append('category[0][fa]',"همه محصولات")
        form.append('category[0][en]',"All Products")
        form.append('category[0][title]',"all")
        form.append('category[1][fa]',"لوازم دیجیتال")
        form.append('category[1][en]',"Digital Appliances")
        form.append('category[1][title]',"digitalappliances")
     

        form.append('options[0][fa]',"ارسال رایگان")
        form.append('options[0][en]',"Send Free")
        form.append('options[1][fa]',"گارانتی مادام العمر")
        form.append('options[1][en]',"Lifetime warranty")

        form.append('description[0][fa]',"شرکت سامسونگ")
        form.append('description[0][en]',"Samsung Company")

        form.append('info[fa]',"گوشی موبایل برند سامسونگ")
        form.append('info[en]',"Samsung Phone Brand")

        form.append('rates',4)
        form.append('comments[0][fa]',"محصول وبی بود")
        form.append('comments[0][en]',"good product")

        form.append('price',2000)
        // form.append('discount',10)
        // form.append('discountedPrice',1800)
        console.log(images)
        images.map((image,index)=>[
            form.append('imageUrl',images[index])

        ])
        form.append('count',25)

          const data = await fetch("http://localhost:4000/api/product", {
            method: "post",
            body:form,
          });
        } catch (error) {
          console.log(error);
        }
      };
      const changehandkler=(e)=>{
        console.log(e.target.files[0])
        setimages(prev=>[...prev,e.target.files[0]])
      }
    return (
        <div>
            <input type='file' onChange={changehandkler}/>
            <button type='button' onClick={createProduct}>
                send
            </button>
        </div>
    )
}
