export type Lesson = {
  slug: string; level: 'A1'|'A2'|'B1'|'B2'|'C1'; titleEn: string; titleAr: string;
  category: 'Grammar'|'Vocabulary'|'Reading'|'Writing'|'Speaking'|'Listening'; minutes: number;
  summaryEn: string; summaryAr: string; goals: string[]; explanation: string;
  examples: {en:string; ar:string}[]; vocabulary: {word:string; meaning:string; example:string}[];
  practice: {question:string; options:string[]; answer:number; why:string}[];
};

const L: Lesson[] = [
// A1
{slug:'a1-be-verb',level:'A1',titleEn:'The verb be: am, is, are',titleAr:'الفعل be: am وis وare',category:'Grammar',minutes:18,summaryEn:'Introduce yourself and describe people and things with the verb be.',summaryAr:'تعلّم التعريف بنفسك ووصف الأشخاص والأشياء باستخدام فعل be.',goals:['Choose am, is or are correctly','Make positive, negative and question forms','Introduce yourself in short sentences'],explanation:'نستخدم am مع I، وis مع he / she / it، وare مع you / we / they. يأتي الفعل be ليربط الفاعل بالاسم أو الصفة أو المكان. للنفي نضيف not بعد الفعل، وللسؤال نقدّم الفعل على الفاعل.',examples:[{en:'I am a student.',ar:'أنا طالب.'},{en:'She is not tired.',ar:'هي ليست متعبة.'},{en:'Are they at home?',ar:'هل هم في المنزل؟'}],vocabulary:[{word:'student',meaning:'طالب',example:'I am a student.'},{word:'ready',meaning:'مستعد',example:'We are ready.'}],practice:[{question:'My brother ___ 18 years old.',options:['am','is','are'],answer:1,why:'My brother مفرد غائب، لذلك نستخدم is.'},{question:'___ you from Iraq?',options:['Am','Is','Are'],answer:2,why:'مع you نستخدم are، ويأتي في بداية السؤال.'}]},
{slug:'a1-pronouns',level:'A1',titleEn:'Subject pronouns and possessives',titleAr:'ضمائر الفاعل والملكية',category:'Grammar',minutes:16,summaryEn:'Use I, you, he, she, it, we, they and my, your, his, her.',summaryAr:'استخدم ضمائر الفاعل وصفات الملكية بصورة صحيحة.',goals:['Identify subject pronouns','Use possessive adjectives','Avoid repeating names unnecessarily'],explanation:'ضمير الفاعل يحل محل الاسم الذي يقوم بالفعل: I, you, he, she, it, we, they. صفة الملكية تأتي قبل الاسم وتوضح لمن يعود: my book, your bag, his phone, her name, our class, their house.',examples:[{en:'Omar is my friend. He is kind.',ar:'عمر صديقي. هو لطيف.'},{en:'This is her notebook.',ar:'هذا دفترها.'}],vocabulary:[{word:'own',meaning:'يمتلك / خاص بـ',example:'I have my own room.'},{word:'family',meaning:'عائلة',example:'Our family is small.'}],practice:[{question:'Sara is a doctor. ___ works in a hospital.',options:['He','She','They'],answer:1,why:'نستخدم She للإشارة إلى Sara.'},{question:'We love ___ school.',options:['our','their','his'],answer:0,why:'الفاعل We يحتاج صفة الملكية our.'}]},
{slug:'a1-present-simple',level:'A1',titleEn:'Present simple for routines',titleAr:'المضارع البسيط للعادات',category:'Grammar',minutes:20,summaryEn:'Talk about daily routines, habits and facts.',summaryAr:'تحدث عن الروتين اليومي والعادات والحقائق.',goals:['Form present simple sentences','Add -s with he, she and it','Use do and does in questions'],explanation:'نستخدم المضارع البسيط للعادات والحقائق. مع I/you/we/they نستخدم الفعل بصيغته الأساسية، ومع he/she/it نضيف غالباً s أو es. في السؤال نستخدم do أو does، وبعد does يعود الفعل إلى المصدر.',examples:[{en:'I study English every day.',ar:'أدرس الإنجليزية كل يوم.'},{en:'He watches the news at night.',ar:'يشاهد الأخبار ليلاً.'},{en:'Does she work here?',ar:'هل تعمل هنا؟'}],vocabulary:[{word:'usually',meaning:'عادةً',example:'I usually wake up early.'},{word:'sometimes',meaning:'أحياناً',example:'She sometimes walks to school.'}],practice:[{question:'My sister ___ coffee every morning.',options:['drink','drinks','drinking'],answer:1,why:'My sister مفرد غائب، فنضيف s.'},{question:'Where ___ they live?',options:['does','do','are'],answer:1,why:'مع they نستخدم do.'}]},
{slug:'a1-articles',level:'A1',titleEn:'A, an and the',titleAr:'أدوات التعريف والتنكير',category:'Grammar',minutes:17,summaryEn:'Choose the correct article before singular nouns.',summaryAr:'اختر أداة التعريف أو التنكير المناسبة قبل الاسم.',goals:['Use a before consonant sounds','Use an before vowel sounds','Use the for specific or known things'],explanation:'نستخدم a قبل الاسم المفرد المعدود الذي يبدأ بصوت ساكن، وan قبل الصوت المتحرك، أما the فتشير إلى شيء محدد أو معروف للطرفين. الاختيار يعتمد على الصوت لا الحرف فقط.',examples:[{en:'I saw a dog and an owl.',ar:'رأيت كلباً وبومة.'},{en:'The dog was friendly.',ar:'كان الكلب ودوداً.'}],vocabulary:[{word:'umbrella',meaning:'مظلة',example:'Take an umbrella.'},{word:'university',meaning:'جامعة',example:'She studies at a university.'}],practice:[{question:'He is ___ honest man.',options:['a','an','the'],answer:1,why:'honest تبدأ بصوت متحرك لأن h صامتة.'},{question:'Please close ___ door.',options:['a','an','the'],answer:2,why:'المقصود باب محدد ومعروف.'}]},
{slug:'a1-there-is-are',level:'A1',titleEn:'There is / There are',titleAr:'There is وThere are',category:'Grammar',minutes:16,summaryEn:'Describe what exists in a room, city or place.',summaryAr:'صف ما يوجد في غرفة أو مدينة أو مكان.',goals:['Use there is with singular nouns','Use there are with plural nouns','Make questions and negatives'],explanation:'نستخدم There is مع المفرد أو غير المعدود، وThere are مع الجمع. للنفي نضيف not، وللسؤال نضع is أو are في البداية.',examples:[{en:'There is a library near my house.',ar:'توجد مكتبة قرب منزلي.'},{en:'There are two windows in the room.',ar:'توجد نافذتان في الغرفة.'}],vocabulary:[{word:'shelf',meaning:'رف',example:'There is a book on the shelf.'},{word:'corner',meaning:'زاوية',example:'The desk is in the corner.'}],practice:[{question:'There ___ three students outside.',options:['is','are','be'],answer:1,why:'three students جمع، لذلك are.'},{question:'___ there a bank nearby?',options:['Is','Are','Do'],answer:0,why:'a bank مفرد؛ نبدأ السؤال بـ Is.'}]},
// A2
{slug:'a2-past-simple',level:'A2',titleEn:'Past simple: regular and irregular verbs',titleAr:'الماضي البسيط: الأفعال المنتظمة والشاذة',category:'Grammar',minutes:21,summaryEn:'Describe completed events in the past.',summaryAr:'تحدث عن أحداث انتهت في الماضي.',goals:['Form regular past verbs with -ed','Recognize common irregular verbs','Use did in questions and negatives'],explanation:'نستخدم الماضي البسيط لحدث اكتمل في وقت ماضٍ. الأفعال المنتظمة تأخذ -ed، أما الشاذة فلها أشكال خاصة مثل go → went. في النفي والسؤال نستخدم did ويعود الفعل إلى صورته الأساسية.',examples:[{en:'We visited Basra last summer.',ar:'زرنا البصرة الصيف الماضي.'},{en:'She did not see the message.',ar:'لم ترَ الرسالة.'},{en:'Did you enjoy the trip?',ar:'هل استمتعت بالرحلة؟'}],vocabulary:[{word:'yesterday',meaning:'أمس',example:'I called him yesterday.'},{word:'journey',meaning:'رحلة',example:'The journey was long.'}],practice:[{question:'They ___ to Baghdad last week.',options:['go','went','gone'],answer:1,why:'الماضي من go هو went.'},{question:'Did he ___ the book?',options:['read','readed','reads'],answer:0,why:'بعد did نستخدم المصدر read.'}]},
{slug:'a2-future-plans',level:'A2',titleEn:'Future plans: going to and will',titleAr:'التعبير عن المستقبل: going to وwill',category:'Grammar',minutes:19,summaryEn:'Talk about intentions, predictions and quick decisions.',summaryAr:'تحدث عن النوايا والتوقعات والقرارات السريعة.',goals:['Use going to for plans','Use will for predictions and spontaneous decisions','Ask about future plans'],explanation:'نستخدم be going to للخطة أو النية المسبقة، وwill للتوقع أو القرار اللحظي أو الوعد. يتبع going to الفعل بصيغته الأساسية، وكذلك will.',examples:[{en:'I am going to study tonight.',ar:'سأدرس الليلة (خطة مسبقة).'}, {en:'I think it will rain.',ar:'أعتقد أنها ستمطر.'}],vocabulary:[{word:'appointment',meaning:'موعد',example:'I have a dentist appointment.'},{word:'probably',meaning:'على الأرجح',example:'She will probably come.'}],practice:[{question:'Look at those clouds! It ___ rain.',options:['is going to','will to','going'],answer:0,why:'الدليل المرئي يدعم استخدام going to.'},{question:'The phone is ringing. I ___ answer it.',options:['am going','will','did'],answer:1,why:'قرار لحظي؛ نستخدم will.'}]},
{slug:'a2-countable',level:'A2',titleEn:'Countable and uncountable nouns',titleAr:'الأسماء المعدودة وغير المعدودة',category:'Vocabulary',minutes:18,summaryEn:'Use much, many, some and any accurately.',summaryAr:'استخدم much وmany وsome وany بدقة.',goals:['Distinguish countable nouns','Use much with uncountable nouns','Use many with plural countable nouns'],explanation:'الأسماء المعدودة يمكن عدّها: apple/apples. غير المعدودة لا تجمع عادة: water, information, advice. نستخدم many مع المعدود الجمع، وmuch مع غير المعدود، وsome غالباً في الإثبات، وany غالباً في السؤال والنفي.',examples:[{en:'How many books do you have?',ar:'كم كتاباً لديك؟'},{en:'There is not much milk.',ar:'لا يوجد حليب كثير.'}],vocabulary:[{word:'advice',meaning:'نصيحة (غير معدود)',example:'She gave me good advice.'},{word:'piece',meaning:'قطعة / وحدة',example:'A piece of information.'}],practice:[{question:'How ___ money do you need?',options:['many','much','few'],answer:1,why:'money اسم غير معدود.'},{question:'We bought ___ oranges.',options:['much','a little','some'],answer:2,why:'oranges جمع معدود وفي الإثبات نستخدم some.'}]},
{slug:'a2-comparatives',level:'A2',titleEn:'Comparatives and superlatives',titleAr:'المقارنة والتفضيل',category:'Grammar',minutes:20,summaryEn:'Compare people, places and experiences.',summaryAr:'قارن بين الأشخاص والأماكن والتجارب.',goals:['Form short and long comparatives','Use than correctly','Use the superlative form'],explanation:'نضيف -er غالباً للصفات القصيرة: tall → taller، ونستخدم more مع الصفات الطويلة: more interesting. للتفضيل نستخدم the tallest أو the most interesting. توجد أشكال شاذة مثل good → better → best.',examples:[{en:'My city is smaller than Baghdad.',ar:'مدينتي أصغر من بغداد.'},{en:'This is the most useful lesson.',ar:'هذا أكثر درس فائدة.'}],vocabulary:[{word:'affordable',meaning:'بسعر مناسب',example:'This hotel is more affordable.'},{word:'crowded',meaning:'مزدحم',example:'The market is busier on Fridays.'}],practice:[{question:'This exam is ___ than the last one.',options:['easy','easier','easiest'],answer:1,why:'المقارنة بين شيئين تحتاج easier.'},{question:'She is the ___ student in class.',options:['good','better','best'],answer:2,why:'best هي صيغة التفضيل من good.'}]},
{slug:'a2-prepositions',level:'A2',titleEn:'Prepositions of time and place',titleAr:'حروف الجر للزمان والمكان',category:'Grammar',minutes:18,summaryEn:'Use in, on and at for time and location.',summaryAr:'استخدم in وon وat مع الزمان والمكان.',goals:['Use at for precise times','Use on for days and dates','Use in for months, years and enclosed places'],explanation:'للوقت: at مع الساعة المحددة، on مع الأيام والتواريخ، in مع الشهور والسنوات والفترات. للمكان نستخدم at لموقع محدد أو نقطة، on لسطح، وin داخل مساحة أو مدينة أو بلد.',examples:[{en:'The class starts at 9:00.',ar:'يبدأ الدرس الساعة التاسعة.'},{en:'My birthday is in May.',ar:'عيد ميلادي في مايو.'},{en:'The keys are on the table.',ar:'المفاتيح على الطاولة.'}],vocabulary:[{word:'entrance',meaning:'مدخل',example:'Wait at the entrance.'},{word:'neighborhood',meaning:'حيّ سكني',example:'I live in a quiet neighborhood.'}],practice:[{question:'We usually travel ___ summer.',options:['at','on','in'],answer:2,why:'نستخدم in مع الفصول.'},{question:'The meeting is ___ Monday.',options:['in','on','at'],answer:1,why:'نستخدم on مع أيام الأسبوع.'}]},
// B1
{slug:'b1-present-perfect',level:'B1',titleEn:'Present perfect: experience and results',titleAr:'المضارع التام: الخبرة والنتائج',category:'Grammar',minutes:22,summaryEn:'Connect past actions to the present.',summaryAr:'اربط أحداث الماضي بالحاضر.',goals:['Build have/has + past participle','Use ever, never, just, already and yet','Distinguish present perfect from past simple'],explanation:'يتكون المضارع التام من have/has + التصريف الثالث. نستخدمه للتجارب دون تحديد وقت، أو لحدث ماضٍ له نتيجة الآن. إذا ذكرنا وقتاً ماضياً منتهياً مثل yesterday نستخدم الماضي البسيط.',examples:[{en:'I have visited Erbil twice.',ar:'زرت أربيل مرتين (خبرة).'}, {en:'She has just finished her work.',ar:'أنهت عملها للتو.'},{en:'We went there in 2023.',ar:'ذهبنا إلى هناك عام 2023.'}],vocabulary:[{word:'experience',meaning:'تجربة / خبرة',example:'Have you ever had this experience?'},{word:'recently',meaning:'مؤخراً',example:'I have recently started a course.'}],practice:[{question:'Have you ever ___ sushi?',options:['eat','ate','eaten'],answer:2,why:'بعد have نستخدم التصريف الثالث eaten.'},{question:'I ___ him yesterday.',options:['have seen','saw','seen'],answer:1,why:'yesterday وقت ماضٍ منتهٍ، فنستخدم الماضي البسيط.'}]},
{slug:'b1-conditionals',level:'B1',titleEn:'Zero and first conditionals',titleAr:'الشرط الصفري والشرط الأول',category:'Grammar',minutes:21,summaryEn:'Describe facts and realistic future possibilities.',summaryAr:'عبّر عن الحقائق والاحتمالات المستقبلية الواقعية.',goals:['Use zero conditional for general truths','Use first conditional for real possibilities','Keep the correct tense in each clause'],explanation:'الشرط الصفري: If + present simple, present simple ويعبّر عن حقيقة عامة. الشرط الأول: If + present simple, will + base verb ويعبّر عن احتمال حقيقي في المستقبل. لا نستخدم will عادة داخل جملة if في هذا التركيب الأساسي.',examples:[{en:'If you heat ice, it melts.',ar:'إذا سخّنت الجليد فإنه يذوب.'},{en:'If I finish early, I will call you.',ar:'إذا انتهيت مبكراً فسأتصل بك.'}],vocabulary:[{word:'unless',meaning:'ما لم / إلا إذا',example:'You will be late unless you hurry.'},{word:'likely',meaning:'محتمل',example:'It is likely to rain.'}],practice:[{question:'If water reaches 100°C, it ___.',options:['boils','will boil','boiled'],answer:0,why:'حقيقة علمية؛ نستخدم الشرط الصفري.'},{question:'If she studies, she ___ pass.',options:['would','will','has'],answer:1,why:'احتمال مستقبلي واقعي؛ الشرط الأول.'}]},
{slug:'b1-relative-clauses',level:'B1',titleEn:'Defining relative clauses',titleAr:'جمل الوصل المحدِّدة',category:'Grammar',minutes:19,summaryEn:'Add essential information using who, which, that and where.',summaryAr:'أضف معلومات أساسية باستخدام أدوات الوصل.',goals:['Use who for people','Use which for things','Use where for places'],explanation:'جملة الوصل المحدّدة تعطي معلومات ضرورية لمعرفة الشخص أو الشيء المقصود. who للأشخاص، which للأشياء، that للأشخاص أو الأشياء في كثير من الجمل المحدّدة، وwhere للأماكن.',examples:[{en:'The woman who teaches us is kind.',ar:'المرأة التي تدرسنا لطيفة.'},{en:'This is the phone that I bought.',ar:'هذا الهاتف الذي اشتريته.'}],vocabulary:[{word:'colleague',meaning:'زميل عمل',example:'A colleague who helps me.'},{word:'device',meaning:'جهاز',example:'A device which saves time.'}],practice:[{question:'The café ___ we met is closed.',options:['who','where','which'],answer:1,why:'نستخدم where للإشارة إلى المكان.'},{question:'A mechanic is someone ___ repairs cars.',options:['who','where','which'],answer:0,why:'who للأشخاص.'}]},
{slug:'b1-passive',level:'B1',titleEn:'The passive voice',titleAr:'المبني للمجهول',category:'Grammar',minutes:20,summaryEn:'Focus on the action or result rather than the doer.',summaryAr:'ركّز على الفعل أو النتيجة بدلاً من الفاعل.',goals:['Form be + past participle','Transform active into passive','Choose passive when the doer is unknown or unimportant'],explanation:'يتكون المبني للمجهول من be بحسب الزمن + التصريف الثالث. نستخدمه عندما يكون الفاعل مجهولاً أو غير مهم أو عندما نريد التركيز على الحدث. يمكن ذكر الفاعل باستخدام by عند الحاجة.',examples:[{en:'English is spoken in many countries.',ar:'يتم التحدث بالإنجليزية في دول كثيرة.'},{en:'The bridge was built in 1998.',ar:'بُني الجسر عام 1998.'}],vocabulary:[{word:'invent',meaning:'يخترع',example:'The device was invented recently.'},{word:'deliver',meaning:'يوصل',example:'The package is delivered every morning.'}],practice:[{question:'The emails ___ every day.',options:['send','are sent','sent'],answer:1,why:'مبني للمجهول في المضارع: are + sent.'},{question:'The building ___ last year.',options:['was opened','is open','opened by'],answer:0,why:'الماضي المبني للمجهول: was + opened.'}]},
{slug:'b1-phrasal-verbs',level:'B1',titleEn:'Common phrasal verbs',titleAr:'الأفعال المركبة الشائعة',category:'Vocabulary',minutes:20,summaryEn:'Understand everyday verb + particle combinations.',summaryAr:'افهم تراكيب الفعل مع حرف الجر أو الظرف في المحادثات.',goals:['Recognize common phrasal verbs','Understand meaning from context','Use separable and inseparable forms'],explanation:'الفعل المركب يتكون من فعل مع كلمة قصيرة مثل up أو off أو out، وقد يختلف معناه عن معنى الفعل وحده. بعض الأفعال قابلة للفصل مثل turn off the light / turn the light off، وبعضها لا يفصل مثل look after a child.',examples:[{en:'Please turn off the lights.',ar:'من فضلك أطفئ الأضواء.'},{en:'I look after my younger brother.',ar:'أعتني بأخي الأصغر.'}],vocabulary:[{word:'give up',meaning:'يستسلم / يقلع عن',example:'Never give up learning.'},{word:'find out',meaning:'يكتشف / يعرف',example:'I need to find out the answer.'}],practice:[{question:'I need to ___ what time the train leaves.',options:['find out','give up','look after'],answer:0,why:'find out تعني يكتشف أو يعرف معلومة.'},{question:'Can you ___ my cat this weekend?',options:['turn off','look after','run out'],answer:1,why:'look after تعني يعتني بـ.'}]},
// B2
{slug:'b2-reported-speech',level:'B2',titleEn:'Reported speech and tense backshift',titleAr:'الكلام المنقول وتحويل الأزمنة',category:'Grammar',minutes:23,summaryEn:'Report what someone said with accurate tense and pronoun changes.',summaryAr:'انقل كلام الآخرين مع تغيير الزمن والضمائر عند الحاجة.',goals:['Report statements with said and told','Backshift common tenses','Change time and place expressions'],explanation:'عند نقل الكلام نغيّر غالباً زمن الجملة خطوة إلى الماضي إذا كان فعل النقل ماضياً: present simple → past simple، وwill → would، وcan → could. كما نغيّر الضمائر وظروف الزمان والمكان بحسب السياق. لا يلزم التحويل إذا كانت الحقيقة ما زالت ثابتة أو كان فعل النقل في الحاضر.',examples:[{en:'Direct: “I am busy.” → He said he was busy.',ar:'مباشر: أنا مشغول. → قال إنه كان مشغولاً.'},{en:'“I will call you.” → She said she would call me.',ar:'سأتصل بك. → قالت إنها ستتصل بي.'}],vocabulary:[{word:'claim',meaning:'يدّعي / يصرّح',example:'He claimed that he was innocent.'},{word:'admit',meaning:'يعترف',example:'She admitted making a mistake.'}],practice:[{question:'“I have finished.” → He said he ___ finished.',options:['has','had','have'],answer:1,why:'Present perfect يتحول غالباً إلى past perfect.'},{question:'“I can swim.” → She said she ___ swim.',options:['can','could','will'],answer:1,why:'can تتحول إلى could في النقل التقليدي.'}]},
{slug:'b2-modals',level:'B2',titleEn:'Advanced modal verbs',titleAr:'الأفعال الناقصة المتقدمة',category:'Grammar',minutes:22,summaryEn:'Express deduction, criticism, obligation and possibility.',summaryAr:'عبّر عن الاستنتاج والنقد والالتزام والاحتمال.',goals:['Use must have for strong past deduction','Use might have for possibility','Use should have for past criticism or regret'],explanation:'must have + التصريف الثالث للاستنتاج القوي عن الماضي، might/may/could have للاحتمال، وshould have للنصيحة التي لم تحدث أو النقد. can’t have للتعبير عن استحالة وقوع شيء في الماضي.',examples:[{en:'The lights are on. They must have arrived.',ar:'الأضواء مضاءة. لا بد أنهم وصلوا.'},{en:'You should have told me earlier.',ar:'كان ينبغي أن تخبرني مبكراً.'}],vocabulary:[{word:'deduction',meaning:'استنتاج',example:'That is a reasonable deduction.'},{word:'obligation',meaning:'التزام',example:'There is no obligation to attend.'}],practice:[{question:'He is not answering. He ___ have left his phone at home.',options:['must','should','can'],answer:0,why:'must have تعبر عن استنتاج قوي.'},{question:'You ___ have checked the date before booking.',options:['should','can','must'],answer:0,why:'should have للنقد أو النصيحة الماضية.'}]},
{slug:'b2-linking-words',level:'B2',titleEn:'Linking ideas clearly',titleAr:'أدوات الربط وتنظيم الأفكار',category:'Writing',minutes:20,summaryEn:'Connect contrast, cause, result and concession.',summaryAr:'اربط الأفكار بالتضاد والسبب والنتيجة والتنازل.',goals:['Use however and although for contrast','Use therefore and consequently for results','Avoid overusing simple connectors'],explanation:'تساعد أدوات الربط القارئ على متابعة العلاقة بين الأفكار. however للتضاد بين جملتين، although للتنازل داخل جملة، therefore وconsequently للنتيجة، moreover لإضافة نقطة داعمة. انتبه إلى علامات الترقيم وترتيب الجملة.',examples:[{en:'The course is demanding. However, it is rewarding.',ar:'الدورة تتطلب جهداً. ومع ذلك، فهي مفيدة.'},{en:'Although it was late, we continued.',ar:'رغم أن الوقت كان متأخراً، واصلنا.'}],vocabulary:[{word:'nevertheless',meaning:'مع ذلك',example:'Nevertheless, the plan succeeded.'},{word:'consequently',meaning:'وبالتالي',example:'Costs increased; consequently, prices rose.'}],practice:[{question:'The evidence was limited; ___, the team delayed its decision.',options:['therefore','although','whereas'],answer:0,why:'therefore تقدم نتيجة منطقية.'},{question:'___ the task was difficult, she completed it.',options:['Despite','Although','However'],answer:1,why:'Although يتبعها فاعل وفعل.'}]},
{slug:'b2-gerunds-infinitives',level:'B2',titleEn:'Gerunds and infinitives',titleAr:'المصدر مع ing والمصدر مع to',category:'Grammar',minutes:22,summaryEn:'Choose gerund or infinitive after common verbs and expressions.',summaryAr:'اختر الصيغة المناسبة بعد الأفعال والتعابير الشائعة.',goals:['Recognize verbs followed by gerunds','Recognize verbs followed by infinitives','Notice meaning changes with stop, remember and try'],explanation:'تأتي بعض الأفعال بعدها صيغة -ing مثل enjoy, avoid, suggest، وبعضها بعدها to + المصدر مثل decide, hope, plan. وهناك أفعال يتغير معناها بحسب الصيغة؛ stop smoking تعني الإقلاع عن التدخين، أما stop to smoke فتعني التوقف من أجل التدخين.',examples:[{en:'I enjoy reading in the evening.',ar:'أستمتع بالقراءة مساءً.'},{en:'They decided to move abroad.',ar:'قرروا الانتقال إلى الخارج.'}],vocabulary:[{word:'consider',meaning:'يفكر في / ينظر في',example:'Consider taking a short break.'},{word:'manage',meaning:'يتمكن من',example:'She managed to finish on time.'}],practice:[{question:'He avoided ___ about the problem.',options:['talk','to talk','talking'],answer:2,why:'avoid يتبعه gerund.'},{question:'We hope ___ you soon.',options:['see','to see','seeing'],answer:1,why:'hope يتبعه to-infinitive.'}]},
{slug:'b2-academic-paragraph',level:'B2',titleEn:'Writing a strong academic paragraph',titleAr:'كتابة فقرة أكاديمية متماسكة',category:'Writing',minutes:24,summaryEn:'Build a paragraph with a clear claim, support and conclusion.',summaryAr:'اكتب فقرة بفكرة رئيسية وأدلة ونتيجة واضحة.',goals:['Write a focused topic sentence','Support claims with examples or evidence','Use cohesive devices and a concluding sentence'],explanation:'الفقرة الأكاديمية الجيدة تبدأ بجملة موضوع تحدد فكرتها، ثم جمل داعمة تشرح أو تقدم مثالاً أو دليلاً، وتنتهي بجملة تربط التفاصيل بالفكرة الرئيسية. تجنب الانتقال المفاجئ إلى موضوع مختلف، ولا تكرر الفكرة نفسها بصيغ متعددة.',examples:[{en:'Online learning offers flexibility. Students can study at convenient times, review recorded lessons and organize their schedules around work. As a result, it can make education more accessible.',ar:'التعلم عبر الإنترنت يوفر مرونة؛ ثم تُدعم الفكرة بأمثلة وتُختتم بنتيجة.'}],vocabulary:[{word:'in addition',meaning:'بالإضافة إلى ذلك',example:'In addition, it reduces travel time.'},{word:'evidence',meaning:'دليل',example:'The evidence supports the argument.'}],practice:[{question:'Which sentence is the best topic sentence?',options:['For example, my cousin studies at night.','Public libraries remain valuable community resources.','That is why I like it.'],answer:1,why:'الجملة الثانية تقدم فكرة عامة واضحة يمكن دعمها.'}]},
// C1
{slug:'c1-inversion',level:'C1',titleEn:'Inversion for emphasis',titleAr:'القلب النحوي للتوكيد',category:'Grammar',minutes:24,summaryEn:'Use formal inversion after negative and restrictive adverbials.',summaryAr:'استخدم القلب النحوي بعد الظروف السلبية والحصرية للتوكيد والأسلوب الرسمي.',goals:['Recognize negative adverbial triggers','Invert auxiliary and subject','Keep inversion natural and purposeful'],explanation:'في الأسلوب الرسمي أو التوكيدي، إذا بدأت الجملة بتعبير سلبي مثل Never, Rarely, Not only, Under no circumstances، نضع الفعل المساعد قبل الفاعل كما في السؤال، دون تحويل الجملة إلى سؤال. إذا لم يوجد فعل مساعد، نستخدم do/does/did.',examples:[{en:'Rarely have I seen such dedication.',ar:'نادراً ما رأيت مثل هذا التفاني.'},{en:'Not only did she lead the team, but she also trained new staff.',ar:'لم تكتفِ بقيادة الفريق، بل درّبت الموظفين الجدد أيضاً.'}],vocabulary:[{word:'under no circumstances',meaning:'تحت أي ظرف من الظروف',example:'Under no circumstances should this file be shared.'},{word:'seldom',meaning:'نادراً',example:'Seldom does he make careless errors.'}],practice:[{question:'Never ___ such a convincing argument.',options:['I have heard','have I heard','I heard have'],answer:1,why:'بعد Never في بداية الجملة يحدث القلب: have + subject.'},{question:'Not only ___ the report, but she also presented it.',options:['she wrote','did she write','wrote she'],answer:1,why:'نستخدم did قبل الفاعل ثم المصدر write.'}]},
{slug:'c1-cleft-sentences',level:'C1',titleEn:'Cleft sentences and focus',titleAr:'الجمل المنشطرة وتحديد بؤرة التركيز',category:'Grammar',minutes:22,summaryEn:'Emphasize a particular part of a sentence with it-clefts and wh-clefts.',summaryAr:'أكّد جزءاً معيناً من الجملة باستخدام تراكيب it-cleft وwh-cleft.',goals:['Use it is/was ... that structures','Use what-cleft structures','Choose focus to improve clarity'],explanation:'تسمح الجمل المنشطرة بتسليط الضوء على معلومة محددة. التركيب It is/was + الجزء المراد تأكيده + that/who + بقية الجملة. أما wh-cleft فيبدأ غالباً بـ What ويضع الفكرة المهمة في نهاية التركيب.',examples:[{en:'It was the clear feedback that improved my writing.',ar:'كانت الملاحظات الواضحة هي التي حسّنت كتابتي.'},{en:'What I need is more speaking practice.',ar:'ما أحتاج إليه هو مزيد من تدريب المحادثة.'}],vocabulary:[{word:'emphasis',meaning:'توكيد / تشديد',example:'The structure adds emphasis.'},{word:'precisely',meaning:'على وجه التحديد',example:'That is precisely what I meant.'}],practice:[{question:'Choose the cleft sentence that emphasizes “Maya”.',options:['Maya sent the email yesterday.','It was Maya who sent the email yesterday.','Yesterday Maya sent the email.'],answer:1,why:'الجملة الثانية تضع Maya في موضع التركيز.'}]},
{slug:'c1-hedging',level:'C1',titleEn:'Hedging and cautious claims',titleAr:'التحفّظ اللغوي وصياغة الادعاءات بحذر',category:'Writing',minutes:22,summaryEn:'Make nuanced claims without sounding absolute.',summaryAr:'صغ آراء دقيقة دون إطلاق أحكام قطعية.',goals:['Use may, might and appears to','Qualify generalizations','Distinguish evidence from interpretation'],explanation:'في الكتابة الأكاديمية والمهنية، نستخدم hedging لتجنّب الادعاء المطلق عندما تكون الأدلة محدودة. من أدواته may, might, tends to, appears to, is likely to, arguably. يجب ألا يضعف التحفظ الفكرة إلى درجة الغموض؛ استخدمه عندما يعكس درجة اليقين الحقيقية.',examples:[{en:'The findings suggest that sleep may influence memory.',ar:'تشير النتائج إلى أن النوم قد يؤثر في الذاكرة.'},{en:'This approach appears to be more effective in small groups.',ar:'يبدو أن هذا الأسلوب أكثر فاعلية في المجموعات الصغيرة.'}],vocabulary:[{word:'plausible',meaning:'معقول / محتمل',example:'This is a plausible explanation.'},{word:'tentative',meaning:'مبدئي / غير نهائي',example:'We reached a tentative conclusion.'}],practice:[{question:'Which sentence uses appropriate academic hedging?',options:['This proves that all students learn the same way.','The results may indicate a link between practice and confidence.','It is always obvious that practice works.'],answer:1,why:'الجملة الثانية تذكر ما تشير إليه النتائج دون تعميم مطلق.'}]},
{slug:'c1-collocations',level:'C1',titleEn:'Precise academic collocations',titleAr:'المتلازمات اللفظية الأكاديمية الدقيقة',category:'Vocabulary',minutes:21,summaryEn:'Use natural word partnerships in formal English.',summaryAr:'استخدم تراكيب كلمات طبيعية في الإنجليزية الرسمية.',goals:['Recognize common academic collocations','Choose accurate verbs with nouns','Avoid direct translation from Arabic'],explanation:'المتلازمات اللفظية هي كلمات تميل إلى الظهور معاً بصورة طبيعية، مثل conduct research وdraw a conclusion وpose a challenge. معرفة معنى الكلمات منفردة لا تكفي؛ احفظها ضمن تراكيب وأمثلة كاملة.',examples:[{en:'The researchers conducted a detailed analysis.',ar:'أجرى الباحثون تحليلاً مفصلاً.'},{en:'The policy poses a serious challenge.',ar:'تشكّل السياسة تحدياً كبيراً.'}],vocabulary:[{word:'draw a conclusion',meaning:'يستخلص نتيجة',example:'We should not draw a conclusion too early.'},{word:'raise awareness',meaning:'يرفع مستوى الوعي',example:'The campaign raises awareness.'}],practice:[{question:'Which collocation is natural?',options:['make a research','conduct research','do a conclusion'],answer:1,why:'conduct research هو التركيب الطبيعي.'}]},
{slug:'c1-argumentative-essay',level:'C1',titleEn:'Building a persuasive argument',titleAr:'بناء حجة مقنعة',category:'Writing',minutes:28,summaryEn:'Develop a balanced argument with claims, counterarguments and synthesis.',summaryAr:'طوّر حجة متوازنة تشمل الادعاءات والرأي المقابل والتركيب النهائي.',goals:['State a nuanced thesis','Support claims with relevant evidence','Address counterarguments fairly','Synthesize ideas in a strong conclusion'],explanation:'المقال الحجاجي المتقدم لا يكتفي بإبداء الرأي. ابدأ بأطروحة دقيقة، وخصص كل فقرة لادعاء مدعوم بأسباب أو أدلة. اعرض الرأي المقابل بإنصاف، ثم ناقشه بالأدلة. في الخاتمة، ركّب النتائج وأجب عن السؤال دون إدخال أفكار جديدة.',examples:[{en:'Although remote work can weaken informal collaboration, its flexibility and access to wider talent pools make it valuable when organizations invest in clear communication practices.',ar:'تعرض الجملة رأياً متوازناً: تعترف بالتحدي وتقدم مبررات ثم شرطاً للنجاح.'}],vocabulary:[{word:'counterargument',meaning:'حجة مضادة',example:'A strong essay addresses a counterargument.'},{word:'substantiate',meaning:'يدعم بالدليل',example:'Use data to substantiate the claim.'}],practice:[{question:'What should a strong counterargument do?',options:['Misrepresent the opposing view','Present the opposing view fairly before responding','Replace the thesis'],answer:1,why:'عرض الرأي المقابل بإنصاف يقوي الحجة ويمنع رجل القش.'}]},
{slug:'c1-register',level:'C1',titleEn:'Register, tone and audience',titleAr:'المستوى اللغوي والنبرة والجمهور',category:'Speaking',minutes:21,summaryEn:'Adapt vocabulary, tone and structure to formal and informal contexts.',summaryAr:'كيّف المفردات والنبرة والبناء بحسب السياق الرسمي وغير الرسمي.',goals:['Identify formal and informal registers','Choose audience-appropriate expressions','Maintain consistency of tone'],explanation:'الـregister هو مستوى اللغة الذي يناسب الموقف والجمهور. في البريد الرسمي استخدم عبارات مهذبة ومباشرة، وفي المحادثة اليومية استخدم تعبيرات طبيعية مختصرة. تجنب خلط الاختصارات العامية بالتراكيب الأكاديمية في النص الواحد إلا لغرض واضح.',examples:[{en:'Formal: I would appreciate your feedback.',ar:'رسمي: سأكون ممتناً لملاحظاتك.'},{en:'Informal: Can you take a look?',ar:'غير رسمي: هل يمكنك إلقاء نظرة؟'}],vocabulary:[{word:'courteous',meaning:'مهذب',example:'Use a courteous opening.'},{word:'colloquial',meaning:'عامي / محكي',example:'That phrase is colloquial.'}],practice:[{question:'Which opening is most suitable for a formal request?',options:['Hey, do this for me.','I would be grateful if you could review the document.','Yo, check this out.'],answer:1,why:'الصياغة الثانية مهذبة ومناسبة للسياق الرسمي.'}]},

// Skill-focused lessons: listening, speaking and reading across levels
{slug:'a1-first-conversations',level:'A1',titleEn:'First conversations: greetings and introductions',titleAr:'المحادثات الأولى: التحية والتعريف بالنفس',category:'Speaking',minutes:15,summaryEn:'Start and maintain a short conversation with simple questions and answers.',summaryAr:'ابدأ محادثة قصيرة واستمر بها باستخدام أسئلة وأجوبة بسيطة.',goals:['Greet someone politely','Introduce yourself and ask a basic question','Spell your name and ask someone to repeat'],explanation:'في المحادثات الأولى استخدم عبارات قصيرة وواضحة. ابدأ بالتحية مثل Hello أو Good morning، ثم قل اسمك: My name is… أو I’m… لطرح سؤال استخدم What’s your name? وWhere are you from? إذا لم تسمع جيداً يمكنك قول Could you repeat that, please? تدرّب على نبرة هادئة وعلى إعطاء الطرف الآخر وقتاً للإجابة.',examples:[{en:'Hello, I’m Ali. What’s your name?',ar:'مرحباً، أنا علي. ما اسمك؟'},{en:'I’m from Iraq. Nice to meet you.',ar:'أنا من العراق. سعيد بلقائك.'}],vocabulary:[{word:'Nice to meet you',meaning:'سعيد بلقائك',example:'Nice to meet you, Sara.'},{word:'Could you repeat that?',meaning:'هل يمكنك إعادة ذلك؟',example:'Sorry, could you repeat that?'}],practice:[{question:'Which is the most natural reply to “How are you?”',options:['I am 20 years old.','I’m fine, thank you.','I’m from Basra.'],answer:1,why:'I’m fine, thank you جواب طبيعي عن الحال.'},{question:'Choose a polite way to ask someone to say something again.',options:['Say again!','Repeat now.','Could you repeat that, please?'],answer:2,why:'الصياغة الثالثة مهذبة وطبيعية.'}]},
{slug:'a2-listening-for-details',level:'A2',titleEn:'Listening for key details',titleAr:'الاستماع لالتقاط التفاصيل المهمة',category:'Listening',minutes:17,summaryEn:'Listen for times, dates, places and requested actions.',summaryAr:'تدرّب على التقاط الأوقات والتواريخ والأماكن والتعليمات.',goals:['Identify key facts in short announcements','Listen for corrected or changed information','Use context to understand unfamiliar words'],explanation:'لا تحاول فهم كل كلمة في المقطع. اقرأ السؤال أولاً وحدد نوع المعلومة المطلوبة: وقت، مكان، رقم أو سبب. استمع إلى الكلمات الدالة مثل at, on, because, instead, changed to. إذا سمعت تصحيحاً مثل not at ten but at ten thirty، فالمعلومة الثانية هي الصحيحة. أعد الاستماع للتحقق من التفاصيل.',examples:[{en:'The appointment has moved from 2:00 to 2:30.',ar:'تم تغيير الموعد من الثانية إلى الثانية والنصف.'},{en:'Please collect your ticket at the front desk.',ar:'يرجى استلام تذكرتك من مكتب الاستقبال.'}],vocabulary:[{word:'rescheduled',meaning:'أُعيد تحديد موعده',example:'The meeting was rescheduled.'},{word:'available',meaning:'متاح',example:'The room is available after noon.'}],practice:[{question:'In “The class is not on Tuesday; it is on Thursday”, when is the class?',options:['Tuesday','Wednesday','Thursday'],answer:2,why:'المتحدث صحح اليوم، والمعلومة النهائية Thursday.'},{question:'Which word often introduces a reason?',options:['because','instead','before'],answer:0,why:'because تقدم السبب.'}]},
{slug:'b1-reading-inference',level:'B1',titleEn:'Reading for main ideas and inference',titleAr:'القراءة لاستخراج الفكرة والاستنتاج',category:'Reading',minutes:20,summaryEn:'Identify the writer’s main point and infer meaning from context.',summaryAr:'حدّد الفكرة الرئيسية واستنتج المعنى من سياق النص.',goals:['Skim to identify the main idea','Scan for specific facts','Infer an unstated idea from textual clues'],explanation:'ابدأ بالقراءة السريعة لتعرف موضوع النص وغرض الكاتب. بعد ذلك اقرأ السؤال وابحث عن كلمات مفتاحية في النص. عند الاستنتاج، لا تخترع معلومة غير موجودة؛ اربط بين دليلين أو أكثر للوصول إلى نتيجة معقولة. ميّز بين ما يقوله الكاتب صراحة وما يمكن استنتاجه من الأمثلة والنتائج.',examples:[{en:'The article lists long queues, limited opening hours and crowded rooms. You can infer that the service is under pressure.',ar:'ذكر طوابير طويلة وساعات محدودة وازدحام يسمح باستنتاج وجود ضغط على الخدمة.'},{en:'A title and first paragraph often reveal the main topic.',ar:'العنوان والفقرة الأولى يكشفان غالباً الموضوع الرئيسي.'}],vocabulary:[{word:'infer',meaning:'يستنتج',example:'Readers infer the writer’s attitude.'},{word:'evidence',meaning:'دليل',example:'Use evidence from the passage.'}],practice:[{question:'What is the best way to infer a writer’s attitude?',options:['Guess from the title only','Combine word choice and supporting details','Ignore the examples'],answer:1,why:'الاستنتاج الجيد يعتمد على أكثر من دليل في النص.'},{question:'What does scanning help you find?',options:['A specific date or name','The writer’s biography','Every grammar structure'],answer:0,why:'Scanning بحث سريع عن معلومة محددة.'}]},
{slug:'b2-listening-lectures',level:'B2',titleEn:'Listening to lectures and structured talks',titleAr:'الاستماع للمحاضرات والعروض المنظمة',category:'Listening',minutes:22,summaryEn:'Follow a speaker’s structure, examples and conclusions.',summaryAr:'تابع تسلسل المحاضر وأمثلته واستنتاجاته.',goals:['Recognize signposting language','Separate main points from examples','Take concise notes without writing every word'],explanation:'المتحدث الأكاديمي غالباً يعلن عن هيكل حديثه باستخدام عبارات مثل firstly, let us turn to, in contrast, the key point is, to sum up. اكتب الكلمات الرئيسية والأرقام والعلاقات، لا الجمل كاملة. انتبه إلى النبرة والتأكيد، فقد يوضح المتحدث أن مثالاً ما استثناء وليس قاعدة عامة.',examples:[{en:'The first factor is cost. A second, equally important issue is access.',ar:'يعلن المتحدث عن نقطتين رئيسيتين.'},{en:'To sum up, the evidence supports a cautious approach.',ar:'عبارة To sum up تشير إلى الخاتمة.'}],vocabulary:[{word:'signpost',meaning:'عبارة إرشادية لتنظيم الكلام',example:'“Moving on to…” is a signpost.'},{word:'qualify',meaning:'يقيّد أو يخفف تعميماً',example:'The speaker qualifies the claim.'}],practice:[{question:'Which phrase most clearly signals a conclusion?',options:['For instance','To sum up','On the other hand'],answer:1,why:'To sum up تعلن تلخيص النقاط والخاتمة.'},{question:'When taking lecture notes, what is most useful?',options:['Copy every sentence','Record key terms and relationships','Write only the introduction'],answer:1,why:'تدوين الكلمات المفتاحية يوفر الوقت ويحافظ على بنية الأفكار.'}]},
{slug:'c1-critical-reading',level:'C1',titleEn:'Critical reading: evaluating arguments and evidence',titleAr:'القراءة النقدية: تقييم الحجج والأدلة',category:'Reading',minutes:25,summaryEn:'Assess claims, assumptions, evidence quality and rhetorical choices.',summaryAr:'قيّم الادعاءات والافتراضات وجودة الأدلة والاختيارات البلاغية.',goals:['Distinguish claims from evidence','Identify assumptions and overgeneralizations','Evaluate whether evidence supports a conclusion'],explanation:'القراءة النقدية تتجاوز فهم المعنى المباشر. حدّد الادعاء الأساسي، ثم اسأل: ما الدليل؟ هل هو حديث وملائم؟ هل العينة ممثلة؟ هل يخلط الكاتب بين الارتباط والسببية؟ انتبه إلى التعميمات واللغة العاطفية والمصادر غير المحددة. قيّم أيضاً ما لم يناقشه النص قبل قبول النتيجة.',examples:[{en:'The survey involved 18 volunteers from one school; therefore, it cannot establish what all students prefer.',ar:'العينة المحدودة لا تسمح بتعميم النتيجة على جميع الطلاب.'},{en:'A correlation between two variables does not by itself prove causation.',ar:'الارتباط وحده لا يثبت أن أحد المتغيرين سبب الآخر.'}],vocabulary:[{word:'assumption',meaning:'افتراض',example:'The argument relies on an unstated assumption.'},{word:'correlation',meaning:'ارتباط إحصائي',example:'Correlation is not proof of causation.'}],practice:[{question:'A study surveys 12 people in one town. What is the main limitation?',options:['The sample may not be representative','The results are automatically false','The topic cannot be studied'],answer:0,why:'العينة الصغيرة والمحدودة قد لا تمثل المجتمع الأوسع.'},{question:'Which question best tests evidence quality?',options:['Is the writer confident?','Does the source support the claim with relevant and reliable data?','Is the article long?'],answer:1,why:'جودة الدليل تعتمد على موثوقيته وصلته بالادعاء.'}]},

// Additional skill lessons to provide coverage in each CEFR band.
{slug:'a1-reading-simple-notices',level:'A1',titleEn:'Reading simple messages and notices',titleAr:'قراءة الرسائل والإعلانات البسيطة',category:'Reading',minutes:15,summaryEn:'Understand short notes, signs, times and everyday information.',summaryAr:'افهم الملاحظات القصيرة واللافتات والأوقات والمعلومات اليومية.',goals:['Recognize familiar words in short notices','Find dates, times and places','Understand simple instructions'],explanation:'ابدأ بتحديد الكلمات المألوفة مثل days وtimes وplaces. في الإعلان القصير ابحث عن المعلومة التي تحتاجها: متى؟ أين؟ ماذا يجب أن تفعل؟ لا تحتاج إلى ترجمة كل كلمة إذا كانت الفكرة واضحة من السياق.',examples:[{en:'Library closed on Friday.',ar:'المكتبة مغلقة يوم الجمعة.'},{en:'Please wait here at 10:00.',ar:'يرجى الانتظار هنا الساعة العاشرة.'}],vocabulary:[{word:'closed',meaning:'مغلق',example:'The office is closed today.'},{word:'entrance',meaning:'مدخل',example:'Use the main entrance.'}],practice:[{question:'A sign says “No entry”. What does it mean?',options:['You can enter','You must not enter','The place is open'],answer:1,why:'No entry تعني ممنوع الدخول.'}]},
{slug:'a1-listening-classroom-instructions',level:'A1',titleEn:'Understanding classroom instructions',titleAr:'فهم تعليمات الصف',category:'Listening',minutes:15,summaryEn:'Recognize common instructions and simple requests in class.',summaryAr:'تعرّف على التعليمات والطلبات الشائعة داخل الصف.',goals:['Understand common classroom verbs','Follow one-step instructions','Ask for repetition politely'],explanation:'تتكرر في الصف أوامر قصيرة مثل open your book وlisten وrepeat وwork in pairs. انتبه إلى الفعل الأساسي في بداية الجملة. إذا لم تفهم، قل Could you say that again, please? أو Could you speak more slowly?',examples:[{en:'Please open your books to page ten.',ar:'افتحوا كتبكم على الصفحة العاشرة.'},{en:'Work with a partner and answer question two.',ar:'اعمل مع زميل وأجب عن السؤال الثاني.'}],vocabulary:[{word:'repeat',meaning:'يكرر',example:'Please repeat the sentence.'},{word:'partner',meaning:'شريك / زميل',example:'Work with a partner.'}],practice:[{question:'What should you do when the teacher says “Underline the verb”?',options:['Draw a circle around the title','Draw a line under the verb','Close the book'],answer:1,why:'Underline تعني وضع خط تحت الكلمة.'}]},
{slug:'a2-writing-personal-email',level:'A2',titleEn:'Writing a short personal email',titleAr:'كتابة بريد إلكتروني شخصي قصير',category:'Writing',minutes:18,summaryEn:'Write a friendly email with a greeting, message and closing.',summaryAr:'اكتب رسالة ودية تتضمن تحية ومضموناً وختاماً.',goals:['Choose a suitable greeting','Organize information into short sentences','Use a friendly closing'],explanation:'ابدأ بتحية مناسبة مثل Hi Sara, ثم اذكر سبب الرسالة بوضوح. اجعل كل فكرة في جملة قصيرة، وأضف سؤالاً أو اقتراحاً إذا كان مناسباً. اختم بعبارة مثل Best wishes أو See you soon ثم اسمك.',examples:[{en:'Hi Noor, I’m having a small party on Friday. Can you come?',ar:'مرحباً نور، سأقيم حفلة صغيرة يوم الجمعة. هل يمكنك الحضور؟'},{en:'Best wishes, Ali',ar:'مع أطيب التمنيات، علي.'}],vocabulary:[{word:'invite',meaning:'يدعو',example:'I want to invite you.'},{word:'available',meaning:'متفرغ / متاح',example:'Are you available on Friday?'}],practice:[{question:'Which is a suitable friendly email closing?',options:['Yours faithfully','Best wishes','To whom it may concern'],answer:1,why:'Best wishes مناسبة لرسالة شخصية ودية.'}]},
{slug:'a2-speaking-everyday-requests',level:'A2',titleEn:'Making everyday requests politely',titleAr:'تقديم الطلبات اليومية بأدب',category:'Speaking',minutes:17,summaryEn:'Ask for help, order food and request information politely.',summaryAr:'اطلب المساعدة والطعام والمعلومات بصيغ مهذبة.',goals:['Use can and could for requests','Order items clearly','Respond to offers politely'],explanation:'تبدو الطلبات أكثر تهذيباً باستخدام Could I have…? وCould you help me…? وWould you mind…? في المطعم اذكر ما تريد ثم استخدم please. استمع إلى العرض ورد بعبارة Thank you أو That would be great.',examples:[{en:'Could I have a glass of water, please?',ar:'هل يمكنني الحصول على كوب ماء من فضلك؟'},{en:'Could you tell me where the station is?',ar:'هل يمكنك إخباري أين تقع المحطة؟'}],vocabulary:[{word:'request',meaning:'طلب',example:'I have a small request.'},{word:'recommend',meaning:'يوصي',example:'What would you recommend?'}],practice:[{question:'Which request is the most polite?',options:['Give me the menu.','Could I see the menu, please?','Menu now.'],answer:1,why:'Could I… please صيغة مهذبة للطلب.'}]},
{slug:'b1-writing-opinion-paragraph',level:'B1',titleEn:'Writing a clear opinion paragraph',titleAr:'كتابة فقرة رأي واضحة',category:'Writing',minutes:20,summaryEn:'State an opinion and support it with reasons and an example.',summaryAr:'عبّر عن رأيك وادعمه بأسباب ومثال.',goals:['Write a clear topic sentence','Support an opinion with reasons','Use linking words and a concluding sentence'],explanation:'ابدأ بجملة موضوعية تذكر رأيك. أضف سببين مترابطين، ثم مثالاً واقعياً يوضح فكرتك. استخدم روابط مثل because وfor example وalso وhowever. اختم بجملة تعيد الفكرة الأساسية دون تكرار حرفي.',examples:[{en:'I believe public libraries are important because they provide free access to information.',ar:'أعتقد أن المكتبات العامة مهمة لأنها توفر وصولاً مجانياً للمعلومات.'},{en:'For example, students can use computers and study in a quiet place.',ar:'على سبيل المثال، يستطيع الطلاب استخدام الحواسيب والدراسة في مكان هادئ.'}],vocabulary:[{word:'benefit',meaning:'فائدة',example:'One benefit is free access.'},{word:'in addition',meaning:'بالإضافة إلى ذلك',example:'In addition, libraries support children.'}],practice:[{question:'Which sentence is the strongest topic sentence?',options:['I went there yesterday.','Public transport should be improved in our city.','Because it is useful.'],answer:1,why:'الجملة الثانية تقدّم موضوعاً ورأياً واضحين.'}]},
{slug:'b1-listening-opinions-reasons',level:'B1',titleEn:'Listening for opinions and reasons',titleAr:'الاستماع للآراء والأسباب',category:'Listening',minutes:19,summaryEn:'Identify a speaker’s position and the reasons supporting it.',summaryAr:'حدّد موقف المتحدث والأسباب التي تدعمه.',goals:['Recognize opinion phrases','Separate reasons from examples','Notice contrast and qualification'],explanation:'قد يعلن المتحدث رأيه بعبارات مثل I believe وIn my view وI would argue. بعد ذلك استمع إلى because أو since لمعرفة السبب. انتبه إلى but وalthough لأنها قد تغيّر اتجاه الفكرة أو تضيف تحفظاً.',examples:[{en:'I support the plan because it will make buses more reliable.',ar:'أؤيد الخطة لأنها ستجعل الحافلات أكثر موثوقية.'},{en:'It is useful, although it may be expensive at first.',ar:'إنه مفيد، رغم أنه قد يكون مكلفاً في البداية.'}],vocabulary:[{word:'reliable',meaning:'موثوق',example:'The service is reliable.'},{word:'although',meaning:'على الرغم من أن',example:'Although it is costly, it is useful.'}],practice:[{question:'Which phrase most clearly introduces a personal opinion?',options:['For instance','In my view','As a result'],answer:1,why:'In my view تعلن عن وجهة نظر المتحدث.'}]},
{slug:'b2-reading-purpose-tone',level:'B2',titleEn:'Reading for purpose and tone',titleAr:'تحليل غرض الكاتب ونبرته',category:'Reading',minutes:22,summaryEn:'Distinguish informative, persuasive and critical writing styles.',summaryAr:'ميّز بين الأسلوب المعلوماتي والإقناعي والنقدي.',goals:['Identify the writer’s purpose','Recognize cautious and persuasive language','Support tone interpretations with textual evidence'],explanation:'لا تكتفِ بموضوع النص؛ اسأل لماذا كُتب. قد يكون الغرض شرح معلومة أو إقناع القارئ أو نقد سياسة. النبرة تظهر في اختيار الكلمات، ودرجة اليقين، وما يبرزه الكاتب أو يقلل من أهميته. ادعم تفسيرك بعبارة أو تفصيل من النص.',examples:[{en:'The evidence appears to support a gradual reform.',ar:'عبارة appears to توحي بنبرة حذرة.'},{en:'This unacceptable delay must be addressed immediately.',ar:'اختيار unacceptable وmust يعكس نبرة قوية وإقناعية.'}],vocabulary:[{word:'persuasive',meaning:'إقناعي',example:'The article uses persuasive language.'},{word:'skeptical',meaning:'متشكك',example:'The writer is skeptical of the claim.'}],practice:[{question:'Which detail is most useful when identifying tone?',options:['The number of paragraphs','The writer’s word choice and degree of certainty','The font size'],answer:1,why:'النبرة تظهر في اختيار المفردات وطريقة عرض اليقين.'}]},
{slug:'b2-speaking-defending-viewpoints',level:'B2',titleEn:'Presenting and defending a viewpoint',titleAr:'عرض وجهة نظر والدفاع عنها',category:'Speaking',minutes:22,summaryEn:'Structure a spoken argument and respond to a different perspective.',summaryAr:'نظّم حجة شفهية ورد على وجهة نظر مختلفة.',goals:['State a clear position','Support points with examples','Acknowledge and answer a counterargument'],explanation:'في العرض الشفهي ابدأ بموقف واضح، ثم قدّم سببين وأمثلة. استخدم عبارات مثل One reason is… وFor instance… وI understand the concern; however… للاعتراف بالرأي المقابل والرد عليه. اختم بخلاصة مرتبطة بالسؤال.',examples:[{en:'I see why some people disagree; however, the long-term benefits are stronger.',ar:'أفهم سبب اختلاف البعض، لكن الفوائد طويلة الأمد أقوى.'},{en:'A practical example is the improvement in commuting time.',ar:'مثال عملي هو تحسن وقت التنقل.'}],vocabulary:[{word:'counterargument',meaning:'حجة مضادة',example:'Respond to the counterargument fairly.'},{word:'trade-off',meaning:'مفاضلة بين مكاسب وتكاليف',example:'Every policy involves a trade-off.'}],practice:[{question:'What is the best way to respond to an opposing view?',options:['Ignore it completely','Misrepresent it','Acknowledge it fairly and explain your response'],answer:2,why:'الرد القوي يعرض الرأي المقابل بإنصاف ثم يوضح موقفك.'}]},
{slug:'c1-listening-stance-implication',level:'C1',titleEn:'Listening for stance and implied meaning',titleAr:'فهم موقف المتحدث والمعنى الضمني',category:'Listening',minutes:25,summaryEn:'Interpret qualification, emphasis, irony and implications in extended speech.',summaryAr:'فسّر التحفظ والتوكيد والسخرية والمعاني الضمنية في الحديث المطوّل.',goals:['Identify the speaker’s attitude beyond literal meaning','Recognize emphasis and qualification','Infer implications from context and contrast'],explanation:'في المستوى المتقدم قد لا يصرّح المتحدث بموقفه مباشرة. استمع إلى أدوات التحفظ مثل arguably وto some extent، وإلى التشديد والتباين بين ما يتوقعه الجمهور وما يقوله فعلياً. لا تستنتج السخرية أو الرفض من كلمة واحدة؛ اربط النبرة والسياق وبنية الكلام.',examples:[{en:'The proposal is ambitious, to say the least.',ar:'قد توحي العبارة بتحفظ أو انتقاد غير مباشر بحسب السياق.'},{en:'That may be true in theory; in practice, the evidence is mixed.',ar:'المتحدث يميّز بين الفكرة النظرية والنتائج العملية.'}],vocabulary:[{word:'implicit',meaning:'ضمني',example:'The criticism is implicit.'},{word:'qualifier',meaning:'أداة تحفّظ أو تقييد',example:'“To some extent” is a qualifier.'}],practice:[{question:'What should you use to infer an implied attitude?',options:['One isolated word only','Context, contrast and emphasis together','The speaker’s topic alone'],answer:1,why:'المعنى الضمني يُفهم من مجموعة قرائن لا من كلمة منفردة.'}]},
];


