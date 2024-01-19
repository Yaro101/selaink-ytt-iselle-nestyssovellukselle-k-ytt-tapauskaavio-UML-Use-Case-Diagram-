# Selainpohjainen äänestyssovellus

## Use case - mallinnus selaimella toimivalle äänestyssovellukselle

- **(FIN) Käyttötapauksen nimi - (ENG) Name of the use case:**

  - (FIN) Tämä on käyttötapaukselle annettu tiivis ja kuvaava nimi, joka edustaa tiettyä toiminnallisuutta tai ominaisuutta, jonka järjestelmä (selainpohjainen sovellus) tarjoaa:

  - (ENG) This is a concise and descriptive name given to the use case, representing a specific functionality or feature that the system (web browser-based application) provides:

    1. Selaa ääniä
    2. Valitse äänestys
    3. Näytä äänestystilanne
    4. äänestä
    5. Tee uusia äänestyksiä
    6. Poista äänestys

- **(FIN) Käyttäjät - (ENG) Users:**

  - (FIN) Käyttäjät, joita kutsutaan myös toimijoiksi, ovat ulkoisia yksiköitä (ihmisiä, järjestelmiä tai muita yksiköitä), jotka ovat vuorovaikutuksessa järjestelmän kanssa:

  - (ENG) Users, also known as actors, are external entities (people, systems, or other entities) that interact with the system:

    1. Käyttäjä
    2. Ylläpitäjä

- **(FIN) Laukaisee - (ENG) Triggers:**

  - (FIN) Laukaisin on tapahtuma tai ehto, joka käynnistää tietyn käyttötapauksen suorittamisen. Se voi olla käyttäjän toiminta, aikapohjainen tapahtuma tai ulkoinen ärsyke, joka käynnistää käyttötapauksen:

  - (ENG) The trigger is an event or condition that initiate the execution of a particular use case. It could be a user action, a time-based event or an external stimulus that starts the use case:

    1. Painikkeen napsautus

- **(FIN) Edellytys - (ENG) Precondition:**

  - (FIN) Ehto määrittää tilan tai ehdon, jonka on oltava tosi tai olemassa, ennen kuin käyttötapaus voidaan suorittaa. Se edustaa oletuksia järjestelmän alkutilasta.

  - (ENG) The precondition specefies the state or condition that must be true or exist before the use case can be executed. It represents the assumptions about the system's initial state.

    1. Ylläpitäjän luomien äänestysvaihtoehtojen on oltava olemassa, jotta käyttötapaus 'äänestä' voidaan suorittaa.
    2. Äänestysvaihtoehtoja on oltava käyttötapauksessa "Näytä äänestystilanne", jotta vaihtoehtojen ja äänestysten luetteloa voidaan esikatsella.
    3. 'Ylläpitäjä' on jo luonut äänestysvaihtoehdon (-vaihtoehdot), jotta 'Poista äänestys' -käyttötilanne toimisi vaaditulla tavalla.

- **(FIN) Jälkitilanne - (ENG) Postcondition:**

  - (FIN) Jälkitilanne kuvaa odotetun tilan tai olosuhteet käyttötapauksen onnistuneen suorittamisen jälkeen. Siinä määritellään muutokset tai tulokset, joiden pitäisi tapahtua järjestelmässä käyttötapauksen seurauksena.

  - (ENG) The Postcondition describes the expected state or conditions after the successful execution of the use case. It defines the changes or results that should occur in the system as a concequence of the use case.

    1. Ehdon 'Selaa äänestyksiä' jälkitila: äänestysvaihtoehtojen valikkovalikko, äänestä-painike ja Näytä äänestystilanne -painike.
    2. Ehdon 'Valitse äänestys' jälkitila: äänestysvaihtoehtojen valikkovalikko, äänestä-painike ja Näytä äänestystilanne -painike.
    3. Ehdon 'Näytä äänestystilanne' jälkitila: taulukkoluettelo, josta käyvät ilmi äänestysvaihtoehdot ja äänet.
    4. Ehdon 'äänestä' jälkitila: Valitun äänestysvaihtoehdon äänimäärän lisääminen 1:llä.
    5. Ehdon 'Tee uusia äänestyksiä' jälkitila: Lisää uusi äänestys-vaihtoehto.
    6. Ehdon 'Poista äänestys' jälkitila: Poista äänestys-vaihtoehto.

- **(FIN) Käyttötapauksen kulku - (ENG) Use case flow:**

  - (FIN) Käyttötapauksen kulku, joka tunnetaan myös nimellä päämenestysskenaario, hahmottelee toimijan (toimijoiden) ja järjestelmän välisten vaiheiden tai vuorovaikutusten järjestyksen halutun lopputuloksen saavuttamiseksi. Se edustaa normaalia, odotettua suoritusreittiä:
  - [x] Ylläpitäjä lisää äänestysvaihtoehtoja, käyttäjä selaa ja/tai valitsee äänestysvaihtoehtoja ja äänestää äänestysvaihtoehtoa. äänestetyn äänestysvaihtoehdon äänimäärä kasvaa 1:llä joka kerta, kun se saa äänen.

  - (ENG) The use case flow, also known as the main success scenario, outlines the sequence of steps or interactions between the actor(s) and the system to achieve the desired outcome. It represents the normal, expected path of execution:
  - [x] The Admin add voting options, the user browse or/and choose from voting options and vote for voting option. the number of votes for voted for voting option increment by 1 everytime it gets a vote.

- **(FIN) Poikkeuksellinen toiminta - (ENG) Exceptional action:**

  - (FIN) Poikkeukselliset toimet tai vaihtoehtoiset virrat kuvaavat vaihtoehtoisia polkuja tai skenaarioita, joita esiintyy käyttötapauksen suorittamisen aikana. Nämä polut edustavat poikkeamia pääasiallisesta onnistumisskenaariosta ja käsittelevät poikkeuksellisia olosuhteita tai virhetilanteita:

  - (ENG) Exceptional actions or alternative flows describe alternative paths or scenarios that occur during the execution of a use case. These paths represent deviations from the main success scenario and handle exceptional conditions or error situations:
