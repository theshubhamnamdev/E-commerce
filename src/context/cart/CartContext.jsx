import { createContext, useEffect, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    // Total

    const [itemAmount , setItemAmount] = useState(0)
    const [total , setTotal] = useState(0)

    useEffect(()=>{
        const total = cart.reduce((p , c)=>{
            return p + c.price * c.amount

        } , 0)
        setTotal(total)
    })

    // update item amount
    useEffect(()=>{
        if(cart){
            const amount = cart.reduce((p,c)=>{
                return p + c.amount
            } , 0)
            setItemAmount(amount)
        }
    },[cart])

    const addToCart = (product,id) =>{
       // console.log(product)
   
       //  Add new Quantity to the product 
    const newItem = {...product , amount : 1}
    // console.log(newItem)
    
    // checking if the item is already in the cart
    const cartItem = cart.find((item)=>{
        return item.id === id
    })

    // if cart item is already in the cart
    if(cartItem){
        const newCart = [...cart].map((item)=>{
            if(item.id === id){
                return {...item , amount : cartItem.amount + 1}
            } else{
                return item
            }
        })
        setCart(newCart)

    }  else{
        setCart([...cart , newItem])
    }
    }
console.log(cart)

    // remove from cart

    const removeFromCart = (id) =>{
        const newCart = cart.filter((item)=>{
            return item.id !== id
        })
        setCart(newCart)
    }

    // Clear Cart

    const clearcart = () =>{
        setCart([])
    }

    // increase amount
    const increaseAmount = (id) =>{
        // console.log('amount increased')
        const cartItem = cart.find((item)=> item.id=== id)
        // console.log(item)
        addToCart(cartItem, id)
    }

    const decreaseAmount = (id) =>{
        const cartItem = cart.find((item)=>{
            return item.id=== id
        })
        // console.log(item)
        // addToCart(item. id)
        if(cartItem){
            const newCart = cart.map((item)=>{
                if(item.id === id){
                    return{...item , amount : cartItem.amount - 1}
                }else{
                    return item
                }
            })
            setCart(newCart)
        }
        if(cartItem.amount < 2){
            removeFromCart(id)
        }
        
    }

 return(
    <CartContext.Provider value={{cart, itemAmount , total, addToCart , removeFromCart , clearcart , increaseAmount, decreaseAmount}}>
        {children}
    </CartContext.Provider>
 )
}

export default CartContext