import React, { useState } from "react";

const Card=()=>{

const items=[
    {
    id:1,
    img:"https://th.bing.com/th/id/OIP.UVFEqSVVkni_zKDNjjM4_QHaE7?rs=1&pid=ImgDetMain",
    title:"DOPPIO",
    para:"Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks"
    }
    ,
    {
        id:2,
        img:"https://th.bing.com/th/id/R.4628fbd856a4e779084fc1015373d2d7?rik=2OlxYS5SPEoSqQ&riu=http%3a%2f%2fblog.hdwallsource.com%2fwp-content%2fuploads%2f2014%2f11%2fcoffee-cup-wallpaper-38731-39617-hd-wallpapers.jpg&ehk=z5evNWemrcOYu5rxhTis9pZr7IPJ1e3ANpSaFrEHTog%3d&risl=&pid=ImgRaw&r=0",
        title:"CAFE CREAME",
        para:"Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks"
        }
        ,    {
            id:3,
            img:"https://www.pixelstalk.net/wp-content/uploads/2016/05/Free-Download-Coffee-Wallpapers-High-Quality.jpg",
            title:"AFFOGATO",
            para:"Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks"
            }
            ,    {
                id:4,
                img:"https://www.pixelstalk.net/wp-content/uploads/2016/05/Pictures-Download-Coffee-Wallpapers-High-Quality.jpg",
                title:"MOCHA",
                para:"Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks"
                }
                ,    {
                    id:5,
                    img:"https://images4.alphacoders.com/880/880046.jpg",
                    title:"CON PANNA",
                    para:"Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks"
                    }
]


const [coffee,setCoffee]=useState(items)

    return(
        <section id="card">
        <div className="container lists">
            {items.map((item)=>
            <div className="card" style={{width:"18rem"}}>
  <img src={item.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.para}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>)}
        </div>
        </section>
    )
}

export default Card