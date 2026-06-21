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
    ]}
];
