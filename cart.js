const prouduct = [
{
id:1,
image :'headphone.jpg',
title: 'Headphone',
price:'<del>$20</del><br><br>$15',
},

{
    id:2,
    image :'iphone13promax.jpg',
    title: 'Iphone13 Pro Max',
    price:'$150',
    },

    {
        id:3,
        image :'Lemfo-Y20-Waterproof-Smartwatch-Heart-Rate-Bluetooth-5-1-IP67-190mAh-Pink-16042021-01-p.webp',
        title: 'Smart Watch',
        price:'$20',
        },

        {
            id:4,
            image :'hplaptop.jpg',
            title: 'Hp Laptop',
            price:'<del>$150</del><br><br>$120',
            },

            {
                id:5,
                image :'camera.jpg',
                title: '250D DSLR Camera',
                price:'<del>$80</del><br><br>$60',
                },

                {
                    id:6,
                    image :'disquedur.jpg',
                    title: 'Disque Dur Externe',
                    price:'$35',
                    },

                    {
                        id:7,
                        image :'galaxyzflip.jpg',
                        title: 'Z Flip Foldable Mobile',
                        price:'$55',
                        },

                        {
                            id:8,
                            image :'airpodspro.jpg',
                            title: 'Air Pods Pro',
                            price:'<del>$50</del><br><br>$45',
                            },

]
const categories = [...new Set(prouduct.map((item)=>
    {return item}))]
    let cart =document.getElementById('root');
    cart.innerHTML=categories.map((item)=>
    {
var {image,title,price}=item;
return(
    `<div class="box">
    <div class="img-box">
    <img src=${image}></img>
    </div>
    <div class="left">
    <p>${title}</p>
    <h2>${price}</h2>
    <button id="btn"> Shop Now</button>
    </div>
    </div>
    `
    )
    
    
        }).join('')
        let mybtn =document.getElementById("btn");
        mybtn.onclick=function(){
            window.alert("You Need To Create An Account");
        }
      