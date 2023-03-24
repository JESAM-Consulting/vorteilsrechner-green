import React, { useEffect } from "react";
import "./datenschutzerklaerung.scss";
import Logo from "../../../assets/logo/logo.png";
import { NavLink } from "react-router-dom";
import SteperFooter from "../../steperFooter";

export default function Datenschutzerklaerung() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="full-page-logo">
        <div className="container-md">
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
        </div>
      </div>
      <div className="datenschutzerklaerung-banner-content-alignment"></div>
      <div className="datenschutzerklaerung-content-alignment">
        <div className="container-md">
          <h1>Datenschutzerklärung</h1>
          <div className="all-content-style">
            <div className="text-style">
              <h2>1. Hier finden Sie unsere Informationen zum Datenschutz</h2>
              <p>
                Damit Sie wissen, wie und warum Ihre Daten verwendet werden, ist
                es wichtig, dass Sie diese Datenschutzerklärung und alle
                weiteren Hinweise zum Datenschutz und fairer Datenverarbeitung
                lesen, die wir Ihnen im Zusammenhang mit der Erhebung oder
                Verarbeitung Ihrer personenbezogenen Daten bei bestimmten
                Gelegenheiten zur Verfügung stellen.
              </p>
              <p>
                Wir beziehen uns bei den verwendeten Begrifflichkeiten auf die
                Definitionen gem. Art. 4 EU-Datenschutz-Grundverordnung
                (DS-GVO).
              </p>
            </div>
            <div className="text-style">
              <h2>2. Wer „Wir“ sind</h2>
              <p>
                Die verantwortliche Stelle für die Verarbeitung Ihrer
                personenbezogenen Daten auf dieser Website ist:
              </p>
              <p>
                Energiekonzepte Deutschland GmbH
                <br />
                Straße des 17. Juni 4a <br />
                04425 Taucha
              </p>
              <p style={{ margin: "0" }}>
                {" "}
                <a href="tel:+49 342 98 98 990">Telefon: +49 342 98 98 990</a>
              </p>
              <p>
                <a href="mailto:info@ekd-solar.de?subject = Feedback&body = Message">
                  E-Mail: info@ekd-solar.de
                </a>
              </p>
              <p>Geschäftsführer: Silvio Bräuer, Ricardo Kopp</p>
              <p>
                Bei Fragen zum Datenschutz, nutzen Sie bitte diese
                Kontaktmöglichkeiten.
              </p>
            </div>
            <div className="text-style">
              <h2>3. Datenschutzbeauftragter</h2>
              <p>
                Wir haben einen Datenschutzbeauftragten benannt. Sie erreichen
                diesen bei Fragen zum Datenschutz unter:
              </p>
              <p style={{ margin: "0" }}>
                Florian Melzer, Patronus Services GmbH
              </p>
              <p>
                <a href="mailto:datenschutz@ekd-solar.de?subject = Feedback&body = Message">
                  E-Mail: datenschutz@ekd-solar.de
                </a>
              </p>
            </div>
            <div className="text-style">
              <h2>4. Kurzfassung</h2>
              <ul>
                <li>
                  {" "}
                  Wir nutzen Ihre Daten vor allem, um Sie zu unseren
                  Solaranlagenprodukte zu beraten und mit Ihnen Ihre Projekte zu
                  realisieren.
                </li>
                <li>
                  Ihre 1:1 Betreuung setzen wir unter Zuhilfenahme von
                  Vertriebspartnern um.
                </li>
                <li>
                  Wir unterstützen Sie und unsere Finanzierungspartner bei der
                  Kontaktaufnahme.
                </li>
                <li>
                  Über neue Produkte und Services von uns möchten wir Sie gerne
                  auf dem Laufenden halten.
                </li>
                <li> Wir müssen auch gesetzliche Anforderungen erfüllen.</li>
                <li>
                  Wir arbeiten mit einigen Dienstleistern wie etwa Planern
                  zusammen, die zweckgebunden Ihr Daten zur Projektumsetzung
                  erhalten können.
                </li>
                <li>
                  {" "}
                  Es ist möglich, dass wir Ihre Daten von einem unserer
                  Agenturpartner erhalten haben.
                </li>
              </ul>
            </div>
            <div className="text-style">
              <h2>5. Beratung, Verkauf, Montage</h2>
              <p>
                Um den (Ver)Kauf(s)prozess, die Beratung und die Montage mit und
                für Sie durchzuführen, verarbeiten wir folgende Daten:
              </p>
              <h2>Zu Ihnen</h2>
              <ul>
                <li> Bauliche Angaben zur Immobilie</li>
                <li>
                  Fotodokumentation Objekt inkl. Umgebung (Dach, Zählerkasten,
                  Baufläche etc.)
                </li>
                <li>
                  Lastenbezogene Angaben (Stromverbrauch, Strompreis, gewünschte
                  Speichergröße etc.)
                </li>
              </ul>
              <p>
                Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b
                DS-GVO, der die Verarbeitung von Daten zur Erfüllung eines
                Vertrags oder vorvertraglicher Maßnahmen gestattet.
              </p>
            </div>
            <div className="text-style">
              <h2>6. Handelsvertreter</h2>
              <h2>a. Kaufberatung und Verkauf</h2>
              <p>
                Die Durchführung der Beratungsgespräche und die Angebotslegung
                bis hin zum Verkauf und der Montage Ihrer Solaranlage erfolgt
                durch unsere Vertriebspartner (Handelsvertreter) bzw. wird durch
                diese begleitet. Dazu ist es erforderlich Ihre Daten nach Ziff.
                5 an diese weiterzuleiten. Rechtsgrundlage für diese
                Übermittlung ist Art. 6 Abs. 1 f DS-GVO. Wir haben ein
                berechtigtes Interesse an der Einbindung unserer
                Vertriebspartner, da diese handelsübliche Praxis es uns
                ermöglicht, unsere Ressourcen auf unsere Kernkompetenzen zu
                konzentrieren, nämlich der Erbringung und Verbesserung unserer
                Produkte und Dienstleistungen für Sie.
              </p>
              <p>
                In der Regel bewahren wir Ihre Daten aus handels- und
                steuerrechtlichen Gründen bis zu 10 Jahren auf und für etwaige
                Gewährleistungsansprüche bis zu 2 bzw. 5 Jahren (§ 438 BGB).
                Näheres erfahren Sie weiter unten.
              </p>
              <h2>b. Gemeinsame Verantwortlichkeit</h2>
              <p>
                Wie oben beschrieben verarbeiten wir in dieser Zusammenarbeit
                gemeinsam mit den Vertriebspartnern Ihre Daten. Daher haben wir
                mit diesen eine Vereinbarung nach Art. 26 DS-GVO getroffen und
                darin u.a. geregelt, dass für die Wahrnehmung Ihrer Rechte, wir
                (EKM) Ihr Ansprechpartner sind, sowie in allen anderen Fragen im
                Zusammenhang mit der Verarbeitung Ihrer Daten. Davon unabhängig
                können Sie sich auch an den Vertriebspartner wenden. Im
                Einzelnen trägt der Vertriebspartner die Verantwortung für die
                vor Ort Erhebung und Speicherung Ihrer Daten nach Ziff. 5 und
                die Übermittlung Ihrer Daten an uns. EKM trägt die Verantwortung
                für Ihre Daten im weiteren Verlauf also etwa zur Bauplanung,
                Angebotslegung usw.
              </p>
              <h2>7. Bonitätsauskunft und Finanzierung</h2>
              <h2>a. Bonitätsauskunft</h2>
              <p>
                Zur Absicherung unseres Zahlungsausfallrisikos übertragen wir
                unsere Zahlungsforderungen aus dem Vertragsverhältnis mit Ihnen
                an die S-Factoring GmbH, Markt 7, 04109 Leipzig. In diesem Zuge
                erfolgt vor Vertragsschluss eine Limitabfrage bei der
                S-Factoring GmbH, um feststellen zu können, ob die Forderung
                gegen Sie mitübertragen werden kann. In beiden Fällen haben wir
                ein berechtigtes Interesse daran, unser Zahlungsausfallrisiko
                bei der gewählten Zahlart durch Einbindung der S-Factoring GmbH
                zu minimieren. Rechtsgrundlage ist daher Art. 6 Abs. 1 f DS-GVO.
                Dabei werden folgende Daten an die S-Factoring GmbH übermittelt:
                Name, Geburtsdatum und Anschrift sowie Finanzierungsbedarf. Bei
                negativer Limitabfrage erfolgt entweder eine Teilübertragung der
                Forderung oder unterbleibt eine solche vollständig. Für die
                Datenverarbeitung durch die S-Factoring GmbH ist auch diese
                eigenständig verantwortlich. Eine automatisierte
                Entscheidungsfindung durch uns im Sinne des Art. 22 Abs. 1
                DS-GVO findet nicht statt.
              </p>
              <h2>b. Finanzierungsanfrage</h2>
              <p>
                Gerne nehmen wir Ihre Daten für eine Finanzierungsanfrage
                gegenüber der Ostsächsische Sparkasse Dresden, Anstalt des
                Öffentlichen Rechts, Güntzplatz 5, 01307 Dresden auf und leiten
                diese an die Ostsächsische Sparkasse Dresden weiter. Um welche
                Daten es sich handelt, entnehmen Sie bitte dem Erfassungsbogen.
                Wir tun dies ausschließlich, wenn Sie dies wünschen.
                Rechtsgrundlage für diese Verarbeitung ist Ihre Einwilligung
                nach Art. 6 Abs. 1 a DS-GVO. Wir leiten die Angaben entsprechend
                des Erfassungsbogen weiter. Für die Datenverarbeitung im Rahmen
                der Finanzierungsanfrage ist die Ostsächsische Sparkasse Dresden
                eigenständig verantwortlich. Auf diese haben wir keinen
                Einfluss.
              </p>
              <h2>8. Kommunikation</h2>
              <h2>a. Kontakt</h2>
              <p>
                Bei Fragen und Anmerkungen können Sie uns gerne anschreiben oder
                anrufen. Dabei werden Ihre Angaben wie etwa E-Mail-Adresse,
                Telefonnummer und der Inhalt Ihres Anliegens zwecks Bearbeitung
                der Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Unter Beachtung der Weitergabe nach Ziff. 6, geben
                wir diese Daten nicht ohne Ihre Einwilligung weiter, es sei denn
                wir sind dazu gesetzlich verpflichtet.
              </p>
              <p>
                Die Verarbeitung der mitgeteilten Daten erfolgt auf Grundlage
                von Art. 6 Abs. 1 lit. b und lit. f DS-GVO. Unser berechtigtes
                Interesse folgt aus der Beantwortung Ihrer Anfrage.
              </p>
              <h2>b. Werbung (§ 7UWG)</h2>
              <p>
                Wir möchten Sie gerne in Zukunft darüber informieren
                (vorausgesetzt, Sie haben etwa bei uns gekauft), was es bei uns
                Neues gibt und im Zusammenhang mit Ihrem letzten Kauf bei uns
                steht – also Werbung. Dafür nutzen wir Ihre Kontaktdaten wie
                E-Mail-Adresse und Namen. Rechtsgrundlage für diese Verarbeitung
                ist Art. 6 Abs. 1 lit. f DS-GVO. Wir haben ein berechtigtes
                Interesse an einer werblichen Nutzung Ihrer Daten, wenn Sie
                einmal bei uns eingekauft haben.
              </p>
              <h2>Widerruf</h2>
              <h2>
                Sie können gegen die Verarbeitung Ihrer personenbezogenen Daten
                zu Zwecken der Direktwerbung jederzeit kostenfrei Widerspruch
                einlegen. Näheres entnehmen Sie bitte den Informationen zu Ihren
                Rechten weiter unten.
              </h2>
              <h2 style={{ margin: "0" }}>9. Empfänger</h2>
              <h2>a. Allgemein</h2>
              <p>
                Im Wesentlichen teilen wir Ihre Daten mit den oben beschriebenen
                Partnern. Das erfolgt wie oben beschrieben vor allem dazu, Ihr
                Projekt umzusetzen. Soweit nicht in den einzelnen Abschnitten
                gesondert erläutert, werden wir Ihre Daten intern an die
                zuständigen Mitarbeiter weitergeleitet sowie ggf. an andere
                Empfänger wie Behörden, Steuerberater, Rechtsanwälte, Webhoster
                und andere typischerweise in die Verarbeitung bei üblichen
                Geschäftsabläufen eingebundene Dritte. Eine Weitergabe dieser
                Daten an Dritte kann auch erfolgen, wenn es zur Verfolgung
                unserer Ansprüche erforderlich ist oder eine gesetzliche
                Verpflichtung hierzu besteht.
              </p>
              <p>
                Wichtige Partner in Ihrem Projekt sind auch unser Planungsbüro
                und der Hersteller der Solaranlagen- und Stromspeicher. Diese
                erhalten die für deren Aufgabenerfüllung notwendigen Daten. Zur
                Realisierung Ihres Projektes arbeiten wir auch mit anderen an
                einem Bau beteiligten Gewerken zusammen und leiten Ihre
                Kontaktdaten, Adresse und bauspezifische Angaben an diese
                weiter, die diese benötigen, um zur Erreichung des Projektzieles
                mitwirken zu können.
              </p>
              <p>
                Eine Weitergabe an Dritte zur eigenständigen Verwendung folgt
                immer dem Erfordernis der Rechtmäßigkeit. Die Einbindung aller
                Dienstleister erfolgt im Einklang mit den Anforderungen der
                DSGVO.
              </p>
            </div>
            <div className="text-style">
              <h2>10. Dritterhebung</h2>
              <p>
                In vielen Fällen haben wir Ihre Anfrage von einem unserer
                Partner erhalten, sog. „Leadagenturen“, bei denen Sie nach
                Beratung hinsichtlich unserer Produkte und Leistungen angefragt
                haben und ausdrücklich um eine Kontaktaufnahme durch uns gebeten
                haben. Unsere aktuellen Partner sind die folgenden:
              </p>
              <ul>
                <li>WattFox GmbH</li>
                <li>Interlead GmbH</li>
                <li>DAA Deutsche Auftragsagentur GmbH</li>
                <li>SENEC GmbH</li>
                <li> be Around GmbH</li>
              </ul>
            </div>
            <div className="text-style">
              <h2>11. Löschen</h2>
              <p>
                Ihre personenbezogenen Daten werden nur so lange gespeichert,
                wie es für die Zwecke, für die sie erhoben wurden, erforderlich
                ist, einschließlich der Erfüllung gesetzlicher Rechnungslegungs-
                oder Meldevorschriften.
              </p>
              <p>
                Wir sind gesetzlich verpflichtet, grundlegende Informationen zu
                unseren Kunden (einschließlich Kontakt-, Identitäts- und
                Transaktionsdaten, Geschäftsbriefe) aus steuerlichen sowie
                handelsrechtlichen Gründen für die Dauer von sechs Jahren nach
                Beendigung der Geschäftsbeziehung bzw. zehn Jahren nach Ende des
                laufenden Steuerjahrs, in dem die Rechnung erstellt wurde
                aufzubewahren (§ 257 HGB, § 147 AO u.a.).
              </p>
              <p>
                Im Einzelfall gelten gesonderte Löschfristen, was wir dann in
                den jeweiligen Abschnitten herausgestellt haben.
              </p>
              <p>
                Unter bestimmten Umständen können Sie die Löschung Ihrer
                personenbezogenen Daten verlangen: nähere Informationen dazu
                finden Sie unter Löschung beantragen.
              </p>
            </div>
            <div className="text-style">
              <h2>12. Ihre Rechte</h2>
              <p>
                In bestimmten Fällen haben Sie in Bezug auf Ihre
                personenbezogenen Daten folgende Rechte:
              </p>
              <p>
                <span> Recht auf Auskunft</span> (Art. 15 DS-GVO) über Ihre
                personenbezogenen Daten, welche wir verarbeiten. Aufgrund dieses
                Rechts können Sie eine Kopie Ihrer bei uns gespeicherten
                personenbezogenen Daten erhalten und überprüfen, ob wir diese
                Daten rechtmäßig verarbeiten.
              </p>
              <p>
                <span> Recht auf Berichtigung</span> (Art. 16 DS-GVO) Ihrer bei
                uns gespeicherten personenbezogenen Daten. Aufgrund dieses
                Rechts können Sie bei uns gespeicherte unvollständige oder
                unrichtige Daten berichtigen lassen, auch wenn wir die
                Richtigkeit, der von Ihnen zur Verfügung gestellten neuen Daten
                möglicherweise überprüfen müssen.
              </p>
              <p>
                <span> Recht auf Löschung</span> (Art. 17 DS-GVO) Ihrer
                personenbezogenen Daten. Aufgrund dieses Rechts können Sie von
                uns die Löschung oder Entfernung von personenbezogenen Daten
                verlangen, wenn kein triftiger Grund für deren weitere
                Verarbeitung vorliegt. Sie können von uns auch die Löschung oder
                Entfernung Ihrer personenbezogenen Daten verlangen, wenn Sie Ihr
                Recht auf Widerspruch gegen die Verarbeitung erfolgreich
                ausgeübt haben (siehe unten), wenn wir Ihre Daten unrechtmäßig
                verarbeitet haben oder wenn wir zur Einhaltung lokaler
                Rechtsvorschriften zur Löschung verpflichtet sind.
                Möglicherweise kann Ihrem Löschungsantrag aus rechtlichen
                Gründen nicht immer nachgekommen werden, was Ihnen jedoch
                gegebenenfalls zum Zeitpunkt der Beantragung mitgeteilt wird.
              </p>
              <p>
                <span> Recht auf Einschränkung der Verarbeitung</span> (Art. 18
                DS-GVO) Ihrer personenbezogenen Daten. Aufgrund dieses Rechts
                können Sie uns in folgenden Fällen zur Aussetzung der
                Verarbeitung Ihrer personenbezogenen Daten auffordern: (a) wenn
                Sie möchten, dass wir die Richtigkeit dieser Daten feststellen;
                (b) wenn die Verwendung der Daten durch uns zwar unrechtmäßig
                ist, Sie aber gegen die Löschung sind; (c) wenn Sie möchten,
                dass wir die Daten länger als für uns notwendig speichern, da
                Sie diese zur Begründung, Ausübung oder Verteidigung von
                Rechtsansprüchen benötigen; oder (d) wenn Sie der Verwendung
                Ihrer Daten durch uns widersprochen haben, wir aber prüfen
                müssen, ob vorrangige berechtigte Gründe für ihre Verwendung
                vorliegen.
              </p>
              <p>
                <span> Recht auf Übertragbarkeit</span> (Art. 20 DS-GVO) Ihrer
                personenbezogenen Daten an Sie oder einen Dritten. Wenn Sie dies
                wünschen, stellen wir Ihnen oder einem von Ihnen benannten
                Dritten eine Kopie Ihrer personenbezogenen Daten in einem
                strukturierten, gängigen, maschinenlesbaren Format zur
                Verfügung. Dieses Recht gilt jedoch nur für automatisierte
                Daten, in deren Verwendung Sie ursprünglich eingewilligt haben
                bzw. die zur Erfüllung eines Vertrags mit Ihnen verwendet
                wurden.
              </p>
              <p>
                <span>Recht auf Widerspruch gegen die Verarbeitung</span> (Art.
                21 DS-GVO) Ihrer personenbezogenen Daten. Dieses Recht besteht,
                wenn wir uns auf ein berechtigtes Interesse (oder das eines
                Dritten) berufen und Ihre besondere Situation Sie dazu
                veranlasst, der Verarbeitung aus diesem Grund zu widersprechen,
                da Sie Ihre Grundrechte und Grundfreiheiten beeinträchtigt
                siehst. Ein Widerspruchsrecht haben Sie auch, wenn Ihre
                personenbezogenen Daten verarbeitet werden, um Direktwerbung zu
                betreiben. In manchen Fällen weisen wir möglicherweise zwingende
                schutzwürdige Gründe für die Verarbeitung nach, die Ihre Rechte
                und Freiheiten überwiegen.
              </p>
              <p>
                <span>
                  Recht, nicht einer automatisierten Entscheidungsfindung
                </span>{" "}
                (Art. 22 DS-GVO) (einschließlich Profiling) unterworfen zu
                werden, wenn Sie dies erheblich beeinträchtigen würde. Da wir
                uns an solchen Tätigkeiten nicht beteiligen, ist dieses Recht in
                der Praxis für Ihre Nutzung der Website nicht relevant.
              </p>
              <p>
                <span>Recht, die Einwilligung jederzeit zu widerrufen</span>{" "}
                (Art. 7 Abs. 3 DS-GVO), wenn wir für die Verarbeitung Ihrer
                personenbezogenen Daten Ihre Einwilligung benötigen. Dies hat
                jedoch keine Auswirkung auf die Rechtmäßigkeit der Verarbeitung
                vor dem Widerruf der Einwilligung. Wenn Sie Ihre Einwilligung
                widerrufen, können wir Ihnen bestimmte Produkte, Inhalte oder
                Dienstleistungen möglicherweise nicht mehr zur Verfügung
                stellen. Darüber werden wir Sie zum Zeitpunkt des Widerrufs
                jedoch in Kenntnis setzen.
              </p>
              <p>
                <span>
                  Recht, sich bei einer Aufsichtsbehörde zu beschweren.
                </span>{" "}
                Die für uns zuständige Aufsichtsbehörde ist der
              </p>
              <p>
                Sächsischer Datenschutzbeauftragter <br />
                Herr Andreas Schurig
                <br />
                Devrientstraße 5 <br />
                01067 Dresden
              </p>
            </div>
            <div className="text-style">
              <h2>13. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Diese Datenschutzerklärung kann jederzeit aktualisiert oder
                anderweitig geändert werden. Über sämtliche Änderungen unserer
                Datenschutzerklärung werden Sie durch Veröffentlichung der
                geänderten Fassung auf der Website in Kenntnis gesetzt.
              </p>
              <p>
                Diese Version wurde zuletzt am unten angegebenen Datum geändert.
                Ältere Versionen können bei uns angefordert werden.
              </p>
              <p>Zuletzt geändert am: 27.10.2020</p>
            </div>
          </div>
        </div>
      </div>
      <SteperFooter />
    </div>
  );
}
