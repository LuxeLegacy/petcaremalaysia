import { Language } from './translations';

export interface YQAItem {
  id: string;
  category: 'cat-emergency' | 'cat-maintenance' | 'dog-emergency' | 'dog-maintenance';
  question: {
    en: string;
    ms: string;
    zh: string;
  };
  shortAnswer: {
    en: string;
    ms: string;
    zh: string;
  };
  fullAnswer: {
    en: string;
    ms: string;
    zh: string;
  };
  keywords: string[];
}

export interface YQALabels {
  sectionTitle: { en: string; ms: string; zh: string };
  searchPlaceholder: { en: string; ms: string; zh: string };
  categories: {
    'cat-emergency': { en: string; ms: string; zh: string };
    'cat-maintenance': { en: string; ms: string; zh: string };
    'dog-emergency': { en: string; ms: string; zh: string };
    'dog-maintenance': { en: string; ms: string; zh: string };
    all: { en: string; ms: string; zh: string };
  };
  readMore: { en: string; ms: string; zh: string };
  readLess: { en: string; ms: string; zh: string };
  noResults: { en: string; ms: string; zh: string };
}

export const yqaLabels: YQALabels = {
  sectionTitle: {
    en: 'Your Questions Answered',
    ms: 'Soalan Anda Dijawab',
    zh: '您的问题解答'
  },
  searchPlaceholder: {
    en: 'Search for pet health questions...',
    ms: 'Cari soalan kesihatan haiwan peliharaan...',
    zh: '搜索宠物健康问题...'
  },
  categories: {
    'cat-emergency': {
      en: '🐱 Cat Emergency',
      ms: '🐱 Kecemasan Kucing',
      zh: '🐱 猫咪急症'
    },
    'cat-maintenance': {
      en: '🐱 Cat Care',
      ms: '🐱 Penjagaan Kucing',
      zh: '🐱 猫咪护理'
    },
    'dog-emergency': {
      en: '🐕 Dog Emergency',
      ms: '🐕 Kecemasan Anjing',
      zh: '🐕 狗狗急症'
    },
    'dog-maintenance': {
      en: '🐕 Dog Care',
      ms: '🐕 Penjagaan Anjing',
      zh: '🐕 狗狗护理'
    },
    all: {
      en: 'All Questions',
      ms: 'Semua Soalan',
      zh: '所有问题'
    }
  },
  readMore: {
    en: 'Read more',
    ms: 'Baca lagi',
    zh: '阅读更多'
  },
  readLess: {
    en: 'Show less',
    ms: 'Tunjuk kurang',
    zh: '收起'
  },
  noResults: {
    en: 'No questions found. Try a different search term.',
    ms: 'Tiada soalan dijumpai. Cuba istilah carian lain.',
    zh: '未找到问题。请尝试其他搜索词。'
  }
};

