import defiersOfFate from '../../../assets/datalog/events/chapter-1/defiers-of-fate.webp';
import inPursuitOfSnow from '../../../assets/datalog/events/chapter-2/in-pursuit-of-snow.webp';
import branded from '../../../assets/datalog/events/chapter-3/branded.webp';
import nothingButGrief from '../../../assets/datalog/events/chapter-4/nothing-but-grief.webp';
import aStrategyForChange from '../../../assets/datalog/events/chapter-5/a-strategy-for-change.webp';
import sunDappledFlight from '../../../assets/datalog/events/chapter-6/sun-dappled-flight.webp';
import theCapitalOfCommerce from '../../../assets/datalog/events/chapter-7/the-capital-of-commerce.webp';
import theCityOfDreams from '../../../assets/datalog/events/chapter-8/the-city-of-dreams.webp';
import theSanctumSkyfleet from '../../../assets/datalog/events/chapter-9/the-sanctum-skyfleet.webp';
import whatFalcieWant from '../../../assets/datalog/events/chapter-10/what-falcie-want.webp';
import aFruitlessSearch from '../../../assets/datalog/events/chapter-11/a-fruitless-search.webp';
import startYourEngines from '../../../assets/datalog/events/chapter-12/start-your-engines.webp';
import theCradleWillFall from '../../../assets/datalog/events/chapter-13/the-cradle-will-fall.webp';
import { type ILogEntry } from '../../../layouts/LogEntryLayout.astro';

interface IChapter {
  name: string;
  slug: string;
  logEntries: ILogEntry[];
}

