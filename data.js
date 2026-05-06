// Symptom Database
const symptomDatabase = {
    dog: [
        'Lethargy',
        'Vomiting',
        'Diarrhea',
        'Loss of appetite',
        'Fever',
        'Abdominal pain',
        'Coughing',
        'Sneezing',
        'Runny nose',
        'Discharge from eyes',
        'Swollen lymph nodes',
        'Itching',
        'Red skin',
        'Flaking skin',
        'Hair loss',
        'Ear discharge',
        'Odor from ears',
        'Ear scratching',
        'Limping',
        'Difficulty walking',
        'Joint swelling',
        'Excessive drinking',
        'Frequent urination',
        'Difficulty urinating',
        'Straining to urinate',
        'Blood in urine',
        'Bad breath',
        'Difficulty eating',
        'Drooling',
        'Swollen gums',
        'Bleeding gums',
        'Weight loss',
        'Increased hunger',
        'Panting',
        'Shortness of breath',
        'Wheezing',
        'Nasal discharge',
        'Snoring'
    ],
    cat: [
        'Lethargy',
        'Vomiting',
        'Diarrhea',
        'Constipation',
        'Loss of appetite',
        'Weight loss',
        'Excessive drinking',
        'Frequent urination',
        'Difficulty urinating',
        'Straining in litter box',
        'Blood in urine',
        'Fever',
        'Discharge from eyes',
        'Swollen eyes',
        'Sneezing',
        'Coughing',
        'Runny nose',
        'Difficulty breathing',
        'Wheezing',
        'Itching',
        'Red skin',
        'Hair loss',
        'Flaking skin',
        'Excessive grooming',
        'Ear scratching',
        'Discharge from ears',
        'Bad breath',
        'Difficulty eating',
        'Drooling',
        'Swollen gums',
        'Bleeding gums',
        'Behavioral changes',
        'Increased hunger',
        'Seizures',
        'Tremors',
        'Difficulty walking',
        'Hind leg paralysis',
        'Jaundice',
        'Pale gums',
        'Labored breathing'
    ]
};

