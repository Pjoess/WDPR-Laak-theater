import React from 'react'
import FooterComponent from '../../components/footer/footer'
import NavigationBar from '../../components/navigation-bar/navigation-bar'

export default function OrderPlaced() {
  return (
    <div>
        <NavigationBar />
        <section className="container">
            <h1>Bedankt!</h1>
            <div className="alert alert-success mt-3" role="alert">
                Uw bestelling is geplaatst!
            </div>
        </section>
        <FooterComponent/>
    </div>
  )
}
