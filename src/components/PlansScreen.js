import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import db from './firebase'
import './PlansScreen.css'
import { selectUser } from '../features/counter/userSlice';
import { loadStripe } from '@stripe/stripe-js';



function PlansScreen() {

    const user = useSelector(selectUser)

    const [products, setProdcuts] = useState([])
    const [subscription, setSubscription] = useState({})

    useEffect(() => {
        db.collection("customers").doc(user.uid)
        .collection("subscriptions").get()
        .then(querySnapshot => {
            querySnapshot.forEach(async subscription => {
                // const {role, current_period_start, current_period_end} = subscription.data();
                setSubscription({role: subscription.data().role, current_period_start: subscription.data().current_period_start.seconds, current_period_end: subscription.data().current_period_end.seconds})
            })
        })
    }, [user.uid])

    useEffect(() => {
        db.collection("products").where("active", "==", true).get().then((querySnapshot) => {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection("prices").get();
                priceSnap.docs.forEach((price)=> {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }
                })
            })
            setProdcuts(products)
        })
    }, [])

    

    const loadCheckout = async (priceId) => {
        const docRef = await db.collection("customers").doc(user.uid)
        .collection("checkout_sessions").add({price: priceId, success_url: window.location.origin, cancel_url: window.location.origin});

        docRef.onSnapshot(async (snap) => {
            const {error, sessionId} = snap.data()
            if (error){
                alert(`An error occured: ${error.message}`)
            }

            if(sessionId){
                const stripe = await loadStripe('pk_test_51KpHJvSHnov2pFn5QVFUerKTaTXVJMsQHpzarzQHPe7xUI7Uqgky55xSwJoNhKvkScdecw340Jty1dKfoRb0GiUV00Yl7mYhVN');
                stripe.redirectToCheckout({ sessionId });
            }

            
        })
    }


  return (
    <div className='plans-screen'>
        <div className='current-plan'>{`Plans: ${subscription.role}`}</div>
       {subscription && <p className='renewal-date'>{`Renewal Date: ${new Date(subscription && subscription.current_period_end*1000).toLocaleDateString()}`}</p>}
        {Object.entries(products).map(([productId, productData]) => {
            const isCurrentPackage = productData.name && productData.name.toLowerCase().includes(subscription && subscription.role)
            return (
                <div className={`${isCurrentPackage && 'all-plans-disabled'} all-plans`}  key={productId}>
                    <div className='plan-info'>
                        <h5>{productData.name}</h5>
                        <h6>{productData.description}</h6>
                    </div>
                    <button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>{isCurrentPackage ? 'Current' : 'Subscription'}</button>
                </div>
            )
        })}

    </div>
  )
}

export default PlansScreen