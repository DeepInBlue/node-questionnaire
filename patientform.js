step1 = {'id': '1', 'name': 'Choroba Przewlekła', 
 'questions': [
     {'number': 1, 
      'text': 'Czy choruje pan/pani na chorobę przewlekłą?', 
      'type': 'multichoice', 
      'options': [
         {'number': 1, 'text': 'depresja'},
         {'number': 2, 'text': 'cukrzyca'},
         {'number': 3, 'text': 'nadciśnienie tętnicze'},
         {'number': 4, 'text': 'choroby układu krążenia'},
         {'number': 5, 'text': 'astma oskrzelowa'},
         {'number': 6, 'text': 'przewlekła obturacyjna choroba płuc'},
         {'number': 7, 'text': 'choroba układu kostno stawowego'},
         {'number': 8, 'text': 'choroba układu nerwowego'},
         {'number': 9, 'text': 'inne schorzenie'}]},
     {'number': 2, 
         'text': 'Od ilu lat choruje Pan/Pani na chorobę przewlekłą?', 
         'type': 'open'},
     {'number': 3, 
         'text': 'Czy był Pan/i hospitalizowany z powodu zaostrzenia dolegliwości tej choroby?', 
         'type': 'select', 
         'options': [
         {'number': 1, 'text': 'tak'},
         {'number': 2, 'text': 'nie'}]},
     {'number': 4, 
         'text': 'Ile było takich hospitalizacji do tej pory?', 
         'type': 'select', 
         'options': [
         {'number': 1, 'text': '1'},
         {'number': 2, 'text': '2-5'}, 
         {'number': 3, 'text': '1>5'}]},
     {'number': 5, 
         'text': 'Jak często zgłasza się Pan na wizyty kontrolne do przychodni/lekarza rodzinnego z powodu tej choroby? ', 
         'type': 'select', 
         'options': [
         {'number': 1, 'text': 'raz na miesiąc'},
         {'number': 2, 'text': 'raz na kwartał'}, 
         {'number': 3, 'text': 'raz na pół roku'},
         {'number': 4, 'text': 'raz na rok lub rzadziej'}]},
     {'number': 6, 
      'text': 'Czy ma Pan trudności w uzyskaniu dostępu do lekarza w przypadku nasilenia dolegliwości choroby? ', 
      'type': 'select', 
      'options': [
         {'number': 1, 'text': 'zdecydowanie tak'},
         {'number': 2, 'text': 'raczej tak'}, 
         {'number': 3, 'text': 'trudno powiedzieć'},
         {'number': 4, 'text': 'raczej nie'}, 
         {'number': 5, 'text': 'zdecydowanie nie'},]},
     {'number': 7, 
      'text': 'Czy przeprowadza Pan/i samodzielną ocenę nasilenia dolegliwości związanych z Pana/i chorobą?', 
      'type': 'select', 
      'options': [
         {'number': 1, 'text': 'tak, regularnie'},
         {'number': 2, 'text': 'tak, '}, 
         {'number': 3, 'text': 'bardzo różnie'},
         {'number': 4, 'text': 'raczej nie'},
         {'number': 5, 'text': 'nigdy'}]},
     {'number': 8, 
      'text': 'Czy wykonuje Pan/i samodzielne pomiary wskaźnika istotnego dla oceny przebiegu choroby, np. glikemii, ciśnienia krwi, wagi ciała, przepływu powietrza w oskrzelach?', 
      'type': 'select', 
      'options': [
         {'number': 1, 'text': 'tak, regularnie'},
         {'number': 2, 'text': 'tak, '}, 
         {'number': 3, 'text': 'bardzo różnie'},
         {'number': 4, 'text': 'raczej nie'},
         {'number': 5, 'text': 'nigdy'}]},
     {'number': 9, 
      'text': 'Czy chciałby Pan/i(czy uważa Pan/i), że byłoby to pomocne aby)?', 
      'type': 'select', 
      'options': [
         {'number': 1, 'text': 'tak, najczęsćiej'},
         {'number': 2, 'text': 'tak, zwykle'}, 
         {'number': 3, 'text': 'bardzo różnie'},
         {'number': 4, 'text': 'raczej nie'},
         {'number': 5, 'text': 'najczęściej nie'}]},
]} 

step2 = {'id': '2', 'name': 'Technologie Komputerowe i Komunikacyjne',
 'questions': [
  {'number': 1, 
   'text': 'Czy używa Pan/Pani komputera?', 
   'type': 'select', 
   'options': [
      {'number': 1, 'text': 'tak'},
      {'number': 2, 'text': 'nie'}]},
  {'number': 2, 
   'text': 'Jesli tak, to od ilu lat używa Pan/Pani komputera', 
   'type': 'select', 
   'options': [
      {'number': 1, 'text': 'poniżej roku'},
      {'number': 2, 'text': '1 do 2'},
      {'number': 3, 'text': '2 do 5'},
      {'number': 4, 'text': '5 do 10'},
      {'number': 5, 'text': 'więcej niż 10 lat'}]},
  {'number': 3, 
   'text': 'Czy korzysta Pan/Pani z internetu sama lub za pośrednictwem innych osób?', 
   'type': 'branch', 
   'options': [
      {'number': 1, 'text': 'tak', 'nextstep': '3'},
      {'number': 2, 'text': 'nie, ta ankieta stanowi wyjątek', 'nextstep': '4'}]}
]}

step3 = {'id': '3', 'name': 'Technologie Komputerowe i Komunikacyjne',
 'questions': [
 {'number': 1, 
  'text': 'Od ilu lat używa Pan/Pani internetu', 
  'type': 'select', 
  'options': [
      {'number': 1, 'text': 'poniżej roku'},
      {'number': 2, 'text': '1 do 2'},
      {'number': 3, 'text': '2 do 5'},
      {'number': 4, 'text': '5 do 10'},
      {'number': 5, 'text': 'więcej niż 10 lat'}]}
]}

step4 = {'id': '4', 'name': 'Telemedycyna i Systemy e-Zdrowia',
 'questions': [
 {'number': 1, 
  'text': "Czy zetknął się Pan/Pani z pojęciem 'telemedycyna' bądź 'e-zdrowie'?", 
  'type': 'select', 
  'options': [
      {'number': 1, 'text': 'tak'},
      {'number': 2, 'text': 'nie'},
      {'number': 3, 'text': 'nie, pamiętam'}]}
]}


exports.steps = [step1, step2, step3, step4]


