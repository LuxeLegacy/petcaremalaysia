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
