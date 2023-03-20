## Regler :)
Vi är i skolan måndag, onsdag, fredag om inget annat sägs.
Vi diskuterar approach till koden man ska skriva och ber om feedback på det vi håller på med.

### Git:
- jobba i en egen branch döpt till ditt namn
- gör en commit efter varje uppgift / task i backloggen
- kör prettier i filerna du jobbat i innan du commitar
  - `npx prettier --write "file-name"`
- när du vill mergea ditt jobb med main skicka en pull request, skriv kort vad du har gjort

### Code style:
- inga semicolon
- enkla citattecken
- alla variabler och funktioner i camelCase
  - obs kom ihåg att någon annan ska kunna komma läsa och förstå din kod. döp variabler och funktioner till vettiga namn och tveka inte på att kommentera om det behövs

### Filnamn:
- funktionsfiler med camelCase
- komponenter med PascalCase

### Css:
- alfabetisk ordning
  - https://medium.com/@adammlr/sort-css-properties-in-vscode-e59033c2c675
- global css för resets, variabler, typografi, css komponenter mm
- individuella sidor stylas med module.css
- vi jobbar så mycket som möjligt med Rem eftersom designen utgår ifrån det

Lämna länkar till ex api som används i koden