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

// Cat Emergency Q&As (20 items)
export const yqaItems: YQAItem[] = [
  {
    id: 'cat-uti-1',
    category: 'cat-emergency',
    question: {
      en: 'What are the signs of urinary tract infection (UTI) in cats?',
      ms: 'Apakah tanda-tanda jangkitan saluran kencing (UTI) pada kucing?',
      zh: '猫咪尿路感染(UTI)有哪些症状?'
    },
    shortAnswer: {
      en: 'Signs include frequent urination, straining to urinate, blood in urine, urinating outside litter box, crying while urinating, and excessive licking of genital area. Male cats may develop life-threatening blockages requiring immediate veterinary care.',
      ms: 'Tanda-tanda termasuk kerap membuang air kecil, mengejan ketika membuang air kecil, darah dalam air kencing, membuang air kecil di luar kotak pasir, menangis semasa membuang air kecil, dan menjilat kawasan kemaluan secara berlebihan.',
      zh: '症状包括频繁排尿、排尿困难、尿血、在猫砂盆外排尿、排尿时哭叫、过度舔舐生殖器区域。公猫可能出现危及生命的堵塞,需要立即就医。'
    },
    fullAnswer: {
      en: 'Urinary tract infections in cats can be serious and require prompt veterinary attention. Common signs include: frequent trips to the litter box with little output, straining or crying while urinating, blood in the urine (pink or red tinge), urinating in unusual places, excessive grooming of the genital area, and strong-smelling urine. Male cats are at higher risk for urethral blockages, which can become life-threatening within 24-48 hours. If your cat is repeatedly going to the litter box without producing urine, or seems in pain, seek emergency veterinary care immediately. Treatment typically includes antibiotics, pain medication, and dietary changes. Prevention involves ensuring adequate water intake and a proper diet.',
      ms: 'Jangkitan saluran kencing pada kucing boleh menjadi serius dan memerlukan perhatian veterinar segera. Tanda-tanda biasa termasuk: kerap ke kotak pasir dengan sedikit output, mengejan atau menangis semasa membuang air kecil, darah dalam air kencing, membuang air kecil di tempat luar biasa, menjilat kawasan kemaluan secara berlebihan, dan air kencing berbau kuat. Kucing jantan berisiko lebih tinggi untuk penyumbatan uretra, yang boleh mengancam nyawa dalam 24-48 jam. Jika kucing anda berulang kali ke kotak pasir tanpa menghasilkan air kencing, atau kelihatan sakit, dapatkan rawatan veterinar kecemasan segera. Rawatan biasanya termasuk antibiotik, ubat sakit, dan perubahan diet. Pencegahan melibatkan memastikan pengambilan air yang mencukupi dan diet yang betul.',
      zh: '猫咪尿路感染可能很严重,需要及时的兽医护理。常见症状包括:频繁去猫砂盆但排尿量少、排尿时用力或哭叫、尿血(粉红色或红色)、在异常地方排尿、过度清理生殖器区域、尿液气味强烈。公猫更容易发生尿道堵塞,可能在24-48小时内危及生命。如果您的猫反复去猫砂盆但无法排尿,或看起来很痛苦,请立即寻求紧急兽医护理。治疗通常包括抗生素、止痛药和饮食调整。预防措施包括确保充足的饮水量和适当的饮食。'
    },
    keywords: ['UTI', 'urinary', 'infection', 'blood urine', 'straining', 'litter box', 'blockage']
  },
  {
    id: 'cat-respiratory-1',
    category: 'cat-emergency',
    question: {
      en: 'How do I know if my cat has a respiratory infection?',
      ms: 'Bagaimana saya tahu jika kucing saya mempunyai jangkitan pernafasan?',
      zh: '如何判断我的猫是否有呼吸道感染?'
    },
    shortAnswer: {
      en: 'Signs include sneezing, nasal discharge, watery or crusty eyes, coughing, difficulty breathing, loss of appetite, fever, and lethargy. Respiratory infections can spread quickly between cats and may require antibiotics or antiviral medication.',
      ms: 'Tanda-tanda termasuk bersin, lelehan hidung, mata berair atau berkerak, batuk, kesukaran bernafas, hilang selera makan, demam, dan lesu. Jangkitan pernafasan boleh merebak dengan cepat antara kucing.',
      zh: '症状包括打喷嚏、流鼻涕、眼睛流泪或有眼屎、咳嗽、呼吸困难、食欲下降、发烧和嗜睡。呼吸道感染可以在猫之间快速传播,可能需要抗生素或抗病毒药物。'
    },
    fullAnswer: {
      en: 'Upper respiratory infections (URIs) are common in cats and can range from mild to severe. Key symptoms to watch for include: persistent sneezing, nasal congestion or discharge (clear or colored), eye discharge that may cause crusting, mouth ulcers, drooling, loss of appetite due to inability to smell food, fever, lethargy, and difficulty breathing. These infections are often caused by feline herpesvirus or calicivirus and can be highly contagious. Kittens, senior cats, and immunocompromised cats are at higher risk for complications. If your cat shows labored breathing, refuses to eat for more than 24 hours, or has severe eye involvement, seek veterinary care immediately. Treatment may include antibiotics for secondary bacterial infections, antiviral medications, eye drops, and supportive care including fluids and nutrition support.',
      ms: 'Jangkitan saluran pernafasan atas (URI) adalah biasa pada kucing dan boleh berkisar dari ringan hingga teruk. Gejala utama yang perlu diperhatikan termasuk: bersin berterusan, hidung tersumbat atau lelehan, lelehan mata yang boleh menyebabkan kerak, ulser mulut, air liur berlebihan, hilang selera makan kerana tidak dapat menghidu makanan, demam, lesu, dan kesukaran bernafas. Jangkitan ini sering disebabkan oleh herpesvirus kucing atau calicivirus dan sangat menular. Anak kucing, kucing tua, dan kucing dengan sistem imun lemah berisiko lebih tinggi untuk komplikasi. Jika kucing anda menunjukkan pernafasan yang sukar, enggan makan lebih dari 24 jam, atau mempunyai masalah mata yang teruk, dapatkan rawatan veterinar segera.',
      zh: '上呼吸道感染(URI)在猫中很常见,严重程度从轻微到严重不等。需要注意的主要症状包括:持续打喷嚏、鼻塞或流鼻涕(透明或有颜色)、可能导致结痂的眼部分泌物、口腔溃疡、流口水、因无法闻到食物而食欲不振、发烧、嗜睡和呼吸困难。这些感染通常由猫疱疹病毒或杯状病毒引起,具有高度传染性。幼猫、老年猫和免疫功能低下的猫更容易出现并发症。如果您的猫呼吸困难、超过24小时拒绝进食或眼部问题严重,请立即就医。'
    },
    keywords: ['respiratory', 'sneezing', 'coughing', 'nasal', 'discharge', 'breathing', 'URI', 'cold']
  },
  {
    id: 'cat-flutd-1',
    category: 'cat-emergency',
    question: {
      en: 'What is FLUTD and why is it an emergency in cats?',
      ms: 'Apakah FLUTD dan mengapa ia kecemasan pada kucing?',
      zh: '什么是FLUTD,为什么它对猫来说是紧急情况?'
    },
    shortAnswer: {
      en: 'FLUTD (Feline Lower Urinary Tract Disease) affects the bladder and urethra. It becomes an emergency when cats cannot urinate due to blockage, causing toxin buildup that can be fatal within 24-72 hours. Male cats are especially at risk.',
      ms: 'FLUTD (Penyakit Saluran Kencing Bawah Kucing) menjejaskan pundi kencing dan uretra. Ia menjadi kecemasan apabila kucing tidak dapat membuang air kecil akibat penyumbatan, menyebabkan pengumpulan toksin yang boleh membawa maut dalam 24-72 jam.',
      zh: 'FLUTD(猫下尿路疾病)影响膀胱和尿道。当猫因堵塞而无法排尿时,它就成为紧急情况,导致毒素积累,可能在24-72小时内致命。公猫尤其危险。'
    },
    fullAnswer: {
      en: 'Feline Lower Urinary Tract Disease (FLUTD) is a term describing conditions affecting the bladder and urethra in cats. While some cases are mild, FLUTD becomes a life-threatening emergency when urinary blockage occurs. Male cats are particularly vulnerable due to their narrow urethra. Emergency signs include: straining to urinate with no urine production, crying in pain, repeatedly visiting the litter box, vomiting, lethargy, and a distended or painful abdomen. A complete blockage prevents the kidneys from expelling toxins, leading to dangerous potassium buildup that can cause heart failure within 24-72 hours. If you suspect a blockage, do not wait - seek emergency veterinary care immediately. Treatment requires catheterization to relieve the blockage, IV fluids, and monitoring. Long-term management includes dietary changes, stress reduction, and increased water intake.',
      ms: 'Penyakit Saluran Kencing Bawah Kucing (FLUTD) adalah istilah yang menggambarkan keadaan yang menjejaskan pundi kencing dan uretra pada kucing. Walaupun sesetengah kes adalah ringan, FLUTD menjadi kecemasan yang mengancam nyawa apabila penyumbatan kencing berlaku. Kucing jantan sangat terdedah kerana uretra mereka yang sempit. Tanda-tanda kecemasan termasuk: mengejan untuk membuang air kecil tanpa penghasilan air kencing, menangis kesakitan, berulang kali ke kotak pasir, muntah, lesu, dan perut yang kembung atau sakit. Penyumbatan lengkap menghalang buah pinggang daripada mengeluarkan toksin, menyebabkan pengumpulan kalium berbahaya yang boleh menyebabkan kegagalan jantung dalam 24-72 jam.',
      zh: '猫下尿路疾病(FLUTD)是描述影响猫膀胱和尿道的疾病的术语。虽然有些病例较轻,但当发生尿路堵塞时,FLUTD会成为危及生命的紧急情况。公猫由于尿道狭窄而特别容易受影响。紧急症状包括:用力排尿但没有尿液、痛苦地哭叫、反复去猫砂盆、呕吐、嗜睡、腹部膨胀或疼痛。完全堵塞会阻止肾脏排出毒素,导致危险的钾积累,可能在24-72小时内导致心脏衰竭。如果您怀疑有堵塞,不要等待 - 立即寻求紧急兽医护理。'
    },
    keywords: ['FLUTD', 'urinary', 'blockage', 'bladder', 'urethra', 'straining', 'emergency']
  },
  {
    id: 'cat-skin-allergy-1',
    category: 'cat-emergency',
    question: {
      en: 'How do I treat skin allergies in my cat?',
      ms: 'Bagaimana saya merawat alahan kulit pada kucing saya?',
      zh: '如何治疗我的猫的皮肤过敏?'
    },
    shortAnswer: {
      en: 'Skin allergies cause itching, hair loss, redness, and scabs. Treatment involves identifying triggers (food, fleas, environmental), using prescribed medications like antihistamines or steroids, regular flea prevention, and special diets. Severe reactions require immediate veterinary care.',
      ms: 'Alahan kulit menyebabkan gatal, keguguran bulu, kemerahan, dan kudis. Rawatan melibatkan mengenal pasti pencetus, menggunakan ubat yang ditetapkan seperti antihistamin atau steroid, pencegahan kutu secara tetap, dan diet khas.',
      zh: '皮肤过敏会导致瘙痒、脱毛、发红和结痂。治疗包括识别触发因素(食物、跳蚤、环境)、使用处方药如抗组胺药或类固醇、定期预防跳蚤和特殊饮食。严重反应需要立即兽医护理。'
    },
    fullAnswer: {
      en: 'Cat skin allergies (allergic dermatitis) can significantly impact your pet\'s quality of life. Common allergens include flea saliva, food ingredients (chicken, fish, grains), and environmental factors (pollen, dust mites). Symptoms include intense scratching, over-grooming leading to hair loss, red or inflamed skin, scabs and crusts, ear infections, and miliary dermatitis (small bumps). Treatment approach depends on the cause: For flea allergies, strict flea prevention is essential. For food allergies, an elimination diet trial helps identify triggers. For environmental allergies, reducing exposure and medications help manage symptoms. Your vet may prescribe antihistamines, steroids, immunotherapy, or newer medications like Apoquel. Regular grooming, omega fatty acid supplements, and medicated shampoos can provide relief. If your cat develops facial swelling, difficulty breathing, or severe hives, seek emergency care immediately as this could indicate anaphylaxis.',
      ms: 'Alahan kulit kucing (dermatitis alergik) boleh memberi kesan ketara kepada kualiti hidup haiwan peliharaan anda. Alergen biasa termasuk air liur kutu, bahan makanan (ayam, ikan, bijirin), dan faktor persekitaran (debunga, hama habuk). Gejala termasuk menggaru dengan kuat, menjilat berlebihan yang menyebabkan keguguran bulu, kulit merah atau meradang, kudis dan kerak, jangkitan telinga, dan dermatitis miliari. Pendekatan rawatan bergantung kepada punca: Untuk alahan kutu, pencegahan kutu yang ketat adalah penting. Untuk alahan makanan, percubaan diet penghapusan membantu mengenal pasti pencetus. Veterinar anda mungkin menetapkan antihistamin, steroid, imunoterapi, atau ubat yang lebih baru. Jika kucing anda mengalami bengkak muka atau kesukaran bernafas, dapatkan rawatan kecemasan segera.',
      zh: '猫皮肤过敏(过敏性皮炎)会严重影响宠物的生活质量。常见过敏原包括跳蚤唾液、食物成分(鸡肉、鱼、谷物)和环境因素(花粉、尘螨)。症状包括剧烈抓挠、过度舔毛导致脱毛、皮肤发红或发炎、结痂、耳部感染和粟粒性皮炎。治疗方法取决于病因:对于跳蚤过敏,严格的跳蚤预防至关重要。对于食物过敏,排除饮食试验有助于确定触发因素。对于环境过敏,减少接触和药物有助于控制症状。您的兽医可能会开抗组胺药、类固醇、免疫疗法或较新的药物。如果您的猫出现面部肿胀或呼吸困难,请立即寻求紧急护理。'
    },
    keywords: ['skin', 'allergy', 'itching', 'scratching', 'hair loss', 'dermatitis', 'rash', 'flea']
  },
  {
    id: 'cat-ear-infection-1',
    category: 'cat-emergency',
    question: {
      en: 'What are the symptoms of ear infection in cats?',
      ms: 'Apakah gejala jangkitan telinga pada kucing?',
      zh: '猫耳朵感染有哪些症状?'
    },
    shortAnswer: {
      en: 'Symptoms include head shaking, ear scratching, dark discharge, bad odor, redness, swelling, balance problems, and sensitivity to touch. Ear infections can be caused by mites, bacteria, yeast, or allergies and require veterinary diagnosis and treatment.',
      ms: 'Gejala termasuk menggelengkan kepala, menggaru telinga, lelehan gelap, bau busuk, kemerahan, bengkak, masalah keseimbangan, dan sensitif kepada sentuhan. Jangkitan telinga memerlukan diagnosis dan rawatan veterinar.',
      zh: '症状包括摇头、抓耳朵、深色分泌物、异味、发红、肿胀、平衡问题和触摸敏感。耳朵感染可能由螨虫、细菌、酵母菌或过敏引起,需要兽医诊断和治疗。'
    },
    fullAnswer: {
      en: 'Ear infections (otitis) in cats can be painful and, if left untreated, may lead to hearing loss or spread to the inner ear affecting balance. Warning signs include: frequent head shaking or tilting, excessive ear scratching, dark brown or black discharge, unpleasant odor from the ears, redness and swelling inside the ear, crying when ears are touched, loss of balance or disorientation, and hair loss around the ears. Common causes include ear mites (especially in kittens), bacterial infections, yeast overgrowth, allergies, and foreign objects. Your vet will examine the ear canal and may take a sample to identify the cause. Treatment typically includes ear cleaning, topical medications, and sometimes oral antibiotics or antifungals. Never use cotton swabs deep in your cat\'s ears. For recurrent infections, underlying allergies should be investigated. Seek immediate care if your cat shows signs of vestibular disease (head tilt, circling, falling).',
      ms: 'Jangkitan telinga (otitis) pada kucing boleh menyakitkan dan, jika tidak dirawat, boleh menyebabkan kehilangan pendengaran atau merebak ke telinga dalam yang menjejaskan keseimbangan. Tanda-tanda amaran termasuk: kerap menggelengkan atau mencondongkan kepala, menggaru telinga secara berlebihan, lelehan coklat gelap atau hitam, bau tidak menyenangkan dari telinga, kemerahan dan bengkak di dalam telinga, menangis apabila telinga disentuh, kehilangan keseimbangan, dan keguguran bulu di sekitar telinga. Punca biasa termasuk hama telinga (terutamanya pada anak kucing), jangkitan bakteria, pertumbuhan yis berlebihan, alahan, dan objek asing. Veterinar anda akan memeriksa saluran telinga dan mungkin mengambil sampel untuk mengenal pasti punca. Rawatan biasanya termasuk pembersihan telinga dan ubat topikal.',
      zh: '猫耳朵感染(中耳炎)可能很痛苦,如果不治疗,可能导致听力丧失或扩散到内耳影响平衡。警告信号包括:频繁摇头或歪头、过度抓耳朵、深棕色或黑色分泌物、耳朵有难闻气味、耳内发红肿胀、触摸耳朵时哭叫、失去平衡或迷失方向、耳朵周围脱毛。常见原因包括耳螨(尤其是幼猫)、细菌感染、酵母菌过度生长、过敏和异物。您的兽医将检查耳道并可能取样以确定原因。治疗通常包括清洁耳朵和局部用药。如果您的猫出现前庭疾病迹象(歪头、转圈、跌倒),请立即就医。'
    },
    keywords: ['ear', 'infection', 'mites', 'discharge', 'head shaking', 'scratching', 'otitis']
  },
  {
    id: 'cat-eye-infection-1',
    category: 'cat-emergency',
    question: {
      en: 'How do I recognize and treat eye infections in cats?',
      ms: 'Bagaimana saya mengenali dan merawat jangkitan mata pada kucing?',
      zh: '如何识别和治疗猫的眼部感染?'
    },
    shortAnswer: {
      en: 'Signs include redness, swelling, discharge (clear, yellow, or green), squinting, pawing at eyes, cloudiness, and third eyelid showing. Eye infections need prompt veterinary treatment to prevent vision damage. Never use human eye drops without vet approval.',
      ms: 'Tanda-tanda termasuk kemerahan, bengkak, lelehan, menyipitkan mata, mencakar mata, kekeruhan, dan kelopak mata ketiga kelihatan. Jangkitan mata memerlukan rawatan veterinar segera untuk mencegah kerosakan penglihatan.',
      zh: '症状包括发红、肿胀、分泌物(透明、黄色或绿色)、眯眼、用爪子抓眼睛、混浊和第三眼睑显现。眼部感染需要及时的兽医治疗以防止视力损伤。未经兽医批准,切勿使用人用眼药水。'
    },
    fullAnswer: {
      en: 'Eye infections in cats require prompt attention to prevent serious complications including vision loss. Common symptoms include: excessive tearing or watery eyes, thick discharge (yellow, green, or white), red or swollen conjunctiva, squinting or holding the eye closed, rubbing or pawing at the eye, cloudiness or changes in eye color, visible third eyelid, and sensitivity to light. Causes include bacterial infections, viral infections (herpesvirus, calicivirus), conjunctivitis, corneal ulcers, and allergies. Diagnosis requires a veterinary examination including possible staining tests to check for ulcers. Treatment depends on the cause: antibacterial drops for bacterial infections, antiviral medications for herpes, anti-inflammatory drops, and supportive care. Never use over-the-counter human eye drops without veterinary guidance as some can worsen the condition. Seek emergency care immediately if the eye appears to be bulging, there is significant swelling, or your cat cannot open the eye at all.',
      ms: 'Jangkitan mata pada kucing memerlukan perhatian segera untuk mencegah komplikasi serius termasuk kehilangan penglihatan. Gejala biasa termasuk: mata berair berlebihan, lelehan pekat (kuning, hijau, atau putih), konjunktiva merah atau bengkak, menyipitkan atau menutup mata, menggosok atau mencakar mata, kekeruhan atau perubahan warna mata, kelopak mata ketiga kelihatan, dan sensitif kepada cahaya. Punca termasuk jangkitan bakteria, jangkitan virus, konjunktivitis, ulser kornea, dan alahan. Diagnosis memerlukan pemeriksaan veterinar. Rawatan bergantung kepada punca. Jangan sekali-kali menggunakan ubat titisan mata manusia tanpa bimbingan veterinar kerana sesetengahnya boleh memburukkan keadaan.',
      zh: '猫眼部感染需要及时处理以防止严重并发症,包括视力丧失。常见症状包括:过度流泪、浓厚分泌物(黄色、绿色或白色)、结膜发红或肿胀、眯眼或闭眼、揉眼或用爪子抓眼睛、混浊或眼色变化、第三眼睑可见、对光敏感。原因包括细菌感染、病毒感染(疱疹病毒、杯状病毒)、结膜炎、角膜溃疡和过敏。诊断需要兽医检查。治疗取决于病因。未经兽医指导,切勿使用非处方人用眼药水,因为有些可能会使病情恶化。如果眼睛看起来凸出、有明显肿胀或猫完全无法睁眼,请立即就医。'
    },
    keywords: ['eye', 'infection', 'discharge', 'conjunctivitis', 'redness', 'squinting', 'vision']
  },
  {
    id: 'cat-dental-1',
    category: 'cat-emergency',
    question: {
      en: 'What are signs of dental disease in cats and when is it an emergency?',
      ms: 'Apakah tanda-tanda penyakit pergigian pada kucing dan bila ia menjadi kecemasan?',
      zh: '猫牙齿疾病有哪些症状,什么时候是紧急情况?'
    },
    shortAnswer: {
      en: 'Signs include bad breath, drooling, difficulty eating, pawing at mouth, bleeding gums, loose teeth, and facial swelling. It becomes an emergency with severe pain, inability to eat, facial swelling suggesting abscess, or signs of infection spreading.',
      ms: 'Tanda-tanda termasuk nafas berbau, air liur berlebihan, kesukaran makan, mencakar mulut, gusi berdarah, gigi longgar, dan bengkak muka. Ia menjadi kecemasan dengan kesakitan teruk atau ketidakupayaan untuk makan.',
      zh: '症状包括口臭、流口水、进食困难、用爪子抓嘴、牙龈出血、牙齿松动和面部肿胀。当出现剧烈疼痛、无法进食、面部肿胀提示脓肿或感染扩散迹象时,就成为紧急情况。'
    },
    fullAnswer: {
      en: 'Dental disease affects the majority of cats over age 3 and can cause significant pain and health issues. Warning signs include: persistent bad breath (halitosis), red or swollen gums, visible tartar buildup, drooling (sometimes with blood), difficulty eating or dropping food, pawing at the face or mouth, loose or missing teeth, reluctance to be touched on the face, weight loss, and behavioral changes. Common conditions include gingivitis, periodontitis, tooth resorption (FORL), and stomatitis. Dental disease becomes an emergency when there is severe facial swelling (indicating abscess), inability to eat for more than 24 hours, signs of systemic infection (fever, lethargy), difficulty breathing due to swelling, or uncontrolled bleeding. Treatment ranges from professional cleaning under anesthesia to tooth extractions. Prevention includes regular dental checkups, appropriate diet, and dental treats or water additives. Many cats hide dental pain well, so regular veterinary examinations are crucial.',
      ms: 'Penyakit pergigian menjejaskan majoriti kucing berumur lebih 3 tahun dan boleh menyebabkan kesakitan dan masalah kesihatan yang ketara. Tanda-tanda amaran termasuk: nafas berbau berterusan, gusi merah atau bengkak, pembentukan karang gigi yang kelihatan, air liur berlebihan, kesukaran makan, mencakar muka atau mulut, gigi longgar atau hilang, enggan disentuh di muka, penurunan berat badan, dan perubahan tingkah laku. Penyakit pergigian menjadi kecemasan apabila terdapat bengkak muka yang teruk, ketidakupayaan untuk makan lebih dari 24 jam, tanda-tanda jangkitan sistemik, atau pendarahan yang tidak terkawal. Pencegahan termasuk pemeriksaan pergigian berkala dan diet yang sesuai.',
      zh: '牙齿疾病影响大多数3岁以上的猫,可能导致严重疼痛和健康问题。警告信号包括:持续口臭、牙龈红肿、可见牙石积累、流口水(有时带血)、进食困难或掉落食物、用爪子抓脸或嘴、牙齿松动或缺失、不愿被触摸脸部、体重下降和行为改变。当出现严重面部肿胀(表明脓肿)、超过24小时无法进食、全身感染迹象(发烧、嗜睡)、因肿胀导致呼吸困难或无法控制的出血时,牙齿疾病就成为紧急情况。预防包括定期牙科检查和适当饮食。'
    },
    keywords: ['dental', 'teeth', 'gums', 'bad breath', 'drooling', 'mouth', 'tooth', 'abscess']
  },
  {
    id: 'cat-kidney-1',
    category: 'cat-emergency',
    question: {
      en: 'What are the signs of kidney disease in cats?',
      ms: 'Apakah tanda-tanda penyakit buah pinggang pada kucing?',
      zh: '猫肾病有哪些症状?'
    },
    shortAnswer: {
      en: 'Signs include increased thirst and urination, weight loss, poor appetite, vomiting, bad breath, lethargy, and poor coat condition. Kidney disease is common in older cats and requires ongoing management. Acute kidney failure is a medical emergency.',
      ms: 'Tanda-tanda termasuk rasa dahaga dan kencing yang meningkat, penurunan berat badan, selera makan yang lemah, muntah, nafas berbau, lesu, dan keadaan bulu yang buruk. Penyakit buah pinggang biasa pada kucing tua.',
      zh: '症状包括口渴和排尿增加、体重下降、食欲不振、呕吐、口臭、嗜睡和毛发状况差。肾病在老年猫中很常见,需要持续管理。急性肾衰竭是医疗紧急情况。'
    },
    fullAnswer: {
      en: 'Chronic kidney disease (CKD) is one of the most common conditions in senior cats, affecting up to 30% of cats over 15 years old. Early signs are often subtle and include: increased water consumption (polydipsia), increased urination (polyuria), gradual weight loss despite normal appetite initially, decreased appetite over time, occasional vomiting, bad breath with ammonia-like odor, lethargy and weakness, poor coat quality, and constipation. As disease progresses, symptoms worsen and may include mouth ulcers, severe dehydration, and neurological signs. Acute kidney injury presents more suddenly with severe symptoms requiring emergency care. Diagnosis involves blood tests (elevated BUN and creatinine), urine tests, and sometimes imaging. Management includes prescription kidney diets, fluid therapy, medications for blood pressure and phosphorus control, and regular monitoring. Early detection through annual blood work in senior cats allows for better management and quality of life.',
      ms: 'Penyakit buah pinggang kronik (CKD) adalah salah satu keadaan paling biasa pada kucing tua, menjejaskan sehingga 30% kucing berumur lebih 15 tahun. Tanda-tanda awal sering halus dan termasuk: peningkatan penggunaan air, peningkatan kencing, penurunan berat badan secara beransur-ansur, penurunan selera makan, muntah sekali-sekala, nafas berbau dengan bau seperti ammonia, lesu dan lemah, kualiti bulu yang buruk, dan sembelit. Diagnosis melibatkan ujian darah, ujian air kencing, dan kadangkala pengimejan. Pengurusan termasuk diet khas buah pinggang, terapi cecair, ubat-ubatan, dan pemantauan berkala. Pengesanan awal melalui kerja darah tahunan pada kucing tua membolehkan pengurusan yang lebih baik.',
      zh: '慢性肾病(CKD)是老年猫中最常见的疾病之一,影响多达30%的15岁以上猫。早期迹象通常很微妙,包括:饮水量增加、排尿增加、尽管最初食欲正常但体重逐渐下降、随时间食欲下降、偶尔呕吐、口气有氨味、嗜睡和虚弱、毛发质量差、便秘。随着疾病进展,症状会恶化,可能包括口腔溃疡、严重脱水和神经系统症状。急性肾损伤表现更突然,症状严重需要紧急护理。诊断包括血液检查、尿液检查,有时还需要影像检查。管理包括处方肾脏饮食、液体治疗、药物和定期监测。'
    },
    keywords: ['kidney', 'renal', 'thirst', 'urination', 'weight loss', 'CKD', 'chronic']
  },
  {
    id: 'cat-diabetes-1',
    category: 'cat-emergency',
    question: {
      en: 'How do I know if my cat has diabetes?',
      ms: 'Bagaimana saya tahu jika kucing saya menghidap diabetes?',
      zh: '如何知道我的猫是否患有糖尿病?'
    },
    shortAnswer: {
      en: 'Signs include excessive thirst, increased urination, increased appetite with weight loss, lethargy, and poor coat condition. Diabetic ketoacidosis (DKA) is an emergency with symptoms like vomiting, weakness, and sweet-smelling breath requiring immediate veterinary care.',
      ms: 'Tanda-tanda termasuk rasa dahaga yang berlebihan, kencing yang meningkat, selera makan yang meningkat dengan penurunan berat badan, lesu, dan keadaan bulu yang buruk. Ketoasidosis diabetik adalah kecemasan yang memerlukan rawatan segera.',
      zh: '症状包括过度口渴、排尿增加、食欲增加但体重下降、嗜睡和毛发状况差。糖尿病酮症酸中毒(DKA)是紧急情况,症状包括呕吐、虚弱和呼吸有甜味,需要立即就医。'
    },
    fullAnswer: {
      en: 'Diabetes mellitus in cats occurs when the body cannot properly produce or respond to insulin. It is most common in overweight, middle-aged to senior cats. Key symptoms to watch for include: dramatically increased thirst and water consumption, frequent and large amounts of urination, increased appetite (initially), weight loss despite eating well, lethargy and decreased activity, weakness in hind legs (diabetic neuropathy), poor coat condition, and sweet or fruity-smelling breath. Diabetes becomes an emergency when diabetic ketoacidosis (DKA) develops. DKA symptoms include severe lethargy, vomiting, loss of appetite, dehydration, labored breathing, and collapse - this requires immediate emergency care. Diagnosis involves blood and urine tests. Treatment typically requires twice-daily insulin injections, dietary changes (high-protein, low-carb), and regular glucose monitoring. With proper management, many diabetic cats can achieve remission. Weight management is crucial for prevention and treatment.',
      ms: 'Diabetes mellitus pada kucing berlaku apabila badan tidak dapat menghasilkan atau bertindak balas terhadap insulin dengan betul. Ia paling biasa pada kucing yang berlebihan berat badan, berumur pertengahan hingga tua. Gejala utama yang perlu diperhatikan termasuk: peningkatan dahaga dan penggunaan air secara dramatik, kencing yang kerap dan banyak, peningkatan selera makan (pada mulanya), penurunan berat badan walaupun makan dengan baik, lesu dan penurunan aktiviti, kelemahan pada kaki belakang, keadaan bulu yang buruk, dan nafas berbau manis atau buah-buahan. Diabetes menjadi kecemasan apabila ketoasidosis diabetik berkembang - ini memerlukan rawatan kecemasan segera. Diagnosis melibatkan ujian darah dan air kencing. Rawatan biasanya memerlukan suntikan insulin dua kali sehari dan perubahan diet.',
      zh: '猫糖尿病发生在身体无法正常产生或对胰岛素作出反应时。它在超重的中老年猫中最常见。需要注意的主要症状包括:口渴和饮水量显著增加、频繁且大量排尿、食欲增加(最初)、尽管吃得好但体重下降、嗜睡和活动减少、后腿无力(糖尿病神经病变)、毛发状况差、呼吸有甜味或水果味。当糖尿病酮症酸中毒(DKA)发展时,糖尿病就成为紧急情况。DKA症状包括严重嗜睡、呕吐、食欲不振、脱水、呼吸困难和虚脱 - 这需要立即紧急护理。诊断包括血液和尿液检查。治疗通常需要每天两次胰岛素注射和饮食改变。'
    },
    keywords: ['diabetes', 'thirst', 'urination', 'weight loss', 'insulin', 'glucose', 'DKA']
  },
  {
    id: 'cat-hyperthyroid-1',
    category: 'cat-emergency',
    question: {
      en: 'What is hyperthyroidism in cats and what are the symptoms?',
      ms: 'Apakah hipertiroidisme pada kucing dan apakah gejalanya?',
      zh: '什么是猫甲状腺功能亢进,有哪些症状?'
    },
    shortAnswer: {
      en: 'Hyperthyroidism is an overactive thyroid gland causing increased metabolism. Signs include weight loss despite good appetite, hyperactivity, increased thirst and urination, vomiting, diarrhea, poor coat, and rapid heart rate. Untreated, it can damage the heart and kidneys.',
      ms: 'Hipertiroidisme adalah kelenjar tiroid yang terlalu aktif yang menyebabkan peningkatan metabolisme. Tanda-tanda termasuk penurunan berat badan walaupun selera makan baik, hiperaktif, peningkatan dahaga dan kencing.',
      zh: '甲状腺功能亢进是甲状腺过度活跃导致新陈代谢增加。症状包括尽管食欲好但体重下降、活动过度、口渴和排尿增加、呕吐、腹泻、毛发差和心跳加速。如不治疗,可能损害心脏和肾脏。'
    },
    fullAnswer: {
      en: 'Hyperthyroidism is the most common hormonal disorder in cats, typically affecting those over 10 years old. It occurs when the thyroid gland produces excessive thyroid hormone, dramatically increasing metabolism. Common symptoms include: significant weight loss despite increased or ravenous appetite, hyperactivity and restlessness, increased thirst and urination, vomiting and diarrhea, poor coat quality and unkempt appearance, rapid heart rate and heart murmur, high blood pressure, behavioral changes (irritability, aggression), and panting or difficulty breathing. Without treatment, hyperthyroidism can lead to serious complications including heart disease, high blood pressure, kidney damage, and blindness. Diagnosis involves blood tests measuring thyroid hormone levels. Treatment options include daily medication (methimazole), radioactive iodine therapy (curative), surgery, or prescription diet. Most cats respond well to treatment. Regular monitoring is essential to prevent complications and adjust medication as needed.',
      ms: 'Hipertiroidisme adalah gangguan hormon yang paling biasa pada kucing, biasanya menjejaskan mereka yang berumur lebih 10 tahun. Ia berlaku apabila kelenjar tiroid menghasilkan hormon tiroid yang berlebihan. Gejala biasa termasuk: penurunan berat badan yang ketara walaupun selera makan meningkat, hiperaktif dan gelisah, peningkatan dahaga dan kencing, muntah dan cirit-birit, kualiti bulu yang buruk, degup jantung yang cepat, tekanan darah tinggi, dan perubahan tingkah laku. Tanpa rawatan, hipertiroidisme boleh menyebabkan komplikasi serius termasuk penyakit jantung dan kerosakan buah pinggang. Diagnosis melibatkan ujian darah. Pilihan rawatan termasuk ubat harian, terapi iodin radioaktif, pembedahan, atau diet preskripsi.',
      zh: '甲状腺功能亢进是猫最常见的荷尔蒙疾病,通常影响10岁以上的猫。当甲状腺产生过多甲状腺激素时发生,显著增加新陈代谢。常见症状包括:尽管食欲增加或贪婪但体重显著下降、活动过度和不安、口渴和排尿增加、呕吐和腹泻、毛发质量差和外表邋遢、心跳加速和心杂音、高血压、行为改变(烦躁、攻击性)、喘气或呼吸困难。如不治疗,甲状腺功能亢进可能导致严重并发症,包括心脏病、高血压、肾脏损伤和失明。诊断包括测量甲状腺激素水平的血液检查。治疗选择包括每日药物、放射性碘治疗、手术或处方饮食。'
    },
    keywords: ['hyperthyroid', 'thyroid', 'weight loss', 'appetite', 'hyperactive', 'metabolism', 'hormone']
  },
  {
    id: 'cat-fip-1',
    category: 'cat-emergency',
    question: {
      en: 'What is FIP (Feline Infectious Peritonitis) and can it be treated?',
      ms: 'Apakah FIP (Peritonitis Berjangkit Kucing) dan bolehkah ia dirawat?',
      zh: '什么是FIP(猫传染性腹膜炎),可以治疗吗?'
    },
    shortAnswer: {
      en: 'FIP is a viral disease caused by mutated feline coronavirus. Symptoms include persistent fever, weight loss, lethargy, fluid in abdomen or chest, jaundice, and neurological signs. While historically fatal, new antiviral treatments (GS-441524) are showing promising results.',
      ms: 'FIP adalah penyakit virus yang disebabkan oleh coronavirus kucing yang bermutasi. Gejala termasuk demam berterusan, penurunan berat badan, lesu, cecair dalam perut atau dada, dan jaundis.',
      zh: 'FIP是由变异猫冠状病毒引起的病毒性疾病。症状包括持续发烧、体重下降、嗜睡、腹部或胸部积液、黄疸和神经系统症状。虽然历史上是致命的,但新的抗病毒治疗(GS-441524)显示出有希望的结果。'
    },
    fullAnswer: {
      en: 'Feline Infectious Peritonitis (FIP) is a serious viral disease caused by a mutation of the feline coronavirus. It primarily affects young cats and those in multi-cat environments. There are two forms: wet FIP (fluid accumulation in abdomen or chest) and dry FIP (inflammatory lesions in organs). Symptoms include: persistent fever unresponsive to antibiotics, progressive weight loss despite normal appetite, lethargy and depression, distended abdomen (wet form), difficulty breathing (wet form with chest fluid), jaundice (yellowing of eyes, gums), neurological signs (seizures, behavioral changes, wobbly gait), and eye inflammation. Historically FIP was considered fatal, but breakthrough antiviral treatments, particularly GS-441524 (similar to remdesivir), are now achieving cure rates of 80-90% in many cases. Treatment requires 84 days of daily injections or oral medication. If you suspect FIP, seek veterinary care immediately for proper diagnosis and discuss treatment options. Early intervention improves outcomes.',
      ms: 'Peritonitis Berjangkit Kucing (FIP) adalah penyakit virus serius yang disebabkan oleh mutasi coronavirus kucing. Ia terutamanya menjejaskan kucing muda dan mereka dalam persekitaran berbilang kucing. Terdapat dua bentuk: FIP basah (pengumpulan cecair dalam perut atau dada) dan FIP kering (lesi keradangan dalam organ). Gejala termasuk: demam berterusan yang tidak bertindak balas terhadap antibiotik, penurunan berat badan progresif, lesu, perut kembung, kesukaran bernafas, jaundis, tanda-tanda neurologi, dan keradangan mata. Dari segi sejarah FIP dianggap membawa maut, tetapi rawatan antivirus terobosan, terutamanya GS-441524, kini mencapai kadar penyembuhan 80-90% dalam banyak kes. Rawatan memerlukan 84 hari suntikan harian atau ubat oral.',
      zh: 'FIP是一种由猫冠状病毒突变引起的严重病毒性疾病。它主要影响年轻猫和多猫环境中的猫。有两种形式:湿性FIP(腹部或胸部积液)和干性FIP(器官炎症病变)。症状包括:对抗生素无反应的持续发烧、尽管食欲正常但体重进行性下降、嗜睡和抑郁、腹部膨胀(湿性形式)、呼吸困难(胸腔积液的湿性形式)、黄疸(眼睛、牙龈发黄)、神经系统症状(癫痫发作、行为改变、步态不稳)、眼睛炎症。历史上FIP被认为是致命的,但突破性的抗病毒治疗,特别是GS-441524,现在在许多情况下达到80-90%的治愈率。如果您怀疑FIP,请立即就医。'
    },
    keywords: ['FIP', 'peritonitis', 'coronavirus', 'fever', 'fluid', 'abdomen', 'jaundice', 'GS-441524']
  },
  {
    id: 'cat-felv-1',
    category: 'cat-emergency',
    question: {
      en: 'What is FeLV (Feline Leukemia Virus) and how is it managed?',
      ms: 'Apakah FeLV (Virus Leukemia Kucing) dan bagaimana ia diuruskan?',
      zh: '什么是FeLV(猫白血病病毒),如何管理?'
    },
    shortAnswer: {
      en: 'FeLV weakens the immune system and can cause cancer. Signs include weight loss, poor coat, recurring infections, pale gums, and swollen lymph nodes. There is no cure, but supportive care helps manage symptoms. Vaccination and testing prevent spread.',
      ms: 'FeLV melemahkan sistem imun dan boleh menyebabkan kanser. Tanda-tanda termasuk penurunan berat badan, bulu yang buruk, jangkitan berulang, dan gusi pucat. Tiada penyembuhan, tetapi penjagaan sokongan membantu.',
      zh: 'FeLV削弱免疫系统并可能导致癌症。症状包括体重下降、毛发差、反复感染、牙龈苍白和淋巴结肿大。没有治愈方法,但支持性护理有助于控制症状。疫苗接种和检测可防止传播。'
    },
    fullAnswer: {
      en: 'Feline Leukemia Virus (FeLV) is a retrovirus that weakens the immune system and is one of the most serious infectious diseases in cats. It spreads through close contact, grooming, shared food bowls, and from mother to kittens. Symptoms may not appear for months or years and include: progressive weight loss, poor coat condition and enlarged lymph nodes, persistent fever, pale gums and mucous membranes (anemia), recurring infections (respiratory, skin, bladder), slow healing wounds, diarrhea, and reproductive problems. FeLV can also cause lymphoma and other cancers. While there is no cure for FeLV, many cats can live quality lives with proper management: keeping them indoors to prevent spread, regular veterinary checkups, high-quality nutrition, prompt treatment of secondary infections, and stress reduction. Prevention is key: test all new cats before introducing to household, vaccinate at-risk cats, and keep FeLV-positive cats separated from negative cats. Average life expectancy after diagnosis varies widely from months to years.',
      ms: 'Virus Leukemia Kucing (FeLV) adalah retrovirus yang melemahkan sistem imun dan merupakan salah satu penyakit berjangkit paling serius pada kucing. Ia merebak melalui sentuhan rapat, menjilat, mangkuk makanan yang dikongsi, dan dari ibu kepada anak kucing. Gejala mungkin tidak muncul selama berbulan-bulan atau bertahun-tahun dan termasuk: penurunan berat badan progresif, keadaan bulu yang buruk dan nodus limfa yang membesar, demam berterusan, gusi pucat, jangkitan berulang, luka yang lambat sembuh, cirit-birit, dan masalah pembiakan. FeLV juga boleh menyebabkan limfoma dan kanser lain. Walaupun tiada penyembuhan untuk FeLV, banyak kucing boleh hidup dengan kualiti dengan pengurusan yang betul. Pencegahan adalah kunci: uji semua kucing baru dan vaksinasi kucing berisiko.',
      zh: 'FeLV是一种削弱免疫系统的逆转录病毒,是猫最严重的传染病之一。它通过密切接触、互相舔毛、共用食碗以及母传子传播。症状可能在数月或数年内不出现,包括:进行性体重下降、毛发状况差和淋巴结肿大、持续发烧、牙龈和粘膜苍白(贫血)、反复感染(呼吸道、皮肤、膀胱)、伤口愈合缓慢、腹泻和生殖问题。FeLV还可能导致淋巴瘤和其他癌症。虽然FeLV没有治愈方法,但通过适当管理,许多猫可以过上有质量的生活。预防是关键:在引入家庭之前测试所有新猫,为高风险猫接种疫苗。'
    },
    keywords: ['FeLV', 'leukemia', 'virus', 'immune', 'cancer', 'lymphoma', 'vaccination', 'infection']
  },
  {
    id: 'cat-ringworm-1',
    category: 'cat-emergency',
    question: {
      en: 'How do I identify and treat ringworm in cats?',
      ms: 'Bagaimana saya mengenal pasti dan merawat kurap pada kucing?',
      zh: '如何识别和治疗猫癣?'
    },
    shortAnswer: {
      en: 'Ringworm is a fungal infection (not a worm) causing circular bald patches, scaly skin, and broken hairs. It is highly contagious to other pets and humans. Treatment includes antifungal medication, medicated baths, and thorough environmental cleaning.',
      ms: 'Kurap adalah jangkitan kulat (bukan cacing) yang menyebabkan tompok botak bulat, kulit bersisik, dan rambut yang patah. Ia sangat mudah berjangkit kepada haiwan dan manusia lain.',
      zh: '猫癣是一种真菌感染(不是虫),会导致圆形脱毛斑、皮肤鳞屑和毛发断裂。它对其他宠物和人类具有高度传染性。治疗包括抗真菌药物、药浴和彻底的环境清洁。'
    },
    fullAnswer: {
      en: 'Ringworm (dermatophytosis) is a fungal infection of the skin, hair, and nails - despite its name, no worms are involved. It is highly contagious to other animals and humans, especially children and immunocompromised individuals. Signs in cats include: circular patches of hair loss, scaly or crusty skin around the bald areas, broken or stubby hairs, redness and inflammation, itching (though some cats show no discomfort), and darkened skin in affected areas. Some cats, especially long-haired breeds, can be carriers without showing symptoms. Diagnosis typically involves Wood\'s lamp examination, fungal culture, or microscopic examination. Treatment includes: topical antifungal creams or sprays for localized infections, oral antifungal medication (griseofulvin, itraconazole, or terbinafine) for widespread infection, medicated baths with antifungal shampoo, and thorough environmental cleaning and disinfection. Treatment typically takes 6-8 weeks minimum. Isolate infected cats and practice strict hygiene to prevent spread to humans and other pets.',
      ms: 'Kurap (dermatofitosis) adalah jangkitan kulat pada kulit, rambut, dan kuku - walaupun namanya, tiada cacing yang terlibat. Ia sangat mudah berjangkit kepada haiwan dan manusia lain. Tanda-tanda pada kucing termasuk: tompok bulat keguguran bulu, kulit bersisik atau berkerak di sekitar kawasan botak, rambut yang patah atau pendek, kemerahan dan keradangan, dan gatal. Sesetengah kucing boleh menjadi pembawa tanpa menunjukkan gejala. Diagnosis biasanya melibatkan pemeriksaan lampu Wood, kultur kulat, atau pemeriksaan mikroskopik. Rawatan termasuk: krim atau semburan antikulat topikal, ubat antikulat oral, mandian berubat dengan syampu antikulat, dan pembersihan persekitaran yang menyeluruh. Rawatan biasanya mengambil masa minimum 6-8 minggu.',
      zh: '猫癣(皮肤真菌病)是皮肤、毛发和指甲的真菌感染 - 尽管名称如此,但不涉及任何虫子。它对其他动物和人类具有高度传染性。猫的症状包括:圆形脱毛斑、脱毛区域周围皮肤鳞屑或结痂、毛发断裂或短粗、发红和炎症、瘙痒(尽管有些猫没有不适感)、受影响区域皮肤变黑。有些猫,特别是长毛品种,可以是无症状的携带者。诊断通常包括伍德灯检查、真菌培养或显微镜检查。治疗包括:局部抗真菌软膏或喷雾用于局部感染、口服抗真菌药物用于广泛感染、药浴和彻底的环境清洁消毒。治疗通常至少需要6-8周。'
    },
    keywords: ['ringworm', 'fungal', 'bald', 'patches', 'scaly', 'contagious', 'skin', 'hair loss']
  },
  {
    id: 'cat-flea-tick-1',
    category: 'cat-emergency',
    question: {
      en: 'How do I treat severe flea or tick infestation in my cat?',
      ms: 'Bagaimana saya merawat serangan kutu atau sengkenit yang teruk pada kucing saya?',
      zh: '如何治疗我的猫严重的跳蚤或蜱虫侵染?'
    },
    shortAnswer: {
      en: 'Severe infestations cause intense itching, hair loss, skin infections, anemia (pale gums), and can transmit diseases. Treatment includes immediate veterinary flea/tick treatment, treating all pets and the home environment, and monitoring for anemia in severe cases.',
      ms: 'Serangan teruk menyebabkan gatal yang kuat, keguguran bulu, jangkitan kulit, anemia, dan boleh menyebarkan penyakit. Rawatan termasuk rawatan kutu veterinar segera dan merawat semua haiwan peliharaan dan persekitaran rumah.',
      zh: '严重的侵染会导致剧烈瘙痒、脱毛、皮肤感染、贫血(牙龈苍白),并可能传播疾病。治疗包括立即进行兽医跳蚤/蜱虫治疗、治疗所有宠物和家庭环境,以及在严重情况下监测贫血。'
    },
    fullAnswer: {
      en: 'Severe flea or tick infestations require immediate attention as they can cause serious health problems. Signs of severe infestation include: intense scratching and biting at skin, visible fleas or flea dirt (black specks) in fur, hair loss especially around tail base and hindquarters, red and irritated skin with possible hot spots, scabs and crusts from scratching, restlessness and agitation, pale gums (sign of anemia from blood loss), and tapeworm segments in stool. Treatment approach: For immediate relief, use vet-recommended fast-acting flea treatment (topical or oral). Never use dog products on cats as some are toxic. Treat ALL pets in the household simultaneously. Thoroughly clean home environment - wash bedding in hot water, vacuum all carpets and furniture, use environmental flea spray. Consider professional pest control for severe home infestations. For anemic cats, veterinary supportive care may be needed. Maintain year-round prevention to avoid recurrence. Some fleas carry Bartonella (cat scratch fever) and ticks carry various diseases, so monitor for additional symptoms.',
      ms: 'Serangan kutu atau sengkenit yang teruk memerlukan perhatian segera kerana ia boleh menyebabkan masalah kesihatan yang serius. Tanda-tanda serangan teruk termasuk: menggaru dan menggigit kulit dengan kuat, kutu atau najis kutu yang kelihatan dalam bulu, keguguran bulu terutamanya di pangkal ekor, kulit merah dan terengsakan, kudis dan kerak, kegelisahan, gusi pucat (tanda anemia), dan segmen cacing pita dalam najis. Pendekatan rawatan: Untuk kelegaan segera, gunakan rawatan kutu yang bertindak pantas yang disyorkan oleh veterinar. Jangan sekali-kali menggunakan produk anjing pada kucing. Rawat SEMUA haiwan peliharaan di rumah secara serentak. Bersihkan persekitaran rumah dengan teliti. Kekalkan pencegahan sepanjang tahun untuk mengelakkan berulang.',
      zh: '严重的跳蚤或蜱虫侵染需要立即关注,因为它们可能导致严重的健康问题。严重侵染的迹象包括:剧烈抓挠和咬皮肤、毛发中可见跳蚤或跳蚤粪便(黑色斑点)、脱毛特别是在尾巴根部和后躯、皮肤发红和刺激可能有热点、抓挠造成的结痂、不安和烦躁、牙龈苍白(失血性贫血的迹象)、粪便中有绦虫节片。治疗方法:为了立即缓解,使用兽医推荐的快速起效跳蚤治疗(外用或口服)。切勿在猫身上使用狗产品。同时治疗家中所有宠物。彻底清洁家庭环境。保持全年预防以避免复发。'
    },
    keywords: ['flea', 'tick', 'infestation', 'itching', 'scratching', 'anemia', 'parasite', 'bite']
  },
  {
    id: 'cat-worms-1',
    category: 'cat-emergency',
    question: {
      en: 'What are the signs of intestinal worms in cats and how are they treated?',
      ms: 'Apakah tanda-tanda cacing usus pada kucing dan bagaimana ia dirawat?',
      zh: '猫肠道寄生虫有哪些症状,如何治疗?'
    },
    shortAnswer: {
      en: 'Signs include visible worms or segments in stool/vomit, pot-bellied appearance, weight loss, diarrhea, vomiting, dull coat, and scooting. Treatment involves deworming medication from your vet. Heavy infestations in kittens can be life-threatening.',
      ms: 'Tanda-tanda termasuk cacing atau segmen yang kelihatan dalam najis/muntah, perut buncit, penurunan berat badan, cirit-birit, muntah, bulu kusam, dan menyeret punggung. Rawatan melibatkan ubat cacing dari veterinar.',
      zh: '症状包括粪便/呕吐物中可见蠕虫或虫节、腹部膨胀、体重下降、腹泻、呕吐、毛发暗淡和蹭屁股。治疗包括兽医开的驱虫药。幼猫严重感染可能危及生命。'
    },
    fullAnswer: {
      en: 'Intestinal parasites are common in cats, especially kittens and outdoor cats. The most common types include roundworms, tapeworms, hookworms, and whipworms. Signs of worm infestation include: visible worms in stool or vomit (roundworms look like spaghetti, tapeworm segments look like rice grains), pot-bellied appearance especially in kittens, weight loss despite good appetite, diarrhea which may contain blood or mucus, vomiting, dull and rough coat, dragging bottom across floor (scooting), decreased energy, and in severe cases anemia. Kittens with heavy worm burdens can become severely ill with stunted growth, intestinal blockage, and potentially fatal anemia. Diagnosis involves fecal examination at your vet. Treatment depends on the type of worm - your vet will prescribe appropriate deworming medication which may need to be repeated. Prevention includes regular fecal testing, routine deworming, monthly preventatives, flea control (fleas transmit tapeworms), keeping cats indoors, and prompt disposal of feces.',
      ms: 'Parasit usus adalah biasa pada kucing, terutamanya anak kucing dan kucing luar. Jenis yang paling biasa termasuk cacing gelang, cacing pita, cacing kait, dan cacing cambuk. Tanda-tanda serangan cacing termasuk: cacing yang kelihatan dalam najis atau muntah, perut buncit terutamanya pada anak kucing, penurunan berat badan, cirit-birit yang mungkin mengandungi darah atau lendir, muntah, bulu yang kusam dan kasar, menyeret punggung di lantai, tenaga yang berkurangan, dan dalam kes yang teruk anemia. Anak kucing dengan beban cacing yang berat boleh menjadi sangat sakit. Diagnosis melibatkan pemeriksaan najis di veterinar. Rawatan bergantung kepada jenis cacing. Pencegahan termasuk ujian najis berkala dan kawalan kutu.',
      zh: '肠道寄生虫在猫中很常见,特别是幼猫和户外猫。最常见的类型包括蛔虫、绦虫、钩虫和鞭虫。蠕虫感染的迹象包括:粪便或呕吐物中可见蠕虫(蛔虫看起来像意大利面,绦虫节片看起来像米粒)、腹部膨胀特别是在幼猫中、尽管食欲好但体重下降、腹泻可能含有血液或粘液、呕吐、毛发暗淡粗糙、在地板上蹭屁股、精力下降,严重情况下贫血。蠕虫负担重的幼猫可能会严重生病。诊断包括兽医处的粪便检查。治疗取决于蠕虫类型。预防包括定期粪便检测、常规驱虫和跳蚤控制。'
    },
    keywords: ['worms', 'intestinal', 'parasites', 'roundworm', 'tapeworm', 'deworming', 'stool', 'pot-bellied']
  },
  {
    id: 'cat-wound-1',
    category: 'cat-emergency',
    question: {
      en: 'How do I treat a wound or bite injury on my cat?',
      ms: 'Bagaimana saya merawat luka atau kecederaan gigitan pada kucing saya?',
      zh: '如何处理我的猫的伤口或咬伤?'
    },
    shortAnswer: {
      en: 'Clean minor wounds with saline and apply pet-safe antiseptic. Deep wounds, bite injuries, or wounds showing swelling, discharge, or signs of infection need immediate veterinary care. Cat bites often abscess and require antibiotics and drainage.',
      ms: 'Bersihkan luka kecil dengan salin dan sapukan antiseptik selamat untuk haiwan. Luka dalam, kecederaan gigitan, atau luka yang menunjukkan bengkak atau jangkitan memerlukan rawatan veterinar segera.',
      zh: '用生理盐水清洁轻微伤口并涂抹宠物安全的消毒剂。深伤口、咬伤或显示肿胀、分泌物或感染迹象的伤口需要立即就医。猫咬伤经常形成脓肿,需要抗生素和引流。'
    },
    fullAnswer: {
      en: 'Wounds in cats require prompt attention to prevent infection and complications. For minor wounds: Apply gentle pressure to stop bleeding, clean the wound with sterile saline solution or clean water, apply pet-safe antiseptic (avoid hydrogen peroxide which can damage tissue), and keep the cat from licking (consider an e-collar). Seek immediate veterinary care for: deep puncture wounds or lacerations, bite wounds from other animals, wounds that won\'t stop bleeding, signs of infection (swelling, heat, discharge, bad smell), wounds near eyes, joints, or chest, any wound in a diabetic or immunocompromised cat, and wounds older than 6 hours before treatment. Cat bite wounds deserve special attention as they often appear minor but can develop serious abscesses within 24-48 hours due to bacteria in cat saliva. Signs of abscess include localized swelling, fever, pain, lethargy, and eventually rupture with foul-smelling discharge. Treatment typically includes antibiotics, wound cleaning or drainage, and sometimes surgery.',
      ms: 'Luka pada kucing memerlukan perhatian segera untuk mencegah jangkitan dan komplikasi. Untuk luka kecil: Sapukan tekanan lembut untuk menghentikan pendarahan, bersihkan luka dengan larutan salin steril atau air bersih, sapukan antiseptik selamat untuk haiwan, dan halang kucing daripada menjilat. Dapatkan rawatan veterinar segera untuk: luka tusukan atau laserasi dalam, luka gigitan dari haiwan lain, luka yang tidak berhenti berdarah, tanda-tanda jangkitan, luka berhampiran mata atau sendi, dan sebarang luka pada kucing diabetik. Luka gigitan kucing memerlukan perhatian khusus kerana ia sering kelihatan kecil tetapi boleh membentuk abses serius dalam 24-48 jam. Rawatan biasanya termasuk antibiotik, pembersihan luka atau saliran, dan kadangkala pembedahan.',
      zh: '猫的伤口需要及时处理以防止感染和并发症。对于轻微伤口:轻轻施压止血,用无菌生理盐水或清水清洗伤口,涂抹宠物安全的消毒剂(避免过氧化氢,它会损伤组织),并防止猫舔舐(考虑使用伊丽莎白圈)。以下情况需立即就医:深层穿刺伤或撕裂伤、其他动物的咬伤、无法止血的伤口、感染迹象(肿胀、发热、分泌物、异味)、眼睛、关节或胸部附近的伤口、糖尿病或免疫功能低下猫的任何伤口。猫咬伤需要特别注意,因为它们通常看起来很轻微,但可能在24-48小时内形成严重脓肿。治疗通常包括抗生素、伤口清洁或引流,有时需要手术。'
    },
    keywords: ['wound', 'bite', 'injury', 'bleeding', 'abscess', 'infection', 'cut', 'scratch']
  },
  {
    id: 'cat-vomiting-1',
    category: 'cat-emergency',
    question: {
      en: 'When is vomiting in cats an emergency?',
      ms: 'Bilakah muntah pada kucing menjadi kecemasan?',
      zh: '猫呕吐什么时候是紧急情况?'
    },
    shortAnswer: {
      en: 'Occasional vomiting (hairballs, eating too fast) can be normal, but seek emergency care for: repeated vomiting, blood in vomit, inability to keep water down, vomiting with diarrhea, lethargy, suspected poisoning, or known ingestion of foreign objects.',
      ms: 'Muntah sekali-sekala boleh menjadi normal, tetapi dapatkan rawatan kecemasan untuk: muntah berulang, darah dalam muntah, tidak dapat menyimpan air, muntah dengan cirit-birit, atau keracunan yang disyaki.',
      zh: '偶尔呕吐(毛球、吃得太快)可能是正常的,但以下情况需紧急就医:反复呕吐、呕吐物中有血、无法保持水分、呕吐伴腹泻、嗜睡、疑似中毒或已知吞食异物。'
    },
    fullAnswer: {
      en: 'While occasional vomiting in cats can be normal (hairballs, eating too quickly), persistent or severe vomiting requires veterinary attention. Normal vs concerning vomiting: Occasional hairball vomiting or bringing up undigested food right after eating is usually not an emergency. However, seek immediate care if: vomiting occurs more than 2-3 times in 24 hours, there is blood in the vomit (red or coffee-ground appearance), cat cannot keep water down for more than 12 hours, vomiting is accompanied by diarrhea, lethargy, or refusal to eat, abdomen appears swollen or painful, you suspect ingestion of toxins, medications, or foreign objects, vomiting is projectile or particularly forceful, or cat is very young, elderly, or has chronic health conditions. Common causes range from minor (eating too fast, hairballs, dietary indiscretion) to serious (intestinal blockage, poisoning, kidney disease, pancreatitis, infections). Your vet may need blood tests, x-rays, or ultrasound to determine the cause. Treatment depends on the underlying issue and may include anti-nausea medication, fluid therapy, and addressing the root cause.',
      ms: 'Walaupun muntah sekali-sekala pada kucing boleh menjadi normal (bola bulu, makan terlalu cepat), muntah yang berterusan atau teruk memerlukan perhatian veterinar. Dapatkan rawatan segera jika: muntah berlaku lebih dari 2-3 kali dalam 24 jam, terdapat darah dalam muntah, kucing tidak dapat menyimpan air selama lebih dari 12 jam, muntah disertai dengan cirit-birit atau lesu, perut kelihatan bengkak atau sakit, anda mengesyaki pengambilan toksin atau objek asing, muntah adalah projektil, atau kucing sangat muda atau tua. Punca biasa berkisar dari kecil (makan terlalu cepat, bola bulu) hingga serius (penyumbatan usus, keracunan, penyakit buah pinggang). Veterinar mungkin memerlukan ujian darah, x-ray, atau ultrasound.',
      zh: '虽然猫偶尔呕吐可能是正常的(毛球、吃得太快),但持续或严重的呕吐需要兽医关注。以下情况需立即就医:24小时内呕吐超过2-3次、呕吐物中有血(红色或咖啡渣状)、超过12小时无法保持水分、呕吐伴有腹泻或嗜睡、腹部看起来肿胀或疼痛、怀疑摄入毒素或异物、呕吐是喷射性的、或猫非常年幼/年老或有慢性健康问题。常见原因从轻微(吃得太快、毛球)到严重(肠梗阻、中毒、肾病)不等。您的兽医可能需要血液检查、X光或超声波来确定原因。'
    },
    keywords: ['vomiting', 'throwing up', 'nausea', 'blood', 'hairball', 'regurgitation', 'sick']
  },
  {
    id: 'cat-constipation-1',
    category: 'cat-emergency',
    question: {
      en: 'How do I know if my cat is constipated and when is it serious?',
      ms: 'Bagaimana saya tahu jika kucing saya sembelit dan bila ia menjadi serius?',
      zh: '如何知道我的猫便秘,什么时候是严重的?'
    },
    shortAnswer: {
      en: 'Signs include straining in litter box, small hard stools, crying when defecating, decreased appetite, lethargy, and vomiting. It becomes serious when a cat hasn\'t defecated in 48-72 hours, especially if showing pain or distress. Megacolon is a severe complication.',
      ms: 'Tanda-tanda termasuk mengejan di kotak pasir, najis kecil dan keras, menangis semasa membuang air besar, selera makan berkurang, dan muntah. Ia menjadi serius apabila kucing tidak membuang air besar dalam 48-72 jam.',
      zh: '症状包括在猫砂盆中用力、小而硬的粪便、排便时哭叫、食欲下降、嗜睡和呕吐。当猫48-72小时没有排便时,特别是表现出疼痛或痛苦时,就变得严重。巨结肠是一种严重的并发症。'
    },
    fullAnswer: {
      en: 'Constipation is common in cats, especially seniors and those with dehydration or low-fiber diets. Signs include: frequent trips to litter box with little or no output, straining or crying while trying to defecate, small, hard, dry stools, loss of appetite, lethargy, vomiting, and hunched posture indicating abdominal discomfort. Constipation becomes an emergency when: cat hasn\'t defecated for 48-72+ hours, there is visible distress or pain, cat is vomiting repeatedly, cat becomes lethargic or stops eating, or abdomen is distended and hard. Chronic constipation can lead to megacolon, a serious condition where the colon loses its ability to contract and move stool. Treatment depends on severity: mild cases may respond to increased water intake, wet food, fiber supplements, or mild laxatives. Moderate to severe cases may require veterinary intervention including enemas, manual removal under sedation, IV fluids, or medications to stimulate motility. Prevention includes ensuring adequate hydration, high-quality diet with appropriate fiber, regular exercise, and monitoring litter box habits.',
      ms: 'Sembelit adalah biasa pada kucing, terutamanya yang tua dan mereka yang mengalami dehidrasi atau diet rendah serat. Tanda-tanda termasuk: kerap ke kotak pasir dengan sedikit atau tiada output, mengejan atau menangis semasa cuba membuang air besar, najis yang kecil, keras dan kering, kehilangan selera makan, lesu, muntah, dan postur bongkok menunjukkan ketidakselesaan perut. Sembelit menjadi kecemasan apabila: kucing tidak membuang air besar selama 48-72+ jam, terdapat kesusahan atau kesakitan yang kelihatan, kucing muntah berulang kali, atau perut kembung dan keras. Sembelit kronik boleh menyebabkan megakolon. Rawatan bergantung kepada keterukan. Pencegahan termasuk memastikan penghidratan yang mencukupi dan diet berkualiti tinggi.',
      zh: '便秘在猫中很常见,特别是老年猫和脱水或低纤维饮食的猫。症状包括:频繁去猫砂盆但很少或没有排泄物、排便时用力或哭叫、小而硬干的粪便、食欲不振、嗜睡、呕吐、弓背姿势表明腹部不适。以下情况便秘成为紧急情况:猫48-72小时以上没有排便、有明显的痛苦或疼痛、猫反复呕吐、猫变得嗜睡或停止进食、腹部膨胀和硬。慢性便秘可能导致巨结肠,这是一种结肠失去收缩和移动粪便能力的严重疾病。治疗取决于严重程度。预防包括确保充足的水分摄入和高质量饮食。'
    },
    keywords: ['constipation', 'straining', 'litter box', 'hard stool', 'megacolon', 'defecation', 'bowel']
  },
  {
    id: 'cat-arthritis-1',
    category: 'cat-emergency',
    question: {
      en: 'What are the signs of arthritis in cats and how is it managed?',
      ms: 'Apakah tanda-tanda artritis pada kucing dan bagaimana ia diuruskan?',
      zh: '猫关节炎有哪些症状,如何管理?'
    },
    shortAnswer: {
      en: 'Signs include reluctance to jump, difficulty climbing stairs, stiffness, reduced activity, avoiding being touched, decreased grooming, and behavioral changes. Management includes pain medication, joint supplements, weight management, environmental modifications, and physical therapy.',
      ms: 'Tanda-tanda termasuk keengganan untuk melompat, kesukaran menaiki tangga, kekakuan, aktiviti yang berkurang, mengelak disentuh, dan perubahan tingkah laku. Pengurusan termasuk ubat sakit dan suplemen sendi.',
      zh: '症状包括不愿跳跃、上楼梯困难、僵硬、活动减少、避免被触摸、减少梳理和行为改变。管理包括止痛药、关节补充剂、体重管理、环境改造和物理治疗。'
    },
    fullAnswer: {
      en: 'Arthritis (osteoarthritis or degenerative joint disease) affects up to 90% of cats over 12 years old, though it often goes unrecognized. Unlike dogs, cats rarely limp - instead, watch for: reduced jumping or jumping to lower heights, difficulty going up or down stairs, stiffness especially after rest, decreased activity and more sleeping, reduced or absent grooming (matted fur), irritability when touched in certain areas, hiding more often, inappropriate elimination (difficulty getting in/out of litter box), decreased appetite, and muscle loss. Diagnosis involves physical examination, history discussion, and sometimes x-rays. Management is multimodal: Pain medication (often NSAIDs, but cats require cat-specific formulations), joint supplements (glucosamine, chondroitin, omega fatty acids), weight management is crucial - even small weight loss helps, environmental modifications (ramps, low litter boxes, heated beds, easy access food/water), physical therapy and gentle exercise, acupuncture in some cases, and adequate bedding in warm areas. Never give human pain medications to cats - many are toxic. Regular veterinary monitoring is essential for long-term management.',
      ms: 'Artritis menjejaskan sehingga 90% kucing berumur lebih 12 tahun, walaupun ia sering tidak dikenali. Tidak seperti anjing, kucing jarang tempang - sebaliknya, perhatikan: lompatan yang berkurang, kesukaran naik atau turun tangga, kekakuan terutamanya selepas rehat, aktiviti yang berkurang dan lebih banyak tidur, menjilat yang berkurang, mudah marah apabila disentuh, lebih kerap bersembunyi, dan penurunan berat badan otot. Diagnosis melibatkan pemeriksaan fizikal dan kadangkala x-ray. Pengurusan adalah pelbagai mod: ubat sakit, suplemen sendi, pengurusan berat badan, pengubahsuaian persekitaran, dan terapi fizikal. Jangan sekali-kali memberikan ubat sakit manusia kepada kucing.',
      zh: '关节炎影响多达90%的12岁以上猫,尽管它经常不被识别。与狗不同,猫很少跛行 - 相反,要注意:跳跃减少或跳到较低的高度、上下楼梯困难、特别是休息后僵硬、活动减少和睡眠增多、减少或停止梳理(毛发打结)、触摸某些部位时易怒、更经常躲藏、不适当排泄、食欲下降和肌肉流失。诊断包括体格检查,有时需要X光。管理是多模式的:止痛药、关节补充剂、体重管理至关重要、环境改造(坡道、低猫砂盆、加热床、易于获取的食物/水)、物理治疗和温和运动。切勿给猫服用人用止痛药 - 许多对猫有毒。'
    },
    keywords: ['arthritis', 'joint', 'stiffness', 'mobility', 'pain', 'jumping', 'osteoarthritis', 'senior']
  },
  {
    id: 'cat-cancer-1',
    category: 'cat-emergency',
    question: {
      en: 'What are the warning signs of cancer in cats?',
      ms: 'Apakah tanda-tanda amaran kanser pada kucing?',
      zh: '猫癌症有哪些警告信号?'
    },
    shortAnswer: {
      en: 'Warning signs include lumps or bumps that grow or change, unexplained weight loss, persistent sores that don\'t heal, difficulty eating or swallowing, unusual bleeding, chronic vomiting or diarrhea, lethargy, and difficulty breathing. Early detection improves treatment outcomes.',
      ms: 'Tanda-tanda amaran termasuk benjolan yang membesar atau berubah, penurunan berat badan yang tidak dapat dijelaskan, luka yang tidak sembuh, kesukaran makan, pendarahan yang tidak normal, dan kesukaran bernafas.',
      zh: '警告信号包括生长或变化的肿块、不明原因的体重下降、不愈合的持久性溃疡、进食或吞咽困难、异常出血、慢性呕吐或腹泻、嗜睡和呼吸困难。早期发现可改善治疗效果。'
    },
    fullAnswer: {
      en: 'Cancer is unfortunately common in cats, especially as they age. Early detection significantly improves treatment options and outcomes. Warning signs to watch for include: lumps, bumps, or swellings that persist or grow - not all are cancerous, but all should be checked, unexplained and progressive weight loss, sores or wounds that don\'t heal, difficulty eating, swallowing, or obvious mouth masses, unusual discharge or bleeding from any body opening, persistent lameness or stiffness, chronic vomiting or diarrhea, progressive lethargy and weakness, difficulty breathing or coughing, changes in bathroom habits, and loss of appetite. Common cancers in cats include lymphoma (most common), squamous cell carcinoma, mammary tumors, and fibrosarcoma. If you notice any warning signs, don\'t delay - schedule a veterinary appointment. Diagnosis may involve blood tests, x-rays, ultrasound, and biopsy. Treatment options depend on cancer type and stage and may include surgery, chemotherapy (often well-tolerated in cats), radiation, immunotherapy, or palliative care. Many cats respond well to treatment and maintain good quality of life.',
      ms: 'Kanser malangnya biasa pada kucing, terutamanya apabila mereka berumur. Pengesanan awal meningkatkan pilihan rawatan dengan ketara. Tanda-tanda amaran yang perlu diperhatikan termasuk: benjolan atau bengkak yang berterusan atau membesar, penurunan berat badan yang tidak dapat dijelaskan dan progresif, luka yang tidak sembuh, kesukaran makan atau menelan, lelehan atau pendarahan yang tidak normal, kepincangan yang berterusan, muntah atau cirit-birit kronik, lesu dan kelemahan progresif, kesukaran bernafas, dan kehilangan selera makan. Kanser biasa pada kucing termasuk limfoma, karsinoma sel skuamus, tumor mamari, dan fibrosarkoma. Jika anda melihat sebarang tanda amaran, jadualkan temujanji veterinar. Banyak kucing bertindak balas dengan baik terhadap rawatan.',
      zh: '不幸的是,癌症在猫中很常见,特别是随着年龄增长。早期发现显著改善治疗选择和结果。需要注意的警告信号包括:持续存在或生长的肿块或肿胀 - 并非所有都是癌性的,但都应该检查、不明原因的进行性体重下降、不愈合的溃疡或伤口、进食或吞咽困难或明显的口腔肿块、任何身体开口的异常分泌物或出血、持续跛行或僵硬、慢性呕吐或腹泻、进行性嗜睡和虚弱、呼吸困难或咳嗽、如厕习惯改变、食欲不振。猫常见的癌症包括淋巴瘤(最常见)、鳞状细胞癌、乳腺肿瘤和纤维肉瘤。如果您注意到任何警告信号,请不要拖延 - 安排兽医预约。许多猫对治疗反应良好。'
    },
    keywords: ['cancer', 'tumor', 'lump', 'weight loss', 'lymphoma', 'mass', 'oncology', 'growth']
  },
  // Cat Maintenance Q&As (20 items)
  {
    id: 'cat-vaccination-1',
    category: 'cat-maintenance',
    question: {
      en: 'What vaccinations does my cat need and when?',
      ms: 'Apakah vaksin yang diperlukan kucing saya dan bila?',
      zh: '我的猫需要什么疫苗,什么时候接种?'
    },
    shortAnswer: {
      en: 'Core vaccines include FVRCP (feline viral rhinotracheitis, calicivirus, panleukopenia) starting at 6-8 weeks with boosters every 3-4 weeks until 16 weeks, then annually or every 3 years. Rabies vaccine is required by law in many areas. Non-core vaccines depend on lifestyle.',
      ms: 'Vaksin teras termasuk FVRCP bermula pada 6-8 minggu dengan penggalak setiap 3-4 minggu sehingga 16 minggu, kemudian setiap tahun atau 3 tahun. Vaksin rabies diperlukan oleh undang-undang di banyak kawasan.',
      zh: '核心疫苗包括FVRCP(猫病毒性鼻气管炎、杯状病毒、泛白细胞减少症),从6-8周开始接种,每3-4周加强一次直到16周,然后每年或每3年接种一次。狂犬病疫苗在许多地区是法律要求的。'
    },
    fullAnswer: {
      en: 'Cat vaccinations are essential for preventing serious diseases. Core vaccines (recommended for all cats) include: FVRCP - protects against feline viral rhinotracheitis (herpesvirus), calicivirus, and panleukopenia (feline distemper). Kittens need a series starting at 6-8 weeks, with boosters every 3-4 weeks until 16 weeks old, then a booster at 1 year, followed by every 1-3 years depending on vaccine type. Rabies vaccine is required by law in Malaysia and most countries. First dose at 12-16 weeks, then as required by local regulations (usually annually or every 3 years). Non-core vaccines depend on your cat\'s lifestyle and risk factors: FeLV (feline leukemia) for outdoor cats or those living with FeLV-positive cats, FIV vaccine (where available), and Chlamydia vaccine for multi-cat environments. Your veterinarian will create a personalized vaccination schedule. Keep records of all vaccinations and set reminders for boosters.',
      ms: 'Vaksinasi kucing adalah penting untuk mencegah penyakit serius. Vaksin teras (disyorkan untuk semua kucing) termasuk: FVRCP - melindungi daripada rhinotracheitis virus kucing, calicivirus, dan panleukopenia. Anak kucing memerlukan siri bermula pada 6-8 minggu, dengan penggalak setiap 3-4 minggu sehingga 16 minggu, kemudian penggalak pada 1 tahun, diikuti setiap 1-3 tahun. Vaksin rabies diperlukan oleh undang-undang di Malaysia. Dos pertama pada 12-16 minggu. Vaksin bukan teras bergantung kepada gaya hidup kucing anda: FeLV untuk kucing luar rumah, vaksin FIV, dan vaksin Chlamydia untuk persekitaran berbilang kucing. Veterinar anda akan membuat jadual vaksinasi yang diperibadikan.',
      zh: '猫疫苗对预防严重疾病至关重要。核心疫苗(建议所有猫接种)包括:FVRCP - 预防猫病毒性鼻气管炎(疱疹病毒)、杯状病毒和泛白细胞减少症(猫瘟)。幼猫需要从6-8周开始接种系列疫苗,每3-4周加强一次直到16周,然后在1岁时加强,之后根据疫苗类型每1-3年接种一次。狂犬病疫苗在马来西亚和大多数国家是法律要求的。首次接种在12-16周。非核心疫苗取决于您的猫的生活方式和风险因素:FeLV(猫白血病)用于户外猫,FIV疫苗,以及用于多猫环境的衣原体疫苗。您的兽医将制定个性化的疫苗接种计划。'
    },
    keywords: ['vaccination', 'vaccine', 'FVRCP', 'rabies', 'shots', 'immunization', 'booster', 'kitten']
  },
  {
    id: 'cat-deworming-1',
    category: 'cat-maintenance',
    question: {
      en: 'How often should I deworm my cat?',
      ms: 'Berapa kerap saya perlu memberi ubat cacing kepada kucing saya?',
      zh: '我应该多久给猫驱虫一次?'
    },
    shortAnswer: {
      en: 'Kittens should be dewormed every 2 weeks from 2-8 weeks old, then monthly until 6 months. Adult indoor cats need deworming every 3-6 months, while outdoor cats may need monthly treatment. Your vet can recommend the best schedule based on lifestyle.',
      ms: 'Anak kucing perlu diberi ubat cacing setiap 2 minggu dari 2-8 minggu, kemudian setiap bulan sehingga 6 bulan. Kucing dewasa dalam rumah perlu setiap 3-6 bulan, manakala kucing luar mungkin perlu rawatan bulanan.',
      zh: '幼猫应该从2-8周开始每2周驱虫一次,然后每月一次直到6个月。成年室内猫需要每3-6个月驱虫,而户外猫可能需要每月治疗。您的兽医可以根据生活方式推荐最佳时间表。'
    },
    fullAnswer: {
      en: 'Regular deworming is crucial for your cat\'s health and prevents transmission to humans. Deworming schedule depends on age and lifestyle: Kittens: Start at 2 weeks old, repeat every 2 weeks until 8 weeks old, then monthly until 6 months old. This aggressive schedule is necessary because kittens often get worms from their mother. Adult indoor cats: Every 3-6 months is typically sufficient for cats that stay indoors and don\'t hunt. Adult outdoor cats: Monthly deworming may be necessary due to higher exposure to parasites from hunting and environmental contact. Pregnant and nursing cats: Deworm before mating and again in late pregnancy under veterinary guidance. Common worms in cats include roundworms, hookworms, and tapeworms. Signs of worm infestation include visible worms in stool, pot-bellied appearance, weight loss despite good appetite, dull coat, diarrhea, and scooting. Your vet can perform fecal tests to identify specific parasites and recommend appropriate medications. Never use dog dewormers on cats as some are toxic to felines.',
      ms: 'Pemberian ubat cacing secara tetap adalah penting untuk kesihatan kucing anda dan mencegah penularan kepada manusia. Jadual pemberian ubat cacing bergantung kepada umur dan gaya hidup: Anak kucing: Mula pada 2 minggu, ulang setiap 2 minggu sehingga 8 minggu, kemudian setiap bulan sehingga 6 bulan. Kucing dewasa dalam rumah: Setiap 3-6 bulan biasanya mencukupi. Kucing dewasa luar rumah: Pemberian ubat cacing bulanan mungkin diperlukan. Tanda-tanda serangan cacing termasuk cacing yang kelihatan dalam najis, perut buncit, penurunan berat badan, bulu kusam, dan cirit-birit. Jangan sekali-kali menggunakan ubat cacing anjing pada kucing kerana sesetengahnya toksik kepada kucing.',
      zh: '定期驱虫对您的猫的健康至关重要,并可防止传播给人类。驱虫时间表取决于年龄和生活方式:幼猫:从2周开始,每2周重复一次直到8周,然后每月一次直到6个月。这种积极的时间表是必要的,因为幼猫经常从母亲那里感染蠕虫。成年室内猫:对于待在室内不狩猎的猫,每3-6个月通常就足够了。成年户外猫:由于狩猎和环境接触导致寄生虫暴露更高,可能需要每月驱虫。猫常见的蠕虫包括蛔虫、钩虫和绦虫。蠕虫感染的迹象包括粪便中可见的蠕虫、腹部膨胀、尽管食欲良好但体重下降、毛发暗淡和腹泻。切勿在猫身上使用狗驱虫药,因为有些对猫有毒。'
    },
    keywords: ['deworming', 'worms', 'parasites', 'roundworm', 'tapeworm', 'hookworm', 'intestinal']
  },
  {
    id: 'cat-flea-prevention-1',
    category: 'cat-maintenance',
    question: {
      en: 'What is the best flea prevention for cats?',
      ms: 'Apakah pencegahan kutu terbaik untuk kucing?',
      zh: '什么是猫最好的跳蚤预防方法?'
    },
    shortAnswer: {
      en: 'Effective flea prevention includes monthly topical treatments (spot-on), oral medications, or flea collars. Popular options include Frontline, Revolution, Advantage, and Seresto collars. Choose products specifically for cats - dog flea products can be fatal to cats.',
      ms: 'Pencegahan kutu yang berkesan termasuk rawatan topikal bulanan (spot-on), ubat oral, atau kolar kutu. Pilihan popular termasuk Frontline, Revolution, Advantage, dan kolar Seresto. Pilih produk khusus untuk kucing.',
      zh: '有效的跳蚤预防包括每月局部治疗(滴剂)、口服药物或跳蚤项圈。流行的选择包括Frontline、Revolution、Advantage和Seresto项圈。选择专门为猫设计的产品 - 狗跳蚤产品对猫可能致命。'
    },
    fullAnswer: {
      en: 'Flea prevention is essential year-round in tropical climates like Malaysia. Options include: Topical spot-on treatments: Applied monthly to the back of the neck. Popular brands include Frontline Plus, Revolution (also prevents heartworm and ear mites), and Advantage II. Oral medications: Given monthly, these kill fleas when they bite. Examples include Comfortis and Capstar (for immediate relief). Flea collars: Seresto collars provide 8-month protection and are convenient for cats that resist monthly treatments. CRITICAL WARNING: Never use dog flea products on cats! Permethrin, found in many dog products, is highly toxic to cats and can be fatal. Always read labels carefully. When choosing a product, consider: your cat\'s age and weight, whether they go outdoors, other pets in the household (especially dogs with permethrin products), and ease of application. If you find fleas, treat all pets in the home and the environment. Wash bedding in hot water, vacuum thoroughly, and consider environmental flea sprays. Prevention is much easier than treating an infestation.',
      ms: 'Pencegahan kutu adalah penting sepanjang tahun di iklim tropika seperti Malaysia. Pilihan termasuk: Rawatan topikal spot-on: Digunakan setiap bulan di belakang leher. Jenama popular termasuk Frontline Plus, Revolution, dan Advantage II. Ubat oral: Diberikan setiap bulan. Kolar kutu: Kolar Seresto memberikan perlindungan 8 bulan. AMARAN KRITIKAL: Jangan sekali-kali menggunakan produk kutu anjing pada kucing! Permethrin sangat toksik kepada kucing dan boleh membawa maut. Jika anda menemui kutu, rawat semua haiwan peliharaan di rumah dan persekitaran. Basuh tempat tidur dalam air panas dan sedut habuk dengan teliti.',
      zh: '在马来西亚等热带气候中,全年跳蚤预防至关重要。选择包括:局部滴剂治疗:每月涂抹在颈后。流行品牌包括Frontline Plus、Revolution(还可预防心丝虫和耳螨)和Advantage II。口服药物:每月服用,跳蚤叮咬时杀死它们。例如Comfortis和Capstar(用于即时缓解)。跳蚤项圈:Seresto项圈提供8个月的保护。严重警告:切勿在猫身上使用狗跳蚤产品!许多狗产品中的氯菊酯对猫有剧毒,可能致命。选择产品时,请考虑您的猫的年龄和体重、是否外出、家中其他宠物以及使用方便性。如果发现跳蚤,请治疗家中所有宠物和环境。用热水清洗床上用品,彻底吸尘。'
    },
    keywords: ['flea', 'prevention', 'Frontline', 'Revolution', 'Advantage', 'Seresto', 'spot-on', 'collar']
  },
  {
    id: 'cat-dental-cleaning-1',
    category: 'cat-maintenance',
    question: {
      en: 'How do I maintain my cat\'s dental health?',
      ms: 'Bagaimana saya menjaga kesihatan gigi kucing saya?',
      zh: '如何保持我的猫的牙齿健康?'
    },
    shortAnswer: {
      en: 'Brush your cat\'s teeth daily with cat-specific toothpaste, provide dental treats and toys, feed dental diet kibble, and schedule professional cleanings. Signs of dental problems include bad breath, drooling, difficulty eating, and red gums.',
      ms: 'Gosok gigi kucing anda setiap hari dengan ubat gigi khusus kucing, berikan snek dan mainan pergigian, beri makanan kibble pergigian, dan jadualkan pembersihan profesional.',
      zh: '每天用猫专用牙膏刷牙,提供洁牙零食和玩具,喂食洁牙干粮,并安排专业清洁。牙齿问题的迹象包括口臭、流口水、进食困难和牙龈发红。'
    },
    fullAnswer: {
      en: 'Dental disease affects over 70% of cats by age 3, making dental care essential. Home care routine: Daily brushing is ideal - use a cat-specific toothbrush (finger brushes work well) and enzymatic toothpaste made for cats (never use human toothpaste). Start slowly, first letting your cat taste the toothpaste, then gradually introducing brushing. Dental treats and toys can help reduce plaque - look for VOHC (Veterinary Oral Health Council) approved products. Dental diets with larger kibble sizes help mechanically clean teeth. Water additives can reduce bacteria but shouldn\'t replace brushing. Professional care: Annual dental checkups are recommended. Professional cleaning under anesthesia may be needed every 1-2 years, depending on your cat\'s dental health. Warning signs to watch for: persistent bad breath (halitosis), red, swollen, or bleeding gums, visible tartar (yellow/brown buildup), difficulty eating or dropping food, pawing at mouth, drooling, and loose or missing teeth. Early intervention prevents painful infections and tooth loss.',
      ms: 'Penyakit pergigian menjejaskan lebih 70% kucing menjelang usia 3 tahun. Rutin penjagaan di rumah: Penggosok gigi setiap hari adalah ideal - gunakan berus gigi khusus kucing dan ubat gigi enzimatik untuk kucing. Snek dan mainan pergigian boleh membantu mengurangkan plak. Diet pergigian dengan saiz kibble yang lebih besar membantu membersihkan gigi secara mekanikal. Penjagaan profesional: Pemeriksaan pergigian tahunan disyorkan. Pembersihan profesional di bawah bius mungkin diperlukan setiap 1-2 tahun. Tanda-tanda amaran: nafas busuk yang berterusan, gusi merah atau bengkak, tar yang kelihatan, kesukaran makan, dan gigi longgar.',
      zh: '牙科疾病在3岁时影响超过70%的猫,使牙齿护理变得至关重要。家庭护理程序:每天刷牙是理想的 - 使用猫专用牙刷(指套刷效果很好)和猫用酶牙膏(切勿使用人用牙膏)。慢慢开始,首先让您的猫品尝牙膏,然后逐渐引入刷牙。洁牙零食和玩具可以帮助减少牙菌斑 - 寻找VOHC(兽医口腔健康委员会)认可的产品。较大颗粒的洁牙干粮有助于机械清洁牙齿。专业护理:建议每年进行牙科检查。根据您的猫的牙齿健康状况,可能每1-2年需要在麻醉下进行专业清洁。需要注意的警告信号:持续口臭、牙龈红肿或出血、可见牙垢(黄色/棕色堆积)、进食困难、用爪子抓嘴和流口水。'
    },
    keywords: ['dental', 'teeth', 'brushing', 'tartar', 'plaque', 'gums', 'oral', 'cleaning']
  },
  {
    id: 'cat-nail-trimming-1',
    category: 'cat-maintenance',
    question: {
      en: 'How often should I trim my cat\'s nails?',
      ms: 'Berapa kerap saya perlu memotong kuku kucing saya?',
      zh: '我应该多久给猫剪一次指甲?'
    },
    shortAnswer: {
      en: 'Trim your cat\'s nails every 2-4 weeks. Indoor cats need more frequent trims as their nails don\'t wear down naturally. Use cat nail clippers, trim only the clear tip, and avoid the pink quick. Scratching posts help maintain nail health.',
      ms: 'Potong kuku kucing anda setiap 2-4 minggu. Kucing dalam rumah memerlukan potongan lebih kerap. Gunakan pemotong kuku kucing, potong hanya hujung jernih, dan elakkan bahagian merah jambu.',
      zh: '每2-4周修剪一次猫的指甲。室内猫需要更频繁修剪,因为它们的指甲不会自然磨损。使用猫指甲剪,只剪透明的尖端,避开粉红色的血线。猫抓板有助于保持指甲健康。'
    },
    fullAnswer: {
      en: 'Regular nail trimming prevents painful overgrown nails and protects your furniture and skin. Trimming frequency: Most cats need nail trims every 2-4 weeks. Indoor cats need more frequent trims since their nails don\'t wear down from outdoor activity. Senior cats may need more frequent trims as they become less active. Check front and back paws - front claws often grow faster. How to trim safely: Use proper cat nail clippers (scissor-type or guillotine-style). Have styptic powder nearby in case you cut too short. Gently press the paw pad to extend the claws. Locate the pink quick (blood vessel) - only trim the clear/white tip. Trim at a 45-degree angle. Start with just one or two nails if your cat is nervous. If your cat is extremely resistant, consider professional grooming or ask your vet for help. Never declaw - it\'s a painful amputation that\'s illegal in many countries. Provide scratching posts and pads to help naturally maintain claws and satisfy your cat\'s instinct to scratch.',
      ms: 'Pemotongan kuku secara tetap mencegah kuku yang terlalu panjang dan melindungi perabot dan kulit anda. Kekerapan pemotongan: Kebanyakan kucing memerlukan pemotongan kuku setiap 2-4 minggu. Kucing dalam rumah memerlukan pemotongan lebih kerap. Bagaimana memotong dengan selamat: Gunakan pemotong kuku kucing yang betul. Sediakan serbuk styptik berdekatan. Tekan pad kaki dengan lembut untuk memanjangkan kuku. Cari bahagian merah jambu (salur darah) - hanya potong hujung jernih. Jangan sekali-kali buang kuku - ia adalah amputasi yang menyakitkan. Sediakan tiang menggaruk untuk membantu mengekalkan kuku secara semula jadi.',
      zh: '定期修剪指甲可防止指甲过度生长疼痛,并保护您的家具和皮肤。修剪频率:大多数猫需要每2-4周修剪一次指甲。室内猫需要更频繁修剪,因为它们的指甲不会因户外活动而磨损。老年猫可能需要更频繁修剪。如何安全修剪:使用适当的猫指甲剪(剪刀式或铡刀式)。准备止血粉以防剪得太短。轻轻按压爪垫以伸出爪子。找到粉红色的血线(血管) - 只剪透明/白色的尖端。以45度角修剪。如果您的猫非常抗拒,请考虑专业美容或请兽医帮助。永远不要去爪 - 这是一种痛苦的截肢手术,在许多国家是非法的。提供猫抓板和垫子来帮助自然保持爪子。'
    },
    keywords: ['nail', 'claw', 'trimming', 'clipping', 'scratching', 'grooming', 'paw']
  },
  {
    id: 'cat-ear-cleaning-1',
    category: 'cat-maintenance',
    question: {
      en: 'How do I clean my cat\'s ears safely?',
      ms: 'Bagaimana saya membersihkan telinga kucing dengan selamat?',
      zh: '如何安全地清洁我的猫的耳朵?'
    },
    shortAnswer: {
      en: 'Clean your cat\'s ears monthly with vet-approved ear cleaner. Apply solution to a cotton ball, gently wipe the outer ear, and never insert anything into the ear canal. Healthy ears are pink with minimal wax. See a vet if you notice discharge or odor.',
      ms: 'Bersihkan telinga kucing anda setiap bulan dengan pembersih telinga yang diluluskan veterinar. Sapukan larutan pada bebola kapas, lap telinga luar dengan lembut, dan jangan masukkan apa-apa ke dalam saluran telinga.',
      zh: '每月用兽医认可的耳朵清洁剂清洁猫的耳朵。将溶液涂在棉球上,轻轻擦拭外耳,切勿将任何东西插入耳道。健康的耳朵是粉红色的,耳垢很少。如果发现分泌物或异味,请看兽医。'
    },
    fullAnswer: {
      en: 'Regular ear cleaning helps prevent infections but should be done carefully. When to clean: Most cats only need ear cleaning once a month or when visibly dirty. Over-cleaning can cause irritation. How to clean safely: Use a vet-approved ear cleaning solution - never use water, alcohol, or hydrogen peroxide. Apply the solution to a cotton ball or gauze (never cotton swabs). Gently lift the ear flap and wipe the visible part of the outer ear. Never insert anything into the ear canal - this can cause damage. Let your cat shake their head to remove excess cleaner. Reward with treats to create positive associations. What healthy ears look like: Pink inner ear with minimal light brown wax, no odor, no redness or swelling. Warning signs requiring vet attention: Dark brown or black discharge (may indicate mites), yellow or green discharge (infection), strong odor, excessive scratching or head shaking, redness, swelling, or pain, and hair loss around ears. Cats prone to ear problems may need more frequent cleaning - follow your vet\'s recommendations.',
      ms: 'Pembersihan telinga secara tetap membantu mencegah jangkitan tetapi perlu dilakukan dengan berhati-hati. Bila untuk membersihkan: Kebanyakan kucing hanya memerlukan pembersihan telinga sekali sebulan. Bagaimana membersihkan dengan selamat: Gunakan larutan pembersihan telinga yang diluluskan veterinar - jangan gunakan air, alkohol, atau hidrogen peroksida. Sapukan larutan pada bebola kapas. Angkat penutup telinga dengan lembut dan lap bahagian luar telinga yang kelihatan. Jangan masukkan apa-apa ke dalam saluran telinga. Tanda-tanda amaran: Lelehan coklat gelap atau hitam, lelehan kuning atau hijau, bau kuat, dan garu berlebihan.',
      zh: '定期清洁耳朵有助于预防感染,但应谨慎进行。何时清洁:大多数猫每月只需清洁一次耳朵。过度清洁可能导致刺激。如何安全清洁:使用兽医认可的耳朵清洁溶液 - 切勿使用水、酒精或过氧化氢。将溶液涂在棉球或纱布上(切勿使用棉签)。轻轻抬起耳瓣,擦拭外耳的可见部分。切勿将任何东西插入耳道 - 这可能造成损伤。健康耳朵的样子:粉红色内耳,浅棕色耳垢很少,无异味,无发红或肿胀。需要看兽医的警告信号:深棕色或黑色分泌物(可能是螨虫)、黄色或绿色分泌物(感染)、强烈异味、过度抓挠或摇头、发红肿胀或疼痛。'
    },
    keywords: ['ear', 'cleaning', 'wax', 'discharge', 'mites', 'infection', 'hygiene']
  },
  {
    id: 'cat-grooming-1',
    category: 'cat-maintenance',
    question: {
      en: 'How often should I groom my cat?',
      ms: 'Berapa kerap saya perlu menjaga bulu kucing saya?',
      zh: '我应该多久给猫梳理一次毛发?'
    },
    shortAnswer: {
      en: 'Short-haired cats need brushing 1-2 times per week, while long-haired cats need daily brushing to prevent mats. Regular grooming reduces shedding, prevents hairballs, and helps you spot skin issues early. Most cats don\'t need baths unless medically necessary.',
      ms: 'Kucing berbulu pendek perlu disikat 1-2 kali seminggu, manakala kucing berbulu panjang perlu disikat setiap hari untuk mencegah kusut. Penjagaan bulu yang tetap mengurangkan keguguran bulu dan mencegah hairball.',
      zh: '短毛猫需要每周刷毛1-2次,而长毛猫需要每天刷毛以防止毛发打结。定期梳理可减少脱毛,预防毛球,并帮助您及早发现皮肤问题。大多数猫除非医学上必要,否则不需要洗澡。'
    },
    fullAnswer: {
      en: 'Regular grooming keeps your cat healthy and strengthens your bond. Brushing frequency by coat type: Short-haired cats: 1-2 times per week with a rubber brush or bristle brush. Medium-haired cats: 2-3 times per week with a slicker brush. Long-haired cats (Persian, Maine Coon): Daily brushing with a wide-toothed comb and slicker brush to prevent painful mats. Grooming benefits: Reduces shedding and hairballs, distributes natural oils for a healthy coat, allows you to check for parasites, lumps, or skin issues, provides bonding time, and keeps your home cleaner. Bathing: Most cats don\'t need regular baths as they groom themselves. Bathe only when necessary (very dirty, medical reasons, or flea treatment). Use cat-specific shampoo and lukewarm water. Other grooming tasks: Eye cleaning - gently wipe discharge with a damp cloth. Anal gland check - some cats may need manual expression by a vet. If your cat suddenly stops grooming, it may indicate illness or pain - consult your vet.',
      ms: 'Penjagaan bulu secara tetap memastikan kucing anda sihat dan mengukuhkan ikatan anda. Kekerapan menyikat mengikut jenis bulu: Kucing berbulu pendek: 1-2 kali seminggu. Kucing berbulu sederhana: 2-3 kali seminggu. Kucing berbulu panjang: Menyikat setiap hari untuk mencegah kusut yang menyakitkan. Faedah penjagaan bulu: Mengurangkan keguguran bulu dan hairball, mengedarkan minyak semula jadi, membolehkan anda memeriksa parasit atau masalah kulit, dan menyediakan masa ikatan. Mandian: Kebanyakan kucing tidak memerlukan mandian tetap. Mandi hanya apabila perlu. Jika kucing anda tiba-tiba berhenti menjilat bulu, ia mungkin menunjukkan penyakit - rujuk veterinar anda.',
      zh: '定期梳理可保持您的猫健康并加强您们之间的联系。按毛发类型刷毛频率:短毛猫:每周1-2次,使用橡胶刷或猪鬃刷。中毛猫:每周2-3次,使用针梳。长毛猫(波斯猫、缅因猫):每天刷毛,使用宽齿梳和针梳以防止痛苦的毛结。梳理的好处:减少脱毛和毛球,分布天然油脂使毛发健康,让您检查寄生虫、肿块或皮肤问题,提供亲密时间,保持家居清洁。洗澡:大多数猫不需要定期洗澡,因为它们会自我清洁。只在必要时洗澡。如果您的猫突然停止自我清洁,可能表示生病或疼痛 - 请咨询您的兽医。'
    },
    keywords: ['grooming', 'brushing', 'coat', 'fur', 'shedding', 'mats', 'bathing', 'hairball']
  },
  {
    id: 'cat-weight-management-1',
    category: 'cat-maintenance',
    question: {
      en: 'How do I know if my cat is overweight and how can I help them lose weight?',
      ms: 'Bagaimana saya tahu jika kucing saya berlebihan berat badan dan bagaimana saya boleh membantu mereka menurunkan berat badan?',
      zh: '如何判断我的猫是否超重,如何帮助它们减肥?'
    },
    shortAnswer: {
      en: 'Check if you can feel ribs without pressing hard and if there\'s a visible waist when viewed from above. Overweight cats need portion control, scheduled feeding instead of free-feeding, increased play, and possibly prescription weight loss food. Aim for 1-2% weight loss per week.',
      ms: 'Periksa sama ada anda boleh merasa tulang rusuk tanpa menekan kuat dan sama ada ada pinggang yang kelihatan dari atas. Kucing yang berlebihan berat badan memerlukan kawalan bahagian dan bermain lebih banyak.',
      zh: '检查是否可以不用力按压就能摸到肋骨,从上方看是否有可见的腰部。超重的猫需要控制分量、定时喂食而不是自由采食、增加玩耍,可能需要处方减肥食品。目标是每周减重1-2%。'
    },
    fullAnswer: {
      en: 'Obesity affects over 50% of cats and leads to diabetes, joint problems, and shorter lifespan. Body condition assessment: You should be able to feel ribs without pressing hard (but not see them prominently). There should be a visible waist when viewed from above. The belly shouldn\'t hang low or swing when walking. Weight loss strategies: Consult your vet first - underlying health issues may need addressing. Calculate proper calorie intake - most indoor cats need 20-25 calories per pound of ideal body weight. Switch from free-feeding to scheduled meals (2-3 times daily). Use a measuring cup for accurate portions. Consider prescription weight loss diets (higher protein, lower calorie). Increase activity with interactive toys, puzzle feeders, and play sessions (15-20 minutes twice daily). Use treats sparingly - break them into smaller pieces or use low-calorie options. Safe weight loss rate: Aim for 1-2% body weight loss per week. Rapid weight loss can cause fatty liver disease (hepatic lipidosis), which is life-threatening in cats. Monitor progress with monthly weigh-ins.',
      ms: 'Obesiti menjejaskan lebih 50% kucing dan membawa kepada diabetes, masalah sendi, dan jangka hayat yang lebih pendek. Penilaian keadaan badan: Anda sepatutnya boleh merasa tulang rusuk tanpa menekan kuat. Sepatutnya ada pinggang yang kelihatan dari atas. Perut tidak sepatutnya tergantung rendah. Strategi penurunan berat badan: Rujuk veterinar anda terlebih dahulu. Kira pengambilan kalori yang betul. Tukar dari makan bebas kepada makan berjadual. Pertimbangkan diet penurunan berat badan preskripsi. Tingkatkan aktiviti dengan mainan interaktif. Kadar penurunan berat badan yang selamat: Sasarkan 1-2% penurunan berat badan seminggu. Penurunan berat badan yang cepat boleh menyebabkan penyakit hati berlemak.',
      zh: '肥胖影响超过50%的猫,导致糖尿病、关节问题和寿命缩短。体况评估:您应该能够不用力按压就能摸到肋骨(但不会明显看到)。从上方看应该有可见的腰部。腹部走路时不应下垂或摆动。减肥策略:首先咨询您的兽医 - 潜在的健康问题可能需要解决。计算适当的卡路里摄入量 - 大多数室内猫每磅理想体重需要20-25卡路里。从自由采食改为定时喂食(每天2-3次)。使用量杯准确分量。考虑处方减肥饮食(高蛋白、低卡路里)。用互动玩具、益智喂食器和玩耍时间增加活动量。安全的减肥速度:目标是每周减少体重的1-2%。快速减肥可能导致脂肪肝病,这对猫来说是致命的。'
    },
    keywords: ['weight', 'overweight', 'obese', 'diet', 'calories', 'portion', 'exercise', 'fat']
  },
  {
    id: 'cat-senior-screening-1',
    category: 'cat-maintenance',
    question: {
      en: 'What health screenings does my senior cat need?',
      ms: 'Apakah pemeriksaan kesihatan yang diperlukan kucing tua saya?',
      zh: '我的老年猫需要什么健康检查?'
    },
    shortAnswer: {
      en: 'Senior cats (7+ years) need twice-yearly vet visits with blood work, urinalysis, blood pressure checks, and thyroid testing. These detect common age-related issues like kidney disease, diabetes, hyperthyroidism, and cancer early when treatment is most effective.',
      ms: 'Kucing tua (7+ tahun) memerlukan lawatan veterinar dua kali setahun dengan ujian darah, urinalisis, pemeriksaan tekanan darah, dan ujian tiroid untuk mengesan masalah berkaitan usia seperti penyakit buah pinggang.',
      zh: '老年猫(7岁以上)需要每年两次兽医检查,包括血液检查、尿液分析、血压检查和甲状腺测试。这些检查可以及早发现常见的年龄相关问题,如肾脏疾病、糖尿病、甲状腺功能亢进和癌症。'
    },
    fullAnswer: {
      en: 'Cats are considered senior at 7 years and geriatric at 11+ years. Regular screenings are crucial because cats hide illness well. Recommended senior cat screenings: Bi-annual vet visits (every 6 months) vs annual for younger cats. Complete blood count (CBC) to detect anemia, infection, and blood disorders. Blood chemistry panel to assess kidney and liver function, blood sugar, and electrolytes. Urinalysis to detect kidney disease, diabetes, and urinary tract infections early. Thyroid hormone test (T4) - hyperthyroidism is very common in senior cats. Blood pressure measurement - hypertension can damage organs. Dental examination - dental disease is painful and affects overall health. Weight monitoring - unexplained weight loss is often the first sign of illness. Physical examination including joint mobility assessment. Common conditions in senior cats: Chronic kidney disease (affects 30% of cats over 10), hyperthyroidism, diabetes, arthritis, heart disease, cancer, cognitive dysfunction, and dental disease. Early detection through regular screening allows for early intervention and better quality of life.',
      ms: 'Kucing dianggap tua pada usia 7 tahun dan geriatrik pada 11+ tahun. Pemeriksaan tetap adalah penting kerana kucing pandai menyembunyikan penyakit. Pemeriksaan kucing tua yang disyorkan: Lawatan veterinar dua kali setahun. Kiraan darah lengkap untuk mengesan anemia dan jangkitan. Panel kimia darah untuk menilai fungsi buah pinggang dan hati. Urinalisis untuk mengesan penyakit buah pinggang dan diabetes awal. Ujian hormon tiroid. Pengukuran tekanan darah. Pemeriksaan pergigian. Pemantauan berat badan. Keadaan biasa pada kucing tua: Penyakit buah pinggang kronik, hipertiroidisme, diabetes, artritis, penyakit jantung, dan kanser.',
      zh: '猫在7岁时被视为老年,11岁以上为高龄。定期检查至关重要,因为猫善于隐藏疾病。推荐的老年猫检查:每年两次兽医检查(每6个月)。全血细胞计数(CBC)检测贫血、感染和血液疾病。血液化学检查评估肾脏和肝脏功能、血糖和电解质。尿液分析及早发现肾脏疾病、糖尿病和尿路感染。甲状腺激素测试(T4) - 甲状腺功能亢进在老年猫中非常常见。血压测量 - 高血压会损害器官。牙科检查 - 牙科疾病很痛苦并影响整体健康。体重监测 - 不明原因的体重下降通常是疾病的第一个迹象。通过定期检查及早发现可以进行早期干预,提高生活质量。'
    },
    keywords: ['senior', 'elderly', 'screening', 'checkup', 'blood test', 'kidney', 'thyroid', 'geriatric']
  },
  {
    id: 'cat-microchipping-1',
    category: 'cat-maintenance',
    question: {
      en: 'Should I microchip my cat?',
      ms: 'Patutkah saya memasang cip mikro pada kucing saya?',
      zh: '我应该给我的猫植入微芯片吗?'
    },
    shortAnswer: {
      en: 'Yes, microchipping is highly recommended. It\'s a permanent ID that can\'t be lost like collars. The rice-sized chip is injected under the skin quickly and painlessly. Register your contact details and keep them updated for the best chance of reunion if your cat gets lost.',
      ms: 'Ya, cip mikro sangat disyorkan. Ia adalah ID kekal yang tidak boleh hilang seperti kolar. Cip bersaiz beras disuntik di bawah kulit dengan cepat dan tanpa rasa sakit.',
      zh: '是的,强烈建议植入微芯片。这是一种永久性身份证明,不会像项圈那样丢失。米粒大小的芯片快速无痛地注射在皮肤下。注册您的联系方式并保持更新,以便在猫走失时有最好的重聚机会。'
    },
    fullAnswer: {
      en: 'Microchipping is one of the most important things you can do to protect your cat. What is a microchip? A tiny electronic chip (about the size of a grain of rice) containing a unique ID number. Injected under the skin between the shoulder blades. Quick procedure that can be done during a regular vet visit - no anesthesia needed. Lasts the lifetime of your cat with no batteries or maintenance. Why microchip? Collars and tags can fall off or be removed. Indoor cats can escape through open doors or windows. Microchipping greatly increases the chance of reunion - studies show microchipped cats are over 20 times more likely to be returned home. Many shelters and vets scan all found animals for chips. How it works: When scanned, the chip transmits the ID number. This number is linked to your contact information in a database. Important: Registration is essential - the chip is useless without your updated contact details. Keep your information current if you move or change phone numbers. Cost is typically RM50-100 and is a one-time expense. Some countries require microchipping by law.',
      ms: 'Memasang cip mikro adalah salah satu perkara paling penting yang boleh anda lakukan untuk melindungi kucing anda. Apa itu cip mikro? Cip elektronik kecil (kira-kira saiz sebiji beras) yang mengandungi nombor ID unik. Disuntik di bawah kulit antara bilah bahu. Prosedur cepat yang boleh dilakukan semasa lawatan veterinar biasa - tidak perlu bius. Bertahan sepanjang hayat kucing anda. Mengapa cip mikro? Kolar boleh jatuh atau ditanggalkan. Kucing dalam rumah boleh melarikan diri. Kucing bercip mikro lebih berkemungkinan dipulangkan ke rumah. Penting: Pendaftaran adalah penting - cip tidak berguna tanpa maklumat hubungan anda yang dikemas kini.',
      zh: '植入微芯片是保护您的猫可以做的最重要的事情之一。什么是微芯片?一个包含唯一ID号码的微小电子芯片(大约米粒大小)。注射在肩胛骨之间的皮肤下。快速程序,可以在常规兽医检查期间完成 - 不需要麻醉。持续猫的一生,无需电池或维护。为什么要植入微芯片?项圈可能脱落或被取下。室内猫可能通过开着的门窗逃跑。植入微芯片大大增加了重聚的机会 - 研究表明植入微芯片的猫被送回家的可能性高出20倍以上。重要提示:注册至关重要 - 没有您更新的联系方式,芯片就毫无用处。如果您搬家或更换电话号码,请保持信息更新。'
    },
    keywords: ['microchip', 'ID', 'identification', 'lost', 'found', 'registration', 'permanent']
  },
  {
    id: 'cat-spay-neuter-1',
    category: 'cat-maintenance',
    question: {
      en: 'When should I spay or neuter my cat?',
      ms: 'Bila saya patut memandulkan kucing saya?',
      zh: '我应该什么时候给猫做绝育手术?'
    },
    shortAnswer: {
      en: 'Cats can be spayed/neutered as early as 8 weeks old or 2 pounds weight. Most vets recommend 4-6 months of age, before the first heat cycle. Benefits include preventing unwanted litters, reducing roaming behavior, eliminating heat cycles, and lowering cancer risks.',
      ms: 'Kucing boleh dimandulkan seawal 8 minggu atau 2 paun berat badan. Kebanyakan veterinar mengesyorkan usia 4-6 bulan, sebelum kitaran birahi pertama.',
      zh: '猫可以在8周大或2磅重时进行绝育。大多数兽医建议在4-6个月大时进行,在第一次发情周期之前。好处包括防止意外怀孕、减少漫游行为、消除发情周期和降低癌症风险。'
    },
    fullAnswer: {
      en: 'Spaying (females) and neutering (males) is one of the most responsible decisions you can make as a cat owner. Recommended timing: As early as 8 weeks old and 2 pounds body weight (common practice at shelters). Most vets recommend 4-6 months of age. Ideally before the first heat cycle (around 5-6 months) for maximum health benefits. Benefits for female cats: Eliminates heat cycles (yowling, restlessness). Prevents uterine infections (pyometra) - potentially fatal. Greatly reduces risk of mammary cancer (especially if done before first heat). Prevents unwanted pregnancies. Benefits for male cats: Reduces or eliminates spraying/marking behavior. Decreases roaming and fighting (which can lead to injuries and disease transmission). Eliminates risk of testicular cancer. Reduces aggressive behavior. The procedure: Same-day surgery with quick recovery (most cats are back to normal in 24-48 hours). Modern anesthesia and pain management make it very safe. Cost varies but many low-cost spay/neuter programs exist. Some misconceptions: Cats don\'t need to have one litter first. Neutering doesn\'t cause weight gain directly - it may slightly decrease metabolism, so adjust food portions accordingly.',
      ms: 'Memandulkan adalah salah satu keputusan paling bertanggungjawab yang boleh anda buat sebagai pemilik kucing. Masa yang disyorkan: Seawal 8 minggu dan 2 paun berat badan. Kebanyakan veterinar mengesyorkan usia 4-6 bulan. Faedah untuk kucing betina: Menghapuskan kitaran birahi. Mencegah jangkitan rahim. Mengurangkan risiko kanser mamari. Mencegah kehamilan yang tidak diingini. Faedah untuk kucing jantan: Mengurangkan tingkah laku menyembur. Mengurangkan merayau dan bergaduh. Menghapuskan risiko kanser testis. Prosedur: Pembedahan hari yang sama dengan pemulihan cepat. Mitos: Kucing tidak perlu melahirkan satu kali dahulu.',
      zh: '绝育是作为猫主人可以做出的最负责任的决定之一。建议时间:早至8周大和2磅体重。大多数兽医建议4-6个月大。理想情况下在第一次发情周期之前(约5-6个月)以获得最大健康益处。对母猫的好处:消除发情周期(嚎叫、不安)。预防子宫感染(子宫蓄脓) - 可能致命。大大降低乳腺癌风险。防止意外怀孕。对公猫的好处:减少或消除喷尿/标记行为。减少漫游和打架。消除睾丸癌风险。减少攻击性行为。程序:当天手术,恢复快(大多数猫在24-48小时内恢复正常)。一些误解:猫不需要先生一窝。绝育不会直接导致体重增加 - 它可能会略微降低新陈代谢,因此相应调整食物分量。'
    },
    keywords: ['spay', 'neuter', 'sterilization', 'surgery', 'heat', 'breeding', 'fixed']
  },
  {
    id: 'cat-hairball-prevention-1',
    category: 'cat-maintenance',
    question: {
      en: 'How can I prevent hairballs in my cat?',
      ms: 'Bagaimana saya boleh mencegah hairball pada kucing saya?',
      zh: '如何预防我的猫出现毛球?'
    },
    shortAnswer: {
      en: 'Prevent hairballs by brushing regularly to remove loose fur, feeding hairball control food or adding fiber to diet, using hairball remedy pastes, ensuring adequate hydration, and keeping your cat active. Frequent vomiting of hairballs may indicate underlying issues.',
      ms: 'Cegah hairball dengan menyikat secara tetap, memberi makanan kawalan hairball, menggunakan pes hairball, memastikan penghidratan yang mencukupi, dan memastikan kucing anda aktif.',
      zh: '通过定期刷毛去除松散的毛发、喂食控制毛球的食物或在饮食中添加纤维、使用毛球护理膏、确保充足的水分摄入和保持猫活跃来预防毛球。频繁呕吐毛球可能表明潜在问题。'
    },
    fullAnswer: {
      en: 'Hairballs form when cats ingest fur during grooming, and the fur accumulates in the stomach. While occasional hairballs are normal, frequent ones need attention. Prevention strategies: Regular brushing is the most effective prevention - daily for long-haired cats, 2-3 times weekly for short-haired cats. Use appropriate brushes for your cat\'s coat type. Hairball control diet contains added fiber to help move fur through the digestive system. Hairball remedy pastes (like Laxatone) can be given 2-3 times weekly to help pass fur. Increase water intake - provide fresh water daily, consider a cat water fountain, or add water to food. Dietary fiber from pumpkin puree (1 teaspoon) or psyllium husk can help. Keep your cat active - exercise promotes healthy digestion. When to see a vet: Hairball vomiting more than 1-2 times per month. Retching without producing a hairball. Constipation or diarrhea. Loss of appetite or lethargy. These could indicate intestinal blockage (emergency), inflammatory bowel disease, or other gastrointestinal issues requiring veterinary attention.',
      ms: 'Hairball terbentuk apabila kucing menelan bulu semasa menjilat, dan bulu terkumpul dalam perut. Walaupun hairball sekali-sekala adalah normal, yang kerap memerlukan perhatian. Strategi pencegahan: Menyikat secara tetap adalah pencegahan paling berkesan. Diet kawalan hairball mengandungi serat tambahan. Pes hairball boleh diberikan 2-3 kali seminggu. Tingkatkan pengambilan air. Serat diet dari labu tulen boleh membantu. Bila berjumpa veterinar: Muntah hairball lebih dari 1-2 kali sebulan. Rasa loya tanpa menghasilkan hairball. Sembelit atau cirit-birit.',
      zh: '当猫在梳理毛发时吞入毛发,毛发在胃中积累时就会形成毛球。虽然偶尔出现毛球是正常的,但频繁出现需要注意。预防策略:定期刷毛是最有效的预防方法 - 长毛猫每天刷,短毛猫每周2-3次。控制毛球的饮食含有额外的纤维,帮助毛发通过消化系统。毛球护理膏可以每周给予2-3次以帮助排出毛发。增加水分摄入 - 每天提供新鲜水,考虑使用猫饮水机。南瓜泥(1茶匙)或车前子壳的膳食纤维可以帮助。保持猫活跃 - 运动促进健康消化。何时看兽医:每月呕吐毛球超过1-2次。干呕但不产生毛球。便秘或腹泻。食欲不振或嗜睡。'
    },
    keywords: ['hairball', 'vomiting', 'grooming', 'fiber', 'brushing', 'fur', 'prevention']
  },
  {
    id: 'cat-joint-supplements-1',
    category: 'cat-maintenance',
    question: {
      en: 'Does my cat need joint supplements?',
      ms: 'Adakah kucing saya memerlukan suplemen sendi?',
      zh: '我的猫需要关节补充剂吗?'
    },
    shortAnswer: {
      en: 'Joint supplements containing glucosamine and chondroitin may benefit senior cats (7+ years), overweight cats, and those showing signs of stiffness or reduced mobility. Start early for prevention rather than waiting for visible symptoms. Consult your vet for appropriate products.',
      ms: 'Suplemen sendi yang mengandungi glukosamin dan kondroitin mungkin bermanfaat untuk kucing tua (7+ tahun), kucing berlebihan berat badan, dan yang menunjukkan tanda kekakuan.',
      zh: '含有氨基葡萄糖和软骨素的关节补充剂可能对老年猫(7岁以上)、超重猫和表现出僵硬或活动能力下降迹象的猫有益。为了预防而不是等待明显症状,应该尽早开始。请咨询您的兽医以获取适当的产品。'
    },
    fullAnswer: {
      en: 'Arthritis affects up to 90% of cats over 12 years old, but many show subtle signs that owners miss. Who benefits from joint supplements? Senior cats (7+ years) - start before obvious symptoms appear. Overweight cats - extra weight stresses joints. Cats with previous joint injuries. Large breed cats. Cats showing mobility changes (see signs below). Signs your cat may have joint issues: Reluctance to jump or jumping to lower heights. Difficulty climbing stairs. Stiffness, especially after rest. Reduced grooming (can\'t reach certain areas). Sleeping more, playing less. Irritability when touched. Common joint supplements: Glucosamine and chondroitin - support cartilage health. Omega-3 fatty acids (fish oil) - reduce inflammation. MSM (methylsulfonylmethane) - supports joint flexibility. Green-lipped mussel extract - natural anti-inflammatory. Hyaluronic acid - lubricates joints. How to give: Available as treats, powders, liquids, or capsules. Cat-specific formulations are recommended. Start low and gradually increase to full dose. Results may take 4-6 weeks to become noticeable. Always consult your vet before starting supplements, especially if your cat takes other medications.',
      ms: 'Artritis menjejaskan sehingga 90% kucing berusia lebih 12 tahun, tetapi ramai menunjukkan tanda-tanda halus yang terlepas pandang pemilik. Siapa yang mendapat manfaat daripada suplemen sendi? Kucing tua (7+ tahun). Kucing berlebihan berat badan. Kucing dengan kecederaan sendi sebelumnya. Tanda kucing anda mungkin mempunyai masalah sendi: Keengganan untuk melompat. Kesukaran menaiki tangga. Kekakuan, terutamanya selepas berehat. Kurang menjilat bulu. Lebih banyak tidur, kurang bermain. Suplemen sendi biasa: Glukosamin dan kondroitin. Asid lemak omega-3. MSM. Ekstrak kupang bibir hijau. Rujuk veterinar anda sebelum memulakan suplemen.',
      zh: '关节炎影响高达90%的12岁以上猫,但许多猫显示出主人容易忽视的微妙迹象。谁从关节补充剂中受益?老年猫(7岁以上) - 在明显症状出现之前开始。超重猫 - 额外的体重会给关节带来压力。以前有关节损伤的猫。您的猫可能有关节问题的迹象:不愿跳跃或跳到较低的高度。上楼困难。僵硬,特别是休息后。梳理减少(无法触及某些区域)。睡眠更多,玩耍更少。常见的关节补充剂:氨基葡萄糖和软骨素 - 支持软骨健康。Omega-3脂肪酸(鱼油) - 减少炎症。MSM - 支持关节灵活性。在开始补充剂之前,请咨询您的兽医。'
    },
    keywords: ['joint', 'arthritis', 'glucosamine', 'chondroitin', 'mobility', 'stiffness', 'supplement', 'senior']
  },
  {
    id: 'cat-nutrition-1',
    category: 'cat-maintenance',
    question: {
      en: 'What should I feed my cat for optimal health?',
      ms: 'Apa yang patut saya beri makan kucing saya untuk kesihatan optimum?',
      zh: '我应该给猫喂什么食物以保持最佳健康?'
    },
    shortAnswer: {
      en: 'Cats need high-quality protein as obligate carnivores. Feed age-appropriate food (kitten, adult, senior) with meat as the first ingredient. Wet food provides hydration benefits. Avoid feeding only dry food, and never give toxic foods like onion, garlic, grapes, or chocolate.',
      ms: 'Kucing memerlukan protein berkualiti tinggi sebagai karnivor wajib. Beri makanan yang sesuai dengan usia dengan daging sebagai bahan pertama. Makanan basah memberikan manfaat penghidratan.',
      zh: '作为严格的肉食动物,猫需要高质量的蛋白质。喂食适合年龄的食物(幼猫、成年、老年),肉类作为第一成分。湿粮提供水分补充的好处。避免只喂干粮,永远不要给洋葱、大蒜、葡萄或巧克力等有毒食物。'
    },
    fullAnswer: {
      en: 'Cats are obligate carnivores and have unique nutritional requirements. Essential nutrition guidelines: High-quality animal protein should be the primary ingredient - look for specific meats (chicken, fish, beef) as the first ingredient, not \"meat by-products.\" Taurine is essential - cats cannot produce this amino acid and need it from food. Wet food is beneficial - provides hydration (cats have low thirst drive), often higher in protein and lower in carbs. Dry food is convenient but shouldn\'t be the only food source. Age-appropriate formulas: Kitten food (higher calories, protein, and nutrients for growth). Adult maintenance (balanced for typical needs). Senior formulas (adjusted for aging metabolism and health concerns). Feeding guidelines: Follow package recommendations based on weight, but adjust based on body condition. Don\'t free-feed (leave food out all day) - scheduled meals are healthier. Fresh water should always be available. Toxic foods to avoid: Onions and garlic (damage red blood cells). Grapes and raisins (kidney failure). Chocolate and caffeine (heart and nervous system toxicity). Alcohol, xylitol, and raw eggs. Some cats have food sensitivities - consult your vet if you notice digestive issues or skin problems.',
      ms: 'Kucing adalah karnivor wajib dan mempunyai keperluan pemakanan yang unik. Garis panduan pemakanan penting: Protein haiwan berkualiti tinggi harus menjadi bahan utama. Taurin adalah penting - kucing tidak boleh menghasilkan asid amino ini. Makanan basah bermanfaat - memberikan penghidratan. Makanan kering adalah mudah tetapi tidak sepatutnya satu-satunya sumber makanan. Formula mengikut usia: Makanan anak kucing, penyelenggaraan dewasa, formula senior. Makanan toksik yang perlu dielakkan: Bawang dan bawang putih, anggur, coklat, dan alkohol. Sesetengah kucing mempunyai sensitiviti makanan - rujuk veterinar anda.',
      zh: '猫是严格的肉食动物,有独特的营养需求。基本营养指南:高质量的动物蛋白应该是主要成分 - 寻找特定肉类(鸡肉、鱼、牛肉)作为第一成分,而不是"肉类副产品"。牛磺酸是必需的 - 猫不能产生这种氨基酸,需要从食物中获取。湿粮是有益的 - 提供水分(猫的口渴驱动力低),通常蛋白质更高,碳水化合物更低。干粮方便但不应该是唯一的食物来源。适龄配方:幼猫食品、成年维护、老年配方。需要避免的有毒食物:洋葱和大蒜(损害红细胞)、葡萄和葡萄干(肾衰竭)、巧克力和咖啡因(心脏和神经系统毒性)、酒精、木糖醇和生鸡蛋。一些猫有食物敏感性 - 如果您注意到消化问题或皮肤问题,请咨询您的兽医。'
    },
    keywords: ['food', 'nutrition', 'diet', 'protein', 'wet food', 'dry food', 'taurine', 'feeding']
  },
  {
    id: 'cat-behavior-changes-1',
    category: 'cat-maintenance',
    question: {
      en: 'When should I be concerned about changes in my cat\'s behavior?',
      ms: 'Bila saya perlu bimbang tentang perubahan tingkah laku kucing saya?',
      zh: '我应该什么时候担心我的猫的行为变化?'
    },
    shortAnswer: {
      en: 'Be concerned about sudden changes like hiding more, aggression, excessive vocalization, changes in eating/drinking habits, litter box avoidance, or reduced grooming. These often indicate pain or illness. Gradual personality changes in senior cats may signal cognitive dysfunction.',
      ms: 'Bimbang tentang perubahan mendadak seperti lebih banyak bersembunyi, agresif, vokalisasi berlebihan, perubahan tabiat makan/minum, mengelak kotak pasir, atau kurang menjilat bulu.',
      zh: '注意突然的变化,如更多躲藏、攻击性、过度叫唤、饮食习惯改变、避开猫砂盆或减少梳理。这些通常表明疼痛或疾病。老年猫的渐进性格变化可能表明认知功能障碍。'
    },
    fullAnswer: {
      en: 'Cats are masters at hiding illness, so behavior changes often signal health problems. Red flag behaviors requiring vet attention: Sudden hiding or withdrawal - cats in pain often hide. Aggression or irritability - especially if previously friendly. Excessive vocalization - particularly in senior cats (may indicate hyperthyroidism, cognitive dysfunction, or pain). Changes in appetite - eating more or less than usual. Increased thirst and urination - may indicate diabetes, kidney disease, or hyperthyroidism. Litter box changes - avoiding the box, going outside it, or changes in frequency. Reduced grooming - may indicate pain, arthritis, or illness. Over-grooming - can signal stress, allergies, or pain. Sleep pattern changes - sleeping much more or restlessness. Mobility changes - reluctance to jump, stiffness, limping. Context matters: Consider recent changes (new pet, move, schedule change) that might cause stress-related behaviors. Senior cat changes: Cognitive Dysfunction Syndrome (cat dementia) affects 28% of cats aged 11-14 and 50% of cats over 15. Signs include disorientation, changes in sleep cycles, forgetting learned behaviors, and increased vocalization. When in doubt, consult your vet - early detection of health issues improves outcomes.',
      ms: 'Kucing mahir menyembunyikan penyakit, jadi perubahan tingkah laku sering menandakan masalah kesihatan. Tingkah laku bendera merah: Bersembunyi atau menarik diri secara tiba-tiba. Agresif atau mudah marah. Vokalisasi berlebihan - terutamanya pada kucing tua. Perubahan selera makan. Dahaga dan kencing yang meningkat. Perubahan kotak pasir. Kurang menjilat bulu. Menjilat bulu berlebihan. Perubahan corak tidur. Perubahan mobiliti. Sindrom Disfungsi Kognitif menjejaskan 28% kucing berusia 11-14 tahun. Apabila ragu-ragu, rujuk veterinar anda.',
      zh: '猫是隐藏疾病的高手,所以行为变化通常预示健康问题。需要兽医关注的危险信号行为:突然躲藏或退缩 - 疼痛的猫经常躲藏。攻击性或易怒 - 特别是以前友好的猫。过度叫唤 - 特别是老年猫(可能表明甲状腺功能亢进、认知功能障碍或疼痛)。食欲变化。口渴和排尿增加 - 可能表明糖尿病、肾脏疾病或甲状腺功能亢进。猫砂盆变化。梳理减少。过度梳理 - 可能表示压力、过敏或疼痛。睡眠模式变化。认知功能障碍综合征(猫痴呆)影响28%的11-14岁猫和50%的15岁以上猫。如有疑问,请咨询您的兽医。'
    },
    keywords: ['behavior', 'change', 'hiding', 'aggression', 'vocalization', 'grooming', 'cognitive', 'dementia']
  },
  {
    id: 'cat-parasite-prevention-1',
    category: 'cat-maintenance',
    question: {
      en: 'What parasites should I protect my cat from?',
      ms: 'Apakah parasit yang perlu saya lindungi kucing saya daripadanya?',
      zh: '我应该保护我的猫免受哪些寄生虫的侵害?'
    },
    shortAnswer: {
      en: 'Protect against fleas, ticks, ear mites, intestinal worms (roundworms, hookworms, tapeworms), heartworms, and external parasites like lice. Year-round prevention is essential in tropical climates. Use vet-recommended products and maintain regular deworming schedules.',
      ms: 'Lindungi daripada kutu, sengkenit, hama telinga, cacing usus, cacing jantung, dan parasit luaran. Pencegahan sepanjang tahun adalah penting di iklim tropika.',
      zh: '防护跳蚤、蜱虫、耳螨、肠道蠕虫(蛔虫、钩虫、绦虫)、心丝虫和虱子等外部寄生虫。在热带气候中,全年预防至关重要。使用兽医推荐的产品并保持定期驱虫计划。'
    },
    fullAnswer: {
      en: 'Parasite prevention is a crucial part of cat health care. Common parasites in Malaysia: External parasites: Fleas - cause itching, allergies, transmit tapeworms. Ticks - transmit blood parasites and diseases. Ear mites - cause intense itching and dark discharge. Lice - less common but can cause skin irritation. Internal parasites: Roundworms - common in kittens, can transmit to humans. Hookworms - cause anemia and intestinal problems. Tapeworms - transmitted through fleas or hunting prey. Heartworms - transmitted by mosquitoes, less common in cats than dogs but can be fatal. Coccidia and Giardia - intestinal parasites causing diarrhea. Prevention strategies: Monthly flea and tick prevention (topical or oral). Regular deworming (see deworming schedule). Heartworm prevention if recommended in your area. Keep your cat\'s environment clean. Regular fecal testing at vet visits. Products like Revolution and Advocate provide multi-parasite protection. Some parasites can transmit to humans (zoonotic) - especially important in households with children, elderly, or immunocompromised individuals. Always wash hands after handling cat litter.',
      ms: 'Pencegahan parasit adalah bahagian penting dalam penjagaan kesihatan kucing. Parasit biasa di Malaysia: Parasit luaran: Kutu, sengkenit, hama telinga, dan kutu. Parasit dalaman: Cacing gelang, cacing kait, cacing pita, dan cacing jantung. Strategi pencegahan: Pencegahan kutu dan sengkenit bulanan. Pemberian ubat cacing secara tetap. Pencegahan cacing jantung jika disyorkan. Jaga kebersihan persekitaran kucing anda. Ujian najis tetap semasa lawatan veterinar. Sesetengah parasit boleh menular kepada manusia - terutamanya penting dalam isi rumah dengan kanak-kanak.',
      zh: '寄生虫预防是猫健康护理的重要组成部分。马来西亚常见的寄生虫:外部寄生虫:跳蚤 - 引起瘙痒、过敏,传播绦虫。蜱虫 - 传播血液寄生虫和疾病。耳螨 - 引起强烈瘙痒和深色分泌物。虱子 - 不太常见但可能引起皮肤刺激。内部寄生虫:蛔虫 - 幼猫中常见,可传播给人类。钩虫 - 引起贫血和肠道问题。绦虫 - 通过跳蚤或捕食猎物传播。心丝虫 - 通过蚊子传播。预防策略:每月跳蚤和蜱虫预防(局部或口服)。定期驱虫。如果在您所在地区建议,进行心丝虫预防。保持猫的环境清洁。一些寄生虫可以传播给人类(人畜共患) - 在有儿童、老人或免疫功能低下个体的家庭中特别重要。'
    },
    keywords: ['parasite', 'flea', 'tick', 'worm', 'mite', 'prevention', 'heartworm', 'deworming']
  },
  {
    id: 'cat-heart-health-1',
    category: 'cat-maintenance',
    question: {
      en: 'How do I monitor my cat\'s heart health?',
      ms: 'Bagaimana saya memantau kesihatan jantung kucing saya?',
      zh: '如何监测我的猫的心脏健康?'
    },
    shortAnswer: {
      en: 'Monitor for signs like rapid or labored breathing, lethargy, weakness, loss of appetite, and fainting. Regular vet checkups include heart auscultation. Cats at higher risk (Maine Coons, Ragdolls) may need echocardiograms. Heart disease in cats is often silent until advanced.',
      ms: 'Pantau tanda-tanda seperti pernafasan yang cepat atau susah, lesu, lemah, hilang selera makan, dan pengsan. Pemeriksaan veterinar termasuk auskultasi jantung.',
      zh: '监测呼吸急促或困难、嗜睡、虚弱、食欲下降和晕厥等迹象。定期兽医检查包括心脏听诊。高风险的猫(缅因猫、布偶猫)可能需要超声心动图。猫的心脏病通常在晚期才表现出来。'
    },
    fullAnswer: {
      en: 'Heart disease affects about 15% of cats, often without obvious symptoms until it\'s advanced. Understanding feline heart disease: Hypertrophic Cardiomyopathy (HCM) is the most common form - the heart muscle thickens abnormally. Some breeds are predisposed: Maine Coon, Ragdoll, British Shorthair, Bengal, and Sphynx. Can develop at any age but often appears in middle-aged cats. Warning signs to watch for: Rapid breathing or panting (normal is 20-30 breaths per minute at rest). Open-mouth breathing (always abnormal in cats). Lethargy and weakness. Decreased appetite. Sudden hind leg paralysis (blood clot - emergency!). Collapse or fainting. Monitoring at home: Count resting respiratory rate monthly - consistently above 30-40 requires vet attention. Note any changes in activity level or breathing patterns. Watch for open-mouth breathing or panting. Veterinary monitoring: Annual checkups include heart auscultation (listening for murmurs). High-risk breeds should have echocardiograms (ultrasound). Blood tests (proBNP) can help detect heart disease. Treatment can significantly extend and improve quality of life if caught early.',
      ms: 'Penyakit jantung menjejaskan kira-kira 15% kucing, selalunya tanpa gejala yang jelas sehingga ia menjadi teruk. Kardiomiopati Hipertrofik (HCM) adalah bentuk yang paling biasa. Sesetengah baka terdedah: Maine Coon, Ragdoll, British Shorthair. Tanda-tanda amaran: Pernafasan cepat atau mengah-ngah. Pernafasan mulut terbuka. Lesu dan lemah. Selera makan berkurangan. Lumpuh kaki belakang secara tiba-tiba (bekuan darah - kecemasan!). Pemantauan di rumah: Kira kadar pernafasan semasa rehat setiap bulan. Rawatan boleh memanjangkan dan meningkatkan kualiti hidup dengan ketara jika dikesan awal.',
      zh: '心脏病影响约15%的猫,通常在晚期才出现明显症状。了解猫心脏病:肥厚型心肌病(HCM)是最常见的形式 - 心肌异常增厚。某些品种易感:缅因猫、布偶猫、英国短毛猫、孟加拉猫和斯芬克斯猫。可能在任何年龄发展,但通常出现在中年猫身上。需要注意的警告信号:呼吸急促或喘气(休息时正常为每分钟20-30次呼吸)。张口呼吸(猫总是异常的)。嗜睡和虚弱。食欲下降。突然后腿瘫痪(血栓 - 紧急情况!)。在家监测:每月计算休息呼吸频率 - 持续高于30-40需要就医。注意活动水平或呼吸模式的任何变化。如果及早发现,治疗可以显著延长和改善生活质量。'
    },
    keywords: ['heart', 'cardiac', 'HCM', 'cardiomyopathy', 'breathing', 'murmur', 'echocardiogram']
  },
  {
    id: 'cat-kidney-monitoring-1',
    category: 'cat-maintenance',
    question: {
      en: 'How can I help prevent kidney disease in my cat?',
      ms: 'Bagaimana saya boleh membantu mencegah penyakit buah pinggang pada kucing saya?',
      zh: '如何帮助预防我的猫的肾脏疾病?'
    },
    shortAnswer: {
      en: 'Encourage water intake with fountains and wet food, feed high-quality protein with appropriate phosphorus levels, maintain healthy weight, schedule regular vet checkups with blood and urine tests, and avoid toxic substances. Early detection through screening is key.',
      ms: 'Galakkan pengambilan air dengan air pancut dan makanan basah, beri protein berkualiti tinggi, kekalkan berat badan yang sihat, jadualkan pemeriksaan veterinar tetap, dan elakkan bahan toksik.',
      zh: '用饮水机和湿粮鼓励饮水,喂食适当磷含量的高质量蛋白质,保持健康体重,安排定期兽医检查包括血液和尿液测试,避免有毒物质。通过筛查早期发现是关键。'
    },
    fullAnswer: {
      en: 'Chronic kidney disease (CKD) affects 30-40% of cats over 10 years old. While not always preventable, you can reduce risk and catch it early. Prevention and monitoring strategies: Hydration is crucial - provide multiple water sources, consider a cat water fountain (cats prefer moving water), feed wet food to increase moisture intake, and add water to dry food if your cat won\'t eat wet food. Nutrition matters - feed high-quality, age-appropriate food, avoid excessive phosphorus in senior cat diets, and consult your vet about kidney-supportive diets for at-risk cats. Maintain healthy weight - obesity increases kidney disease risk. Avoid toxins - keep lilies away from cats (highly toxic to kidneys), store medications safely, and use pet-safe cleaning products. Regular veterinary monitoring - annual blood work for cats 7+ years, bi-annual for cats 10+ years, urinalysis to detect protein loss and concentration issues, blood pressure checks, and SDMA testing can detect kidney changes earlier than traditional tests. Watch for early signs - increased thirst and urination, weight loss, poor appetite, vomiting, bad breath, and lethargy. If caught early (IRIS Stage 1-2), dietary management and supportive care can significantly slow progression and maintain quality of life.',
      ms: 'Penyakit buah pinggang kronik (CKD) menjejaskan 30-40% kucing berusia lebih 10 tahun. Walaupun tidak selalu boleh dicegah, anda boleh mengurangkan risiko dan mengesannya awal. Strategi pencegahan dan pemantauan: Penghidratan adalah penting - sediakan pelbagai sumber air, pertimbangkan air pancut kucing, beri makanan basah. Pemakanan penting - beri makanan berkualiti tinggi yang sesuai dengan usia, elakkan fosforus berlebihan. Kekalkan berat badan yang sihat. Elakkan toksin - jauhkan lili dari kucing. Pemantauan veterinar tetap - kerja darah tahunan untuk kucing 7+ tahun. Perhatikan tanda-tanda awal - dahaga dan kencing yang meningkat, penurunan berat badan.',
      zh: '慢性肾脏病(CKD)影响30-40%的10岁以上猫。虽然并非总能预防,但您可以降低风险并及早发现。预防和监测策略:水分至关重要 - 提供多个水源,考虑使用猫饮水机(猫喜欢流动的水),喂湿粮以增加水分摄入。营养很重要 - 喂食高质量、适龄的食物,避免老年猫饮食中过多的磷。保持健康体重 - 肥胖会增加肾脏疾病风险。避免毒素 - 让百合远离猫(对肾脏有剧毒),安全存放药物。定期兽医监测 - 7岁以上猫每年血液检查,10岁以上猫每半年检查。注意早期迹象 - 口渴和排尿增加、体重下降、食欲不振、呕吐、口臭和嗜睡。如果及早发现,饮食管理和支持性护理可以显著减缓进展并保持生活质量。'
    },
    keywords: ['kidney', 'renal', 'CKD', 'hydration', 'water', 'urination', 'phosphorus', 'prevention']
  },
  {
    id: 'cat-annual-checkup-1',
    category: 'cat-maintenance',
    question: {
      en: 'What happens during a cat\'s annual wellness exam?',
      ms: 'Apa yang berlaku semasa pemeriksaan kesihatan tahunan kucing?',
      zh: '猫的年度健康检查期间会发生什么?'
    },
    shortAnswer: {
      en: 'Annual exams include weight check, physical examination (eyes, ears, teeth, heart, lungs, abdomen), parasite screening, vaccination updates, blood work for seniors, and discussion of diet, behavior, and preventive care. Early detection of problems saves lives.',
      ms: 'Pemeriksaan tahunan termasuk pemeriksaan berat badan, pemeriksaan fizikal, saringan parasit, kemas kini vaksin, kerja darah untuk kucing tua, dan perbincangan tentang diet dan penjagaan pencegahan.',
      zh: '年度检查包括体重检查、身体检查(眼睛、耳朵、牙齿、心脏、肺、腹部)、寄生虫筛查、疫苗更新、老年猫血液检查,以及讨论饮食、行为和预防护理。及早发现问题可以挽救生命。'
    },
    fullAnswer: {
      en: 'Annual wellness exams are essential for maintaining your cat\'s health and detecting problems early. What to expect: Weight and body condition assessment - tracking changes over time helps identify issues early. Vital signs - temperature, heart rate, respiratory rate. Complete physical examination: Eyes - checking for cataracts, infections, retinal issues. Ears - looking for mites, infections, polyps. Mouth and teeth - assessing dental health, checking for tumors. Heart and lungs - listening for murmurs, abnormal sounds. Abdomen - palpating for masses, organ enlargement, pain. Skin and coat - checking for parasites, allergies, lumps. Joints and mobility - assessing for arthritis or pain. Lymph nodes - checking for enlargement. Additional tests may include: Fecal exam for parasites. Urinalysis for kidney function and UTIs. Blood work (especially for cats 7+ years) - complete blood count, chemistry panel, thyroid levels. Vaccination updates as needed. Discussion topics: Diet and nutrition recommendations. Behavior changes you\'ve noticed. Parasite prevention plan. Dental care recommendations. Questions about your cat\'s health. Prepare for your visit by noting any changes in eating, drinking, litter box habits, behavior, or activity level.',
      ms: 'Pemeriksaan kesihatan tahunan adalah penting untuk mengekalkan kesihatan kucing anda dan mengesan masalah awal. Apa yang dijangkakan: Penilaian berat badan dan keadaan badan. Tanda-tanda vital. Pemeriksaan fizikal lengkap: Mata, telinga, mulut dan gigi, jantung dan paru-paru, perut, kulit dan bulu, sendi dan mobiliti, nodus limfa. Ujian tambahan mungkin termasuk: Ujian najis, urinalisis, kerja darah, kemas kini vaksin. Topik perbincangan: Cadangan diet, perubahan tingkah laku, pelan pencegahan parasit. Sediakan untuk lawatan anda dengan mencatat sebarang perubahan.',
      zh: '年度健康检查对于维护您的猫的健康和及早发现问题至关重要。预期内容:体重和体况评估 - 跟踪变化有助于及早发现问题。生命体征 - 体温、心率、呼吸频率。完整的身体检查:眼睛 - 检查白内障、感染、视网膜问题。耳朵 - 寻找螨虫、感染、息肉。口腔和牙齿 - 评估牙齿健康,检查肿瘤。心脏和肺 - 听诊杂音、异常声音。腹部 - 触诊肿块、器官肿大、疼痛。皮肤和毛发 - 检查寄生虫、过敏、肿块。关节和活动能力 - 评估关节炎或疼痛。额外测试可能包括:粪便寄生虫检查、尿液分析、血液检查、疫苗更新。讨论主题:饮食和营养建议、您注意到的行为变化、寄生虫预防计划。通过记录饮食、饮水、猫砂盆习惯、行为或活动水平的任何变化来准备您的就诊。'
    },
    keywords: ['checkup', 'exam', 'wellness', 'annual', 'vet visit', 'physical', 'screening', 'prevention']
  }
];

export const getYQAItemsByCategory = (category: string): YQAItem[] => {
  if (category === 'all') return yqaItems;
  return yqaItems.filter(item => item.category === category);
};

export const searchYQAItems = (query: string, language: Language): YQAItem[] => {
  if (!query.trim()) return yqaItems;
  
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  return yqaItems.filter(item => {
    const questionText = item.question[language].toLowerCase();
    const shortAnswerText = item.shortAnswer[language].toLowerCase();
    const keywordsText = item.keywords.join(' ').toLowerCase();
    const searchableText = `${questionText} ${shortAnswerText} ${keywordsText}`;
    
    return searchTerms.some(term => searchableText.includes(term));
  });
};
