/* מאגר מילים עברית–אנגלית לגילאי 8-15, מקובץ לפי נושא.
   הקיבוץ אינו קישוט: המסיחים נבחרים מתוך אותו נושא, וזה מה שהופך את השאלה לאמיתית.
   כלל ברזל: אף מילה לא מופיעה פעמיים עם תרגום שונה — אחרת לשאלה יש שתי תשובות נכונות. */
var WORDS = {

"חיות": [
["כלב","dog"],["חתול","cat"],["סוס","horse"],["פרה","cow"],["כבשה","sheep"],["עז","goat"],
["חזיר","pig"],["תרנגולת","hen"],["ברווז","duck"],["אווז","goose"],["תרנגול הודו","turkey"],
["ארנב","rabbit"],["עכברון","mouse"],["חולדה","rat"],["אוגר","hamster"],["סנאי","squirrel"],
["שועל","fox"],["זאב","wolf"],["דוב","bear"],["אריה","lion"],["טיגריס","tiger"],["ברדלס","cheetah"],
["פיל","elephant"],["ג'ירפה","giraffe"],["זברה","zebra"],["קוף","monkey"],["גורילה","gorilla"],
["גמל","camel"],["קנגורו","kangaroo"],["פנדה","panda"],["קואלה","koala"],["היפופוטם","hippo"],
["קרנף","rhino"],["צבי","deer"],["איל","elk"],["חמור","donkey"],["פרד","mule"],["למה חיה","llama"],
["דגיג","fish"],["כריש","shark"],["לווייתן","whale"],["דולפין","dolphin"],["תמנון","octopus"],
["סרטן","crab"],["מדוזה","jellyfish"],["כוכב ים","starfish"],["צב","turtle"],["צפרדע","frog"],
["נחש","snake"],["לטאה","lizard"],["תנין","crocodile"],["דינוזאור","dinosaur"],["זיקית","chameleon"],
["ציפור","bird"],["נשר","eagle"],["ינשוף","owl"],["יונה","pigeon"],["דרור","sparrow"],
["תוכי","parrot"],["פינגווין","penguin"],["טווס","peacock"],["עורב","crow"],["שחף","seagull"],
["ברבור","swan"],["חסידה","stork"],["עטלף","bat"],["קיפוד","hedgehog"],["דביבון","raccoon"],
["פרפר","butterfly"],["דבורה","bee"],["צרעה","wasp"],["נמלה","ant"],["זבוב","fly"],
["יתוש","mosquito"],["עכביש","spider"],["חיפושית","beetle"],["חילזון","snail"],["תולעת","worm"],
["חגב","grasshopper"],["ג'וק","cockroach"],["זחל","caterpillar"],["גחלילית","firefly"],
["גור","puppy"],["חתלתול","kitten"],["אפרוח","chick"],["עגל","calf"],["סייח","foal"],
["זנב","tail"],["כנף","wing"],["פרווה","fur"],["נוצה","feather"],["טופר","claw"],
["קרן","horn"],["חדק","trunk"],["מקור","beak"],["קשקש","scale"],["רעמה","mane"],
["כלוב","cage"],["קן","nest"],["מאורה","den"],["עדר","herd"],["להקה","flock"]
],

"אוכל": [
["לחם","bread"],["חלה","challah"],["פיתה","pita"],["בגט","baguette"],["עוגה","cake"],["עוגייה","cookie"],
["גלידה","ice cream"],["שוקולד","chocolate"],["ממתק","candy"],["סוכרייה","lollipop"],["דבש","honey"],
["ריבה","jam"],["חמאה","butter"],["גבינה","cheese"],["ביצה","egg"],["חלב","milk"],
["יוגורט","yogurt"],["שמנת","cream"],["בשר","meat"],["עוף מבושל","chicken"],["דג מבושל","cooked fish"],
["נקניקייה","hot dog"],["המבורגר","hamburger"],["פיצה","pizza"],["פסטה","pasta"],["אורז","rice"],
["תפוח אדמה","potato"],["צ'יפס","fries"],["מרק","soup"],["סלט","salad"],["כריך","sandwich"],
["חביתה","omelette"],["פנקייק","pancake"],["דגני בוקר","cereal"],["צנים","toast"],["פשטידה","pie"],
["תפוח","apple"],["בננה","banana"],["תפוז","orange fruit"],["לימון","lemon"],["ענב","grape"],
["אבטיח","watermelon"],["מלון מתוק","melon"],["תות","strawberry"],["דובדבן","cherry"],["אפרסק","peach"],
["אגס","pear"],["שזיף","plum"],["משמש","apricot"],["אננס","pineapple"],["מנגו","mango"],
["קיווי","kiwi"],["רימון","pomegranate"],["תמר","date fruit"],["תאנה","fig"],["אבוקדו","avocado"],
["פטל","raspberry"],["אוכמנית","blueberry"],["קוקוס","coconut"],["אשכולית","grapefruit"],["קלמנטינה","tangerine"],
["עגבנייה","tomato"],["מלפפון","cucumber"],["גזר","carrot"],["בצל","onion"],["שום","garlic"],
["פלפל","pepper"],["חסה","lettuce"],["כרוב","cabbage"],["תירס","corn"],["אפונה","peas"],
["פטרייה","mushroom"],["חציל","eggplant"],["קישוא","zucchini"],["דלעת","pumpkin"],["ברוקולי","broccoli"],
["סלרי","celery"],["צנון","radish"],["בטטה","sweet potato"],["שעועית","beans"],["עדשים","lentils"],
["מים","water"],["מיץ","juice"],["תה","tea"],["קפה","coffee"],["סוכר","sugar"],
["מלח","salt"],["קמח","flour"],["שמן","oil"],["אגוז","nut"],["שקד","almond"],
["חמאת בוטנים","peanut butter"],["רוטב","sauce"],["תבלין","spice"],["חומץ","vinegar"],["בצק","dough"],
["ארוחה","meal"],["ארוחת בוקר","breakfast"],["ארוחת צהריים","lunch"],["ארוחת ערב","dinner"],["חטיף","snack"],
["טעים","tasty"],["מתוק","sweet"],["חמוץ","sour"],["מלוח","salty"],["חריף","spicy"],["מר","bitter"]
],

"משפחה ואנשים": [
["אמא","mother"],["אבא","father"],["הורים","parents"],["אח","brother"],["אחות משפחתית","sister"],
["סבא","grandfather"],["סבתא","grandmother"],["דוד","uncle"],["דודה","aunt"],["בן דוד","cousin"],
["בן","son"],["בת","daughter"],["תינוק","baby"],["ילד","boy"],["ילדה","girl"],
["איש","man"],["אישה","woman"],["חבר","friend"],["שכן","neighbor"],["אורח","guest"],
["משפחה","family"],["תאומים","twins"],["נכד","grandson"],["נכדה","granddaughter"],["דור","generation"],
["אדם","person"],["אנשים","people"],["חבורה","group"],["צוות","crew"],["זוג","couple"],
["מבוגר","adult"],["נער","teenager"],["זקן","old man"],["שם","name"],["גיל","age"],
["חתונה","wedding"],["יום הולדת","birthday"],["מסיבה","party"],["מתנה","gift"],["הפתעה","surprise"],
["אח קטן","little brother"],["בכור","eldest"],["יתום","orphan"],["גיס","brother-in-law"],["חתן","groom"],
["כלה","bride"],["ידיד נפש","best friend"],["יריב","rival"],["שותף","partner"],["מנהיג","leader"],
["גיבור","hero"],["זר","stranger"],["קרוב משפחה","relative"],["ילדות","childhood"],
["חברות","friendship"],["אמון","trust"],["סוד","secret"],["הבטחה","promise"],["ריב","quarrel"]
],

"גוף": [
["ראש","head"],["שיער","hair"],["פנים","face"],["עין","eye"],["אוזן","ear"],
["אף","nose"],["פה","mouth"],["שן","tooth"],["לשון","tongue"],["שפה תחתונה","lip"],
["צוואר","neck"],["כתף","shoulder"],["יד","hand"],["זרוע","arm"],["מרפק","elbow"],
["אצבע","finger"],["ציפורן","nail"],["חזה","chest"],["גב","back"],["בטן","stomach"],
["רגל","leg"],["ברך","knee"],["כף רגל","foot"],["עקב","heel"],["עור","skin"],
["לב","heart"],["מוח","brain"],["עצם","bone"],["דם","blood"],["שריר","muscle"],
["גובה","height"],["משקל","weight"],["חיוך","smile"],["דמעה","tear"],["נשימה","breath"],
["ריאה","lung"],["כבד איבר","liver"],["כליה","kidney"],["גרון","throat"],["סנטר","chin"],
["לחי","cheek"],["מצח","forehead"],["גבה","eyebrow"],["ריס","eyelash"],["אגודל","thumb"],
["מפרק","joint"],["עצב בגוף","nerve"],["וריד","vein"],["שלד","skeleton"],["גולגולת","skull"],
["צלע גוף","rib"],["קרסול","ankle"],["פרק כף יד","wrist"],["בוהן","toe"],["כף יד","palm"]
],

"ביגוד": [
["חולצה","shirt"],["טי-שירט","t-shirt"],["מכנסיים","pants"],["מכנסיים קצרים","shorts"],["חצאית","skirt"],
["שמלה","dress"],["מעיל","coat"],["ג'קט","jacket"],["סוודר","sweater"],["קפוצ'ון","hoodie"],
["גרביים","socks"],["נעליים","shoes"],["מגפיים","boots"],["סנדלים","sandals"],["כפכפים","flip-flops"],
["כובע","hat"],["כפפות","gloves"],["צעיף","scarf"],["חגורה","belt"],["עניבה","necktie"],
["פיג'מה","pajamas"],["בגד ים","swimsuit"],["תיק","bag"],["ילקוט","backpack"],["ארנק","wallet"],
["משקפיים","glasses"],["שעון יד","watch"],["טבעת","ring"],["שרשרת","necklace"],["כפתור","button"],
["כיס","pocket"],["רוכסן","zipper"],["מידה","size"],["בד","fabric"],["צמר","wool"],
["כותנה","cotton"],["משי","silk"],["עור מעובד","leather"],["ג'ינס","jeans"],["חליפה","suit"],
["מדים","uniform"],["גלימה","robe"],["צמיד","bracelet"],["עגיל","earring"],["סיכה","pin"],
["שרוול","sleeve"],["צווארון","collar"],["שרוך","shoelace"],["עקבים","high heels"],["מטרייה","umbrella"],
["תפר","seam"],["כתם","stain"],["קמט","wrinkle"],["אופנה","fashion"]
],

"בית": [
["בית","house"],["דירה","apartment"],["חדר","room"],["מטבח","kitchen"],["סלון","living room"],
["חדר שינה","bedroom"],["חדר אמבטיה","bathroom"],["מרפסת","balcony"],["גינה","garden"],["חצר","yard"],
["מרתף","basement"],["גג","roof"],["קיר","wall"],["רצפה","floor"],["תקרה","ceiling"],
["דלת","door"],["חלון","window"],["מדרגות","stairs"],["מעלית","elevator"],["מפתח","key"],
["שולחן","table"],["כיסא","chair"],["ספה","sofa"],["מיטה","bed"],["ארון","closet"],
["מדף","shelf"],["מגירה","drawer"],["מראה","mirror"],["שטיח","carpet"],["וילון","curtain"],
["מנורה","lamp"],["נורה","light bulb"],["שעון קיר","clock"],["תמונה ממוסגרת","picture"],["אגרטל","vase"],
["מקרר","fridge"],["תנור","oven"],["מיקרוגל","microwave"],["כיור","sink"],["מכונת כביסה","washing machine"],
["מדיח כלים","dishwasher"],["מייבש","dryer"],["מזגן","air conditioner"],["תריס","shutter"],["פעמון דלת","doorbell"],
["צלחת","plate"],["כוס","cup"],["מזלג","fork"],["סכין","knife"],["כף","spoon"],
["סיר","pot"],["מחבת","pan"],["קערה","bowl"],["בקבוק","bottle"],["מגבת","towel"],
["סבון","soap"],["מברשת שיניים","toothbrush"],["מסרק","comb"],["שמיכה","blanket"],["כרית","pillow"],
["סדין","sheet"],["מזרן","mattress"],["פח אשפה","trash can"],["מטאטא","broom"],["דלי","bucket"],
["פטיש","hammer"],["מברג","screwdriver"],["חבל כביסה","clothesline"],["גדר","fence"],
["ארובה","chimney"],["אח בסלון","fireplace"],["מרפסת שמש","porch"],["שביל","path"],["תיבת דואר","mailbox"],
["מקלחת","shower"],["אמבטיה","bathtub"],["ברז","faucet"],["מגהץ","iron"],["שואב אבק","vacuum"]
],

"בית ספר": [
["בית ספר","school"],["כיתה","classroom"],["תלמיד","student"],["מורה","teacher"],["מנהל","principal"],
["שיעור","lesson"],["הפסקה","recess"],["שיעורי בית","homework"],["מבחן","test"],["ציון","grade"],
["ספר","book"],["מחברת","notebook"],["דף","page"],["עיפרון","pencil"],["עט","pen"],
["מחק","eraser"],["מחדד","sharpener"],["סרגל","ruler"],["מספריים","scissors"],["דבק","glue"],
["צבעים","crayons"],["טוש","marker"],["לוח כיתה","board"],["גיר","chalk"],["תיק בית ספר","schoolbag"],
["מילון","dictionary"],["מפה","map"],["גלובוס","globe"],["ספרייה","library"],["מעבדה","laboratory"],
["חשבון","math"],["מדע","science"],["היסטוריה","history"],["גיאוגרפיה","geography"],["אנגלית","English"],
["שאלה","question"],["תשובה","answer"],["מילה","word"],["משפט","sentence"],["אות","letter"],
["מספר","number"],["סיפור","story"],["רעיון","idea"],["טעות","mistake"],["תרגיל","exercise"],
["מחשבון","calculator"],["קלסר","binder"],["מדבקה","sticker"],["תעודה","report card"],["מערכת שעות","timetable"],
["חוג","club"],["טיול שנתי","field trip"],["מגרש בית ספר","schoolyard"],["פעמון בית ספר","school bell"],["נוכחות","attendance"],
["שיעור פרטי","tutoring"],["מצגת","presentation"],["פרויקט","project"],["חופשה","vacation"],
["חינוך","education"],["ידע","knowledge"],["כישרון","talent"],["מאמץ","effort"],["הצלחה","success"],
["כישלון","failure"],["ריכוז","concentration"],["סקרנות","curiosity"]
],

"צבעים וצורות": [
["אדום","red"],["כחול","blue"],["צהוב","yellow"],["ירוק","green"],["שחור","black"],
["לבן","white"],["כתום","orange color"],["סגול","purple"],["ורוד","pink"],["חום","brown"],
["אפור","gray"],["כסוף","silver"],["זהוב","gold"],["תכלת","light blue"],["בהיר","bright"],
["כהה","dark"],["צבעוני","colorful"],["שקוף","transparent"],["בז'","beige"],["טורקיז","turquoise"],
["ארגמן","crimson"],["חרדל","mustard"],["פסטל","pastel"],["ניאון","neon"],["דהוי","faded"],
["עיגול","circle"],["ריבוע","square shape"],["משולש","triangle"],["מלבן","rectangle"],["כוכב מצויר","star shape"],
["לב מצויר","heart shape"],["קו","line"],["נקודה","dot"],["חץ","arrow"],["קובייה","cube"],
["כדור צורה","sphere"],["עגול","round"],["ישר","straight"],["עקום","curved"],["שטוח","flat"],
["חרוט","cone"],["גליל","cylinder"],["מעוין","diamond"],["מחומש","pentagon"],["משושה","hexagon"],
["סימטרי","symmetric"],["זווית","angle"],["דגם","pattern"]
],

"זמן": [
["זמן","time"],["שעה","hour"],["דקה","minute"],["שנייה","second"],["יום","day"],
["שבוע","week"],["חודש","month"],["שנה","year"],["בוקר","morning"],["צהריים","noon"],
["אחר הצהריים","afternoon"],["ערב","evening"],["לילה","night"],["חצות","midnight"],["היום","today"],
["מחר","tomorrow"],["אתמול","yesterday"],["עכשיו","now"],["מאוחר","late"],["מוקדם","early"],
["יום ראשון","Sunday"],["יום שני","Monday"],["יום שלישי","Tuesday"],["יום רביעי","Wednesday"],["יום חמישי","Thursday"],
["יום שישי","Friday"],["יום שבת","Saturday"],["ינואר","January"],["פברואר","February"],["מרץ","March"],
["אפריל","April"],["מאי","May"],["יוני","June"],["יולי","July"],["אוגוסט","August"],
["ספטמבר","September"],["אוקטובר","October"],["נובמבר","November"],["דצמבר","December"],
["אביב","spring"],["קיץ","summer"],["סתיו","autumn"],["חורף","winter"],["עונה","season"],
["תמיד","always"],["לפעמים","sometimes"],["אף פעם","never"],["לעיתים קרובות","often"],["שוב","again"],
["מיד","immediately"],["בקרוב","soon"],["פעם","once"],["לתמיד","forever"],["רגע","moment"],
["עבר","past"],["הווה","present"],["עתיד","future"],["תאריך","date"],["לוח שנה","calendar"],
["מאה שנים","century"],["עשור","decade"],["סוף שבוע","weekend"],["יום חול","weekday"],
["שעון מעורר","alarm clock"],["בזמן","on time"],["איחור","delay"]
],

"טבע ומזג אוויר": [
["שמש","sun"],["ירח","moon"],["כוכב בשמיים","star"],["שמיים","sky"],["ענן","cloud"],
["גשם","rain"],["שלג","snow"],["ברד","hail"],["רוח","wind"],["סערה","storm"],
["ברק","lightning"],["רעם","thunder"],["קשת בענן","rainbow"],["ערפל","fog"],["טל","dew"],
["חם","hot"],["קר","cold"],["חמים","warm"],["קריר","cool"],["רטוב","wet"],
["יבש","dry"],["מזג אוויר","weather"],["טמפרטורה","temperature"],["צל","shade"],["אור","light"],
["עץ","tree"],["פרח","flower"],["עלה","leaf"],["ענף","branch"],["שורש","root"],
["דשא","grass"],["יער","forest"],["הר","mountain"],["גבעה","hill"],["עמק","valley"],
["מדבר","desert"],["חוף","beach"],["ים","sea"],["אוקיינוס","ocean"],["אגם","lake"],
["נהר","river"],["נחל","stream"],["מפל","waterfall"],["אי","island"],["מערה","cave"],
["אבן","stone"],["סלע","rock"],["חול","sand"],["אדמה","soil"],["בוץ","mud"],
["אש","fire"],["עשן","smoke"],["קרח","ice"],["אוויר","air"],["גל","wave"],
["כדור הארץ","Earth"],["עולם","world"],["טבע","nature"],["חלל","space"],["כוכב לכת","planet"],
["זרע","seed"],["ניצן","bud"],["קוץ","thorn"],["גזע עץ","tree trunk"],["צמח","plant"],
["אצה","seaweed"],["אלמוג","coral"],["קרחון","glacier"],["הר געש","volcano"],
["רעידת אדמה","earthquake"],["שיטפון","flood"],["בצורת","drought"],["טורנדו","tornado"],["צונאמי","tsunami"],
["שקיעה","sunset"],["זריחה","sunrise"],["דמדומים","twilight"],["אופק","horizon"],["צוק","cliff"],
["ביצה בטבע","swamp"],["מעיין","spring water"],["בריכה טבעית","pond"],["שדה","field"],["אחו","meadow"]
],

"תחבורה": [
["מכונית","car"],["אוטובוס","bus"],["רכבת","train"],["מטוס","airplane"],["אונייה","ship"],
["סירה","boat"],["אופניים","bicycle"],["אופנוע","motorcycle"],["משאית","truck"],["מונית","taxi"],
["אמבולנס","ambulance"],["כבאית","fire truck"],["מסוק","helicopter"],["רקטה","rocket"],["צוללת","submarine"],
["קורקינט","scooter"],["גלגיליות","roller skates"],["עגלה","cart"],["גלגל","wheel"],["מנוע","engine"],
["דרך","road"],["כביש מהיר","highway"],["רחוב","street"],["מדרכה","sidewalk"],["גשר","bridge"],
["מנהרה","tunnel"],["תחנה","station"],["שדה תעופה","airport"],["נמל","port"],["חנייה","parking"],
["כרטיס","ticket"],["נהג","driver"],["נוסע","passenger"],["מפת דרכים","road map"],["רמזור","traffic light"],
["הגה","steering wheel"],["דוושה","pedal"],["בלם","brake"],["צמיג","tire"],["דלק","fuel"],
["מזוודה","suitcase"],["טיסה","flight"],["נסיעה","ride"],["מסלול","route"],["פקק תנועה","traffic jam"],
["תמרור","road sign"],["מעבר חצייה","crosswalk"],["צומת","junction"],["רציף","platform"],["קרון","train car"],
["מפרש","sail"],["עוגן","anchor"],["מדחף","propeller"],["רכבל","cable car"]
],

"ספורט ומשחקים": [
["ספורט","sport"],["כדורגל","soccer"],["כדורסל","basketball"],["טניס","tennis"],["שחייה","swimming"],
["ריצה","running"],["קפיצה","jumping"],["התעמלות","gymnastics"],["ריקוד חופשי","dancing"],["אגרוף","boxing"],
["גלישת גלים","surfing"],["סקי","skiing"],["רכיבה","riding"],["טיפוס","climbing"],["יוגה","yoga"],
["משחק","game"],["צעצוע","toy"],["בובה","doll"],["פאזל","puzzle"],["קלפים","cards"],
["שחמט","chess"],["כדור","ball"],["חבל","rope"],["נדנדה","swing"],["מגלשה","slide"],
["קבוצת ספורט","team"],["שחקן ספורט","player"],["מאמן","coach"],["שופט","referee"],["מגרש ספורט","sports field"],
["גביע","trophy"],["מדליה","medal"],["ניצחון","victory"],["הפסד","loss"],["תיקו","draw"],
["אליפות","championship"],["תחרות","competition"],["אימון","practice"],["שיא","record"],["נקודה בניקוד","point"],
["כדורעף","volleyball"],["בייסבול","baseball"],["הוקי","hockey"],["גולף","golf"],["חתירה","rowing"],
["מרתון","marathon"],["אולימפיאדה","Olympics"],["שער","goal"],["בעיטה","kick"],["מסירה","pass"],
["חימום","warm-up"],["כושר","fitness"],["מתיחות","stretching"],["חילוף","substitution"],
["עפיפון","kite"],["מחבואים","hide and seek"],["תופסת","tag game"],["מרוץ","race"]
],

"מקצועות": [
["רופא","doctor"],["אחות רפואית","nurse"],["מורה לאנגלית","English teacher"],["שוטר","police officer"],["כבאי","firefighter"],
["טייס","pilot"],["דייל","flight attendant"],["חייל","soldier"],["מלצר","waiter"],["טבח","cook"],
["אופה","baker"],["קצב","butcher"],["חקלאי","farmer"],["דייג","fisherman"],["רועה","shepherd"],
["נגר","carpenter"],["חשמלאי","electrician"],["אינסטלטור","plumber"],["מהנדס","engineer"],["אדריכל","architect"],
["מדען","scientist"],["ממציא","inventor"],["מתכנת","programmer"],["עיתונאי","journalist"],["סופר","writer"],
["צייר","painter"],["זמר","singer"],["נגן","musician"],["שחקן קולנוע","actor"],["רקדן","dancer"],
["צלם","photographer"],["ספר לשיער","hairdresser"],["רופא שיניים","dentist"],["וטרינר","vet"],["עורך דין","lawyer"],
["מוכר","seller"],["דוור","mailman"],["שומר","guard"],["מנקה","cleaner"],["מזכירה","secretary"],
["צבעי","house painter"],["מכונאי","mechanic"],["נהג אוטובוס","bus driver"],["ספרן","librarian"],
["גנן","gardener"],["חייט","tailor"],["סנדלר","shoemaker"],["צורף","jeweler"],["שען","watchmaker"],
["עבודה","job"],["משרד","office"],["כסף","money"],["משכורת","salary"],["מקצוע","profession"],
["ראיון","interview"],["קידום","promotion"],["פנסיה","retirement"],["מנהל עבודה","manager"],["עובד","worker"]
],

"מקומות בעיר": [
["עיר","city"],["כפר","village"],["מדינה","country"],["שכונה","neighborhood"],["כיכר עיר","town square"],
["חנות","shop"],["סופרמרקט","supermarket"],["שוק","market"],["קניון","mall"],["מאפייה","bakery"],
["מסעדה","restaurant"],["בית קפה","cafe"],["מלון","hotel"],["בית חולים","hospital"],["מרפאה","clinic"],
["בית מרקחת","pharmacy"],["בנק","bank"],["דואר","post office"],["תחנת משטרה","police station"],["ספרייה עירונית","public library"],
["מוזיאון","museum"],["תיאטרון","theater"],["קולנוע","cinema"],["גן חיות","zoo"],["פארק","park"],
["גן שעשועים","playground"],["בריכה","pool"],["אצטדיון","stadium"],["כנסייה","church"],["בית כנסת","synagogue"],
["מגדל","tower"],["ארמון","palace"],["טירה","castle"],["מבצר","fortress"],["בניין","building"],
["מפעל","factory"],["חווה","farm"],["אורווה","stable"],["מחסן","warehouse"],["מגרש חנייה","parking lot"],
["בית עלמין","cemetery"],["גן ציבורי","public garden"],["מזרקה","fountain"],["פסל ציבורי","monument"],["שדרה","boulevard"],
["סמטה","alley"],["תחנת דלק","gas station"],["מספרה","barbershop"],["מכבסה","laundry"],
["מרכז קהילתי","community center"],["חוף רחצה","bathing beach"],["מרינה","marina"]
],

"פעלים": [
["ללכת","to walk"],["לרוץ","to run"],["לקפוץ","to jump"],["לשבת","to sit"],["לעמוד","to stand"],
["לשכב","to lie down"],["לישון","to sleep"],["להתעורר","to wake up"],["לקום","to get up"],["לנוח","to rest"],
["לאכול","to eat"],["לשתות","to drink"],["לבשל","to cook"],["לאפות","to bake"],["לטעום","to taste"],
["לראות","to see"],["להסתכל","to look"],["לשמוע","to hear"],["להקשיב","to listen"],["להריח","to smell"],
["לגעת","to touch"],["להרגיש","to feel"],["לחשוב","to think"],["לדעת","to know"],["להבין","to understand"],
["לזכור","to remember"],["לשכוח","to forget"],["ללמוד","to learn"],["ללמד","to teach"],["לקרוא","to read"],
["לכתוב","to write"],["לצייר","to draw"],["לספור","to count"],["לחשב","to calculate"],["לבדוק","to check"],
["לדבר","to speak"],["לומר","to say"],["לשאול","to ask"],["לענות","to answer"],["לספר","to tell"],
["לצעוק","to shout"],["ללחוש","to whisper"],["לשיר","to sing"],["לצחוק","to laugh"],["לבכות","to cry"],
["לחייך","to smile"],["לשחק","to play"],["לרקוד","to dance"],["לנגן","to play music"],["לצפות","to watch"],
["לפתוח","to open"],["לסגור","to close"],["לתת","to give"],["לקחת","to take"],["להביא","to bring"],
["לשלוח","to send"],["לקבל","to receive"],["לקנות","to buy"],["למכור","to sell"],["לשלם","to pay"],
["לעזור","to help"],["לאהוב","to love"],["לשנוא","to hate"],["לרצות","to want"],["להזדקק","to need"],
["לחכות","to wait"],["למצוא","to find"],["לחפש","to search"],["לאבד","to lose something"],["להסתיר","to hide"],
["לבוא","to come"],["ללכת לכיוון","to go"],["להיכנס","to enter"],["לצאת","to exit"],["לחזור","to return"],
["לעלות","to go up"],["לרדת","to go down"],["ליפול","to fall"],["לעוף","to fly"],["לשחות","to swim"],
["לנהוג","to drive"],["לרכוב","to ride"],["לנסוע","to travel"],["לטייל","to hike"],["לבקר","to visit"],
["לעבוד","to work"],["לבנות","to build"],["לתקן","to fix"],["לשבור","to break"],["לחתוך","to cut"],
["לנקות","to clean"],["לשטוף","to wash"],["לסדר","to arrange"],["למלא","to fill"],["לרוקן","to empty"],
["להתחיל","to start"],["לסיים","to finish"],["להמשיך","to continue"],["לעצור","to stop"],["לנסות","to try"],
["לנצח","to win"],["להפסיד במשחק","to lose a game"],["להחליט","to decide"],["לבחור","to choose"],["לשנות","to change"],
["לזרוק","to throw"],["לתפוס","to catch"],["למשוך","to pull"],["לדחוף","to push"],["להרים","to lift"],
["להוריד","to lower"],["לסחוב","to carry"],["לתלות","to hang"],["לקשור","to tie"],["להתיר","to untie"],
["לקפל","to fold"],["למתוח","to stretch"],["ללחוץ","to press"],["לסובב","to turn"],["לנער","to shake"],
["לטפס","to climb"],["לזחול","to crawl"],["להחליק","to slide"],["להסתובב","to spin"],["לרעוד","to tremble"],
["לנשום","to breathe"],["לבלוע","to swallow"],["ללעוס","to chew"],["לנשוך","to bite"],["לנשק","to kiss"],
["לחבק","to hug"],["ללטף","to pet"],["להצביע","to point"],["לנופף","to wave"],["למחוא כפיים","to clap"],
["לחלום","to dream"],["לקוות","to hope"],["לפחד","to fear"],["לדאוג","to worry"],["להתגעגע","to miss"],
["להאמין","to believe"],["לשקר","to lie"],["להודות","to admit"],["להתנצל","to apologize"],["לסלוח","to forgive"],
["להזמין","to invite"],["לארח","to host"],["להיפגש","to meet"],["להיפרד","to say goodbye"],["לחגוג","to celebrate"],
["לתכנן","to plan"],["לארגן","to organize"],["לבזבז","to waste"],["לחסוך","to save money"],["להשקיע","to invest"],
["לגדול","to grow"],["להזדקן","to age"],["למות","to die"],["להיוולד","to be born"],["לחיות","to live"],
["להשוות","to compare"],["למדוד","to measure"],["לשקול","to weigh"],["לחלק","to divide"],["לחבר מספרים","to add"],
["לגלות","to discover"],["להמציא","to invent"],["לחקור","to research"],["לבחון","to examine"],["להוכיח","to prove"],
["לצלם","to photograph"],["להקליט","to record"],["לשדר","to broadcast"],["לפרסם","to publish"],["להדפיס","to print"],
["להוריד קובץ","to download"],["להעלות קובץ","to upload"],["ללחוץ על כפתור","to click"],["להקליד","to type"],["לשמור קובץ","to save a file"]
],

"שמות תואר": [
["גדול","big"],["קטן","small"],["ארוך","long"],["קצר","short"],["גבוה","tall"],
["נמוך","low"],["רחב","wide"],["צר","narrow"],["עבה","thick"],["דק","thin"],
["כבד","heavy"],["קליל","light in weight"],["חזק","strong"],["חלש","weak"],["מהיר","fast"],
["איטי","slow"],["חדש","new"],["ישן","old thing"],["צעיר","young"],["קשיש","elderly"],
["טוב","good"],["רע","bad"],["יפה","beautiful"],["מכוער","ugly"],["נקי","clean"],
["מלוכלך","dirty"],["מלא","full"],["ריק","empty"],["פתוח","open"],["סגור","closed"],
["רך","soft"],["קשה למגע","hard"],["חלק","smooth"],["מחוספס","rough"],["חד","sharp"],
["פשוט","easy"],["מסובך","difficult"],["נכון","correct"],["שגוי","wrong"],["אמיתי","real"],
["מצחיק","funny"],["משעמם","boring"],["מעניין","interesting"],["חשוב","important"],["מיוחד","special"],
["רגיל","normal"],["מוזר","strange"],["שקט","quiet"],["רועש","loud"],["בטוח","safe"],
["מסוכן","dangerous"],["עשיר","rich"],["עני","poor"],["חכם","smart"],["טיפשי","silly"],
["אמיץ","brave"],["מבוהל","scared"],["נחמד","nice"],["גס רוח","rude"],["מנומס","polite"],
["עצלן","lazy"],["חרוץ","hardworking"],["סבלני","patient"],["זהיר","careful"],["רשלני","careless"],
["מוכן","ready"],["עסוק","busy"],["פנוי","free"],["בריא","healthy"],["חולה","sick"],
["עייף","tired"],["ער","awake"],["רעב","hungry"],["שבע","not hungry"],["צמא","thirsty"],
["חי","alive"],["מת","dead"],["מפורסם","famous"],["אלמוני","unknown"],["יקר","expensive"],
["זול","cheap"],["חינם","free of charge"],["קרוב","near"],["רחוק","far"],["גלוי","visible"],
["נסתר","hidden"],["ברור","clear"],["מעורפל","vague"],["מדויק","exact"],["משוער","approximate"],
["שלם","whole"],["שבור","broken"],["חדיש","modern"],["עתיק","ancient"],["טרי","fresh"],
["מקולקל","spoiled"],["מיובש","dried"],["קפוא","frozen"],["רותח","boiling"],
["מתוח","tense"],["רגוע","relaxed"],["גאה","proud"],["צנוע","modest"],["נדיב","generous"],
["קמצן","stingy"],["ישר בהתנהגות","honest"],["רמאי","dishonest"],["נאמן","loyal"],
["עקשן","stubborn"],["גמיש","flexible"],["רגיש","sensitive"],["אדיש","indifferent"],
["מבולגן","messy"],["מסודר","tidy"],["צפוף","crowded"],["מרווח","spacious"]
],

"רגשות": [
["שמח","happy"],["עצוב","sad"],["כועס","angry"],["מפוחד","afraid"],["מופתע","surprised"],
["נרגש","excited"],["שליו","calm"],["לחוץ","nervous"],["נבוך","embarrassed"],
["מאוכזב","disappointed"],["בודד","lonely"],["אוהב","loving"],["מקנא","jealous"],["מבולבל","confused"],
["בטוח בעצמו","confident"],["ביישן","shy"],["סקרן","curious"],["משועמם","bored"],["מרוצה","satisfied"],
["אושר","happiness"],["עצב","sadness"],["כעס","anger"],["פחד","fear"],["אהבה","love"],
["תקווה","hope"],["חלום","dream"],["צחוק","laughter"],["דאגה","worry"],["הפתעה גדולה","big surprise"],
["געגוע","longing"],["קנאה","envy"],["בושה","shame"],["גאווה","pride"],["רחמים","pity"],
["הקלה","relief"],["תסכול","frustration"],["התלהבות","enthusiasm"],["שעמום","boredom"],["מתח נפשי","tension"],
["אומץ","courage"],["ביטחון","confidence"],["ספק","doubt"],["חרטה","regret"],["הודיה","gratitude"]
],

"טכנולוגיה": [
["מחשב","computer"],["מסך","screen"],["מקלדת","keyboard"],["עכבר מחשב","computer mouse"],["טלפון","phone"],
["סמארטפון","smartphone"],["טאבלט","tablet"],["אוזניות","headphones"],["רמקול","speaker"],["מצלמה","camera"],
["טלוויזיה","television"],["רדיו","radio"],["שעון חכם","smartwatch"],["מדפסת","printer"],["סוללה","battery"],
["מטען","charger"],["כבל","cable"],["אינטרנט","internet"],["אתר","website"],["אפליקציה","app"],
["משחק מחשב","video game"],["רובוט","robot"],["קובץ","file"],["תיקיית מחשב","folder"],["סיסמה","password"],
["הודעה","message"],["דואר אלקטרוני","email"],["סרטון","video"],["תצלום","photo"],["מוזיקה","music"],
["רשת חברתית","social network"],["ענן אחסון","cloud storage"],["שרת","server"],["דיסק","disk"],["זיכרון","memory"],
["מעבד","processor"],["תוכנה","software"],["חומרה","hardware"],["וירוס","virus"],["גיבוי","backup"],
["בינה מלאכותית","artificial intelligence"],["אלגוריתם","algorithm"],["קוד","code"],["עדכון","update"],
["חיישן","sensor"],["רחפן","drone"],["מדפסת תלת ממד","3D printer"],["מציאות מדומה","virtual reality"],["טעינה","charging"]
],

"אומנות ומוזיקה": [
["מוזיקה קלאסית","classical music"],["שיר","song"],["צליל","sound"],["קול","voice"],["מנגינה","melody"],
["תוף","drum"],["גיטרה","guitar"],["פסנתר","piano"],["כינור","violin"],["חליל","flute"],
["חצוצרה","trumpet"],["מקהלה","choir"],["תזמורת","orchestra"],["הופעה","concert"],["במה","stage"],
["ציור","painting"],["מכחול","brush"],["צבע לציור","paint"],["פסל","statue"],["יצירה","artwork"],
["סרט","movie"],["רומן","novel"],["שירה","poetry"],["ריקוד עממי","folk dance"],["הצגה","play show"],
["אומן","artist"],["יצירתיות","creativity"],["דמיון","imagination"],["סגנון","style"],["השראה","inspiration"],
["תווים","musical notes"],["קצב מוזיקלי","rhythm"],["מקצב","beat"],["הרמוניה","harmony"],["סולם מוזיקלי","musical scale"],
["מלחין","composer"],["מנצח","conductor"],["קהל","audience"],["מחיאות כפיים","applause"],
["גלריה","gallery"],["תערוכה","exhibition"],["רישום","sketch"],["קריקטורה","caricature"],["פיסול","sculpting"]
],

"מילות יחס וכיוון": [
["על","on"],["מתחת","under"],["ליד","next to"],["בין","between"],["מול","in front of"],
["מאחורי","behind"],["בתוך","inside"],["מחוץ","outside"],["למעלה","up"],["למטה","down"],
["ימינה","right"],["שמאלה","left"],["קדימה","forward"],["אחורה","backward"],["צפון","north"],
["דרום","south"],["מזרח","east"],["מערב","west"],["סביב","around"],["דרך משהו","through"],
["עד","until"],["מן","from"],["אל","to"],["עם","with"],["בלי","without"],
["כאן","here"],["שם במקום ההוא","there"],["איפה","where"],["לאן","where to"],["מאיפה","from where"],
["מעל","above"],["לאורך","along"],["לרוחב","across"],["בקצה","at the edge"],
["באמצע","in the middle"],["בפינה","in the corner"],["בצד","on the side"],["בקרבת מקום","nearby"]
],

"מילים שימושיות": [
["כן","yes"],["לא","no"],["אולי","maybe"],["בבקשה","please"],["תודה","thank you"],
["סליחה","sorry"],["שלום","hello"],["להתראות","goodbye"],["בוקר טוב","good morning"],["לילה טוב","good night"],
["מה","what"],["מי","who"],["מתי","when"],["למה","why"],["איך","how"],
["כמה","how many"],["איזה","which"],["הכל","everything"],["כלום","nothing"],["משהו","something"],
["כולם","everyone"],["אף אחד","nobody"],["הרבה","many"],["מעט","few"],["עוד","more"],
["פחות","less"],["מספיק","enough"],["גם","also"],["אבל","but"],["כי","because"],
["אם","if"],["אז","then"],["לפני","before"],["אחרי","after"],["ביחד","together"],
["לבד","alone"],["מהר","quickly"],["לאט","slowly"],["בזהירות","carefully"],["בקול רם","loudly"],
["בשקט","quietly"],["בערך","about"],["בדיוק","exactly"],["באמת","really"],["כמעט","almost"],
["רק","only"],["אפילו","even"],["כבר","already"],["עדיין","still"],["בכלל","at all"],
["כמובן","of course"],["למרות","although"],["לכן","therefore"],["בינתיים","meanwhile"],
["ברוך הבא","welcome"],["בהצלחה","good luck"],["מזל טוב","congratulations"],["אין בעד מה","you are welcome"]
],

"מדע וחלל": [
["אסטרונום","astronomer"],["טלסקופ","telescope"],["חללית","spaceship"],["אסטרונאוט","astronaut"],["ירח מלא","full moon"],
["גלקסיה","galaxy"],["שביט","comet"],["מטאור","meteor"],["מסלול הקפה","orbit"],["כוח משיכה","gravity"],
["מאדים","Mars"],["נוגה","Venus"],["צדק","Jupiter"],["שבתאי","Saturn"],["חמה","Mercury"],
["ניסוי","experiment"],["מיקרוסקופ","microscope"],["מבחנה","test tube"],["כימיה","chemistry"],["פיזיקה","physics"],
["ביולוגיה","biology"],["אטום","atom"],["מולקולה","molecule"],["תא","cell"],["חיידק","bacteria"],
["אנרגיה","energy"],["חשמל","electricity"],["מגנט","magnet"],["חום פיזיקלי","heat"],["קרינה","radiation"],
["מהירות","speed"],["כוח","force"],["לחץ","pressure"],["נפח","volume"],["צפיפות","density"],
["גז","gas"],["נוזל","liquid"],["מוצק","solid"],["התאדות","evaporation"],["התכה","melting"],
["גילוי","discovery"],["המצאה","invention"],["תיאוריה","theory"],["נוסחה","formula"],["מסקנה","conclusion"]
],

"כסף וקניות": [
["שקל","shekel"],["דולר","dollar"],["מטבע","coin"],["שטר","banknote"],["קופה","cash register"],
["מחיר","price"],["הנחה","discount"],["מבצע","sale"],["חשבונית","receipt"],["כרטיס אשראי","credit card"],
["עגלת קניות","shopping cart"],["סל","basket"],["מדף בחנות","store shelf"],["תור","queue"],["קונה","buyer"],
["מוצר","product"],["מלאי","stock"],["אריזה","package"],["תווית","label"],["ערך","value"],
["רווח","profit"],["הפסד כספי","financial loss"],["חוב","debt"],["הלוואה","loan"],["חיסכון","savings"],
["תקציב","budget"],["הוצאה","expense"],["הכנסה","income"],["מס","tax"],["עמלה","fee"],
["יקר מדי","too expensive"],["משתלם","worthwhile"],["מציאה","bargain"],["החזר","refund"],["אחריות","warranty"]
],

"בריאות ורפואה": [
["בריאות","health"],["מחלה","illness"],["חום גבוה","fever"],["שיעול","cough"],["נזלת","runny nose"],
["כאב","pain"],["כאב ראש","headache"],["פצע","wound"],["חבלה בעור","bruise"],["שבר","fracture"],
["תרופה","medicine"],["כדור תרופה","pill"],["זריקה","injection"],["חיסון","vaccine"],["תחבושת","bandage"],
["מדחום","thermometer"],["ניתוח","surgery"],["בדיקה","checkup"],["מרשם","prescription"],
["דיאטה","diet"],["ויטמין","vitamin"],["מנוחה","rest"],["התאוששות","recovery"],["אלרגיה","allergy"],
["עייפות","fatigue"],["סחרחורת","dizziness"],["בחילה","nausea"],["פריחה","rash"],["גירוד","itching"],
["רופא ילדים","pediatrician"],["מיון","emergency room"],["מיטת חולים","hospital bed"],["כיסא גלגלים","wheelchair"],
["גבס","cast"],["קביים","crutches"],["משקפי ראייה","eyeglasses"],["מכשיר שמיעה","hearing aid"],["עזרה ראשונה","first aid"]
],

"חגים ומסורת": [
["חג","holiday"],["ראש השנה","New Year"],["יום כיפור","Day of Atonement"],["סוכות","Feast of Tabernacles"],["חנוכה","Hanukkah"],
["פורים","Purim"],["פסח","Passover"],["שבועות","Feast of Weeks"],["ל\"ג בעומר","Lag BaOmer"],["ט\"ו בשבט","Tu BiShvat"],
["נר","candle"],["חנוכייה","menorah"],["סביבון","spinning top"],["מסכה","mask"],["תחפושת","costume"],
["מצה","matzah"],["מדורה","bonfire"],["דגל","flag"],["זיקוקים","fireworks"],
["מנהג","custom"],["מסורת","tradition"],["תפילה","prayer"],["ברכה","blessing"],["סעודה","feast"],
["אורחים","guests"],["קישוט","decoration"],["חופש מבית הספר","school holiday"]
]

};
