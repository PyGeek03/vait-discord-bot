import { getRandomBoolean, getRandomIntInclusive } from '../../utils';

const getRandomThing = (things: string[]) =>
  things[getRandomIntInclusive(0, things.length)];

const verbs = [
  'artless',
  'bawdy',
  'beslubbering',
  'bootless',
  'churlish',
  'cockered',
  'clouted',
  'craven',
  'currish',
  'dankish',
  'dissembling',
  'droning',
  'errant',
  'fawning',
  'fobbing',
  'froward',
  'frothy',
  'gleeking',
  'goatish',
  'gorbellied',
  'impertinent',
  'infectious',
  'jarring',
  'loggerheaded',
  'lumpish',
  'mammering',
  'mangled',
  'mewling',
  'paunchy',
  'pribbling',
  'puking',
  'puny',
  'qualling',
  'rank',
  'reeky',
  'roguish',
  'ruttish',
  'saucy',
  'spleeny',
  'spongy',
  'surly',
  'tottering',
  'unmuzzled',
  'vain',
  'venomed',
  'villainous',
  'warped',
  'wayward',
  'weedy',
  'yeasty',
];

const adjectives = [
  'base-court',
  'bat-fowling',
  'beef-witted',
  'beetle-headed',
  'boil-brained',
  'clapper-clawed',
  'clay-brained',
  'common-kissing',
  'crook-pated',
  'dismal-dreaming',
  'dizzy-eyed',
  'doghearted',
  'dread-bolted',
  'earth-vexing',
  'elf-skinned',
  'fat-kidneyed',
  'fen-sucked',
  'flap-mouthed',
  'fly-bitten',
  'folly-fallen',
  'fool-born',
  'full-gorged',
  'guts-griping',
  'half-faced',
  'hasty-witted',
  'hedge-born',
  'hell-hated',
  'idle-headed',
  'ill-breeding',
  'ill-nurtured',
  'knotty-pated',
  'milk-livered',
  'motley-minded',
  'onion-eyed',
  'plume-plucked',
  'pottle-deep',
  'pox-marked',
  'reeling-ripe',
  'rough-hewn',
  'rude-growing',
  'rump-fed',
  'shard-borne',
  'sheep-biting',
  'spur-galled',
  'swag-bellied',
  'tardy-gaited',
  'tickle-brained',
  'toad-spotted',
  'unchin-snouted',
  'weather-bitten',
];

const nouns = [
  'apple-john',
  'baggage',
  'barnacle',
  'bladder',
  'boar-pig',
  'bugbear',
  'bum-bailey',
  'canker-blossom',
  'clack-dish',
  'clotpole',
  'coxcomb',
  'codpiece',
  'death-token',
  'dewberry',
  'flap-dragon',
  'flax-wench',
  'flirt-gill',
  'foot-licker',
  'fustilarian',
  'giglet',
  'gudgeon',
  'haggard',
  'harpy',
  'hedge-pig',
  'horn-beast',
  'hugger-mugger',
  'joithead',
  'lewdster',
  'lout',
  'maggot-pie',
  'malt-worm',
  'mammet',
  'measle',
  'minnow',
  'miscreant',
  'moldwarp',
  'mumble-news',
  'nut-hook',
  'pigeon-egg',
  'pignut',
  'puttock',
  'pumpion',
  'ratsbane',
  'scut',
  'skainsmate',
  'strumpet',
  'varlot',
  'vassal',
  'whey-face',
  'wagtail',
];

export const randomCreate = () => {
  const verb = getRandomThing(verbs);
  const adj = getRandomThing(adjectives);
  const noun = getRandomThing(nouns);
  return `Thou ${verb} ${adj} ${noun}.`;
};

export const quotes = [
  'A most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality.',
  'Away, you starvelling, you elf-skin, you dried neat’s-tongue, bull’s-pizzle, you stock-fish!',
  'Away, you three-inch fool!',
  'Come, come, you froward and unable worms!',
  'Go, prick thy face, and over-red thy fear, Thou lily-liver’d boy.',
  'His wit’s as thick as a Tewkesbury mustard.',
  'I am pigeon-liver’d and lack gall.',
  'I am sick when I do look on thee',
  'I must tell you friendly in your ear, sell when you can, you are not for all markets.',
  'If thou wilt needs marry, marry a fool; for wise men know well enough what monsters you make of them.',
  'I’ll beat thee, but I would infect my hands.',
  'I scorn you, scurvy companion.',
  'Methink’st thou art a general offence and every man should beat thee.',
  'More of your conversation would infect my brain.',
  'My wife’s a hobby horse!',
  'Peace, ye fat guts!',
  'Aroint thee: go away, rump-fed runion: slut',
  'The rankest compound of villainous smell that ever offended nostril',
  'The tartness of his face sours ripe grapes.',
  'There’s no more faith in thee than in a stewed prune.',
  'Thine forward voice, now, is to speak well of thine friend; thine backward voice is to utter foul speeches and to detract.',
  'That trunk of humours, that bolting-hutch of beastliness, that swollen parcel of dropsies, that huge bombard of sack, that stuffed cloak-bag of guts, that roasted Manningtree ox with pudding in his belly, that reverend vice, that grey Iniquity, that father ruffian, that vanity in years?',
  'Thine face is not worth sunburning.',
  'This woman’s an easy glove, my lord, she goes off and on at pleasure.',
  'Thou art a boil, a plague sore',
  'Was the Duke a flesh-monger, a fool and a coward?',
  'Thou art as fat as butter.',
  'Here is the babe, as loathsome as a toad.',
  'Like the toad; ugly and venomous.',
  'Thou art unfit for any place but hell.',
  'Thou cream faced loon',
  'Thou clay-brained guts, thou knotty-pated fool, thou whoreson obscene greasy tallow-catch!',
  'Thou damned and luxurious mountain goat.',
  'Thou elvish-mark’d, abortive, rooting hog!',
  'Thou leathern-jerkin, crystal-button, knot-pated, agatering, puke-stocking, caddis-garter, smooth-tongue, Spanish pouch!',
  'Thou lump of foul deformity',
  'That poisonous bunch-back’d toad!',
  'Thou sodden-witted lord! Thou hast no more brain than I have in mine elbows',
  'Thou subtle, perjur’d, false, disloyal man!',
  'Thou whoreson zed , thou unnecessary letter!',
  'Thy sin’s not accidental, but a trade.',
  'Thy tongue outvenoms all the worms of Nile.',
  'Would thou wert clean enough to spit upon',
  'Would thou wouldst burst!',
  'You poor, base, rascally, cheating lack-linen mate!',
  'You are as a candle, the better burnt out.',
  'You scullion! You rampallian! You fustilarian! I’ll tickle your catastrophe!',
  'You starvelling, you eel-skin, you dried neat’s-tongue, you bull’s-pizzle, you stock-fish–O for breath to utter what is like thee!-you tailor’s-yard, you sheath, you bow-case, you vile standing tuck!',
  'Your brain is as dry as the remainder biscuit after voyage.',
  'Virginity breeds mites, much like a cheese.',
  'Villain, I have done thy mother',
  'Heaven truly knows that thou art false as hell',
  'Out of my sight! Thou dost infect mine eyes.',
  'No longer from head to foot than from hip to hip, she is spherical, like a globe; I could find countries in her.',
  'You have such a February face, So full of frost, of storm, and cloudiness.',
];

// Randomly pick insult from 2 sources
export const randomInsultGenerator = () =>
  getRandomBoolean() ? randomCreate() : getRandomThing(quotes);