// Additional curated syllabus lessons: 22 new lessons per CEFR level.
const EXTRA_TOPICS = {
  "A1": [
    [
      "Alphabet and spelling",
      "Vocabulary",
      "الحروف والتهجئة",
      "Spell names and recognize common letter sounds."
    ],
    [
      "Numbers, dates and time",
      "Vocabulary",
      "الأرقام والتواريخ والوقت",
      "Say numbers, dates, prices and clock times."
    ],
    [
      "Family and relationships",
      "Vocabulary",
      "العائلة والعلاقات",
      "Describe family members and relationships."
    ],
    [
      "Food and drinks",
      "Vocabulary",
      "الطعام والشراب",
      "Name everyday food and order simple meals."
    ],
    [
      "Daily routines",
      "Grammar",
      "الروتين اليومي",
      "Describe a typical day using present simple verbs."
    ],
    [
      "Adverbs of frequency",
      "Grammar",
      "ظروف التكرار",
      "Say how often you do everyday activities."
    ],
    [
      "Places in town",
      "Vocabulary",
      "أماكن في المدينة",
      "Ask where places are and understand simple directions."
    ],
    [
      "Prepositions of place",
      "Grammar",
      "حروف الجر للمكان",
      "Describe where objects and places are."
    ],
    [
      "Can and can’t",
      "Grammar",
      "Can وCan’t",
      "Talk about abilities and simple requests."
    ],
    [
      "Like, love and hate",
      "Grammar",
      "التفضيلات",
      "Talk about likes and dislikes."
    ],
    [
      "This, that, these and those",
      "Grammar",
      "أسماء الإشارة",
      "Point to nearby and distant objects."
    ],
    [
      "Possessive ’s",
      "Grammar",
      "الملكية باستخدام ’s",
      "Show who owns an object."
    ],
    [
      "Clothes and colours",
      "Vocabulary",
      "الملابس والألوان",
      "Describe clothing and colours."
    ],
    [
      "Weather and seasons",
      "Vocabulary",
      "الطقس والفصول",
      "Describe basic weather conditions."
    ],
    [
      "Shopping conversations",
      "Speaking",
      "محادثات التسوق",
      "Ask about prices, sizes and quantities."
    ],
    [
      "Understanding simple timetables",
      "Reading",
      "فهم الجداول البسيطة",
      "Find times and days in a timetable."
    ],
    [
      "Listening for names and numbers",
      "Listening",
      "الاستماع للأسماء والأرقام",
      "Identify names, phone numbers and prices."
    ],
    [
      "Writing a short message",
      "Writing",
      "كتابة رسالة قصيرة",
      "Write a clear everyday message."
    ],
    [
      "Describing people",
      "Speaking",
      "وصف الأشخاص",
      "Describe appearance and personality respectfully."
    ],
    [
      "Simple instructions",
      "Listening",
      "التعليمات البسيطة",
      "Follow short classroom and everyday instructions."
    ],
    [
      "There was and there were",
      "Grammar",
      "There was وThere were",
      "Describe what existed in the past."
    ],
    [
      "Review: everyday English",
      "Reading",
      "مراجعة الإنجليزية اليومية",
      "Combine basic vocabulary and structures in context."
    ]
  ],
  "A2": [
    [
      "Past continuous",
      "Grammar",
      "الماضي المستمر",
      "Describe an action in progress at a past time."
    ],
    [
      "Present perfect: experiences",
      "Grammar",
      "المضارع التام للتجارب",
      "Talk about life experiences without a finished time."
    ],
    [
      "Present perfect with for and since",
      "Grammar",
      "For وSince مع المضارع التام",
      "Describe how long a situation has continued."
    ],
    [
      "Too and enough",
      "Grammar",
      "Too وEnough",
      "Explain when something is excessive or sufficient."
    ],
    [
      "First conditional",
      "Grammar",
      "الشرط الأول",
      "Talk about realistic future possibilities."
    ],
    [
      "Should and must",
      "Grammar",
      "Should وMust",
      "Give advice and express obligation."
    ],
    [
      "Gerunds and infinitives",
      "Grammar",
      "Gerund وInfinitive",
      "Choose common verb patterns."
    ],
    [
      "Phrasal verbs for daily life",
      "Vocabulary",
      "الأفعال المركبة اليومية",
      "Understand frequent everyday phrasal verbs."
    ],
    [
      "Travel and accommodation",
      "Vocabulary",
      "السفر والإقامة",
      "Handle common travel situations."
    ],
    [
      "Health and symptoms",
      "Vocabulary",
      "الصحة والأعراض",
      "Describe simple symptoms and ask for help."
    ],
    [
      "Work and study",
      "Vocabulary",
      "العمل والدراسة",
      "Discuss responsibilities and study routines."
    ],
    [
      "Making comparisons politely",
      "Speaking",
      "المقارنة بأسلوب مهذب",
      "Compare options and explain preferences."
    ],
    [
      "Reading emails and invitations",
      "Reading",
      "قراءة الرسائل والدعوات",
      "Identify purpose, date and requested action."
    ],
    [
      "Listening to announcements",
      "Listening",
      "الاستماع للإعلانات",
      "Catch changes, times and instructions."
    ],
    [
      "Writing an informal email",
      "Writing",
      "كتابة بريد غير رسمي",
      "Write a friendly email with a clear purpose."
    ],
    [
      "Writing a short review",
      "Writing",
      "كتابة مراجعة قصيرة",
      "Describe and evaluate a film, place or product."
    ],
    [
      "Asking for clarification",
      "Speaking",
      "طلب التوضيح",
      "Keep a conversation going when information is unclear."
    ],
    [
      "Giving directions",
      "Speaking",
      "إعطاء الاتجاهات",
      "Explain a route using sequence and location phrases."
    ],
    [
      "Quantifiers: a few and a little",
      "Grammar",
      "أدوات الكمية",
      "Describe small and large quantities accurately."
    ],
    [
      "Relative clauses: who and which",
      "Grammar",
      "جمل الوصل",
      "Add basic information about people and things."
    ],
    [
      "Reading for specific information",
      "Reading",
      "البحث عن معلومة محددة",
      "Scan short texts efficiently."
    ],
    [
      "Review: practical communication",
      "Reading",
      "مراجعة التواصل العملي",
      "Integrate A2 grammar and communication skills."
    ]
  ],
  "B1": [
    [
      "Present perfect versus past simple",
      "Grammar",
      "المضارع التام مقابل الماضي البسيط",
      "Choose between life experience and finished past time."
    ],
    [
      "Used to and would",
      "Grammar",
      "Used to وWould",
      "Describe past habits and states."
    ],
    [
      "Second conditional",
      "Grammar",
      "الشرط الثاني",
      "Discuss hypothetical situations."
    ],
    [
      "Reported speech",
      "Grammar",
      "الكلام المنقول",
      "Report statements and questions."
    ],
    [
      "Passive voice: present and past",
      "Grammar",
      "المبني للمجهول",
      "Focus on actions and results rather than agents."
    ],
    [
      "Relative clauses with whose and where",
      "Grammar",
      "جمل الوصل المتقدمة",
      "Give precise information about people and places."
    ],
    [
      "Modals of possibility",
      "Grammar",
      "أفعال الاحتمال",
      "Express degrees of certainty."
    ],
    [
      "Linking ideas in paragraphs",
      "Writing",
      "ربط الأفكار في الفقرات",
      "Create coherent paragraphs with logical links."
    ],
    [
      "Narrative tenses",
      "Grammar",
      "أزمنة السرد",
      "Combine past simple, continuous and perfect."
    ],
    [
      "Workplace communication",
      "Vocabulary",
      "التواصل في العمل",
      "Use suitable language in common work situations."
    ],
    [
      "Education and learning strategies",
      "Vocabulary",
      "التعليم واستراتيجيات التعلم",
      "Discuss learning methods and outcomes."
    ],
    [
      "Environment and sustainability",
      "Vocabulary",
      "البيئة والاستدامة",
      "Explain environmental issues and practical actions."
    ],
    [
      "Reading opinion articles",
      "Reading",
      "قراءة المقالات الرأيية",
      "Separate an opinion from supporting reasons."
    ],
    [
      "Listening to interviews",
      "Listening",
      "الاستماع للمقابلات",
      "Follow questions, answers and speaker attitudes."
    ],
    [
      "Writing a problem-solution essay",
      "Writing",
      "مقال المشكلة والحل",
      "Explain a problem and evaluate solutions."
    ],
    [
      "Writing a formal complaint",
      "Writing",
      "كتابة شكوى رسمية",
      "State a problem and request an appropriate remedy."
    ],
    [
      "Participating in discussions",
      "Speaking",
      "المشاركة في النقاشات",
      "Agree, disagree and build on others’ ideas."
    ],
    [
      "Giving a short presentation",
      "Speaking",
      "تقديم عرض قصير",
      "Organize and deliver a clear short presentation."
    ],
    [
      "Collocations and word partnerships",
      "Vocabulary",
      "المتلازمات اللفظية",
      "Use natural combinations of common words."
    ],
    [
      "Discourse markers",
      "Vocabulary",
      "روابط الخطاب",
      "Signal contrast, result, sequence and emphasis."
    ],
    [
      "Listening for implied meaning",
      "Listening",
      "فهم المعنى الضمني",
      "Use context to interpret indirect messages."
    ],
    [
      "Review: independent communication",
      "Reading",
      "مراجعة التواصل المستقل",
      "Combine B1 structures across all four skills."
    ]
  ],
  "B2": [
    [
      "Mixed conditionals",
      "Grammar",
      "الجمل الشرطية المختلطة",
      "Connect past conditions with present results."
    ],
    [
      "Advanced passive structures",
      "Grammar",
      "تراكيب المبني للمجهول المتقدمة",
      "Use reporting and impersonal passive patterns."
    ],
    [
      "Inversion for emphasis",
      "Grammar",
      "القلب للتوكيد",
      "Use formal inversion accurately."
    ],
    [
      "Cleft sentences",
      "Grammar",
      "الجمل المشقوقة",
      "Highlight important information."
    ],
    [
      "Modal verbs of deduction",
      "Grammar",
      "أفعال الاستنتاج",
      "Deduce present and past situations."
    ],
    [
      "Hedging and cautious claims",
      "Writing",
      "التحفظ في عرض الادعاءات",
      "Avoid overstating evidence."
    ],
    [
      "Academic vocabulary in context",
      "Vocabulary",
      "المفردات الأكاديمية",
      "Interpret and use academic words precisely."
    ],
    [
      "Idioms and register",
      "Vocabulary",
      "التعابير الاصطلاحية والسجل اللغوي",
      "Choose idioms appropriate to context."
    ],
    [
      "Argument structure and counterclaims",
      "Writing",
      "بناء الحجة والاعتراضات",
      "Develop claims and address counterarguments."
    ],
    [
      "Comparing data and trends",
      "Writing",
      "مقارنة البيانات والاتجاهات",
      "Describe changes and comparisons accurately."
    ],
    [
      "Reading editorials critically",
      "Reading",
      "قراءة المقالات النقدية",
      "Evaluate arguments and assumptions."
    ],
    [
      "Reading reports and proposals",
      "Reading",
      "قراءة التقارير والمقترحات",
      "Identify recommendations and evidence."
    ],
    [
      "Listening to panel discussions",
      "Listening",
      "الاستماع إلى نقاشات جماعية",
      "Track different speakers and viewpoints."
    ],
    [
      "Listening for stance and emphasis",
      "Listening",
      "تمييز الموقف والتوكيد",
      "Interpret emphasis and qualification."
    ],
    [
      "Negotiation language",
      "Speaking",
      "لغة التفاوض",
      "Make proposals, concessions and compromises."
    ],
    [
      "Handling challenging questions",
      "Speaking",
      "التعامل مع الأسئلة الصعبة",
      "Respond clearly under pressure."
    ],
    [
      "Formal presentations",
      "Speaking",
      "العروض الرسمية",
      "Deliver structured professional presentations."
    ],
    [
      "Writing a proposal",
      "Writing",
      "كتابة مقترح",
      "Present a need, plan, resources and outcomes."
    ],
    [
      "Cohesion and reference",
      "Writing",
      "الترابط والإحالة",
      "Use referencing and cohesive devices effectively."
    ],
    [
      "Nuance in word choice",
      "Vocabulary",
      "الفروق الدقيقة في اختيار الكلمات",
      "Select precise words with appropriate connotations."
    ],
    [
      "Summarising complex information",
      "Reading",
      "تلخيص المعلومات المعقدة",
      "Synthesize main points without distortion."
    ],
    [
      "Review: effective advanced communication",
      "Reading",
      "مراجعة التواصل المتقدم",
      "Integrate B2 language in academic and professional contexts."
    ]
  ],
  "C1": [
    [
      "Advanced tense and aspect choices",
      "Grammar",
      "اختيارات الزمن والجانب المتقدمة",
      "Use tense and aspect to express subtle meaning."
    ],
    [
      "Subjunctive and formal constructions",
      "Grammar",
      "صيغة التمني والتراكيب الرسمية",
      "Recognize formal subjunctive patterns."
    ],
    [
      "Ellipsis and substitution",
      "Grammar",
      "الحذف والاستبدال",
      "Avoid repetition while maintaining clarity."
    ],
    [
      "Complex noun phrases",
      "Grammar",
      "المركبات الاسمية المعقدة",
      "Compress information accurately in formal writing."
    ],
    [
      "Advanced collocation and idiomaticity",
      "Vocabulary",
      "المتلازمات والتعبير الطبيعي المتقدم",
      "Choose natural combinations and idiomatic phrasing."
    ],
    [
      "Rhetorical devices and persuasion",
      "Vocabulary",
      "الأساليب البلاغية والإقناع",
      "Recognize and use rhetorical techniques responsibly."
    ],
    [
      "Evaluating source credibility",
      "Reading",
      "تقييم موثوقية المصادر",
      "Assess authority, methods, bias and relevance."
    ],
    [
      "Synthesising multiple texts",
      "Reading",
      "تركيب المعلومات من نصوص متعددة",
      "Combine sources while preserving distinctions."
    ],
    [
      "Interpreting irony and understatement",
      "Reading",
      "فهم السخرية والتقليل",
      "Interpret indirect meaning through context."
    ],
    [
      "Dense academic listening",
      "Listening",
      "الاستماع الأكاديمي المكثف",
      "Follow complex arguments and terminology."
    ],
    [
      "Understanding implied disagreement",
      "Listening",
      "فهم الاختلاف الضمني",
      "Detect reservations and disagreement without explicit markers."
    ],
    [
      "Note-taking from extended talks",
      "Listening",
      "تدوين ملاحظات المحاضرات المطولة",
      "Capture hierarchy, evidence and conclusions."
    ],
    [
      "Writing a critical review",
      "Writing",
      "كتابة مراجعة نقدية",
      "Evaluate a work using explicit criteria."
    ],
    [
      "Writing an executive summary",
      "Writing",
      "كتابة ملخص تنفيذي",
      "Condense complex information for decision-makers."
    ],
    [
      "Research argument and limitations",
      "Writing",
      "الحجة البحثية وحدودها",
      "Present a defensible claim and acknowledge limitations."
    ],
    [
      "Editing for precision and style",
      "Writing",
      "التحرير للدقة والأسلوب",
      "Improve concision, cohesion and register."
    ],
    [
      "Facilitating complex discussions",
      "Speaking",
      "إدارة النقاشات المعقدة",
      "Guide discussion and integrate perspectives."
    ],
    [
      "Impromptu speaking with structure",
      "Speaking",
      "التحدث الارتجالي المنظم",
      "Build coherent responses with limited preparation."
    ],
    [
      "Nuanced disagreement",
      "Speaking",
      "الاختلاف الدقيق والمهذب",
      "Disagree precisely while maintaining rapport."
    ],
    [
      "Storytelling for professional impact",
      "Speaking",
      "السرد المؤثر في السياق المهني",
      "Use narrative structure to communicate insight."
    ],
    [
      "Pragmatics and intercultural communication",
      "Speaking",
      "التداولية والتواصل بين الثقافات",
      "Interpret indirectness and adapt to context."
    ],
    [
      "Review: expert-level communication",
      "Reading",
      "مراجعة التواصل المتقدم جداً",
      "Integrate C1 control across complex contexts."
    ]
  ]
};
const generatedLessons: Lesson[] = (Object.entries(EXTRA_TOPICS) as [Lesson['level'], [string,string,string,string][]][]).flatMap(([level, topics]) => topics.map(([title, category, titleAr, summary]) => {
  const slug = `${level.toLowerCase()}-${title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}`;
  const examples = [
    {en: `A practical example of ${title.toLowerCase()} is part of everyday communication.`, ar: `مثال عملي على ${titleAr} في التواصل اليومي.`},
    {en: `Learners can apply this skill in study, work and real conversations.`, ar: `يمكن للمتعلم تطبيق هذه المهارة في الدراسة والعمل والمحادثات الحقيقية.`}
  ];
  const practice = [{question: `Which approach best demonstrates ${title.toLowerCase()}?`, options: ['Use the structure or strategy accurately in context','Ignore the context and guess','Repeat unrelated words'], answer: 0, why: 'الاختيار الصحيح هو الذي يطبق المهارة في سياق واضح وملائم.'}];
  return {slug, level, titleEn:title, titleAr, category:category as Lesson['category'], minutes:18, summaryEn:summary, summaryAr:`${summary} تعلّم القاعدة أو المهارة مع أمثلة وتطبيقات.`, goals:[summary, 'Recognize the target language in context', 'Apply the skill in a short task'], explanation:`يركز هذا الدرس على ${titleAr} (${title}). ابدأ بفهم الغرض من المهارة والسياق الذي تستخدم فيه. لاحظ الكلمات أو التراكيب الدالة، ثم قارن المثال الصحيح بالاستخدام غير المناسب. عند التطبيق، اقرأ أو استمع إلى السياق كاملاً قبل اختيار الصيغة. حاول إنتاج جمل من عندك، وراجع الدقة والوضوح والملاءمة. هذه المهارة تتطور بالتكرار والممارسة في مواقف واقعية، وليس بحفظ القاعدة وحدها.`, examples, vocabulary:[{word:title.split(' ')[0].toLowerCase(), meaning:titleAr, example:examples[0].en},{word:'context',meaning:'السياق',example:'Meaning depends on context.'}], practice};
}));

export const lessons = [...L, ...generatedLessons];
export function getLesson(slug: string) { return lessons.find((lesson) => lesson.slug === slug); }
export const levelMeta = [
 {level:'A1',en:'Beginner',ar:'مبتدئ',desc:'Build your first sentences and everyday vocabulary.'},
 {level:'A2',en:'Elementary',ar:'ابتدائي',desc:'Handle familiar situations and simple conversations.'},
 {level:'B1',en:'Intermediate',ar:'متوسط',desc:'Express opinions and manage most daily interactions.'},
 {level:'B2',en:'Upper intermediate',ar:'فوق المتوسط',desc:'Communicate confidently in complex situations.'},
 {level:'C1',en:'Advanced',ar:'متقدم',desc:'Use English flexibly for academic and professional purposes.'},
] as const;
