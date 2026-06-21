/* Suomikortit — kortit / cards
   Schema per card:
   { id, fi, en, level: "A2"|"B1"|"B2", register: "kirja"|"puhe",
     category: "conjunction"|"daily"|"idiom"|"proverb"|"quote",
     grammar: "one-line focus (English)",
     parts: [ { k: "Finnish key word / structure", v: "English explanation" } ] }
   In v-text and grammar you may use `backticks` for Finnish snippets and **bold** for emphasis.
   See SKILL.md for how new cards are generated. */

window.CARDS = [
  /* ---------- BAĞLAÇLAR / CONJUNCTIONS ---------- */
  { id:1, category:"conjunction", level:"A2", register:"kirja",
    fi:"Toivon, että sinulla on hyvä päivä.",
    en:"I hope (that) you have a good day.",
    grammar:"`että` = the subordinating conjunction **that**, linking a main clause to a sub-clause.",
    parts:[
      {k:"että", v:"Introduces a subordinate clause after verbs of hoping/thinking/saying. A comma always comes before it."},
      {k:"sinulla on", v:"`you have` — Finnish has no verb *to have*; it uses the adessive (`sinu-lla`, ‘on you’) + `olla`."},
      {k:"Toivon", v:"`I hope`, from `toivoa`. The `-n` ending is 1st person singular."}
    ]},
  { id:2, category:"conjunction", level:"A2", register:"kirja",
    fi:"En tullut töihin, koska olin kipeä.",
    en:"I didn't come to work because I was sick.",
    grammar:"`koska` = **because**, giving a reason.",
    parts:[
      {k:"koska", v:"`because` — introduces the reason. Normal subject–verb order follows it."},
      {k:"en tullut", v:"Negative past tense: `en` (neg. ‘I’) + `tullut` (past participle of `tulla`)."},
      {k:"töihin", v:"`to work` — illative plural of `työ` (direction ‘into work’)."}
    ]},
  { id:3, category:"conjunction", level:"B1", register:"kirja",
    fi:"Vaikka sataa, menen lenkille.",
    en:"Even though it's raining, I'll go for a run.",
    grammar:"`vaikka` = **even though / although** — concession.",
    parts:[
      {k:"vaikka", v:"`even though` — concedes a contrast: the rain doesn't stop the plan."},
      {k:"sataa", v:"`it rains / is raining` — a weather verb used in the 3rd person with no subject."},
      {k:"lenkille", v:"`for a run` — allative (`-lle`) of `lenkki`, ‘onto a jog’."}
    ]},
  { id:4, category:"conjunction", level:"A2", register:"kirja",
    fi:"Jos ehdit, soita minulle illalla.",
    en:"If you have time, call me in the evening.",
    grammar:"`jos` = **if** — an open (real) condition.",
    parts:[
      {k:"jos", v:"`if` — open condition; it may or may not happen."},
      {k:"ehdit", v:"`you have time / make it`, from `ehtiä` (2nd person sg)."},
      {k:"soita", v:"`call!` — imperative of `soittaa`."},
      {k:"illalla", v:"`in the evening` — adessive (`-lla`) of `ilta`, used for points in time."}
    ]},
  { id:5, category:"conjunction", level:"B2", register:"kirja",
    fi:"Opiskelen suomea joka päivä, jotta pärjäisin töissä.",
    en:"I study Finnish every day so that I'd manage at work.",
    grammar:"`jotta` = **so that / in order to** — purpose, usually with the conditional.",
    parts:[
      {k:"jotta", v:"`so that` — states purpose. Typically pairs with the conditional (`-isi-`)."},
      {k:"pärjäisin", v:"`I would manage` — conditional of `pärjätä` (`pärjä-isi-n`)."},
      {k:"suomea", v:"partitive object of `opiskella`; languages take the partitive."},
      {k:"töissä", v:"`at work` — inessive (`-ssa`) of `työ`."}
    ]},
  { id:6, category:"conjunction", level:"A2", register:"kirja",
    fi:"Kun pääsen kotiin, laitan ruokaa.",
    en:"When I get home, I'll make food.",
    grammar:"`kun` = **when**, for a real/specific time (not a question word here).",
    parts:[
      {k:"kun", v:"`when` — for actual events in time. Compare: `kun` = when, `koska` = because."},
      {k:"pääsen kotiin", v:"`I get home` — `päästä` + `kotiin` (‘to home’)."},
      {k:"laitan ruokaa", v:"`laittaa ruokaa` is the set phrase ‘to cook’; `ruokaa` is partitive."}
    ]},
  { id:7, category:"conjunction", level:"B1", register:"kirja",
    fi:"Puhun sekä suomea että englantia.",
    en:"I speak both Finnish and English.",
    grammar:"`sekä … että …` = **both … and …**.",
    parts:[
      {k:"sekä … että", v:"`both … and` — a fixed correlative pair joining two items."},
      {k:"suomea / englantia", v:"partitive objects of `puhua`; ‘speak a language’ uses the partitive."}
    ]},
  { id:8, category:"conjunction", level:"B1", register:"kirja",
    fi:"Voimme mennä joko elokuviin tai ravintolaan.",
    en:"We can go either to the movies or to a restaurant.",
    grammar:"`joko … tai …` = **either … or …**.",
    parts:[
      {k:"joko … tai", v:"`either … or` — correlative pair offering two choices."},
      {k:"elokuviin", v:"`to the movies` — illative plural of `elokuva`."},
      {k:"ravintolaan", v:"`to a restaurant` — illative singular of `ravintola`."}
    ]},
  { id:9, category:"conjunction", level:"B1", register:"puhe",
    fi:"Mä luulen et se tulee huomenna.",
    en:"I think (that) he/she'll come tomorrow.",
    grammar:"Spoken Finnish: `että` shortens to `et`; `minä→mä`; `hän→se`.",
    parts:[
      {k:"et", v:"spoken form of `että` (‘that’). Very common in speech."},
      {k:"mä", v:"spoken `minä` (‘I’)."},
      {k:"se", v:"in speech, `se` (‘it’) is normally used for people too, instead of `hän`."},
      {k:"kirjakieli", v:"written equivalent: `Minä luulen, että hän tulee huomenna.`"}
    ]},

  /* ---------- GÜNLÜK HAYAT / DAILY LIFE ---------- */
  { id:10, category:"daily", level:"A2", register:"kirja",
    fi:"Anteeksi, voitko puhua hitaammin?",
    en:"Sorry, can you speak more slowly?",
    grammar:"A polite request with a comparative adverb.",
    parts:[
      {k:"voitko", v:"`can you?` — `voida` (2nd person) + question clitic `-ko`."},
      {k:"hitaammin", v:"`more slowly` — comparative of the adverb `hitaasti`."},
      {k:"Anteeksi", v:"`sorry / excuse me` — an all-purpose opener."}
    ]},
  { id:11, category:"daily", level:"B1", register:"puhe",
    fi:"Mä en tiiä, mihin aikaan se alkaa.",
    en:"I don't know what time it starts.",
    grammar:"Spoken contractions + an indirect question.",
    parts:[
      {k:"en tiiä", v:"spoken for `en tiedä` (‘I don't know’)."},
      {k:"mihin aikaan", v:"`at what time` — set phrase (illative of `aika`)."},
      {k:"kirjakieli", v:"written: `En tiedä, mihin aikaan se alkaa.`"}
    ]},
  { id:12, category:"daily", level:"A2", register:"kirja",
    fi:"Saisinko yhden kahvin, kiitos?",
    en:"Could I have one coffee, please?",
    grammar:"Conditional for a polite request.",
    parts:[
      {k:"saisinko", v:"`could I get?` — conditional of `saada` + `-ko`. The polite way to order."},
      {k:"yhden kahvin", v:"`one coffee` — total object (accusative): `yksi→yhden`, `kahvi→kahvin`."}
    ]},
  { id:13, category:"daily", level:"B1", register:"kirja",
    fi:"Mitä kuuluu? – Ei erikoista, kiitos kysymästä.",
    en:"How are you? – Nothing special, thanks for asking.",
    grammar:"A fixed social exchange.",
    parts:[
      {k:"Mitä kuuluu", v:"`how are you?` — literally ‘what is heard?’. Fixed greeting."},
      {k:"ei erikoista", v:"`nothing special` — a common neutral reply (partitive of `erikoinen`)."},
      {k:"kiitos kysymästä", v:"`thanks for asking` — `kysymästä` is the 3rd infinitive in the elative."}
    ]},
  { id:14, category:"daily", level:"B1", register:"puhe",
    fi:"Lähetään jo, mulla on kiire.",
    en:"Let's go already, I'm in a hurry.",
    grammar:"Spoken ‘let's’ = the passive form; `mulla = minulla`.",
    parts:[
      {k:"lähetään", v:"spoken ‘let's go’ — the passive (`lähdetään`) is used for ‘let's’ in speech."},
      {k:"mulla on kiire", v:"`I'm in a hurry` — `minulla on kiire` (adessive + `olla`)."},
      {k:"jo", v:"`already / now` — adds urgency."}
    ]},
  { id:15, category:"daily", level:"B1", register:"kirja",
    fi:"Voisitko auttaa minua hetken?",
    en:"Could you help me for a moment?",
    grammar:"Conditional request; partitive object after `auttaa`.",
    parts:[
      {k:"voisitko", v:"`could you?` — conditional of `voida` + `-ko`, polite."},
      {k:"auttaa minua", v:"`auttaa` takes a partitive object: `minua` (‘me’)."},
      {k:"hetken", v:"`for a moment` — accusative used to express duration."}
    ]},
  { id:16, category:"daily", level:"B1", register:"kirja",
    fi:"Oletko jo syönyt vai laitetaanko ruokaa?",
    en:"Have you eaten already, or shall we make food?",
    grammar:"Perfect tense + `vai` (‘or’ in questions) + a passive question.",
    parts:[
      {k:"oletko syönyt", v:"perfect tense: `olla` + past participle `syönyt` (‘have eaten’)."},
      {k:"vai", v:"`or` used inside questions; `tai` is for statements."},
      {k:"laitetaanko", v:"`shall we make?` — passive + `-ko`, the everyday ‘shall we’."}
    ]},
  { id:17, category:"daily", level:"B1", register:"kirja",
    fi:"Harmi, että et päässyt mukaan.",
    en:"Too bad you couldn't come along.",
    grammar:"`Harmi, että …` = **it's a pity that …**.",
    parts:[
      {k:"harmi, että", v:"`a pity that` — a common way to express mild disappointment."},
      {k:"et päässyt", v:"`you didn't make it` — negative past of `päästä`."},
      {k:"mukaan", v:"`along / with us` — a directional adverb."}
    ]},

  /* ---------- DEYİMLER / IDIOMS ---------- */
  { id:18, category:"idiom", level:"B2", register:"kirja",
    fi:"Koko projekti meni metsään.",
    en:"The whole project went wrong.",
    grammar:"Idiom: `mennä metsään` = **to fail / go wrong** (lit. ‘go into the forest’).",
    parts:[
      {k:"mennä metsään", v:"idiom: ‘to go wrong, to fail’. Don't read it literally."},
      {k:"meni", v:"past tense of `mennä` (3rd person sg)."},
      {k:"koko", v:"`the whole` — indeclinable, placed before the noun."}
    ]},
  { id:19, category:"idiom", level:"B2", register:"puhe",
    fi:"Olen ihan pihalla tästä aiheesta.",
    en:"I'm totally clueless about this topic.",
    grammar:"Idiom: `olla pihalla` = **to be lost / clueless** (lit. ‘be in the yard’).",
    parts:[
      {k:"olla pihalla", v:"idiom: ‘to be clueless / not follow’."},
      {k:"ihan", v:"`totally / completely` — a very common spoken intensifier."},
      {k:"tästä aiheesta", v:"`about this topic` — elative (`-sta`) of `aihe`."}
    ]},
  { id:20, category:"idiom", level:"B2", register:"kirja",
    fi:"Nyt on pakko nostaa kissa pöydälle.",
    en:"Now we have to bring the issue out in the open.",
    grammar:"Idiom: `nostaa kissa pöydälle` = **to raise a difficult matter openly**.",
    parts:[
      {k:"nostaa kissa pöydälle", v:"idiom (lit. ‘lift the cat onto the table’): to bring up an awkward topic directly."},
      {k:"on pakko", v:"`have to / must` — `on pakko` + infinitive expresses necessity."},
      {k:"pöydälle", v:"allative (`-lle`) of `pöytä`, ‘onto the table’."}
    ]},
  { id:21, category:"idiom", level:"B2", register:"kirja",
    fi:"Kaikki muumit eivät ole laaksossa.",
    en:"He's not all there. (lit. ‘Not all the Moomins are in the valley.’)",
    grammar:"A playful idiom for someone acting oddly.",
    parts:[
      {k:"idiom", v:"means ‘not all there / a bit off’. A very Finnish, joking expression using the Moomins."},
      {k:"eivät ole", v:"negative present, 3rd person plural (`kaikki muumit` = plural subject)."},
      {k:"laaksossa", v:"`in the valley` — inessive of `laakso` (Moominvalley)."}
    ]},
  { id:22, category:"idiom", level:"B2", register:"kirja",
    fi:"Ulkona sataa kuin saavista kaataen.",
    en:"It's pouring rain outside.",
    grammar:"Idiom: `sataa kuin saavista kaataen` = **to rain very hard**.",
    parts:[
      {k:"sataa kuin saavista kaataen", v:"idiom: ‘raining as if poured from a bucket’ = pouring."},
      {k:"kuin", v:"`like / as` — introduces the comparison."},
      {k:"kaataen", v:"`pouring` — the instructive of the 2nd infinitive (expresses manner)."}
    ]},
  { id:23, category:"idiom", level:"A2", register:"kirja",
    fi:"Tervetuloa, ole kuin kotonasi!",
    en:"Welcome, make yourself at home!",
    grammar:"Idiom: `olla kuin kotonaan` = **to feel at home**.",
    parts:[
      {k:"ole kuin kotonasi", v:"`make yourself at home` — `ole` (imperative) + `kuin` + `kotona` + `-si`."},
      {k:"kotonasi", v:"`at your home` — `kotona` + the possessive suffix `-si` (‘your’)."}
    ]},
  { id:24, category:"idiom", level:"B1", register:"puhe",
    fi:"Tänään mä vaan vedän lonkkaa.",
    en:"Today I'm just lazing around.",
    grammar:"Idiom: `vetää lonkkaa` = **to relax / do nothing**.",
    parts:[
      {k:"vetää lonkkaa", v:"idiom: ‘to laze around, take it easy’."},
      {k:"vaan", v:"spoken `just` (`vain`). Careful: not the same as the conjunction `vaan` (‘but rather’)."},
      {k:"mä", v:"spoken `minä` (‘I’)."}
    ]},

  /* ---------- ATASÖZLERİ / PROVERBS ---------- */
  { id:25, category:"proverb", level:"B1", register:"kirja",
    fi:"Aamu on iltaa viisaampi.",
    en:"Morning is wiser than evening. (Sleep on it.)",
    grammar:"Comparative + the partitive of comparison.",
    parts:[
      {k:"viisaampi", v:"`wiser` — comparative of `viisas`."},
      {k:"iltaa", v:"partitive `iltaa` marks what's compared against: ‘than evening’."},
      {k:"meaning", v:"Don't decide when tired — things look clearer after a night's sleep."}
    ]},
  { id:26, category:"proverb", level:"B1", register:"kirja",
    fi:"Ei savua ilman tulta.",
    en:"No smoke without fire.",
    grammar:"Proverb; `ilman` governs the partitive.",
    parts:[
      {k:"ilman tulta", v:"`without fire` — `ilman` always takes the partitive (`tuli→tulta`)."},
      {k:"ei savua", v:"`no smoke` — partitive after a negation."},
      {k:"meaning", v:"Rumours usually have some basis in truth."}
    ]},
  { id:27, category:"proverb", level:"B2", register:"kirja",
    fi:"Niin metsä vastaa kuin sinne huudetaan.",
    en:"The forest answers the way you shout into it.",
    grammar:"`niin … kuin …` correlative; passive `huudetaan`.",
    parts:[
      {k:"niin … kuin", v:"`as … so …` — a correlative structure: the manner of one matches the other."},
      {k:"huudetaan", v:"passive of `huutaa` (‘one shouts / is shouted’)."},
      {k:"meaning", v:"You get back what you give — treat others as you'd want to be treated."}
    ]},
  { id:28, category:"proverb", level:"B1", register:"kirja",
    fi:"Ei oppi ojaan kaada.",
    en:"Learning never does any harm.",
    grammar:"Proverb with an idiomatic negative.",
    parts:[
      {k:"ei … kaada", v:"`doesn't tip over` — negative of `kaataa`."},
      {k:"ojaan", v:"`into the ditch` — illative of `oja`."},
      {k:"meaning", v:"Knowledge is never a burden; it's always worth learning."}
    ]},

  /* ---------- SÖZ / KÜLTÜR — QUOTES / CULTURE ---------- */
  { id:29, category:"quote", level:"B1", register:"kirja",
    fi:"Suomalainen sisu ei anna periksi.",
    en:"Finnish sisu never gives up.",
    grammar:"A cultural keyword + the idiom `antaa periksi`.",
    parts:[
      {k:"sisu", v:"a core Finnish cultural concept: stubborn grit and resilience in the face of hardship."},
      {k:"antaa periksi", v:"idiom: ‘to give up / give in’ — here negated."},
      {k:"suomalainen", v:"`Finnish` — adjective agreeing with `sisu`."}
    ]},
  { id:30, category:"quote", level:"A2", register:"puhe",
    fi:"Älä huoli, kyllä se siitä.",
    en:"Don't worry, it'll work out.",
    grammar:"A very Finnish phrase of reassurance.",
    parts:[
      {k:"kyllä se siitä", v:"fixed phrase: ‘it'll be fine / it'll sort itself out’. Hard to translate word-for-word."},
      {k:"älä huoli", v:"`don't worry` — negative imperative of `huolia`."},
      {k:"register", v:"warm, everyday encouragement — you'll hear it constantly."}
    ]},

  /* ==================================================
     REKTIO-PAKETTI — verbi + sijamuoto / verb + case
     ================================================== */

  /* ---------- BAĞLAÇLAR / CONJUNCTIONS ---------- */
  { id:31, category:"conjunction", level:"B1", register:"kirja",
    fi:"Pidän tästä kaupungista, koska se on rauhallinen.",
    en:"I like this city because it's peaceful.",
    grammar:"`pitää` + **elative** (`-sta/-stä`) = to like something; here joined with `koska` (‘because’).",
    parts:[
      {k:"pitää jstk", v:"`to like` **governs the elative**: `pidän` + `tästä kaupungista` (‘of this city’). A core rektio verb."},
      {k:"tästä kaupungista", v:"elative (`-sta`) of `tämä kaupunki`, required by `pitää`."},
      {k:"koska", v:"`because` — links the reason clause."}
    ]},
  { id:32, category:"conjunction", level:"B1", register:"kirja",
    fi:"Luotan sinuun, vaikka et aina ole samaa mieltä.",
    en:"I trust you, even though you're not always of the same opinion.",
    grammar:"`luottaa` + **illative** (`-Vn`) = to trust; concession with `vaikka`.",
    parts:[
      {k:"luottaa jhk", v:"`to trust` **takes the illative**: `luotan` + `sinuun` (‘in you’), not the partitive."},
      {k:"vaikka", v:"`even though` — concessive conjunction."},
      {k:"olla samaa mieltä", v:"`to be of the same opinion` — fixed phrase; `mieltä` stays partitive."}
    ]},
  { id:33, category:"conjunction", level:"B2", register:"kirja",
    fi:"En tiennyt, että hän on kiinnostunut taiteesta.",
    en:"I didn't know (that) she is interested in art.",
    grammar:"`olla kiinnostunut` + **elative** = to be interested in; reported with `että`.",
    parts:[
      {k:"kiinnostunut jstk", v:"`interested in` **governs the elative**: `kiinnostunut` + `taiteesta` (‘in art’)."},
      {k:"että", v:"`that` — introduces the subordinate clause; comma before it."},
      {k:"taiteesta", v:"elative (`-sta`) of `taide`."}
    ]},
  { id:34, category:"conjunction", level:"B2", register:"kirja",
    fi:"Kun tutustuin naapureihin, kaupunki alkoi tuntua kodilta.",
    en:"When I got to know the neighbours, the city began to feel like home.",
    grammar:"`tutustua` + **illative** = to get to know; plus `tuntua` + **ablative** (‘feel like’).",
    parts:[
      {k:"tutustua jhk", v:"`to get to know` **takes the illative**: `tutustuin` + `naapureihin` (‘to the neighbours’)."},
      {k:"tuntua jltk", v:"`to feel like` **takes the ablative**: `tuntua` + `kodilta` (‘like home’)."},
      {k:"kun", v:"`when` — for a real event in time."}
    ]},
  { id:35, category:"conjunction", level:"B1", register:"kirja",
    fi:"Soitan sinulle heti, kun pääsen junasta pois.",
    en:"I'll call you as soon as I get off the train.",
    grammar:"`soittaa` + **allative** = to call someone; `päästä` + **elative** = to get out of.",
    parts:[
      {k:"soittaa jklle", v:"`to call (phone) someone` **takes the allative**: `soitan` + `sinulle` (‘to you’)."},
      {k:"päästä jstk", v:"`to get out of` **takes the elative**: `pääsen` + `junasta` (‘from the train’)."},
      {k:"heti kun", v:"`as soon as` — temporal conjunction."}
    ]},
  { id:36, category:"conjunction", level:"B2", register:"kirja",
    fi:"Pyysin apua ystävältäni, jotta selviäisin muutosta.",
    en:"I asked my friend for help so that I'd get through the move.",
    grammar:"`pyytää` + **ablative** (ask from) and `selvitä` + **elative** (get through); purpose with `jotta`.",
    parts:[
      {k:"pyytää jklta", v:"`to ask someone for` puts the person in the **ablative**: `ystävältäni` (‘from my friend’)."},
      {k:"selvitä jstk", v:"`to get through / cope with` **takes the elative**: `muutosta` (‘the move’)."},
      {k:"jotta", v:"`so that` — purpose, with the conditional `selviäisin`."}
    ]},
  { id:37, category:"conjunction", level:"B1", register:"kirja",
    fi:"Haaveilen Lapista, mutta en ole vielä päässyt sinne.",
    en:"I dream of Lapland, but I haven't gotten there yet.",
    grammar:"`haaveilla` + **elative** = to dream of/about; contrast with `mutta`.",
    parts:[
      {k:"haaveilla jstk", v:"`to dream of` **takes the elative**: `haaveilen` + `Lapista` (‘of Lapland’)."},
      {k:"mutta", v:"`but` — coordinating contrast."},
      {k:"päästä sinne", v:"`to get there` — `päästä` + the directional `sinne` (‘to there’)."}
    ]},
  { id:38, category:"conjunction", level:"B2", register:"kirja",
    fi:"Hän ei osallistunut kokoukseen, koska oli pettynyt päätökseen.",
    en:"He didn't take part in the meeting because he was disappointed in the decision.",
    grammar:"`osallistua` + **illative** = to participate in; `pettyä` + **illative** = to be disappointed in.",
    parts:[
      {k:"osallistua jhk", v:"`to take part in` **takes the illative**: `kokoukseen` (‘in the meeting’)."},
      {k:"pettyä jhk", v:"`to be disappointed in` **takes the illative**: `päätökseen` (‘in the decision’)."},
      {k:"koska", v:"`because` — reason clause."}
    ]},

  /* ---------- GÜNLÜK HAYAT / DAILY LIFE ---------- */
  { id:39, category:"daily", level:"B1", register:"kirja",
    fi:"Nautin todella tästä kahvista.",
    en:"I'm really enjoying this coffee.",
    grammar:"`nauttia` + **elative** = to enjoy something.",
    parts:[
      {k:"nauttia jstk", v:"`to enjoy` **takes the elative**: `nautin` + `tästä kahvista` (‘of this coffee’)."},
      {k:"tästä kahvista", v:"elative (`-sta`) of `tämä kahvi`."},
      {k:"todella", v:"`really` — intensifying adverb."}
    ]},
  { id:40, category:"daily", level:"B1", register:"puhe",
    fi:"Mä en tykkää tästä säästä yhtään.",
    en:"I don't like this weather at all.",
    grammar:"Spoken `tykätä` + **elative** = to like; here negated.",
    parts:[
      {k:"tykätä jstk", v:"`to like` **takes the elative**: `tykkää` + `tästä säästä` (‘of this weather’)."},
      {k:"yhtään", v:"`at all` — strengthens a negative."},
      {k:"kirjakieli", v:"written: `Minä en pidä tästä säästä yhtään.` — `pitää` also takes the elative."}
    ]},
  { id:41, category:"daily", level:"B1", register:"kirja",
    fi:"Voitko huolehtia kissasta, kun olen matkalla?",
    en:"Can you take care of the cat while I'm travelling?",
    grammar:"`huolehtia` + **elative** = to take care of.",
    parts:[
      {k:"huolehtia jstk", v:"`to take care of` **takes the elative**: `kissasta` (‘of the cat’)."},
      {k:"voitko", v:"`can you?` — `voida` + question clitic `-ko`."},
      {k:"kun olen matkalla", v:"`while I'm travelling` — `matkalla` adessive of `matka`."}
    ]},
  { id:42, category:"daily", level:"B1", register:"kirja",
    fi:"Kysyin tarjoilijalta, missä vessa on.",
    en:"I asked the waiter where the toilet is.",
    grammar:"`kysyä` + **ablative** = to ask someone.",
    parts:[
      {k:"kysyä jklta", v:"`to ask someone` puts the person in the **ablative**: `tarjoilijalta` (‘from the waiter’)."},
      {k:"missä vessa on", v:"`where the toilet is` — indirect question, normal word order."}
    ]},
  { id:43, category:"daily", level:"B2", register:"kirja",
    fi:"En ole vielä tottunut Suomen talveen.",
    en:"I haven't gotten used to the Finnish winter yet.",
    grammar:"`tottua` + **illative** = to get used to.",
    parts:[
      {k:"tottua jhk", v:"`to get used to` **takes the illative**: `talveen` (‘to the winter’)."},
      {k:"en ole tottunut", v:"negative perfect: `olla` + past participle `tottunut`."},
      {k:"Suomen talveen", v:"`to the Finnish winter` — `talvi→talveen` illative."}
    ]},
  { id:44, category:"daily", level:"B1", register:"puhe",
    fi:"Toi leffa kuulostaa tosi hyvältä.",
    en:"That movie sounds really good.",
    grammar:"`kuulostaa` + **ablative** = to sound (like); with spoken vocab.",
    parts:[
      {k:"kuulostaa jltk", v:"`to sound` **takes the ablative**: `kuulostaa` + `hyvältä` (‘good’)."},
      {k:"toi / leffa / tosi", v:"spoken: `toi`=`tuo` (that), `leffa`=`elokuva` (movie), `tosi`=`todella` (really)."},
      {k:"kirjakieli", v:"written: `Tuo elokuva kuulostaa todella hyvältä.`"}
    ]},
  { id:45, category:"daily", level:"B2", register:"kirja",
    fi:"Keskityn nyt täysin opintoihini.",
    en:"I'm now fully focusing on my studies.",
    grammar:"`keskittyä` + **illative** = to focus / concentrate on.",
    parts:[
      {k:"keskittyä jhk", v:"`to focus on` **takes the illative**: `opintoihini` (‘on my studies’)."},
      {k:"opintoihini", v:"illative plural of `opinnot` + possessive `-ni`: ‘to my studies’."},
      {k:"täysin", v:"`fully / completely` — adverb."}
    ]},
  { id:46, category:"daily", level:"B1", register:"kirja",
    fi:"Tuo mekko näyttää todella kauniilta.",
    en:"That dress looks really beautiful.",
    grammar:"`näyttää` + **ablative** = to look (like).",
    parts:[
      {k:"näyttää jltk", v:"`to look (like)` **takes the ablative**: `näyttää` + `kauniilta` (‘beautiful’)."},
      {k:"kauniilta", v:"ablative of `kaunis` (‘beautiful’)."},
      {k:"tuo mekko", v:"`that dress` — `tuo` for something at a distance."}
    ]},
  { id:47, category:"daily", level:"B1", register:"kirja",
    fi:"Odotan sinua kahvilan edessä.",
    en:"I'll wait for you in front of the café.",
    grammar:"`odottaa` + **partitive** = to wait for.",
    parts:[
      {k:"odottaa jtk", v:"`to wait for` **takes a partitive object**: `sinua` (‘you’)."},
      {k:"kahvilan edessä", v:"`in front of the café` — postposition `edessä` + genitive `kahvilan`."}
    ]},

  /* ---------- DEYİMLER / IDIOMS ---------- */
  { id:48, category:"idiom", level:"B2", register:"kirja",
    fi:"On aika tarttua tilaisuuteen.",
    en:"It's time to seize the opportunity.",
    grammar:"Idiom `tarttua tilaisuuteen` = **to seize the opportunity**; `tarttua` + **illative**.",
    parts:[
      {k:"tarttua jhk", v:"`to grab / seize` **takes the illative**: `tilaisuuteen` (‘the opportunity’)."},
      {k:"tarttua tilaisuuteen", v:"idiom: ‘to seize the chance’. A fixed, common expression."},
      {k:"on aika", v:"`it's time (to)` + infinitive."}
    ]},
  { id:49, category:"idiom", level:"B2", register:"kirja",
    fi:"Otetaan härkää sarvista ja ratkaistaan ongelma.",
    en:"Let's take the bull by the horns and solve the problem.",
    grammar:"Idiom `ottaa härkää sarvista` = **take the bull by the horns**; partitive + **elative**.",
    parts:[
      {k:"ottaa härkää sarvista", v:"idiom: ‘to tackle a problem head-on’. `härkää` partitive, `sarvista` **elative** (‘by the horns’)."},
      {k:"otetaan", v:"passive used as ‘let's’: `otetaan` = ‘let's take’."},
      {k:"ratkaistaan ongelma", v:"`let's solve the problem` — passive `ratkaistaan` of `ratkaista`."}
    ]},
  { id:50, category:"idiom", level:"B2", register:"kirja",
    fi:"Yritän ottaa asiasta selvää huomenna.",
    en:"I'll try to find out about the matter tomorrow.",
    grammar:"Idiom `ottaa selvää jstk` = **to find out about**; the topic stays **elative**.",
    parts:[
      {k:"ottaa selvää jstk", v:"idiom: ‘to find out / look into’. The thing investigated is **elative**: `asiasta`."},
      {k:"asiasta", v:"elative (`-sta`) of `asia` (‘matter’)."},
      {k:"yritän", v:"`I try (to)` + infinitive `ottaa`."}
    ]},
  { id:51, category:"idiom", level:"B2", register:"puhe",
    fi:"Vähitellen pääsen jyvälle tästä hommasta.",
    en:"Gradually I'm getting the hang of this thing.",
    grammar:"Idiom `päästä jyvälle jstk` = **to get the hang of**; topic in the **elative**.",
    parts:[
      {k:"päästä jyvälle jstk", v:"idiom: ‘to get the hang of, to catch on’. Topic is **elative**: `tästä hommasta`."},
      {k:"homma", v:"colloquial `job / thing / task` (puhekieli)."},
      {k:"kirjakieli", v:"neutral: `Vähitellen pääsen jyvälle tästä tehtävästä.` (`homma`→`tehtävä`)."}
    ]},
  { id:52, category:"idiom", level:"B2", register:"kirja",
    fi:"Pidä kiinni unelmistasi äläkä luovuta.",
    en:"Hold on to your dreams and don't give up.",
    grammar:"Idiom `pitää kiinni jstk` = **to hold on to**; the elative marks what you hold on to.",
    parts:[
      {k:"pitää kiinni jstk", v:"idiom: ‘to hold on to / stick to’. The thing held is **elative**: `unelmistasi`."},
      {k:"unelmistasi", v:"elative plural of `unelma` + possessive `-si`: ‘to your dreams’."},
      {k:"äläkä luovuta", v:"`and don't give up` — negative imperative `älä` + `-kä` clitic."}
    ]},
  { id:53, category:"idiom", level:"B2", register:"kirja",
    fi:"Olen täysin perillä tämän alan uutisista.",
    en:"I'm fully up to speed on the news in this field.",
    grammar:"Idiom `olla perillä jstk` = **to be well-informed about**; topic in the **elative**.",
    parts:[
      {k:"olla perillä jstk", v:"idiom: ‘to be well-informed / up to speed on’. Topic is **elative**: `uutisista`."},
      {k:"tämän alan uutisista", v:"elative plural: ‘of this field's news’ (`uutiset→uutisista`)."},
      {k:"täysin", v:"`fully / completely` — adverb."}
    ]},

  /* ---------- ATASÖZLERİ / PROVERBS ---------- */
  { id:54, category:"proverb", level:"B1", register:"kirja",
    fi:"Ei omena kauas puusta putoa.",
    en:"The apple doesn't fall far from the tree.",
    grammar:"Proverb; `pudota` + **elative** = to fall from.",
    parts:[
      {k:"pudota jstk", v:"`to fall from` **takes the elative**: `puusta` (‘from the tree’)."},
      {k:"ei … putoa", v:"negative present of `pudota` (3rd person)."},
      {k:"meaning", v:"Children take after their parents."}
    ]},
  { id:55, category:"proverb", level:"B2", register:"kirja",
    fi:"Joka kuuseen kurkottaa, se katajaan kapsahtaa.",
    en:"He who reaches for the spruce falls into the juniper.",
    grammar:"Proverb; `kurkottaa` + **illative** = to reach for.",
    parts:[
      {k:"kurkottaa jhk", v:"`to reach for` **takes the illative**: `kuuseen` (‘for the spruce’)."},
      {k:"joka … se", v:"`he who … that one …` — relative `joka` paired with `se`."},
      {k:"meaning", v:"Overreach and you may end up with nothing."}
    ]},
  { id:56, category:"proverb", level:"B1", register:"kirja",
    fi:"Vahingosta viisastuu.",
    en:"One grows wiser from one's mistakes.",
    grammar:"Proverb; `viisastua` + **elative** = to grow wiser from.",
    parts:[
      {k:"viisastua jstk", v:"`to grow wiser from` **takes the elative**: `vahingosta` (‘from a mishap’)."},
      {k:"vahingosta", v:"elative of `vahinko` (‘accident, mishap’); note `nk→ng` gradation."},
      {k:"meaning", v:"Mistakes teach you — you learn from what goes wrong."}
    ]},
  { id:57, category:"proverb", level:"B1", register:"kirja",
    fi:"Ei kysyvä tieltä eksy.",
    en:"One who asks won't lose the way.",
    grammar:"Proverb; `eksyä` + **ablative** = to stray from.",
    parts:[
      {k:"eksyä jltk", v:"`to stray from` **takes the ablative**: `tieltä` (‘from the road’)."},
      {k:"kysyvä", v:"`the one who asks` — active present participle of `kysyä` used as a noun."},
      {k:"meaning", v:"If you ask, you won't go wrong — don't be afraid to ask."}
    ]},

  /* ---------- SÖZ / KÜLTÜR — QUOTES / CULTURE ---------- */
  { id:58, category:"quote", level:"B1", register:"kirja",
    fi:"Sisu auttaa suomalaisia selviytymään vaikeuksista.",
    en:"Sisu helps Finns get through hardships.",
    grammar:"Cultural keyword `sisu`; `auttaa` + **partitive** and `selviytyä` + **elative**.",
    parts:[
      {k:"auttaa jkta", v:"`to help` **takes the partitive**: `suomalaisia` (‘Finns’)."},
      {k:"selviytyä jstk", v:"`to survive / get through` **takes the elative**: `vaikeuksista` (‘hardships’)."},
      {k:"sisu", v:"the Finnish concept of stubborn grit and perseverance."}
    ]},
  { id:59, category:"quote", level:"B2", register:"kirja",
    fi:"Älä luota onneen, vaan luota omaan työhösi.",
    en:"Don't trust luck; trust your own work instead.",
    grammar:"Motivational saying; `luottaa` + **illative** = to trust (in).",
    parts:[
      {k:"luottaa jhk", v:"`to trust` **takes the illative**: `onneen` (‘in luck’), `työhösi` (‘in your work’)."},
      {k:"vaan", v:"`but rather` — corrects a negated clause (not `mutta`)."},
      {k:"omaan työhösi", v:"`in your own work` — illative `työhön` + possessive `-si`."}
    ]},
  { id:60, category:"quote", level:"B1", register:"puhe",
    fi:"Usko itseesi, kyllä sä pärjäät.",
    en:"Believe in yourself, you'll do just fine.",
    grammar:"Encouragement; `uskoa` + **illative** = to believe in.",
    parts:[
      {k:"uskoa jhk", v:"`to believe in` **takes the illative**: `itseesi` (‘in yourself’). Note: `uskoa` + partitive = to believe *that* something is true."},
      {k:"pärjätä", v:"`to manage / do fine` — `sä pärjäät` (spoken `sinä`)."},
      {k:"kirjakieli", v:"written: `Usko itseesi, kyllä sinä pärjäät.`"}
    ]},

  /* ---------- LISÄKORTIT / EXTRA BATCH (61–110) ---------- */

  /* ---- BAĞLAÇLAR / CONJUNCTIONS ---- */
  { id:61, category:"conjunction", level:"A2", register:"kirja",
    fi:"Jos sataa, jään kotiin.",
    en:"If it rains, I'll stay home.",
    grammar:"`jos` = **if** — the basic conditional conjunction.",
    parts:[
      {k:"jos", v:"`if` — opens a condition. A comma separates the clauses."},
      {k:"sataa", v:"`it rains` — a weather verb used with **no subject**."},
      {k:"jään kotiin", v:"`I stay home` — `jäädä` + illative `kotiin` (direction ‘to/at home’)."}
    ]},
  { id:62, category:"conjunction", level:"B1", register:"kirja",
    fi:"Menen ulos, vaikka sataa.",
    en:"I'm going out even though it's raining.",
    grammar:"`vaikka` = **even though / although** — a concessive conjunction.",
    parts:[
      {k:"vaikka", v:"`even though` — concedes a contrast. With the conditional it means `even if`."},
      {k:"menen ulos", v:"`I go out` — `mennä` + adverb `ulos` (direction ‘out’)."},
      {k:"sataa", v:"`it rains` — weather verb, subjectless."}
    ]},
  { id:63, category:"conjunction", level:"A2", register:"kirja",
    fi:"Haluaisin tulla, mutta minulla ei ole aikaa.",
    en:"I'd like to come, but I don't have time.",
    grammar:"`mutta` = **but** — contrasts two main clauses.",
    parts:[
      {k:"mutta", v:"`but` — joins two equal clauses that contrast."},
      {k:"minulla ei ole aikaa", v:"`I don't have time` — adessive `minulla` + negative `ei ole` + **partitive** `aikaa` (negation forces partitive)."},
      {k:"haluaisin", v:"`I would like` — conditional of `haluta`, politer than `haluan`."}
    ]},
  { id:64, category:"conjunction", level:"A2", register:"kirja",
    fi:"Kun olin lapsi, asuin maalla.",
    en:"When I was a child, I lived in the countryside.",
    grammar:"`kun` = **when** — for a specific time or past event (not for questions).",
    parts:[
      {k:"kun", v:"`when` — temporal. Use `kun` in statements; `milloin` for the question ‘when?’."},
      {k:"olin lapsi", v:"`I was a child` — past of `olla`; predicate noun in nominative."},
      {k:"maalla", v:"`in the countryside` — adessive of `maa`."}
    ]},
  { id:65, category:"conjunction", level:"B1", register:"kirja",
    fi:"Säästän rahaa, jotta voin matkustaa.",
    en:"I'm saving money so that I can travel.",
    grammar:"`jotta` = **so that / in order that** — expresses purpose.",
    parts:[
      {k:"jotta", v:"`so that` — introduces a purpose clause."},
      {k:"säästän rahaa", v:"`I save money` — `säästää` + **partitive** `rahaa` (an unspecified amount)."},
      {k:"voin matkustaa", v:"`I can travel` — `voida` + the basic infinitive `matkustaa`."}
    ]},
  { id:66, category:"conjunction", level:"B1", register:"kirja",
    fi:"Odota tässä, kunnes palaan.",
    en:"Wait here until I come back.",
    grammar:"`kunnes` = **until** — marks the end point of an action in time.",
    parts:[
      {k:"kunnes", v:"`until` — the action lasts up to the moment in the sub-clause."},
      {k:"odota", v:"`wait` — 2nd person singular imperative of `odottaa`."},
      {k:"palaan", v:"`I return` — `palata` (type-4 verb): `pala-ta` → `pala-an`."}
    ]},
  { id:67, category:"conjunction", level:"B1", register:"kirja",
    fi:"Otan sateenvarjon, sillä taivas on pilvinen.",
    en:"I'll take an umbrella, for the sky is cloudy.",
    grammar:"`sillä` = **for / because** — gives a reason; it cannot start the sentence.",
    parts:[
      {k:"sillä", v:"`for/because` — like `koska` but coordinating; always mid-sentence."},
      {k:"sateenvarjon", v:"`umbrella` — **accusative** (total object): the whole umbrella is taken."},
      {k:"pilvinen", v:"`cloudy` — adjective formed with `-inen` from `pilvi` (‘cloud’)."}
    ]},
  { id:68, category:"conjunction", level:"B1", register:"kirja",
    fi:"Hän on isäni veli eli setäni.",
    en:"He is my father's brother, that is, my uncle.",
    grammar:"`eli` = **that is / in other words** — links two names for the same thing.",
    parts:[
      {k:"eli", v:"`i.e. / or` — restates something more precisely. (Unlike `tai` = a real alternative.)"},
      {k:"isäni veli", v:"`my father's brother` — `isä` + possessive `-ni`; `veli` = brother."},
      {k:"setä", v:"`paternal uncle` (father's brother). A mother's brother is `eno`."}
    ]},
  { id:69, category:"conjunction", level:"B1", register:"kirja",
    fi:"Tee kuten haluat.",
    en:"Do as you wish.",
    grammar:"`kuten` = **as / like / the way** — compares to a manner.",
    parts:[
      {k:"kuten", v:"`as / the way` — introduces how something is done. More written than `niin kuin`."},
      {k:"tee", v:"`do` — irregular imperative of `tehdä`."},
      {k:"haluat", v:"`you want` — `haluta`, 2nd person singular."}
    ]},
  { id:70, category:"conjunction", level:"B1", register:"kirja",
    fi:"Pese kädet ennen kuin syöt.",
    en:"Wash your hands before you eat.",
    grammar:"`ennen kuin` = **before** when followed by a clause.",
    parts:[
      {k:"ennen kuin", v:"`before` + a verb/clause. Before a **noun** use `ennen` + partitive (`ennen ruokaa`)."},
      {k:"pese kädet", v:"`wash your hands` — imperative `pese` (from `pestä`) + plural object `kädet`."},
      {k:"syöt", v:"`you eat` — `syödä`, 2nd person singular."}
    ]},
  { id:71, category:"conjunction", level:"B1", register:"kirja",
    fi:"Voit ottaa joko teetä tai kahvia.",
    en:"You can have either tea or coffee.",
    grammar:"`joko … tai` = **either … or** — a paired conjunction.",
    parts:[
      {k:"joko … tai", v:"`either … or` — `joko` flags the first option, `tai` the second."},
      {k:"teetä, kahvia", v:"**partitive** of `tee` and `kahvi` — an unspecified amount of a drink."},
      {k:"voit ottaa", v:"`you can take` — `voida` + infinitive `ottaa`."}
    ]},
  { id:72, category:"conjunction", level:"B1", register:"kirja",
    fi:"Pidän sekä kahvista että teestä.",
    en:"I like both coffee and tea.",
    grammar:"`sekä … että` = **both … and**; note `pitää` + **elative**.",
    parts:[
      {k:"sekä … että", v:"`both … and` — a fixed pair. (For plain ‘and’ between nouns, use `ja`.)"},
      {k:"pitää jstk", v:"`to like` **takes the elative** (`-sta/-stä`): `kahvista`, `teestä`."}
    ]},
  { id:73, category:"conjunction", level:"B1", register:"kirja",
    fi:"Tulen niin pian kuin voin.",
    en:"I'll come as soon as I can.",
    grammar:"`niin … kuin` = **as … as** — compares to an equal degree.",
    parts:[
      {k:"niin pian kuin", v:"`as soon as` — `niin` + adverb + `kuin`."},
      {k:"voin", v:"`I can` — `voida`, 1st person singular (`voi-n`)."}
    ]},
  { id:74, category:"conjunction", level:"B2", register:"kirja",
    fi:"Puhu hiljaa, ettet herätä vauvaa.",
    en:"Speak quietly so that you don't wake the baby.",
    grammar:"`ettei` = `että` + `ei` — a **negative** purpose clause; it inflects by person.",
    parts:[
      {k:"ettet", v:"`so that you don't` — `että` + 2nd person negative `et`. (1st: `etten`, 3rd: `ettei`.)"},
      {k:"herätä", v:"connegative of `herättää` (‘to wake someone’): `et herätä` = ‘you don't wake’."},
      {k:"vauvaa", v:"**partitive** object under negation (`herättää vauva` → `et herätä vauvaa`)."}
    ]},

  /* ---- GÜNLÜK / DAILY ---- */
  { id:75, category:"daily", level:"A2", register:"puhe",
    fi:"Mitä kuuluu?",
    en:"How are you? (lit. what is heard?)",
    grammar:"Standard greeting using `kuulua` (‘to be heard / to be the news’).",
    parts:[
      {k:"mitä", v:"`what` — **partitive** of `mikä`, required by `kuulua` here."},
      {k:"kuuluu", v:"`is heard / how are things` — `kuulua`, 3rd person singular."},
      {k:"vastaus", v:"a common reply: `Kiitos hyvää.` (‘Fine, thanks.’)"}
    ]},
  { id:76, category:"daily", level:"A2", register:"kirja",
    fi:"Voisitko auttaa minua?",
    en:"Could you help me?",
    grammar:"Polite request with the conditional; `auttaa` + **partitive**.",
    parts:[
      {k:"voisitko", v:"`could you` — conditional `voisit` + question `-ko`. Politer than `voitko`."},
      {k:"auttaa jkta", v:"`to help` **takes the partitive**: `minua` (‘me’)."}
    ]},
  { id:77, category:"daily", level:"A2", register:"puhe",
    fi:"Mä en tiiä.",
    en:"I don't know.",
    grammar:"Spoken negative; `tiiä` is the colloquial form of `tiedä`.",
    parts:[
      {k:"mä", v:"spoken `minä` (‘I’)."},
      {k:"en tiiä", v:"`I don't know` — negative `en` + connegative. Spoken `tiiä` ← written `tiedä`."},
      {k:"kirjakieli", v:"written: `(Minä) en tiedä.`"}
    ]},
  { id:78, category:"daily", level:"A2", register:"kirja",
    fi:"Paljonko tämä maksaa?",
    en:"How much does this cost?",
    grammar:"Shopping question with `paljonko` (‘how much’).",
    parts:[
      {k:"paljonko", v:"`how much` — `paljon` + `-ko`."},
      {k:"maksaa", v:"`to cost / to pay` — here 3rd person ‘costs’."},
      {k:"tämä", v:"`this` — nominative demonstrative."}
    ]},
  { id:79, category:"daily", level:"B1", register:"kirja",
    fi:"Anteeksi, voitteko toistaa?",
    en:"Excuse me, could you repeat that?",
    grammar:"Polite/formal request using the `te`-form `voitteko`.",
    parts:[
      {k:"voitteko", v:"`can you` — 2nd person **plural/formal** (`te`) + `-ko`."},
      {k:"toistaa", v:"`to repeat` — basic infinitive after `voida`."},
      {k:"anteeksi", v:"`excuse me / sorry` — fixed politeness word."}
    ]},
  { id:80, category:"daily", level:"A2", register:"puhe",
    fi:"Nähdään huomenna!",
    en:"See you tomorrow!",
    grammar:"The passive `nähdään` is used colloquially for **‘see you / let's meet’**.",
    parts:[
      {k:"nähdään", v:"passive of `nähdä` (‘is seen’), idiomatically ‘(we'll) see each other’."},
      {k:"huomenna", v:"`tomorrow` — essive-form time adverb."},
      {k:"kirjakieli", v:"formal goodbye: `Näkemiin.`"}
    ]},
  { id:81, category:"daily", level:"B1", register:"puhe",
    fi:"Mennäänkö kahville?",
    en:"Shall we go for a coffee?",
    grammar:"The passive as a **‘shall we…?’** suggestion; `kahville` = allative.",
    parts:[
      {k:"mennäänkö", v:"passive `mennään` (‘one goes / let's go’) + `-kö` = ‘shall we go?’."},
      {k:"kahville", v:"`for coffee` — allative of `kahvi`; Finnish ‘goes onto coffee’ for a coffee outing."},
      {k:"kirjakieli", v:"more neutral: `Menemmekö kahville?`"}
    ]},
  { id:82, category:"daily", level:"A2", register:"kirja",
    fi:"Minulla on nälkä.",
    en:"I'm hungry.",
    grammar:"States a feeling with `minulla on` + noun (Finnish ‘has hunger’).",
    parts:[
      {k:"minulla on", v:"`I have` — adessive `minulla` + `on`. Finnish expresses states this way."},
      {k:"nälkä", v:"`hunger` — `olla nälkä` = to be hungry. Thirst = `jano`."}
    ]},
  { id:83, category:"daily", level:"A2", register:"kirja",
    fi:"Saanko laskun, kiitos?",
    en:"Can I have the bill, please?",
    grammar:"Restaurant request; `saada` (‘to get’) + accusative object.",
    parts:[
      {k:"saanko", v:"`may I get` — `saada`, 1st person + `-ko`."},
      {k:"laskun", v:"`the bill` — **accusative** (total object): the whole bill."},
      {k:"kiitos", v:"`please / thank you` — also softens the request."}
    ]},
  { id:84, category:"daily", level:"B1", register:"kirja",
    fi:"Voitko sanoa, missä asema on?",
    en:"Can you tell me where the station is?",
    grammar:"An **embedded question** with `missä` keeps statement word order.",
    parts:[
      {k:"missä asema on", v:"`where the station is` — the verb `on` stays at the end (no inversion)."},
      {k:"missä", v:"`where` — inessive question word (‘in what place’)."},
      {k:"voitko sanoa", v:"`can you say/tell` — `voida` + infinitive `sanoa`."}
    ]},
  { id:85, category:"daily", level:"A2", register:"puhe",
    fi:"Ei se mitään.",
    en:"It's nothing / no worries.",
    grammar:"Fixed reassurance phrase answering an apology or thanks.",
    parts:[
      {k:"ei … mitään", v:"`nothing` — negative `ei` paired with **partitive** `mitään`."},
      {k:"se", v:"`it` — dummy subject here."},
      {k:"käyttö", v:"reply to `Anteeksi` (‘sorry’): `Ei se mitään.` = ‘It's fine.’"}
    ]},
  { id:86, category:"daily", level:"B1", register:"kirja",
    fi:"Olen pahoillani myöhästymisestä.",
    en:"I'm sorry for being late.",
    grammar:"`olla pahoillaan` = to be sorry; the cause takes the **elative**.",
    parts:[
      {k:"pahoillani", v:"`sorry` — fixed expression `olla pahoillaan` with possessive (`-ni` = my)."},
      {k:"myöhästymisestä", v:"`for the lateness` — **elative** `-stä` of `myöhästyminen` (the reason)."}
    ]},
  { id:87, category:"daily", level:"B1", register:"kirja",
    fi:"Sopiiko sinulle huomenna?",
    en:"Does tomorrow work for you?",
    grammar:"`sopia` (‘to suit’) + **allative** for the person.",
    parts:[
      {k:"sopiiko", v:"`does it suit` — `sopia`, 3rd person + `-ko`."},
      {k:"sinulle", v:"`for you` — **allative**; `sopia` marks the person it suits with `-lle`."},
      {k:"huomenna", v:"`tomorrow` — time adverb (essive form)."}
    ]},

  /* ---- DEYİMLER / IDIOMS ---- */
  { id:88, category:"idiom", level:"B2", register:"puhe",
    fi:"Nyt on pakko panna hanskat naulaan.",
    en:"Now I have to hang up the gloves (give up / quit).",
    grammar:"Idiom `panna hanskat naulaan` = **to give up / quit for good**.",
    parts:[
      {k:"panna hanskat naulaan", v:"lit. ‘put the gloves on the nail’ → **to give up / call it quits**."},
      {k:"on pakko", v:"`have to / must` — `on pakko` + infinitive expresses necessity."},
      {k:"naulaan", v:"`onto the nail` — illative of `naula`."}
    ]},
  { id:89, category:"idiom", level:"B2", register:"puhe",
    fi:"Älä vedä hernettä nenään tällaisesta.",
    en:"Don't take offense over something like this.",
    grammar:"Idiom `vetää herne nenään` = **to take offense / get in a huff**.",
    parts:[
      {k:"vetää herne nenään", v:"lit. ‘pull a pea up the nose’ → **to get offended/sulky**."},
      {k:"hernettä", v:"**partitive** `hernettä` under the negative imperative `älä vedä`."},
      {k:"tällaisesta", v:"`over something like this` — elative of `tällainen`."}
    ]},
  { id:90, category:"idiom", level:"B2", register:"puhe",
    fi:"Arvaus meni täysin metsään.",
    en:"The guess was completely off.",
    grammar:"Idiom `mennä metsään` = **to go badly wrong / miss completely**.",
    parts:[
      {k:"mennä metsään", v:"lit. ‘go into the forest’ → **to fail / be way off**."},
      {k:"metsään", v:"`into the forest` — illative of `metsä`."},
      {k:"täysin", v:"`completely` — intensifying adverb."}
    ]},
  { id:91, category:"idiom", level:"B2", register:"puhe",
    fi:"Kotona kaikki sujuu kuin Strömsössä.",
    en:"At home everything goes perfectly (like in Strömsö).",
    grammar:"Cultural idiom `kuin Strömsössä` = **picture-perfect / idyllic**.",
    parts:[
      {k:"kuin Strömsössä", v:"refers to the cozy TV show *Strömsö*; means ‘ideal, just like on TV’ (often ironic)."},
      {k:"sujua", v:"`to go smoothly` — `kaikki sujuu` = ‘everything runs well’."},
      {k:"Strömsössä", v:"inessive of the place name (‘in Strömsö’)."}
    ]},
  { id:92, category:"idiom", level:"B2", register:"puhe",
    fi:"Tällainen juhliminen ei ole minun heiniäni.",
    en:"This kind of partying isn't my thing.",
    grammar:"Idiom `olla jonkun heiniä` = **to be someone's cup of tea** (usually negated).",
    parts:[
      {k:"ei ole minun heiniäni", v:"lit. ‘is not my hay’ → ‘is not my thing’."},
      {k:"heiniäni", v:"**partitive plural** `heiniä` + possessive `-ni` (‘my hay’)."},
      {k:"juhliminen", v:"`partying` — a verbal noun from `juhlia`."}
    ]},
  { id:93, category:"idiom", level:"B2", register:"puhe",
    fi:"Juoksin koko päivän pää kolmantena jalkana.",
    en:"I ran around like crazy all day.",
    grammar:"Idiom `pää kolmantena jalkana` = **frantically busy / rushing about**.",
    parts:[
      {k:"pää kolmantena jalkana", v:"lit. ‘head as a third leg’ → rushing about frantically. `kolmantena` = essive (‘as the third’)."},
      {k:"juoksin", v:"`I ran` — past tense of `juosta`."},
      {k:"koko päivän", v:"`all day` — **accusative** of duration."}
    ]},
  { id:94, category:"idiom", level:"B1", register:"kirja",
    fi:"Vieras tunsi olonsa kuin kotonaan.",
    en:"The guest felt right at home.",
    grammar:"Idiom `tuntea olonsa kuin kotonaan` = **to feel at home**.",
    parts:[
      {k:"kuin kotonaan", v:"`like at home` — `kuin` + locative `kotona` + reflexive possessive `-an`."},
      {k:"tuntea olonsa", v:"`to feel (one's state)` — fixed phrase, here completed by `kuin kotonaan`."},
      {k:"vieras", v:"`guest / stranger` — nominative subject."}
    ]},
  { id:95, category:"idiom", level:"B1", register:"puhe",
    fi:"Pidän sinulle peukkuja kokeessa.",
    en:"I'll keep my fingers crossed for you in the exam.",
    grammar:"Idiom `pitää peukkuja` = **to keep one's fingers crossed**.",
    parts:[
      {k:"pitää peukkuja", v:"lit. ‘hold thumbs’ → to wish someone luck. `peukkuja` = partitive plural of `peukku`."},
      {k:"sinulle", v:"`for you` — allative marks who you're rooting for."},
      {k:"kokeessa", v:"`in the exam` — inessive of `koe`."}
    ]},
  { id:96, category:"idiom", level:"B2", register:"puhe",
    fi:"Vanha koira heitti lusikan nurkkaan viime talvena.",
    en:"The old dog kicked the bucket last winter.",
    grammar:"Idiom `heittää lusikka nurkkaan` = **to kick the bucket (to die)**.",
    parts:[
      {k:"heittää lusikka nurkkaan", v:"lit. ‘throw the spoon into the corner’ → **to die**. Informal."},
      {k:"lusikan", v:"**accusative** (total object) — the whole spoon is thrown."},
      {k:"viime talvena", v:"`last winter` — `viime` + essive `talvena`."}
    ]},
  { id:97, category:"idiom", level:"B2", register:"puhe",
    fi:"Ulkona sataa kuin saavista kaataen.",
    en:"It's pouring rain outside (raining buckets).",
    grammar:"Idiom `sataa kuin saavista kaataen` = **to rain extremely hard**.",
    parts:[
      {k:"sataa kuin saavista kaataen", v:"lit. ‘rains as if poured from a tub’ → ‘pouring down’."},
      {k:"saavista", v:"`from a tub` — elative of `saavi`."},
      {k:"kaataen", v:"`pouring` — instructive of the 2nd infinitive (manner)."}
    ]},
  { id:98, category:"idiom", level:"B2", register:"kirja",
    fi:"Palkka ei ole minulle kynnyskysymys.",
    en:"Salary isn't a dealbreaker for me.",
    grammar:"`kynnyskysymys` = **a make-or-break issue / dealbreaker**.",
    parts:[
      {k:"kynnyskysymys", v:"lit. ‘threshold question’ → a condition that decides yes/no."},
      {k:"minulle", v:"`for me` — allative of the person concerned."},
      {k:"palkka", v:"`salary / pay` — nominative subject."}
    ]},
  { id:99, category:"idiom", level:"B1", register:"puhe",
    fi:"Suunnitelma meni täysin pieleen.",
    en:"The plan went completely wrong.",
    grammar:"Idiom `mennä pieleen` = **to go wrong / fail**.",
    parts:[
      {k:"mennä pieleen", v:"`to go wrong` — `pieleen` (illative of `pieli`) appears only in this idiom."},
      {k:"meni", v:"`went` — past tense of `mennä`, 3rd person."},
      {k:"suunnitelma", v:"`plan` — nominative subject."}
    ]},

  /* ---- ATASÖZLERİ / PROVERBS ---- */
  { id:100, category:"proverb", level:"B2", register:"kirja",
    fi:"Ei oppi ojaan kaada.",
    en:"Learning never hurts (lit. knowledge won't tip you into a ditch).",
    grammar:"Proverb praising learning; note the **poetic word order** (verb last).",
    parts:[
      {k:"oppi", v:"`learning / knowledge` — nominative subject."},
      {k:"ojaan", v:"`into the ditch` — illative of `oja`."},
      {k:"ei … kaada", v:"`does not tip (you) over` — negative of `kaataa`; order is stylistic."}
    ]},
  { id:101, category:"proverb", level:"B1", register:"kirja",
    fi:"Aamu on iltaa viisaampi.",
    en:"Morning is wiser than evening (sleep on it).",
    grammar:"Proverb showing the **comparative** + partitive of comparison.",
    parts:[
      {k:"viisaampi", v:"`wiser` — comparative of `viisas` (`-mpi`)."},
      {k:"iltaa", v:"`than evening` — the compared noun takes the **partitive** (`ilta` → `iltaa`)."},
      {k:"merkitys", v:"advice to postpone decisions until morning."}
    ]},
  { id:102, category:"proverb", level:"B2", register:"kirja",
    fi:"Joka kuuseen kurkottaa, se katajaan kapsahtaa.",
    en:"He who reaches for the spruce falls onto the juniper (overreaching backfires).",
    grammar:"`joka … se …` = **‘the one who …, that one …’** relative construction.",
    parts:[
      {k:"joka … se", v:"`whoever …, (that one) …` — `joka` opens the relative clause, `se` resumes it."},
      {k:"kurkottaa jhk", v:"`to reach for` + **illative**: `kuuseen` (‘into the spruce’)."},
      {k:"kapsahtaa", v:"`to plop/fall` — onto `katajaan` (illative of `kataja`, ‘juniper’)."}
    ]},
  { id:103, category:"proverb", level:"B1", register:"kirja",
    fi:"Ei savua ilman tulta.",
    en:"No smoke without fire.",
    grammar:"Proverb; `ilman` + **partitive**.",
    parts:[
      {k:"ilman tulta", v:"`without fire` — `ilman` always **takes the partitive** (`tuli` → `tulta`)."},
      {k:"savua", v:"`smoke` — **partitive** in this negative existential (`ei (ole) savua`)."}
    ]},
  { id:104, category:"proverb", level:"B2", register:"kirja",
    fi:"Hätä keinot keksii.",
    en:"Necessity is the mother of invention.",
    grammar:"Proverb with **poetic word order** (object before verb).",
    parts:[
      {k:"hätä", v:"`distress / emergency` — nominative subject."},
      {k:"keinot", v:"`the means/ways` — total object (plural nominative form), fronted for effect."},
      {k:"keksii", v:"`invents / finds` — `keksiä`, 3rd person singular (agrees with `hätä`)."}
    ]},
  { id:105, category:"proverb", level:"B2", register:"kirja",
    fi:"Minkä taakseen jättää, sen edestään löytää.",
    en:"What you leave behind, you'll find ahead of you (your deeds catch up with you).",
    grammar:"`minkä … sen …` relative pair; reflexive possessive `-en`.",
    parts:[
      {k:"minkä … sen", v:"`what …, that …` — accusative relative `minkä` answered by `sen`."},
      {k:"taakseen", v:"`behind oneself` — directional, with the reflexive possessive `-en`."},
      {k:"edestään", v:"`from in front of oneself` — likewise reflexive; pairs with `taakseen`."}
    ]},

  /* ---- SÖZ / KÜLTÜR — QUOTES ---- */
  { id:106, category:"quote", level:"B1", register:"kirja",
    fi:"Pienistä puroista syntyy suuri joki.",
    en:"From small streams a great river is born.",
    grammar:"Cultural saying; the source/origin takes the **elative**.",
    parts:[
      {k:"pienistä puroista", v:"`from small streams` — **elative plural** of `pieni puro`."},
      {k:"syntyy", v:"`is born / comes into being` — `syntyä`, 3rd person."},
      {k:"suuri joki", v:"`a great river` — nominative subject of `syntyä`."}
    ]},
  { id:107, category:"quote", level:"B2", register:"kirja",
    fi:"Onni ei tule etsien, vaan eläen.",
    en:"Happiness doesn't come by seeking, but by living.",
    grammar:"Motivational saying using the **instructive of the 2nd infinitive** (‘by doing’).",
    parts:[
      {k:"etsien, eläen", v:"`by seeking / by living` — the 2nd-infinitive instructive expresses ‘by V-ing’."},
      {k:"vaan", v:"`but rather` — corrects the negated clause (not `mutta`)."},
      {k:"onni", v:"`happiness / luck` — nominative subject."}
    ]},
  { id:108, category:"quote", level:"B2", register:"kirja",
    fi:"Rohkeus ei ole pelon puutetta vaan sen voittamista.",
    en:"Courage is not the absence of fear but the overcoming of it.",
    grammar:"Definition-style sentence; predicate nouns in the **partitive**.",
    parts:[
      {k:"pelon puutetta", v:"`the absence of fear` — genitive `pelon` + partitive `puutetta`."},
      {k:"sen voittamista", v:"`overcoming it` — verbal noun `voittaminen` in the partitive."},
      {k:"vaan", v:"`but rather` — used because the first clause is negated."}
    ]},
  { id:109, category:"quote", level:"B1", register:"puhe",
    fi:"Kaikki järjestyy, älä huoli.",
    en:"Everything will work out, don't worry.",
    grammar:"Reassurance; `järjestyä` = ‘to sort itself out’.",
    parts:[
      {k:"kaikki järjestyy", v:"`everything works out` — `järjestyä`, 3rd person."},
      {k:"älä huoli", v:"`don't worry` — negative imperative `älä` + connegative of `huolia`."},
      {k:"kirjakieli", v:"the same form works in writing too."}
    ]},
  { id:110, category:"quote", level:"B2", register:"kirja",
    fi:"Tieto lisää tuskaa, mutta myös ymmärrystä.",
    en:"Knowledge increases sorrow, but also understanding.",
    grammar:"`lisätä` (‘to add/increase’) takes a **partitive** object.",
    parts:[
      {k:"lisää tuskaa", v:"`increases sorrow` — `lisätä` + **partitive** `tuskaa`."},
      {k:"ymmärrystä", v:"`understanding` — also partitive, a parallel object after `myös`."},
      {k:"myös", v:"`also` — adds the second object."}
    ]}
];