export const chapters = {
  'Chapter One': {
    name: 'Chapter One',
    slug: 'chapter-one',
    logEntries: [
      {
        name: 'Defiers of Fate',
        slug: 'defiers-of-fate',
        imageMetadata: defiersOfFate,
        description: `Lightning and Sazh are held aboard a military 'Purge' train along with a group of civilians destined for exile. In a stark contrast to the uncertain and despairing people around her, Lightning appears determined and focused.\nShe seizes upon an instant of inattention to disable a guard, and her impressive display inspires Sazh and the other civilians to take up arms against the soldiers.\nAfter clashing with army forces, the train crashes to a halt in the war-torn district known as the Hanging Edge.\nSazh attempts to figure out Lightning's angle, but she shows little desire to share. The former soldier throws herself into battle without the slightest hint of hesitation — what could be driving her...?`,
      },
      {
        name: 'Fields of War',
        slug: 'fields-of-war',
        description: `Suspect citizens of Cocoon are wrenched from their tranquil existence and threatened with exile to the world of Pulse. The Purge has begun.\nThe 'land below' is said to crawl with unknown perils, and terrified civilians begin to rebel against the Purge. A revolt also occurs on the train transporting Purge deportees, as Lightning's battle against the guards galvanizes the other prisoners into action.\nThe train comes to a halt in the district of the Hanging Edge—now a hellish warzone where soldiers open fire indiscriminately upon civilians.\nLightning makes her way through the middle of the conflict, all but ignoring her uninvited companion, Sazh. She seems determined to press onwards even when the path before her is destroyed by military strikes.`,
      },
      {
        name: 'Another Rebellion',
        slug: 'another-rebellion',
        description: `The peaceful citizens of Cocoon live in constant fear of invasion by the forces of Pulse — the world below and supposed home of terrors unknown.\nWere even a single Pulsian agent to be discovered on Cocoon, panic and civil unrest would be sure to follow, threatening the very fabric of society. To prevent such a calamity, the Sanctum (Cocoon's governing body) initiates the 'Purge' — a government initiative officially entailing the deportation of all those who may have come into contact with corrupting Pulsian influences.\nHowever, the Sanctum army is now brutally slaughtering the civilians they were supposed to be deporting.\nRealizing that the Purge is nothing more than a massacre in disguise, Snow leads the young freedom fighters of NORA in an effort to protect the Purge 'deportees' from the Sanctum soldiers.`,
      },
      {
        name: 'The Warpath Home',
        slug: 'the-warpath-home',
        description: `The Purge is a Sanctum initiative designed to protect the stability of Cocoon by forcing potentially dangerous civilians to relocate to Pulse.\nHowever, the relocation is simply a facade to cover the massacre that ensues. The government's true goal is the brutal extermination of all possible threats to society.\nHaving discovered the horrific truth, Snow leads the members of NORA against the government soldiers of PSICOM.\nInspired by the actions of this handful of brave young men and women, the beleaguered civilians take heart and join the battle in the hope of returning to a normal life.\nAmong the citizens who stand against the forces of PSICOM is a mother who wishes for nothing more than to protect her son.`,
      },
      {
        name: 'Fallen Innocence',
        slug: 'fallen-innocence',
        description: `Cocoon's citizens have always been terrified of Pulse and the mysterious horrors that are said to stalk its hostile wastelands.\nTheir fear is so great that if a Cocoon native were to have even the briefest contact with Pulsian elements, former friends and neighbors would consider them corrupted and dangerous.\nIn light of this fact, the Sanctum orders the Purging of Bodhum in an effort to remove all potentially Pulse-tainted civilians.\nAccordingly, soldiers round up all those identified as candidates for relocation and inform them of their impending exile.\nHowever, PSICOM, the elite arm of the Sanctum military, then begins to massacre the helpless civilians. This prompts Snow to lead the people in a rebellion against the army. Tragically, one of the civilians who decides to follow him, hoping to protect her son, dies in the act of saving Snow's life.\nFrom afar, the boy witnesses the moment of his mother's death in shock and disbelief.`,
      },
      {
        name: "The Fal'Cie Awaits",
        slug: 'the-falcie-awaits',
        description: `A massive object is transported through the sky over the Hanging Edge. This object is a Pulse Vestige — a lowerworld artifact that had been nothing more than a Bodhum landmark. Two days ago, it was discovered that the Vestige housed a long dormant Pulse fal'Cie.\nThe fal'Cie had slumbered undisturbed on the outskirts of a Cocoon city for centuries. The Sanctum decrees that the presence of the Pulse entity and its corrupting magics have tainted the entire population of the city, and orders the Purge.\nFor different reasons, Lightning and Sazh now make their way towards the very being that was the catalyst for so much tragedy.\nSnow, meanwhile, is crushed by feelings of guilt after many die under his command. He only emerges from his gloom when Gadot reminds him that the fal'Cie is holding a certain young lady captive — who needs her hero now more than ever.`,
      },
      {
        name: 'Into the Vestige',
        slug: 'into-the-vestige',
        description: `Snow still cannot shake his feelings of guilt. Despite his efforts to protect the Purge deportees from the Sanctum forces, many have fallen.\nThe death of one woman in particular haunts his thoughts: a mother fighting for the sake of her son, who gave her life to save Snow.\nIn the moments before her death, the woman begged the leader of NORA to take care of her child, but slipped from Snow's grasp without revealing the boy's identity.\nWith Gadot's help, Snow breaks out of his depression. He figures that if he just goes ahead and protects everyone, then the woman's son will be saved as well.\nAfter checking to see if the children are safe, Snow leaves the waning battle to his fellow NORA members and sets off with new determination towards the Vestige. His fiancée is still held captive by the Pulse fal'Cie.\nA boy watches him leave, eyes filled with rage and loathing. To his grief-stricken mind, Snow is responsible for his mother's death.`,
      },
      {
        name: 'Fates Intertwined',
        slug: 'fates-intertwined',
        description: `For centuries, a Pulse fal'Cie has slumbered undisturbed on the outskirts of a Cocoon city. On the day the lowerworld entity is finally discovered, Cocoon's peaceful society is plunged into chaos.\nThe government judges the city's inhabitants to have been tainted by their unwelcome guest, and begins a merciless campaign to expunge both the fal'Cie and the 'corrupted' citizenry from the face of Cocoon.\nInstead of the exile they were led to expect, the civilians face extermination at the hands of the Sanctum army.\nThe people attempt to fight back, but are hopelessly outmatched by the military.\nLightning cuts her way through this battlefield, doggedly followed by the desperate Sazh.\nSnow, meanwhile, seeks to rescue his fiancée.\n...And a boy spurred on by dreams of revenge pursues Snow with the help of an unusual young lady.\nThough driven by their separate goals, their paths all lead to the same end: the Pulse fal'Cie.`,
      },
    ],
  },
  'Chapter Two': {
    name: 'Chapter Two',
    slug: 'chapter-two',
    logEntries: [
      {
        name: 'In Pursuit of Snow',
        slug: 'in-pursuit-of-snow',
        imageMetadata: inPursuitOfSnow,
        description: `Hope has fallen into a panic.\nIn his single-minded pursuit of Snow, he has rushed into the lair of a fal'Cie and is only now recalling the terrible nature of the being that lurks within. The Pulse entity could use its power to curse them—to turn them into l'Cie.\nPulse l'Cie are the doomed servants of the fal'Cie who created them, despised and feared by the people of Cocoon.\nHope's companion, Vanille, seems unconcerned by this dreadful possibility. Bemused by her indomitable cheerfulness, he nervously follows her in search of Snow.\nIt was Snow who convinced his mother to fight. It was Snow she was protecting when she died. And it is Snow who must be made to pay.`,
      },
      {
        name: 'Where Men Fear to Tread',
        slug: 'where-men-fear-to-tread',
        description: `To the citizens of Cocoon, the lowerworld of Pulse is a hell rife with unknown terrors, and the recently discovered Pulse fal'Cie is an invader from that hell.\nIn an effort to quell the growing panic in the wake of the entity's discovery, the Sanctum initiates an extreme measure known as the Purge. Under this initiative, not only is the fal'Cie to be cast out of Cocoon, but all of the civilians living nearby as well.\nAny person coming into contact with the lowerworld being's foul energies could already be corrupted, and no potential enemies of Cocoon can be allowed to remain.\nThe ensuing 'deportation' claims the lives of countless civilians, Hope's mother among them. After witnessing her death and chasing Snow into the Vestige in a blind rage, Hope suddenly realizes that he may soon share the same fate as the Pulse fal'Cie: relocation to the world below.\nVanille, however, calmly accepts the situation, and lends her support to the distraught boy.\nUnaware of his young pursuers, Snow begins exploring the arcane halls and chambers of the shrine-like Vestige in search of his captive fiancée, Serah.`,
      },
      {
        name: 'Open Doors Beckon',
        slug: 'open-doors-beckon',
        description: `The Pulse fal'Cie—an entity that threatens the peace of Cocoon's society—holds Snow's fiancée captive.\nAs the determined Snow delves ever deeper into the alien structure, Lightning and Sazh arrive at the Vestige after fighting their way through waves of Sanctum forces.\nThe unlikely duo's progress is halted by an impassable gate, which finally opens as if in response to Lightning's whispered words of apology.\nDid her plea reach the mind of the fal'Cie? Or was another being responsible for opening the portal?\nSazh follows the ex-soldier into the Vestige, bemused by the lack of explanation, but driven on nonetheless by a purpose he has yet to reveal.`,
      },
      {
        name: "In the Shadow of l'Cie",
        slug: 'in-the-shadow-of-lcie',
        description: `Military 'weapons' stalk the halls of the Vestige. Though the PSICOM recon team that uncovered the lowerworld being two days previous is still trapped inside, Lightning and Sazh know that the real threat is not part of the Sanctum army, but the Pulse fal'Cie and its servant l'Cie.\nPulse l'Cie are former humans who have become agents of destruction. Those residents living near the Vestige face being Purged simply because of their proximity to the fal'Cie and the possibility that its power has bound them into servitude.\nWith tales of l'Cie haunting his thoughts, Hope hears Snow's voice calling in the distance.\nAlthough he plans to confront Snow over his mother's death, the reality of the situation becomes too much for Hope to bear. He cannot go through with it. Not yet.`,
      },
      {
        name: 'Saving the Enemy',
        slug: 'saving-the-enemy',
        description: `Pulse l'Cie are cursed beings who wield supernatural power and whose very existence incites panic and destruction.\nHope explodes into a rage upon hearing that Snow plans to rescue Serah, now a l'Cie herself. Even if she is Snow's fiancée, nothing good can come of helping a sworn enemy of Cocoon. The situation only serves to magnify Hope's hatred of the man he holds responsible for his mother's death.\nShaking with fury, he is unable to form the words he so desperately wants to say.\nOblivious to Hope's anger and worried for their safety, Snow decides to bring Hope and Vanille along on his mission.\nMeanwhile, Sazh explains the cruel fate of a person cursed as a l'Cie. L'Cie are bound in eternal service to a fal'Cie, and failure to carry out a focus results in a transformation into a mindless abomination—a Cie'th.\nA person shackled by the l'Cie curse is beyond salvation.\nAs Sazh comes to this grim conclusion, Lightning angrily compares him to those who insisted on the Purge. She knows full well the doom that awaits a l'Cie, and will do anything in her power to save her sister from that fate.`,
      },
      {
        name: 'The Gift of Eternity',
        slug: 'the-gift-of-eternity',
        description: `A legend on Cocoon states that if l'Cie complete the Focus given by a fal'Cie, they turn into crystal and gain eternal life.\nAnd just as the legend describes, Serah, Lightning's younger sister and fiancée to Snow, glows with an incredible light and turns into crystal. But has she truly gained eternal life? And what Focus has she completed?\nThis timeless crystal sleep seems nothing more than another form of death to Lightning, and she turns her feelings of grief and anger upon Snow.\nSnow, however, refuses to give up hope of a future where Serah will return to him.\nJust then, the Sanctum army begins its assault on the Vestige. Though it may mean sharing the Vestige's imminent destruction, the group heads ever deeper into the complex.\nSnow seeks to persuade the fal'Cie to release his fiancée, while Lightning and Sazh have other plans in mind...`,
      },
      {
        name: 'Pulsian Menace',
        slug: 'a-pulsian-menace',
        description: `Snow pleads with the Pulse fal'Cie. He offers himself in Serah's place if it will release her from her fate.\nThe fal'Cie remains silent.\nSeeing Snow's desperate pleas go unanswered, Lightning and Sazh draw weapons on the lowerworld being. Even if the fal'Cie will soon be destroyed along with the entire Vestige, they have reasons to defeat it with their own hands.\nThey work together to bring down the fal'Cie, and the Vestige now plummets towards the lake below. A final wave of power explodes from the dying fal'Cie, transforming the water and surrounding area into solid crystal.\nLightning and the others do not witness this breathtaking event—upon defeating the fal'Cie, they are drawn through a rift into a dimension where an immense, otherworldly presence awaits.\nOnto their bodies, it sears cursed brands; onto their minds, the vision of a beast destroying Cocoon. Swept along by unimaginable energies, the helpless companions are swallowed in a lightless void.\nAs Snow drifts in the darkness, one memory fights to the surface of his consciousness...`,
      },
      {
        name: 'Bound in Darkness',
        slug: 'bound-in-darkness',
        description: `Lightning feels nothing but anger towards the Pulse fal'Cie. It had taken Serah and cursed her with a l'Cie's doomed existence. It is the underlying reason for the Purge. And it is an enemy to be cut down if she is to fulfill Serah's final request: to save Cocoon.\nLightning's aggression provokes the fal'Cie into action, and it attacks her. Sazh draws his guns with grim resolve, and Snow joins the battle without hesitation.\nAs they deal the killing blow to the master of the Vestige, a flash of light rends the air.\nThey are pulled into a swirling void of chaos, where they are bound by an ominous and inexorable entity. Branded with arcane markings, the companions are then assaulted with the vision of a terrible beast tearing Cocoon apart. Soon after, the Vestige finally succumbs to the combined attacks of the Sanctum forces.\nIn the midst of the chaos, a memory surfaces from the depths of Snow's fading awareness: a marriage proposal made to his beloved Serah under a night sky lit with the colors of exploding fireworks. Can his wish for a happy future ever be granted now?`,
      },
    ],
  },
  'Chapter Three': {
    name: 'Chapter Three',
    slug: 'chapter-three',
    logEntries: [
      {
        name: 'Branded',
        slug: 'branded',
        imageMetadata: branded,
        description: `After being caught in the destruction of the Vestige, the group awakens directly under the Hanging Edge on the expanse of a solidified Lake Bresha. An after-effect of the energies released by the dying fal'Cie, the waters of the lake are now frozen in crystal splendor.\nDespite having survived a fall from an incredible height, the companions are unable to appreciate their luck as each one of them now bears a brand of alien design. The mark seared on their bodies signifies their servitude to a fal'Cie and the 'gift' of magical power.\nIt is the brand of a cursed l'Cie. Worse, they must now complete their assigned Focus if they are to avoid becoming monstrous Cie'th, though none can say for sure what their mission actually entails. Their only clue is the vision they all witnessed of the great beast laying waste to Cocoon.\nRagnarok.\nThough all signs point to a bleak and tragic destiny, Snow alone remains optimistic. Convinced that his Focus is to grant Serah's wish and save Cocoon, he sets off full of confidence.`,
      },
      {
        name: 'A Vision Shared',
        slug: 'a-vision-shared',
        description: `Now that they are Pulse l'Cie, Lightning and the others try to figure out what their Focus could be. The only thing they know for certain is that the rampaging beast Ragnarok is somehow involved.\nSnow is convinced that their Focus is to protect their world by defeating the beast. But one fact contradicts this belief: Pulse l'Cie are the hated enemies of Cocoon. A Pulse fal'Cie would never assign such a task to its servants.\nLightning is infuriated by Snow's refusal to accept this logic. As she sees it, the fal'Cie not only made them into l'Cie, it also took her sister from her. The former soldier could never bring herself to meekly follow the orders of such a being, and Snow's apparent surrender to its will, however misinterpreted, is more than she can stand.\nAs they trade heated words, Sanctum soldiers surround their location. Arguments will have to wait—for now, they must concentrate on surviving.`,
      },
      {
        name: 'Partings and Promises',
        slug: 'partings-and-promises',
        description: `Is she dead or merely sleeping?\nSerah, now a silent statue, is trapped in a crystal embrace. Lightning doesn't wish to leave her behind, but reluctantly says her farewells. The army is on their trail. If they stop to dig Serah free, their pursuers will certainly catch them.\nHowever, Snow is not ready to say good-bye. He elects to stay behind, protect Serah, and somehow fulfill her wish to save Cocoon.\nKnowing they cannot change his mind, Lightning and the others continue on their way. Hope drags himself away from Snow for what might be the final time—and the chance to say what he is burning to say is lost.`,
      },
      {
        name: 'Casting the Net',
        slug: 'casting-the-net',
        description: `Lightning and the others leave Snow behind with the crystallized Serah. As they continue their flight across the glassy expanse of Lake Bresha, the four companions spy a large contingent of Sanctum soldiers.\nIn order to hunt down and exterminate the Purge fugitives, the government is mobilizing an inordinate number of troops. The excessive reaction is further proof of Cocoon's fear and hatred of Pulse. Even those who have barely come into contact with lowerworld elements cannot be permitted to exist.\nThis all-consuming fear of some imagined corruption is the origin of the Purge. The entire population of a town was subjected to the Purge simply for living near the uncovered Pulse fal'Cie.\nIt was Cocoon's citizens, in their terror, who allowed such an extreme policy to become a reality — the government simply acted in response to the will of the people. And Eden, the fal'Cie who guides the Sanctum, gave its tacit consent through silence.\nNow, after untold bloodshed, a military net is closing around the fleeing l'Cie, driven by the clamoring of a panicked and angry populace.`,
      },
      {
        name: 'The Only Way Is Up',
        slug: 'the-only-way-is-up',
        description: `Lightning and the others are now cursed l'Cie. If they don't complete the Focus given to them by the fal'Cie, they are destined to become mindless Cie'th.\nBut how can they complete a Focus that they don't understand?\nTheir shared vision of the great beast Ragnarok laying waste to their world is their only clue. That, and the fact that Pulse l'Cie are held to be the mortal enemies of Cocoon...\nCould their Focus really be to orchestrate the destruction of their own home?\nSnow doesn't think so.\nHe believes their task is to fulfill Serah's parting wish by keeping Cocoon safe. After all, wasn't she a l'Cie, just like them? His shaky logic only serves to infuriate Lightning, who holds him responsible for her sister's fate. Their confrontation is cut short by the arrival of their Sanctum pursuers.\nHaving made their escape, Lightning and the others pass through the ruins of a city damaged several centuries ago in the war with Pulse.\nAmidst the rubble, they happen upon an airship which they board in the hope of finally shaking the relentless army.\nSnow, meanwhile, remains being with the crystallized Serah...`,
      },
      {
        name: 'The Twin Sisters',
        slug: 'the-twin-sisters',
        description: `There is no doubt in Snow's mind.\nThey may be Pulse l'Cie, but there is no way they can be enemies of Cocoon. Serah's last words before she turned to crystal are proof enough for him that their Focus is to defeat Ragnarok and protect their world.\nSnow stays behind to defend his trapped fiancée after Lightning and the others decide to continue onward.\nBrought to his knees by wave after wave of PSICOM soldiers during a protracted battle, the desperate young man is suddenly overcome by a strange phenomenon.\nThe Twin Sisters of Shiva, Stiria and Nix, appear before him in a blinding flash of light. They easily dispatch the remaining troops, and then turn on Snow.\nHe manages to defeat the icy Eidolons, but is soon captured by an unfamiliar Sanctum unit.\nA striking woman accompanies the soldiers — a woman with a l'Cie brand.\nMeanwhile, try as they might, Lightning's group cannot shake their determined pursuers. Crippled by enemy fire, their airship plummets toward the ground...`,
      },
    ],
  },
  'Chapter Four': {
    name: 'Chapter Four',
    slug: 'chapter-four',
    logEntries: [
      {
        name: 'Nothing but Grief',
        slug: 'nothing-but-grief',
        imageMetadata: nothingButGrief,
        description: `Their airship damaged during the escape from the army, the l'Cie are forced to make a crash landing in the Vile Peaks.\nAccustomed to the rigors of conflict, Lightning immediately sets off to outdistance any pursuit, trailed by Hope.\nExhausted and on the brink of despair, Sazh cannot bring himself to follow. He knows the army will never stop chasing them and even if they do somehow evade capture, they face transformation into Cie'th. How can they complete a Focus they don't understand?\nDespite the futility of the situation Sazh cannot leave Vanille behind to fend for herself, and he forces his reluctant legs to carry him onward.\nFar ahead of the others, Lightning recalls a conversation with her old superior, Lieutenant Amodar, in which he had warned her not to get involved with anything connected to the lowerworld. She, of course, subsequently chose not to heed his warning, and after confronting the Pulse fal'Cie found herself branded a l'Cie.\nNow, anger smolders within her. Anger at her transformation into a l'Cie, anger at being forced to flee like a fugitive, and anger at herself for allowing it all to happen.`,
      },
      {
        name: 'I Wanna Be Purged',
        slug: 'i-wanna-be-purged',
        description: `The Sanctum announces the Pulse fal'Cie and any civilians who may have come into contact with its influence are to be deported to the world below.\nKnowing that Serah is being held by the offending creature, Lightning reasons that the only way to reach her sister before they are exiled is to board the train and be Purged herself. After coming to this conclusion, she acts without hesitation. She knows the risks, but there are some things you just have to do...\nAs Hope listens to Lightning's tale, he begins to realize how different they are. He knows he doesn't have the strength to charge into certain danger, even if he has no other choice. Unable to keep up with the battle-hardened soldier, Hope falls into despair.\nMeanwhile, Sazh and Vanille fight their way along a different route. Like Lightning, Sazh had joined the Purge voluntarily, but now he simply acts as fear and despair prompt him, his former resolve seemingly forgotten.`,
      },
      {
        name: 'Hope and Despair',
        slug: 'hope-and-despair',
        description: `As a resident of Palumpolum, Hope should never have been a candidate for the Purge. The radical government policy only concerns the inhabitants of the town of Bodhum.\nUnfortunately for Hope and his mother, the Sanctum announces the Purge on the day they are visiting the coastal community — and the Sanctum soldiers rounding up the deportees make no distinction between locals and visitors.\nLater, at the Hanging Edge, Hope's mother is killed in the violence which erupts when the true nature of the Purge is revealed.\nThis indirectly leads to Hope's encounter with the Pulse fal'Cie, and transformation into a cursed l'Cie.\nNow, he rails against his cruel fate. He curses the government that started the Purge, the fal'Cie who made him a l'Cie, the army that hunts him like a criminal...\nBut most of all, he chokes on the hatred he feels for Snow — the man responsible for dragging his mother into that battle that claimed her life.\nSazh wants to help Hope return home to his father. The boy shows little enthusiasm for a family reunion, but Sazh is insistent.\nHe knows how it feels to be a dad.`,
      },
      {
        name: 'Taking in the Trash',
        slug: 'taking-in-the-trash',
        description: `The War of Transgression — the conflict between Pulse and Cocoon.\nA towering wreck is all that remains of a lowerworld airship shot down during the battle that took place centuries before...\nAt that time, forces from Pulse attempted to invade Cocoon only to be repelled by the efforts of the Sanctum fal'Cie — though not before the invaders had rent a great wound in the floating world's shell.\nThough the Sanctum fal'Cie subsequently repaired the damage using debris from the surface of their routed enemies' planet, the psychological wounds inflicted by the conflict are evident even now in the Cocoon citizen's unreasoning fear of all things Pulse.\nAnd reminders of the lowerworld threat still remain. Mechanical terrors brought in with the debris replace their rusting parts and wander the area, while government troops struggle to contain them.\nThe Pulse fal'Cie buried in Bodhum may have arrived in the same fashion, sleeping away the years until its eventual discovery.\nWith lowerworld terrors lurking in every shadow, Sazh creeps forward, doing his best to shield Vanille and Hope...`,
      },
      {
        name: 'Fugitives in Futility',
        slug: 'fugitives-in-futility',
        description: `Lightning says little of her feelings, but Sazh senses her frustration. Despite braving the dangers of the Purge and the Vestige in an effort to save her sister, Lightning was helpless to prevent Serah's transformation into crystal. Now she is forced to flee as a fugitive — a Pulse l'Cie and hated enemy of Cocoon.\nAnd then there is their Focus. If they don't complete the task they have yet to figure out, they face transformation into mindless Cie'th. Should they fulfill their Focus, eternal crystal slumber is the only reward.\nAnd should they stop too long to ponder their fate, they risk capture and execution at the hands of the relentless Sanctum army.\nAll roads seem to lead to despair — something Sazh understands only too well. The question is: will Lightning help them find a way out of their hopeless situation?\nUnbeknownst to Sazh, the answer has already begun to form in her mind...`,
      },
      {
        name: 'Eden or Bust',
        slug: 'eden-or-bust',
        description: `Lightning makes a decision.\nThe Pulse fal'Cie transformed her and Serah into l'Cie. The Sanctum fal'Cie, Eden, directs the army hunting her down.\nPulse or Sanctum, 'fal'Cie' means one thing to Lightning: an enemy responsible for ruining their lives. A clear-cut enemy is something she can deal with. Having a target is something she can understand.\nThe former soldier means to infiltrate the Sanctum capital, and take out the fal'Cie Eden.\nShe knows her plan is reckless. It could be disastrous for Cocoon, and flies in the face of Serah's last wish. It could even end in battle against Snow, who will do anything to save Cocoon. But it is the only path that will satisfy her rage.\nSazh and Vanille oppose her idea, but Hope embraces the opportunity. This is his chance to grow stronger and finally confront Snow.\nLightning is done running away.\nNow she runs forward, her mind set on toppling the Sanctum. But even Lightning cannot foresee how this journey will end...`,
      },
      {
        name: 'Thunderous Hooves',
        slug: 'thunderous-hooves',
        description: `Hope makes a choice to fight alongside Lightning, but quickly finds himself exhausted by the pace.\nLightning grows ever more agitated. Their enemy is the Sanctum army. She cannot afford to look after the straggling Hope while she faces such a dangerous foe. Losing all patience, Lightning curses his weakness and tries to leave him behind.\nIn that moment, her l'Cie brand burns with radiant pain.\nAs if to strike down obstacles in Lightning's path, the Eidolon Odin appears and attacks the bewildered Hope.\nLightning moves without thinking. She blocks the deadly blade aimed at the boy she meant to abandon moments before.\nLightning defeats Odin, and brings the entity under her command. Why did the Eidolon appear in the first place?\nThere is no answer to her question, but one thing is certain: she no longer wishes to leave Hope to survive on his own.`,
      },
      {
        name: 'Loathing and Fear',
        slug: 'loathing-and-fear',
        description: `Sazh and Vanille decide against joining Lightning in her vendetta against the Sanctum, though doing so leaves them without a road to follow. It seems all they can do is keep running. And then there is Hope to worry about. But he'll surely grow tired of the fighting and make his way home — won't he?\nSazh also harbors another fear: with the entirety of Cocoon in an uproar over the recent Pulse activity, any incident involving l'Cie could spark a full-scale panic. After all, not even Sazh can shake his dread of the lowerworld.\nIf Cocoon is to know peace, he argues, l'Cie like them all need to die.\nEven as the words pass his lips, he immediately regrets giving voice to such sentiments, suddenly aware of his companion's feelings on the matter. But Vanille just smiles bravely, and urges Sazh to keep on moving.\nThey have to stay ahead of the army if they want to survive.`,
      },
      {
        name: 'Cold, Hard Fact',
        slug: 'cold-hard-fact',
        description: `As Lightning and the others make their way through the Vile Peaks, Snow is escorted aboard the airship Lindblum after his capture at Lake Bresha.\nHis captors are members of the Wide-area Response Brigade, otherwise known as the 'Cavalry'. The Cavalry is not directly involved with the Purge or the tracking down of l'Cie.\nNevertheless, their commander, Brigadier General Raines, calmly explains the reasons behind the Sanctum and PSICOM operations, and their plans to hold a public execution.\nIf the l'Cie are killed in plain sight of the populace, he asserts, the panic threatening the stability of their society will be defused. Are Raines and the Cavalry also tools of the Sanctum?\nAnd who is the woman who works with them? Isn't she a Pulse l'Cie and enemy of Cocoon?\nFull of questions and unsure of his captor's motives, Snow recalls another time when he felt this powerless — a time when one cold fact robbed him of the strength to stand.\nIt was the moment he learned that his beloved Serah was a Pulse l'Cie.`,
      },
      {
        name: 'Separate Paths',
        slug: 'separate-paths',
        description: `If l'Cie were machines, they would seek to complete any Focus without question. But l'Cie are human. And no human willingly desires the slavery imposed by a fal'Cie.\nSazh and Vanille support each other in their desperate flight. What is their Focus? They are scared to even contemplate the answer to that question.\nSnow, by contrast, chooses to pursue his objective without hesitation, not because he wants to obey the fal'Cie, but because it is Serah's wish.\nHe believes without the slightest shred of doubt that his Focus is to protect Cocoon.\nLightning and Hope, meanwhile, choose to fight. They turn their anger against an unjust fate and a world hostile to their very existence.\nOn their way to Eden at the very heart of Cocoon, Lightning and Hope prepare to enter a military-controlled zone...`,
      },
    ],
  },
  'Chapter Five': {
    name: 'Chapter Five',
    slug: 'chapter-five',
    logEntries: [
      {
        name: 'A Strategy for Change',
        slug: 'a-strategy-for-change',
        imageMetadata: aStrategyForChange,
        description: `Rejecting the fate chosen for her by the fal'Cie and set on exacting revenge on her cold-blooded government, Lightning enters the Gapra Whitewood along with Hope.\nIt seems they've managed to lose their PSICOM trackers, but the Whitewood is a Sanctum military zone, and their chances of encountering hostile units are high. Yet what choice do they have? It's the only road that leads to the Sanctum capital.\nLightning now intends to fight on Hope's behalf after Odin's appearance forces her to rethink her decision to leave the boy behind.\nBut she isn't the only one to have had a change of heart.\nHaving relied on Lightning for protection from the beginning, Hope resolves not to flinch from danger, choosing instead to put himself squarely in the line of fire.\nSensing the shift in his attitude, Lightning entrusts the lead to her young companion.`,
      },
      {
        name: 'Weapon of Choice?',
        slug: 'weapon-of-choice',
        description: `Taking the lead of his own free will, Hope precedes Lightning into the depths of the Gapra Whitewood.\nHe needs to be stronger.\nHope joins Lightning in her fight against the Sanctum because he thinks the experience of battle will toughen him up.\nHe cannot show fear. He cannot show weakness.\nIf he does, he's afraid Lightning will decide to go on without him again. So, even if it is a lie, he puts on a brave face, and pushes his terror aside.\nSeeing that he is struggling to control his fear, Lightning gives Hope a knife in an attempt to boost his confidence.`,
      },
      {
        name: 'The Price of Vanity',
        slug: 'the-price-of-vanity',
        description: `A Woodlands Observation Battalion patrol passes by. Strangely enough, the soldiers don't appear to be looking for intruders.\nFrom her own experience as a soldier, Lightning realizes why: these troops still don't know about the l'Cie fugitives.\nPSICOM, wishing to cover their failure to exterminate them in the Vile Peaks, is suppressing information. As an elite unit under the direct command of the Sanctum, PSICOM has its reputation to consider.\nThat pride has left a hole in the security net for Lightning and Hope to sneak through.\nIt seems their journey through the Gapra Whitewood will be easier than expected. After all the ill fortune that has befallen them so far, they're certainly due some luck...`,
      },
      {
        name: 'No Rules',
        slug: 'no-rules',
        description: `Thanks to PSICOM's reluctance to share intelligence, the security level of the Gapra Whitewood is comparatively low.\nNow that they have a little space to breathe, Lightning and Hope ponder the fates of their fellow l'Cie. Sazh and Vanille must still be on the run. And who knows how Snow must be faring?\nOut of the blue, Hope asks Lightning why Snow's gang calls itself NORA.\nThough puzzled by his sudden interest, Lightning supplies him with the answer: it's an acronym that stands for 'No Obligations, Rules, or Authority.' They wish to live without restrictions, she explains, though some might argue that what they really wish is to live without responsibility.\nHope's face darkens at this explanation. Spurred on by his agitation, he hurries onwards through the waiting gate. Where's an enemy when you need one? He needs an outlet for the anger that suddenly threatens to consume him.`,
      },
      {
        name: 'Of Revenge and Regret',
        slug: 'of-revenge-and-regret',
        description: `Lightning learns the reason for Hope's animosity towards Snow: his mother's death during the chaos of the Purge. Believing the responsibility to lie with the NORA leader, the grief-stricken boy has been feeding his rage ever since. Hope's motivation in joining Lightning in her vendetta is to experience battle and grow strong enough to challenge Snow.\nThe blade in Hope's hand shines brightly. Will the gift Lightning gave him to boost his confidence become the instrument of his revenge?\nThe weapon Hope stares at so intently awakens memories in his companion.\nOn Lightning's birthday, Serah confessed to her sister that she had become a Pulse l'Cie. Not willing to believe the story, Lightning pushed Serah away with disdainful words. By the time she discovered that Serah had been telling the truth, it was too late...\nNow the knife was all she had left of her sister — a birthday gift, and symbol of unbearable regret.`,
      },
      {
        name: 'Operation Nora',
        slug: 'operation-nora',
        description: `As Hope reaches out a hand to a fallen soldier, Lightning stops him with a harsh reminder: they have chosen the path of war. They will face many soldiers on the way, and it's kill or be killed. If you allow yourself to be controlled by compassion, if you allow yourself to falter, then you are lost. Lightning teaches Hope a strategy for removing hesitation: decide upon a goal and shut out everything else.\nHope takes these words to heart, and comes up with Operation Nora. Named after his dead mother, it is the means by which he will exact his vengeance upon Snow.\nThough he knows it won't bring his mother back, it's nevertheless something he needs to do.\nLightning soon realizes her mistake. Her lecture to abandon compassion was intended as a warning against the hesitation she fears will be his undoing, but he has clearly interpreted it as a cue to hurl himself headlong into harm's way.\nRegretting her words, Lightning continues in through the Whitewood.`,
      },
      {
        name: 'Driving Forces',
        slug: 'driving-forces',
        description: `Hope now concentrates all his efforts on Operation Nora — his plan for taking revenge against Snow.\nThough she feels responsible for his newly acquired recklessness in battle, Lightning finds herself unable to say anything. She is afraid that if she prevents Hope from fighting, he will lose the drive he needs to keep going, and succumb to despair.\nNot knowing how to reach Hope, Lightning rescinds her earlier decision and suggests they visit the boy's father in Palumpolum.\nMeanwhile, Snow struggles with his conscience as he prepares to help the Cavalry track down the other Pulse l'Cie. Snow swore to do whatever it takes to save Cocoon. What has happened to make him act against that promise?\nNow clear of the Vile Peaks, Sazh and Vanille approach a stretch of beautiful countryside that promises an easier road to travel.`,
      },
    ],
  },
  'Chapter Six': {
    name: 'Chapter Six',
    slug: 'chapter-six',
    logEntries: [
      {
        name: 'Sun-dappled Flight',
        slug: 'sun-dappled-flight',
        imageMetadata: sunDappledFlight,
        description: `As they flee with no particular destination in mind, Sazh and Vanille spot warships passing overhead. The military craft appear to be flying in the direction of Palumpolum. Lightning and Hope were heading towards that city...\nCould the army have found them?\nThough Sazh is worried for his former companions' safety, he knows that any attempt to rescue them from Sanctum troops would be suicide. Still, they can't just walk away—can they?\nSensing Sazh's uncertainty, Vanille swiftly agrees that there isn't much they can do, and suggests they run. Reasoning that it would be best to put as much distance between themselves and the army as possible, she suggests heading in the opposite direction — towards the city of Nautilus.\nAnd so Vanille skips off through the dappled shade of the Sunleth Waterscape, only too eager to put danger behind them once more.`,
      },
      {
        name: 'A Wish for Daddy',
        slug: 'a-wish-for-daddy',
        description: `Sazh and Vanille make their way through the Sunleth Waterscape, trying to distance themselves from the Sanctum forces assembling in the city of Palumpolum.\nVanille's offhand question about family fills Sazh's head with memories of his son, Dajh...\nAs fireworks illuminated the night sky with brilliant color, Dajh had made a wish out of concern for his dad. Touched by the insight of his little boy, Sazh smiled, pretending to be cheerful — but all the while an unbearable pain gnawed at his soul.\nThis pain plagues him even now. But what is the reason for Sazh's misery? And who is the enigmatic woman with a more than passing interest in the boy and his father?`,
      },
      {
        name: 'Father and Son',
        slug: 'father-and-son',
        description: `With a heavy heart, Sazh reveals the fate that has befallen his son, Dajh.\nWhen Pulse l'Cie invaders attacked the fal'Cie powering the Euride Gorge Energy Plant, it chose the closest human to become its servant and defender: a small boy who had wandered into the facility. Now a Sanctum l'Cie with the ability to sense the presence of Pulsian energies, Dajh has been held in custody and monitored by government officials ever since.\nIt is thanks to Dajh's unique ability that PSICOM was able to discover the Pulse fal'Cie in Bodhum. However, with his exact Focus yet to be determined, the boy is doomed to become a Cie'th.\nThis is what prompted Sazh to board the Purge train. Guessing that Dajh's Focus might be to destroy the Pulse fal'Cie, Sazh seized the only means available to him to reach the accursed creature before it could be carried to the world below. If he could slay it somehow, he reasoned, he might just be able to save his son.\nSo, now that the Pulse fal'Cie is no more, has Dajh gone through the same crystal transformation as Serah? Or was his Focus not to rid the world of the fal'Cie, but of the l'Cie servants it created?\nIf that is the case, then Sazh and his companions must die to spare Dajh a fate worse than death.`,
      },
      {
        name: 'Chain of Events',
        slug: 'chain-of-events',
        description: `Sazh's son, Dajh, was branded a Sanctum l'Cie when he stumbles into the midst of a Pulse attack on the Euride Gorge Energy Plant.\nWith the help of the l'Cie powers Dajh gained during the incident, the military discovered the Pulse fal'Cie in Bodhum, instigating the Purge. In the ensuing violence, Hope lost his mother, and Lightning and Snow witnessed Serah's transformation into crystal.\nThe whole series of events that has thrown their lives into chaos and threatens even now to shatter Cocoon's peaceful society can be traced back to Euride.\nHad that incident never occurred, could these tragedies have been avoided? Who can say? There is little point lamenting that which cannot be changed.\nYet though the past cannot be changed, it can be forgotten — for a while, at least — and so Sazh and Vanille make their way to Nautilus, 'City of Dreams,' as storm clouds gather overhead.\nMeanwhile, Lightning and Hope enter one of the largest cities on Cocoon — as quite another kind of storm approaches...`,
      },
    ],
  },
  'Chapter Seven': {
    name: 'Chapter Seven',
    slug: 'chapter-seven',
    logEntries: [
      {
        name: 'The Capital of Commerce',
        slug: 'the-capital-of-commerce',
        imageMetadata: theCapitalOfCommerce,
        description: `With events spiraling out of control, the Sanctum army mobilizes all of its forces under its command in an attempt to apprehend the Pulse l'Cie thereby preventing Cocoon from descending into chaos. Prioritizing its mission over its reputation, PSICOM accordingly enlists the aid of the Guardian Corps soldiers.\nUnder the general command of Colonel Rosch, units of troops occupy positions across Palumpolum in anticipation of a l'Cie attack.\nOriginally planning to take the Eden-bound train from inside the city, Lightning is now having second thoughts. She can't help but feel concern when she sees the rage-fueled Hope throwing himself into battle. It doesn't help that it was Lightning herself who inadvertently encouraged him to concentrate on his goal of revenge in the first place.\nAnd that goal is what drives him now. He must complete Operation Nora, and make Snow and the Sanctum pay for the death of his mother. But who can say how much time remains for a l'Cie who ignores his Focus?\nIgnorant of her worries, Hope leads Lightning to an underground complex that will allow them to sneak past the Guardian Corps troops and into the city.`,
      },
      {
        name: 'Under Their Noses',
        slug: 'under-their-noses',
        description: `Under the command of Colonel Rosch, PSICOM and the Guardian Corps occupy positions across Palumpolum in anticipation of a l'Cie attack.\nIn order to avoid the increased security, Lightning and Hope travel through an underground complex that reaches far beneath the city. If they can enter the town undetected, they should be able to find a way to reach Eden — the capital that lies at the heart of Cocoon.\nHope hurries onwards, eager to continue Operation Nora, and exact revenge on Snow and the Sanctum.\nYet l'Cie who fail to complete their Focus become Cie'th. It's uncertain when the exact moment of transformation will come, but time is not on their side. Even though there may be no light at the end of the tunnel, they have no choice but to keep trudging along in the dark.\nHope's grim determination is a source of pain for Lightning. Her attempt at giving him a reason to survive has backfired, fanning the flames of his hatred and setting him on the path to a deadly confrontation.\nHe is her responsibility. She has to protect him.`,
      },
      {
        name: 'No Way to Live',
        slug: 'no-way-to-live',
        description: `The Sanctum fal'Cie treat the people of Cocoon like pets. Upon realizing this fact, Lightning comes to understand herself. Since the moment she was born, she was raised under fal'Cie care. Sheltered and protected, she never realized how much she depended on them. But after becoming a Pulse l'Cie, she is removed from that protection.\nAnd like a child separated from her mother, she wanders in confusion and doubt. Added to the anxiety of being a fugitive, the grief of losing Serah, and her rage at an unjust fate, Lightning finds herself on the brink of blackest despair.\nIt is all so clear now. Thinking of a future without hope would be too much to bear, so she made the Sanctum her enemy and sought to lose herself in mindless combat. But it was all just a way to avoid facing reality.\nAnd now she's got Hope doing the same.\nIf he loses himself in revenge, he may gain temporary respite from the horror of his predicament — but it will solve nothing.\nOvercome by guilt, Lightning tells Hope to abandon Operation Nora, much to the boy's disbelief. If he gives up on revenge, what else is there to live for?\nThe two l'Cie have much to think about...`,
      },
      {
        name: 'The Weight of Vengeance',
        slug: 'the-weight-of-vengeance',
        description: `Lightning knows that Snow is not Hope's favorite person. But the only way to ensure the boy's escape from the swarm of Sanctum troops is to leave him with the man he despises.\nHer mind made up, Lightning shoves Hope at Snow, then charges the enemy soldiers, intending to cut a path through which they can escape. She may have failed to give him hope, but the least she can do is keep him alive — even if it means sacrificing herself.\nAfter appearing out of nowhere with an Eidolon and felling soldiers left and right, Snow explains how the Cavalry picked him up. The rebel brigade is part of the Sanctum army, but it seems they have plans to topple the government with the help of the l'Cie.\nHope, of course, couldn't care less. The man responsible for his mother's death stands right in front of him. Operation Nora might be over, but his rage will not be satisfied by mere words.\nAs Hope runs through streets sheathed in Shiva's ice, he can feel the shape of the knife Lightning left in his care nestled against his side...`,
      },
      {
        name: "It's Called Interference",
        slug: 'its-called-interference',
        description: `Colonel Rosch, PSICOM Director in command of l'Cie operations, decides to escalate the military presence in Palumpolum. Authorizing open warfare in the streets while civilians are still being evacuated is inviting disaster, but he is willing to make that sacrifice.\nIf the l'Cie are not put down here and now, the Pulse-phobic populace will reach boiling point: Cocoon's towns will erupt in riots, and the loss of life will be staggering.\nMeanwhile, the l'Cie — who are currently split into two groups — choose Hope's house as a rendezvous point. But will they all make it?\nEvery word that the oblivious Snow says feeds the flames of Hope's anger. Has Snow forgotten what he's done? Has he forgotten how he got Hope's mother killed? Hope's patience has finally run out.\nDuring a radio conversation with Lightning, he states his intention to carry out Operation Nora...and take his revenge. With that, the line goes dead.\nLightning tries to reason with Hope, but her desperate plea never reaches him.`,
      },
      {
        name: "The Pulse L'Cie",
        slug: 'the-pulse-lcie',
        description: `The hellish lowerworld feared by every citizen of Cocoon is known to Fang as Gran Pulse. On the way to Hope's home, she begins relating her past in response to Lightning's probing.\nFang reveals that she is a l'Cie from Gran Pulse — the world below the floating shell of Cocoon. After completing a Focus, she had turned to crystal.\nWhen she awoke, Fang found herself very far from home in the nest of her enemies. And she was not alone — Vanille, a fellow Gran Pulse l'Cie, was with her.\nMeanwhile, in another part of the city, Snow and Hope spy a group of Palumpolum civilians being herded by Sanctum troops. The government means to Purge them too...\nThinking to rescue the people from their fate, Snow leaps into action, ever the cheerful hero — but this serves only to further agitate Hope.\nWhat does a l'Cie with no hope for the future have to smile about? Shaking his head in disgust, Hope awaits his opportunity to take his revenge.`,
      },
      {
        name: 'Mob Injustice',
        slug: 'mob-injustice',
        description: `Snow has seen the merciless nature of the Sanctum army.\nThe military's goal is not the protection of civilians — it is the extermination of l'Cie. As long as the Pulse servants are killed, the number of innocent deaths is inconsequential.\nSnow threatens the citizens, hoping to make them run as far away as possible, and thus protect them from ending their days as 'collateral damage.'\nBut his good intentions are misunderstood.\nAn angry mob tracks down the two l'Cie, and advances on them with a mix of trepidation and determination. They believe they are doing the right thing—that they are standing up in defense of their homes.\nThe scene reminds Hope just how much everyone on Cocoon hates l'Cie. Hates him. Coming face-to-face with this cruel reality, Hope falls ever deeper into despair. Even if he makes it back to his home in Felix Heights, there is no salvation waiting for him there.\nHis mother, Nora, is no longer around to shield him from the dangers of the world.\nSnow saw to that.`,
      },
      {
        name: 'Over the Edge',
        slug: 'over-the-edge',
        description: `Hope finally unleashes the anger he has been feeding for so long. Channeling his hate into deadly power, he blasts Snow with fiery magic. But just as he prepares to deal the killing blow, he is hurled from the roof of the building they are standing on by a nearby explosion.\nSnow doesn't hesitate for a second. He hasn't forgotten the dying wish of a mother who fell during the violence of the Purge. Catching the boy he now knows is her son, Snow shields Hope with his own body as they crash to the ground below.\nElsewhere, Lightning listens as Fang makes a confession...\nWhen Fang and Vanille awoke from crystal stasis, they had no memory of their past. Thinking it might give them a hint about their Focus, they decided to attack the Sanctum fal'Cie in Euride Gorge.\nUnfortunately, Fang left the scene none the wiser, and is still desperately trying to figure out their task in order to prevent Vanille from becoming a Cie'th — and to stop the creation of any more l'Cie.\nThe Gran Pulse native then reveals that she believes Serah was chosen by the fal'Cie to carry out the Focus they no longer remember.\nLightning takes the news with mixed emotions. Fang deserves to pay for what happened to Serah. But at the same time, she gives Lightning hope — her sister may not be a crystal forever.`,
      },
      {
        name: 'Until She Wakes',
        slug: 'until-she-wakes',
        description: `Just as the citizens of Lightning's world fear the lowerworld of Pulse, the people of 'Gran' Pulse — as Fang calls her home — fear the floating nest of vipers that is Cocoon.\nIt would seem that the two women are not so different. They each grew up in fear of another world, bear the mark of a Pulse l'Cie, have a Focus they don't understand, and live as fugitives from the Sanctum.\nBut unlike Lightning, Fang has not given up hope. She still plans to track down Vanille, finish their Focus, and then get back to Gran Pulse.\nHearing this, Lightning laments the fact that she has no plan and no reason to keep fighting. Fang responds that she has all the reason anyone could need; to stay alive until Serah wakes up from her crystal sleep.\nAs Lightning comes around to this idea, there is an explosion in the distance. Could Snow and Hope be in trouble? Trading worried glances, the two l'Cie race off in the direction of the fighting.`,
      },
      {
        name: 'Sustained by Hate',
        slug: 'sustained-by-hate',
        description: `Hope regains consciousness to find himself being carried on Snow's broad back.\nThe self-styled 'hero' staggers under the boy's weight as he forces his wounded body forward. Pausing to rest, he talks about the anguish and guilt he hides behind a cheerful mask — before returning the knife to Hope's hand.\nThe NORA leader is defenseless. With one thrust, Hope can finally claim vengeance for his mother's death. This is the moment the boy has fought for. His chance for revenge.\nBut Hope hesitates and then the moment is gone.\nHope reveals that he always knew killing Snow wouldn't bring his mother back, but he had no choice but to cling to that goal. He didn't survive this long to see revenge — he saw revenge as a means to survive.\nIt is his hatred of Snow that has sustained him through countless battles. In a strange way, the man who made a promise to his mother has been protecting him all along.\nWhen he is later reunited with Lightning, Hope tells her that Operation Nora is over, and gives her back her knife. He doesn't need it anymore.\nHaving avoided further military pursuit, the group finally arrives at the Estheim household, where Hope breaks the terrible news to his anxious father...`,
      },
      {
        name: 'Healing the Rifts',
        slug: 'healing-the-rifts',
        description: `The knife Serah gave her on her birthday has become a symbol of regret for Lightning.\nBecause she refused to believe her sister's story that day, Serah ended up a prisoner of the Pulse fal'Cie, and Lightning herself became a l'Cie when she later tried to save her. Since then, the former soldier has sought out battle to avoid dealing with the guilt she feels for turning her sister away.\nNow, however, Lightning finally faces the truth of her emotions, and accepts responsibility for her part in what happened.\nShe meekly apologizes to the injured Snow — the man who always believed in Serah, and protected Hope from harm.\nThe rifts between the l'Cie are healing, but the reality of the situation is still grim. When Snow talks about taking down the Sanctum, Hope's father, Bartholomew, points out the flaws in their plan.\nIf the government is toppled by l'Cie, how will the people react? Will they not see their worst fears realized, take up arms, and hasten the very cataclysm they wish to avoid?\nAs the l'Cie ponder their strategy, PSICOM commandos bursts into the house. Hope stands against the soldiers, while the wounded Snow takes care of his father.`,
      },
      {
        name: 'Here Comes the Cavalry',
        slug: 'here-comes-the-cavalry',
        description: `Colonel Rosch, Director of PSICOM, explains the necessity of his actions to the l'Cie, declaring that the Sanctum's — and the fal'Cie's decision to order the Purge was anything but arbitrary. Had they not initiated such measures, he contends, and ignored the cries of the people, Cocoon's panicked society would have torn itself apart.\nIf Rosch speaks the truth, then the l'Cie's enemy is not the government, but millions of Cocoon civilians. Yet even if this is so, they must somehow find a way to survive.\nOvercoming his desire for revenge, Hope sets out in search of a new goal. Somewhere beyond the maelstrom of hatred and the grasping will of the fal'Cie is the future they search for. Hope bids farewell to his father, and boards the Cavalry airship.\nElsewhere, Sazh and Vanille are still on the run. The two fugitives wander aimlessly, riding the currents of fate to the doorstep of the City of Dreams...`,
      },
    ],
  },
  'Chapter Eight': {
    name: 'Chapter Eight',
    slug: 'chapter-eight',
    logEntries: [
      {
        name: 'The City of Dreams',
        slug: 'the-city-of-dreams',
        imageMetadata: theCityOfDreams,
        description: `Nautilus, the City of Dreams — the biggest theme park on Cocoon — is crowded with tourists. If Sazh and Vanille can lose themselves in the crowd of people, the army will never find them. Even so, Sazh finds it hard to feel relieved.\nHis son, Dajh, has been made into a l'Cie after wandering into an incident at Euride Gorge. But unlike his father, he is now a servant of the Sanctum fal'Cie and an enemy of Pulse. As he is locked away under the watchful eye of PSICOM, Sazh has no way of knowing how his son is doing.\nIf Dajh's Focus is to destroy the Pulse fal'Cie in the Bodhum Vestige, the he should already have turned into crystal...\nBut what if his Focus was to kill the Pulse l'Cie? Sazh and his companions would have to die to save Dajh from becoming a Cie'th. But one other thing is gnawing at his mind: after telling Vanille about his son's situation, the ever-cheerful girl has completely lost her spark.`,
      },
      {
        name: 'Making the Most of It',
        slug: 'making-the-most-of-it',
        description: `A newsflash is broadcast throughout Nautilus.\nDuring the scenes of combat shown from Palumpolum, Vanille catches a glimpse of Fang. Although it's the first she's seen of her friend since they were separated at Euride Gorge, Vanille finds it hard to give into her joy. Not after what Sazh has said about his son.\nDajh is now a Sanctum l'Cie — a sworn enemy of his father. And she is directly responsible.\nIf Fang and Vanille hadn't attacked the fal'Cie at the energy plant, the creature would never have chosen the nearby Dajh as a l'Cie. The young woman is overwhelmed by guilt.\nIgnorant of Vanille's involvement, Sazh attempts to cheer her up, but his misplaced kindness only makes her feel worse.\nThe parade is about to begin. For now, she will lose herself in its dream, knowing that when it is over, the suffering she has been running from will finally catch up with her.`,
      },
      {
        name: 'Eidolons on Parade',
        slug: 'eidolons-on-parade',
        description: `The Pompa Sancta parade is a spectacle of light and sound that commemorates the war between Cocoon and Pulse.\nAn embodiment of evil, the Pulse l'Cie appears with plans for the total destruction of Cocoon. Hard-pressed by a Sanctum l'Cie, the lowerworld servant takes the form of an infernal beast — a shape meant to resemble the monstrous Ragnarok.\nThe final battle ensues, and the Pulse l'Cie is defeated. It could almost be a foreshadowing of how events may truly unfold...\nWhile other onlookers are transported by a dream of the past, Vanille is yanked into the present by a nightmarish vision of the future. The two l'Cie hurry away in the direction of Nautilus Park.`,
      },
      {
        name: 'No Place Left to Run',
        slug: 'no-place-left-to-run',
        description: `Tired of fleeing with no hope in sight, Sazh quietly says his good-byes to Vanille.\nHe intends to give himself up to the army and beg PSICOM to let him talk to his son. Even if it ends in his execution, it will all be worth it if he can see Dajh one more time and tell him about his encounter with the Nautilus Park chocobos.\nNot willing to let Sazh just give up and die, Vanille tries to talk him out of it. Revenge is her best bet.\nIf she reveals the identity of the culprit behind the Euride Gorge incident that sealed the fate of both father and son, then maybe Sazh will have something to live for.\nThe culprit, of course, is Vanille herself. But how to explain...? As the young woman searches for the right words, sniper bullets bite into the ground around them.\nSazh covers Vanille as they run for the exit.\nIt's all fine if he gets captured by the army, but he has to help Vanille escape.`,
      },
      {
        name: 'The Euride Incident',
        slug: 'the-euride-incident',
        description: `Upon becoming a Sanctum l'Cie, Dajh gained the ability to sense the presence of Pulse beings. With the help of his powers, the fal'Cie that had slumbered for centuries in Bodhum was subsequently discovered on the night of the fireworks display.\nSince that time, no one has been able to work out what Dajh's Focus actually is, but now it reveals itself in the cruelest manner possible. He uses his sensory ability to track down the fugitive l'Cie—and turns to crystal the instant he embraces his father. It seems the boy's task was to capture the servants of the lowerworld fal'Cie.\nAs Sazh collapses in shock and despair, Colonel Nabaat, the PSICOM officer supervising Dajh, appears before him. With sadistic glee, his captor at last reveals the truth to the distraught Sazh: that one of the people responsible for his son becoming a l'Cie has been at his side all along.\nVanille flees and Sazh gives chase.\nColonel Nabaat does nothing to stop them. Just think of the data they could collect by watching l'Cie fight each other...`,
      },
      {
        name: 'Sugar and Rainbows',
        slug: 'sugar-and-rainbows',
        description: `Sazh loses his will to go on.\nWith his beloved son transformed into crystal, he has nothing left to live for. He curses Vanille for her part in the tragedy, but killing her won't bring Dajh back.\nSazh's brand suddenly glows with burning intensity, and the Eidolon Brynhildr appears before the despairing father. He doesn't even try to run. Maybe death is the easiest path.\nBut then Vanille puts herself between them.\nSazh may despise her for what she's done, but she can't let him die. Once the Eidolon is defeated, Sazh turns his gun on Vanille. Unable to shoot the young woman, he then turns the gun on himself...\nSoon after, Vanille becomes a prisoner of PSICOM. She faces transportation to Eden and public execution—the Sanctum's chosen doom for Pulse l'Cie.\nWatching the news broadcast onboard the Lindblum, the Cavalry's flagship, Lightning and the other l'Cie learn of the impending execution...`,
      },
    ],
  },
  'Chapter Nine': {
    name: 'Chapter Nine',
    slug: 'chapter-nine',
    logEntries: [
      {
        name: 'The Sanctum Skyfleet',
        slug: 'the-sanctum-skyfleet',
        imageMetadata: theSanctumSkyfleet,
        description: `The Sanctum plans to transport its l'Cie prisoners to Eden, then carry out their execution before a public audience.\nBrigadier General Raines, the Cavalry commander, suggests that by showing the deaths of the Pulse 'monsters,' the Sanctum fal'Cie hope to quell rising panic and reaffirm their dominion over society.\nLightning and the others can't stand by and let their companions be sacrifice to ensure fal'Cie subjugation.\nDeciding to mount a rescue, they plan to use a PSICOM craft to slip aboard the Palamecia, flagship of the Sanctum Skyfleet and prison vessel for the captured l'Cie.\nGalenth Dysley, Primarch and representative of the people, is also on board. His presence almost certainly signifies a trap, but what other choice do they have?`,
      },
      {
        name: 'The Palamecia',
        slug: 'the-palamecia',
        description: `The ease with which the l'Cie slip aboard the Palamecia is, as they had anticipated, simply a part of the plan to lure them into a trap.\nThey make it onto the Skyfleet flagship with the help of the Cavalry, only to be greeted by a squad of PSICOM soldiers as soon as their feet hit the deck.\nThe l'Cie do not back down.\nThis is more than just a rescue attempt—it is a battle that could affect the future of Cocoon.\nThe Primarch heads the forces aboard the Palamecia. If they can capture Dysley and force him to reveal the fal'Cie's schemes, it may be enough to liberate Cocoon from the Sanctum's tyranny and free the hearts and minds of her people.\nIf they can prove how the government has manipulated its citizens into hating Pulse, and change the way people feel, then maybe the l'Cie can find a place in Cocoon's society—and some hope for the future.`,
      },
      {
        name: 'Time to Split',
        slug: 'time-to-split',
        description: `Despite being driven to the brink of suicide by the sight of his son turning into crystal, Sazh is still alive. Having been captured by Colonel Nabaat in Nautilus, he and Vanille are now on their way to Eden to be executed.\nThe only reason they still live is so they can be murdered in front of an audience.\nWhen Sazh learned that Vanille was the one responsible for his grief, he was consumed with rage. Now, he listens calmly to her tale:\nOnce a l'Cie who fought in the war against Cocoon, Vanille spent centuries in crystal stasis.\nWhen she finally awoke, she found that her companion, Fang, had lost all memory of their previous Focus. Afraid that their new charge would culminate in another horrific battle, Vanille chose to feign memory loss in an attempt to flee from her destiny—a decision which has led to untold tragedy.\nSomewhat ironically, hearing Vanille's melancholy tale sparks a flicker of hope in Sazh. If Vanille can emerge from crystal stasis, then maybe Dajh can too.\nStirred from his despondency by this thought, Sazh helps Vanille to overpower the cell guards and the pair begin their escape.\nBut this time, they're not running away from their fate—they're taking charge of it.\nMeanwhile, elsewhere on the ship, the other l'Cie battle through waves of enemy soldiers in an attempt to rescue their friends.`,
      },
      {
        name: 'Luck Be a Lady',
        slug: 'luck-be-a-lady',
        description: `Colonel Jihl Nabaat is growing frantic.\nAll her carefully laid plans and contingencies are crumbling around her as the seemingly unstoppable l'Cie rampage through the ship. To make matters worse, the airship's main reactor has suddenly shut down. Jihl has yet to grasp what is behind the loss of power...\nSazh and Vanille are able to retrieve their equipment soon after escaping confinement. At the same time, their companions make good progress as routes open up across the ship. And the sudden engine failure has quieted the wind howling across the deck.\nAs if guided by fate, the l'Cie are reunited—and their success gives them renewed vigor to attempt the impossible.\nAnd now, at last, they know what they have to do. They will topple the Sanctum, overturn fal'Cie rule, and put the fate of Cocoon in the hands of the people.\nIf they can just make it to the bridge of the Palamecia, they'll show the Primarch what l'Cie are really capable of...`,
      },
      {
        name: 'A Focus Revealed',
        slug: 'a-focus-revealed',
        description: `To the amazement of the l'Cie, the Primarch reveals himself to be a fal'Cie whose true name is Barthandelus. Showing nothing but contempt for his human tools, he proceeds to casually slaughter Colonel Nabaat and her subordinates.\nBarthandelus then shrugs off the l'Cie's attacks, and, with mocking laughter, declares his intention to 'enlighten' them.\nIn order to fulfill the Focus given to them by the Pulse fal'Cie, he states, one of the l'Cie must become Ragnarok, and bring about the end of Cocoon.\nSerah's task was simply to assemble the tools to achieve this end—to bring Snow and the others into contact with the lowerworld being. Her wish that they protect Cocoon was just that—a wish. It had nothing to do with her, or their Focus.\nConfounded by the naked truth, the dumbstruck l'Cie flee the plummeting Palamecia on an airship provided by Barthandelus. Their craft is guided by an unseen power that protects them from Colonel Rosch's onslaught and flies them towards the 'reality' hidden beneath the capital of Cocoon...`,
      },
    ],
  },
  'Chapter Ten': {
    name: 'Chapter Ten',
    slug: 'chapter-ten',
    logEntries: [
      {
        name: "What Fal'Cie Want",
        slug: 'what-falcie-want',
        imageMetadata: whatFalcieWant,
        description: `Shortly after their reunion, the l'Cie's newfound conviction is shaken by the fal'Cie masquerading as a human Primarch. If what Barthandelus says is true, then their Focus really is the destruction of Cocoon.\nOne of them must become the beast from their vision, and doom the floating world to annihilation by killing the entity that keeps it aloft—the being known as Orphan.\nBut does Barthandelus desire the destruction of his own world? Why else would he explain their Focus in such detail?\nThe l'Cie cannot fathom his true intent, but there is no denying that a power beyond their understanding prevented their demise. Their airship flew with a mind of its own, evading Rosch's attacks, and bringing them to this place—a sprawling relic of Pulse architecture nestled right beneath Eden, the capital city of Cocoon.\nEach of them feels lost and confused, but Snow, in particular, seems to have been hit hard.\nBelieving Serah's wish to be his Focus is what kept him moving forward all this time. Now that he has learned that she, too, was an enemy of Cocoon, the very foundation of his belief has fallen into ruin...`,
      },
      {
        name: 'The Power Within',
        slug: 'the-power-within',
        description: `Fang and Vanille remember a legend from their homeland—a legend about the Arks. Arks are supposedly huge armories filled with living weapons, their occupants kept in stasis for the day war comes to Gran Pulse.\nBut why is one of them on Cocoon?\nIt was probably transported in the same manner as the Vestige in Bodhum, but if it became known that such a facility existed so close to Eden, even the massed ranks of the entire Sanctum army would be powerless to stem the resulting tide of panic.\nCould it be that the government has been kept ignorant of the Ark's existence in the event that such a crisis be required?\nThe Arks are also known as training grounds for l'Cie.\nAs their brands burn with the awakening of new powers, the companions begin to understand Barthandelus's intention in sending them to this place. The fal'Cie posing as the Primarch really does wish the l'Cie to complete their Focus and bring an end to Cocoon. Why else give them this opportunity to hone their skills?`,
      },
      {
        name: 'The Dreams of Man',
        slug: 'the-dreams-of-man',
        description: `While exploring the Ark, the l'Cie meet Cid Raines, who reveals the horrendous truth of the fal'Cie's agenda:\nThe divinity responsible for creating both fal'Cie and humans—known only as the 'Maker'—departed long ago, leaving the world to fall into ruin. To save it, the Maker must return, but to call back the Maker, millions of lives—no less than the entire population of Cocoon—must be sacrificed.\nThus the Sanctum fal'Cie carefully nurture the people within their floating shell in preparation for this bloody tribute.\nYet, unable to unmake that which they themselves have made, the fal'Cie have long sought suitable tools to carry out Cocoon's destruction. The Pulse l'Cie, in short, have been surreptitiously watched and protected so that they might gain the strength necessary to complete their terrible Focus...\nRaines, the bearer of this awful truth, reveals himself to be a l'Cie under the control of Barthandelus.\nSo far, he has guided Lightning and her friends as his Focus required, but now he chooses to exercise his final shred of free will in an act of rebellion against the fal'Cie—if he can kill the Pulse l'Cie, then Cocoon will escape destruction.\nHis last wish as a human is to fight for the survival of his world. Even in defeat, he turns to crystal, and gains his eternal reward.`,
      },
      {
        name: 'On Wings of Misery',
        slug: 'on-wings-of-misery',
        description: `Seeing Raines turn to crystal, not as a consequence of completing his Focus as a l'Cie, but from fulfilling his wish as a human, has lifted Snow out of his uncharacteristic despair.\nIt seems that it doesn't matter what his Focus is. All he needs to do is remember Serah's words, and fight to protect Cocoon just as he originally intended. And ultimately, if ignoring his task were to turn him into a Cie'th, wouldn't that still be better than ignoring his fiancée's wish and destroying the world?\nSnow decides to spend whatever time he has left in a way that would make Serah proud.\nThough the others warm to his idea, Fang stands apart. She'll never let herself, let alone her friends, turn Cie'th. Even if it means tearing Cocoon out of the sky, she'll complete their Focus to save them from that fate.\nHer spirit in turmoil, Fang feels her inert brand blaze to life, and looks on in stunned amazement as the Eidolon Bahamut is summoned from the skies.\nEidolons 'save' l'Cie who waver in their conviction by ending their indecision with death. Realizing that Bahamut is a danger to all of them, Fang is forced to rethink her path.\nUnable to stand by and see her friends hurt, she helps them to defeat the Eidolon and finds a new road has opened up before them.`,
      },
      {
        name: 'Terra Incognita',
        slug: 'terra-incognita',
        description: `The fal'Cie hope to restore their world with the help of the Maker, but calling back the lost divinity requires the energy generated by the deaths of millions of people. Now, the beings who built Cocoon as a place to nurture their 'tribute' seek to manipulate Pulse l'Cie in the final stages of their grand scheme.\nLightning and her friends have been monitored and assisted by the fal'Cie from the very beginning. Even their clashes with the military have been carefully orchestrated to ensure their survival.\nCountless Sanctum soldiers, unaware of the callous fal'Cie's true objectives, have been thrown into the jaws of the l'Cie in an effort to nurture ever-stronger beasts.\nKnowing this, there is no clear path for the l'Cie to take. Ignore their Focus and become Cie'th, or give in to the fal'Cie and condemn millions to death.\nTheir only hope is to trust their own strength of will. They have to follow Raines's noble example—and Serah's parting wish—by going through with their plan to protect Cocoon.\nMore determined than ever after the battle with Bahamut, the l'Cie begin their journey to the untamed world of Gran Pulse.`,
      },
    ],
  },
  'Chapter Eleven': {
    name: 'Chapter Eleven',
    slug: 'chapter-eleven',
    logEntries: [
      {
        name: 'A Fruitless Search',
        slug: 'a-fruitless-search',
        imageMetadata: aFruitlessSearch,
        description: `The l'Cie scour Gran Pulse for some way to overcome their Focus, but even after days of searching the bleak terrain, they discover nothing but crumbling ruins and vicious wildlife. No matter how far they range, there is not another soul to be found.\nDid the people of Gran Pulse fall victim to the brutal struggle for survival that dominates every aspect of this unforgiving world? And is the rebirth of this same desolate land the purpose behind the Cocoon fal'Cie's plan to slaughter millions of people?\nAs time passes and their fruitless expedition drags on, the l'Cie slowly succumb to frustration and despair—their most dangerous enemies.\nEmotional extremes can accelerate the progress of a l'Cie brand. If a brand evolves to the final stage, it triggers the transformation into a Cie'th.\nThey are all reminded of how little time remains when Hope's brand suddenly advances another step.`,
      },
      {
        name: "A Man's Hope Is His Castle",
        slug: 'a-mans-hope-is-his-castle',
        description: `Eidolons come to grant a despairing l'Cie the death they crave—or so it is believed. But when the Eidolon Alexander is summoned by Hope's confused anguish, Lightning sees a different reason behind the entity's appearance.\nShe comes to believe that the Eidolons appear in order to prevent l'Cie from giving up on themselves. When l'Cie consumed by despair or rage, are close to losing their path, an Eidolon appears and gives them a life-or-death trial to overcome—thereby forcing them to rethink their decision to surrender.\nThrough his battle with Alexander, Hope renews his determination to survive and rejoins the others as they set off to the north. That way lies the village of Oerba.\nIf they can reach Fang and Vanille's hometown, then maybe they can learn the true story behind the War of Transgression, and find a clue to help them break the shackles of their Focus.\nThe l'Cie continue their journey, each playing their part to keep this tiny flame of hope alive.`,
      },
      {
        name: 'Helping Hands',
        slug: 'helping-hands',
        description: `If they choose not to kill Orphan and bring about Cocoon's destruction, Lightning and her companions will transform into Cie'th. But if they do carry out their Focus, their actions will doom the lives of millions of people.\nIn search of a way to escape this impossible choice, the l'Cie travel towards the village of Oerba in the north of Gran Pulse.\nOn the endless plains they see beasts and birds aplenty, but not a single person. Could the ruin of this world's civilization have been caused by the War of Transgression, centuries before?\nHere, where it all began, Fang finally uncovers the truth that Vanille has so desperately tried to conceal. The l'Cie who became Ragnarok and attacked Cocoon during the war was not her cheerful friend but Fang herself. Not wanting Fang to bear the guilt of the beast's bloody rampage, Vanille chose to take the blame in her stead.\nAs if to reprimand her for twisting the truth, the Eidolon Hecatoncheir rises from the earth even as the two friends argue. No matter how painful it may be, l'Cie cannot run from reality forever.`,
      },
      {
        name: 'Speaking with Serah',
        slug: 'speaking-with-serah',
        description: `When Vanille awoke from crystal stasis, she sought to deny her Focus—Cocoon's doom—by lying that she, like Fang, had lost her memory. But instead of preventing a catastrophe, she only spurred her friend into reckless action.\nDesperate to prevent Vanille from becoming a Cie'th, Fang suggested they attack a Sanctum fal'Cie to kick-start their memories, and the tragic incident at Euride Gorge was the result.\nSeparated from her friend after their escape, Vanille drifted aimlessly until she happened upon Serah.\nThough Snow's fiancée thought the meeting was their first, Vanille knew exactly who Serah was. She was the girl who had wandered into the Bodhum Vestige only to be turned into a l'Cie—a replacement for the Gran Pulsians who had seemingly abandoned their Focus.\nFeeling crushed by guilt and cruel fate, Vanille would have given up there and then had it not been for Serah's advice that if things seem too much to deal with, you should face them later. If you can just survive, there's always hope that you can overcome your problems. That hope is what has kept Vanille going until now.\nWhen she describes this touching interlude to Snow, the kind-hearted hero renews his promise to fulfill his beloved Serah's wish. And Lightning, her anger now a distant memory, means to help him to do it.`,
      },
      {
        name: 'Dust to Dust',
        slug: 'dust-to-dust',
        description: `The home that Fang and Vanille remember is a beautiful place surrounded by flowers and nature.\nBut the Oerba that greets them after their long, perilous journey is a wasteland, covered in a layer of fine crystal dust. The hope they had been seeking vanishes like a desert mirage.\nThough they have turned their backs on their genocidal Focus, the l'Cie's brands have not stopped advancing, and each passing second brings them closer to the moment of monstrous transformation.\nOerba, their last refuge of hope, is a hollow shell, devoid of life.\nBut they must continue on. They must follow the road to its inevitable conclusion.`,
      },
      {
        name: 'Their Own Worst Enemy',
        slug: 'their-own-worst-enemy',
        description: `Callous and calculating, the fal'Cie manipulate their human tools via their emotions.\nTaking Serah's form to catch the l'Cie off-balance, Barthandelus predicts the imminent destruction of Cocoon.\nHe has revived Raines, now a compliant puppet, and instated him as the Sanctum's new Primarch - a ploy designed to provoke the Cavalry revolutionaries into overthrowing the government in outrage at their former leader's betrayal.\nThe gloating fal'Cie also means to play on the Pulse-phobia of the populace to turn neighbor against neighbor, transforming Cocoon's streets into a bloodbath.\nWorse, Barthandelus then describes how the Cavalry, unnoticed amid the chaos, will infiltrate Eden and fall upon Orphan, not understanding their actions will bring their world crashing down.\nTo prevent this disaster, the l'Cie must return to Cocoon - but isn't that what Barthandelus wanted all along?\nThe fal'Cie could be manipulating them again - attempting to draw them into a situation where they have no choice but to become Ragnarok and slay Orphan.\nLeaving them yet another airship, Barthandelus vanishes once again. The choice to return to Cocoon and play a part in her destiny lies firmly in the hands of the l'Cie.`,
      },
      {
        name: 'The Road Home',
        slug: 'the-road-home',
        description: `Fang and Vanille visit their home in Oerba for the first time in centuries, seeking a way to free themselves from their l'Cie curse. But what they find is a broken and empty shell of a town, half-buried in a sea of crystal dust.\nMeanwhile, Cocoon, the home of their fellow l'Cie, is poised to join the village in oblivion. There, the people stand ready to slaughter each other, their minds twisted by fal'Cie illusions.\nThe l'Cie have no choice but to return and prevent the impending devastation. Even if every man, woman and child on the floating world regards them as mortal enemies, it is still their home.\nBut the shackles of the fal'Cie bind their fates...\nWith their Focus haunting their every step, the very act of setting foot on Cocoon might invite disaster. Yet return they must. There is a war to stop, and fal'Cie rule to overthrow.\nIn this darkest hour, they must hold fast to hope if they are to protect Cocoon. The time for appealing to long-departed deities, lost loved ones, or lights in the sky is past.\nAs the l'Cie fly towards their final destiny, they make the only choice that remains to them - a promise to be true to themselves.`,
      },
    ],
  },
  'Chapter Twelve': {
    name: 'Chapter Twelve',
    slug: 'chapter-twelve',
    logEntries: [
      {
        name: 'Start Your Engines',
        slug: 'start-your-engines',
        imageMetadata: startYourEngines,
        description: `Lightning and her friends return to Cocoon only to be greeted by the sudden appearance of an army of mechanical monsters and gigantic beasts. The fal'Cie have activated the Ark hidden beneath the capital, releasing an army of Pulsian terrors into the city.\nWith the army in panicked disarray, the Cavalry seizes its chance. Captain Rygdea leads his troops in an assault on the Sanctum offices, and confronts the new Primarch - his former superior and comrade in arms, Cid Raines.\nRaines calmly welcomes his own demise. Revived to serve as Barthandelus's pawn, he nevertheless retains a sliver of the will he possessed as a human. And it is humans who must decide Cocoon's future - not fal'Cie slaves.\nThe Cavalry presses on with its plans to slay Orphan, unaware that this effort to save the world will only lead to total destruction. Barthandelus has twisted the Cavalry's desire for freedom to meet his own design.\nThe l'Cie must stop the Cavalry from reaching the heart of Eden before it is too late.`,
      },
      {
        name: 'Eden Under Siege',
        slug: 'eden-under-siege',
        description: `The creatures once held in stasis within the Ark are now rampaging through the streets of Eden, but this merely marks the beginning of Cocoon's collapse into chaos. Once news of the 'Pulse invasion' spreads to a populace already in the grip of panic, the people will be whipped into a frenzy of terror - and the ensuing orgy of violence will tear society apart.\nYet Cocoon may not survive long enough for that to happen. Even now, the members of the Cavalry charge into the heart of the capital, unwittingly seeking to extinguish the source of power that keeps Cocoon afloat: Orphan. Their idealism is being used against them.\nTheir quest for liberation is just another cog in Barthandelus's scheme to call back the Maker. He will see the world shattered, and offer the lives of its inhabitants in sacrifice.\nFearing they may already be too late, the l'Cie rush after the Cavalry, through a city engulfed in the flames of war.`,
      },
      {
        name: 'A Common Goal',
        slug: 'a-common-goal',
        description: `No human wishes to see the world destroyed. The l'Cie, the Cavalry, and even the solders of the Sanctum army are all fighting to keep Cocoon safe from harm.\nBut despite their common goal, they have been forced into conflict by the machinations of the fal'Cie. It is the great error of these 'higher beings' to view humans as mere tools - yet humans are guilty of a similar crime.\nIndeed, it is men like PSICOM's Colonel Rosch, and their outright refusal to believe l'Cie can be anything but tools, that now prevents an alliance which could save mankind.\nThe l'Cie know that the only way to foil Barthandelus's plan is to protect Orphan. Yet both the Cavalry and Colonel Rosch threaten to thwart them, firmly believing that they alone represent Cocoon's only hope of salvation. If Lightning and the others cannot convince them of the truth, is bloodshed then the only option?\nSuddenly, the NORA crew arrive to lend a hand, and Snow is relieved to find that, in spite of his transformation into a l'Cie, his old friends treat him just as they always had. Their acceptance as much as their assistance gives the l'Cie new hope.\nThere is still a chance to end this conflict, and save the people from themselves.`,
      },
      {
        name: 'Misjudged Benevolence',
        slug: 'misjudged-benevolence',
        description: `When the blinding flash of light fades, where there were soldiers now stand mindless Cie'th. With no Focus to complete, their souls are stripped from them at the instant of their transformation. Thus do the fal'Cie dispose of humans whose usefulness has ended.\nRosch, the sole survivor, defends the Sanctum army and their obedience to fal'Cie law. Even though he harbors doubts as to the fal'Cie's true intentions, the peace and harmony of Cocoon cannot be upheld without them.\nIt is his desire to protect the stability of society that allows him to commit atrocities such as the Purge. The end justifies the means.\nRealizing his error in judgment, the PSICOM director still cannot change what is done. The only remaining path is to live his final moments as he has tried to live his life - in the service of Cocoon.\nThe conflict among the people is coming to an end, but the danger to Cocoon is not over. Not until Barthandelus and his schemes are defeated.`,
      },
    ],
  },
  'Chapter Thirteen': {
    name: 'Chapter Thirteen',
    slug: 'chapter-thirteen',
    logEntries: [
      {
        name: 'The Cradle Will Fall',
        slug: 'the-cradle-will-fall',
        imageMetadata: theCradleWillFall,
        description: `The Cavalry soldiers set on overthrowing fal'Cie rule now wander the halls of the Sanctum as monstrous Cie'th.\nBarthandelus never intended for them to reach Orphan. It was merely a ruse to spur the reluctant l'Cie into action. Though the companions refuse to complete their Focus, he no longer needs to manipulate their minds.\nAll that remains is to crush any hope they have for their future. When that hope turns to despair, one of them, consumed by anger and regret, will transform into Ragnarok.\nAnd the beast - an unstoppable incarnation of wrath - will slay Orphan. Cocoon will shatter, and the energy released by the deaths of millions will summon the Maker.\nA new dawn approaches...\nIt is for this day that Barthandelus built Cocoon, tended to its people, and watched over the servants of the Pulse fal'Cie. He gives one final order to the fal'Cie Eden: guide the steps of the cursed l'Cie. Bring them to the one who dreams of death.\nBring them to Orphan's Cradle.`,
      },
      {
        name: 'Two Worlds, One Bridge',
        slug: 'two-worlds-one-bridge',
        description: `By defeating Orphan, the l'Cie also disable Cocoon's power source. With its gravity-control system destroyed, Cocoon begins to fall towards the world below - Gran Pulse.\nFang and Vanille join their efforts and unleash their inner power to create a massive crystal pillar deep-rooted in Gran Pulse's ground to support the whole of Cocoon. Though encased in their own creation, their sacrifice is not in vain.\nCocoon is saved, and those turned to crystal are set free - including Serah and Dajh.`,
      },
    ],
  },
} as const satisfies Record<string, IChapter>;
