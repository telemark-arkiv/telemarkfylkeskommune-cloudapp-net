#telemarkfylkeskommune-cloudapp-net

Utviklerverktøy for tilpasning av utseendet på 360 offentlig journal.

Krever [Node.js](http://nodejs.org/) og [npm](https://www.npmjs.org/) (kommer med i de fleste installasjoner av Node.js)


##Installasjon

Fra GitHub vha git

```
$ git clone git@github.com:telemark/telemarkfylkeskommune-cloudapp-net.git
```

Alternativt last ned [zip-filen](https://github.com/telemark/telemarkfylkeskommune-cloudapp-net/archive/master.zip) og pakk den ut.

Gå inn i katalogen telemarkfylkeskommune-cloudapp-net og installer eksterne avhengigheter vha npm

```
$ npm install
```

##Starte utviklingsserveren

Sett inn dine egne verdier i config.js
**host**: http://<din-adresse.cloudapp.net>
**port**: portnummer for utviklingsserveren på localhost

```
$ npm start
```

Når serveren har startet kan du åpne en nettleser på adressen http://localhost:<valgt portnummer>.

Serveren henter innholdet fra 360 offentlig journal, men bytter ut .css-filen med css/public-journal.css slik at du kan arbeide med utseendet lokalt og se resultatet med reelle data.

For å stoppe serveren bruker du ```^C```.

##Minimere css

Når du er fornøyd med resultatet kan du minimere .css-filen.

```
$ npm run-script minify
```

Dette genererer en minimert utgave av css-filen i katalogen css.
Den minimerte filen får navnet public-journal-min.css og denne laster du opp i 360 offentlig journal.