import NavigationBar from "../../components/navigation-bar/navigation-bar";
import React from "react";
import FooterComponent from "../../components/footer/footer";

export default function SignupPage() {
    // TODO: replace true/false with check for if the user is already logged in
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <h1 className="h1 mt-3 mb-3 font-weight-normal">Registreren</h1>

                {false &&
                    <div class="mb-3">
                        U bent al ingelogd als {/* username */}, <a href="/">klik hier om uit te loggen</a>
                    </div>
                }

                {true &&
                    <form method="post">
                        <label htmlFor="name">Naam</label>
                        <input type="text" id="name" name="name" aria-label="Name" className="form-control" required autoFocus />
                        <br />

                        <label htmlFor="email">E-mail adres</label>
                        <input type="email" id="email" name="email" aria-label="Email" className="form-control" required />
                        <br />

                        <label htmlFor="password">Wachtwoord</label>
                        <input type="password" id="password" name="password" aria-label="Password" className="form-control" required />
                        <br />

                        <label htmlFor="password">Bevestig wachtwoord</label>
                        <input type="password" id="password" name="password" aria-label="Password" className="form-control" required />
                        <br />

                        <button class="btn btn-md btn-primary my-4" type="submit">
                            Verstuur registratie
                        </button>
                    </form>
                }
            </div>
            <FooterComponent />
        </div>
    )
}
