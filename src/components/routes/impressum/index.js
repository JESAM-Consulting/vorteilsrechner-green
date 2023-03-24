import React, { useEffect } from "react";
import "./impressum.scss";
import Logo from "../../../assets/logo/logo.png";
import { NavLink } from "react-router-dom";
import SteperFooter from "../../steperFooter";

export default function Impressum() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="full-page-logo">
        <div className="container-md">
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
        </div>
      </div>
      <div className="impressum-banner-content-alignment"></div>
      <div className="impressum-content-alignment">
        <div className="container-md">
          <h1>Impressum</h1>
          <div className="all-content-style">
            <div className="text-style">
              <h2>Angaben gemäß § 5 TMG</h2>
              <p>
                Energiekonzepte Deutschland GmbH
                <br />
                Straße des 17. Juni 4a
                <br />
                04425 Taucha
              </p>
              <p className="bottom-text">Handelsregister: HRB 34979</p>
              <p>Registergericht: AG Leipzig</p>
            </div>
            <div className="text-style">
              <h2>Vertreten durch:</h2>
              <p>Geschäftsführer Silvio Bräuer, Ricardo Kopp</p>
            </div>
            <div className="text-style">
              <h2>Kontakt</h2>
              <p style={{ margin: "0" }}>
                {" "}
                <a href="tel:+49 342 98 98 990">Telefon: +49 342 98 98 990</a>
              </p>
              <p>
                <a href="mailto:info@ekd-solar.de?subject = Feedback&body = Message">
                  E-Mail: info@ekd-solar.de
                </a>
              </p>
            </div>
            <div className="text-style">
              <h2>Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
              </p>
              <p className="bottom-text">DE318392423</p>
            </div>
            <div className="text-style">
              <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p className="bottom-text">
                Berufsbezeichnung: Photovoltaik + Stromspeicher Installateur
              </p>
              <p className="bottom-text"> Zuständige Kammer:</p>
              <p className="bottom-text"> Verliehen durch:</p>
              <p className="bottom-text">
                Es gelten folgende berufsrechtliche Regelungen:
              </p>
              <p className="bottom-text"> Regelungen einsehbar unter:</p>
            </div>
            <div className="text-style">
              <h2>EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit: LINK.
              </p>
              <p className="bottom-text">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>
            <div className="text-style">
              <h2>
                Verbraucher­streit­beilegung/ Universal­schlichtungs­stelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
            <div className="text-style">
              <h2>Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </div>
            <div className="text-style">
              <h2>Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </p>
            </div>
            <div className="text-style">
              <h2>Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
              <p>
                Quelle:{" "}
                <a
                  href="https://www.e-recht24.de/impressum-generator.html"
                  target="_blank"
                >
                  {" "}
                  https://www.e-recht24.de/impressum-generator.html{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <SteperFooter />
    </>
  );
}
