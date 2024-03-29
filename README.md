# Äpy.fi

Wappulehti Äpyn verkkosivut.

## Kehittäminen

Alla ohjeet lokaaliajoon.

### Asennus

Paikallinen kehittäminen onnistuu seuraavilla komennoilla:

```
npm install
npm run dev
```

### Koodityyli

Tiedostot .eslintrc ja .prettierrc sisältävät koodin tyylimäärittelyjä. Käytössä on [ESLint](https://eslint.org/) ja [Prettier](https://prettier.io/)

## Konfigurointi

Nettisivujen ilmettä on mahdollista muuttaa .env tiedoston muuttujien avulla. `THEME` muuttuja kontrolloi etusin logokomponenttia (<Logo /> vs <Logo2019 />) sekä modalin ja navbarin logoa.

Sivujen ulkonäkö eri `.env` tiedoston konfiguraatioilla:
```
# Used throughout different components to use a yearly logo/textures
THEME='ajaton'
# Supported values: 'logo', 'video', 'diilikone' or 'wappu'
INDEX_ELEMENT='video
```

![.env tiedosto esimerkkikuva](docs/env-example-ajaton-1.png)

```
# Used throughout different components to use a yearly logo/textures
THEME='2019'
# Supported values: 'logo', 'video', 'diilikone' or 'wappu'
INDEX_ELEMENT='video
```

![.env tiedosto esimerkkikuva](docs/env-example-2019-1.png)
![.env tiedosto esimerkkikuva](docs/env-example-2019-2.png)

## Käyttöönotto

Next.js production build ja servaus

```
npm run build && npm run start
```

## Rakennuspalikat

* [React](https://reactjs.org/)
* [Next.js](https://nextjs.org/)

## Kehittäjät

* Timo Riski

## Lisenssi

MIT lisenssi - [LICENSE](LICENSE).
