import { getRandomNumber } from '../../utils/utils';
import { Component } from '../classes/component';

export const components = {
  'Begrimed Claw': new Component({
    name: 'Begrimed Claw',
    description: 'A claw caked with dirt and grease.',
    quantity: getRandomNumber(1, 20),
  }),
  'Bestial Claw': new Component({
    name: 'Bestial Claw',
    description: 'A gruesomely sharp claw of some fierce beast.',
    quantity: getRandomNumber(1, 20),
  }),
  'Gargantuan Claw': new Component({
    name: 'Gargantuan Claw',
    description: 'An impressively large but prohibitively heavy claw.',
    quantity: getRandomNumber(1, 20),
  }),
  'Hellish Talon': new Component({
    name: 'Hellish Talon',
    description: 'A fearsome talon that could no doubt shred steel as easily as paper.',
    quantity: getRandomNumber(1, 20),
  }),
  'Shattered Bone': new Component({
    name: 'Shattered Bone',
    description: 'A severely fractured animal bone.',
    quantity: getRandomNumber(1, 20),
  }),
  'Sturdy Bone': new Component({
    name: 'Sturdy Bone',
    description: 'A stout bone that must once have supported a heavy frame.',
    quantity: getRandomNumber(1, 20),
  }),
  'Otherworldly Bone': new Component({
    name: 'Otherworldly Bone',
    description: 'A most peculiar bone that could have come from no earthly creature.',
    quantity: getRandomNumber(1, 20),
  }),
  'Ancient Bone': new Component({
    name: 'Ancient Bone',
    description: 'A battle-scarred bone whose pearly sheen belies its true age.',
    quantity: getRandomNumber(1, 20),
  }),
  'Moistened Scale': new Component({
    name: 'Moistened Scale',
    description: 'A sodden scale that reeks of the sea and death.',
    quantity: getRandomNumber(1, 20),
  }),
  'Seapetal Scale': new Component({
    name: 'Seapetal Scale',
    description: 'A delicate silver scale with a form reminiscent of a flower petal.',
    quantity: getRandomNumber(1, 20),
  }),
  'Abyssal Scale': new Component({
    name: 'Abyssal Scale',
    description: 'A thick, deep-green scale that looks strong enough to withstand great pressure.',
    quantity: getRandomNumber(1, 20),
  }),
  "Seaking's Beard": new Component({
    name: "Seaking's Beard",
    description: 'A rare inverted scale that grows from the throat of an elusive sea creature.',
    quantity: getRandomNumber(1, 20),
  }),
  'Segmented Carapace': new Component({
    name: 'Segmented Carapace',
    description: "An animal's bony armor. It feels like limestone to the touch.",
    quantity: getRandomNumber(1, 20),
  }),
  'Iron Shell': new Component({
    name: 'Iron Shell',
    description: 'The metal-rich and malleable shell of some beast.',
    quantity: getRandomNumber(1, 20),
  }),
  'Armored Shell': new Component({
    name: 'Armored Shell',
    description: 'A shell composed of metallic crystal, rivaling composite armors in strength.',
    quantity: getRandomNumber(1, 20),
  }),
  'Regenerating Carapace ': new Component({
    name: 'Regenerating Carapace',
    description: 'A resilient carapace capable of repairing its own wounds.',
    quantity: getRandomNumber(1, 20),
  }),
  'Chipped Fang': new Component({
    name: 'Chipped Fang',
    description: 'A fang missing its tip, perhaps having bitten off more than it could chew.',
    quantity: getRandomNumber(1, 20),
  }),
  'Wicked Fang': new Component({
    name: 'Wicked Fang',
    description: 'A twisted fang that seems to pulsate with diabolic power.',
    quantity: getRandomNumber(1, 20),
  }),
  'Monstrous Fang': new Component({
    name: 'Monstrous Fang',
    description: 'A fearsome tri-pronged tooth that must have belonged to an equally fearsome monster.',
    quantity: getRandomNumber(1, 20),
  }),
  'Sinister Fang': new Component({
    name: 'Sinister Fang',
    description: 'An elongated fang with a wicked, stiletto-sharp tip.',
    quantity: getRandomNumber(1, 20),
  }),
  'Severed Wing': new Component({
    name: 'Severed Wing',
    description: 'A once-proud wing that has been brutally hewn at its base.',
    quantity: getRandomNumber(1, 20),
  }),
  'Scaled Wing': new Component({
    name: 'Scaled Wing',
    description: 'An unusual wing dusted with dark scales.',
    quantity: getRandomNumber(1, 20),
  }),
  'Abominable Wing': new Component({
    name: 'Abominable Wing',
    description: 'A wing marked with a strange spiral pattern that emits a mild phosphorescence.',
    quantity: getRandomNumber(1, 20),
  }),
  'Menacing Wing': new Component({
    name: 'Menacing Wing',
    description: 'A pair of wings that, although featherlight, may as well be wrought of steel.',
    quantity: getRandomNumber(1, 20),
  }),
  'Molted Tail': new Component({
    name: 'Molted Tail',
    description: 'The shed tail of some creature, exceedingly smooth on its inner side.',
    quantity: getRandomNumber(1, 20),
  }),
  'Barbed Tail': new Component({
    name: 'Barbed Tail',
    description: 'A monstrous tail tipped with a barbed stinger.',
    quantity: getRandomNumber(1, 20),
  }),
  'Diabolic Tail': new Component({
    name: 'Diabolic Tail',
    description: 'A whiplike tail that carries the sickening stench of sulfur.',
    quantity: getRandomNumber(1, 20),
  }),
  'Entrancing Tail': new Component({
    name: 'Entrancing Tail',
    description: 'An iridescent tail feather whose dancing hues irresistibly draw the eye.',
    quantity: getRandomNumber(1, 20),
  }),
  'Torn Leather': new Component({
    name: 'Torn Leather',
    description: 'A ragged scrap of leather that could surely be put to use for something.',
    quantity: getRandomNumber(1, 20),
  }),
  'Thickened Hide': new Component({
    name: 'Thickened Hide',
    description: 'A coarse and granite-like hide beyond the working of ordinary tools.',
    quantity: getRandomNumber(1, 20),
  }),
  'Smooth Hide': new Component({
    name: 'Smooth Hide',
    description: 'Thin and supple leather that surpasses even synthetic materials in durability.',
    quantity: getRandomNumber(1, 20),
  }),
  'Supple Leather': new Component({
    name: 'Supple Leather',
    description: 'Leather that shapes itself to the skin as if worked by a master craftsman.',
    quantity: getRandomNumber(1, 20),
  }),
  'Gummy Oil': new Component({
    name: 'Gummy Oil',
    description: 'A highly viscous oil corrupted by impurities.',
    quantity: getRandomNumber(1, 20),
  }),
  'Fragrant Oil': new Component({
    name: 'Fragrant Oil',
    description: 'A nearly transparent, and marvelously aromatic, essential oil.',
    quantity: getRandomNumber(1, 20),
  }),
  'Medicinal Oil': new Component({
    name: 'Medicinal Oil',
    description: 'An oil of complex formulation with a distinctly medicinal odor.',
    quantity: getRandomNumber(1, 20),
  }),
  'Esoteric Oil': new Component({
    name: 'Esoteric Oil',
    description: 'A colorless, odorless, tasteless oil that radiates light when placed in darkness.',
    quantity: getRandomNumber(1, 20),
  }),
  'Scraggly Wool': new Component({
    name: 'Scraggly Wool',
    description: 'Severely torn and knotted wool.',
    quantity: getRandomNumber(1, 20),
  }),
  'Rough Wool': new Component({
    name: 'Rough Wool',
    description: 'Rough wool that seems durable, albeit unrefined.',
    quantity: getRandomNumber(1, 20),
  }),
  'Thick Wool': new Component({
    name: 'Thick Wool',
    description: 'Rugged wool that is excellent at trapping and retaining heat.',
    quantity: getRandomNumber(1, 20),
  }),
  'Fluffy Wool': new Component({
    name: 'Fluffy Wool',
    description: 'Premium-grade wool so soft it nearly begs to be squeezed.',
    quantity: getRandomNumber(1, 20),
  }),
  'Murky Ooze': new Component({
    name: 'Murky Ooze',
    description: 'An organic mucosal secretion that dissolves when touched by human hands.',
    quantity: getRandomNumber(1, 20),
  }),
  'Vibrant Ooze': new Component({
    name: 'Vibrant Ooze',
    description: 'A brightly colored, translucent secretion that actually looks rather appetizing.',
    quantity: getRandomNumber(1, 20),
  }),
  'Transparent Ooze': new Component({
    name: 'Transparent Ooze',
    description: 'Wholly transparent slime, visible only due to its shimmering surface.',
    quantity: getRandomNumber(1, 20),
  }),
  'Wonder Gel': new Component({
    name: 'Wonder Gel',
    description: 'A cubical mass of transparent gel with a ghostly green glow at its core.',
    quantity: getRandomNumber(1, 20),
  }),
  'Fractured Horn': new Component({
    name: 'Fractured Horn',
    description: 'A beastly horn, shattered along what had been a deep crack.',
    quantity: getRandomNumber(1, 20),
  }),
  'Spined Horn': new Component({
    name: 'Spined Horn',
    description: 'A short, stout horn covered by a carpet of fine thorns.',
    quantity: getRandomNumber(1, 20),
  }),
  'Fiendish Horn': new Component({
    name: 'Fiendish Horn',
    description: 'A horn retaining regenerative capabilities even when shorn from its anchorage.',
    quantity: getRandomNumber(1, 20),
  }),
  'Infernal Horn': new Component({
    name: 'Infernal Horn',
    description: 'A bedeviled horn that, when knocked to the ground, always points northeast.',
    quantity: getRandomNumber(1, 20),
  }),
  'Strange Fluid': new Component({
    name: 'Strange Fluid',
    description: 'A putrid liquid whose origins are better left a mystery.',
    quantity: getRandomNumber(1, 20),
  }),
  'Enigmatic Fluid': new Component({
    name: 'Enigmatic Fluid',
    description: 'Offensively noxious fluid most assuredly secreted from somewhere unpleasant.',
    quantity: getRandomNumber(1, 20),
  }),
  'Mysterious Fluid': new Component({
    name: 'Mysterious Fluid',
    description: 'A sticky sweet substance whose constituents are more palatable for being unknown.',
    quantity: getRandomNumber(1, 20),
  }),
  'Ineffable Fluid': new Component({
    name: 'Ineffable Fluid',
    description: 'Frothy fluid of an unsettling purple hue, obtained by means unspeakable.',
    quantity: getRandomNumber(1, 20),
  }),
  "Cie'th Tear": new Component({
    name: "Cie'th Tear",
    description: 'A pebble-sized shard of crystal gradually crumbling to ashen sand.',
    quantity: getRandomNumber(1, 20),
  }),
  'Tear of Frustration': new Component({
    name: 'Tear of Frustration',
    description: 'A milky white crystal, faintly warm to the touch.',
    quantity: getRandomNumber(1, 20),
  }),
  'Tear of Remorse': new Component({
    name: 'Tear of Remorse',
    description: 'A beautiful, virtually flawless crystal that stirs feelings of regret.',
    quantity: getRandomNumber(1, 20),
  }),
  'Tear of Woe': new Component({
    name: 'Tear of Woe',
    description: 'A crystal of fractal form that burns with a deep, sanguine light.',
    quantity: getRandomNumber(1, 20),
  }),
  'Red Mycelium': new Component({
    name: 'Red Mycelium',
    description: 'A mat of fungal hyphae that decompose organic contaminants.',
    quantity: getRandomNumber(1, 20),
  }),
  'Blue Mycelium': new Component({
    name: 'Blue Mycelium',
    description: 'A mat of symbiotic fungal hyphae that secrete exodermal hardening agents.',
    quantity: getRandomNumber(1, 20),
  }),
  'White Mycelium': new Component({
    name: 'White Mycelium',
    description: 'A mat of fungal hyphae resembling cotton that can rapidly consume even metal.',
    quantity: getRandomNumber(1, 20),
  }),
  'Black Mycelium': new Component({
    name: 'Black Mycelium',
    description: 'An unsightly mat of fungal hyphae used for the flavorsome fermentation of food.',
    quantity: getRandomNumber(1, 20),
  }),
  'Dawnlight Dew': new Component({
    name: 'Dawnlight Dew',
    description: 'A droplet imbued with the chill of the dawn from which it takes its name.',
    quantity: getRandomNumber(1, 20),
  }),
  'Dusklight Dew': new Component({
    name: 'Dusklight Dew',
    description: 'A droplet imbued with the darkness of the dusk from which it takes its name.',
    quantity: getRandomNumber(1, 20),
  }),
  Gloomstalk: new Component({
    name: 'Gloomstalk',
    description: 'The pistil of a carnivorous flower that emits light when pollinated.',
    quantity: getRandomNumber(1, 20),
  }),
  Sunpetal: new Component({
    name: 'Sunpetal',
    description: 'The petal of a carnivorous flower that lures its prey with a warm, inviting light.',
    quantity: getRandomNumber(1, 20),
  }),
  'Moonblossom Seed': new Component({
    name: 'Moonblossom Seed',
    description: 'The seed of an annual wildflower that blooms at twilight. Can be sold for a premium.',
    quantity: getRandomNumber(1, 20),
  }),
  'Starblossom Seed': new Component({
    name: 'Starblossom Seed',
    description: 'The seed of a flower that emits ghostly bioluminescence at dawn. Can be sold for a premium.',
    quantity: getRandomNumber(1, 20),
  }),
  'Chocobo Plume': new Component({
    name: 'Chocobo Plume',
    description: 'A lovely, golden chocobo feather.',
    quantity: getRandomNumber(1, 20),
  }),
  'Chocobo Tail Feather': new Component({
    name: 'Chocobo Tail Feather',
    description: "A resplendent, golden feather from a chocobo's tail.",
    quantity: getRandomNumber(1, 20),
  }),
  'Succulent Fruit': new Component({
    name: 'Succulent Fruit',
    description: 'A mouth-wateringly tart and juicy fruit. Can be sold for a premium.',
    quantity: getRandomNumber(1, 20),
  }),
  'Malodorous Fruit': new Component({
    name: 'Malodorous Fruit',
    description: 'An offensive-smelling yet highly delectable fruit. Can be sold for a premium.',
    quantity: getRandomNumber(1, 20),
  }),
  'Green Needle': new Component({
    name: 'Green Needle',
    description: 'The slender but sturdy needle of a burgeoning cactus.',
    quantity: getRandomNumber(1, 20),
  }),
  Perfume: new Component({
    name: 'Perfume',
    description: 'A fragrance that soothes the mind and soul. Can be sold for a premium.',
    quantity: getRandomNumber(1, 20),
  }),
  'Insulated Cabling': new Component({
    name: 'Insulated Cabling',
    description: 'Cabling protected by a layer of insulation.',
    quantity: getRandomNumber(1, 20),
  }),
  'Fiber-optic Cable': new Component({
    name: 'Fiber-optic Cable',
    description: 'A high-grade cable capable of transmitting data as light.',
    quantity: getRandomNumber(1, 20),
  }),
  'Liquid Crystal Lens': new Component({
    name: 'Liquid Crystal Lens',
    description: 'A lens with an electrically modulated refractive index.',
    quantity: getRandomNumber(1, 20),
  }),
  'Ring Joint': new Component({
    name: 'Ring Joint',
    description: 'A circular joint crafted for low-friction rotation.',
    quantity: getRandomNumber(1, 20),
  }),
  'Epicyclic Gear': new Component({
    name: 'Epicyclic Gear',
    description: 'A gear train frequently employed in transmissions.',
    quantity: getRandomNumber(1, 20),
  }),
  Crankshaft: new Component({
    name: 'Crankshaft',
    description: 'An engine part that converts piston motion into rotative force.',
    quantity: getRandomNumber(1, 20),
  }),
  'Electrolytic Capacitor': new Component({
    name: 'Electrolytic Capacitor',
    description: 'An electronic component used in power supply filters.',
    quantity: getRandomNumber(1, 20),
  }),
  Flywheel: new Component({
    name: 'Flywheel',
    description: 'A device that uses a disc to store rotational energy.',
    quantity: getRandomNumber(1, 20),
  }),
  Sprocket: new Component({
    name: 'Sprocket',
    description: 'A toothed wheel designed to transmit rotary motion.',
    quantity: getRandomNumber(1, 20),
  }),
  Actuator: new Component({
    name: 'Actuator',
    description: 'A device that generates motion in response to a control signal.',
    quantity: getRandomNumber(1, 20),
  }),
  'Spark Plug': new Component({
    name: 'Spark Plug',
    description: 'An inexpensive electrical device for igniting fuel vapors.',
    quantity: getRandomNumber(1, 20),
  }),
  'Iridium Plug': new Component({
    name: 'Iridium Plug',
    description: 'A miniaturized precision spark plug.',
    quantity: getRandomNumber(1, 20),
  }),
  'Needle Valve': new Component({
    name: 'Needle Valve',
    description: 'A needle-shaped valve for precisely regulating the flow of fluid.',
    quantity: getRandomNumber(1, 20),
  }),
  'Butterfly Valve': new Component({
    name: 'Butterfly Valve',
    description: 'A sophisticated, self-repairing throttling valve.',
    quantity: getRandomNumber(1, 20),
  }),
  'Bomb Ashes': new Component({
    name: 'Bomb Ashes',
    description: 'The stark white ashes of an immolated bomb.',
    quantity: getRandomNumber(1, 20),
  }),
  'Bomb Fragment': new Component({
    name: 'Bomb Fragment',
    description: 'The scorched remains of a detonated bomb.',
    quantity: getRandomNumber(1, 20),
  }),
  'Bomb Shell': new Component({
    name: 'Bomb Shell',
    description: 'The blackened exterior of a bomb that miraculously survived detonation.',
    quantity: getRandomNumber(1, 20),
  }),
  'Bomb Core': new Component({
    name: 'Bomb Core',
    description: 'The ghostly, inexplicably heatless flame from the heart of a bomb.',
    quantity: getRandomNumber(1, 20),
  }),
  'Analog Circuit': new Component({
    name: 'Analog Circuit',
    description: 'A simple but durable analog circuit board.',
    quantity: getRandomNumber(1, 20),
  }),
  'Digital Circuit': new Component({
    name: 'Digital Circuit',
    description: 'An advanced digital integrated circuit.',
    quantity: getRandomNumber(1, 20),
  }),
  Gyroscope: new Component({
    name: 'Gyroscope',
    description: 'A rotational sensor commonly used in attitude control systems.',
    quantity: getRandomNumber(1, 20),
  }),
  Electrode: new Component({
    name: 'Electrode',
    description: 'A biometric sensor for monitoring brain activity.',
    quantity: getRandomNumber(1, 20),
  }),
  'Ceramic Armor ': new Component({
    name: 'Ceramic Armor',
    description: 'Armor made from the firing and resultant hardening of a clay-like putty.',
    quantity: getRandomNumber(1, 20),
  }),
  'Chobham Armor ': new Component({
    name: 'Chobham Armor',
    description: 'Composite armor that neutralizes impacts via a process known as crack deflection.',
    quantity: getRandomNumber(1, 20),
  }),
  'Radial Bearing ': new Component({
    name: 'Radial Bearing',
    description: 'A lightweight bearing employing balls of composite alloy.',
    quantity: getRandomNumber(1, 20),
  }),
  'Thrust Bearing ': new Component({
    name: 'Thrust Bearing',
    description: 'A rotary bearing designed to control axial forces.',
    quantity: getRandomNumber(1, 20),
  }),
  Solenoid: new Component({
    name: 'Solenoid',
    description: 'A cylindrically wound wire capable of generating a magnetic field.',
    quantity: getRandomNumber(1, 20),
  }),
  'Mobius Coil ': new Component({
    name: 'Mobius Coil',
    description: 'A gravitational inhibitor critical to the functions of AMP technology.',
    quantity: getRandomNumber(1, 20),
  }),
  'Tungsten Tube ': new Component({
    name: 'Tungsten Tube',
    description: 'A thin-walled tube made of a durable tungsten alloy.',
    quantity: getRandomNumber(1, 20),
  }),
  'Titanium Tube ': new Component({
    name: 'Titanium Tube',
    description: 'A tube that, although expensive to manufacture, offers peerless durability.',
    quantity: getRandomNumber(1, 20),
  }),
  'Passive Detector ': new Component({
    name: 'Passive Detector',
    description: 'A sensor that uses phase difference measurements to detect targets.',
    quantity: getRandomNumber(1, 20),
  }),
  'Active Detector ': new Component({
    name: 'Active Detector',
    description: 'A sensor that emits directed pulses to track targets with pinpoint precision.',
    quantity: getRandomNumber(1, 20),
  }),
  Transformer: new Component({
    name: 'Transformer',
    description: 'A device that transfers electricity across circuits via mutual induction.',
    quantity: getRandomNumber(1, 20),
  }),
  'Amplifier ': new Component({
    name: 'Amplifier',
    description: 'A device that magnifies electrical energy.',
    quantity: getRandomNumber(1, 20),
  }),
  Carburetor: new Component({
    name: 'Carburetor',
    description: 'A device that blends air with liquid fuel to facilitate combustion.',
    quantity: getRandomNumber(1, 20),
  }),
  Supercharger: new Component({
    name: 'Supercharger',
    description: 'An air compressor that permits sustained amplification of power output.',
    quantity: getRandomNumber(1, 20),
  }),
  'Piezoelectric Element ': new Component({
    name: 'Piezoelectric Element',
    description: 'A device that generates an electric charge through the application of stress.',
    quantity: getRandomNumber(1, 20),
  }),
  'Crystal Oscillator ': new Component({
    name: 'Crystal Oscillator',
    description: 'A circuit that produces a signal determined by the resonance of a vibrating crystal.',
    quantity: getRandomNumber(1, 20),
  }),
  'Paraffin Oil ': new Component({
    name: 'Paraffin Oil',
    description: 'A flammable lubricant formed of a mixture of heavy alkanes.',
    quantity: getRandomNumber(1, 20),
  }),
  'Silicone Oil ': new Component({
    name: 'Silicone Oil',
    description: 'An artificially refined nonflammable lubricant suitable for clinical applications.',
    quantity: getRandomNumber(1, 20),
  }),
  'Synthetic Muscle ': new Component({
    name: 'Synthetic Muscle',
    description: 'A robotic component composed of synthetic muscle fibers.',
    quantity: getRandomNumber(1, 20),
  }),
  Turboprop: new Component({
    name: 'Turboprop',
    description: 'A power plant employing a turbine to drive a propeller.',
    quantity: getRandomNumber(1, 20),
  }),
  Turbojet: new Component({
    name: 'Turbojet',
    description: 'A power plant that uses exhaust as the impetus for its output.',
    quantity: getRandomNumber(1, 20),
  }),
  'Tesla Turbine ': new Component({
    name: 'Tesla Turbine',
    description: 'An exceptionally durable power plant invented by a maverick engineer.',
    quantity: getRandomNumber(1, 20),
  }),
  'Polymer Emulsion ': new Component({
    name: 'Polymer Emulsion',
    description: 'A colloidal dispersion used as a raw material in bioengineering.',
    quantity: getRandomNumber(1, 20),
  }),
  'Ferroelectric Film ': new Component({
    name: 'Ferroelectric Film',
    description: 'A film with unique properties permitting spontaneous polarization.',
    quantity: getRandomNumber(1, 20),
  }),
  'Superconductor ': new Component({
    name: 'Superconductor',
    description: 'A material possessing no electrical resistivity under certain conditions.',
    quantity: getRandomNumber(1, 20),
  }),
  'Perfect Conductor ': new Component({
    name: 'Perfect Conductor',
    description: 'A conductor with zero electrical resistance and a fixed internal magnetic field.',
    quantity: getRandomNumber(1, 20),
  }),
  'Particle Accelerator ': new Component({
    name: 'Particle Accelerator',
    description: 'A device that smashes ions at high speeds in order to release their intrinsic energy.',
    quantity: getRandomNumber(1, 20),
  }),
  'Ultracompact Reactor ': new Component({
    name: 'Ultracompact Reactor',
    description: 'A miniaturized fusion reactor whose reactions produce tremendous energy.',
    quantity: getRandomNumber(1, 20),
  }),
  'Credit Chip ': new Component({
    name: 'Credit Chip',
    description: 'Currency used for military remuneration. Can be sold for a premium.',
    quantity: getRandomNumber(1, 20),
  }),
  'Incentive Chip ': new Component({
    name: 'Incentive Chip',
    description: 'Bonus credit used for military incentives. Can be sold for a premium.',
    quantity: getRandomNumber(1, 20),
  }),
  'Cactuar Doll ': new Component({
    name: 'Cactuar Doll',
    description: 'A doll with a button-activated needle firing mechanism. Can be sold for a premium.',
    quantity: getRandomNumber(1, 20),
  }),
  'Moogle Puppet ': new Component({
    name: 'Moogle Puppet',
    description: "A toy that says 'Kupo' when its bobble is squeezed. Can be sold for a premium.",
    quantity: getRandomNumber(1, 20),
  }),
  'Tonberry Figurine ': new Component({
    name: 'Tonberry Figurine',
    description: 'A figurine said to bear the grudges of former owners. Can be sold for a premium.',
    quantity: getRandomNumber(1, 20),
  }),
  'Plush Chocobo ': new Component({
    name: 'Plush Chocobo',
    description: 'A much sought after chocobo doll. Can be sold for a premium.',
    quantity: getRandomNumber(1, 20),
  }),
  'Gold Dust ': new Component({
    name: 'Gold Dust',
    description: 'Sandy grains of gold. Can be sold for a premium.',
    quantity: getRandomNumber(1, 20),
  }),
  'Gold Nugget ': new Component({
    name: 'Gold Nugget',
    description: 'A lump of smeltered gold. Can be sold for a premium.',
    quantity: getRandomNumber(1, 20),
  }),
  'Platinum Ingot ': new Component({
    name: 'Platinum Ingot',
    description: 'A bar of cast, refined platinum. Can be sold for a premium.',
    quantity: getRandomNumber(1, 20),
  }),
  'Millerite ': new Component({
    name: 'Millerite',
    description: 'An aggregate of nickel sulfide. Functions as a transformational catalyst.',
    quantity: getRandomNumber(1, 20),
  }),
  'Rhodochrosite ': new Component({
    name: 'Rhodochrosite',
    description: 'A pink manganese carbonate crystal. Functions as a transformational catalyst.',
    quantity: getRandomNumber(1, 20),
  }),
  Cobaltite: new Component({
    name: 'Cobaltite',
    description: 'A bluish, corrosion-resistant mineral. Functions as a transformational catalyst.',
    quantity: getRandomNumber(1, 20),
  }),
  Perovskite: new Component({
    name: 'Perovskite',
    description: 'A stone composed of calcium titanate. Functions as a transformational catalyst.',
    quantity: getRandomNumber(1, 20),
  }),
  Uraninite: new Component({
    name: 'Uraninite',
    description: 'A radioactive mineral rich in uranium. Functions as a transformational catalyst.',
    quantity: getRandomNumber(1, 20),
  }),
  'Mnar Stone ': new Component({
    name: 'Mnar Stone',
    description: 'A stone said to grant the holder visions. Functions as a transformational catalyst.',
    quantity: getRandomNumber(1, 20),
  }),
  Scarletite: new Component({
    name: 'Scarletite',
    description: 'A fiery metal said to be of divine origin. Functions as a transformational catalyst.',
    quantity: getRandomNumber(1, 20),
  }),
  Adamantite: new Component({
    name: 'Adamantite',
    description: 'A mineral boasting diamond-like hardness. Functions as a transformational catalyst.',
    quantity: getRandomNumber(1, 20),
  }),
  'Dark Matter ': new Component({
    name: 'Dark Matter',
    description: 'Dark magic in material form. Functions as a transformational catalyst.',
    quantity: getRandomNumber(1, 20),
  }),
  Trapezohedron: new Component({
    name: 'Trapezohedron',
    description: 'A prism whose refracted light casts no shadow. Functions as a transformational catalyst.',
    quantity: getRandomNumber(1, 20),
  }),
};
