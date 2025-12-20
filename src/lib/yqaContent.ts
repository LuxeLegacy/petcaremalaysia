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
  },
  // Dog Emergency Q&As (20 items)
  {
    id: 'dog-skin-allergy-1',
    category: 'dog-emergency',
    question: {
      en: 'What are the signs of skin allergies in dogs?',
      ms: 'Apakah tanda-tanda alahan kulit pada anjing?',
      zh: '狗狗皮肤过敏有哪些症状？'
    },
    shortAnswer: {
      en: 'Signs include excessive scratching, licking paws, red/inflamed skin, hot spots, hair loss, ear infections, and recurring skin infections. Common triggers are fleas, food ingredients, and environmental allergens like pollen and dust mites.',
      ms: 'Tanda-tanda termasuk menggaru berlebihan, menjilat kaki, kulit merah/meradang, hot spots, keguguran bulu, jangkitan telinga, dan jangkitan kulit berulang. Pencetus biasa adalah kutu, bahan makanan, dan alergen persekitaran.',
      zh: '症状包括过度抓挠、舔爪子、皮肤红肿/发炎、热点、脱毛、耳朵感染和反复皮肤感染。常见触发因素是跳蚤、食物成分和环境过敏原如花粉和尘螨。'
    },
    fullAnswer: {
      en: 'Skin allergies (allergic dermatitis) are one of the most common health issues in dogs. There are three main types: Flea Allergy Dermatitis - dogs react to flea saliva, causing intense itching especially at the tail base; Food Allergies - reactions to proteins like beef, chicken, dairy, or grains, causing year-round symptoms; Environmental Allergies (Atopy) - reactions to pollen, mold, dust mites, causing seasonal or year-round issues. Symptoms to watch for include: constant scratching, biting, or licking, red, irritated skin, hot spots (acute moist dermatitis), chronic ear infections, hair loss, darkened or thickened skin, and recurring skin infections. Treatment depends on the cause: strict flea prevention for flea allergies, elimination diet trials for food allergies, and medications like antihistamines, steroids, Apoquel, or Cytopoint for environmental allergies. Omega fatty acid supplements, medicated baths, and reducing allergen exposure can help. Seek immediate care if your dog develops facial swelling, hives, or difficulty breathing - these could indicate anaphylaxis.',
      ms: 'Alahan kulit (dermatitis alergik) adalah salah satu masalah kesihatan yang paling biasa pada anjing. Terdapat tiga jenis utama: Dermatitis Alahan Kutu - anjing bertindak balas terhadap air liur kutu; Alahan Makanan - tindak balas terhadap protein seperti daging lembu, ayam, tenusu, atau bijirin; Alahan Persekitaran (Atopi) - tindak balas terhadap debunga, acuan, hama habuk. Gejala termasuk: menggaru, menggigit, atau menjilat berterusan, kulit merah dan meradang, hot spots, jangkitan telinga kronik, keguguran bulu, dan jangkitan kulit berulang. Rawatan bergantung kepada punca: pencegahan kutu yang ketat, percubaan diet penghapusan, dan ubat-ubatan seperti antihistamin, steroid, atau Apoquel. Dapatkan rawatan segera jika anjing anda mengalami bengkak muka, gatal-gatal, atau kesukaran bernafas.',
      zh: '皮肤过敏（过敏性皮炎）是狗狗最常见的健康问题之一。主要有三种类型：跳蚤过敏性皮炎 - 狗对跳蚤唾液产生反应，尤其在尾根处引起剧烈瘙痒；食物过敏 - 对牛肉、鸡肉、乳制品或谷物等蛋白质的反应，引起全年症状；环境过敏（特应性皮炎）- 对花粉、霉菌、尘螨的反应。需要注意的症状包括：持续抓挠、咬或舔、皮肤红肿、热点、慢性耳朵感染、脱毛、皮肤变黑或增厚、反复皮肤感染。治疗取决于病因：跳蚤过敏需要严格预防跳蚤，食物过敏需要排除饮食试验，环境过敏可用抗组胺药、类固醇或Apoquel等药物。如果您的狗出现面部肿胀、荨麻疹或呼吸困难，请立即就医。'
    },
    keywords: ['skin', 'allergy', 'itching', 'scratching', 'hot spots', 'dermatitis', 'flea', 'atopy']
  },
  {
    id: 'dog-ear-infection-1',
    category: 'dog-emergency',
    question: {
      en: 'How do I know if my dog has an ear infection?',
      ms: 'Bagaimana saya tahu jika anjing saya mempunyai jangkitan telinga?',
      zh: '如何判断我的狗是否有耳朵感染？'
    },
    shortAnswer: {
      en: 'Signs include head shaking, ear scratching, odor, discharge (brown/yellow/bloody), redness, swelling, pain when touched, and tilting head. Dogs with floppy ears and those who swim frequently are more prone. Untreated infections can cause permanent damage.',
      ms: 'Tanda-tanda termasuk menggelengkan kepala, menggaru telinga, bau, lelehan (coklat/kuning/berdarah), kemerahan, bengkak, sakit apabila disentuh, dan mencondongkan kepala. Anjing dengan telinga terkulai lebih terdedah.',
      zh: '症状包括摇头、抓耳朵、异味、分泌物（棕色/黄色/血性）、发红、肿胀、触摸时疼痛和歪头。垂耳犬和经常游泳的狗更容易患病。未经治疗的感染可能造成永久性损伤。'
    },
    fullAnswer: {
      en: 'Ear infections (otitis) are extremely common in dogs, especially breeds with floppy ears (Cocker Spaniels, Basset Hounds), hairy ear canals (Poodles), or those who swim often. Types include: Otitis Externa - outer ear canal infection (most common); Otitis Media - middle ear infection; Otitis Interna - inner ear infection (can affect balance). Warning signs include: frequent head shaking or tilting, scratching at ears, unpleasant odor from ears, discharge (brown, yellow, or bloody), redness and swelling in the ear canal, pain when ears are touched, loss of balance or walking in circles, and hearing loss. Common causes include bacteria, yeast, ear mites, allergies, foreign objects, and moisture trapped in ears. Your vet will examine the ear canal with an otoscope and may take a sample to identify the cause. Treatment typically includes ear cleaning, topical medications (antibiotics, antifungals), oral medications for severe cases, and addressing underlying allergies. Prevention tips: dry ears after swimming, regular cleaning with vet-approved solution, and treating allergies promptly. Seek immediate care if your dog shows signs of vestibular disease or severe pain.',
      ms: 'Jangkitan telinga (otitis) sangat biasa pada anjing, terutamanya baka dengan telinga terkulai (Cocker Spaniel, Basset Hound), saluran telinga berbulu (Poodle), atau yang kerap berenang. Jenis termasuk: Otitis Eksterna - jangkitan saluran telinga luar; Otitis Media - jangkitan telinga tengah; Otitis Interna - jangkitan telinga dalam. Tanda-tanda amaran termasuk: kerap menggelengkan atau mencondongkan kepala, menggaru telinga, bau tidak menyenangkan, lelehan, kemerahan dan bengkak, sakit apabila telinga disentuh, kehilangan keseimbangan. Punca biasa termasuk bakteria, yis, hama telinga, alahan, objek asing, dan kelembapan terperangkap. Rawatan biasanya termasuk pembersihan telinga, ubat topikal, ubat oral untuk kes teruk, dan menangani alahan yang mendasari. Tips pencegahan: keringkan telinga selepas berenang, pembersihan tetap dengan larutan yang diluluskan veterinar.',
      zh: '耳朵感染（中耳炎）在狗狗中极为常见，尤其是垂耳犬种（可卡犬、巴吉度猎犬）、耳道多毛的品种（贵宾犬）或经常游泳的狗。类型包括：外耳炎 - 外耳道感染（最常见）；中耳炎 - 中耳感染；内耳炎 - 内耳感染（可能影响平衡）。警告信号包括：频繁摇头或歪头、抓耳朵、耳朵有异味、分泌物（棕色、黄色或血性）、耳道发红肿胀、触摸耳朵时疼痛、失去平衡或转圈走、听力下降。常见原因包括细菌、酵母菌、耳螨、过敏、异物和耳朵中滞留的水分。兽医会用耳镜检查耳道并可能取样以确定原因。治疗通常包括耳朵清洁、局部用药、严重病例口服药物以及解决潜在过敏问题。预防提示：游泳后擦干耳朵、定期使用兽医批准的溶液清洁。'
    },
    keywords: ['ear', 'infection', 'otitis', 'scratching', 'discharge', 'odor', 'head shaking', 'floppy ears']
  },
  {
    id: 'dog-hot-spots-1',
    category: 'dog-emergency',
    question: {
      en: 'What causes hot spots in dogs and how are they treated?',
      ms: 'Apa yang menyebabkan hot spots pada anjing dan bagaimana ia dirawat?',
      zh: '什么导致狗狗的热点以及如何治疗？'
    },
    shortAnswer: {
      en: 'Hot spots are moist, red, painful skin lesions that develop rapidly from scratching, licking, or moisture. Causes include allergies, insect bites, poor grooming, and underlying skin infections. Treatment involves clipping fur, cleaning, medications, and preventing licking.',
      ms: 'Hot spots adalah lesi kulit lembap, merah, dan menyakitkan yang berkembang dengan cepat akibat menggaru, menjilat, atau kelembapan. Punca termasuk alahan, gigitan serangga, dandanan yang lemah, dan jangkitan kulit.',
      zh: '热点是潮湿、红色、疼痛的皮肤病变，由抓挠、舔舐或潮湿引起并迅速发展。原因包括过敏、昆虫叮咬、梳理不当和潜在皮肤感染。治疗包括剪毛、清洁、药物和防止舔舐。'
    },
    fullAnswer: {
      en: 'Hot spots (acute moist dermatitis) are painful, red, oozing skin lesions that can develop within hours. They occur when dogs damage their skin through scratching, licking, or chewing due to an underlying itch or irritation. Common causes include: flea allergies, environmental allergies, food allergies, insect bites, poor grooming (matted fur trapping moisture), swimming or bathing without proper drying, ear infections causing head scratching, and anal gland issues causing rear-end chewing. Breeds with thick coats (Golden Retrievers, German Shepherds) are more prone. Hot spots appear as: red, inflamed, moist areas, often with pus or discharge, hair loss in the affected area, intense pain when touched, and a foul smell. Treatment includes: clipping fur around the lesion for air exposure, gentle cleaning with antiseptic solution, topical medications (antibiotics, steroids), oral antibiotics for severe cases, pain medication, an E-collar to prevent licking, and addressing the underlying cause. Prevention involves regular grooming, flea prevention, thorough drying after swimming, and treating allergies. Seek veterinary care for large lesions, those that spread rapidly, or if your dog is in significant pain.',
      ms: 'Hot spots (dermatitis lembap akut) adalah lesi kulit yang menyakitkan, merah, dan bernanah yang boleh berkembang dalam beberapa jam. Ia berlaku apabila anjing merosakkan kulit mereka melalui menggaru, menjilat, atau mengunyah akibat gatal atau iritasi. Punca biasa termasuk: alahan kutu, alahan persekitaran, alahan makanan, gigitan serangga, dandanan yang lemah, berenang tanpa pengeringan yang betul, jangkitan telinga, dan masalah kelenjar dubur. Baka dengan bulu tebal lebih terdedah. Rawatan termasuk: memotong bulu di sekitar lesi, pembersihan lembut dengan larutan antiseptik, ubat topikal, antibiotik oral untuk kes teruk, ubat sakit, kolar E untuk mencegah menjilat, dan menangani punca yang mendasari. Pencegahan melibatkan dandanan tetap, pencegahan kutu, pengeringan menyeluruh selepas berenang.',
      zh: '热点（急性湿性皮炎）是疼痛的、红色的、渗出的皮肤病变，可在数小时内发展。当狗因潜在的瘙痒或刺激而通过抓挠、舔舐或咀嚼损伤皮肤时就会发生。常见原因包括：跳蚤过敏、环境过敏、食物过敏、昆虫叮咬、梳理不当（毛发打结滞留水分）、游泳或洗澡后未充分干燥、耳朵感染导致抓头、肛门腺问题导致咬臀部。厚毛犬种（金毛寻回犬、德国牧羊犬）更容易患病。热点表现为：红色、发炎、潮湿的区域，通常有脓或分泌物，受影响区域脱毛，触摸时剧烈疼痛，有恶臭。治疗包括：剪掉病变周围的毛发以便空气接触、用消毒液轻柔清洁、局部用药、严重病例口服抗生素、止痛药、伊丽莎白圈防止舔舐、解决潜在原因。预防包括定期梳理、预防跳蚤、游泳后彻底干燥、治疗过敏。'
    },
    keywords: ['hot spots', 'moist dermatitis', 'skin lesion', 'licking', 'scratching', 'oozing', 'red skin']
  },
  {
    id: 'dog-parvovirus-1',
    category: 'dog-emergency',
    question: {
      en: 'What is parvovirus and why is it so dangerous for puppies?',
      ms: 'Apakah parvovirus dan mengapa ia sangat berbahaya untuk anak anjing?',
      zh: '什么是细小病毒，为什么它对幼犬如此危险？'
    },
    shortAnswer: {
      en: 'Parvovirus is a highly contagious viral disease causing severe bloody diarrhea, vomiting, and dehydration. It attacks rapidly dividing cells in intestines and bone marrow. Without treatment, mortality is 90%+. Puppies under 6 months are most vulnerable. Vaccination prevents this disease.',
      ms: 'Parvovirus adalah penyakit virus yang sangat berjangkit menyebabkan cirit-birit berdarah yang teruk, muntah, dan dehidrasi. Ia menyerang sel-sel yang membahagi dengan cepat. Tanpa rawatan, kematian adalah 90%+. Vaksinasi mencegah penyakit ini.',
      zh: '细小病毒是一种高度传染性的病毒疾病，引起严重的血性腹泻、呕吐和脱水。它攻击肠道和骨髓中快速分裂的细胞。不治疗的死亡率超过90%。6个月以下的幼犬最易感染。疫苗可以预防这种疾病。'
    },
    fullAnswer: {
      en: 'Canine parvovirus (CPV or "parvo") is one of the most serious and contagious diseases affecting dogs, particularly puppies. The virus attacks rapidly dividing cells, primarily in the intestinal lining and bone marrow. This causes: severe damage to the intestinal wall, bloody diarrhea and vomiting, dangerous dehydration and electrolyte imbalances, weakened immune system, and in young puppies, heart damage (myocarditis). Symptoms typically appear 3-7 days after exposure: severe lethargy and depression, loss of appetite, high fever, severe bloody diarrhea with distinctive foul smell, persistent vomiting, and rapid dehydration. The virus is extremely hardy, surviving in the environment for months to years. It spreads through contact with infected feces, contaminated objects, or environments. Without treatment, mortality exceeds 90%. With aggressive veterinary care (IV fluids, anti-nausea medications, antibiotics for secondary infections), survival rates improve to 70-90%. Prevention is critical: puppies need a series of vaccinations starting at 6-8 weeks, with boosters every 3-4 weeks until 16 weeks old. Until fully vaccinated, avoid dog parks, pet stores, and areas where unvaccinated dogs may have been. If you suspect parvo, seek emergency veterinary care immediately.',
      ms: 'Parvovirus anjing (CPV atau "parvo") adalah salah satu penyakit paling serius dan berjangkit yang menjejaskan anjing, terutamanya anak anjing. Virus menyerang sel-sel yang membahagi dengan cepat, terutamanya dalam lapisan usus dan sumsum tulang. Ini menyebabkan: kerosakan teruk pada dinding usus, cirit-birit berdarah dan muntah, dehidrasi berbahaya, sistem imun yang lemah, dan pada anak anjing muda, kerosakan jantung. Gejala biasanya muncul 3-7 hari selepas pendedahan: lesu teruk, hilang selera makan, demam tinggi, cirit-birit berdarah dengan bau busuk yang khas, muntah berterusan, dan dehidrasi cepat. Virus ini sangat tahan, bertahan dalam persekitaran selama berbulan-bulan hingga bertahun-tahun. Tanpa rawatan, kematian melebihi 90%. Dengan rawatan veterinar yang agresif, kadar kelangsungan hidup meningkat kepada 70-90%. Pencegahan adalah kritikal: anak anjing memerlukan siri vaksinasi bermula pada 6-8 minggu.',
      zh: '犬细小病毒（CPV或"细小"）是影响狗狗最严重和最具传染性的疾病之一，尤其是幼犬。病毒攻击快速分裂的细胞，主要在肠道内壁和骨髓中。这会导致：肠壁严重损伤、血性腹泻和呕吐、危险的脱水和电解质失衡、免疫系统减弱，以及在幼小的幼犬中导致心脏损伤（心肌炎）。症状通常在接触后3-7天出现：严重嗜睡和抑郁、食欲不振、高烧、带有特殊恶臭的严重血性腹泻、持续呕吐和快速脱水。病毒极其顽强，可在环境中存活数月至数年。它通过接触受感染的粪便、污染的物品或环境传播。不治疗的死亡率超过90%。通过积极的兽医护理（静脉输液、止吐药、治疗继发感染的抗生素），存活率提高到70-90%。预防至关重要：幼犬需要从6-8周龄开始接种一系列疫苗，每3-4周加强一次，直到16周龄。在完全接种之前，避免去狗公园、宠物店和未接种疫苗的狗可能去过的地方。'
    },
    keywords: ['parvovirus', 'parvo', 'puppy', 'bloody diarrhea', 'vomiting', 'vaccination', 'contagious', 'emergency']
  },
  {
    id: 'dog-kennel-cough-1',
    category: 'dog-emergency',
    question: {
      en: 'What is kennel cough and when should I be worried?',
      ms: 'Apakah kennel cough dan bilakah saya perlu bimbang?',
      zh: '什么是犬窝咳，什么时候应该担心？'
    },
    shortAnswer: {
      en: 'Kennel cough is a contagious respiratory infection causing a distinctive honking cough. Most cases are mild and resolve in 1-3 weeks. Seek veterinary care if your dog has trouble breathing, stops eating, becomes lethargic, or develops fever. Puppies and senior dogs are at higher risk.',
      ms: 'Kennel cough adalah jangkitan pernafasan berjangkit yang menyebabkan batuk khas seperti bunyi honk. Kebanyakan kes adalah ringan. Dapatkan rawatan veterinar jika anjing anda mengalami kesukaran bernafas, berhenti makan, atau menjadi lesu.',
      zh: '犬窝咳是一种传染性呼吸道感染，引起特征性的鹅叫样咳嗽。大多数病例较轻，1-3周内痊愈。如果您的狗呼吸困难、停止进食、变得嗜睡或发烧，请就医。幼犬和老年犬风险更高。'
    },
    fullAnswer: {
      en: 'Kennel cough (infectious tracheobronchitis) is a highly contagious respiratory disease caused by various bacteria and viruses, most commonly Bordetella bronchiseptica and canine parainfluenza virus. It spreads through airborne droplets, direct contact, or contaminated surfaces. The name comes from its common spread in kennels, shelters, and dog parks. Symptoms typically appear 2-14 days after exposure: distinctive dry, honking cough (sounds like a goose honk), coughing fits that may end with gagging or retching, mild runny nose, sneezing, and usually normal energy and appetite in mild cases. Most healthy adult dogs recover within 1-3 weeks without treatment. However, seek veterinary care if: coughing is severe or persistent, your dog has difficulty breathing, appetite loss or lethargy develops, fever is present (normal dog temp is 101-102.5°F), the dog is a puppy, senior, or has other health conditions, or symptoms worsen rather than improve. Treatment may include: cough suppressants (if no secondary infection), antibiotics if bacterial infection is present, anti-inflammatory medications, and rest and isolation from other dogs. Prevention includes the Bordetella vaccine (especially important for dogs who board, visit dog parks, or attend grooming), avoiding sick dogs, and good ventilation in multi-dog environments.',
      ms: 'Kennel cough (trakeobronkitis berjangkit) adalah penyakit pernafasan yang sangat berjangkit disebabkan oleh pelbagai bakteria dan virus, paling biasa Bordetella bronchiseptica dan virus parainfluenza anjing. Ia merebak melalui titisan udara, sentuhan langsung, atau permukaan yang tercemar. Gejala biasanya muncul 2-14 hari selepas pendedahan: batuk kering yang khas seperti bunyi angsa, serangan batuk yang mungkin berakhir dengan tersedak, hidung berair ringan, bersin, dan biasanya tenaga dan selera makan normal dalam kes ringan. Kebanyakan anjing dewasa yang sihat pulih dalam 1-3 minggu. Walau bagaimanapun, dapatkan rawatan veterinar jika: batuk teruk atau berterusan, anjing anda mengalami kesukaran bernafas, hilang selera makan atau lesu, demam hadir, atau gejala bertambah buruk. Rawatan mungkin termasuk: ubat batuk, antibiotik jika jangkitan bakteria, ubat anti-radang, dan rehat.',
      zh: '犬窝咳（传染性气管支气管炎）是一种高度传染性的呼吸道疾病，由多种细菌和病毒引起，最常见的是支气管败血博德特氏菌和犬副流感病毒。它通过空气飞沫、直接接触或污染的表面传播。症状通常在接触后2-14天出现：特征性的干燥鹅叫样咳嗽、可能以干呕或作呕结束的咳嗽发作、轻微流鼻涕、打喷嚏，轻度病例通常精力和食欲正常。大多数健康成年犬在1-3周内无需治疗即可康复。但是，如果出现以下情况请就医：咳嗽严重或持续、呼吸困难、食欲下降或嗜睡、发烧（正常狗体温是38.3-39.2°C）、幼犬、老年犬或有其他健康问题、症状恶化而非改善。治疗可能包括：止咳药（如果没有继发感染）、细菌感染时使用抗生素、消炎药、休息和与其他狗隔离。预防包括博德特氏菌疫苗（对于寄宿、去狗公园或美容的狗尤其重要）。'
    },
    keywords: ['kennel cough', 'coughing', 'respiratory', 'bordetella', 'contagious', 'honking', 'tracheobronchitis']
  },
  {
    id: 'dog-tick-fever-1',
    category: 'dog-emergency',
    question: {
      en: 'What is tick fever (Ehrlichiosis) in dogs and what are the symptoms?',
      ms: 'Apakah demam kutu (Ehrlichiosis) pada anjing dan apakah gejalanya?',
      zh: '什么是狗的蜱虫热（埃里希体病），有什么症状？'
    },
    shortAnswer: {
      en: 'Tick fever is caused by bacteria transmitted through tick bites. Symptoms include fever, lethargy, loss of appetite, weight loss, bleeding (nosebleeds, bruising), swollen lymph nodes, and joint pain. Early detection and antibiotic treatment are crucial. Tick prevention is essential.',
      ms: 'Demam kutu disebabkan oleh bakteria yang dihantar melalui gigitan kutu. Gejala termasuk demam, lesu, hilang selera makan, penurunan berat badan, pendarahan, nodus limfa bengkak, dan sakit sendi. Pengesanan awal dan rawatan antibiotik adalah penting.',
      zh: '蜱虫热是由蜱虫叮咬传播的细菌引起的。症状包括发烧、嗜睡、食欲不振、体重下降、出血（鼻血、瘀伤）、淋巴结肿大和关节疼痛。早期发现和抗生素治疗至关重要。预防蜱虫是必要的。'
    },
    fullAnswer: {
      en: 'Tick fever, primarily Ehrlichiosis, is a serious bacterial infection transmitted by ticks (especially brown dog ticks). It occurs in three phases: Acute Phase (1-3 weeks after infection) - fever, lethargy, loss of appetite, weight loss, swollen lymph nodes, respiratory distress, bleeding disorders (nosebleeds, bruising), and joint pain/swelling. Subclinical Phase - the dog may appear healthy but the bacteria persists; this can last months to years. Chronic Phase - if not treated, severe symptoms develop: profound weight loss, eye inflammation, neurological problems, severe bleeding due to low platelets, kidney failure, and bone marrow suppression. Diagnosis involves blood tests looking for antibodies, low platelet counts, and anemia. PCR testing can confirm active infection. Treatment includes: Doxycycline antibiotic (typically 4-6 weeks), supportive care for severe cases (blood transfusions, IV fluids), and treating secondary complications. Prognosis is good with early treatment but poor in chronic phase. Prevention is critical: use year-round tick prevention products, check your dog for ticks daily (especially after outdoor activities), remove ticks promptly and properly, and keep grass trimmed in your yard. In Malaysia, tick fever is common due to the tropical climate, making prevention even more important.',
      ms: 'Demam kutu, terutamanya Ehrlichiosis, adalah jangkitan bakteria serius yang dihantar oleh kutu (terutamanya kutu anjing coklat). Ia berlaku dalam tiga fasa: Fasa Akut (1-3 minggu selepas jangkitan) - demam, lesu, hilang selera makan, penurunan berat badan, nodus limfa bengkak, masalah pernafasan, gangguan pendarahan (hidung berdarah, lebam), dan sakit/bengkak sendi. Fasa Subklinikal - anjing mungkin kelihatan sihat tetapi bakteria berterusan; ini boleh bertahan berbulan-bulan hingga bertahun-tahun. Fasa Kronik - jika tidak dirawat, gejala teruk berkembang. Diagnosis melibatkan ujian darah. Rawatan termasuk: antibiotik Doxycycline (biasanya 4-6 minggu), penjagaan sokongan untuk kes teruk. Pencegahan adalah kritikal: gunakan produk pencegahan kutu sepanjang tahun, periksa anjing anda untuk kutu setiap hari, keluarkan kutu dengan segera dan betul. Di Malaysia, demam kutu adalah biasa kerana iklim tropika.',
      zh: '蜱虫热，主要是埃里希体病，是由蜱虫（尤其是棕色犬蜱）传播的严重细菌感染。它分为三个阶段：急性期（感染后1-3周）- 发烧、嗜睡、食欲不振、体重下降、淋巴结肿大、呼吸困难、出血障碍（鼻血、瘀伤）和关节疼痛/肿胀。亚临床期 - 狗可能看起来健康但细菌持续存在；这可能持续数月至数年。慢性期 - 如果不治疗，会出现严重症状：严重消瘦、眼睛炎症、神经问题、由于血小板低导致严重出血、肾衰竭和骨髓抑制。诊断包括寻找抗体、低血小板计数和贫血的血液检查。PCR检测可以确认活动性感染。治疗包括：多西环素抗生素（通常4-6周）、严重病例的支持性护理（输血、静脉输液）。早期治疗预后良好，但慢性期预后差。预防至关重要：全年使用蜱虫预防产品，每天检查狗身上的蜱虫，及时正确地清除蜱虫。在马来西亚，由于热带气候，蜱虫热很常见。'
    },
    keywords: ['tick fever', 'ehrlichiosis', 'tick', 'fever', 'bleeding', 'platelets', 'doxycycline', 'lethargy']
  },
  {
    id: 'dog-heartworm-1',
    category: 'dog-emergency',
    question: {
      en: 'What is heartworm disease and how does it affect dogs?',
      ms: 'Apakah penyakit cacing jantung dan bagaimana ia menjejaskan anjing?',
      zh: '什么是心丝虫病，它如何影响狗？'
    },
    shortAnswer: {
      en: 'Heartworm is caused by parasitic worms living in the heart and lungs, transmitted by mosquitoes. Symptoms include coughing, exercise intolerance, fatigue, weight loss, and heart failure. Treatment is expensive and risky. Monthly prevention is much safer and more affordable.',
      ms: 'Cacing jantung disebabkan oleh cacing parasit yang hidup di dalam jantung dan paru-paru, dihantar oleh nyamuk. Gejala termasuk batuk, tidak tahan bersenam, keletihan, dan kegagalan jantung. Pencegahan bulanan adalah lebih selamat dan berpatutan.',
      zh: '心丝虫病是由寄生在心脏和肺部的蠕虫引起的，通过蚊子传播。症状包括咳嗽、运动不耐受、疲劳、体重下降和心力衰竭。治疗昂贵且有风险。每月预防更安全、更经济。'
    },
    fullAnswer: {
      en: 'Heartworm disease is a serious, potentially fatal condition caused by foot-long worms (Dirofilaria immitis) that live in the heart, lungs, and blood vessels. It is transmitted by mosquitoes carrying heartworm larvae. Disease progression: Mosquito bites transmit larvae, which migrate through tissue for about 6 months before reaching the heart. Adult worms can live 5-7 years, growing up to 12 inches long. A dog can harbor 30+ worms. Symptoms progress through stages: Class 1 - no symptoms or mild cough; Class 2 - moderate symptoms including cough, exercise intolerance, abnormal lung sounds; Class 3 - severe symptoms including weight loss, difficulty breathing, heart enlargement, right-sided heart failure; Class 4 (Caval Syndrome) - life-threatening blockage requiring emergency surgery. Diagnosis involves blood tests for heartworm proteins. X-rays and ultrasound assess severity. Treatment is expensive, risky, and requires strict rest: monthly prevention medication to prevent new infections, Melarsomine injections to kill adult worms (requires strict cage rest for weeks), treatment for complications. Prevention is essential: monthly preventatives (ivermectin-based products, or topical/injectable options), year-round prevention in mosquito-prone areas like Malaysia, and annual testing. Prevention costs a fraction of treatment and is much safer.',
      ms: 'Penyakit cacing jantung adalah keadaan serius yang berpotensi membawa maut, disebabkan oleh cacing sepanjang satu kaki (Dirofilaria immitis) yang hidup di dalam jantung, paru-paru, dan saluran darah. Ia dihantar oleh nyamuk yang membawa larva cacing jantung. Perkembangan penyakit: Gigitan nyamuk menghantar larva, yang berhijrah melalui tisu selama kira-kira 6 bulan sebelum sampai ke jantung. Cacing dewasa boleh hidup 5-7 tahun, tumbuh sehingga 12 inci panjang. Gejala maju melalui peringkat: Kelas 1 - tiada gejala atau batuk ringan; Kelas 2 - gejala sederhana; Kelas 3 - gejala teruk; Kelas 4 - penyumbatan yang mengancam nyawa. Diagnosis melibatkan ujian darah. Rawatan adalah mahal dan berisiko: pencegahan bulanan, suntikan Melarsomine untuk membunuh cacing dewasa (memerlukan rehat sangkar yang ketat). Pencegahan adalah penting: pencegahan bulanan, pencegahan sepanjang tahun di kawasan yang banyak nyamuk seperti Malaysia, dan ujian tahunan.',
      zh: '心丝虫病是一种严重的、可能致命的疾病，由生活在心脏、肺和血管中的一英尺长的蠕虫（犬恶丝虫）引起。它通过携带心丝虫幼虫的蚊子传播。疾病进展：蚊子叮咬传播幼虫，幼虫在组织中迁移约6个月后到达心脏。成虫可以存活5-7年，长达12英寸。一只狗可以携带30多条虫。症状分阶段进展：1级 - 无症状或轻微咳嗽；2级 - 中度症状，包括咳嗽、运动不耐受、异常肺音；3级 - 严重症状，包括体重下降、呼吸困难、心脏扩大、右心衰竭；4级（腔静脉综合征）- 需要紧急手术的危及生命的阻塞。诊断包括心丝虫蛋白血液检测。X光和超声波评估严重程度。治疗昂贵、有风险，需要严格休息：每月预防药物防止新感染、美拉索明注射杀死成虫（需要严格笼养休息数周）。预防至关重要：每月预防药（伊维菌素类产品或局部/注射选择）、在马来西亚等蚊子多的地区全年预防、年度检测。预防费用只是治疗的一小部分，而且更安全。'
    },
    keywords: ['heartworm', 'mosquito', 'heart', 'lung', 'coughing', 'prevention', 'Dirofilaria', 'worms']
  },
  {
    id: 'dog-intestinal-worms-1',
    category: 'dog-emergency',
    question: {
      en: 'What types of intestinal worms affect dogs and how are they treated?',
      ms: 'Apakah jenis cacing usus yang menjejaskan anjing dan bagaimana ia dirawat?',
      zh: '哪些类型的肠道蠕虫会影响狗，如何治疗？'
    },
    shortAnswer: {
      en: 'Common worms include roundworms, hookworms, whipworms, and tapeworms. Signs include diarrhea, vomiting, weight loss, pot-bellied appearance, and visible worms in stool. Treatment involves deworming medication. Regular prevention is important as some worms can spread to humans.',
      ms: 'Cacing biasa termasuk cacing gelang, cacing kait, cacing cambuk, dan cacing pita. Tanda-tanda termasuk cirit-birit, muntah, penurunan berat badan, dan cacing yang kelihatan dalam najis. Rawatan melibatkan ubat cacing.',
      zh: '常见蠕虫包括蛔虫、钩虫、鞭虫和绦虫。症状包括腹泻、呕吐、体重下降、大肚子外观和粪便中可见的虫子。治疗包括驱虫药。定期预防很重要，因为某些蠕虫可以传播给人类。'
    },
    fullAnswer: {
      en: 'Intestinal parasites are common in dogs, especially puppies. Main types include: Roundworms - most common; puppies often get them from mother; can cause pot-bellied appearance, vomiting, diarrhea, and poor growth; visible as spaghetti-like worms in stool or vomit. Hookworms - attach to intestinal wall and feed on blood; cause anemia, weight loss, bloody diarrhea; can be fatal in puppies; larvae can penetrate human skin. Whipworms - cause chronic large bowel diarrhea, often with mucus and blood; difficult to detect; require longer treatment. Tapeworms - usually from eating fleas or infected animals; segments look like rice grains near the anus or in stool; cause weight loss despite good appetite. Symptoms vary by worm type and burden: diarrhea (may be bloody), vomiting, weight loss, poor coat condition, pot-bellied appearance (puppies), visible worms in stool, scooting (tapeworms), anemia, and lethargy. Diagnosis involves fecal testing. Treatment: specific dewormers for different worms, often multiple treatments needed, treating all pets in household. Prevention includes: regular deworming schedule, year-round heartworm preventatives (many also prevent intestinal worms), flea control (prevents tapeworms), picking up feces promptly, and regular fecal testing. Some worms are zoonotic (can infect humans), making prevention especially important for families with children.',
      ms: 'Parasit usus adalah biasa pada anjing, terutamanya anak anjing. Jenis utama termasuk: Cacing gelang - paling biasa; anak anjing sering mendapatnya dari ibu; boleh menyebabkan penampilan perut buncit, muntah, cirit-birit, dan pertumbuhan yang lemah. Cacing kait - melekat pada dinding usus dan makan darah; menyebabkan anemia, penurunan berat badan, cirit-birit berdarah; boleh membawa maut pada anak anjing. Cacing cambuk - menyebabkan cirit-birit kronik. Cacing pita - biasanya dari makan kutu atau haiwan yang dijangkiti; segmen kelihatan seperti butiran beras. Gejala berbeza mengikut jenis cacing: cirit-birit, muntah, penurunan berat badan, keadaan bulu yang lemah, penampilan perut buncit, cacing yang kelihatan dalam najis, scooting. Diagnosis melibatkan ujian najis. Rawatan: ubat cacing khusus, sering memerlukan pelbagai rawatan. Pencegahan termasuk: jadual cacing tetap, pencegahan kutu, mengutip najis dengan segera.',
      zh: '肠道寄生虫在狗中很常见，尤其是幼犬。主要类型包括：蛔虫 - 最常见；幼犬通常从母亲那里感染；可导致大肚子外观、呕吐、腹泻和生长不良；在粪便或呕吐物中可见意大利面状的虫子。钩虫 - 附着在肠壁上吸血；导致贫血、体重下降、血性腹泻；对幼犬可能致命；幼虫可穿透人类皮肤。鞭虫 - 引起慢性大肠腹泻，通常带有粘液和血液；难以检测；需要较长时间治疗。绦虫 - 通常来自吃跳蚤或感染的动物；节片在肛门附近或粪便中看起来像米粒；尽管食欲良好仍导致体重下降。症状因虫类型和负担而异：腹泻（可能带血）、呕吐、体重下降、毛发状况差、大肚子外观（幼犬）、粪便中可见的虫子、拖屁股（绦虫）、贫血和嗜睡。诊断包括粪便检测。治疗：针对不同蠕虫的特定驱虫药，通常需要多次治疗。预防包括：定期驱虫计划、全年心丝虫预防药（许多也可预防肠道蠕虫）、跳蚤控制（预防绦虫）、及时清理粪便、定期粪便检测。一些蠕虫是人畜共患的（可感染人类），使预防对有孩子的家庭尤为重要。'
    },
    keywords: ['worms', 'roundworms', 'hookworms', 'tapeworms', 'whipworms', 'deworming', 'parasites', 'diarrhea']
  },
  {
    id: 'dog-uti-1',
    category: 'dog-emergency',
    question: {
      en: 'What are the signs of urinary tract infection (UTI) in dogs?',
      ms: 'Apakah tanda-tanda jangkitan saluran kencing (UTI) pada anjing?',
      zh: '狗狗尿路感染（UTI）有哪些症状？'
    },
    shortAnswer: {
      en: 'Signs include frequent urination, straining, blood in urine, accidents in the house, excessive licking of genitals, cloudy or smelly urine, and crying when urinating. Female dogs are more prone. Prompt treatment prevents kidney infection.',
      ms: 'Tanda-tanda termasuk kerap membuang air kecil, mengejan, darah dalam air kencing, kemalangan di dalam rumah, menjilat alat kelamin secara berlebihan, air kencing keruh atau berbau, dan menangis semasa membuang air kecil. Anjing betina lebih terdedah.',
      zh: '症状包括频繁排尿、排尿困难、尿血、在屋内排尿事故、过度舔舐生殖器、尿液混浊或有异味、排尿时哭叫。母犬更容易患病。及时治疗可预防肾脏感染。'
    },
    fullAnswer: {
      en: 'Urinary tract infections are common in dogs, particularly females due to their shorter urethra. Signs to watch for include: frequent urination attempts with small amounts, straining to urinate, blood in urine (pink or red tinge), accidents in house-trained dogs, excessive licking of genital area, cloudy or strong-smelling urine, crying or whimpering when urinating, fever and lethargy in severe cases, and drinking more water than usual. Common causes include: bacteria entering the urethra, bladder stones, weakened immune system, diabetes, Cushing\'s disease, and anatomical abnormalities. Diagnosis involves: urinalysis (checking for bacteria, blood, crystals), urine culture to identify specific bacteria, X-rays or ultrasound if stones suspected. Treatment includes: antibiotics (typically 10-14 days), pain medication if needed, increased water intake, and treating underlying conditions. Prevention tips: ensure access to fresh water, frequent potty breaks, proper hygiene, cranberry supplements may help, prompt treatment of underlying conditions. Seek immediate care if: your dog cannot urinate at all (emergency - possible blockage), there is significant blood in urine, your dog has fever or seems very ill, or symptoms don\'t improve with treatment. Recurrent UTIs may indicate underlying issues requiring further investigation.',
      ms: 'Jangkitan saluran kencing adalah biasa pada anjing, terutamanya betina kerana uretra mereka yang lebih pendek. Tanda-tanda yang perlu diperhatikan termasuk: percubaan membuang air kecil yang kerap dengan jumlah yang sedikit, mengejan untuk membuang air kecil, darah dalam air kencing, kemalangan pada anjing yang terlatih di rumah, menjilat kawasan kemaluan secara berlebihan, air kencing keruh atau berbau kuat, menangis semasa membuang air kecil, demam dan lesu dalam kes teruk. Diagnosis melibatkan: urinalisis, kultur air kencing, X-ray atau ultrasound. Rawatan termasuk: antibiotik (biasanya 10-14 hari), ubat sakit jika perlu, pengambilan air yang lebih banyak. Tips pencegahan: pastikan akses kepada air bersih, waktu tandas yang kerap, kebersihan yang betul. Dapatkan rawatan segera jika: anjing anda tidak boleh membuang air kecil langsung (kecemasan), terdapat darah yang ketara dalam air kencing, anjing anda demam atau kelihatan sangat sakit.',
      zh: '尿路感染在狗中很常见，尤其是母犬，因为它们的尿道较短。需要注意的症状包括：频繁尝试排尿但量少、排尿困难、尿血（粉红色或红色）、已训练的狗在屋内排尿事故、过度舔舐生殖器区域、尿液混浊或气味强烈、排尿时哭叫或呜咽、严重病例发烧和嗜睡、比平时喝更多水。常见原因包括：细菌进入尿道、膀胱结石、免疫系统减弱、糖尿病、库欣病和解剖异常。诊断包括：尿液分析（检查细菌、血液、结晶）、尿液培养以识别特定细菌、如怀疑结石则进行X光或超声波检查。治疗包括：抗生素（通常10-14天）、必要时止痛药、增加水分摄入、治疗潜在疾病。预防提示：确保获得新鲜水、频繁如厕、适当卫生、蔓越莓补充剂可能有帮助。如果出现以下情况请立即就医：您的狗根本无法排尿（紧急情况 - 可能阻塞）、尿中有大量血液、发烧或看起来病得很重。复发性UTI可能表明需要进一步调查的潜在问题。'
    },
    keywords: ['UTI', 'urinary', 'infection', 'blood urine', 'straining', 'frequent urination', 'bladder']
  },
  {
    id: 'dog-eye-infection-1',
    category: 'dog-emergency',
    question: {
      en: 'What are the signs of eye problems in dogs?',
      ms: 'Apakah tanda-tanda masalah mata pada anjing?',
      zh: '狗狗眼睛问题有哪些症状？'
    },
    shortAnswer: {
      en: 'Signs include redness, swelling, discharge (clear, yellow, or green), squinting, pawing at eyes, cloudiness, visible third eyelid, sensitivity to light, and behavior changes. Some conditions like glaucoma are emergencies requiring immediate care to prevent blindness.',
      ms: 'Tanda-tanda termasuk kemerahan, bengkak, lelehan (jernih, kuning, atau hijau), memicingkan mata, menggaru mata, kekeruhan, kelopak mata ketiga yang kelihatan, dan perubahan tingkah laku. Sesetengah keadaan seperti glaukoma adalah kecemasan.',
      zh: '症状包括发红、肿胀、分泌物（透明、黄色或绿色）、眯眼、用爪子抓眼睛、混浊、可见第三眼睑、对光敏感和行为变化。某些情况如青光眼是需要立即护理以防止失明的紧急情况。'
    },
    fullAnswer: {
      en: 'Dogs can develop various eye conditions, some minor and others requiring emergency care. Warning signs include: redness or bloodshot eyes, swelling of the eye or eyelids, discharge (clear, yellow, green, or bloody), squinting or keeping eye closed, pawing or rubbing at eye, cloudiness or change in eye color, visible third eyelid, sensitivity to light, visible injury or foreign object, and changes in pupil size. Common conditions include: Conjunctivitis (pink eye) - redness, discharge, usually responds to medication; Corneal ulcers - painful, may follow injury or infection, requires prompt treatment; Dry eye (KCS) - insufficient tear production, causes mucus discharge; Glaucoma - EMERGENCY, increased eye pressure, causes rapid vision loss, signs include enlarged eye, severe pain, cloudiness; Cherry eye - prolapsed third eyelid gland, requires surgery; Cataracts - cloudy lens, common in diabetic and older dogs; and Entropion/ectropion - eyelid abnormalities causing irritation. Seek IMMEDIATE veterinary care if: sudden vision loss, severe pain, significantly enlarged or bulging eye, injury to eye, blue/cloudy appearance with pain (possible glaucoma), or eye appears to be coming out of socket. Prevention includes: keeping face clean, trimming hair around eyes, protecting eyes during grooming, and regular vet checks for breeds prone to eye issues.',
      ms: 'Anjing boleh mengalami pelbagai keadaan mata, ada yang ringan dan ada yang memerlukan rawatan kecemasan. Tanda-tanda amaran termasuk: kemerahan atau mata berdarah, bengkak mata atau kelopak mata, lelehan (jernih, kuning, hijau, atau berdarah), memicingkan mata atau menjaga mata tertutup, menggaru atau menggosok mata, kekeruhan atau perubahan warna mata, kelopak mata ketiga yang kelihatan, sensitif kepada cahaya, kecederaan atau objek asing yang kelihatan. Keadaan biasa termasuk: Konjunktivitis - kemerahan, lelehan; Ulser kornea - menyakitkan, memerlukan rawatan segera; Mata kering (KCS); Glaukoma - KECEMASAN, tekanan mata meningkat; Cherry eye - memerlukan pembedahan; Katarak - kanta keruh. Dapatkan rawatan veterinar SEGERA jika: kehilangan penglihatan secara tiba-tiba, sakit yang teruk, mata membesar dengan ketara, kecederaan pada mata.',
      zh: '狗可能出现各种眼部问题，有些是轻微的，有些需要紧急护理。警告信号包括：眼睛发红或充血、眼睛或眼睑肿胀、分泌物（透明、黄色、绿色或血性）、眯眼或闭眼、用爪子抓或揉眼睛、混浊或眼睛颜色变化、可见第三眼睑、对光敏感、可见损伤或异物、瞳孔大小变化。常见情况包括：结膜炎（红眼病）- 发红、分泌物；角膜溃疡 - 疼痛，需要及时治疗；干眼症（KCS）- 泪液分泌不足；青光眼 - 紧急情况，眼压升高，导致快速视力丧失；樱桃眼 - 需要手术；白内障 - 晶状体混浊；眼睑内翻/外翻 - 眼睑异常导致刺激。如果出现以下情况请立即就医：突然视力丧失、剧烈疼痛、眼睛明显增大或突出、眼睛受伤、蓝色/混浊外观伴疼痛（可能是青光眼）。预防包括：保持面部清洁、修剪眼睛周围的毛发、美容时保护眼睛、定期检查易患眼疾的品种。'
    },
    keywords: ['eye', 'infection', 'redness', 'discharge', 'squinting', 'glaucoma', 'conjunctivitis', 'cloudiness']
  },
  {
    id: 'dog-dental-disease-1',
    category: 'dog-emergency',
    question: {
      en: 'What are the signs of dental disease in dogs?',
      ms: 'Apakah tanda-tanda penyakit gigi pada anjing?',
      zh: '狗狗牙齿疾病有哪些症状？'
    },
    shortAnswer: {
      en: 'Signs include bad breath, yellow/brown tartar, red/bleeding gums, difficulty eating, dropping food, facial swelling, pawing at mouth, loose teeth, and drooling. Dental disease affects 80% of dogs by age 3 and can lead to serious health problems.',
      ms: 'Tanda-tanda termasuk nafas berbau, tartar kuning/coklat, gusi merah/berdarah, kesukaran makan, menjatuhkan makanan, bengkak muka, menggaru mulut, gigi longgar, dan air liur berlebihan. Penyakit gigi menjejaskan 80% anjing menjelang usia 3 tahun.',
      zh: '症状包括口臭、黄色/棕色牙垢、牙龈红肿/出血、进食困难、掉落食物、面部肿胀、用爪子抓嘴、牙齿松动和流口水。到3岁时，80%的狗会患牙齿疾病，可能导致严重的健康问题。'
    },
    fullAnswer: {
      en: 'Dental disease (periodontal disease) is extremely common, affecting over 80% of dogs by age 3. It can lead to serious systemic health issues if untreated. Warning signs include: persistent bad breath (halitosis), visible tartar buildup (yellow/brown), red, swollen, or bleeding gums, difficulty eating or chewing on one side, dropping food while eating, reluctance to eat hard food, facial swelling (dental abscess), pawing at mouth, loose or missing teeth, excessive drooling, behavioral changes (irritability from pain), and weight loss. Stages of dental disease: Stage 1 (Gingivitis) - inflammation of gums, reversible with treatment; Stage 2-3 (Periodontitis) - bone loss begins, may need extractions; Stage 4 - severe bone and tissue loss, significant extractions needed. Health impacts beyond the mouth: bacteria from dental disease can spread to heart, liver, and kidneys, potentially causing organ damage. Dental disease has been linked to heart disease in dogs. Treatment includes professional dental cleaning under anesthesia, tooth extractions if needed, antibiotics for infections, and pain management. Prevention is key: daily tooth brushing with dog-safe toothpaste, dental chews and toys, dental diet foods, regular professional cleanings, and starting dental care when young.',
      ms: 'Penyakit gigi (penyakit periodontal) sangat biasa, menjejaskan lebih 80% anjing menjelang usia 3 tahun. Ia boleh membawa kepada masalah kesihatan sistemik yang serius jika tidak dirawat. Tanda-tanda amaran termasuk: nafas berbau yang berterusan, pengumpulan tartar yang kelihatan, gusi merah, bengkak, atau berdarah, kesukaran makan, menjatuhkan makanan semasa makan, keengganan makan makanan keras, bengkak muka, menggaru mulut, gigi longgar atau hilang, air liur berlebihan, dan penurunan berat badan. Rawatan termasuk pembersihan gigi profesional di bawah bius, pencabutan gigi jika perlu, antibiotik untuk jangkitan, dan pengurusan kesakitan. Pencegahan adalah kunci: memberus gigi setiap hari dengan ubat gigi yang selamat untuk anjing, kunyahan gigi, makanan diet gigi, pembersihan profesional tetap, dan memulakan penjagaan gigi ketika muda.',
      zh: '牙齿疾病（牙周病）极为常见，到3岁时影响超过80%的狗。如果不治疗，可能导致严重的全身健康问题。警告信号包括：持续口臭、可见牙垢堆积（黄色/棕色）、牙龈红肿或出血、进食困难或只用一侧咀嚼、进食时掉落食物、不愿吃硬食物、面部肿胀（牙脓肿）、用爪子抓嘴、牙齿松动或缺失、过度流口水、行为变化（因疼痛而易怒）、体重下降。牙齿疾病阶段：1期（牙龈炎）- 牙龈炎症，可通过治疗逆转；2-3期（牙周炎）- 开始骨质流失，可能需要拔牙；4期 - 严重骨和组织流失，需要大量拔牙。口腔以外的健康影响：牙齿疾病的细菌可扩散到心脏、肝脏和肾脏，可能造成器官损伤。牙齿疾病与狗的心脏病有关。治疗包括麻醉下专业牙齿清洁、必要时拔牙、感染抗生素治疗和疼痛管理。预防是关键：每天用狗安全的牙膏刷牙、洁牙咀嚼物和玩具、洁牙饮食食品、定期专业清洁、从小开始牙齿护理。'
    },
    keywords: ['dental', 'teeth', 'gums', 'bad breath', 'tartar', 'periodontal', 'extraction', 'cleaning']
  },
  {
    id: 'dog-arthritis-1',
    category: 'dog-emergency',
    question: {
      en: 'What are the signs of arthritis in dogs and how is it managed?',
      ms: 'Apakah tanda-tanda arthritis pada anjing dan bagaimana ia diurus?',
      zh: '狗狗关节炎有哪些症状，如何管理？'
    },
    shortAnswer: {
      en: 'Signs include limping, stiffness (especially after rest), reluctance to jump or climb stairs, decreased activity, difficulty rising, behavioral changes, and muscle loss. Management includes weight control, exercise modification, joint supplements, pain medication, and physical therapy.',
      ms: 'Tanda-tanda termasuk tempang, kekakuan, keengganan melompat atau memanjat tangga, aktiviti berkurang, kesukaran bangun, perubahan tingkah laku, dan kehilangan otot. Pengurusan termasuk kawalan berat badan, pengubahsuaian senaman, suplemen sendi, dan ubat sakit.',
      zh: '症状包括跛行、僵硬（尤其是休息后）、不愿跳跃或爬楼梯、活动减少、起身困难、行为变化和肌肉流失。管理包括体重控制、运动调整、关节补充剂、止痛药和物理治疗。'
    },
    fullAnswer: {
      en: 'Arthritis (osteoarthritis or degenerative joint disease) is common in dogs, especially seniors and larger breeds. It causes progressive joint deterioration and chronic pain. Signs to watch for include: limping or favoring certain limbs, stiffness (especially after rest or in cold weather), reluctance to jump, climb stairs, or play, difficulty getting up or lying down, decreased activity or enthusiasm for walks, irritability or behavioral changes, licking or chewing at joints, muscle loss in affected limbs, and swollen joints. Risk factors include: age (common in senior dogs), breed (large breeds, some small breeds like Dachshunds), previous joint injuries, obesity, and genetic factors. Diagnosis involves physical examination, observing gait, X-rays, and sometimes joint fluid analysis. Multi-modal management approach: Weight management is crucial - extra weight increases joint stress; Exercise modification - regular, low-impact exercise (swimming is excellent), avoid high-impact activities; Joint supplements - glucosamine, chondroitin, omega-3 fatty acids; Medications - NSAIDs, Galliprant, Adequan injections; Alternative therapies - acupuncture, laser therapy, physical therapy, hydrotherapy; Environmental modifications - orthopedic beds, ramps instead of stairs, raised food bowls, non-slip surfaces; and in severe cases, surgery may be considered. Regular vet checkups help monitor progression and adjust treatment.',
      ms: 'Arthritis (osteoarthritis atau penyakit sendi degeneratif) adalah biasa pada anjing, terutamanya senior dan baka besar. Ia menyebabkan kemerosotan sendi progresif dan kesakitan kronik. Tanda-tanda yang perlu diperhatikan termasuk: tempang atau memihak anggota tertentu, kekakuan (terutamanya selepas rehat atau cuaca sejuk), keengganan melompat atau memanjat tangga, kesukaran bangun atau berbaring, aktiviti berkurang, perubahan tingkah laku, menjilat atau mengunyah sendi, kehilangan otot pada anggota yang terjejas, dan sendi bengkak. Pengurusan pendekatan pelbagai modal: Pengurusan berat badan adalah penting; Pengubahsuaian senaman - senaman biasa dengan impak rendah; Suplemen sendi - glukosamin, kondroitin, asid lemak omega-3; Ubat-ubatan - NSAID, Galliprant, suntikan Adequan; Terapi alternatif - akupunktur, terapi laser, fisioterapi, hidroterapi; Pengubahsuaian persekitaran - katil ortopedik, tanjakan bukannya tangga.',
      zh: '关节炎（骨关节炎或退行性关节病）在狗中很常见，尤其是老年犬和大型犬种。它会导致进行性关节退化和慢性疼痛。需要注意的症状包括：跛行或偏爱某些肢体、僵硬（尤其是休息后或寒冷天气）、不愿跳跃或爬楼梯、起身或躺下困难、活动减少或对散步缺乏热情、易怒或行为变化、舔或咬关节、受影响肢体肌肉流失、关节肿胀。风险因素包括：年龄（老年犬常见）、品种（大型犬、一些小型犬如腊肠犬）、以前的关节损伤、肥胖和遗传因素。诊断包括体检、观察步态、X光，有时进行关节液分析。多模式管理方法：体重管理至关重要；运动调整 - 定期低冲击运动（游泳很好）；关节补充剂 - 氨基葡萄糖、软骨素、omega-3脂肪酸；药物 - NSAIDs、Galliprant、Adequan注射；替代疗法 - 针灸、激光治疗、物理治疗、水疗；环境调整 - 骨科床、坡道代替楼梯、升高的食物碗、防滑表面。定期兽医检查有助于监测进展并调整治疗。'
    },
    keywords: ['arthritis', 'joint', 'stiffness', 'limping', 'pain', 'mobility', 'senior', 'glucosamine']
  },
  {
    id: 'dog-diabetes-1',
    category: 'dog-emergency',
    question: {
      en: 'What are the signs of diabetes in dogs?',
      ms: 'Apakah tanda-tanda diabetes pada anjing?',
      zh: '狗狗糖尿病有哪些症状？'
    },
    shortAnswer: {
      en: 'Signs include increased thirst and urination, weight loss despite good appetite, increased hunger, lethargy, cloudy eyes (cataracts), recurring infections, and sweet-smelling breath. Without treatment, dogs can develop life-threatening diabetic ketoacidosis (DKA).',
      ms: 'Tanda-tanda termasuk dahaga dan kencing yang meningkat, penurunan berat badan walaupun selera makan baik, kelaparan yang meningkat, lesu, mata keruh (katarak), jangkitan berulang, dan nafas berbau manis.',
      zh: '症状包括口渴和排尿增加、食欲良好但体重下降、饥饿感增加、嗜睡、眼睛混浊（白内障）、反复感染和呼吸有甜味。不治疗的话，狗可能发展为危及生命的糖尿病酮症酸中毒（DKA）。'
    },
    fullAnswer: {
      en: 'Diabetes mellitus in dogs occurs when the body cannot produce or properly use insulin, leading to high blood sugar. It most commonly affects middle-aged to older dogs, females, and certain breeds. Early signs (the "4 Ps"): Polyuria - increased urination, Polydipsia - increased thirst, Polyphagia - increased appetite, and weight loss despite eating well. Additional signs include: lethargy or decreased energy, recurring infections (skin, urinary), cloudy eyes (cataracts develop quickly in diabetic dogs), sweet or fruity-smelling breath, vomiting, and weakness in back legs. Emergency signs (Diabetic Ketoacidosis - DKA): severe vomiting, complete loss of appetite, extreme weakness or collapse, rapid breathing, and sweet/acetone breath - SEEK IMMEDIATE CARE. Risk factors include: obesity, pancreatitis, Cushing\'s disease, long-term steroid use, and genetics. Diagnosis involves blood tests showing high glucose levels and urine tests showing glucose. Management requires lifelong commitment: twice-daily insulin injections, consistent feeding schedule, regular glucose monitoring, moderate regular exercise, weight management, and frequent vet checkups. Prognosis: Well-managed diabetic dogs can live normal, happy lives. Early detection and consistent management are key. Complications like cataracts may still develop but don\'t affect overall health.',
      ms: 'Diabetes mellitus pada anjing berlaku apabila badan tidak dapat menghasilkan atau menggunakan insulin dengan betul, menyebabkan gula darah tinggi. Ia paling biasa menjejaskan anjing berusia pertengahan hingga tua, betina, dan baka tertentu. Tanda-tanda awal (4 P): Poliuria - peningkatan kencing, Polidipsia - peningkatan dahaga, Polifagia - peningkatan selera makan, dan penurunan berat badan. Tanda-tanda tambahan termasuk: lesu, jangkitan berulang, mata keruh (katarak berkembang dengan cepat), nafas berbau manis, muntah, dan kelemahan pada kaki belakang. Tanda-tanda kecemasan (DKA): muntah teruk, hilang selera makan sepenuhnya, kelemahan melampau - DAPATKAN RAWATAN SEGERA. Pengurusan memerlukan komitmen seumur hidup: suntikan insulin dua kali sehari, jadual makan yang konsisten, pemantauan glukosa tetap, senaman sederhana tetap, pengurusan berat badan, dan pemeriksaan veterinar kerap. Prognosis: Anjing diabetes yang diurus dengan baik boleh menjalani kehidupan yang normal dan bahagia.',
      zh: '狗的糖尿病发生在身体无法产生或正确使用胰岛素时，导致高血糖。它最常影响中老年犬、母犬和某些品种。早期症状（4个P）：多尿 - 排尿增加，多饮 - 口渴增加，多食 - 食欲增加，体重下降尽管吃得好。其他症状包括：嗜睡或精力下降、反复感染（皮肤、泌尿）、眼睛混浊（糖尿病犬白内障发展迅速）、呼吸有甜味或水果味、呕吐、后腿无力。紧急症状（糖尿病酮症酸中毒 - DKA）：严重呕吐、完全食欲丧失、极度虚弱或崩溃、呼吸急促、甜味/丙酮味呼吸 - 立即就医。风险因素包括：肥胖、胰腺炎、库欣病、长期使用类固醇和遗传。诊断包括显示高血糖水平的血液检查和显示葡萄糖的尿液检查。管理需要终身承诺：每天两次胰岛素注射、一致的喂食时间表、定期血糖监测、适度定期运动、体重管理和频繁的兽医检查。预后：管理良好的糖尿病犬可以过正常、快乐的生活。早期发现和一致的管理是关键。'
    },
    keywords: ['diabetes', 'thirst', 'urination', 'weight loss', 'insulin', 'glucose', 'cataracts', 'ketoacidosis']
  },
  {
    id: 'dog-cushings-1',
    category: 'dog-emergency',
    question: {
      en: 'What is Cushing\'s disease in dogs and what are the symptoms?',
      ms: 'Apakah penyakit Cushing pada anjing dan apakah gejalanya?',
      zh: '什么是狗的库欣病，有什么症状？'
    },
    shortAnswer: {
      en: 'Cushing\'s disease causes excessive cortisol production. Symptoms include increased thirst/urination, pot-bellied appearance, hair loss, thin skin, panting, muscle weakness, and recurring infections. It usually affects middle-aged to older dogs. Treatment depends on the type and severity.',
      ms: 'Penyakit Cushing menyebabkan pengeluaran kortisol yang berlebihan. Gejala termasuk dahaga/kencing yang meningkat, penampilan perut buncit, keguguran bulu, kulit nipis, terengah-engah, kelemahan otot, dan jangkitan berulang.',
      zh: '库欣病导致皮质醇分泌过多。症状包括口渴/排尿增加、大肚子外观、脱毛、皮肤薄、喘气、肌肉无力和反复感染。它通常影响中老年犬。治疗取决于类型和严重程度。'
    },
    fullAnswer: {
      en: 'Cushing\'s disease (hyperadrenocorticism) occurs when the body produces too much cortisol, a stress hormone. It\'s one of the most common endocrine disorders in middle-aged to older dogs. Types include: Pituitary-dependent (80-85% of cases) - tumor on pituitary gland stimulates excess cortisol; Adrenal-dependent (15-20%) - tumor on adrenal gland produces excess cortisol; Iatrogenic - caused by long-term steroid medication use. Symptoms develop gradually: increased thirst and urination (often the first sign), increased appetite, pot-bellied appearance (liver enlargement and fat redistribution), hair loss (typically symmetrical on both sides), thin, fragile skin that bruises easily, recurring skin or urinary infections, panting and heat intolerance, muscle weakness and lethargy, and skin calcification (hard patches). Diagnosis involves multiple tests: blood chemistry showing elevated liver enzymes, urine cortisol:creatinine ratio, ACTH stimulation test, low-dose dexamethasone suppression test, and ultrasound to check for adrenal tumors. Treatment options: for pituitary-dependent - oral medication (Trilostane/Vetoryl or Lysodren) to suppress cortisol production, requires lifelong treatment and monitoring; for adrenal tumors - surgery may be an option; for iatrogenic - gradually reduce steroid dosage under vet supervision. Prognosis: with proper treatment, most dogs live comfortably for years. Untreated Cushing\'s increases risk of diabetes, infections, blood clots, and hypertension.',
      ms: 'Penyakit Cushing (hiperadrenokortisisme) berlaku apabila badan menghasilkan terlalu banyak kortisol, hormon tekanan. Ia adalah salah satu gangguan endokrin yang paling biasa pada anjing berusia pertengahan hingga tua. Jenis termasuk: Bergantung kepada pituitari (80-85% kes); Bergantung kepada adrenal (15-20%); Iatrogenik - disebabkan oleh penggunaan ubat steroid jangka panjang. Gejala berkembang secara beransur-ansur: dahaga dan kencing yang meningkat, selera makan yang meningkat, penampilan perut buncit, keguguran bulu, kulit nipis dan rapuh, jangkitan berulang, terengah-engah, kelemahan otot dan lesu. Diagnosis melibatkan pelbagai ujian. Pilihan rawatan: untuk bergantung kepada pituitari - ubat oral untuk menekan pengeluaran kortisol; untuk tumor adrenal - pembedahan mungkin pilihan. Prognosis: dengan rawatan yang betul, kebanyakan anjing hidup dengan selesa selama bertahun-tahun.',
      zh: '库欣病（肾上腺皮质功能亢进症）发生在身体产生过多皮质醇（一种应激激素）时。它是中老年犬最常见的内分泌疾病之一。类型包括：垂体依赖性（80-85%的病例）- 垂体上的肿瘤刺激过多皮质醇；肾上腺依赖性（15-20%）- 肾上腺上的肿瘤产生过多皮质醇；医源性 - 长期使用类固醇药物引起。症状逐渐发展：口渴和排尿增加（通常是第一个迹象）、食欲增加、大肚子外观（肝脏肿大和脂肪重新分布）、脱毛（通常两侧对称）、皮肤薄而脆弱容易瘀伤、反复皮肤或泌尿感染、喘气和不耐热、肌肉无力和嗜睡、皮肤钙化（硬块）。诊断包括多项测试。治疗选择：垂体依赖性 - 口服药物抑制皮质醇产生，需要终身治疗和监测；肾上腺肿瘤 - 手术可能是一个选择；医源性 - 在兽医监督下逐渐减少类固醇剂量。预后：通过适当治疗，大多数狗可以舒适地生活多年。未经治疗的库欣病会增加糖尿病、感染、血栓和高血压的风险。'
    },
    keywords: ['Cushing', 'cortisol', 'pot belly', 'hair loss', 'thirst', 'adrenal', 'pituitary', 'Trilostane']
  },
  {
    id: 'dog-bloat-gdv-1',
    category: 'dog-emergency',
    question: {
      en: 'What is bloat (GDV) in dogs and why is it a life-threatening emergency?',
      ms: 'Apakah bloat (GDV) pada anjing dan mengapa ia kecemasan yang mengancam nyawa?',
      zh: '什么是狗的胃扩张扭转（GDV），为什么它是危及生命的紧急情况？'
    },
    shortAnswer: {
      en: 'Bloat/GDV occurs when the stomach fills with gas and twists. Signs include distended abdomen, unproductive retching, restlessness, drooling, rapid breathing, and collapse. Without emergency surgery within hours, it is fatal. Large, deep-chested breeds are most at risk.',
      ms: 'Bloat/GDV berlaku apabila perut dipenuhi gas dan berpusing. Tanda-tanda termasuk perut kembung, cuba muntah tanpa hasil, gelisah, air liur berlebihan, dan rebah. Tanpa pembedahan kecemasan dalam beberapa jam, ia membawa maut.',
      zh: 'GDV/胃扭转发生在胃充满气体并扭转时。症状包括腹部膨胀、干呕无物、烦躁不安、流口水、呼吸急促和虚脱。如果不在数小时内进行紧急手术，将是致命的。大型深胸犬种风险最高。'
    },
    fullAnswer: {
      en: 'Gastric Dilatation-Volvulus (GDV), commonly called bloat, is one of the most serious emergencies in dogs, with mortality rates of 20-45% even with treatment. The condition has two components: Gastric Dilatation - stomach fills with gas and fluid; Volvulus - stomach rotates, cutting off blood supply. What happens: the twisted stomach traps gas and fluids, compresses major blood vessels (reducing blood flow to vital organs), the spleen may also twist, tissue begins dying within hours, and toxins release as tissue dies. Warning signs - EMERGENCY: distended, hard abdomen, unproductive retching (trying to vomit but nothing comes up), restlessness and pacing, excessive drooling, rapid shallow breathing, pale gums, weakness or collapse, and rapid heart rate. High-risk breeds: Great Danes (highest risk), German Shepherds, Standard Poodles, Weimaraners, and other large, deep-chested breeds. Risk factors: eating one large meal daily, eating rapidly, elevated food bowls (controversial), exercise right after eating, stress, and family history. THIS IS AN EMERGENCY: If you suspect GDV, go to an emergency vet IMMEDIATELY - do not wait. Treatment requires emergency surgery to untwist the stomach, remove dead tissue, and perform gastropexy (stitching stomach to body wall to prevent recurrence). Prevention for high-risk dogs: feed smaller, more frequent meals, slow feeder bowls, no exercise 1 hour before/after meals, and consider preventive gastropexy during spay/neuter.',
      ms: 'Gastric Dilatation-Volvulus (GDV), biasanya dipanggil bloat, adalah salah satu kecemasan paling serius pada anjing, dengan kadar kematian 20-45% walaupun dengan rawatan. Keadaan ini mempunyai dua komponen: Pelebaran Gastrik - perut dipenuhi gas dan cecair; Volvulus - perut berpusing, memotong bekalan darah. Apa yang berlaku: perut yang berpusing memerangkap gas dan cecair, memampatkan saluran darah utama, tisu mula mati dalam beberapa jam, toksin dilepaskan apabila tisu mati. Tanda-tanda amaran - KECEMASAN: perut kembung dan keras, cuba muntah tanpa hasil, gelisah dan berjalan ke sana sini, air liur berlebihan, pernafasan cetek yang cepat, gusi pucat, kelemahan atau rebah. Baka berisiko tinggi: Great Danes, German Shepherd, Poodle Standard, dan baka besar dengan dada dalam yang lain. INI ADALAH KECEMASAN: Jika anda mengesyaki GDV, pergi ke veterinar kecemasan SEGERA. Rawatan memerlukan pembedahan kecemasan. Pencegahan untuk anjing berisiko tinggi: beri makan yang lebih kecil dan lebih kerap, mangkuk makan perlahan, tiada senaman 1 jam sebelum/selepas makan.',
      zh: '胃扩张扭转（GDV），通常称为胃扭转，是狗最严重的急症之一，即使经过治疗，死亡率也高达20-45%。这种情况有两个组成部分：胃扩张 - 胃充满气体和液体；扭转 - 胃旋转，切断血液供应。发生的情况：扭转的胃困住气体和液体，压迫主要血管（减少对重要器官的血流），脾脏也可能扭转，组织在数小时内开始死亡，组织死亡时释放毒素。警告信号 - 紧急情况：腹部膨胀、坚硬，干呕（试图呕吐但什么都吐不出来），烦躁不安和踱步，过度流口水，快速浅呼吸，牙龈苍白，虚弱或虚脱，心率加快。高风险品种：大丹犬（风险最高）、德国牧羊犬、标准贵宾犬、威玛猎犬和其他大型深胸品种。风险因素：每天只吃一顿大餐、吃得快、进食后立即运动、压力和家族史。这是紧急情况：如果您怀疑是GDV，立即去急诊兽医 - 不要等待。治疗需要紧急手术来解开胃扭转、移除死亡组织并进行胃固定术（将胃缝合到腹壁以防止复发）。高风险狗的预防：喂食更小更频繁的餐食、使用慢食碗、进食前后1小时内不运动。'
    },
    keywords: ['bloat', 'GDV', 'gastric', 'volvulus', 'emergency', 'distended', 'retching', 'twisted stomach']
  },
  {
    id: 'dog-seizures-1',
    category: 'dog-emergency',
    question: {
      en: 'What should I do if my dog has a seizure?',
      ms: 'Apa yang perlu saya lakukan jika anjing saya mengalami sawan?',
      zh: '如果我的狗癫痫发作，我该怎么办？'
    },
    shortAnswer: {
      en: 'Stay calm and keep your dog safe by moving furniture away. Do NOT put anything in their mouth. Time the seizure. Keep them cool and calm afterward. Seek emergency care if seizure lasts more than 5 minutes, multiple seizures occur, or it\'s their first seizure.',
      ms: 'Kekal tenang dan pastikan anjing anda selamat dengan mengalihkan perabot. JANGAN masukkan apa-apa ke dalam mulut mereka. Masa sawan. Pastikan mereka sejuk dan tenang selepas itu. Dapatkan rawatan kecemasan jika sawan berlangsung lebih dari 5 minit.',
      zh: '保持冷静，通过移开家具确保狗的安全。不要把任何东西放进它们的嘴里。计时癫痫发作。事后保持凉爽和平静。如果癫痫发作超过5分钟、多次发作或是首次发作，请寻求紧急护理。'
    },
    fullAnswer: {
      en: 'Seizures in dogs can be frightening, but knowing how to respond can help keep your pet safe. During a seizure: Stay calm - your dog is not in pain during the seizure. Keep them safe - gently move them away from stairs, furniture, or water; place cushions around if possible. Do NOT put anything in their mouth - dogs cannot swallow their tongue, and you risk being bitten. Do NOT restrain them - let the seizure run its course. Time the seizure - duration is important information for your vet. Keep the area quiet and dim if possible. After the seizure (postictal phase): your dog may be confused, disoriented, or temporarily blind, they may pace, drink excessively, or seem hungry, stay with them and speak calmly, keep them in a safe, quiet area, offer water but don\'t force eating, and this phase can last minutes to hours. When to seek EMERGENCY care: seizure lasts more than 5 minutes (status epilepticus - life threatening), multiple seizures in 24 hours (cluster seizures), it\'s their first seizure ever, difficulty recovering, or high body temperature. Common causes include: Epilepsy (idiopathic), Toxin ingestion, Liver or kidney disease, Brain tumors, Low blood sugar, and Infections. Treatment depends on the cause. Epilepsy is often managed with daily anticonvulsant medications like phenobarbital or potassium bromide. Keep a seizure diary recording date, time, duration, and description to help your vet manage the condition.',
      ms: 'Sawan pada anjing boleh menakutkan, tetapi mengetahui cara untuk bertindak balas boleh membantu memastikan haiwan peliharaan anda selamat. Semasa sawan: Kekal tenang - anjing anda tidak kesakitan semasa sawan. Pastikan mereka selamat - alihkan mereka dari tangga, perabot, atau air dengan lembut. JANGAN masukkan apa-apa ke dalam mulut mereka - anjing tidak boleh menelan lidah mereka dan anda berisiko digigit. JANGAN mengekang mereka. Masa sawan - tempoh adalah maklumat penting untuk veterinar anda. Selepas sawan (fasa postictal): anjing anda mungkin keliru atau disorientasi. Bila untuk mendapatkan rawatan KECEMASAN: sawan berlangsung lebih dari 5 minit, pelbagai sawan dalam 24 jam, sawan pertama mereka, kesukaran pulih, atau suhu badan tinggi. Punca biasa termasuk: Epilepsi, Pengambilan toksin, Penyakit hati atau buah pinggang, Tumor otak, Gula darah rendah, Jangkitan. Rawatan bergantung kepada punca. Epilepsi sering diurus dengan ubat antikonvulsan harian.',
      zh: '狗的癫痫发作可能令人恐惧，但知道如何应对可以帮助保护您的宠物安全。癫痫发作期间：保持冷静 - 您的狗在发作期间没有疼痛。确保它们安全 - 轻轻地将它们移离楼梯、家具或水；如果可能的话在周围放置垫子。不要把任何东西放进它们的嘴里 - 狗不会吞下舌头，您有被咬的风险。不要约束它们 - 让癫痫自然结束。计时癫痫发作 - 持续时间是给兽医的重要信息。如果可能，保持环境安静昏暗。癫痫发作后（发作后期）：您的狗可能会困惑、迷失方向或暂时失明，它们可能会踱步、过度饮水或看起来饥饿，陪伴它们并平静地说话，让它们待在安全、安静的区域，提供水但不要强迫进食。何时寻求紧急护理：癫痫发作超过5分钟（癫痫持续状态 - 危及生命）、24小时内多次发作（丛集性发作）、首次发作、恢复困难或体温过高。常见原因包括：癫痫（特发性）、毒素摄入、肝脏或肾脏疾病、脑肿瘤、低血糖、感染。治疗取决于病因。癫痫通常通过每日抗惊厥药物如苯巴比妥或溴化钾来管理。保持癫痫日记记录日期、时间、持续时间和描述，以帮助兽医管理病情。'
    },
    keywords: ['seizure', 'epilepsy', 'convulsion', 'fitting', 'emergency', 'phenobarbital', 'neurological']
  },
  {
    id: 'dog-bite-wounds-1',
    category: 'dog-emergency',
    question: {
      en: 'How should I treat bite wounds or injuries on my dog?',
      ms: 'Bagaimana saya harus merawat luka gigitan atau kecederaan pada anjing saya?',
      zh: '我应该如何治疗我的狗的咬伤或受伤？'
    },
    shortAnswer: {
      en: 'Apply gentle pressure to stop bleeding, clean the wound with saline or clean water, and see a vet immediately. Bite wounds often look minor but have deep tissue damage and high infection risk. Do NOT use hydrogen peroxide or alcohol. Most bites need professional treatment.',
      ms: 'Tekan lembut untuk menghentikan pendarahan, bersihkan luka dengan salin atau air bersih, dan jumpa veterinar segera. Luka gigitan sering kelihatan kecil tetapi mempunyai kerosakan tisu dalam dan risiko jangkitan tinggi.',
      zh: '轻轻按压止血，用生理盐水或清水清洗伤口，立即就医。咬伤看起来可能很轻微，但通常有深层组织损伤和高感染风险。不要使用过氧化氢或酒精。大多数咬伤需要专业治疗。'
    },
    fullAnswer: {
      en: 'Bite wounds are serious injuries that require prompt veterinary attention, even if they appear minor on the surface. Why bite wounds are dangerous: Puncture wounds may be small on the surface but deep underneath (iceberg effect). Dog teeth carry bacteria that can cause serious infections. Crushing injuries damage tissue beneath the skin. Infection can develop rapidly, sometimes leading to abscesses. Immediate first aid: Stay safe - a hurt dog may bite. Muzzle if needed. Control bleeding - apply gentle pressure with clean cloth. Do NOT use a tourniquet. Clean the wound - use sterile saline or clean water to gently flush. Do NOT use hydrogen peroxide, alcohol, or other harsh antiseptics (they damage tissue). Cover loosely - with clean gauze or cloth. Prevent licking - use an E-collar if available. Seek veterinary care - even if wound seems minor. Veterinary treatment typically includes: thorough wound cleaning and flushing, exploration of wound depth, removal of dead tissue, drainage placement for deep wounds, antibiotics (oral and/or injectable), pain medication, sometimes surgical closure (often delayed to ensure infection control), and rabies evaluation if the biting animal\'s status is unknown. Watch for infection signs: increasing redness, swelling, heat, discharge (especially if yellow/green or foul-smelling), fever, and lethargy. Deep wounds, wounds from unknown animals, wounds near eyes/joints/abdomen, and any wound causing significant pain should be seen immediately.',
      ms: 'Luka gigitan adalah kecederaan serius yang memerlukan perhatian veterinar segera, walaupun ia kelihatan kecil di permukaan. Mengapa luka gigitan berbahaya: Luka tusukan mungkin kecil di permukaan tetapi dalam di bawah (kesan aisberg). Gigi anjing membawa bakteria yang boleh menyebabkan jangkitan serius. Kecederaan menghancur merosakkan tisu di bawah kulit. Jangkitan boleh berkembang dengan cepat, kadang-kadang menyebabkan abses. Pertolongan cemas segera: Kekal selamat - anjing yang cedera mungkin menggigit. Kawal pendarahan. Bersihkan luka - gunakan salin steril atau air bersih. JANGAN gunakan hidrogen peroksida atau alkohol. Tutup dengan longgar. Cegah menjilat - gunakan kolar E jika ada. Dapatkan rawatan veterinar - walaupun luka kelihatan kecil. Rawatan veterinar biasanya termasuk: pembersihan luka yang teliti, penerokaan kedalaman luka, penyingkiran tisu mati, antibiotik, ubat sakit, dan kadang-kadang penutupan pembedahan. Perhatikan tanda-tanda jangkitan: kemerahan yang meningkat, bengkak, panas, lelehan, demam, dan lesu.',
      zh: '咬伤是需要及时兽医处理的严重伤害，即使表面看起来很轻微。为什么咬伤危险：穿刺伤表面可能很小但下面很深（冰山效应）。狗的牙齿携带可能导致严重感染的细菌。挤压伤会损伤皮下组织。感染可能迅速发展，有时导致脓肿。即时急救：保持安全 - 受伤的狗可能会咬人。如果需要，使用口套。控制出血 - 用干净的布轻轻按压。不要使用止血带。清洁伤口 - 用无菌生理盐水或清水轻轻冲洗。不要使用过氧化氢、酒精或其他刺激性消毒剂（它们会损伤组织）。松散覆盖 - 用干净的纱布或布。防止舔舐 - 如果有的话使用伊丽莎白圈。寻求兽医护理 - 即使伤口看起来很轻微。兽医治疗通常包括：彻底的伤口清洁和冲洗、探查伤口深度、清除死亡组织、深伤口放置引流、抗生素（口服和/或注射）、止痛药、有时手术缝合（通常延迟以确保感染控制）、如果咬人动物的狂犬病状态未知则进行狂犬病评估。注意感染迹象：发红加重、肿胀、发热、分泌物（尤其是黄色/绿色或有恶臭）、发烧和嗜睡。深伤口、来自未知动物的伤口、眼睛/关节/腹部附近的伤口以及任何引起明显疼痛的伤口应立即就医。'
    },
    keywords: ['bite', 'wound', 'injury', 'bleeding', 'infection', 'abscess', 'puncture', 'first aid']
  },
  {
    id: 'dog-cancer-signs-1',
    category: 'dog-emergency',
    question: {
      en: 'What are the warning signs of cancer in dogs?',
      ms: 'Apakah tanda-tanda amaran kanser pada anjing?',
      zh: '狗狗癌症有哪些警告信号？'
    },
    shortAnswer: {
      en: 'Warning signs include lumps that grow or change, sores that don\'t heal, unexplained weight loss, loss of appetite, difficulty breathing, persistent lameness, abnormal swelling, bleeding or discharge, difficulty eating/swallowing, and loss of energy. Early detection improves outcomes.',
      ms: 'Tanda-tanda amaran termasuk benjolan yang tumbuh atau berubah, luka yang tidak sembuh, penurunan berat badan yang tidak dapat dijelaskan, hilang selera makan, kesukaran bernafas, tempang berterusan, bengkak yang tidak normal.',
      zh: '警告信号包括生长或变化的肿块、不愈合的溃疡、不明原因的体重下降、食欲不振、呼吸困难、持续跛行、异常肿胀、出血或分泌物、进食/吞咽困难和精力下降。早期发现可改善预后。'
    },
    fullAnswer: {
      en: 'Cancer is common in dogs, especially seniors, but early detection significantly improves treatment outcomes. The "10 Warning Signs of Cancer" (per the Veterinary Cancer Society): Abnormal swellings that persist or continue to grow, Sores that don\'t heal, Weight loss (unexplained), Loss of appetite, Bleeding or discharge from any body opening, Offensive odor, Difficulty eating or swallowing, Hesitation to exercise or loss of stamina, Persistent lameness or stiffness, and Difficulty breathing, urinating, or defecating. Common types in dogs include: Lymphoma - swollen lymph nodes, often treatable; Mast Cell Tumors - skin lumps that may change size; Osteosarcoma - bone cancer, often in legs of large breeds; Hemangiosarcoma - affects blood vessels, often in spleen/heart; Melanoma - often in mouth; Mammary Cancer - common in unspayed females. What to do: Regular vet checkups are crucial for early detection. Check your dog monthly for lumps, bumps, or changes. Don\'t assume a lump is benign - get it checked. A fine needle aspirate or biopsy can help determine if a mass is concerning. Treatment options may include: surgery, chemotherapy (dogs tolerate this much better than humans), radiation therapy, immunotherapy, and palliative care for quality of life. Prognosis varies greatly depending on cancer type, stage at diagnosis, and treatment. Many dogs with cancer can live good quality lives with treatment.',
      ms: 'Kanser adalah biasa pada anjing, terutamanya senior, tetapi pengesanan awal meningkatkan hasil rawatan dengan ketara. "10 Tanda Amaran Kanser" termasuk: Bengkak yang tidak normal yang berterusan atau terus membesar, Luka yang tidak sembuh, Penurunan berat badan (tidak dapat dijelaskan), Hilang selera makan, Pendarahan atau lelehan dari mana-mana bukaan badan, Bau yang tidak menyenangkan, Kesukaran makan atau menelan, Keraguan untuk bersenam atau kehilangan stamina, Tempang atau kekakuan yang berterusan, dan Kesukaran bernafas, membuang air kecil, atau membuang air besar. Jenis biasa pada anjing termasuk: Limfoma, Tumor Sel Mast, Osteosarkoma, Hemangiosarkoma, Melanoma, Kanser Mammari. Apa yang perlu dilakukan: Pemeriksaan veterinar tetap adalah penting. Periksa anjing anda setiap bulan untuk benjolan atau perubahan. Jangan anggap benjolan adalah jinak - periksa. Pilihan rawatan mungkin termasuk: pembedahan, kemoterapi (anjing menangani ini lebih baik daripada manusia), terapi radiasi, imunoterapi, dan penjagaan paliatif.',
      zh: '癌症在狗中很常见，尤其是老年犬，但早期发现可显著改善治疗效果。"10个癌症警告信号"（根据兽医癌症学会）：持续存在或继续生长的异常肿胀、不愈合的溃疡、体重下降（不明原因）、食欲不振、任何身体开口出血或分泌物、难闻的气味、进食或吞咽困难、不愿运动或耐力下降、持续跛行或僵硬、呼吸、排尿或排便困难。狗的常见类型包括：淋巴瘤 - 淋巴结肿大，通常可治疗；肥大细胞瘤 - 可能改变大小的皮肤肿块；骨肉瘤 - 骨癌，常见于大型犬的腿部；血管肉瘤 - 影响血管，常见于脾脏/心脏；黑色素瘤 - 常见于口腔；乳腺癌 - 常见于未绝育的母犬。该怎么做：定期兽医检查对早期发现至关重要。每月检查您的狗是否有肿块或变化。不要假设肿块是良性的 - 去检查。细针穿刺或活检可以帮助确定肿块是否令人担忧。治疗选择可能包括：手术、化疗（狗对此的耐受性比人类好得多）、放射治疗、免疫治疗和姑息治疗以保持生活质量。预后因癌症类型、诊断阶段和治疗而异。许多患癌的狗经过治疗可以过上高质量的生活。'
    },
    keywords: ['cancer', 'tumor', 'lump', 'mass', 'weight loss', 'swelling', 'bleeding', 'warning signs']
  },
  {
    id: 'dog-poisoning-1',
    category: 'dog-emergency',
    question: {
      en: 'What should I do if my dog eats something poisonous?',
      ms: 'Apa yang perlu saya lakukan jika anjing saya makan sesuatu yang beracun?',
      zh: '如果我的狗吃了有毒的东西，我该怎么办？'
    },
    shortAnswer: {
      en: 'Call your vet or emergency clinic immediately. Note what was eaten and how much. Do NOT induce vomiting unless specifically instructed by a vet. Common toxins include chocolate, xylitol, grapes/raisins, medications, rodent poison, and certain plants. Time is critical.',
      ms: 'Hubungi veterinar atau klinik kecemasan anda dengan segera. Catat apa yang dimakan dan berapa banyak. JANGAN induksi muntah melainkan diarahkan oleh veterinar. Toksin biasa termasuk coklat, xylitol, anggur/kismis, ubat-ubatan, racun tikus.',
      zh: '立即致电您的兽医或急诊诊所。记下吃了什么和多少。不要催吐，除非兽医特别指示。常见毒素包括巧克力、木糖醇、葡萄/葡萄干、药物、老鼠药和某些植物。时间至关重要。'
    },
    fullAnswer: {
      en: 'Poisoning is a common emergency in dogs. Quick action can save your dog\'s life. Immediate steps: Remove your dog from the source. Stay calm and assess the situation. Identify what was eaten - save packaging/sample if possible. Note approximate amount consumed and time. Call your vet or emergency clinic immediately - they will advise on next steps. Do NOT induce vomiting unless specifically instructed - some substances cause more damage coming back up. Common toxins to be aware of: Foods - chocolate (especially dark), xylitol (in sugar-free products), grapes/raisins, onions/garlic, macadamia nuts, alcohol, caffeine. Medications - human painkillers (ibuprofen, acetaminophen), antidepressants, ADHD medications, heart medications. Household - cleaning products, antifreeze (very dangerous - tastes sweet), rodent poison, insecticides, fertilizers. Plants - lilies, sago palm, azalea, oleander, tulips. Symptoms of poisoning vary but may include: vomiting, diarrhea, drooling, lethargy, seizures, difficulty breathing, abnormal heart rate, collapse, and bleeding disorders. Treatment depends on the toxin and may include: induced vomiting (only if safe and within short time frame), activated charcoal to absorb toxins, IV fluids, medications to protect organs, blood transfusions for certain poisons, and hospitalization for monitoring. Prevention: keep toxins locked away, be aware of what\'s in your yard, supervise dogs outdoors, and pet-proof your home.',
      ms: 'Keracunan adalah kecemasan biasa pada anjing. Tindakan cepat boleh menyelamatkan nyawa anjing anda. Langkah-langkah segera: Keluarkan anjing anda dari sumber. Kekal tenang dan nilai keadaan. Kenal pasti apa yang dimakan - simpan pembungkusan/sampel jika boleh. Catat anggaran jumlah yang dimakan dan masa. Hubungi veterinar atau klinik kecemasan anda dengan segera. JANGAN induksi muntah melainkan diarahkan secara khusus - sesetengah bahan menyebabkan lebih banyak kerosakan apabila naik semula. Toksin biasa yang perlu diketahui: Makanan - coklat (terutamanya gelap), xylitol, anggur/kismis, bawang/bawang putih. Ubat-ubatan - ubat sakit manusia (ibuprofen, acetaminophen). Isi rumah - produk pembersihan, anti-beku, racun tikus, racun serangga. Tumbuhan - lili, palma sago, azalea. Gejala keracunan termasuk: muntah, cirit-birit, air liur berlebihan, lesu, sawan, kesukaran bernafas. Rawatan bergantung kepada toksin. Pencegahan: simpan toksin di tempat berkunci, ketahui apa yang ada di halaman anda.',
      zh: '中毒是狗的常见急症。快速行动可以挽救您的狗的生命。即时步骤：将狗从来源处移开。保持冷静并评估情况。确定吃了什么 - 如果可能保存包装/样品。记下大概吃了多少和时间。立即致电您的兽医或急诊诊所 - 他们会建议下一步行动。不要催吐，除非特别指示 - 某些物质在吐出时会造成更大伤害。需要注意的常见毒素：食物 - 巧克力（尤其是黑巧克力）、木糖醇（在无糖产品中）、葡萄/葡萄干、洋葱/大蒜、夏威夷果、酒精、咖啡因。药物 - 人类止痛药（布洛芬、对乙酰氨基酚）、抗抑郁药、ADHD药物、心脏药物。家用品 - 清洁产品、防冻液（非常危险 - 味道甜）、老鼠药、杀虫剂、肥料。植物 - 百合、铁树、杜鹃花、夹竹桃、郁金香。中毒症状各异但可能包括：呕吐、腹泻、流口水、嗜睡、癫痫发作、呼吸困难、心率异常、虚脱和出血障碍。治疗取决于毒素，可能包括：催吐（仅在安全且短时间内）、活性炭吸收毒素、静脉输液、保护器官的药物、某些毒物的输血、住院监测。预防：将毒素锁好，注意院子里有什么，在户外监督狗，并使您的家对宠物安全。'
    },
    keywords: ['poison', 'toxic', 'chocolate', 'xylitol', 'grapes', 'emergency', 'vomiting', 'medication']
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
