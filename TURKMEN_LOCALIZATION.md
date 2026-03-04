# 🌍 Türkmen Dili - Lokalizasiýa Gollanmasy

## Barada

Bu programma doly türkmen diline terjime edildi. Ähli interfeýs tekstleri, bildirişler we habarlary türkmen dilinde görkezilýär.

## Terjime edilen bölümler

### ✅ Esasy ekranlar
- Doglan günler sanawy
- Doglan gün goşmak/üýtgetmek formasy
- Barada ekrany
- Boş ýagdaý habarlary

### ✅ Bildirişler
- Doglan gün bildirişi (ýary gijede)
- Ýatlatma bildirişi (bir gün öň)
- Aýlyk jemleýiş bildirişi

### ✅ Düwmeler we herekeller
- Ýatda sakla
- Ýatyr
- Poz
- Üýtget
- Goş
- Ýap

### ✅ Forma meýdançalary
- Ady
- Familiýasy
- Doglan senesi
- Gün, Aý, Ýyl

### ✅ Habarlar
- Üstünlik habarlary
- Ýalňyşlyk habarlary
- Tassyklama dialoglary
- Import habarlary

## Faýl gurluşy

```
locales/
├── tk.json          # Türkmen dili terjimesi
└── en.json          # Iňlis dili terjimesi (ätiýaçlyk)
```

## Täze terjime goşmak

### 1. Täze açar goşmak

`locales/tk.json` faýlyna täze açar goşuň:

```json
{
  "mySection": {
    "myKey": "Meniň tekstim"
  }
}
```

### 2. Kodda ulanmak

```typescript
import i18n from '../utils/i18n';

// Ýönekeý tekst
const text = i18n.t('mySection.myKey');

// Üýtgeýän bilen
const text = i18n.t('home.subtitle', { count: 5 });
```

## Terjime mysallary

### Esasy sözler
```json
{
  "common": {
    "save": "Ýatda sakla",
    "cancel": "Ýatyr",
    "delete": "Poz",
    "edit": "Üýtget",
    "add": "Goş"
  }
}
```

### Doglan günler
```json
{
  "home": {
    "title": "Doglan günler",
    "todayBirthday": "Şu gün! 🎉",
    "tomorrowBirthday": "Ertir! 🎂",
    "inDays": "{{days}} günden"
  }
}
```

### Bildirişler
```json
{
  "notifications": {
    "birthdayTitle": "🎉 Şu gün doglan gün!",
    "birthdayBody": "Şu gün {{name}} doglan güni!"
  }
}
```

## Dil üýtgetmek

Häzirki wagtda programma türkmen dilinde işleýär. Başga dil goşmak üçin:

### 1. Täze dil faýly dörediň

```bash
locales/ru.json  # Rus dili üçin
```

### 2. `utils/i18n.ts` faýlyny täzeläň

```typescript
import ru from '../locales/ru.json';

const i18n = new I18n({
  en,
  tk,
  ru,  // Täze dil
});

// Dili saýlamak
i18n.locale = 'ru';  // ýa-da 'tk', 'en'
```

## Aýratynlyklar

### Köplük görnüşler

Türkmen dilinde köplük görnüşler üçin:

```json
{
  "home": {
    "subtitle": "{{count}} doglan gün ýatda saklandy"
  }
}
```

### Üýtgeýänler

Tekstde üýtgeýän ulanmak:

```typescript
i18n.t('notifications.birthdayBody', { 
  name: 'Begenc Atayew' 
});
// Netije: "Şu gün Begenc Atayew doglan güni!"
```

### Şertli tekstler

```typescript
const getDaysText = () => {
  if (daysUntil === 0) return i18n.t('home.todayBirthday');
  if (daysUntil === 1) return i18n.t('home.tomorrowBirthday');
  return i18n.t('home.inDays', { days: daysUntil });
};
```

## Terjime edilen komponentler

### BirthdayCard
- At we familiýa görkezilişi
- Ýaş hasaplamasy
- Gün sanawy
- Herekeller (üýtget, poz)

### BirthdayForm
- Forma ady
- Meýdança atlary
- Ýer eýeleri
- Düwmeler

### HomeScreen
- Sözbaşy
- Boş ýagdaý
- Import habarlary
- Ýalňyşlyk habarlary

### ExploreScreen
- Aýratynlyklar sanawy
- Import formaty
- Wersiýa maglumaty

## Synag

### Türkmen dilini synag etmek

1. Programmany işe giriziň
2. Ähli ekranlary barlaň
3. Doglan gün goşuň
4. Bildirişleri barlaň
5. Import funksiýasyny synag ediň

### Barlamaly zatlar

- ✅ Ähli tekstler türkmen dilinde
- ✅ Bildirişler türkmen dilinde
- ✅ Ýalňyşlyk habarlary türkmen dilinde
- ✅ Forma tassyklamalary türkmen dilinde
- ✅ Sene formaty dogry (GG.AA.ÝÝÝÝ)

## Meşhur soraglar

### Näme üçin käbir tekstler iňlis dilinde?

Ähli tekstler türkmen diline terjime edildi. Eger iňlis dilinde tekst görseňiz, `locales/tk.json` faýlyna goşuň.

### Dili nädip üýtgetmeli?

`utils/i18n.ts` faýlynda:
```typescript
i18n.locale = 'tk';  // Türkmen
i18n.locale = 'en';  // Iňlis
```

### Täze terjime nädip goşmaly?

1. `locales/tk.json` faýlyna açar goşuň
2. Kodda `i18n.t('açar')` ulanyň
3. Programmany täzeden işe giriziň

## Goldaw

Terjime bilen bagly soraglar üçin:
- `locales/tk.json` faýlyna serediň
- `utils/i18n.ts` faýlyna serediň
- Mysallar üçin komponentlere serediň

---

**Bellik**: Bu programma doly türkmen dilinde işleýär we ähli aýratynlyklar türkmen dilinde elýeterlidir! 🇹🇲
