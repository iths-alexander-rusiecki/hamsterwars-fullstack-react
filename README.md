This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# API Project: HAMSTERWARS

**Ditt projekt är att bygga en backend till kommande webplatsen HAMSTERWARS.**
Webplatsen är en spinoff på [Kittenwar](http://www.kittenwar.com), en hemsida där matcher mellan två bilder slumpas fram och publiken röstar på den de finner gulligast. Poäng ska räknas, listor ska sammanställas.

Själva gränssnittet kommer ni göra som slutprojekt efter en skiss ( där egna designideer får utrymme ).

## Relevanta mål

**Kunskaper**

-   Backend-programmering med Node.js
-   Pakethantering med NPM

**Färdigheter**

-   Hantera paket med NPM vid utveckling av webbappplikationer
-   Utveckla server-funktionalitet med JavaScript

**Kompetenser**

-   Skapa en enklare server-lösning i JavaScript
-   Kunna välja och motivera val av ramverk och teknologier utifrån webbapplikationens omfattning och funktionalitet

## Bedömning

**Godkänt**

-   Utvecklar Backendprogrammering med Node.js
-   Redogör för pakethantering med NPM
-   Skapar användarvänliga webbapplikationer
-   Utvecklar enklare serverfunktionalitet med JavaScript
-   Väljer och motiverar val av ramverk och teknologier utifrån webbapplikationens omfattning och
    funktionalitet

**Väl Godkänt**

-   Utveckla _med säkerhet_ Backendprogrammering med Node.js
-   Skapa _med säkerhet_ användarvänliga webbapplikationer
-   Skapa _självständigt_ en serverlösning i JavaScript

## Tekniker

-   Node.js
-   Express.js
-   Firebase Firestore ( npm firebase-admin )

## Inlämning

-   Ditt projekt ska inkomma senast **tors 14/5 kl 16**.
-   Du lämnar in en github-repo-länk i en _textfil_ via ITHSdistans.se ( ironic framework ).

## API spec

| Resurs | Metod | Förväntat svar                |
| ------ | ----- | ----------------------------- |
| **/**  | GET   | Servar React-frontend senare. |

```javascript
http://localhost:3000/
```

| Resurs       | Metod | Förväntat svar                         |
| ------------ | ----- | -------------------------------------- |
| **/assets/** | GET   | Servar bilderna via en _static route_. |

```javascript
http://localhost:3000/assets/hamster-1.jpg
```

| Resurs                   | Metod | Förväntat svar                                                                 |
| ------------------------ | ----- | ------------------------------------------------------------------------------ |
| **/hamsters**            | GET   | Returnerar en array med samtliga `hamsterobject`.                              |
| **/hamsters/:id**        | GET   | Returnerar ett `hamsterobject` med efterfrågat id.                             |
| **/hamsters/:id/result** | PUT   | Updaterar ett `hamsterobject` egenskaper: _wins_, *defeats* och +1 på _games_. |
| **/hamsters/random**     | GET   | Returnerar ett slumpat `hamsterobject` från databasen.                         |

```javascript
// /hamsters
[{ hamsterobject }];

// /hamsters/1
{
    hamsterobject;
}

// /hamsters/random
{
    hamsterobject;
}
```

| Resurs             | Metod | Förväntat svar                                                 |
| ------------------ | ----- | -------------------------------------------------------------- |
| **/charts/top**    | GET   | Returnerar en array med top 5 mest vinnande `hamsterobject`.   |
| **/charts/bottom** | GET   | Returnerar en array med top 5 mest förlorande `hamsterobject`. |

```javascript
[{ hamsterobject }];
```

| Resurs     | Metod | Förväntat svar                                                                                            |
| ---------- | ----- | --------------------------------------------------------------------------------------------------------- |
| **/games** | GET   | Returnerar en array med samtliga `matchobject` som hållits.                                               |
| **/games** | POST  | Sparar en match med formatet `{ timeStamp: Date, contestants: [{ hamsterobject }, { hamsterobject } ] }`. |

```javascript
[{ gameobject }];
```

| Resurs           | Metod | Förväntat svar                                                                                                                        |
| ---------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **/stats/total** | GET   | Returnerar ett `statsobject` med totalt antal matcher som hållits.                                                                    |
| **/stats/{opt}** | GET   | Känner er fria att sammanställa annan spännande statistik, ex. hur många % gillar majs? Vad är medelåldern på samtliga hamstrar, etc. |

```javascript
{
    statsobject;
}
```

## Datamodeller

### hamster object

```javascript

{
    id: Number,
    name: String,
    imgName: String,
    favFood: String,
    loves: String,
    imgName: String,
    wins: Number,
    defeats: Number,
    games: Number
}

```

### game object

```javascript
{
    id: Number,
    timeStamp: Date,
    contestants: [
        { hamsterobject },
        { hamsterobject }
    ],
    winner: { hamsterobject }
}

```

### stats object

```javascript
{
    totalGames: Number
    ... // custom stats
}

```

### Tänk på

-   Designa erat API _innan_ ni kodar det. Använd papper och penna, alt mindmapverktyg eller dyl.
-   Samtliga hamsterobjekt ska sparas i _Firebase firestore_. Varje hamster ska vara ett eget dokument.
-   Samtliga resurser ska routas vidare till _egna moduler_.
-   40st bilder på hamstrar hittar du [här](https://www.dropbox.com/s/0v7ws0n9t5cfyww/hamsters.zip?dl=1). Samtliga bilder är CC licens och får användas.

## Level ups

### Säkra upp ditt API

Säkra upp ditt API med nyckel och Auth-middleware.

### Chuck Norris level

#### Upload

Skapa funktionalitet där du själv kan ladda upp nya hamstrar.

#### Storage

Hosta bilderna i _Firebase/storage_ istället för lokalt på din server.