// Cat Emergency Q&As (20 items) - with {city} and {state} placeholders for unique content
export const yqaItems: YQAItem[] = [
  {
    id: 'cat-uti-1',
    category: 'cat-emergency',
    question: {
      en: 'What are the signs of urinary tract infection (UTI) in cats in {city}?',
      ms: 'Apakah tanda-tanda jangkitan saluran kencing (UTI) pada kucing di {city}?',
      zh: '{city}猫咪尿路感染(UTI)有哪些症状?'
    },
    shortAnswer: {
      en: 'Pet owners in {city} should watch for frequent urination, straining to urinate, blood in urine, urinating outside litter box, crying while urinating, and excessive licking of genital area. Male cats may develop life-threatening blockages requiring immediate veterinary care in {city}.',
      ms: 'Pemilik haiwan peliharaan di {city} perlu perhatikan tanda-tanda termasuk kerap membuang air kecil, mengejan ketika membuang air kecil, darah dalam air kencing, membuang air kecil di luar kotak pasir, dan menjilat kawasan kemaluan secara berlebihan.',
      zh: '{city}的宠物主人应注意症状包括频繁排尿、排尿困难、尿血、在猫砂盆外排尿、排尿时哭叫、过度舔舐生殖器区域。公猫可能出现危及生命的堵塞,需要在{city}立即就医。'
    },
    fullAnswer: {
      en: 'Urinary tract infections in cats can be serious and require prompt veterinary attention from a vet clinic in {city}, {state}. Common signs include: frequent trips to the litter box with little output, straining or crying while urinating, blood in the urine (pink or red tinge), urinating in unusual places, excessive grooming of the genital area, and strong-smelling urine. Male cats are at higher risk for urethral blockages, which can become life-threatening within 24-48 hours. If your cat in {city} is repeatedly going to the litter box without producing urine, or seems in pain, seek emergency veterinary care immediately at a local {city} vet clinic. Treatment typically includes antibiotics, pain medication, and dietary changes. Prevention involves ensuring adequate water intake and a proper diet.',
      ms: 'Jangkitan saluran kencing pada kucing boleh menjadi serius dan memerlukan perhatian veterinar segera di {city}, {state}. Tanda-tanda biasa termasuk: kerap ke kotak pasir dengan sedikit output, mengejan atau menangis semasa membuang air kecil, darah dalam air kencing, membuang air kecil di tempat luar biasa, menjilat kawasan kemaluan secara berlebihan, dan air kencing berbau kuat. Kucing jantan berisiko lebih tinggi untuk penyumbatan uretra, yang boleh mengancam nyawa dalam 24-48 jam. Jika kucing anda di {city} berulang kali ke kotak pasir tanpa menghasilkan air kencing, dapatkan rawatan veterinar kecemasan segera. Rawatan biasanya termasuk antibiotik, ubat sakit, dan perubahan diet.',
      zh: '猫咪尿路感染可能很严重,需要{city}({state})兽医的及时护理。常见症状包括:频繁去猫砂盆但排尿量少、排尿时用力或哭叫、尿血(粉红色或红色)、在异常地方排尿、过度清理生殖器区域、尿液气味强烈。公猫更容易发生尿道堵塞,可能在24-48小时内危及生命。如果您在{city}的猫反复去猫砂盆但无法排尿,请立即在{city}当地兽医诊所寻求紧急护理。治疗通常包括抗生素、止痛药和饮食调整。'
    },
    keywords: ['UTI', 'urinary', 'infection', 'blood urine', 'straining', 'litter box', 'blockage']
  },
  {
    id: 'cat-respiratory-1',
    category: 'cat-emergency',
    question: {
      en: 'How do I know if my cat has a respiratory infection in {city}?',
      ms: 'Bagaimana saya tahu jika kucing saya di {city} mempunyai jangkitan pernafasan?',
      zh: '如何判断我在{city}的猫是否有呼吸道感染?'
    },
    shortAnswer: {
      en: 'Cat owners in {city}, {state} should watch for sneezing, nasal discharge, watery or crusty eyes, coughing, difficulty breathing, loss of appetite, fever, and lethargy. Respiratory infections can spread quickly between cats and may require antibiotics or antiviral medication from a {city} veterinarian.',
      ms: 'Pemilik kucing di {city}, {state} perlu perhatikan tanda-tanda termasuk bersin, lelehan hidung, mata berair atau berkerak, batuk, kesukaran bernafas, hilang selera makan, demam, dan lesu. Jangkitan pernafasan boleh merebak dengan cepat antara kucing.',
      zh: '{city}({state})的猫主人应注意症状包括打喷嚏、流鼻涕、眼睛流泪或有眼屎、咳嗽、呼吸困难、食欲下降、发烧和嗜睡。呼吸道感染可以在猫之间快速传播,可能需要{city}兽医提供的抗生素或抗病毒药物。'
    },
    fullAnswer: {
      en: 'Upper respiratory infections (URIs) are common in cats in {city} and can range from mild to severe. Key symptoms to watch for include: persistent sneezing, nasal congestion or discharge (clear or colored), eye discharge that may cause crusting, mouth ulcers, drooling, loss of appetite due to inability to smell food, fever, lethargy, and difficulty breathing. These infections are often caused by feline herpesvirus or calicivirus and can be highly contagious among cats in {city}, {state}. Kittens, senior cats, and immunocompromised cats are at higher risk for complications. If your cat shows labored breathing, refuses to eat for more than 24 hours, or has severe eye involvement, seek veterinary care immediately at a {city} animal clinic. Treatment may include antibiotics for secondary bacterial infections, antiviral medications, eye drops, and supportive care including fluids and nutrition support.',
      ms: 'Jangkitan saluran pernafasan atas (URI) adalah biasa pada kucing di {city} dan boleh berkisar dari ringan hingga teruk. Gejala utama yang perlu diperhatikan termasuk: bersin berterusan, hidung tersumbat atau lelehan, lelehan mata yang boleh menyebabkan kerak, ulser mulut, air liur berlebihan, hilang selera makan kerana tidak dapat menghidu makanan, demam, lesu, dan kesukaran bernafas. Jangkitan ini sering disebabkan oleh herpesvirus kucing atau calicivirus dan sangat menular di kalangan kucing di {city}, {state}. Anak kucing, kucing tua, dan kucing dengan sistem imun lemah berisiko lebih tinggi untuk komplikasi. Jika kucing anda menunjukkan pernafasan yang sukar, enggan makan lebih dari 24 jam, atau mempunyai masalah mata yang teruk, dapatkan rawatan veterinar segera di klinik haiwan {city}.',
      zh: '上呼吸道感染(URI)在{city}的猫中很常见,严重程度从轻微到严重不等。需要注意的主要症状包括:持续打喷嚏、鼻塞或流鼻涕(透明或有颜色)、可能导致结痂的眼部分泌物、口腔溃疡、流口水、因无法闻到食物而食欲不振、发烧、嗜睡和呼吸困难。这些感染通常由猫疱疹病毒或杯状病毒引起,在{city}({state})的猫之间具有高度传染性。幼猫、老年猫和免疫功能低下的猫更容易出现并发症。如果您的猫呼吸困难、超过24小时拒绝进食或眼部问题严重,请立即在{city}动物诊所就医。'
    },
    keywords: ['respiratory', 'sneezing', 'coughing', 'nasal', 'discharge', 'breathing', 'URI', 'cold']
  },
  {
    id: 'cat-flutd-1',
    category: 'cat-emergency',
    question: {
      en: 'What is FLUTD and why is it an emergency for cats in {city}?',
      ms: 'Apakah FLUTD dan mengapa ia kecemasan pada kucing di {city}?',
      zh: '什么是FLUTD,为什么它对{city}的猫来说是紧急情况?'
    },
    shortAnswer: {
      en: 'FLUTD (Feline Lower Urinary Tract Disease) affects the bladder and urethra of cats in {city}. It becomes an emergency when cats cannot urinate due to blockage, causing toxin buildup that can be fatal within 24-72 hours. Male cats in {state} are especially at risk.',
      ms: 'FLUTD (Penyakit Saluran Kencing Bawah Kucing) menjejaskan pundi kencing dan uretra kucing di {city}. Ia menjadi kecemasan apabila kucing tidak dapat membuang air kecil akibat penyumbatan, menyebabkan pengumpulan toksin yang boleh membawa maut dalam 24-72 jam.',
      zh: 'FLUTD(猫下尿路疾病)影响{city}猫的膀胱和尿道。当猫因堵塞而无法排尿时,它就成为紧急情况,导致毒素积累,可能在24-72小时内致命。{state}的公猫尤其危险。'
    },
    fullAnswer: {
      en: 'Feline Lower Urinary Tract Disease (FLUTD) is a term describing conditions affecting the bladder and urethra in cats in {city}, {state}. While some cases are mild, FLUTD becomes a life-threatening emergency when urinary blockage occurs. Male cats are particularly vulnerable due to their narrow urethra. Emergency signs include: straining to urinate with no urine production, crying in pain, repeatedly visiting the litter box, vomiting, lethargy, and a distended or painful abdomen. A complete blockage prevents the kidneys from expelling toxins, leading to dangerous potassium buildup that can cause heart failure within 24-72 hours. If you suspect a blockage in your cat in {city}, do not wait - seek emergency veterinary care immediately at a {city} emergency vet clinic. Treatment requires catheterization to relieve the blockage, IV fluids, and monitoring. Long-term management includes dietary changes, stress reduction, and increased water intake.',
      ms: 'Penyakit Saluran Kencing Bawah Kucing (FLUTD) adalah istilah yang menggambarkan keadaan yang menjejaskan pundi kencing dan uretra pada kucing di {city}, {state}. Walaupun sesetengah kes adalah ringan, FLUTD menjadi kecemasan yang mengancam nyawa apabila penyumbatan kencing berlaku. Kucing jantan sangat terdedah kerana uretra mereka yang sempit. Tanda-tanda kecemasan termasuk: mengejan untuk membuang air kecil tanpa penghasilan air kencing, menangis kesakitan, berulang kali ke kotak pasir, muntah, lesu, dan perut yang kembung atau sakit. Penyumbatan lengkap menghalang buah pinggang daripada mengeluarkan toksin, menyebabkan pengumpulan kalium berbahaya yang boleh menyebabkan kegagalan jantung dalam 24-72 jam. Jika anda mengesyaki penyumbatan pada kucing anda di {city}, dapatkan rawatan veterinar kecemasan segera.',
      zh: '猫下尿路疾病(FLUTD)是描述影响{city}({state})猫膀胱和尿道的疾病的术语。虽然有些病例较轻,但当发生尿路堵塞时,FLUTD会成为危及生命的紧急情况。公猫由于尿道狭窄而特别容易受影响。紧急症状包括:用力排尿但没有尿液、痛苦地哭叫、反复去猫砂盆、呕吐、嗜睡、腹部膨胀或疼痛。完全堵塞会阻止肾脏排出毒素,导致危险的钾积累,可能在24-72小时内导致心脏衰竭。如果您怀疑{city}的猫有堵塞,不要等待 - 立即在{city}紧急兽医诊所寻求紧急护理。'
    },
    keywords: ['FLUTD', 'urinary', 'blockage', 'bladder', 'urethra', 'straining', 'emergency']
  },
  {
    id: 'cat-skin-allergy-1',
    category: 'cat-emergency',
    question: {
      en: 'How do I treat skin allergies in my cat in {city}?',
      ms: 'Bagaimana saya merawat alahan kulit pada kucing saya di {city}?',
      zh: '如何治疗我在{city}的猫的皮肤过敏?'
    },
    shortAnswer: {
      en: 'Skin allergies in cats in {city}, {state} cause itching, hair loss, redness, and scabs. Treatment involves identifying triggers (food, fleas, environmental), using prescribed medications like antihistamines or steroids, regular flea prevention, and special diets. Severe reactions require immediate veterinary care in {city}.',
      ms: 'Alahan kulit pada kucing di {city}, {state} menyebabkan gatal, keguguran bulu, kemerahan, dan kudis. Rawatan melibatkan mengenal pasti pencetus, menggunakan ubat yang ditetapkan seperti antihistamin atau steroid, pencegahan kutu secara tetap, dan diet khas.',
      zh: '{city}({state})猫的皮肤过敏会导致瘙痒、脱毛、发红和结痂。治疗包括识别触发因素(食物、跳蚤、环境)、使用处方药如抗组胺药或类固醇、定期预防跳蚤和特殊饮食。严重反应需要在{city}立即兽医护理。'
    },
    fullAnswer: {
      en: 'Cat skin allergies (allergic dermatitis) can significantly impact your pet\'s quality of life in {city}, {state}. Common allergens include flea saliva, food ingredients (chicken, fish, grains), and environmental factors (pollen, dust mites). Symptoms include intense scratching, over-grooming leading to hair loss, red or inflamed skin, scabs and crusts, ear infections, and miliary dermatitis (small bumps). Treatment approach depends on the cause: For flea allergies, strict flea prevention is essential in {city}\'s tropical climate. For food allergies, an elimination diet trial helps identify triggers. For environmental allergies, reducing exposure and medications help manage symptoms. Your {city} vet may prescribe antihistamines, steroids, immunotherapy, or newer medications like Apoquel. Regular grooming, omega fatty acid supplements, and medicated shampoos can provide relief. If your cat develops facial swelling, difficulty breathing, or severe hives, seek emergency care immediately at a {city} veterinary clinic as this could indicate anaphylaxis.',
      ms: 'Alahan kulit kucing (dermatitis alergik) boleh memberi kesan ketara kepada kualiti hidup haiwan peliharaan anda di {city}, {state}. Alergen biasa termasuk air liur kutu, bahan makanan (ayam, ikan, bijirin), dan faktor persekitaran (debunga, hama habuk). Gejala termasuk menggaru dengan kuat, menjilat berlebihan yang menyebabkan keguguran bulu, kulit merah atau meradang, kudis dan kerak, jangkitan telinga, dan dermatitis miliari. Pendekatan rawatan bergantung kepada punca: Untuk alahan kutu, pencegahan kutu yang ketat adalah penting dalam iklim tropika {city}. Untuk alahan makanan, percubaan diet penghapusan membantu mengenal pasti pencetus. Veterinar {city} anda mungkin menetapkan antihistamin, steroid, imunoterapi, atau ubat yang lebih baru. Jika kucing anda mengalami bengkak muka atau kesukaran bernafas, dapatkan rawatan kecemasan segera di klinik veterinar {city}.',
      zh: '猫皮肤过敏(过敏性皮炎)会严重影响您在{city}({state})宠物的生活质量。常见过敏原包括跳蚤唾液、食物成分(鸡肉、鱼、谷物)和环境因素(花粉、尘螨)。症状包括剧烈抓挠、过度舔毛导致脱毛、皮肤发红或发炎、结痂、耳部感染和粟粒性皮炎。治疗方法取决于病因:对于跳蚤过敏,在{city}的热带气候中严格的跳蚤预防至关重要。对于食物过敏,排除饮食试验有助于确定触发因素。您的{city}兽医可能会开抗组胺药、类固醇、免疫疗法或较新的药物。如果您的猫出现面部肿胀或呼吸困难,请立即在{city}兽医诊所寻求紧急护理。'
    },
    keywords: ['skin', 'allergy', 'itching', 'scratching', 'hair loss', 'dermatitis', 'rash', 'flea']
  },
  {
    id: 'cat-ear-infection-1',
    category: 'cat-emergency',
    question: {
      en: 'What are the symptoms of ear infection in cats in {city}?',
      ms: 'Apakah gejala jangkitan telinga pada kucing di {city}?',
      zh: '{city}猫耳朵感染有哪些症状?'
    },
    shortAnswer: {
      en: 'Cat owners in {city}, {state} should watch for head shaking, ear scratching, dark discharge, bad odor, redness, swelling, balance problems, and sensitivity to touch. Ear infections can be caused by mites, bacteria, yeast, or allergies and require veterinary diagnosis and treatment in {city}.',
      ms: 'Pemilik kucing di {city}, {state} perlu perhatikan gejala termasuk menggelengkan kepala, menggaru telinga, lelehan gelap, bau busuk, kemerahan, bengkak, masalah keseimbangan, dan sensitif kepada sentuhan. Jangkitan telinga memerlukan diagnosis dan rawatan veterinar di {city}.',
      zh: '{city}({state})的猫主人应注意症状包括摇头、抓耳朵、深色分泌物、异味、发红、肿胀、平衡问题和触摸敏感。耳朵感染可能由螨虫、细菌、酵母菌或过敏引起,需要在{city}进行兽医诊断和治疗。'
    },
    fullAnswer: {
      en: 'Ear infections (otitis) in cats in {city} can be painful and, if left untreated, may lead to hearing loss or spread to the inner ear affecting balance. Warning signs include: frequent head shaking or tilting, excessive ear scratching, dark brown or black discharge, unpleasant odor from the ears, redness and swelling inside the ear, crying when ears are touched, loss of balance or disorientation, and hair loss around the ears. Common causes include ear mites (especially in kittens), bacterial infections, yeast overgrowth, allergies, and foreign objects. Your {city} vet will examine the ear canal and may take a sample to identify the cause. Treatment typically includes ear cleaning, topical medications, and sometimes oral antibiotics or antifungals. Never use cotton swabs deep in your cat\'s ears. For recurrent infections, underlying allergies should be investigated by a {city}, {state} veterinary specialist. Seek immediate care if your cat shows signs of vestibular disease (head tilt, circling, falling).',
      ms: 'Jangkitan telinga (otitis) pada kucing di {city} boleh menyakitkan dan, jika tidak dirawat, boleh menyebabkan kehilangan pendengaran atau merebak ke telinga dalam yang menjejaskan keseimbangan. Tanda-tanda amaran termasuk: kerap menggelengkan atau mencondongkan kepala, menggaru telinga secara berlebihan, lelehan coklat gelap atau hitam, bau tidak menyenangkan dari telinga, kemerahan dan bengkak di dalam telinga, menangis apabila telinga disentuh, kehilangan keseimbangan, dan keguguran bulu di sekitar telinga. Punca biasa termasuk hama telinga (terutamanya pada anak kucing), jangkitan bakteria, pertumbuhan yis berlebihan, alahan, dan objek asing. Veterinar {city} anda akan memeriksa saluran telinga dan mungkin mengambil sampel untuk mengenal pasti punca. Rawatan biasanya termasuk pembersihan telinga dan ubat topikal.',
      zh: '{city}猫耳朵感染(中耳炎)可能很痛苦,如果不治疗,可能导致听力丧失或扩散到内耳影响平衡。警告信号包括:频繁摇头或歪头、过度抓耳朵、深棕色或黑色分泌物、耳朵有难闻气味、耳内发红肿胀、触摸耳朵时哭叫、失去平衡或迷失方向、耳朵周围脱毛。常见原因包括耳螨(尤其是幼猫)、细菌感染、酵母菌过度生长、过敏和异物。您的{city}兽医将检查耳道并可能取样以确定原因。治疗通常包括清洁耳朵和局部用药。如果您的猫出现前庭疾病迹象(歪头、转圈、跌倒),请立即在{city}({state})就医。'
    },
    keywords: ['ear', 'infection', 'mites', 'discharge', 'head shaking', 'scratching', 'otitis']
  },
  {
    id: 'cat-eye-infection-1',
    category: 'cat-emergency',
    question: {
      en: 'How do I recognize and treat eye infections in cats in {city}?',
      ms: 'Bagaimana saya mengenali dan merawat jangkitan mata pada kucing di {city}?',
      zh: '如何识别和治疗{city}猫的眼部感染?'
    },
    shortAnswer: {
      en: 'Cat owners in {city} should look for redness, swelling, discharge (clear, yellow, or green), squinting, pawing at eyes, cloudiness, and third eyelid showing. Eye infections need prompt veterinary treatment in {city}, {state} to prevent vision damage. Never use human eye drops without vet approval.',
      ms: 'Pemilik kucing di {city} perlu perhatikan tanda-tanda termasuk kemerahan, bengkak, lelehan, menyipitkan mata, mencakar mata, kekeruhan, dan kelopak mata ketiga kelihatan. Jangkitan mata memerlukan rawatan veterinar segera di {city}, {state} untuk mencegah kerosakan penglihatan.',
      zh: '{city}的猫主人应注意症状包括发红、肿胀、分泌物(透明、黄色或绿色)、眯眼、用爪子抓眼睛、混浊和第三眼睑显现。眼部感染需要在{city}({state})及时的兽医治疗以防止视力损伤。未经兽医批准,切勿使用人用眼药水。'
    },
    fullAnswer: {
      en: 'Eye infections in cats in {city} require prompt attention to prevent serious complications including vision loss. Common symptoms include: excessive tearing or watery eyes, thick discharge (yellow, green, or white), red or swollen conjunctiva, squinting or holding the eye closed, rubbing or pawing at the eye, cloudiness or changes in eye color, visible third eyelid, and sensitivity to light. Causes include bacterial infections, viral infections (herpesvirus, calicivirus), conjunctivitis, corneal ulcers, and allergies. Diagnosis requires a veterinary examination at a {city}, {state} clinic including possible staining tests to check for ulcers. Treatment depends on the cause: antibacterial drops for bacterial infections, antiviral medications for herpes, anti-inflammatory drops, and supportive care. Never use over-the-counter human eye drops without veterinary guidance from your {city} vet as some can worsen the condition. Seek emergency care immediately at a {city} animal hospital if the eye appears to be bulging, there is significant swelling, or your cat cannot open the eye at all.',
      ms: 'Jangkitan mata pada kucing di {city} memerlukan perhatian segera untuk mencegah komplikasi serius termasuk kehilangan penglihatan. Gejala biasa termasuk: mata berair berlebihan, lelehan pekat (kuning, hijau, atau putih), konjunktiva merah atau bengkak, menyipitkan atau menutup mata, menggosok atau mencakar mata, kekeruhan atau perubahan warna mata, kelopak mata ketiga kelihatan, dan sensitif kepada cahaya. Punca termasuk jangkitan bakteria, jangkitan virus, konjunktivitis, ulser kornea, dan alahan. Diagnosis memerlukan pemeriksaan veterinar di klinik {city}, {state}. Rawatan bergantung kepada punca. Jangan sekali-kali menggunakan ubat titisan mata manusia tanpa bimbingan veterinar {city} anda kerana sesetengahnya boleh memburukkan keadaan.',
      zh: '{city}猫眼部感染需要及时处理以防止严重并发症,包括视力丧失。常见症状包括:过度流泪、浓厚分泌物(黄色、绿色或白色)、结膜发红或肿胀、眯眼或闭眼、揉眼或用爪子抓眼睛、混浊或眼色变化、第三眼睑可见、对光敏感。原因包括细菌感染、病毒感染(疱疹病毒、杯状病毒)、结膜炎、角膜溃疡和过敏。诊断需要在{city}({state})诊所进行兽医检查。治疗取决于病因。未经{city}兽医指导,切勿使用非处方人用眼药水,因为有些可能会使病情恶化。如果眼睛看起来凸出、有明显肿胀或猫完全无法睁眼,请立即在{city}动物医院就医。'
    },
    keywords: ['eye', 'infection', 'discharge', 'conjunctivitis', 'redness', 'squinting', 'vision']
  },
  {
    id: 'cat-dental-1',
    category: 'cat-emergency',
    question: {
      en: 'What are signs of dental disease in cats in {city} and when is it an emergency?',
      ms: 'Apakah tanda-tanda penyakit pergigian pada kucing di {city} dan bila ia menjadi kecemasan?',
      zh: '{city}猫牙齿疾病有哪些症状,什么时候是紧急情况?'
    },
    shortAnswer: {
      en: 'Cat owners in {city}, {state} should watch for bad breath, drooling, difficulty eating, pawing at mouth, bleeding gums, loose teeth, and facial swelling. It becomes an emergency with severe pain, inability to eat, facial swelling suggesting abscess, or signs of infection spreading.',
      ms: 'Pemilik kucing di {city}, {state} perlu perhatikan tanda-tanda termasuk nafas berbau, air liur berlebihan, kesukaran makan, mencakar mulut, gusi berdarah, gigi longgar, dan bengkak muka. Ia menjadi kecemasan dengan kesakitan teruk atau ketidakupayaan untuk makan.',
      zh: '{city}({state})的猫主人应注意症状包括口臭、流口水、进食困难、用爪子抓嘴、牙龈出血、牙齿松动和面部肿胀。当出现剧烈疼痛、无法进食、面部肿胀提示脓肿或感染扩散迹象时,就成为紧急情况。'
    },
    fullAnswer: {
      en: 'Dental disease affects the majority of cats over age 3 in {city}, {state} and can cause significant pain and health issues. Warning signs include: persistent bad breath (halitosis), red or swollen gums, visible tartar buildup, drooling (sometimes with blood), difficulty eating or dropping food, pawing at the face or mouth, loose or missing teeth, reluctance to be touched on the face, weight loss, and behavioral changes. Common conditions include gingivitis, periodontitis, tooth resorption (FORL), and stomatitis. Dental disease becomes an emergency when there is severe facial swelling (indicating abscess), inability to eat for more than 24 hours, signs of systemic infection (fever, lethargy), difficulty breathing due to swelling, or uncontrolled bleeding. Seek emergency veterinary care at a {city} clinic immediately. Treatment ranges from professional cleaning under anesthesia to tooth extractions. Prevention includes regular dental checkups at your {city} vet, appropriate diet, and dental treats or water additives. Many cats hide dental pain well, so regular veterinary examinations in {city} are crucial.',
      ms: 'Penyakit pergigian menjejaskan majoriti kucing berumur lebih 3 tahun di {city}, {state} dan boleh menyebabkan kesakitan dan masalah kesihatan yang ketara. Tanda-tanda amaran termasuk: nafas berbau berterusan, gusi merah atau bengkak, pembentukan karang gigi yang kelihatan, air liur berlebihan, kesukaran makan, mencakar muka atau mulut, gigi longgar atau hilang, enggan disentuh di muka, penurunan berat badan, dan perubahan tingkah laku. Penyakit pergigian menjadi kecemasan apabila terdapat bengkak muka yang teruk, ketidakupayaan untuk makan lebih dari 24 jam, tanda-tanda jangkitan sistemik, atau pendarahan yang tidak terkawal. Dapatkan rawatan veterinar kecemasan di klinik {city} segera. Pencegahan termasuk pemeriksaan pergigian berkala di veterinar {city} anda dan diet yang sesuai.',
      zh: '牙齿疾病影响{city}({state})大多数3岁以上的猫,可能导致严重疼痛和健康问题。警告信号包括:持续口臭、牙龈红肿、可见牙石积累、流口水(有时带血)、进食困难或掉落食物、用爪子抓脸或嘴、牙齿松动或缺失、不愿被触摸脸部、体重下降和行为改变。当出现严重面部肿胀(表明脓肿)、超过24小时无法进食、全身感染迹象(发烧、嗜睡)、因肿胀导致呼吸困难或无法控制的出血时,牙齿疾病就成为紧急情况。请立即在{city}诊所寻求紧急兽医护理。预防包括在{city}兽医处定期牙科检查和适当饮食。'
    },
    keywords: ['dental', 'teeth', 'gums', 'bad breath', 'drooling', 'mouth', 'tooth', 'abscess']
  },
  {
    id: 'cat-kidney-1',
    category: 'cat-emergency',
    question: {
      en: 'What are the signs of kidney disease in cats in {city}?',
      ms: 'Apakah tanda-tanda penyakit buah pinggang pada kucing di {city}?',
      zh: '{city}猫肾病有哪些症状?'
    },
    shortAnswer: {
      en: 'Cat owners in {city}, {state} should watch for increased thirst and urination, weight loss, poor appetite, vomiting, bad breath, lethargy, and poor coat condition. Kidney disease is common in older cats in {city} and requires ongoing management. Acute kidney failure is a medical emergency.',
      ms: 'Pemilik kucing di {city}, {state} perlu perhatikan tanda-tanda termasuk rasa dahaga dan kencing yang meningkat, penurunan berat badan, selera makan yang lemah, muntah, nafas berbau, lesu, dan keadaan bulu yang buruk. Penyakit buah pinggang biasa pada kucing tua di {city}.',
      zh: '{city}({state})的猫主人应注意症状包括口渴和排尿增加、体重下降、食欲不振、呕吐、口臭、嗜睡和毛发状况差。肾病在{city}的老年猫中很常见,需要持续管理。急性肾衰竭是医疗紧急情况。'
    },
    fullAnswer: {
      en: 'Chronic kidney disease (CKD) is one of the most common conditions in senior cats in {city}, {state}, affecting up to 30% of cats over 15 years old. Early signs are often subtle and include: increased water consumption (polydipsia), increased urination (polyuria), gradual weight loss despite normal appetite initially, decreased appetite over time, occasional vomiting, bad breath with ammonia-like odor, lethargy and weakness, poor coat quality, and constipation. As disease progresses, symptoms worsen and may include mouth ulcers, severe dehydration, and neurological signs. Acute kidney injury presents more suddenly with severe symptoms requiring emergency care at a {city} veterinary hospital. Diagnosis involves blood tests (elevated BUN and creatinine), urine tests, and sometimes imaging at your {city} vet clinic. Management includes prescription kidney diets, fluid therapy, medications for blood pressure and phosphorus control, and regular monitoring at your {city}, {state} veterinarian. Early detection through annual blood work in senior cats allows for better management and quality of life.',
      ms: 'Penyakit buah pinggang kronik (CKD) adalah salah satu keadaan paling biasa pada kucing tua di {city}, {state}, menjejaskan sehingga 30% kucing berumur lebih 15 tahun. Tanda-tanda awal sering halus dan termasuk: peningkatan penggunaan air, peningkatan kencing, penurunan berat badan secara beransur-ansur, penurunan selera makan, muntah sekali-sekala, nafas berbau dengan bau seperti ammonia, lesu dan lemah, kualiti bulu yang buruk, dan sembelit. Diagnosis melibatkan ujian darah, ujian air kencing, dan kadangkala pengimejan di klinik veterinar {city} anda. Pengurusan termasuk diet khas buah pinggang, terapi cecair, ubat-ubatan, dan pemantauan berkala di veterinar {city}, {state} anda. Pengesanan awal melalui kerja darah tahunan pada kucing tua membolehkan pengurusan yang lebih baik.',
      zh: '慢性肾病(CKD)是{city}({state})老年猫中最常见的疾病之一,影响多达30%的15岁以上猫。早期迹象通常很微妙,包括:饮水量增加、排尿增加、尽管最初食欲正常但体重逐渐下降、随时间食欲下降、偶尔呕吐、口气有氨味、嗜睡和虚弱、毛发质量差、便秘。随着疾病进展,症状会恶化,可能包括口腔溃疡、严重脱水和神经系统症状。急性肾损伤表现更突然,症状严重需要在{city}兽医医院紧急护理。诊断包括血液检查、尿液检查,有时还需要在{city}兽医诊所进行影像检查。管理包括处方肾脏饮食、液体治疗、药物和在{city}({state})兽医处定期监测。'
    },
    keywords: ['kidney', 'renal', 'thirst', 'urination', 'weight loss', 'CKD', 'chronic']
  },
  {
    id: 'cat-diabetes-1',
    category: 'cat-emergency',
    question: {
      en: 'How do I know if my cat in {city} has diabetes?',
      ms: 'Bagaimana saya tahu jika kucing saya di {city} menghidap diabetes?',
      zh: '如何知道我在{city}的猫是否患有糖尿病?'
    },
    shortAnswer: {
      en: 'Cat owners in {city}, {state} should watch for excessive thirst, increased urination, increased appetite with weight loss, lethargy, and poor coat condition. Diabetic ketoacidosis (DKA) is an emergency with symptoms like vomiting, weakness, and sweet-smelling breath requiring immediate veterinary care in {city}.',
      ms: 'Pemilik kucing di {city}, {state} perlu perhatikan tanda-tanda termasuk rasa dahaga yang berlebihan, kencing yang meningkat, selera makan yang meningkat dengan penurunan berat badan, lesu, dan keadaan bulu yang buruk. Ketoasidosis diabetik adalah kecemasan yang memerlukan rawatan segera di {city}.',
      zh: '{city}({state})的猫主人应注意症状包括过度口渴、排尿增加、食欲增加但体重下降、嗜睡和毛发状况差。糖尿病酮症酸中毒(DKA)是紧急情况,症状包括呕吐、虚弱和呼吸有甜味,需要在{city}立即就医。'
    },
    fullAnswer: {
      en: 'Diabetes mellitus in cats in {city}, {state} occurs when the body cannot properly produce or respond to insulin. It is most common in overweight, middle-aged to senior cats. Key symptoms to watch for include: dramatically increased thirst and water consumption, frequent and large amounts of urination, increased appetite (initially), weight loss despite eating well, lethargy and decreased activity, weakness in hind legs (diabetic neuropathy), poor coat condition, and sweet or fruity-smelling breath. Diabetes becomes an emergency when diabetic ketoacidosis (DKA) develops. DKA symptoms include severe lethargy, vomiting, loss of appetite, dehydration, labored breathing, and collapse - this requires immediate emergency care at a {city} veterinary hospital. Diagnosis involves blood and urine tests at your {city} vet clinic. Treatment typically requires twice-daily insulin injections, dietary changes (high-protein, low-carb), and regular glucose monitoring. With proper management from your {city}, {state} veterinarian, many diabetic cats can achieve remission. Weight management is crucial for prevention and treatment.',
      ms: 'Diabetes mellitus pada kucing di {city}, {state} berlaku apabila badan tidak dapat menghasilkan atau bertindak balas terhadap insulin dengan betul. Ia paling biasa pada kucing yang berlebihan berat badan, berumur pertengahan hingga tua. Gejala utama yang perlu diperhatikan termasuk: peningkatan dahaga dan penggunaan air secara dramatik, kencing yang kerap dan banyak, peningkatan selera makan (pada mulanya), penurunan berat badan walaupun makan dengan baik, lesu dan penurunan aktiviti, kelemahan pada kaki belakang, keadaan bulu yang buruk, dan nafas berbau manis atau buah-buahan. Diabetes menjadi kecemasan apabila ketoasidosis diabetik berkembang - ini memerlukan rawatan kecemasan segera di hospital veterinar {city}. Diagnosis melibatkan ujian darah dan air kencing di klinik veterinar {city} anda. Rawatan biasanya memerlukan suntikan insulin dua kali sehari dan perubahan diet.',
      zh: '{city}({state})猫糖尿病发生在身体无法正常产生或对胰岛素作出反应时。它在超重的中老年猫中最常见。需要注意的主要症状包括:口渴和饮水量显著增加、频繁且大量排尿、食欲增加(最初)、尽管吃得好但体重下降、嗜睡和活动减少、后腿无力(糖尿病神经病变)、毛发状况差、呼吸有甜味或水果味。当糖尿病酮症酸中毒(DKA)发展时,糖尿病就成为紧急情况。DKA症状包括严重嗜睡、呕吐、食欲不振、脱水、呼吸困难和虚脱 - 这需要在{city}兽医医院立即紧急护理。诊断包括在{city}兽医诊所进行血液和尿液检查。'
    },
    keywords: ['diabetes', 'thirst', 'urination', 'weight loss', 'insulin', 'glucose', 'DKA']
  },
  {
    id: 'cat-hyperthyroid-1',
    category: 'cat-emergency',
    question: {
      en: 'What is hyperthyroidism in cats in {city} and what are the symptoms?',
      ms: 'Apakah hipertiroidisme pada kucing di {city} dan apakah gejalanya?',
      zh: '什么是{city}猫甲状腺功能亢进,有哪些症状?'
    },
    shortAnswer: {
      en: 'Hyperthyroidism is an overactive thyroid gland causing increased metabolism in cats in {city}, {state}. Signs include weight loss despite good appetite, hyperactivity, increased thirst and urination, vomiting, diarrhea, poor coat, and rapid heart rate. Untreated, it can damage the heart and kidneys.',
      ms: 'Hipertiroidisme adalah kelenjar tiroid yang terlalu aktif yang menyebabkan peningkatan metabolisme pada kucing di {city}, {state}. Tanda-tanda termasuk penurunan berat badan walaupun selera makan baik, hiperaktif, peningkatan dahaga dan kencing.',
      zh: '甲状腺功能亢进是{city}({state})猫甲状腺过度活跃导致新陈代谢增加。症状包括尽管食欲好但体重下降、活动过度、口渴和排尿增加、呕吐、腹泻、毛发差和心跳加速。如不治疗,可能损害心脏和肾脏。'
    },
    fullAnswer: {
      en: 'Hyperthyroidism is the most common hormonal disorder in cats in {city}, {state}, typically affecting those over 10 years old. It occurs when the thyroid gland produces excessive thyroid hormone, dramatically increasing metabolism. Common symptoms include: significant weight loss despite increased or ravenous appetite, hyperactivity and restlessness, increased thirst and urination, vomiting and diarrhea, poor coat quality and unkempt appearance, rapid heart rate and heart murmur, high blood pressure, behavioral changes (irritability, aggression), and panting or difficulty breathing. Without treatment, hyperthyroidism can lead to serious complications including heart disease, high blood pressure, kidney damage, and blindness. Diagnosis involves blood tests measuring thyroid hormone levels at your {city} veterinary clinic. Treatment options available in {city} include daily medication (methimazole), radioactive iodine therapy (curative), surgery, or prescription diet. Most cats respond well to treatment. Regular monitoring by your {city}, {state} veterinarian is essential to prevent complications and adjust medication as needed.',
      ms: 'Hipertiroidisme adalah gangguan hormon yang paling biasa pada kucing di {city}, {state}, biasanya menjejaskan mereka yang berumur lebih 10 tahun. Ia berlaku apabila kelenjar tiroid menghasilkan hormon tiroid yang berlebihan. Gejala biasa termasuk: penurunan berat badan yang ketara walaupun selera makan meningkat, hiperaktif dan gelisah, peningkatan dahaga dan kencing, muntah dan cirit-birit, kualiti bulu yang buruk, degup jantung yang cepat, tekanan darah tinggi, dan perubahan tingkah laku. Tanpa rawatan, hipertiroidisme boleh menyebabkan komplikasi serius termasuk penyakit jantung dan kerosakan buah pinggang. Diagnosis melibatkan ujian darah di klinik veterinar {city} anda. Pilihan rawatan yang tersedia di {city} termasuk ubat harian, terapi iodin radioaktif, pembedahan, atau diet preskripsi.',
      zh: '甲状腺功能亢进是{city}({state})猫中最常见的激素疾病,通常影响10岁以上的猫。它发生在甲状腺产生过多甲状腺激素时,显著增加新陈代谢。常见症状包括:尽管食欲增加但体重显著下降、活动过度和不安、口渴和排尿增加、呕吐和腹泻、毛发质量差、心跳加速和心杂音、高血压、行为变化(易怒、攻击性)、喘气或呼吸困难。不治疗的话,甲状腺功能亢进可能导致严重并发症,包括心脏病、高血压、肾脏损伤和失明。诊断包括在{city}兽医诊所进行甲状腺激素水平血液检查。{city}可用的治疗选择包括每日药物、放射性碘治疗、手术或处方饮食。'
    },
    keywords: ['hyperthyroidism', 'thyroid', 'weight loss', 'appetite', 'hyperactive', 'metabolism', 'heart']
  },
  {
    id: 'cat-vomiting-1',
    category: 'cat-emergency',
    question: {
      en: 'When should I be worried about my cat vomiting in {city}?',
      ms: 'Bila saya perlu bimbang tentang kucing saya muntah di {city}?',
      zh: '什么时候应该担心{city}的猫呕吐?'
    },
    shortAnswer: {
      en: 'Cat owners in {city}, {state} should seek immediate veterinary care if vomiting is frequent (multiple times in 24 hours), contains blood, is accompanied by lethargy or loss of appetite, occurs with diarrhea, or if your cat cannot keep water down. Occasional hairball vomiting is normal.',
      ms: 'Pemilik kucing di {city}, {state} perlu mendapatkan rawatan veterinar segera jika muntah kerap, mengandungi darah, disertai dengan lesu atau hilang selera makan, berlaku dengan cirit-birit, atau jika kucing anda tidak dapat menahan air. Muntah hairball sekali-sekala adalah normal.',
      zh: '{city}({state})的猫主人应在以下情况立即就医:频繁呕吐(24小时内多次)、含血、伴有嗜睡或食欲下降、伴有腹泻,或猫无法保留水分。偶尔的毛球呕吐是正常的。'
    },
    fullAnswer: {
      en: 'Vomiting in cats in {city}, {state} can range from normal (occasional hairballs) to life-threatening emergencies. Understanding when to worry is important. Normal vomiting: Occasional hairballs (1-2 times monthly), eating too fast, minor dietary indiscretion. When to seek veterinary care in {city}: Multiple vomiting episodes in 24 hours, blood in vomit (red or coffee-ground appearance), vomiting with diarrhea, lethargy or weakness, loss of appetite for more than 24 hours, unproductive retching (emergency - possible obstruction), abdominal pain or bloating, weight loss, vomiting after eating for several days. Emergency situations requiring immediate {city} vet care: Suspected ingestion of toxins or foreign objects, vomiting with inability to urinate (especially male cats), severe dehydration (skin tenting, dry gums), known ingestion of string, ribbon, or linear objects, collapse or extreme weakness. Common causes of vomiting in {city} cats: Hairballs, dietary changes, food allergies, parasites, infections, kidney or liver disease, hyperthyroidism, inflammatory bowel disease, cancer, and foreign object ingestion. Your {city} veterinarian will conduct tests including blood work, x-rays, or ultrasound to determine the cause. Treatment depends on diagnosis and may include anti-nausea medication, fluids, dietary changes, or surgery for obstructions.',
      ms: 'Muntah pada kucing di {city}, {state} boleh berkisar dari normal (hairball sekali-sekala) hingga kecemasan yang mengancam nyawa. Memahami bila untuk bimbang adalah penting. Muntah normal: Hairball sekali-sekala, makan terlalu cepat. Bila untuk mendapatkan rawatan veterinar di {city}: Episod muntah berganda dalam 24 jam, darah dalam muntah, muntah dengan cirit-birit, lesu atau lemah, hilang selera makan lebih dari 24 jam, mencuba untuk muntah tanpa hasil (kecemasan). Situasi kecemasan yang memerlukan rawatan veterinar {city} segera: Syak pengambilan toksin atau objek asing, muntah dengan ketidakupayaan untuk membuang air kecil, dehidrasi teruk. Punca biasa muntah pada kucing di {city}: Hairball, perubahan diet, alahan makanan, parasit, jangkitan, penyakit buah pinggang atau hati, hipertiroidisme.',
      zh: '{city}({state})猫呕吐可以从正常(偶尔毛球)到危及生命的紧急情况。了解何时担心很重要。正常呕吐:偶尔毛球(每月1-2次)、吃得太快、轻微饮食不当。何时在{city}就医:24小时内多次呕吐、呕吐物中有血(红色或咖啡渣状)、呕吐伴腹泻、嗜睡或虚弱、食欲丧失超过24小时、干呕(紧急 - 可能堵塞)、腹痛或腹胀、体重下降。需要立即{city}兽医护理的紧急情况:疑似摄入毒素或异物、呕吐伴无法排尿(尤其是公猫)、严重脱水、已知摄入绳子或线性物体、虚脱。{city}猫呕吐的常见原因:毛球、饮食变化、食物过敏、寄生虫、感染、肾脏或肝脏疾病、甲状腺功能亢进。您的{city}兽医将进行检查包括血液检查、X光或超声波以确定原因。'
    },
    keywords: ['vomiting', 'throwing up', 'nausea', 'hairball', 'blood', 'frequent', 'emergency']
  },
  {
    id: 'cat-diarrhea-1',
    category: 'cat-emergency',
    question: {
      en: 'When is cat diarrhea an emergency in {city}?',
      ms: 'Bilakah cirit-birit kucing adalah kecemasan di {city}?',
      zh: '什么时候{city}猫腹泻是紧急情况?'
    },
    shortAnswer: {
      en: 'Cat owners in {city}, {state} should seek immediate veterinary care if diarrhea contains blood, is very watery, lasts more than 24-48 hours, is accompanied by vomiting, lethargy, or loss of appetite, or if the cat is a kitten, senior, or has other health conditions.',
      ms: 'Pemilik kucing di {city}, {state} perlu mendapatkan rawatan veterinar segera jika cirit-birit mengandungi darah, sangat berair, berlangsung lebih dari 24-48 jam, disertai dengan muntah, lesu, atau hilang selera makan, atau jika kucing itu anak kucing, senior, atau mempunyai keadaan kesihatan lain.',
      zh: '{city}({state})的猫主人应在以下情况立即就医:腹泻含血、非常稀水、持续超过24-48小时、伴有呕吐、嗜睡或食欲下降,或猫是幼猫、老年猫或有其他健康状况。'
    },
    fullAnswer: {
      en: 'Diarrhea in cats in {city}, {state} can range from mild and self-limiting to serious conditions requiring immediate veterinary attention. When to seek emergency care in {city}: Bloody diarrhea (bright red or dark/tarry), very watery or explosive diarrhea, diarrhea lasting more than 24-48 hours, accompanied by vomiting (especially if both are frequent), significant lethargy or weakness, loss of appetite, kittens (dehydrate quickly), senior cats, cats with existing health conditions, signs of dehydration (dry gums, skin tenting), straining to defecate without producing stool. Common causes in {city} cats: Dietary changes or indiscretion, parasites (especially in outdoor cats), infections (bacterial, viral), food allergies, inflammatory bowel disease, stress, medication side effects, and organ disease. Home care for mild cases: Withhold food for 12-24 hours (provide water), then offer bland diet (plain chicken and rice), ensure hydration, monitor closely. Your {city} veterinarian may run tests including fecal examination, blood work, and imaging. Treatment depends on cause and may include anti-diarrheal medication, probiotics, dietary changes, parasite treatment, or antibiotics. Prevention: gradual diet changes, regular deworming, stress reduction, and high-quality diet.',
      ms: 'Cirit-birit pada kucing di {city}, {state} boleh berkisar dari ringan dan sembuh sendiri hingga keadaan serius yang memerlukan perhatian veterinar segera. Bila untuk mendapatkan rawatan kecemasan di {city}: Cirit-birit berdarah, cirit-birit sangat berair atau meletup, cirit-birit berlangsung lebih dari 24-48 jam, disertai dengan muntah, lesu atau lemah yang ketara, hilang selera makan, anak kucing (dehidrasi cepat), kucing senior, kucing dengan keadaan kesihatan sedia ada, tanda-tanda dehidrasi. Punca biasa pada kucing di {city}: Perubahan atau kesalahan diet, parasit, jangkitan, alahan makanan, penyakit usus radang, tekanan. Penjagaan rumah untuk kes ringan: Tahan makanan selama 12-24 jam, kemudian tawarkan diet hambar. Veterinar {city} anda mungkin menjalankan ujian termasuk pemeriksaan najis, kerja darah, dan pengimejan.',
      zh: '{city}({state})猫腹泻可以从轻微和自限性到需要立即兽医关注的严重情况。何时在{city}寻求紧急护理:血性腹泻(鲜红色或深色/柏油状)、非常稀水或爆发性腹泻、腹泻持续超过24-48小时、伴有呕吐(尤其是两者都频繁)、明显嗜睡或虚弱、食欲丧失、幼猫(快速脱水)、老年猫、有现有健康状况的猫、脱水迹象(牙龈干燥、皮肤弹性差)。{city}猫的常见原因:饮食变化或不当、寄生虫(尤其是户外猫)、感染(细菌、病毒)、食物过敏、炎症性肠病、压力。轻度病例的家庭护理:禁食12-24小时(提供水),然后提供清淡饮食。您的{city}兽医可能进行检查包括粪便检查、血液检查和影像。'
    },
    keywords: ['diarrhea', 'loose stool', 'bloody', 'watery', 'dehydration', 'emergency', 'digestive']
  },
  {
    id: 'cat-poisoning-1',
    category: 'cat-emergency',
    question: {
      en: 'What should I do if my cat is poisoned in {city}?',
      ms: 'Apa yang perlu saya lakukan jika kucing saya diracun di {city}?',
      zh: '如果我在{city}的猫中毒了该怎么办?'
    },
    shortAnswer: {
      en: 'If you suspect poisoning in {city}, {state}, seek emergency veterinary care immediately. Do NOT induce vomiting unless directed by a vet. Bring the toxin container if possible. Common cat poisons include lilies, human medications, antifreeze, rodent bait, and certain foods. Time is critical.',
      ms: 'Jika anda mengesyaki keracunan di {city}, {state}, dapatkan rawatan veterinar kecemasan segera. JANGAN menyebabkan muntah kecuali diarahkan oleh veterinar. Bawa bekas toksin jika boleh. Racun kucing biasa termasuk bunga lili, ubat manusia, antibeku, dan umpan tikus. Masa adalah kritikal.',
      zh: '如果您怀疑在{city}({state})中毒,请立即寻求紧急兽医护理。除非兽医指示,否则不要催吐。如果可能,带上毒物容器。常见的猫毒物包括百合花、人类药物、防冻液、灭鼠剂和某些食物。时间至关重要。'
    },
    fullAnswer: {
      en: 'Poisoning is a life-threatening emergency for cats in {city}, {state}. Immediate action is critical. Steps to take: Stay calm but act quickly, remove your cat from the toxic source, do NOT induce vomiting (some toxins cause more damage coming back up), collect any remaining toxin, packaging, or vomit for identification, call your {city} emergency vet or animal poison control immediately, transport to a {city} emergency veterinary clinic immediately. Common cat toxins in {city}: Lilies (all parts - extremely toxic, causes kidney failure), human medications (paracetamol/acetaminophen is deadly to cats), antifreeze (sweet taste attracts cats), rodent poisons, insecticides and pesticides, certain plants (sago palm, tulips, azaleas), human foods (onions, garlic, chocolate, xylitol), essential oils, cleaning products. Signs of poisoning: Drooling or foaming at mouth, vomiting or diarrhea, difficulty breathing, seizures, tremors, weakness or collapse, unusual behavior, bleeding, pale gums. At the {city} vet: Treatment may include induced vomiting (if appropriate), activated charcoal, IV fluids, specific antidotes, supportive care. Prevention: Keep medications secured, choose cat-safe plants, store chemicals safely, be aware of hidden hazards. The sooner treatment begins at a {city} veterinary hospital, the better the prognosis.',
      ms: 'Keracunan adalah kecemasan yang mengancam nyawa untuk kucing di {city}, {state}. Tindakan segera adalah kritikal. Langkah-langkah yang perlu diambil: Kekal tenang tetapi bertindak pantas, keluarkan kucing anda dari sumber toksik, JANGAN menyebabkan muntah, kumpul sebarang toksin yang tinggal untuk pengenalan, hubungi veterinar kecemasan {city} anda segera, bawa ke klinik veterinar kecemasan {city} dengan segera. Toksin kucing biasa di {city}: Bunga lili (semua bahagian - sangat toksik), ubat manusia (paracetamol maut kepada kucing), antibeku, racun tikus, racun serangga, tumbuhan tertentu, makanan manusia (bawang, bawang putih, coklat). Tanda-tanda keracunan: Air liur atau buih di mulut, muntah atau cirit-birit, kesukaran bernafas, sawan, gegaran, lemah atau rebah. Pencegahan: Simpan ubat dengan selamat, pilih tumbuhan selamat untuk kucing.',
      zh: '中毒对{city}({state})的猫来说是危及生命的紧急情况。立即行动至关重要。采取的步骤:保持冷静但迅速行动,将猫从毒源移开,不要催吐(某些毒素返回时会造成更多损害),收集任何剩余的毒物、包装或呕吐物以供识别,立即拨打{city}紧急兽医或动物中毒控制热线,立即送往{city}紧急兽医诊所。{city}常见的猫毒物:百合花(所有部分 - 极毒,导致肾衰竭)、人类药物(对乙酰氨基酚对猫致命)、防冻液(甜味吸引猫)、灭鼠剂、杀虫剂、某些植物(苏铁、郁金香)、人类食物(洋葱、大蒜、巧克力、木糖醇)。中毒迹象:流口水或口吐白沫、呕吐或腹泻、呼吸困难、癫痫、颤抖、虚弱或倒塌。在{city}兽医处:治疗可能包括催吐(如适当)、活性炭、静脉输液、特定解毒剂、支持性护理。在{city}兽医医院越早开始治疗,预后越好。'
    },
    keywords: ['poisoning', 'toxic', 'lily', 'medication', 'antifreeze', 'emergency', 'vomiting', 'ingested']
  },
  {
    id: 'cat-injury-1',
    category: 'cat-emergency',
    question: {
      en: 'How do I handle cat injuries and wounds in {city}?',
      ms: 'Bagaimana saya mengendalikan kecederaan dan luka kucing di {city}?',
      zh: '如何处理{city}猫的受伤和伤口?'
    },
    shortAnswer: {
      en: 'For cat injuries in {city}, {state}, apply gentle pressure to stop bleeding, keep your cat calm, and seek veterinary care promptly. Do not apply human medications or tight bandages. Deep wounds, bite injuries, and bleeding that won\'t stop require immediate emergency care at a {city} vet clinic.',
      ms: 'Untuk kecederaan kucing di {city}, {state}, tekan dengan lembut untuk menghentikan pendarahan, pastikan kucing anda tenang, dan dapatkan rawatan veterinar dengan segera. Jangan gunakan ubat manusia atau balutan ketat. Luka dalam, kecederaan gigitan, dan pendarahan yang tidak berhenti memerlukan rawatan kecemasan segera di klinik veterinar {city}.',
      zh: '对于{city}({state})的猫受伤,轻轻按压止血,保持猫平静,及时就医。不要使用人类药物或紧绷的绷带。深层伤口、咬伤和无法止血的出血需要在{city}兽医诊所立即急救。'
    },
    fullAnswer: {
      en: 'Injuries and wounds in cats in {city}, {state} can range from minor scratches to life-threatening trauma. Here\'s how to handle them. Immediate first aid: Approach carefully (injured cats may bite or scratch), apply gentle pressure with clean cloth to stop bleeding, keep your cat calm and still, do NOT apply human antiseptics, medications, or tight bandages, cover wounds loosely with clean cloth, transport to your {city} veterinarian immediately. When to seek emergency care in {city}: Deep wounds or punctures, wounds that won\'t stop bleeding, bite wounds (high infection risk), eye injuries, suspected fractures, difficulty breathing, severe pain, falls from height, hit by car. Types of wounds: Cuts and lacerations - may need stitches, puncture wounds - often deeper than they appear, bite wounds - very prone to infection, abscess development. What your {city} vet will do: Clean and assess the wound, x-rays if fracture suspected, stitches or staples if needed, antibiotics for infection prevention, pain medication, follow-up care instructions. Home care after treatment: Keep your cat indoors, prevent licking (may need cone), give all prescribed medications, keep the wound clean and dry, watch for infection signs (swelling, discharge, fever). Prevention in {city}: Keep cats indoors (reduces fight injuries), regular nail trims, remove sharp objects from environment.',
      ms: 'Kecederaan dan luka pada kucing di {city}, {state} boleh berkisar dari calar kecil hingga trauma yang mengancam nyawa. Inilah cara mengendalikannya. Pertolongan cemas segera: Dekati dengan berhati-hati, tekan dengan lembut dengan kain bersih untuk menghentikan pendarahan, pastikan kucing anda tenang, JANGAN gunakan antiseptik atau ubat manusia, tutup luka dengan longgar dengan kain bersih, bawa ke veterinar {city} anda dengan segera. Bila untuk mendapatkan rawatan kecemasan di {city}: Luka dalam atau tusukan, luka yang tidak berhenti berdarah, luka gigitan (risiko jangkitan tinggi), kecederaan mata, patah tulang yang disyaki. Jenis luka: Potongan dan laseran, luka tusukan, luka gigitan. Apa yang veterinar {city} anda akan lakukan: Membersih dan menilai luka, x-ray jika patah disyaki, jahitan jika perlu, antibiotik untuk pencegahan jangkitan.',
      zh: '{city}({state})猫的受伤和伤口可以从轻微划伤到危及生命的创伤。以下是处理方法。立即急救:小心接近(受伤的猫可能会咬或抓)、用干净的布轻轻按压止血、保持猫平静和静止、不要使用人类消毒剂、药物或紧绷的绷带、用干净的布松松地覆盖伤口、立即送往{city}兽医处。何时在{city}寻求紧急护理:深层伤口或穿刺、无法止血的伤口、咬伤(感染风险高)、眼睛受伤、疑似骨折、呼吸困难、剧烈疼痛、从高处坠落。您的{city}兽医将做什么:清洁和评估伤口、如怀疑骨折则拍X光、如需要则缝合、预防感染的抗生素、止痛药、后续护理说明。{city}的预防:让猫待在室内(减少打架伤害)、定期修剪指甲。'
    },
    keywords: ['injury', 'wound', 'bleeding', 'bite', 'scratch', 'first aid', 'emergency', 'trauma']
  },
  {
    id: 'cat-seizure-1',
    category: 'cat-emergency',
    question: {
      en: 'What should I do if my cat has a seizure in {city}?',
      ms: 'Apa yang perlu saya lakukan jika kucing saya mengalami sawan di {city}?',
      zh: '如果我在{city}的猫癫痫发作该怎么办?'
    },
    shortAnswer: {
      en: 'During a cat seizure in {city}, {state}, stay calm, move objects away to prevent injury, do NOT restrain your cat or put anything in their mouth, time the seizure, and keep the environment quiet. Seek immediate veterinary care at a {city} clinic if the seizure lasts more than 2-3 minutes or if multiple seizures occur.',
      ms: 'Semasa sawan kucing di {city}, {state}, kekal tenang, alihkan objek untuk mencegah kecederaan, JANGAN kekang kucing anda atau masukkan apa-apa ke dalam mulut mereka, catatkan masa sawan, dan pastikan persekitaran tenang. Dapatkan rawatan veterinar segera di klinik {city} jika sawan berlangsung lebih dari 2-3 minit.',
      zh: '在{city}({state})猫癫痫发作期间,保持冷静,移开物品以防止受伤,不要限制猫或把任何东西放入嘴里,计时癫痫,保持环境安静。如果癫痫持续超过2-3分钟或多次发作,请立即在{city}诊所就医。'
    },
    fullAnswer: {
      en: 'Seizures in cats in {city}, {state} can be frightening but knowing how to respond can help your cat. During a seizure: Stay calm, clear the area of objects that could injure your cat, do NOT restrain your cat, do NOT put anything in your cat\'s mouth (they cannot swallow their tongue), turn off bright lights and reduce noise, time the seizure with your phone, speak softly and reassuringly, keep other pets away. After the seizure: Your cat may be disoriented, confused, or temporarily blind, keep the environment calm and quiet, offer water when fully recovered, note details about the seizure for your {city} vet. Seek emergency care in {city} if: The seizure lasts more than 2-3 minutes, multiple seizures occur in a short period, your cat doesn\'t recover within 30 minutes, this is the first seizure. What causes seizures in cats: Epilepsy, toxin ingestion, head trauma, low blood sugar, brain tumor, liver or kidney disease, infectious diseases, and high fever. Your {city} veterinarian will conduct: Physical exam, blood tests, possibly MRI or CT scan, treatment plan based on cause. Long-term management may include anti-seizure medication prescribed by your {city}, {state} vet.',
      ms: 'Sawan pada kucing di {city}, {state} boleh menakutkan tetapi mengetahui cara bertindak balas boleh membantu kucing anda. Semasa sawan: Kekal tenang, kosongkan kawasan dari objek yang boleh mencederakan kucing anda, JANGAN kekang kucing anda, JANGAN masukkan apa-apa ke dalam mulut kucing anda, matikan lampu terang dan kurangkan bunyi, catatkan masa sawan, bercakap dengan lembut. Selepas sawan: Kucing anda mungkin keliru atau sementara buta, pastikan persekitaran tenang, tawarkan air apabila pulih sepenuhnya. Dapatkan rawatan kecemasan di {city} jika: Sawan berlangsung lebih dari 2-3 minit, berbilang sawan berlaku dalam tempoh singkat, kucing anda tidak pulih dalam 30 minit, ini adalah sawan pertama. Veterinar {city} anda akan menjalankan: Pemeriksaan fizikal, ujian darah, mungkin MRI atau imbasan CT.',
      zh: '{city}({state})猫癫痫发作可能很可怕,但知道如何应对可以帮助您的猫。癫痫期间:保持冷静,清除可能伤害猫的物品,不要限制猫,不要把任何东西放入猫嘴里(它们不会吞咽舌头),关掉强光减少噪音,用手机计时癫痫,轻声安慰。癫痫后:您的猫可能会迷失方向、困惑或暂时失明,保持环境平静安静,完全恢复后提供水,为{city}兽医记录癫痫细节。在以下情况下在{city}寻求紧急护理:癫痫持续超过2-3分钟、短时间内多次发作、30分钟内未恢复、这是第一次发作。什么导致猫癫痫:癫痫病、毒素摄入、头部创伤、低血糖、脑肿瘤、肝脏或肾脏疾病。您的{city}兽医将进行:体检、血液检查、可能的MRI或CT扫描。'
    },
    keywords: ['seizure', 'convulsion', 'epilepsy', 'fitting', 'emergency', 'neurological', 'brain']
  },
  {
    id: 'cat-breathing-1',
    category: 'cat-emergency',
    question: {
      en: 'What are signs of breathing problems in cats in {city}?',
      ms: 'Apakah tanda-tanda masalah pernafasan pada kucing di {city}?',
      zh: '{city}猫呼吸问题有哪些症状?'
    },
    shortAnswer: {
      en: 'Cat owners in {city}, {state} should watch for open-mouth breathing, rapid or labored breathing, blue or pale gums, extended neck, abdominal effort when breathing, wheezing, and reluctance to move. Breathing difficulties are always emergencies requiring immediate veterinary care at a {city} clinic.',
      ms: 'Pemilik kucing di {city}, {state} perlu perhatikan pernafasan mulut terbuka, pernafasan cepat atau sukar, gusi biru atau pucat, leher memanjang, usaha perut semasa bernafas, bunyi mengi, dan keengganan untuk bergerak. Kesukaran bernafas sentiasa kecemasan yang memerlukan rawatan veterinar segera di klinik {city}.',
      zh: '{city}({state})的猫主人应注意张嘴呼吸、快速或费力呼吸、蓝色或苍白的牙龈、颈部伸展、呼吸时腹部用力、喘息和不愿移动。呼吸困难始终是紧急情况,需要在{city}诊所立即就医。'
    },
    fullAnswer: {
      en: 'Breathing problems in cats in {city}, {state} are always emergencies. Cats are masters at hiding illness, so visible breathing changes indicate serious problems. Emergency signs requiring immediate {city} vet care: Open-mouth breathing (cats normally breathe through nose), panting when not hot or stressed, blue, purple, or very pale gums (cyanosis), extended neck and elbows out, abdominal effort when breathing (belly moving significantly), very rapid breathing (more than 40 breaths per minute at rest), wheezing or crackling sounds, collapse or extreme weakness, sudden inability to move. Common causes of breathing problems in {city} cats: Asthma (common in cats), heart disease (fluid in lungs), pneumonia, pleural effusion (fluid around lungs), trauma (hit by car, fall), foreign object in airway, allergic reaction, cancer, and upper respiratory infection (severe cases). What happens at the {city} vet: Oxygen therapy first, minimal handling to reduce stress, x-rays when stable, blood tests, possible ultrasound, treatment based on cause. This is one emergency where you should NOT delay - even minutes matter. Call ahead to your {city} emergency veterinary hospital if possible so they can prepare. Keep your cat calm during transport to the {city} clinic.',
      ms: 'Masalah pernafasan pada kucing di {city}, {state} sentiasa kecemasan. Kucing pandai menyembunyikan penyakit, jadi perubahan pernafasan yang kelihatan menunjukkan masalah serius. Tanda-tanda kecemasan yang memerlukan rawatan veterinar {city} segera: Pernafasan mulut terbuka (kucing biasanya bernafas melalui hidung), terengah-engah apabila tidak panas atau stres, gusi biru, ungu, atau sangat pucat, leher memanjang dan siku keluar, usaha perut semasa bernafas. Punca biasa masalah pernafasan pada kucing di {city}: Asma, penyakit jantung, pneumonia, efusi pleura, trauma, objek asing dalam saluran udara, tindak balas alahan, kanser. Apa yang berlaku di veterinar {city}: Terapi oksigen dahulu, pengendalian minimum untuk mengurangkan tekanan, x-ray apabila stabil, ujian darah. Ini adalah satu kecemasan di mana anda TIDAK boleh berlengah - walaupun minit penting. Hubungi hospital veterinar kecemasan {city} anda terlebih dahulu jika boleh supaya mereka boleh bersedia.',
      zh: '{city}({state})猫呼吸问题始终是紧急情况。猫善于隐藏疾病,因此可见的呼吸变化表明存在严重问题。需要立即{city}兽医护理的紧急症状:张嘴呼吸(猫通常通过鼻子呼吸)、不热或不紧张时喘气、蓝色、紫色或非常苍白的牙龈(发绀)、颈部伸展和肘部外展、呼吸时腹部用力、非常快速的呼吸(休息时每分钟超过40次)、喘息或噼啪声、虚脱或极度虚弱。{city}猫呼吸问题的常见原因:哮喘(猫常见)、心脏病(肺部积液)、肺炎、胸腔积液(肺部周围积液)、创伤、气道异物、过敏反应、癌症。在{city}兽医处会发生什么:首先进行氧气治疗、最少处理以减少压力、稳定后拍X光、血液检查。这是一个您不应该延迟的紧急情况 - 即使几分钟也很重要。如果可能,请提前致电您的{city}紧急兽医医院,以便他们做好准备。'
    },
    keywords: ['breathing', 'respiratory', 'panting', 'wheezing', 'gums', 'blue', 'emergency', 'asthma']
  },
  {
    id: 'cat-heatstroke-1',
    category: 'cat-emergency',
    question: {
      en: 'How do I prevent and treat heatstroke in cats in {city}?',
      ms: 'Bagaimana saya mencegah dan merawat strok haba pada kucing di {city}?',
      zh: '如何预防和治疗{city}猫的中暑?'
    },
    shortAnswer: {
      en: 'In {city}\'s tropical climate, prevent heatstroke by providing shade, fresh water, and air conditioning. Signs include panting, drooling, red gums, vomiting, and collapse. If suspected, move your cat to a cool area, apply cool (not cold) water, and seek immediate veterinary care at a {city} clinic.',
      ms: 'Dalam iklim tropika {city}, cegah strok haba dengan menyediakan tempat teduh, air segar, dan penghawa dingin. Tanda-tanda termasuk terengah-engah, air liur, gusi merah, muntah, dan rebah. Jika disyaki, pindahkan kucing anda ke kawasan sejuk, sapukan air sejuk (bukan sejuk), dan dapatkan rawatan veterinar segera di klinik {city}.',
      zh: '在{city}的热带气候中,通过提供阴凉处、新鲜水和空调来预防中暑。症状包括喘气、流口水、红牙龈、呕吐和虚脱。如果怀疑,将猫移到凉爽的地方,涂抹凉水(不是冷水),并立即在{city}诊所就医。'
    },
    fullAnswer: {
      en: 'Heatstroke is a serious concern for cats in {city}, {state}\'s tropical climate with temperatures often exceeding 30°C. Cats don\'t sweat efficiently and can overheat quickly. Risk factors in {city}: Hot, humid weather (year-round concern), being left in cars (even briefly), lack of shade or ventilation, long-haired or flat-faced breeds, obesity, heart or respiratory conditions, being outdoors during hottest hours, and kittens or senior cats. Signs of heatstroke: Heavy panting (unusual for cats), drooling excessively, bright red gums (later turning blue), rapid heartbeat, vomiting or diarrhea, staggering or weakness, confusion, and collapse or seizures. Emergency first aid: Move cat to cool, shaded area immediately, apply cool (NOT cold) water to paws, belly, and ears, use a fan if available, offer small amounts of cool water, do NOT submerge in cold water or use ice, transport to your {city} vet immediately. Prevention in {city}\'s climate: Always provide fresh water (multiple bowls), ensure access to air conditioning or cool areas, never leave cats in cars, avoid outdoor activity during peak heat (10am-4pm), provide frozen treats, and monitor flat-faced breeds closely. Treatment at {city} vet: IV fluids, cooling measures, monitoring for organ damage, hospitalization may be required.',
      ms: 'Strok haba adalah kebimbangan serius untuk kucing dalam iklim tropika {city}, {state} dengan suhu sering melebihi 30°C. Kucing tidak berpeluh dengan cekap dan boleh terlalu panas dengan cepat. Faktor risiko di {city}: Cuaca panas dan lembap (kebimbangan sepanjang tahun), ditinggalkan dalam kereta, kekurangan teduhan atau pengudaraan, baka berbulu panjang atau bermuka rata, obesiti. Tanda-tanda strok haba: Terengah-engah berat (luar biasa untuk kucing), air liur berlebihan, gusi merah terang (kemudian bertukar biru), degupan jantung cepat, muntah atau cirit-birit, terhuyung-hayang atau lemah. Pertolongan cemas kecemasan: Pindahkan kucing ke kawasan sejuk dengan segera, sapukan air sejuk (BUKAN sejuk) ke kaki, perut, dan telinga, gunakan kipas jika ada, bawa ke veterinar {city} anda dengan segera. Pencegahan dalam iklim {city}: Sentiasa sediakan air segar, pastikan akses kepada penghawa dingin, jangan tinggalkan kucing dalam kereta.',
      zh: '在{city}({state})热带气候中,温度经常超过30°C,中暑对猫来说是一个严重问题。猫不能有效出汗,很快就会过热。{city}的风险因素:炎热潮湿的天气(全年关注)、被留在车里(即使短暂)、缺乏阴凉或通风、长毛或扁脸品种、肥胖、心脏或呼吸系统疾病。中暑迹象:大量喘气(猫不常见)、过度流口水、鲜红色牙龈(后来变蓝)、心跳加速、呕吐或腹泻、蹒跚或虚弱、意识混乱、虚脱或癫痫。急救:立即将猫移到阴凉处,在爪子、腹部和耳朵上涂凉水(不是冷水),如有风扇则使用,提供少量凉水,不要浸入冷水或使用冰块,立即送往{city}兽医处。{city}气候下的预防:始终提供新鲜水(多个碗)、确保有空调或凉爽的地方、永远不要把猫留在车里、避免在高温时段(上午10点-下午4点)户外活动。'
    },
    keywords: ['heatstroke', 'overheating', 'hot', 'temperature', 'panting', 'tropical', 'summer', 'emergency']
  },
  {
    id: 'cat-foreign-object-1',
    category: 'cat-emergency',
    question: {
      en: 'What should I do if my cat swallows a foreign object in {city}?',
      ms: 'Apa yang perlu saya lakukan jika kucing saya menelan objek asing di {city}?',
      zh: '如果我在{city}的猫吞了异物该怎么办?'
    },
    shortAnswer: {
      en: 'If your cat in {city}, {state} swallows a foreign object, do NOT try to remove it or induce vomiting. Watch for symptoms like vomiting, loss of appetite, lethargy, or straining to defecate. String, ribbon, and linear objects are especially dangerous. Seek immediate veterinary care at a {city} clinic.',
      ms: 'Jika kucing anda di {city}, {state} menelan objek asing, JANGAN cuba mengeluarkannya atau menyebabkan muntah. Perhatikan gejala seperti muntah, hilang selera makan, lesu, atau mengejan untuk membuang air besar. Tali, reben, dan objek linear sangat berbahaya. Dapatkan rawatan veterinar segera di klinik {city}.',
      zh: '如果您在{city}({state})的猫吞了异物,不要试图取出或催吐。注意呕吐、食欲下降、嗜睡或排便困难等症状。绳子、丝带和线性物体尤其危险。立即在{city}诊所就医。'
    },
    fullAnswer: {
      en: 'Cats in {city}, {state} are curious creatures that may swallow dangerous objects. Knowing what to do can save your cat\'s life. Common foreign objects cats swallow: String, yarn, ribbon, tinsel (extremely dangerous - can cause intestinal bunching), hair ties and rubber bands, small toys or toy parts, needles and thread, buttons, coins, bones. Why linear objects are especially dangerous: String-like objects can become anchored at one end and cause the intestines to bunch up, leading to cuts, blockages, and potentially fatal damage. If you see string coming from your cat\'s mouth or rear end, do NOT pull it. What to do in {city}: Do NOT try to pull out any visible string or object, do NOT induce vomiting, note what your cat may have swallowed, watch for symptoms, and contact your {city} veterinarian immediately. Warning signs of obstruction: Vomiting (especially repeated), loss of appetite, lethargy or depression, abdominal pain or bloating, constipation or straining to defecate, drooling, hiding. Diagnosis at {city} vet: Physical exam, x-rays (some objects visible, others not), possible ultrasound or contrast study. Treatment may include: Induced vomiting (only if vet determines it\'s safe), endoscopy to remove object, surgery for intestinal blockage. Prevention: Keep string, ribbon, and small objects stored safely, supervise play with string toys, and choose appropriate toy sizes.',
      ms: 'Kucing di {city}, {state} adalah makhluk yang ingin tahu yang mungkin menelan objek berbahaya. Mengetahui apa yang perlu dilakukan boleh menyelamatkan nyawa kucing anda. Objek asing biasa yang ditelan kucing: Tali, benang, reben (sangat berbahaya), pengikat rambut, mainan kecil, jarum dan benang, butang. Mengapa objek linear sangat berbahaya: Objek seperti tali boleh berlabuh pada satu hujung dan menyebabkan usus berkumpul, menyebabkan luka, penyumbatan, dan kerosakan yang berpotensi membawa maut. Jika anda melihat tali keluar dari mulut atau belakang kucing anda, JANGAN tariknya. Apa yang perlu dilakukan di {city}: JANGAN cuba menarik keluar sebarang tali atau objek yang kelihatan, JANGAN menyebabkan muntah, perhatikan gejala, dan hubungi veterinar {city} anda dengan segera. Tanda-tanda amaran penyumbatan: Muntah berulang, hilang selera makan, lesu, sakit perut atau kembung, sembelit. Diagnosis di veterinar {city}: Pemeriksaan fizikal, x-ray, mungkin ultrasound. Rawatan mungkin termasuk: Pembedahan untuk penyumbatan usus.',
      zh: '{city}({state})的猫是好奇的生物,可能会吞下危险物品。知道该怎么做可以挽救猫的生命。猫常吞的异物:绳子、纱线、丝带(极其危险 - 可导致肠道堆积)、发绳和橡皮筋、小玩具、针线、纽扣、硬币、骨头。为什么线性物体特别危险:绳状物体可能在一端固定并导致肠道堆积,造成切割、堵塞和可能致命的损伤。如果您看到绳子从猫的嘴或后端伸出,不要拉它。在{city}该怎么做:不要试图拉出任何可见的绳子或物体,不要催吐,注意您的猫可能吞了什么,观察症状,立即联系您的{city}兽医。堵塞的警告信号:呕吐(尤其是反复)、食欲下降、嗜睡或抑郁、腹痛或腹胀、便秘或排便困难。在{city}兽医处的诊断:体检、X光、可能的超声波。治疗可能包括:手术治疗肠道堵塞。预防:安全存放绳子、丝带和小物品,监督绳玩具的玩耍。'
    },
    keywords: ['foreign object', 'swallowed', 'string', 'obstruction', 'blockage', 'surgery', 'emergency', 'ingestion']
  },
  {
    id: 'cat-abscess-1',
    category: 'cat-emergency',
    question: {
      en: 'How do I recognize and treat cat abscesses in {city}?',
      ms: 'Bagaimana saya mengenali dan merawat abses kucing di {city}?',
      zh: '如何识别和治疗{city}猫的脓肿?'
    },
    shortAnswer: {
      en: 'Cat owners in {city}, {state} should watch for swelling, pain when touched, fever, lethargy, and a puncture wound. Abscesses often result from cat fights. They may rupture and drain foul-smelling pus. Treatment from a {city} vet includes draining, antibiotics, and wound care.',
      ms: 'Pemilik kucing di {city}, {state} perlu perhatikan bengkak, sakit apabila disentuh, demam, lesu, dan luka tusukan. Abses sering berlaku akibat pergaduhan kucing. Rawatan dari veterinar {city} termasuk saliran, antibiotik, dan penjagaan luka.',
      zh: '{city}({state})的猫主人应注意肿胀、触摸时疼痛、发烧、嗜睡和穿刺伤。脓肿通常由猫打架引起。它们可能破裂并流出恶臭的脓液。{city}兽医的治疗包括引流、抗生素和伤口护理。'
    },
    fullAnswer: {
      en: 'Abscesses are common in outdoor cats in {city}, {state} who get into fights with other cats. They are pockets of infection under the skin that can become very serious if not treated. How abscesses form: A cat bite introduces bacteria deep into tissue, the puncture wound heals over on the surface, bacteria multiply underneath, forming a pocket of pus, the area swells and becomes painful. Signs of abscess in {city} cats: Localized swelling (often on face, legs, base of tail), pain when area is touched, fever (warm ears, lethargy, reduced appetite), limping if on a leg, fur may become matted or fall out over the area, the area may feel soft and fluctuant, if ruptured: foul-smelling discharge, open wound. What to do: Keep your cat calm and quiet, do NOT squeeze or try to pop the abscess, do NOT apply human medications, seek veterinary care in {city} promptly. Treatment at your {city} vet: Draining the abscess (may require sedation), flushing the wound, antibiotics (oral and/or topical), pain medication, possible drain placement, wound care instructions. Follow-up care: Keep your cat indoors during healing, give all prescribed medications, keep the wound clean, prevent licking (may need cone), watch for signs the infection is returning. Prevention: Keep cats indoors to avoid fights, neuter male cats (reduces fighting behavior), if cats go outside, ensure vaccinations are current.',
      ms: 'Abses adalah biasa pada kucing luar di {city}, {state} yang bergaduh dengan kucing lain. Ia adalah poket jangkitan di bawah kulit yang boleh menjadi sangat serius jika tidak dirawat. Bagaimana abses terbentuk: Gigitan kucing memperkenalkan bakteria jauh ke dalam tisu, luka tusukan sembuh di permukaan, bakteria membiak di bawah, membentuk poket nanah. Tanda-tanda abses pada kucing {city}: Bengkak setempat (sering di muka, kaki, pangkal ekor), sakit apabila kawasan disentuh, demam, pincang jika di kaki, bulu mungkin kusut atau gugur, jika pecah: lelehan berbau busuk. Apa yang perlu dilakukan: Pastikan kucing anda tenang, JANGAN tekan atau cuba memecahkan abses, dapatkan rawatan veterinar di {city} dengan segera. Rawatan di veterinar {city} anda: Mengalirkan abses, membilas luka, antibiotik, ubat sakit. Pencegahan: Simpan kucing di dalam rumah untuk mengelakkan pergaduhan, mandulkan kucing jantan.',
      zh: '脓肿在{city}({state})经常与其他猫打架的户外猫中很常见。它们是皮下的感染囊,如果不治疗可能变得非常严重。脓肿如何形成:猫咬伤将细菌深入组织,穿刺伤口在表面愈合,细菌在下面繁殖形成脓囊,该区域肿胀并变得疼痛。{city}猫脓肿的迹象:局部肿胀(通常在脸、腿、尾巴根部)、触摸该区域时疼痛、发烧(耳朵温热、嗜睡、食欲下降)、如果在腿上则跛行、毛发可能打结或脱落、如果破裂:恶臭分泌物。该怎么做:保持猫平静安静,不要挤压或试图弄破脓肿,不要使用人类药物,及时在{city}就医。在{city}兽医处的治疗:引流脓肿(可能需要镇静)、冲洗伤口、抗生素、止痛药。预防:让猫待在室内以避免打架,给公猫绝育(减少打架行为)。'
    },
    keywords: ['abscess', 'swelling', 'infection', 'bite', 'pus', 'drain', 'wound', 'fight']
  },

  // Cat Maintenance Q&As (20 items)
  {
    id: 'cat-vaccination-1',
    category: 'cat-maintenance',
    question: {
      en: 'What vaccinations does my cat need in {city}?',
      ms: 'Apakah vaksin yang diperlukan kucing saya di {city}?',
      zh: '我在{city}的猫需要什么疫苗?'
    },
    shortAnswer: {
      en: 'Cats in {city}, {state} need core vaccines including FVRCP (feline viral rhinotracheitis, calicivirus, panleukopenia) starting at 6-8 weeks with boosters every 3-4 weeks until 16 weeks, then annually or every 3 years. Rabies vaccine is required by law in Malaysia. Non-core vaccines depend on lifestyle.',
      ms: 'Kucing di {city}, {state} memerlukan vaksin teras termasuk FVRCP bermula pada 6-8 minggu dengan penggalak setiap 3-4 minggu sehingga 16 minggu, kemudian setiap tahun atau 3 tahun. Vaksin rabies diperlukan oleh undang-undang di Malaysia.',
      zh: '{city}({state})的猫需要核心疫苗包括FVRCP(猫病毒性鼻气管炎、杯状病毒、泛白细胞减少症),从6-8周开始接种,每3-4周加强一次直到16周,然后每年或每3年接种一次。狂犬病疫苗在马来西亚是法律要求的。'
    },
    fullAnswer: {
      en: 'Cat vaccinations are essential for preventing serious diseases in {city}, {state}. Core vaccines (recommended for all cats) include: FVRCP - protects against feline viral rhinotracheitis (herpesvirus), calicivirus, and panleukopenia (feline distemper). Kittens in {city} need a series starting at 6-8 weeks, with boosters every 3-4 weeks until 16 weeks old, then a booster at 1 year, followed by every 1-3 years depending on vaccine type. Rabies vaccine is required by law in Malaysia and {state}. First dose at 12-16 weeks, then as required by local regulations (usually annually or every 3 years). Non-core vaccines depend on your cat\'s lifestyle and risk factors in {city}: FeLV (feline leukemia) for outdoor cats or those living with FeLV-positive cats, FIV vaccine (where available), and Chlamydia vaccine for multi-cat environments. Your {city} veterinarian will create a personalized vaccination schedule. Keep records of all vaccinations and set reminders for boosters at your {city}, {state} vet clinic.',
      ms: 'Vaksinasi kucing adalah penting untuk mencegah penyakit serius di {city}, {state}. Vaksin teras (disyorkan untuk semua kucing) termasuk: FVRCP - melindungi daripada rhinotracheitis virus kucing, calicivirus, dan panleukopenia. Anak kucing di {city} memerlukan siri bermula pada 6-8 minggu, dengan penggalak setiap 3-4 minggu sehingga 16 minggu, kemudian penggalak pada 1 tahun, diikuti setiap 1-3 tahun. Vaksin rabies diperlukan oleh undang-undang di Malaysia dan {state}. Dos pertama pada 12-16 minggu. Vaksin bukan teras bergantung kepada gaya hidup kucing anda di {city}: FeLV untuk kucing luar rumah, vaksin FIV, dan vaksin Chlamydia untuk persekitaran berbilang kucing. Veterinar {city} anda akan membuat jadual vaksinasi yang diperibadikan.',
      zh: '猫疫苗对预防{city}({state})的严重疾病至关重要。核心疫苗(建议所有猫接种)包括:FVRCP - 预防猫病毒性鼻气管炎(疱疹病毒)、杯状病毒和泛白细胞减少症(猫瘟)。{city}的幼猫需要从6-8周开始接种系列疫苗,每3-4周加强一次直到16周,然后在1岁时加强,之后根据疫苗类型每1-3年接种一次。狂犬病疫苗在马来西亚和{state}是法律要求的。首次接种在12-16周。非核心疫苗取决于您的猫在{city}的生活方式和风险因素:FeLV(猫白血病)用于户外猫,FIV疫苗,以及用于多猫环境的衣原体疫苗。您的{city}兽医将制定个性化的疫苗接种计划。'
    },
    keywords: ['vaccination', 'vaccine', 'FVRCP', 'rabies', 'shots', 'immunization', 'booster', 'kitten']
  },
  {
    id: 'cat-deworming-1',
    category: 'cat-maintenance',
    question: {
      en: 'How often should I deworm my cat in {city}?',
      ms: 'Berapa kerap saya perlu memberi ubat cacing kepada kucing saya di {city}?',
      zh: '我应该多久给{city}的猫驱虫一次?'
    },
    shortAnswer: {
      en: 'In {city}, {state}, kittens should be dewormed every 2 weeks from 2-8 weeks old, then monthly until 6 months. Adult indoor cats need deworming every 3-6 months, while outdoor cats in {city} may need monthly treatment. Your {city} vet can recommend the best schedule based on lifestyle.',
      ms: 'Di {city}, {state}, anak kucing perlu diberi ubat cacing setiap 2 minggu dari 2-8 minggu, kemudian setiap bulan sehingga 6 bulan. Kucing dewasa dalam rumah di {city} perlu setiap 3-6 bulan, manakala kucing luar mungkin perlu rawatan bulanan.',
      zh: '在{city}({state}),幼猫应该从2-8周开始每2周驱虫一次,然后每月一次直到6个月。{city}的成年室内猫需要每3-6个月驱虫,而户外猫可能需要每月治疗。您的{city}兽医可以根据生活方式推荐最佳时间表。'
    },
    fullAnswer: {
      en: 'Regular deworming is crucial for your cat\'s health in {city}, {state} and prevents transmission to humans. Deworming schedule depends on age and lifestyle: Kittens in {city}: Start at 2 weeks old, repeat every 2 weeks until 8 weeks old, then monthly until 6 months old. This aggressive schedule is necessary because kittens often get worms from their mother. Adult indoor cats in {city}: Every 3-6 months is typically sufficient for cats that stay indoors and don\'t hunt. Adult outdoor cats in {city}: Monthly deworming may be necessary due to higher exposure to parasites from hunting and environmental contact in {state}. Pregnant and nursing cats: Deworm before mating and again in late pregnancy under veterinary guidance from your {city} vet. Common worms in cats in {city}: roundworms, hookworms, and tapeworms. Signs of worm infestation include visible worms in stool, pot-bellied appearance, weight loss despite good appetite, dull coat, diarrhea, and scooting. Your {city} vet can perform fecal tests to identify specific parasites and recommend appropriate medications. Never use dog dewormers on cats as some are toxic to felines.',
      ms: 'Pemberian ubat cacing secara tetap adalah penting untuk kesihatan kucing anda di {city}, {state} dan mencegah penularan kepada manusia. Jadual pemberian ubat cacing bergantung kepada umur dan gaya hidup: Anak kucing di {city}: Mula pada 2 minggu, ulang setiap 2 minggu sehingga 8 minggu, kemudian setiap bulan sehingga 6 bulan. Kucing dewasa dalam rumah di {city}: Setiap 3-6 bulan biasanya mencukupi. Kucing dewasa luar rumah di {city}: Pemberian ubat cacing bulanan mungkin diperlukan kerana pendedahan parasit yang lebih tinggi di {state}. Tanda-tanda serangan cacing termasuk cacing yang kelihatan dalam najis, perut buncit, penurunan berat badan, bulu kusam, dan cirit-birit. Jangan sekali-kali menggunakan ubat cacing anjing pada kucing kerana sesetengahnya toksik kepada kucing.',
      zh: '定期驱虫对您在{city}({state})的猫的健康至关重要,并可防止传播给人类。驱虫时间表取决于年龄和生活方式:{city}的幼猫:从2周开始,每2周重复一次直到8周,然后每月一次直到6个月。这种积极的时间表是必要的,因为幼猫经常从母亲那里感染蠕虫。{city}的成年室内猫:对于待在室内不狩猎的猫,每3-6个月通常就足够了。{city}的成年户外猫:由于在{state}狩猎和环境接触导致寄生虫暴露更高,可能需要每月驱虫。{city}猫常见的蠕虫包括蛔虫、钩虫和绦虫。蠕虫感染的迹象包括粪便中可见的蠕虫、腹部膨胀、尽管食欲良好但体重下降、毛发暗淡和腹泻。切勿在猫身上使用狗驱虫药,因为有些对猫有毒。'
    },
    keywords: ['deworming', 'worms', 'parasites', 'roundworm', 'tapeworm', 'hookworm', 'intestinal']
  },
  {
    id: 'cat-flea-prevention-1',
    category: 'cat-maintenance',
    question: {
      en: 'What is the best flea prevention for cats in {city}?',
      ms: 'Apakah pencegahan kutu terbaik untuk kucing di {city}?',
      zh: '什么是{city}猫最好的跳蚤预防方法?'
    },
    shortAnswer: {
      en: 'Effective flea prevention for cats in {city}, {state} includes monthly topical treatments (spot-on), oral medications, or flea collars. Popular options include Frontline, Revolution, Advantage, and Seresto collars. Choose products specifically for cats - dog flea products can be fatal to cats.',
      ms: 'Pencegahan kutu yang berkesan untuk kucing di {city}, {state} termasuk rawatan topikal bulanan (spot-on), ubat oral, atau kolar kutu. Pilihan popular termasuk Frontline, Revolution, Advantage, dan kolar Seresto. Pilih produk khusus untuk kucing.',
      zh: '{city}({state})猫有效的跳蚤预防包括每月局部治疗(滴剂)、口服药物或跳蚤项圈。流行的选择包括Frontline、Revolution、Advantage和Seresto项圈。选择专门为猫设计的产品 - 狗跳蚤产品对猫可能致命。'
    },
    fullAnswer: {
      en: 'Flea prevention is essential year-round in {city}, {state}\'s tropical climate where these parasites thrive. Options available from your {city} vet include: Topical spot-on treatments: Applied monthly to the back of the neck. Popular brands include Frontline Plus, Revolution (also prevents heartworm and ear mites), and Advantage II. Oral medications: Given monthly, these kill fleas when they bite. Examples include Comfortis and Capstar (for immediate relief). Flea collars: Seresto collars provide 8-month protection and are convenient for cats that resist monthly treatments. CRITICAL WARNING for {city} cat owners: Never use dog flea products on cats! Permethrin, found in many dog products, is highly toxic to cats and can be fatal. Always read labels carefully. When choosing a product in {city}, consider: your cat\'s age and weight, whether they go outdoors in {state}, other pets in the household (especially dogs with permethrin products), and ease of application. If you find fleas, treat all pets in the home and the environment. Wash bedding in hot water, vacuum thoroughly, and consider environmental flea sprays. Prevention is much easier than treating an infestation in {city}\'s humid climate.',
      ms: 'Pencegahan kutu adalah penting sepanjang tahun dalam iklim tropika {city}, {state} di mana parasit ini berkembang. Pilihan yang tersedia dari veterinar {city} anda termasuk: Rawatan topikal spot-on: Digunakan setiap bulan di belakang leher. Jenama popular termasuk Frontline Plus, Revolution, dan Advantage II. Ubat oral: Diberikan setiap bulan. Kolar kutu: Kolar Seresto memberikan perlindungan 8 bulan. AMARAN KRITIKAL untuk pemilik kucing {city}: Jangan sekali-kali menggunakan produk kutu anjing pada kucing! Permethrin sangat toksik kepada kucing dan boleh membawa maut. Jika anda menemui kutu, rawat semua haiwan peliharaan di rumah dan persekitaran. Basuh tempat tidur dalam air panas dan sedut habuk dengan teliti.',
      zh: '在{city}({state})热带气候中,跳蚤全年繁殖,因此跳蚤预防至关重要。您的{city}兽医提供的选择包括:局部滴剂治疗:每月涂抹在颈后。流行品牌包括Frontline Plus、Revolution(还可预防心丝虫和耳螨)和Advantage II。口服药物:每月服用,跳蚤叮咬时杀死它们。例如Comfortis和Capstar(用于即时缓解)。跳蚤项圈:Seresto项圈提供8个月的保护。{city}猫主人的严重警告:切勿在猫身上使用狗跳蚤产品!许多狗产品中的氯菊酯对猫有剧毒,可能致命。在{city}选择产品时,请考虑您的猫的年龄和体重、是否在{state}外出、家中其他宠物以及使用方便性。如果发现跳蚤,请治疗家中所有宠物和环境。用热水清洗床上用品,彻底吸尘。在{city}潮湿的气候中,预防比治疗感染容易得多。'
    },
    keywords: ['flea', 'prevention', 'Frontline', 'Revolution', 'Advantage', 'Seresto', 'spot-on', 'collar']
  },
  {
    id: 'cat-dental-cleaning-1',
    category: 'cat-maintenance',
    question: {
      en: 'How do I maintain my cat\'s dental health in {city}?',
      ms: 'Bagaimana saya menjaga kesihatan gigi kucing saya di {city}?',
      zh: '如何保持我在{city}的猫的牙齿健康?'
    },
    shortAnswer: {
      en: 'Cat owners in {city}, {state} should brush their cat\'s teeth daily with cat-specific toothpaste, provide dental treats and toys, feed dental diet kibble, and schedule professional cleanings at a {city} vet. Signs of dental problems include bad breath, drooling, difficulty eating, and red gums.',
      ms: 'Pemilik kucing di {city}, {state} perlu gosok gigi kucing anda setiap hari dengan ubat gigi khusus kucing, berikan snek dan mainan pergigian, beri makanan kibble pergigian, dan jadualkan pembersihan profesional di veterinar {city}.',
      zh: '{city}({state})的猫主人应每天用猫专用牙膏刷猫牙,提供洁牙零食和玩具,喂食洁牙干粮,并在{city}兽医处安排专业清洁。牙齿问题的迹象包括口臭、流口水、进食困难和牙龈发红。'
    },
    fullAnswer: {
      en: 'Dental disease affects over 70% of cats by age 3 in {city}, {state}, making dental care essential. Home care routine: Daily brushing is ideal - use a cat-specific toothbrush (finger brushes work well) and enzymatic toothpaste made for cats (never use human toothpaste). Start slowly, first letting your cat taste the toothpaste, then gradually introducing brushing. Dental treats and toys can help reduce plaque - look for VOHC (Veterinary Oral Health Council) approved products available in {city}. Dental diets with larger kibble sizes help mechanically clean teeth. Water additives can reduce bacteria but shouldn\'t replace brushing. Professional care at your {city} vet: Annual dental checkups are recommended. Professional cleaning under anesthesia may be needed every 1-2 years, depending on your cat\'s dental health. Warning signs to watch for in {city} cats: persistent bad breath (halitosis), red, swollen, or bleeding gums, visible tartar (yellow/brown buildup), difficulty eating or dropping food, pawing at mouth, drooling, and loose or missing teeth. Early intervention at a {city}, {state} veterinary clinic prevents painful infections and tooth loss.',
      ms: 'Penyakit pergigian menjejaskan lebih 70% kucing menjelang usia 3 tahun di {city}, {state}. Rutin penjagaan di rumah: Penggosok gigi setiap hari adalah ideal - gunakan berus gigi khusus kucing dan ubat gigi enzimatik untuk kucing. Snek dan mainan pergigian boleh membantu mengurangkan plak - cari produk yang diluluskan VOHC yang tersedia di {city}. Diet pergigian dengan saiz kibble yang lebih besar membantu membersihkan gigi secara mekanikal. Penjagaan profesional di veterinar {city} anda: Pemeriksaan pergigian tahunan disyorkan. Pembersihan profesional di bawah bius mungkin diperlukan setiap 1-2 tahun. Tanda-tanda amaran pada kucing {city}: nafas busuk yang berterusan, gusi merah atau bengkak, tar yang kelihatan, kesukaran makan, dan gigi longgar.',
      zh: '牙科疾病在{city}({state})3岁时影响超过70%的猫,使牙齿护理变得至关重要。家庭护理程序:每天刷牙是理想的 - 使用猫专用牙刷(指套刷效果很好)和猫用酶牙膏(切勿使用人用牙膏)。慢慢开始,首先让您的猫品尝牙膏,然后逐渐引入刷牙。洁牙零食和玩具可以帮助减少牙菌斑 - 寻找{city}可用的VOHC(兽医口腔健康委员会)认可的产品。较大颗粒的洁牙干粮有助于机械清洁牙齿。在{city}兽医处的专业护理:建议每年进行牙科检查。根据您的猫的牙齿健康状况,可能每1-2年需要在麻醉下进行专业清洁。{city}猫需要注意的警告信号:持续口臭、牙龈红肿或出血、可见牙垢(黄色/棕色堆积)、进食困难、用爪子抓嘴和流口水。在{city}({state})兽医诊所及早干预可防止疼痛性感染和牙齿脱落。'
    },
    keywords: ['dental', 'teeth', 'brushing', 'tartar', 'plaque', 'gums', 'oral', 'cleaning']
  },
  {
    id: 'cat-nail-trimming-1',
    category: 'cat-maintenance',
    question: {
      en: 'How often should I trim my cat\'s nails in {city}?',
      ms: 'Berapa kerap saya perlu memotong kuku kucing saya di {city}?',
      zh: '我应该多久给{city}的猫剪一次指甲?'
    },
    shortAnswer: {
      en: 'Cat owners in {city}, {state} should trim their cat\'s nails every 2-4 weeks. Indoor cats need more frequent trims as their nails don\'t wear down naturally. Use cat nail clippers, trim only the clear tip, and avoid the pink quick. Scratching posts help maintain nail health.',
      ms: 'Pemilik kucing di {city}, {state} perlu potong kuku kucing anda setiap 2-4 minggu. Kucing dalam rumah memerlukan potongan lebih kerap. Gunakan pemotong kuku kucing, potong hanya hujung jernih, dan elakkan bahagian merah jambu.',
      zh: '{city}({state})的猫主人应每2-4周修剪一次猫的指甲。室内猫需要更频繁修剪,因为它们的指甲不会自然磨损。使用猫指甲剪,只剪透明的尖端,避开粉红色的血线。猫抓板有助于保持指甲健康。'
    },
    fullAnswer: {
      en: 'Regular nail trimming in {city}, {state} prevents painful overgrown nails and protects your furniture and skin. Trimming frequency: Most cats in {city} need nail trims every 2-4 weeks. Indoor cats need more frequent trims since their nails don\'t wear down from outdoor activity. Senior cats may need more frequent trims as they become less active. Check front and back paws - front claws often grow faster. How to trim safely: Use proper cat nail clippers (scissor-type or guillotine-style) available from {city} pet stores. Have styptic powder nearby in case you cut too short. Gently press the paw pad to extend the claws. Locate the pink quick (blood vessel) - only trim the clear/white tip. Trim at a 45-degree angle. Start with just one or two nails if your cat is nervous. If your cat is extremely resistant, consider professional grooming services in {city} or ask your {city} vet for help. Never declaw - it\'s a painful amputation that\'s illegal in many countries. Provide scratching posts and pads to help naturally maintain claws and satisfy your cat\'s instinct to scratch.',
      ms: 'Pemotongan kuku secara tetap di {city}, {state} mencegah kuku yang terlalu panjang dan melindungi perabot dan kulit anda. Kekerapan pemotongan: Kebanyakan kucing di {city} memerlukan pemotongan kuku setiap 2-4 minggu. Kucing dalam rumah memerlukan pemotongan lebih kerap. Bagaimana memotong dengan selamat: Gunakan pemotong kuku kucing yang betul yang tersedia dari kedai haiwan peliharaan {city}. Sediakan serbuk styptik berdekatan. Tekan pad kaki dengan lembut untuk memanjangkan kuku. Cari bahagian merah jambu (salur darah) - hanya potong hujung jernih. Jika kucing anda sangat degil, pertimbangkan perkhidmatan dandanan profesional di {city}. Jangan sekali-kali buang kuku - ia adalah amputasi yang menyakitkan. Sediakan tiang menggaruk untuk membantu mengekalkan kuku secara semula jadi.',
      zh: '在{city}({state})定期修剪指甲可防止指甲过度生长疼痛,并保护您的家具和皮肤。修剪频率:大多数{city}的猫需要每2-4周修剪一次指甲。室内猫需要更频繁修剪,因为它们的指甲不会因户外活动而磨损。老年猫可能需要更频繁修剪。如何安全修剪:使用{city}宠物店可买到的适当的猫指甲剪(剪刀式或铡刀式)。准备止血粉以防剪得太短。轻轻按压爪垫以伸出爪子。找到粉红色的血线(血管) - 只剪透明/白色的尖端。以45度角修剪。如果您的猫非常抗拒,请考虑{city}的专业美容服务或请您的{city}兽医帮助。永远不要去爪 - 这是一种痛苦的截肢手术,在许多国家是非法的。提供猫抓板和垫子来帮助自然保持爪子。'
    },
    keywords: ['nail', 'claw', 'trimming', 'clipping', 'scratching', 'grooming', 'paw']
  },
  {
    id: 'cat-ear-cleaning-1',
    category: 'cat-maintenance',
    question: {
      en: 'How do I clean my cat\'s ears safely in {city}?',
      ms: 'Bagaimana saya membersihkan telinga kucing dengan selamat di {city}?',
      zh: '如何在{city}安全地清洁我的猫的耳朵?'
    },
    shortAnswer: {
      en: 'Cat owners in {city}, {state} should clean their cat\'s ears monthly with vet-approved ear cleaner. Apply solution to a cotton ball, gently wipe the outer ear, and never insert anything into the ear canal. Healthy ears are pink with minimal wax. See a {city} vet if you notice discharge or odor.',
      ms: 'Pemilik kucing di {city}, {state} perlu bersihkan telinga kucing anda setiap bulan dengan pembersih telinga yang diluluskan veterinar. Sapukan larutan pada bebola kapas, lap telinga luar dengan lembut, dan jangan masukkan apa-apa ke dalam saluran telinga.',
      zh: '{city}({state})的猫主人应每月用兽医认可的耳朵清洁剂清洁猫的耳朵。将溶液涂在棉球上,轻轻擦拭外耳,切勿将任何东西插入耳道。健康的耳朵是粉红色的,耳垢很少。如果发现分泌物或异味,请看{city}兽医。'
    },
    fullAnswer: {
      en: 'Regular ear cleaning keeps your cat healthy in {city}, {state}\'s humid tropical climate where ear infections are common. When to clean: Most cats need ear cleaning every 2-4 weeks. Cats prone to ear problems may need weekly cleaning. Some cats never need cleaning - check regularly and clean as needed. How to clean safely: Gather supplies: vet-approved ear cleaner from your {city} vet, cotton balls or gauze, treats for reward. Hold your cat gently but securely. Apply cleaner to a cotton ball (never directly into ear). Gently wipe visible parts of the outer ear. Let your cat shake their head. Repeat on the other ear. Reward with treats. What to look for in {city} cats: Pink, clean inner ear - healthy. Brown or black waxy discharge - possible ear mites or infection. Redness or swelling - inflammation or infection. Bad odor - likely infection. Excessive scratching or head shaking - discomfort. What NOT to do: Never insert cotton swabs or anything deep into the ear canal. Don\'t use alcohol, hydrogen peroxide, or other home remedies. Don\'t clean if the ear looks infected - see your {city} vet. Don\'t clean too frequently - can cause irritation. When to see a {city} veterinarian: Dark discharge, bad smell, pain when touched, head tilting, balance issues.',
      ms: 'Pembersihan telinga secara tetap memastikan kucing anda sihat dalam iklim tropika lembap {city}, {state} di mana jangkitan telinga adalah biasa. Bila untuk membersihkan: Kebanyakan kucing memerlukan pembersihan telinga setiap 2-4 minggu. Bagaimana membersihkan dengan selamat: Kumpulkan bekalan: pembersih telinga yang diluluskan veterinar dari veterinar {city} anda, bebola kapas, gula-gula untuk ganjaran. Pegang kucing anda dengan lembut tetapi selamat. Sapukan pembersih pada bebola kapas (jangan sekali-kali terus ke dalam telinga). Lap bahagian luar telinga yang kelihatan dengan lembut. Apa yang perlu dicari pada kucing {city}: Telinga dalam merah jambu, bersih - sihat. Lelehan lilin coklat atau hitam - mungkin hama telinga atau jangkitan. Kemerahan atau bengkak - keradangan atau jangkitan. Bau busuk - kemungkinan jangkitan. Bila untuk berjumpa veterinar {city}: Lelehan gelap, bau busuk, sakit apabila disentuh, kepala condong.',
      zh: '在{city}({state})潮湿的热带气候中,定期清洁耳朵可保持猫的健康,因为耳朵感染很常见。何时清洁:大多数猫需要每2-4周清洁一次耳朵。如何安全清洁:收集用品:从{city}兽医处购买兽医认可的耳朵清洁剂、棉球或纱布、奖励用的零食。轻轻但牢固地抱住猫。将清洁剂涂在棉球上(切勿直接涂入耳朵)。轻轻擦拭外耳可见部分。让猫摇头。在另一只耳朵上重复。用零食奖励。{city}猫需要注意什么:粉红色、干净的内耳 - 健康。棕色或黑色蜡状分泌物 - 可能是耳螨或感染。发红或肿胀 - 炎症或感染。异味 - 可能是感染。不要做什么:永远不要将棉签或任何东西深入耳道。不要使用酒精、过氧化氢或其他家庭疗法。如果耳朵看起来感染了,不要清洁 - 去看{city}兽医。何时看{city}兽医:深色分泌物、异味、触摸时疼痛、歪头、平衡问题。'
    },
    keywords: ['ear', 'cleaning', 'wax', 'mites', 'infection', 'cotton', 'maintenance']
  },
  {
    id: 'cat-nutrition-1',
    category: 'cat-maintenance',
    question: {
      en: 'What should I feed my cat in {city} for optimal health?',
      ms: 'Apa yang perlu saya beri makan kepada kucing saya di {city} untuk kesihatan optimum?',
      zh: '我应该给{city}的猫喂什么以获得最佳健康?'
    },
    shortAnswer: {
      en: 'Cats in {city}, {state} need high-quality protein-rich food with essential amino acids like taurine. Choose age-appropriate food (kitten, adult, senior), ensure fresh water is always available, and feed measured portions. Avoid milk (many cats are lactose intolerant). Ask your {city} vet for specific recommendations.',
      ms: 'Kucing di {city}, {state} memerlukan makanan berkualiti tinggi yang kaya protein dengan asid amino penting seperti taurine. Pilih makanan sesuai umur (anak kucing, dewasa, senior), pastikan air segar sentiasa ada, dan beri bahagian yang diukur. Elakkan susu.',
      zh: '{city}({state})的猫需要富含蛋白质的高质量食物,含有牛磺酸等必需氨基酸。选择适合年龄的食物(幼猫、成年、老年),确保始终有新鲜水,并喂食定量。避免牛奶(许多猫乳糖不耐受)。向您的{city}兽医咨询具体建议。'
    },
    fullAnswer: {
      en: 'Proper nutrition is essential for your cat\'s health in {city}, {state}. Cats are obligate carnivores and need meat-based diets. Key nutritional requirements for {city} cats: High-quality animal protein as the first ingredient. Taurine (essential amino acid cats cannot produce - deficiency causes heart and eye problems). Appropriate fat content for energy. Limited carbohydrates (cats don\'t process carbs efficiently). Fresh, clean water (especially important in {city}\'s tropical climate). Types of food available in {city}: Dry food (kibble): Convenient, good for dental health, less expensive. Wet food (canned): Higher moisture content, often more palatable. Raw diets: Require careful handling; consult your {city} vet. Combination feeding: Mixing dry and wet. Feeding guidelines in {city}: Kittens (up to 1 year): 3-4 meals daily, kitten-specific formula. Adults (1-7 years): 2 meals daily, measured portions based on weight. Seniors (7+ years): May need senior formula with adjusted calories. Pregnant/nursing: Increased calories, often kitten food. Foods to avoid: Milk and dairy (many cats are lactose intolerant), raw eggs, onions and garlic, chocolate, caffeine, alcohol, grapes and raisins, bones. Signs of nutritional problems in {city} cats: Dull coat, excessive shedding, low energy, obesity, and digestive issues. Consult your {city}, {state} veterinarian for personalized nutrition advice.',
      ms: 'Pemakanan yang betul adalah penting untuk kesihatan kucing anda di {city}, {state}. Kucing adalah karnivor obligat dan memerlukan diet berasaskan daging. Keperluan pemakanan utama untuk kucing {city}: Protein haiwan berkualiti tinggi sebagai bahan pertama. Taurine (asid amino penting yang kucing tidak dapat hasilkan). Kandungan lemak yang sesuai untuk tenaga. Jenis makanan yang tersedia di {city}: Makanan kering (kibble): Mudah, baik untuk kesihatan gigi. Makanan basah (tin): Kandungan lembapan lebih tinggi. Diet mentah: Memerlukan pengendalian berhati-hati; rujuk veterinar {city} anda. Garis panduan pemberian makan di {city}: Anak kucing: 3-4 kali makan setiap hari. Dewasa: 2 kali makan setiap hari. Senior: Mungkin perlu formula senior. Makanan yang perlu dielakkan: Susu dan tenusu (banyak kucing tidak tahan laktosa), telur mentah, bawang dan bawang putih, coklat.',
      zh: '适当的营养对{city}({state})的猫健康至关重要。猫是专性食肉动物,需要肉类饮食。{city}猫的关键营养需求:高质量动物蛋白作为第一成分。牛磺酸(猫无法产生的必需氨基酸 - 缺乏会导致心脏和眼睛问题)。适当的脂肪含量提供能量。有限的碳水化合物(猫不能有效处理碳水化合物)。新鲜、干净的水(在{city}的热带气候中尤其重要)。{city}可用的食物类型:干粮(干粮):方便,对牙齿健康有益,价格较低。湿粮(罐头):水分含量高,通常更可口。生食:需要小心处理;咨询{city}兽医。{city}的喂养指南:幼猫(1岁以下):每天3-4餐,幼猫专用配方。成年(1-7岁):每天2餐,根据体重定量。老年(7岁以上):可能需要调整热量的老年配方。要避免的食物:牛奶和乳制品(许多猫乳糖不耐受)、生鸡蛋、洋葱和大蒜、巧克力。咨询{city}({state})兽医获取个性化营养建议。'
    },
    keywords: ['nutrition', 'food', 'diet', 'feeding', 'protein', 'taurine', 'water', 'health']
  },
  {
    id: 'cat-weight-management-1',
    category: 'cat-maintenance',
    question: {
      en: 'How do I help my overweight cat lose weight in {city}?',
      ms: 'Bagaimana saya membantu kucing saya yang berlebihan berat badan mengurangkan berat badan di {city}?',
      zh: '如何帮助我在{city}的超重猫减肥?'
    },
    shortAnswer: {
      en: 'For overweight cats in {city}, {state}, work with your vet to create a weight loss plan. Gradually reduce portions, switch to a weight management diet, increase playtime to 15-20 minutes daily, and use puzzle feeders. Aim for 1-2% body weight loss per week. Monitor progress at regular {city} vet checkups.',
      ms: 'Untuk kucing yang berlebihan berat badan di {city}, {state}, bekerjasama dengan veterinar anda untuk mencipta pelan penurunan berat badan. Kurangkan bahagian secara beransur-ansur, tukar kepada diet pengurusan berat badan, tingkatkan masa bermain, dan gunakan penyuap teka-teki.',
      zh: '对于{city}({state})的超重猫,与兽医合作制定减肥计划。逐渐减少份量,改用体重管理饮食,每天增加15-20分钟的玩耍时间,使用益智喂食器。目标是每周减少1-2%的体重。在定期的{city}兽医检查中监测进展。'
    },
    fullAnswer: {
      en: 'Obesity is a serious health concern for cats in {city}, {state}, leading to diabetes, arthritis, and shortened lifespan. Here\'s how to help your cat lose weight safely. First steps in {city}: Visit your {city} vet to rule out medical causes (hypothyroidism, etc.), get an accurate current weight, determine ideal target weight, create a customized weight loss plan. Dietary changes: Calculate correct calorie intake with your {city} vet. Consider switching to a weight management formula. Measure food precisely - no guessing. Reduce treats to less than 10% of daily calories. Use low-calorie treats or pieces of regular food. Stop free-feeding; switch to scheduled meals. Increasing activity in {city}\'s climate: Aim for 15-20 minutes of active play daily. Use interactive toys (feather wands, laser pointers). Create climbing opportunities (cat trees, shelves). Play during cooler hours if using outdoor enclosures. Make cats work for food (puzzle feeders). Safe weight loss rate: Aim for 1-2% body weight per week. Too-rapid weight loss can cause hepatic lipidosis (fatty liver). Regular weigh-ins at your {city} vet clinic. Adjust food as needed based on progress. Common mistakes: Cutting food too drastically. Forgetting to count treats. Not enough exercise. Giving in to begging. Not involving all family members. When to see your {city} vet: Weight loss has stalled. Cat seems unwell or extremely hungry. Rapid weight loss occurs. Creating lasting change takes time - typically 6-12 months for significant weight loss with guidance from your {city}, {state} veterinary team.',
      ms: 'Obesiti adalah kebimbangan kesihatan yang serius untuk kucing di {city}, {state}, menyebabkan diabetes, artritis, dan jangka hayat yang lebih pendek. Inilah cara membantu kucing anda mengurangkan berat badan dengan selamat. Langkah pertama di {city}: Lawati veterinar {city} anda untuk menolak punca perubatan, dapatkan berat semasa yang tepat, tentukan berat sasaran ideal, cipta pelan penurunan berat badan yang disesuaikan. Perubahan diet: Kira pengambilan kalori yang betul dengan veterinar {city} anda. Pertimbangkan untuk menukar kepada formula pengurusan berat badan. Ukur makanan dengan tepat. Kurangkan snek kepada kurang dari 10% kalori harian. Berhenti memberi makan bebas; tukar kepada waktu makan berjadual. Meningkatkan aktiviti: Sasarkan 15-20 minit bermain aktif setiap hari. Gunakan mainan interaktif. Kadar penurunan berat badan yang selamat: Sasarkan 1-2% berat badan seminggu. Penurunan berat badan terlalu cepat boleh menyebabkan lipidosis hepatik (hati berlemak). Timbangan berkala di klinik veterinar {city} anda.',
      zh: '肥胖对{city}({state})的猫来说是一个严重的健康问题,会导致糖尿病、关节炎和寿命缩短。以下是如何帮助您的猫安全减肥。{city}的第一步:访问{city}兽医排除医学原因(甲状腺功能减退等),获取准确的当前体重,确定理想目标体重,制定定制的减肥计划。饮食变化:与{city}兽医计算正确的卡路里摄入量。考虑改用体重管理配方。精确测量食物 - 不要猜测。将零食减少到每日卡路里的10%以下。停止自由喂食;改为定时进餐。在{city}的气候中增加活动:目标是每天15-20分钟的活跃玩耍。使用互动玩具(羽毛棒、激光笔)。创造攀爬机会(猫树、架子)。让猫为食物工作(益智喂食器)。安全的减肥速度:目标是每周减少1-2%的体重。减肥太快可能导致肝脂肪变性(脂肪肝)。在{city}兽医诊所定期称重。根据进展调整食物。何时看{city}兽医:减肥停滞。猫看起来不舒服或极度饥饿。发生快速减肥。在{city}({state})兽医团队的指导下,创造持久的改变需要时间 - 通常需要6-12个月才能显著减肥。'
    },
    keywords: ['weight', 'obesity', 'diet', 'exercise', 'overweight', 'fat', 'calories', 'health']
  },
  {
    id: 'cat-grooming-1',
    category: 'cat-maintenance',
    question: {
      en: 'How often should I groom my cat in {city}?',
      ms: 'Berapa kerap saya perlu mendandan kucing saya di {city}?',
      zh: '我应该多久给{city}的猫梳理一次?'
    },
    shortAnswer: {
      en: 'In {city}\'s tropical climate, short-haired cats need brushing 1-2 times weekly, while long-haired cats need daily grooming to prevent matting. Regular grooming removes loose fur, reduces hairballs, and lets you check for parasites or skin issues common in {state}. Bath only when necessary.',
      ms: 'Dalam iklim tropika {city}, kucing berbulu pendek memerlukan penyikatan 1-2 kali seminggu, manakala kucing berbulu panjang memerlukan dandanan harian untuk mencegah kekusutan. Dandanan biasa membuang bulu longgar dan mengurangkan hairball.',
      zh: '在{city}的热带气候中,短毛猫需要每周梳理1-2次,而长毛猫需要每天梳理以防止打结。定期梳理可去除松散的毛发,减少毛球,并让您检查{state}常见的寄生虫或皮肤问题。仅在必要时洗澡。'
    },
    fullAnswer: {
      en: 'Regular grooming is important for your cat\'s health and wellbeing in {city}, {state}\'s tropical climate where parasites are common year-round. Grooming frequency for {city} cats: Short-haired cats: Brush 1-2 times per week. Long-haired cats: Brush daily to prevent mats. Hairless cats: Weekly wipe-down with damp cloth. Brushing benefits in {city}\'s climate: Removes loose fur (reduces hairballs). Distributes natural oils. Detects parasites early (common in {state}). Finds lumps, bumps, or skin problems. Bonds you with your cat. Choosing the right brush: Short hair: Rubber brush, bristle brush. Medium hair: Slicker brush, comb. Long hair: Wide-tooth comb, dematting tool. Bathing {city} cats: Most cats self-groom and rarely need baths. Bath only when: visibly dirty, got into something sticky or toxic, flea treatment, medical condition requires it. Use cat-specific shampoo. Make it quick - most cats hate water. Dry thoroughly in {city}\'s humid climate. Professional grooming in {city}: Consider for: long-haired breeds, severe matting, cats who resist home grooming, lion cuts for summer heat. Common grooming issues in {city}: Matted fur (especially in humid weather), excessive shedding, skin issues from allergies or parasites. When to see your {city} vet: Sudden changes in coat quality, excessive grooming or hair pulling, bald patches, signs of skin infection.',
      ms: 'Dandanan tetap adalah penting untuk kesihatan kucing anda dalam iklim tropika {city}, {state} di mana parasit adalah biasa sepanjang tahun. Kekerapan dandanan untuk kucing {city}: Kucing berbulu pendek: Sikat 1-2 kali seminggu. Kucing berbulu panjang: Sikat setiap hari untuk mencegah kekusutan. Faedah penyikatan dalam iklim {city}: Membuang bulu longgar (mengurangkan hairball). Mengagihkan minyak semula jadi. Mengesan parasit awal (biasa di {state}). Mencari benjolan atau masalah kulit. Mengikat anda dengan kucing anda. Memandikan kucing {city}: Kebanyakan kucing menjaga diri sendiri dan jarang memerlukan mandi. Gunakan syampu khusus kucing. Keringkan dengan teliti dalam iklim lembap {city}. Dandanan profesional di {city}: Pertimbangkan untuk: baka berbulu panjang, kekusutan teruk, kucing yang menentang dandanan rumah. Bila untuk berjumpa veterinar {city} anda: Perubahan mendadak dalam kualiti bulu, dandanan berlebihan, tompok botak.',
      zh: '在{city}({state})的热带气候中,定期梳理对猫的健康很重要,因为寄生虫全年都很常见。{city}猫的梳理频率:短毛猫:每周梳理1-2次。长毛猫:每天梳理以防止打结。在{city}气候下梳理的好处:去除松散的毛发(减少毛球)。分布天然油脂。及早发现寄生虫({state}常见)。发现肿块或皮肤问题。与您的猫建立联系。给{city}的猫洗澡:大多数猫自我清洁,很少需要洗澡。仅在以下情况下洗澡:明显脏了、沾上了粘性或有毒物质、跳蚤治疗、医疗状况需要。使用猫专用洗发水。在{city}潮湿的气候中彻底干燥。{city}的专业美容:考虑用于:长毛品种、严重打结、抗拒家庭梳理的猫、夏季炎热的狮子剪。{city}常见的梳理问题:毛发打结(尤其在潮湿天气)、过度脱毛、过敏或寄生虫引起的皮肤问题。何时看{city}兽医:毛发质量突然变化、过度梳理或拔毛、秃斑、皮肤感染迹象。'
    },
    keywords: ['grooming', 'brushing', 'fur', 'coat', 'matting', 'shedding', 'bath', 'hairball']
  },
  {
    id: 'cat-litter-box-1',
    category: 'cat-maintenance',
    question: {
      en: 'What are the best practices for litter box care in {city}?',
      ms: 'Apakah amalan terbaik untuk penjagaan kotak pasir di {city}?',
      zh: '在{city}猫砂盆护理的最佳做法是什么?'
    },
    shortAnswer: {
      en: 'Cat owners in {city}, {state} should scoop litter daily, change litter completely weekly, have one box per cat plus one extra, place boxes in quiet accessible spots, and use unscented clumping litter. In {city}\'s humid climate, clean boxes more frequently to prevent odor and bacterial growth.',
      ms: 'Pemilik kucing di {city}, {state} perlu mengaut pasir setiap hari, tukar pasir sepenuhnya setiap minggu, ada satu kotak setiap kucing tambah satu lagi, letakkan kotak di tempat yang tenang dan mudah diakses, dan gunakan pasir menggumpal tanpa wangian.',
      zh: '{city}({state})的猫主人应每天铲猫砂,每周完全更换猫砂,每只猫一个盆加一个额外的,将盆放在安静易接近的地方,使用无香味的结团猫砂。在{city}潮湿的气候中,更频繁地清洁盆以防止异味和细菌生长。'
    },
    fullAnswer: {
      en: 'Proper litter box care is essential for your cat\'s health and happiness in {city}, {state}. {city}\'s humid tropical climate requires extra attention to litter box hygiene. Litter box basics for {city} homes: Number: One box per cat, plus one extra. Size: 1.5 times your cat\'s length. Type: Many cats prefer open boxes; some shy cats prefer covered. Location: Quiet, accessible, separate from food, easy escape routes. Daily cleaning routine: Scoop waste at least once daily (more often in {city}\'s humidity). Top up litter as needed. Check for signs of health issues (blood, diarrhea, unusual urine clumps). Weekly cleaning in {city}\'s climate: Dump all litter. Wash box with mild soap (no harsh chemicals). Dry completely before adding new litter. Add 2-3 inches of fresh litter. Monthly: Consider replacing plastic boxes (they absorb odors over time). Special considerations for {city}\'s tropical climate: Change litter more frequently (humidity increases odor and bacteria). Consider litter with odor control. Keep boxes in well-ventilated areas. Watch for mold or mildew in damp areas. Common problems: Litter box aversion (may indicate health issues or stress), spraying outside box (could be territorial or medical), not covering waste (may be behavioral or pain-related). When to call your {city} vet: Changes in urination or defecation habits, signs of pain when using box, blood in urine or stool.',
      ms: 'Penjagaan kotak pasir yang betul adalah penting untuk kesihatan kucing anda di {city}, {state}. Iklim tropika lembap {city} memerlukan perhatian tambahan kepada kebersihan kotak pasir. Asas kotak pasir untuk rumah {city}: Bilangan: Satu kotak setiap kucing, tambah satu lagi. Saiz: 1.5 kali panjang kucing anda. Lokasi: Tenang, mudah diakses, berasingan dari makanan. Rutin pembersihan harian: Kaut sisa sekurang-kurangnya sekali sehari (lebih kerap dalam kelembapan {city}). Pembersihan mingguan dalam iklim {city}: Buang semua pasir. Basuh kotak dengan sabun lembut. Keringkan sepenuhnya sebelum menambah pasir baru. Pertimbangan khas untuk iklim tropika {city}: Tukar pasir lebih kerap (kelembapan meningkatkan bau dan bakteria). Pertimbangkan pasir dengan kawalan bau. Simpan kotak di kawasan yang mempunyai pengudaraan yang baik. Masalah biasa: Keengganan kotak pasir (mungkin menunjukkan masalah kesihatan), menyembur di luar kotak.',
      zh: '适当的猫砂盆护理对{city}({state})的猫健康和幸福至关重要。{city}潮湿的热带气候需要额外注意猫砂盆卫生。{city}家庭的猫砂盆基础:数量:每只猫一个盆,再加一个。大小:猫身长的1.5倍。位置:安静、易接近、与食物分开、有容易逃跑的路线。每日清洁程序:每天至少铲一次(在{city}的湿度下更频繁)。根据需要添加猫砂。检查健康问题的迹象(血、腹泻、异常尿块)。{city}气候下的每周清洁:倒掉所有猫砂。用温和的肥皂清洗盆(不用刺激性化学品)。在添加新猫砂之前完全干燥。添加2-3英寸的新猫砂。{city}热带气候的特殊考虑:更频繁地更换猫砂(湿度增加气味和细菌)。考虑有除臭功能的猫砂。将盆放在通风良好的地方。注意潮湿区域的霉菌。常见问题:猫砂盆厌恶(可能表示健康问题或压力)、在盆外喷尿(可能是领地或医学问题)。何时拨打{city}兽医:排尿或排便习惯改变、使用盆时疼痛迹象、尿液或粪便中有血。'
    },
    keywords: ['litter box', 'litter', 'cleaning', 'toilet', 'hygiene', 'odor', 'behavior']
  },
  {
    id: 'cat-senior-care-1',
    category: 'cat-maintenance',
    question: {
      en: 'How should I care for my senior cat in {city}?',
      ms: 'Bagaimana saya perlu menjaga kucing senior saya di {city}?',
      zh: '我应该如何照顾{city}的老年猫?'
    },
    shortAnswer: {
      en: 'Senior cats (typically 11+ years) in {city}, {state} need twice-yearly vet checkups, senior-specific diet, easy access to litter boxes and beds, more gentle exercise, and monitoring for age-related conditions. Watch for changes in appetite, weight, behavior, and mobility. Regular blood work at your {city} vet helps catch issues early.',
      ms: 'Kucing senior (biasanya 11+ tahun) di {city}, {state} memerlukan pemeriksaan veterinar dua kali setahun, diet khusus senior, akses mudah ke kotak pasir dan katil, senaman lebih lembut, dan pemantauan untuk keadaan berkaitan usia.',
      zh: '{city}({state})的老年猫(通常11岁以上)需要每年两次兽医检查、老年专用饮食、易于进入猫砂盆和床铺、更温和的运动,以及监测与年龄相关的疾病。注意食欲、体重、行为和行动能力的变化。在{city}兽医处定期血液检查有助于及早发现问题。'
    },
    fullAnswer: {
      en: 'Cats in {city}, {state} are considered seniors at around 11 years and geriatric at 15+. With proper care, many cats live well into their late teens or early twenties. Key aspects of senior cat care in {city}: Veterinary care: Twice-yearly checkups at your {city} vet. Annual blood work and urinalysis. Dental assessments. Blood pressure monitoring. Weight tracking. Vaccination discussion (may adjust schedule). Nutrition for {city} senior cats: Senior-specific formula (easier to digest). Smaller, more frequent meals if needed. Increased hydration (wet food, water fountains). Supplements as recommended by your {city} vet (joint support, omega fatty acids). Environment adjustments: Low-sided litter boxes for easy access. Ramps or steps to favorite spots. Soft, warm bedding for arthritic joints. Non-slip surfaces on floors. Easy access to food and water. Keep routine consistent (seniors don\'t adapt well to change). Common senior cat health issues in {city}: Kidney disease (most common). Hyperthyroidism. Diabetes. Arthritis and mobility issues. Dental disease. Cognitive dysfunction (confusion, vocalization, disrupted sleep). Cancer. Heart disease. Vision and hearing loss. Signs to monitor: Changes in appetite or weight. Increased thirst or urination. Changes in litter box habits. Decreased grooming or over-grooming. Behavioral changes (confusion, hiding, aggression). Difficulty jumping or climbing. Vocalization changes. Quality of life considerations: Manage pain effectively with your {city} vet. Maintain mental stimulation. Provide comfort and routine. Know when to discuss end-of-life options with your {city}, {state} veterinarian.',
      ms: 'Kucing di {city}, {state} dianggap senior pada sekitar 11 tahun dan geriatrik pada 15+. Dengan penjagaan yang betul, banyak kucing hidup hingga akhir remaja atau awal dua puluhan. Aspek utama penjagaan kucing senior di {city}: Penjagaan veterinar: Pemeriksaan dua kali setahun di veterinar {city} anda. Kerja darah dan urinalisis tahunan. Penilaian pergigian. Pemantauan tekanan darah. Penjejakan berat. Pemakanan untuk kucing senior {city}: Formula khusus senior (lebih mudah dihadam). Makanan yang lebih kecil dan lebih kerap. Peningkatan penghidratan. Penyesuaian persekitaran: Kotak pasir dengan sisi rendah untuk akses mudah. Tanjakan atau tangga ke tempat kegemaran. Tempat tidur lembut dan hangat. Permukaan tidak licin di lantai. Isu kesihatan kucing senior yang biasa di {city}: Penyakit buah pinggang. Hipertiroidisme. Diabetes. Artritis dan masalah mobiliti. Penyakit pergigian. Disfungsi kognitif. Tanda-tanda untuk dipantau: Perubahan dalam selera makan atau berat badan. Dahaga atau kencing yang meningkat.',
      zh: '{city}({state})的猫在大约11岁时被认为是老年猫,15岁以上是老龄猫。通过适当的护理,许多猫可以活到十几岁末或二十岁出头。{city}老年猫护理的关键方面:兽医护理:每年在{city}兽医处检查两次。每年血液检查和尿液分析。牙齿评估。血压监测。体重跟踪。{city}老年猫的营养:老年专用配方(更易消化)。如需要,提供更小、更频繁的餐食。增加水分(湿粮、饮水机)。环境调整:低边猫砂盆便于进入。通往喜欢的地方的坡道或台阶。为关节炎关节提供柔软温暖的床铺。地板上的防滑表面。保持常规一致(老年猫不能很好地适应变化)。{city}老年猫的常见健康问题:肾脏疾病(最常见)。甲状腺功能亢进。糖尿病。关节炎和行动问题。牙齿疾病。认知功能障碍(困惑、发声、睡眠中断)。需要监测的迹象:食欲或体重变化。口渴或排尿增加。猫砂盆习惯变化。行为变化(困惑、躲藏、攻击性)。生活质量考虑:与{city}兽医有效管理疼痛。保持心理刺激。知道何时与{city}({state})兽医讨论临终选择。'
    },
    keywords: ['senior', 'elderly', 'aging', 'old cat', 'geriatric', 'health', 'care', 'quality of life']
  },

  // Dog Emergency Q&As (20 items)
  {
    id: 'dog-emergency-bloat-1',
    category: 'dog-emergency',
    question: {
      en: 'What is bloat (GDV) in dogs and why is it an emergency in {city}?',
      ms: 'Apakah kembung (GDV) pada anjing dan mengapa ia kecemasan di {city}?',
      zh: '什么是狗的胃扩张扭转(GDV),为什么它在{city}是紧急情况?'
    },
    shortAnswer: {
      en: 'Bloat (Gastric Dilatation-Volvulus) is a life-threatening condition where a dog\'s stomach fills with gas and twists. Dog owners in {city}, {state} should watch for distended abdomen, unproductive retching, restlessness, and drooling. Without emergency surgery within hours, it is fatal. Large, deep-chested breeds are most at risk.',
      ms: 'Kembung (Gastric Dilatation-Volvulus) adalah keadaan mengancam nyawa di mana perut anjing dipenuhi gas dan berpusing. Pemilik anjing di {city}, {state} perlu perhatikan perut yang kembung, mencuba untuk muntah tanpa hasil, gelisah, dan air liur. Tanpa pembedahan kecemasan dalam beberapa jam, ia membawa maut.',
      zh: '胃扩张扭转(GDV)是一种危及生命的疾病,狗的胃充满气体并扭转。{city}({state})的狗主人应注意腹部膨胀、干呕、不安和流口水。如果不在数小时内进行紧急手术,它是致命的。大型深胸品种风险最高。'
    },
    fullAnswer: {
      en: 'Bloat, or Gastric Dilatation-Volvulus (GDV), is one of the most serious emergencies in dogs in {city}, {state}. It can kill a dog within hours if not treated surgically. What happens: The stomach fills with gas and fluid (gastric dilatation). The stomach may then twist (volvulus), cutting off blood supply. This blocks blood flow to vital organs, causing shock. Toxic substances build up in the body. Without emergency surgery at a {city} veterinary hospital, death occurs within hours. Dogs at highest risk in {city}: Large, deep-chested breeds: Great Danes, German Shepherds, Standard Poodles, Setters, Weimaraners, Dobermans, Boxers. Dogs over 7 years old. Dogs with family history of bloat. Dogs that eat one large meal daily. Dogs that eat rapidly. Warning signs requiring immediate {city} vet care: Distended, hard, or drum-like abdomen, unproductive retching (trying to vomit but nothing comes up), excessive drooling, restlessness and pacing, weakness or collapse, rapid breathing, pale gums. What to do: This is a TRUE EMERGENCY. Do not wait to see if symptoms improve. Call your {city} emergency vet immediately. Transport your dog as quickly and calmly as possible. Time is critical - every minute counts. Prevention in {city}: Feed 2-3 smaller meals instead of one large meal. Avoid exercise 1 hour before and 2 hours after eating. Use slow-feeder bowls. Keep water available but limit gulping. Consider prophylactic gastropexy (surgical prevention) for high-risk breeds - discuss with your {city}, {state} veterinarian.',
      ms: 'Kembung, atau Gastric Dilatation-Volvulus (GDV), adalah salah satu kecemasan paling serius pada anjing di {city}, {state}. Ia boleh membunuh anjing dalam beberapa jam jika tidak dirawat secara pembedahan. Apa yang berlaku: Perut dipenuhi gas dan cecair. Perut kemudian mungkin berpusing, memotong bekalan darah. Ini menyekat aliran darah ke organ penting, menyebabkan kejutan. Anjing yang paling berisiko di {city}: Baka besar, berdada dalam: Great Danes, German Shepherds, Standard Poodles. Anjing berumur lebih 7 tahun. Tanda-tanda amaran yang memerlukan rawatan veterinar {city} segera: Perut kembung, keras, atau seperti dram, mencuba untuk muntah tanpa hasil, air liur berlebihan, gelisah dan mondar-mandir, lemah atau rebah. Apa yang perlu dilakukan: Ini adalah KECEMASAN SEBENAR. Jangan tunggu untuk melihat jika gejala bertambah baik. Hubungi veterinar kecemasan {city} anda dengan segera. Pencegahan di {city}: Beri 2-3 makanan yang lebih kecil. Elakkan senaman 1 jam sebelum dan 2 jam selepas makan. Gunakan mangkuk makan perlahan.',
      zh: '胃扩张扭转(GDV)是{city}({state})狗最严重的紧急情况之一。如果不进行手术治疗,它可能在数小时内杀死狗。发生什么:胃充满气体和液体(胃扩张)。然后胃可能扭转(扭转),切断血液供应。这阻断了流向重要器官的血液,导致休克。{city}风险最高的狗:大型深胸品种:大丹犬、德国牧羊犬、标准贵宾犬、雪达犬、魏玛犬、杜宾犬、拳师犬。7岁以上的狗。需要立即{city}兽医护理的警告信号:腹部膨胀、坚硬或鼓状、干呕(试图呕吐但什么也没有出来)、过度流口水、不安和踱步、虚弱或倒塌。该怎么做:这是真正的紧急情况。不要等待看症状是否改善。立即拨打{city}急诊兽医电话。尽快平静地运送您的狗。时间至关重要 - 每一分钟都很重要。{city}的预防:喂2-3顿较小的餐而不是一顿大餐。避免在进食前1小时和进食后2小时运动。使用慢食碗。为高风险品种考虑预防性胃固定术 - 与{city}({state})兽医讨论。'
    },
    keywords: ['bloat', 'GDV', 'gastric', 'torsion', 'stomach', 'twist', 'emergency', 'volvulus']
  },
  {
    id: 'dog-vomiting-diarrhea-1',
    category: 'dog-emergency',
    question: {
      en: 'When should I be worried about my dog\'s vomiting or diarrhea in {city}?',
      ms: 'Bilakah saya perlu bimbang tentang muntah atau cirit-birit anjing saya di {city}?',
      zh: '什么时候应该担心{city}狗的呕吐或腹泻?'
    },
    shortAnswer: {
      en: 'Dog owners in {city}, {state} should seek immediate veterinary care if vomiting or diarrhea contains blood, is frequent and severe, is accompanied by lethargy or loss of appetite, or if the dog cannot keep water down. Puppies and senior dogs are at higher risk for dehydration.',
      ms: 'Pemilik anjing di {city}, {state} perlu mendapatkan rawatan veterinar segera jika muntah atau cirit-birit mengandungi darah, kerap dan teruk, disertai dengan lesu atau hilang selera makan, atau jika anjing tidak dapat menahan air. Anak anjing dan anjing senior berisiko lebih tinggi untuk dehidrasi.',
      zh: '{city}({state})的狗主人应在以下情况立即就医:呕吐或腹泻含血、频繁且严重、伴有嗜睡或食欲下降,或狗无法保留水分。幼犬和老年犬脱水风险更高。'
    },
    fullAnswer: {
      en: 'Vomiting and diarrhea are common in dogs in {city}, {state}, but certain signs indicate an emergency. When to seek immediate {city} vet care: Blood in vomit (red or coffee-ground appearance) or stool (red or black/tarry). Multiple episodes in a short period. Cannot keep water down. Lethargy, weakness, or collapse. Signs of dehydration (dry gums, skin tenting). Abdominal pain or bloating. Known ingestion of toxins or foreign objects. Puppies, seniors, or dogs with health conditions. Accompanied by fever or other symptoms. Common causes in {city} dogs: Dietary indiscretion (eating garbage, spoiled food). Food allergies or sensitivities. Parasites (common in {state}\'s tropical climate). Viral or bacterial infections. Toxin ingestion. Foreign body obstruction. Pancreatitis. Organ disease. Home care for mild cases in {city}: Withhold food for 12-24 hours (water available). Then offer bland diet (boiled chicken and rice). Small, frequent meals. Monitor for worsening. What your {city} vet will do: Physical examination. Blood work and fecal tests. X-rays or ultrasound if needed. IV fluids for dehydration. Medications as appropriate. Treatment for underlying cause. Prevention in {city}: Keep garbage secured. Avoid sudden diet changes. Regular parasite prevention. Supervise outdoor activities. Keep toxins out of reach.',
      ms: 'Muntah dan cirit-birit adalah biasa pada anjing di {city}, {state}, tetapi tanda-tanda tertentu menunjukkan kecemasan. Bila untuk mendapatkan rawatan veterinar {city} segera: Darah dalam muntah atau najis, episod berganda dalam tempoh singkat, tidak dapat menahan air, lesu, lemah, atau rebah, tanda-tanda dehidrasi, sakit perut atau kembung, pengambilan toksin atau objek asing yang diketahui. Punca biasa pada anjing {city}: Kesalahan diet, alahan atau sensitiviti makanan, parasit (biasa dalam iklim tropika {state}), jangkitan virus atau bakteria, pengambilan toksin, halangan objek asing. Penjagaan rumah untuk kes ringan di {city}: Tahan makanan selama 12-24 jam. Kemudian tawarkan diet hambar. Makanan kecil dan kerap. Pantau jika bertambah buruk. Apa yang veterinar {city} anda akan lakukan: Pemeriksaan fizikal, kerja darah dan ujian najis, x-ray atau ultrasound jika perlu.',
      zh: '呕吐和腹泻在{city}({state})的狗中很常见,但某些迹象表明是紧急情况。何时寻求{city}兽医立即护理:呕吐物中有血(红色或咖啡渣状)或粪便中有血(红色或黑色/柏油状)、短时间内多次发作、无法保留水分、嗜睡、虚弱或倒塌、脱水迹象(牙龈干燥、皮肤弹性差)、腹痛或腹胀、已知摄入毒素或异物。{city}狗的常见原因:饮食不当(吃垃圾、变质食物)、食物过敏或敏感、寄生虫({state}热带气候常见)、病毒或细菌感染、毒素摄入。{city}轻度病例的家庭护理:禁食12-24小时(可以喝水)。然后提供清淡饮食(煮鸡肉和米饭)。小而频繁的餐食。监测是否恶化。{city}兽医会做什么:体检、血液检查和粪便检查、如需要则拍X光或超声波、脱水时静脉输液。'
    },
    keywords: ['vomiting', 'diarrhea', 'blood', 'dehydration', 'digestive', 'emergency', 'stomach']
  },

  // Dog Maintenance Q&As (20 items) - abbreviated for length
  {
    id: 'dog-vaccination-1',
    category: 'dog-maintenance',
    question: {
      en: 'What vaccinations does my dog need in {city}?',
      ms: 'Apakah vaksin yang diperlukan anjing saya di {city}?',
      zh: '我在{city}的狗需要什么疫苗?'
    },
    shortAnswer: {
      en: 'Dogs in {city}, {state} need core vaccines including DHPP (distemper, hepatitis, parvovirus, parainfluenza) starting at 6-8 weeks with boosters every 3-4 weeks until 16 weeks. Rabies vaccine is required by law in Malaysia. Leptospirosis vaccine is recommended in {city}\'s tropical environment.',
      ms: 'Anjing di {city}, {state} memerlukan vaksin teras termasuk DHPP bermula pada 6-8 minggu dengan penggalak setiap 3-4 minggu sehingga 16 minggu. Vaksin rabies diperlukan oleh undang-undang di Malaysia. Vaksin Leptospirosis disyorkan dalam persekitaran tropika {city}.',
      zh: '{city}({state})的狗需要核心疫苗包括DHPP(犬瘟热、肝炎、细小病毒、副流感),从6-8周开始,每3-4周加强一次直到16周。狂犬病疫苗在马来西亚是法律要求的。在{city}的热带环境中建议接种钩端螺旋体病疫苗。'
    },
    fullAnswer: {
      en: 'Dog vaccinations are essential for preventing serious diseases in {city}, {state}. Core vaccines (recommended for all dogs) include: DHPP - protects against distemper, hepatitis, parvovirus, and parainfluenza. Puppies in {city} need a series starting at 6-8 weeks, with boosters every 3-4 weeks until 16 weeks old, then a booster at 1 year. Adult boosters every 1-3 years depending on vaccine type. Rabies vaccine is required by law in Malaysia. First dose at 12-16 weeks, with boosters as required by local regulations. Additional vaccines recommended in {city}, {state}: Leptospirosis - important in tropical/wet environments like {city}. Bordetella (kennel cough) - if your dog visits boarding, daycare, or dog parks. Canine influenza - if exposure risk is high. Your {city} veterinarian will create a personalized vaccination schedule based on your dog\'s age, health, and lifestyle. Keep vaccination records up to date and set reminders for boosters at your {city} vet clinic.',
      ms: 'Vaksinasi anjing adalah penting untuk mencegah penyakit serius di {city}, {state}. Vaksin teras termasuk DHPP bermula pada 6-8 minggu. Vaksin rabies diperlukan oleh undang-undang di Malaysia. Vaksin tambahan yang disyorkan di {city}, {state}: Leptospirosis - penting dalam persekitaran tropika/basah seperti {city}. Bordetella (kennel cough) - jika anjing anda mengunjungi penginapan atau taman anjing. Veterinar {city} anda akan membuat jadual vaksinasi yang diperibadikan berdasarkan umur, kesihatan, dan gaya hidup anjing anda.',
      zh: '狗疫苗对预防{city}({state})的严重疾病至关重要。核心疫苗包括:DHPP - 预防犬瘟热、肝炎、细小病毒和副流感。{city}的幼犬需要从6-8周开始接种系列疫苗,每3-4周加强一次直到16周,然后在1岁时加强。狂犬病疫苗在马来西亚是法律要求的。{city}({state})建议的额外疫苗:钩端螺旋体病 - 在像{city}这样的热带/潮湿环境中很重要。博德特氏菌(犬窝咳) - 如果您的狗去寄宿、日托或狗公园。您的{city}兽医将根据您的狗的年龄、健康和生活方式制定个性化的疫苗接种计划。'
    },
    keywords: ['vaccination', 'vaccine', 'DHPP', 'rabies', 'distemper', 'parvovirus', 'puppy']
  },
  {
    id: 'dog-nutrition-1',
    category: 'dog-maintenance',
    question: {
      en: 'What should I feed my dog in {city} for optimal health?',
      ms: 'Apa yang perlu saya beri makan kepada anjing saya di {city} untuk kesihatan optimum?',
      zh: '我应该给{city}的狗喂什么以获得最佳健康?'
    },
    shortAnswer: {
      en: 'Dogs in {city}, {state} need high-quality protein-rich food appropriate for their life stage (puppy, adult, senior) and size. Ensure fresh water is always available, especially in {city}\'s tropical heat. Feed measured portions to prevent obesity. Avoid toxic foods like chocolate, grapes, and onions.',
      ms: 'Anjing di {city}, {state} memerlukan makanan berkualiti tinggi yang kaya protein yang sesuai untuk peringkat hidup mereka (anak anjing, dewasa, senior) dan saiz. Pastikan air segar sentiasa tersedia, terutamanya dalam kepanasan tropika {city}. Elakkan makanan toksik seperti coklat, anggur, dan bawang.',
      zh: '{city}({state})的狗需要适合其生命阶段(幼犬、成年、老年)和体型的高质量富含蛋白质的食物。确保始终有新鲜水,尤其是在{city}的热带高温中。喂食定量以防止肥胖。避免巧克力、葡萄和洋葱等有毒食物。'
    },
    fullAnswer: {
      en: 'Proper nutrition is essential for your dog\'s health in {city}, {state}. Dogs are omnivores but thrive on protein-rich diets. Key nutritional requirements for {city} dogs: High-quality animal protein as the first ingredient. Balanced fats for energy and coat health. Limited, quality carbohydrates. Essential vitamins and minerals. Fresh, clean water (especially important in {city}\'s tropical climate). Types of food available in {city}: Dry food (kibble): Convenient, good for dental health, economical. Wet food (canned): Higher moisture content, more palatable. Raw diets: Require careful handling; consult your {city} vet. Prescription diets: For specific health conditions. Feeding guidelines in {city}: Puppies (up to 1 year): 3-4 meals daily, size-appropriate puppy formula. Adults (1-7 years): 2 meals daily, measured portions based on weight and activity. Seniors (7+ years): May need senior formula with adjusted calories. Working/active dogs: Higher calorie requirements. Special considerations for {city}\'s climate: Ensure constant access to fresh water in the heat. Consider wet food to increase hydration. Store dry food properly to prevent spoilage in humidity. Foods to avoid: Chocolate, grapes and raisins, onions and garlic, xylitol (artificial sweetener), macadamia nuts, alcohol, caffeine, cooked bones. Signs of nutritional problems: Dull coat, excessive shedding, low energy, obesity, digestive issues. Consult your {city}, {state} veterinarian for personalized nutrition advice.',
      ms: 'Pemakanan yang betul adalah penting untuk kesihatan anjing anda di {city}, {state}. Anjing adalah omnivor tetapi berkembang dengan diet yang kaya protein. Keperluan pemakanan utama untuk anjing {city}: Protein haiwan berkualiti tinggi sebagai bahan pertama. Lemak seimbang untuk tenaga dan kesihatan bulu. Karbohidrat yang terhad dan berkualiti. Vitamin dan mineral penting. Air segar dan bersih (terutamanya penting dalam iklim tropika {city}). Garis panduan pemberian makan di {city}: Anak anjing: 3-4 kali makan setiap hari. Dewasa: 2 kali makan setiap hari. Pertimbangan khas untuk iklim {city}: Pastikan akses berterusan kepada air segar dalam kepanasan. Simpan makanan kering dengan betul untuk mencegah kerosakan dalam kelembapan. Makanan yang perlu dielakkan: Coklat, anggur dan kismis, bawang dan bawang putih, xylitol. Rujuk veterinar {city}, {state} anda untuk nasihat pemakanan yang diperibadikan.',
      zh: '适当的营养对{city}({state})的狗健康至关重要。狗是杂食动物,但在富含蛋白质的饮食上茁壮成长。{city}狗的关键营养需求:高质量动物蛋白作为第一成分。平衡的脂肪提供能量和毛发健康。有限的优质碳水化合物。必需的维生素和矿物质。新鲜、干净的水(在{city}的热带气候中尤其重要)。{city}的喂养指南:幼犬(1岁以下):每天3-4餐,适合体型的幼犬配方。成年(1-7岁):每天2餐,根据体重和活动量定量。{city}气候的特殊考虑:确保在高温中持续获得新鲜水。考虑湿粮增加水分。正确储存干粮以防止在湿度中变质。要避免的食物:巧克力、葡萄和葡萄干、洋葱和大蒜、木糖醇(人工甜味剂)。咨询{city}({state})兽医获取个性化营养建议。'
    },
    keywords: ['nutrition', 'food', 'diet', 'feeding', 'protein', 'water', 'health']
  },
  // DVS and Government-related Q&As
  {
    id: 'dvs-contact-1',
    category: 'dog-maintenance',
    question: {
      en: 'How do I contact the DVS office in {state} for pet licensing?',
      ms: 'Bagaimana saya menghubungi pejabat DVS di {state} untuk pelesenan haiwan peliharaan?',
      zh: '我如何联系{state}的DVS办公室办理宠物许可证?'
    },
    shortAnswer: {
      en: 'Pet owners in {city}, {state} can contact {dvs_name} at {dvs_phone} for all pet licensing inquiries. The office handles dog licenses, rabies vaccinations, and pet import/export permits for {state} residents.',
      ms: 'Pemilik haiwan peliharaan di {city}, {state} boleh menghubungi {dvs_name} di {dvs_phone} untuk semua pertanyaan pelesenan haiwan. Pejabat ini mengendalikan lesen anjing, vaksinasi rabies, dan permit import/eksport haiwan untuk penduduk {state}.',
      zh: '{city}({state})的宠物主人可以拨打{dvs_phone}联系{dvs_name}咨询所有宠物许可事宜。该办公室为{state}居民办理狗证、狂犬病疫苗接种和宠物进出口许可证。'
    },
    fullAnswer: {
      en: 'For pet owners in {city}, {state}, the Department of Veterinary Services (DVS) is your go-to authority for all official pet matters. Contact Details for {state} DVS Office: Name: {dvs_name}. Phone: {dvs_phone}. Email: {dvs_email}. Address: {dvs_address}. Services provided by the DVS office include: Dog licensing and registration. Rabies vaccination certificates. Pet import and export permits. Animal health certificates. Reporting of animal disease outbreaks. Advice on pet ownership regulations. For {city} residents, the DVS office can also provide information about local pet regulations, required vaccinations, and proper documentation for traveling with pets within Malaysia or internationally. Office hours are typically Monday to Friday, 8:00 AM to 5:00 PM. It is recommended to call ahead for appointments for licensing services.',
      ms: 'Untuk pemilik haiwan peliharaan di {city}, {state}, Jabatan Perkhidmatan Veterinar (DVS) adalah pihak berkuasa utama untuk semua urusan haiwan peliharaan rasmi. Butiran Hubungan Pejabat DVS {state}: Nama: {dvs_name}. Telefon: {dvs_phone}. Emel: {dvs_email}. Alamat: {dvs_address}. Perkhidmatan yang disediakan oleh pejabat DVS termasuk: Pelesenan dan pendaftaran anjing. Sijil vaksinasi rabies. Permit import dan eksport haiwan peliharaan. Sijil kesihatan haiwan. Waktu pejabat biasanya Isnin hingga Jumaat, 8:00 pagi hingga 5:00 petang.',
      zh: '对于{city}({state})的宠物主人,兽医服务部门(DVS)是处理所有官方宠物事务的权威机构。{state}DVS办公室联系方式:名称:{dvs_name}。电话:{dvs_phone}。邮箱:{dvs_email}。地址:{dvs_address}。DVS办公室提供的服务包括:狗证办理和登记。狂犬病疫苗接种证明。宠物进出口许可证。动物健康证明。办公时间通常为周一至周五,上午8:00至下午5:00。'
    },
    keywords: ['DVS', 'license', 'government', 'contact', 'registration', 'veterinary services', 'permit']
  },
  {
    id: 'dog-license-1',
    category: 'dog-maintenance',
    question: {
      en: 'How much does a dog license cost in {city}?',
      ms: 'Berapakah kos lesen anjing di {city}?',
      zh: '在{city}办理狗证要多少钱?'
    },
    shortAnswer: {
      en: 'In {city}, {state}, dog licensing is managed by {council_name} ({council_short}). The standard dog license fee is {dog_license_fee}, with a reduced rate of {spayed_fee} for spayed/neutered dogs. Licenses must be renewed annually.',
      ms: 'Di {city}, {state}, pelesenan anjing diuruskan oleh {council_name} ({council_short}). Yuran lesen anjing standard adalah {dog_license_fee}, dengan kadar dikurangkan {spayed_fee} untuk anjing yang telah dimandulkan. Lesen mesti diperbaharui setiap tahun.',
      zh: '在{city}({state}),狗证由{council_name}({council_short})管理。标准狗证费用为{dog_license_fee},绝育狗的优惠费用为{spayed_fee}。许可证必须每年更新。'
    },
    fullAnswer: {
      en: 'Dog licensing in {city}, {state} is regulated by the local council to ensure public safety and responsible pet ownership. Licensing Authority: {council_name} ({council_short}). Website: {council_website}. Fee Structure: Standard dog license: {dog_license_fee}. Spayed/neutered dog license: {spayed_fee}. Why the difference? Spaying and neutering helps control the stray population and reduces aggressive behavior, so councils offer incentives for responsible pet owners. Requirements for dog licensing in {city}: Proof of rabies vaccination (valid certificate from a registered veterinarian). Proof of spaying/neutering (if applying for reduced fee). Identification documents of the owner. Recent photograph of the dog. Completed application form. Benefits of licensing your dog: Legal compliance with local regulations. Easier identification if your dog gets lost. Access to certain public areas. Proof of vaccination status. Renewal: Dog licenses in {city} must be renewed annually. Some councils offer online renewal through their website. Late renewal may incur additional penalties. For more information, visit {council_website} or contact {dvs_name} at {dvs_phone}.',
      ms: 'Pelesenan anjing di {city}, {state} dikawal oleh majlis tempatan untuk memastikan keselamatan awam dan pemilikan haiwan peliharaan yang bertanggungjawab. Pihak Berkuasa Pelesenan: {council_name} ({council_short}). Laman web: {council_website}. Struktur Yuran: Lesen anjing standard: {dog_license_fee}. Lesen anjing yang dimandulkan: {spayed_fee}. Keperluan untuk pelesenan anjing di {city}: Bukti vaksinasi rabies. Bukti pemandian (jika memohon yuran dikurangkan). Dokumen pengenalan pemilik. Gambar anjing terkini. Borang permohonan lengkap. Pembaharuan: Lesen anjing di {city} mesti diperbaharui setiap tahun.',
      zh: '{city}({state})的狗证由当地议会监管,以确保公共安全和负责任的宠物饲养。许可机构:{council_name}({council_short})。网站:{council_website}。费用结构:标准狗证:{dog_license_fee}。绝育狗证:{spayed_fee}。{city}狗证要求:狂犬病疫苗接种证明。绝育证明(如申请优惠费用)。宠物主人身份证明。狗的近照。填写完整的申请表。更新:狗证必须每年更新。更多信息请访问{council_website}或致电{dvs_phone}联系{dvs_name}。'
    },
    keywords: ['license', 'fee', 'cost', 'council', 'registration', 'spayed', 'neutered', 'annual']
  },
  {
    id: 'emergency-hotline-1',
    category: 'dog-emergency',
    question: {
      en: 'What is the emergency pet hotline in {state}?',
      ms: 'Apakah talian kecemasan haiwan peliharaan di {state}?',
      zh: '{state}的宠物紧急热线是什么?'
    },
    shortAnswer: {
      en: 'For pet emergencies in {city}, {state}, contact the DVS emergency line at {dvs_phone} during office hours. For after-hours emergencies, locate your nearest 24-hour veterinary clinic. Keep the Malaysia emergency number 999 for life-threatening situations.',
      ms: 'Untuk kecemasan haiwan peliharaan di {city}, {state}, hubungi talian kecemasan DVS di {dvs_phone} pada waktu pejabat. Untuk kecemasan selepas waktu pejabat, cari klinik veterinar 24 jam terdekat. Simpan nombor kecemasan Malaysia 999 untuk situasi yang mengancam nyawa.',
      zh: '如遇{city}({state})宠物紧急情况,请在办公时间拨打DVS紧急热线{dvs_phone}。下班后的紧急情况,请寻找最近的24小时兽医诊所。危及生命的情况请拨打马来西亚紧急电话999。'
    },
    fullAnswer: {
      en: 'Pet emergencies in {city}, {state} require quick action. Here are the essential contacts you should save: DVS Emergency Contact: {dvs_name}. Phone: {dvs_phone}. Email: {dvs_email}. Address: {dvs_address}. General Emergency Numbers: Malaysia Emergency Services: 999. SPCA Malaysia: 03-4256 5312. PAWS Animal Welfare Society: 03-7846 1087. What constitutes a pet emergency: Difficulty breathing or choking. Severe bleeding or wounds. Suspected poisoning. Inability to stand or walk. Seizures or unconsciousness. Prolonged labor in pregnant animals. Severe vomiting or diarrhea. Heat stroke (common in {city}\'s tropical climate). What to do in an emergency: Stay calm and assess the situation. Call the emergency number or nearest 24-hour vet in {city}. Safely transport your pet (use a carrier for small animals). Bring any relevant information (medications, what they may have eaten). Prevention tips for {city} pet owners: Save emergency contacts in your phone now. Know the location of 24-hour vet clinics near you in {city}. Keep a pet first aid kit at home. Learn basic pet CPR. Be aware of {city}\'s specific risks (tropical heat, certain plants, wildlife).',
      ms: 'Kecemasan haiwan peliharaan di {city}, {state} memerlukan tindakan segera. Berikut adalah kenalan penting yang perlu anda simpan: Hubungan Kecemasan DVS: {dvs_name}. Telefon: {dvs_phone}. Emel: {dvs_email}. Alamat: {dvs_address}. Nombor Kecemasan Am: Perkhidmatan Kecemasan Malaysia: 999. SPCA Malaysia: 03-4256 5312. PAWS Animal Welfare Society: 03-7846 1087. Apa yang merupakan kecemasan haiwan peliharaan: Kesukaran bernafas. Pendarahan atau luka teruk. Disyaki keracunan. Tidak boleh berdiri atau berjalan. Sawan atau tidak sedarkan diri. Apa yang perlu dilakukan dalam kecemasan: Bertenang dan menilai situasi. Hubungi nombor kecemasan atau klinik veterinar 24 jam terdekat di {city}. Angkut haiwan peliharaan anda dengan selamat.',
      zh: '{city}({state})的宠物紧急情况需要快速行动。以下是您应该保存的重要联系方式:DVS紧急联系:{dvs_name}。电话:{dvs_phone}。邮箱:{dvs_email}。地址:{dvs_address}。一般紧急号码:马来西亚紧急服务:999。马来西亚SPCA:03-4256 5312。PAWS动物福利协会:03-7846 1087。什么构成宠物紧急情况:呼吸困难或窒息。严重出血或伤口。疑似中毒。无法站立或行走。癫痫发作或失去意识。紧急情况下该怎么做:保持冷静并评估情况。拨打紧急号码或{city}最近的24小时兽医诊所。安全运送您的宠物。'
    },
    keywords: ['emergency', 'hotline', 'urgent', '24-hour', 'crisis', 'poison', 'accident', 'DVS']
  },
  {
    id: 'cat-emergency-hotline-1',
    category: 'cat-emergency',
    question: {
      en: 'Where can I get emergency help for my cat in {city}?',
      ms: 'Di mana saya boleh mendapatkan bantuan kecemasan untuk kucing saya di {city}?',
      zh: '在{city}我在哪里可以为我的猫获得紧急帮助?'
    },
    shortAnswer: {
      en: 'Cat owners in {city}, {state} can contact {dvs_name} at {dvs_phone} for guidance on emergency veterinary services. For immediate emergencies, search for 24-hour vet clinics in {city} or call Malaysia\'s emergency services at 999 for animal rescue assistance.',
      ms: 'Pemilik kucing di {city}, {state} boleh menghubungi {dvs_name} di {dvs_phone} untuk panduan mengenai perkhidmatan veterinar kecemasan. Untuk kecemasan segera, cari klinik veterinar 24 jam di {city} atau hubungi perkhidmatan kecemasan Malaysia di 999.',
      zh: '{city}({state})的猫主人可以拨打{dvs_phone}联系{dvs_name}获取紧急兽医服务指导。如遇紧急情况,请在{city}搜索24小时兽医诊所或拨打马来西亚紧急服务电话999寻求动物救援帮助。'
    },
    fullAnswer: {
      en: 'Emergency care for cats in {city}, {state} is available through several channels. Primary Contact: {dvs_name}. Phone: {dvs_phone}. Email: {dvs_email}. Common cat emergencies that require immediate attention: Difficulty breathing or open-mouth breathing. Inability to urinate (especially in male cats - this is life-threatening). Severe trauma or bleeding. Unconsciousness or collapse. Seizures lasting more than 2 minutes. Suspected poisoning (household chemicals, plants, medications). Prolonged vomiting or diarrhea. Signs of heat stroke (common in {city}\'s climate). What to do: Keep emergency contacts saved in your phone. Know the location of 24-hour emergency vets in {city}. Have a cat carrier ready for safe transport. Keep basic first aid supplies (gauze, saline solution). Stay calm - cats can sense your stress. For general advice on cat health regulations in {state}, contact the DVS office at {dvs_phone} or email {dvs_email}.',
      ms: 'Penjagaan kecemasan untuk kucing di {city}, {state} tersedia melalui beberapa saluran. Hubungan Utama: {dvs_name}. Telefon: {dvs_phone}. Emel: {dvs_email}. Kecemasan kucing biasa yang memerlukan perhatian segera: Kesukaran bernafas. Ketidakupayaan untuk kencing (terutamanya pada kucing jantan - ini mengancam nyawa). Trauma atau pendarahan teruk. Tidak sedarkan diri. Sawan yang berlangsung lebih dari 2 minit. Disyaki keracunan. Apa yang perlu dilakukan: Simpan kenalan kecemasan dalam telefon anda. Ketahui lokasi klinik veterinar 24 jam kecemasan di {city}.',
      zh: '{city}({state})的猫紧急护理可通过多种渠道获得。主要联系方式:{dvs_name}。电话:{dvs_phone}。邮箱:{dvs_email}。需要立即关注的常见猫紧急情况:呼吸困难或张嘴呼吸。无法排尿(尤其是公猫 - 这是危及生命的)。严重外伤或出血。失去意识或昏倒。持续超过2分钟的癫痫发作。疑似中毒。该怎么做:将紧急联系人保存在手机中。了解{city}24小时紧急兽医的位置。准备好猫笼以便安全运输。有关{state}猫健康法规的一般建议,请拨打{dvs_phone}或发送邮件至{dvs_email}联系DVS办公室。'
    },
    keywords: ['emergency', 'cat', 'urgent', 'help', 'rescue', '24-hour', 'crisis', 'vet']
  },
  {
    id: 'rabies-vaccination-1',
    category: 'dog-maintenance',
    question: {
      en: 'Is rabies vaccination mandatory for dogs in {state}?',
      ms: 'Adakah vaksinasi rabies wajib untuk anjing di {state}?',
      zh: '在{state}狗必须接种狂犬病疫苗吗?'
    },
    shortAnswer: {
      en: 'Yes, rabies vaccination is mandatory for all dogs in {city}, {state} under Malaysian law. Contact {dvs_name} at {dvs_phone} for approved vaccination centers. Dogs must be vaccinated annually, and proof of vaccination is required for licensing.',
      ms: 'Ya, vaksinasi rabies adalah wajib untuk semua anjing di {city}, {state} di bawah undang-undang Malaysia. Hubungi {dvs_name} di {dvs_phone} untuk pusat vaksinasi yang diluluskan. Anjing mesti divaksin setiap tahun.',
      zh: '是的,根据马来西亚法律,{city}({state})所有狗都必须接种狂犬病疫苗。请拨打{dvs_phone}联系{dvs_name}了解认可的疫苗接种中心。狗必须每年接种疫苗,办理许可证需要疫苗接种证明。'
    },
    fullAnswer: {
      en: 'Rabies vaccination is a legal requirement for dogs in {city}, {state}, and throughout Malaysia. This is regulated by the Department of Veterinary Services. Authority: {dvs_name}. Contact: {dvs_phone}. Email: {dvs_email}. Legal Requirements: All dogs must be vaccinated against rabies. Vaccination must be administered by a registered veterinarian. Annual boosters are required to maintain immunity. Vaccination certificate must be kept and presented when required. Failure to vaccinate can result in fines or seizure of the animal. Vaccination Schedule: First vaccination: 3 months of age. Booster: Every 12 months. Where to get vaccinated in {city}: Registered private veterinary clinics. DVS-organized vaccination campaigns. Government veterinary clinics. Cost: Private clinics: RM30-80 depending on the clinic. Government campaigns: Often free or subsidized. Documentation: After vaccination, you will receive: Official rabies vaccination certificate. Microchip registration (if not already done). This documentation is required for: Dog licensing with {council_name}. Interstate travel within Malaysia. International pet travel. For a list of approved vaccination centers in {city}, {state}, contact {dvs_name} at {dvs_phone} or visit a registered veterinary clinic.',
      ms: 'Vaksinasi rabies adalah keperluan undang-undang untuk anjing di {city}, {state}, dan seluruh Malaysia. Ini dikawal oleh Jabatan Perkhidmatan Veterinar. Pihak Berkuasa: {dvs_name}. Hubungi: {dvs_phone}. Emel: {dvs_email}. Keperluan Undang-undang: Semua anjing mesti divaksin terhadap rabies. Vaksinasi mesti diberikan oleh veterinar berdaftar. Penggalak tahunan diperlukan. Jadual Vaksinasi: Vaksinasi pertama: 3 bulan. Penggalak: Setiap 12 bulan. Di mana untuk mendapatkan vaksinasi di {city}: Klinik veterinar swasta berdaftar. Kempen vaksinasi anjuran DVS. Untuk senarai pusat vaksinasi yang diluluskan di {city}, {state}, hubungi {dvs_name} di {dvs_phone}.',
      zh: '狂犬病疫苗接种是{city}({state})乃至整个马来西亚对狗的法律要求。这由兽医服务部门监管。机构:{dvs_name}。联系方式:{dvs_phone}。邮箱:{dvs_email}。法律要求:所有狗必须接种狂犬病疫苗。疫苗必须由注册兽医接种。需要每年加强免疫。疫苗接种时间表:首次接种:3个月大。加强:每12个月。在{city}哪里接种:注册私人兽医诊所。DVS组织的疫苗接种活动。文件:接种后,您将收到:官方狂犬病疫苗接种证书。此文件用于:在{council_name}办理狗证。如需{city}({state})认可疫苗接种中心的名单,请拨打{dvs_phone}联系{dvs_name}。'
    },
    keywords: ['rabies', 'vaccination', 'mandatory', 'law', 'DVS', 'certificate', 'annual']
  },
  {
    id: 'pet-import-1',
    category: 'dog-maintenance',
    question: {
      en: 'How do I import a pet to {city} from another country?',
      ms: 'Bagaimana saya mengimport haiwan peliharaan ke {city} dari negara lain?',
      zh: '我如何从其他国家进口宠物到{city}?'
    },
    shortAnswer: {
      en: 'To import a pet to {city}, {state}, you need an import permit from {dvs_name}. Contact them at {dvs_phone} at least 2 months before travel. Requirements include rabies vaccination, health certificate, microchip, and quarantine may be required.',
      ms: 'Untuk mengimport haiwan peliharaan ke {city}, {state}, anda memerlukan permit import daripada {dvs_name}. Hubungi mereka di {dvs_phone} sekurang-kurangnya 2 bulan sebelum perjalanan. Keperluan termasuk vaksinasi rabies, sijil kesihatan, dan mikrocip.',
      zh: '要将宠物进口到{city}({state}),您需要{dvs_name}的进口许可证。请在旅行前至少2个月拨打{dvs_phone}与他们联系。要求包括狂犬病疫苗接种、健康证明、微芯片,可能需要隔离。'
    },
    fullAnswer: {
      en: 'Importing a pet to {city}, {state} requires careful planning and documentation through the Department of Veterinary Services. Contact: {dvs_name}. Phone: {dvs_phone}. Email: {dvs_email}. Address: {dvs_address}. Timeline: Start the process at least 2-3 months before travel. General Requirements: Valid import permit from DVS. Rabies vaccination (at least 30 days before travel, not more than 12 months). Microchip (ISO 11784/11785 compliant). Health certificate from origin country (issued within 10 days of travel). Blood titer test may be required depending on origin country. Import Permit Application: Submit application to {dvs_name}. Include: Pet details, vaccination records, origin country, intended arrival date. Fee: Approximately RM50-100. Processing time: 1-2 weeks. Quarantine: Pets from rabies-free countries: May be exempt. Pets from rabies-endemic countries: Up to 30 days quarantine. Quarantine facilities are available in major entry points. Upon Arrival in {city}: Present all documents at point of entry. Pet will be inspected by veterinary officers. Microchip will be scanned and verified. For specific requirements based on your origin country, contact {dvs_name} at {dvs_phone} or email {dvs_email}.',
      ms: 'Mengimport haiwan peliharaan ke {city}, {state} memerlukan perancangan dan dokumentasi yang teliti melalui Jabatan Perkhidmatan Veterinar. Hubungi: {dvs_name}. Telefon: {dvs_phone}. Emel: {dvs_email}. Alamat: {dvs_address}. Garis masa: Mulakan proses sekurang-kurangnya 2-3 bulan sebelum perjalanan. Keperluan Am: Permit import yang sah dari DVS. Vaksinasi rabies. Mikrocip. Sijil kesihatan dari negara asal. Permohonan Permit Import: Hantar permohonan kepada {dvs_name}. Yuran: Kira-kira RM50-100. Masa pemprosesan: 1-2 minggu. Untuk keperluan khusus berdasarkan negara asal anda, hubungi {dvs_name} di {dvs_phone}.',
      zh: '将宠物进口到{city}({state})需要通过兽医服务部门进行周密的计划和文件准备。联系方式:{dvs_name}。电话:{dvs_phone}。邮箱:{dvs_email}。地址:{dvs_address}。时间线:在旅行前至少2-3个月开始准备。一般要求:DVS的有效进口许可证。狂犬病疫苗接种。微芯片。原产国健康证明。进口许可证申请:向{dvs_name}提交申请。费用:约RM50-100。处理时间:1-2周。有关基于您原产国的具体要求,请拨打{dvs_phone}或发送邮件至{dvs_email}联系{dvs_name}。'
    },
    keywords: ['import', 'travel', 'permit', 'quarantine', 'international', 'documents', 'DVS']
  },
  {
    id: 'stray-report-1',
    category: 'dog-emergency',
    question: {
      en: 'How do I report a stray or injured animal in {city}?',
      ms: 'Bagaimana saya melaporkan haiwan terbiar atau cedera di {city}?',
      zh: '我如何在{city}报告流浪或受伤的动物?'
    },
    shortAnswer: {
      en: 'To report stray or injured animals in {city}, {state}, contact {council_name} or {dvs_name} at {dvs_phone}. For emergencies, call Malaysia\'s emergency services at 999. SPCA Malaysia (03-4256 5312) and PAWS (03-7846 1087) also respond to animal rescue calls.',
      ms: 'Untuk melaporkan haiwan terbiar atau cedera di {city}, {state}, hubungi {council_name} atau {dvs_name} di {dvs_phone}. Untuk kecemasan, hubungi perkhidmatan kecemasan Malaysia di 999. SPCA Malaysia (03-4256 5312) dan PAWS (03-7846 1087) juga bertindak balas terhadap panggilan penyelamatan haiwan.',
      zh: '要在{city}({state})报告流浪或受伤的动物,请联系{council_name}或拨打{dvs_phone}联系{dvs_name}。如遇紧急情况,请拨打马来西亚紧急服务电话999。马来西亚SPCA(03-4256 5312)和PAWS(03-7846 1087)也会响应动物救援电话。'
    },
    fullAnswer: {
      en: 'If you encounter a stray or injured animal in {city}, {state}, there are several organizations you can contact for help. Primary Contacts: Local Council: {council_name} ({council_short}). Website: {council_website}. DVS Office: {dvs_name}. Phone: {dvs_phone}. Email: {dvs_email}. National Animal Welfare Organizations: SPCA Malaysia: 03-4256 5312. PAWS Animal Welfare Society: 03-7846 1087. Malaysia Emergency Services: 999 (for dangerous animal situations). What to report: Location of the animal. Type of animal (dog, cat, etc.). Condition (injured, aggressive, appears sick). Any immediate dangers to public. When reporting injured animals: Keep a safe distance. Do not attempt to handle aggressive animals. If safe, provide water and shade. Take photos to help rescuers identify the animal. Wait for professional help to arrive. What happens after reporting: The local council or animal welfare organization will dispatch a team. Injured animals may be taken to veterinary facilities for treatment. Healthy strays may be taken to shelters. Owners of lost pets will be contacted if microchipped. {city} residents can also volunteer with local animal welfare groups to help with rescue and rehabilitation efforts. Contact {council_name} for information about local volunteer opportunities.',
      ms: 'Jika anda menemui haiwan terbiar atau cedera di {city}, {state}, terdapat beberapa organisasi yang boleh anda hubungi untuk bantuan. Hubungan Utama: Majlis Tempatan: {council_name} ({council_short}). Laman web: {council_website}. Pejabat DVS: {dvs_name}. Telefon: {dvs_phone}. Emel: {dvs_email}. Organisasi Kebajikan Haiwan Kebangsaan: SPCA Malaysia: 03-4256 5312. PAWS Animal Welfare Society: 03-7846 1087. Perkhidmatan Kecemasan Malaysia: 999. Apa yang perlu dilaporkan: Lokasi haiwan. Jenis haiwan. Keadaan (cedera, agresif, kelihatan sakit). Bila melaporkan haiwan cedera: Kekalkan jarak yang selamat. Jangan cuba mengendalikan haiwan agresif. Penduduk {city} juga boleh menjadi sukarelawan dengan kumpulan kebajikan haiwan tempatan.',
      zh: '如果您在{city}({state})遇到流浪或受伤的动物,有几个组织可以联系寻求帮助。主要联系方式:地方议会:{council_name}({council_short})。网站:{council_website}。DVS办公室:{dvs_name}。电话:{dvs_phone}。邮箱:{dvs_email}。全国动物福利组织:马来西亚SPCA:03-4256 5312。PAWS动物福利协会:03-7846 1087。马来西亚紧急服务:999。需要报告什么:动物的位置。动物类型。状况(受伤、攻击性、看起来生病)。报告受伤动物时:保持安全距离。不要尝试处理攻击性动物。{city}居民也可以与当地动物福利团体一起做志愿者。'
    },
    keywords: ['stray', 'injured', 'report', 'rescue', 'SPCA', 'PAWS', 'council', 'emergency']
  }
];