// Disease Database
const diseaseDatabase = {
    dog: [
        {
            name: 'Canine Parvovirus',
            severity: 'high',
            keywords: ['vomiting', 'diarrhea', 'lethargy', 'loss of appetite', 'fever', 'abdominal pain'],
            description: 'A highly contagious viral infection that primarily affects puppies and unvaccinated dogs. Causes severe gastrointestinal issues and can be life-threatening. Requires immediate veterinary care.'
        },
        {
            name: 'Ear Infection (Otitis)',
            severity: 'medium',
            keywords: ['ear discharge', 'ear scratching', 'odor from ears', 'swollen lymph nodes', 'fever'],
            description: 'Infection of the inner, middle, or outer ear. Common in dogs with floppy ears. Causes itching, discharge, and odor. May lead to hearing loss if untreated.'
        },
        {
            name: 'Hip Dysplasia',
            severity: 'medium',
            keywords: ['limping', 'difficulty walking', 'joint swelling', 'lethargy'],
            description: 'A genetic condition where the hip joint doesn\'t develop properly, causing instability and arthritis. More common in larger breeds. Causes pain and mobility issues.'
        },
        {
            name: 'Allergies (Environmental/Food)',
            severity: 'low',
            keywords: ['itching', 'red skin', 'hair loss', 'flaking skin', 'ear scratching'],
            description: 'Allergic reactions to food, environmental factors, or parasites. Causes excessive scratching, skin irritation, and hair loss. Often leads to secondary infections.'
        },
        {
            name: 'Kennel Cough',
            severity: 'low',
            keywords: ['coughing', 'sneezing', 'runny nose', 'discharge from eyes'],
            description: 'A contagious respiratory infection caused by bacteria or viruses. Produces a distinctive dry, hacking cough. Usually self-limiting but requires rest and monitoring.'
        },
        {
            name: 'Diabetes Mellitus',
            severity: 'medium',
            keywords: ['excessive drinking', 'frequent urination', 'weight loss', 'increased hunger'],
            description: 'A metabolic disorder where the body cannot properly regulate blood sugar. Results from insufficient insulin production. Requires lifelong management and monitoring.'
        },
        {
            name: 'Arthritis',
            severity: 'medium',
            keywords: ['difficulty walking', 'joint swelling', 'limping', 'lethargy'],
            description: 'Inflammation of joints causing pain and stiffness. Common in aging dogs and those with joint dysplasia. Affects mobility and quality of life.'
        },
        {
            name: 'Urinary Tract Infection',
            severity: 'low',
            keywords: ['difficulty urinating', 'straining to urinate', 'frequent urination', 'blood in urine'],
            description: 'Bacterial infection of the bladder or urethra. Causes discomfort during urination and increased frequency. Usually responds well to antibiotics.'
        },
        {
            name: 'Dental Disease',
            severity: 'medium',
            keywords: ['bad breath', 'difficulty eating', 'swollen gums', 'bleeding gums'],
            description: 'Buildup of plaque and tartar leading to gum disease and tooth decay. Can cause pain, tooth loss, and systemic infections if severe. Preventable with regular cleaning.'
        },
        {
            name: 'Gastroenteritis',
            severity: 'low',
            keywords: ['vomiting', 'diarrhea', 'abdominal pain', 'loss of appetite'],
            description: 'Inflammation of the stomach and intestines causing digestive upset. Often due to dietary indiscretion, infections, or food sensitivities. Usually improves with supportive care.'
        }
    ],
    cat: [
        {
            name: 'Feline Leukemia Virus (FeLV)',
            severity: 'high',
            keywords: ['lethargy', 'loss of appetite', 'weight loss', 'fever', 'swollen lymph nodes'],
            description: 'A serious viral infection transmitted through saliva and bodily fluids. Suppresses the immune system leading to secondary infections. No cure; requires supportive care and management.'
        },
        {
            name: 'Lower Urinary Tract Disease (LUTD)',
            severity: 'medium',
            keywords: ['difficulty urinating', 'straining in litter box', 'blood in urine', 'frequent urination'],
            description: 'Inflammation of the bladder and urethra in cats. Can cause urinary blockage in males, which is life-threatening. Requires immediate veterinary attention if cat cannot urinate.'
        },
        {
            name: 'Hyperthyroidism',
            severity: 'medium',
            keywords: ['weight loss', 'increased hunger', 'excessive drinking', 'frequent urination'],
            description: 'Overproduction of thyroid hormones common in older cats. Causes increased metabolism, weight loss despite good appetite, and behavioral changes. Treatable with medication or surgery.'
        },
        {
            name: 'Chronic Kidney Disease',
            severity: 'medium',
            keywords: ['excessive drinking', 'frequent urination', 'weight loss', 'lethargy'],
            description: 'Progressive loss of kidney function, very common in older cats. Leads to waste accumulation in the body. Managed with diet, medication, and supportive care.'
        },
        {
            name: 'Ear Mites',
            severity: 'low',
            keywords: ['ear scratching', 'discharge from ears', 'itching', 'red skin'],
            description: 'Parasitic infection in the ear canal causing intense itching and brown discharge. Highly contagious between cats. Easily treated with topical or oral medications.'
        },
        {
            name: 'Respiratory Infection',
            severity: 'low',
            keywords: ['sneezing', 'runny nose', 'discharge from eyes', 'coughing'],
            description: 'Viral or bacterial infection of the upper respiratory tract. Common in kittens and stressed cats. Usually self-limiting but causes discomfort and reduced appetite.'
        },
        {
            name: 'Diabetes Mellitus',
            severity: 'medium',
            keywords: ['excessive drinking', 'frequent urination', 'weight loss', 'increased hunger'],
            description: 'Metabolic disorder affecting blood sugar regulation, increasingly common in overweight cats. Requires insulin therapy and dietary management. Can sometimes go into remission.'
        },
        {
            name: 'Intestinal Parasites',
            severity: 'low',
            keywords: ['diarrhea', 'vomiting', 'weight loss', 'loss of appetite'],
            description: 'Infestation with worms or other parasites affecting the digestive tract. Common in kittens and outdoor cats. Causes digestive upset and nutritional deficiencies.'
        },
        {
            name: 'Dental Disease',
            severity: 'medium',
            keywords: ['bad breath', 'difficulty eating', 'swollen gums', 'bleeding gums'],
            description: 'Plaque and tartar accumulation leading to gum disease and tooth decay. Can cause severe pain and lead to systemic infections. Prevention through regular cleaning is key.'
        },
        {
            name: 'Feline Infectious Peritonitis (FIP)',
            severity: 'high',
            keywords: ['lethargy', 'fever', 'abdominal pain', 'weight loss', 'vomiting'],
            description: 'Severe viral disease caused by a coronavirus mutation. Can be wet form (fluid accumulation) or dry form (organ inflammation). Often fatal; early diagnosis and treatment improve survival chances.'
        }
    ]
};
