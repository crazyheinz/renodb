<?php
$services = [
    [
        'icon' => '<svg class="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h6v5l-3-1.5L9 9V4z"/></svg>',
        'title' => 'Schilderwerk',
        'description' => 'Gespecialiseerd in duurzaam binnen- en buitenschilderwerk. Wij zorgen voor een vlekkeloze en esthetische afwerking van plafonds, muren, ramen, deuren en gevels.',
        'details' => [
            'Binnenhuis schilderwerk',
            'Ramen en deuren',
            'Plafonds',
            'Gevelschildering'
        ]
    ],
    [
        'icon' => '<svg class="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>',
        'title' => 'Elektriciteit',
        'description' => 'Uitbreiding en modernisering van uw elektrische installatie. Van het aanleggen van extra stopcontacten en lichtpunten tot het vervangen van verouderde systemen, altijd conform de nieuwste veiligheidsnormen.',
        'details' => [
            'Extra stopcontacten',
            'Lichtpunten',
            'Verouderde materialen vervangen',
            'Elektrische installaties'
        ]
    ],
    [
        'icon' => '<svg class="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19.19 2H4.81C3.81 2 3 2.81 3 3.81v16.38C3 21.19 3.81 22 4.81 22h14.38c1 0 1.81-.81 1.81-1.81V3.81C21 2.81 20.19 2 19.19 2zM8 18H6v-7h2v7zm0-9H6V5h2v4zm10 9h-2v-4h2v4zm0-6h-2V5h2v7z"/></svg>',
        'title' => 'Schrijnwerk & Vloeren',
        'description' => 'Vakkundige installatie van parket, plinten, en grootformaat tegels (tot 90x90 cm). Inclusief de professionele plaatsing van ontkoppelingsmatten voor maximale levensduur.',
        'details' => [
            'Plinten plaatsen',
            'Parket installatie',
            'Tegelen (tot 90x90)',
            'Ontkoppelingsmatten'
        ]
    ],
    [
        'icon' => '<svg class="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>',
        'title' => 'Sanitair & Loodgieterij',
        'description' => 'Complete oplossingen voor waterinstallaties, waaronder het aansluiten van radiatoren, het aanleggen van leidingen, en de volledige installatie en renovatie van badkamers.',
        'details' => [
            'Radiatoren aansluiten',
            'Leidingen aanleggen',
            'Inloopdouche installatie',
            'Badkamer renovatie'
        ]
    ],
    [
        'icon' => '<svg class="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>',
        'title' => 'Kluswerk & Oplossingen',
        'description' => 'Een proactieve, probleemoplossende aanpak voor diverse onderhouds- en reparatiewerkzaamheden. Uw allround partner voor elke technische uitdaging in en rond het huis.',
        'details' => [
            'Diverse klusjes',
            'Probleemoplossing',
            'Algemeen onderhoud',
            'Reparaties'
        ]
    ],
    [
        'icon' => '<svg class="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>',
        'title' => 'Informatica (Specialisatie)',
        'description' => 'Decennialange ervaring in de IT-sector biedt een unieke meerwaarde voor smart home integraties en gespecialiseerd advies over hardware en software.',
        'details' => [
            'Hardware',
            'Software',
            'Blockchain',
            'AI'
        ]
    ]
];
?>

<section id="services" class="py-20 bg-gray-50" aria-labelledby="services-title">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                De Fundering van Uw Bouwproject
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Mijn expertise is gebouwd op uitgebreide praktijkervaring, resulterend in een fulltime, onafhankelijke onderneming. Als gedreven professional lever ik uitsluitend duurzame en hoogwaardige resultaten, van start tot oplevering.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <?php foreach ($services as $service): ?>
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div class="text-center mb-4">
                    <div class="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
                        <?php echo $service['icon']; ?>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">
                        <?php echo $service['title']; ?>
                    </h3>
                </div>
                <p class="text-gray-600 mb-4">
                    <?php echo $service['description']; ?>
                </p>
                <ul class="space-y-2">
                    <?php foreach ($service['details'] as $detail): ?>
                    <li class="text-sm text-gray-600 flex items-center">
                        <span class="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                        <?php echo $detail; ?>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <?php endforeach; ?>
        </div>

        <div class="text-center">
            <a href="#contact" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Vraag een offerte aan
            </a>
        </div>
    </div>
</section>
