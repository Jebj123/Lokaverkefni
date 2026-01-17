Uppskriftarsíða með Api Kall á themealdb

Components inniheldur

Categories
-allar uppskriptir Skellt í flokka
-Mapar þá uppskriftir sem tengist þeim flokk
-Síðan Paginatað til að gera meira User friendly og sleppt við doomscroll
-categories notast við sitestructure.style.css fyrir stíl og grid

Home
-Heima inniheldur mynd sem er stöðugt
-Random 1 uppskrift sem breytist við hvert refresh
-Og stutt uppspunar About
-inniheldur sér css fyrir lit á -header -Footer -nav

Layout
-Layoutið Inniheldur Header-Main-Footer
-inniheldur sér css folder sem sést ekki annarstaðar

NotFound
-NotFound hefur Texta-Gif-Tannhjól sem snýst
-innihekldur sér css sem sest ekki annarstaðar

RecipeDetail
-Inniheldur Ítarlegar Upplýsingar s.s mælingar
-inniheldur sér css fyrir römmun og stíl sem sést ekki annars staðar

SearchBar
-searchbar inniheldur input field með key: Enter til að leita
-einnig með pagination
-inniheldur sér css fyrir input og texta
-inniheldur notast einnig við sitestructure.style.css fyrir stíl og grid
-inniheldur einnig tvær mismunandi síður byrjunarsíðan gefur dæmi um máltíðir en þegar þú leitar að lamb eða eitthvað slík færist það á yfir hina síðuna sem leitarvél skilar

SiteStructure
-Notað í -Searchbar -Categories -searchBar sem er í raun grid Templatið svo að hefur Grunnin á gridsysteminu saman
-Er svipað setup svo fannst það vera skynsamlegt að have sér folder fyrir bæði

Utils
-Notað til að defina type í api kalli t.d strMeal : string
