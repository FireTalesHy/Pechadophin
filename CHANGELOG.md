# Changelog

🇫🇷 [Lire en français](CHANGELOG.fr.md)

All notable changes to **Pechadophin** (formerly Canne & Dauphins) (`pechadofin.html`).

## [V0.6] - 2026-11-13 · CASE UPDATE

### Added
- **Crate system (case opening)**: new **chest button** on the home screen. It is now the **only way to get skins** (except Clown and RNG∞).
  - **2 crates**: the **Hero Crate** (600 gold) and the **Villain Crate** (700 gold), with an animated roulette that scrolls and stops on your prize.
  - Each opening gives **fragments** of a skin (x1 70%, x2 25%, x3 5%): you need **6** to unlock a skin. The more expensive a skin was originally, the rarer it is.
  - A skin you already own is converted into **gold** (**duplicate**).
  - Each crate has a collapsible **DETAILS** menu listing its skins and your fragment progress.
  - Skins you already owned **stay yours**.
- **6 new skins pitting good against evil**: **Angel**, **Paladin** and **Fairy** (Hero Crate) versus **Demon**, **Necromancer** and **Vampire** (Villain Crate). The game now has **36 skins**.
- **Premium skin Épouvofodille** (scarecrow with glowing eyes, **12 fragments**, found in both crates with a 15% chance per opening):
  - on every kill, a **crow** lands on the corpse; **1 in 50** is **golden** and brings a **bonus life** (or 100 gold if your lives are already full);
  - when it takes a hit, **hay** bursts out of the character.
- **The Scythe** (12 red souls): a large scythe (brown handle, green gradient blade) held vertically, with a **4-hit combo**: 2 normal hits, the **3rd pulls the enemy toward you** (purple vortex, spectral chains), the **4th knocks it back** (red and black crescent shockwave, impact star).
  - Skill tree: **Damage**, **Reach**, **Attack speed** and **Poison** (4 s, one tick per second).
  - Two new missions: obtain the scythe, and max out one of its branches.
- **RNG∞ skin**: a **golden laser** shoots into the sky when you die, and every kill has a **1 in 67 chance** of triggering a golden laser that pierces everything in its path (40 damage).
- **Save linked to your Google account**: the cloud save now turns on **automatically at sign-in** (a single permission to accept). On a fresh device, your account's progress loads right away.

### Changed
- **Harpoon: damage over time.** A harpooned enemy bleeds along the whole trip back to you, then takes a final hit.
- **Harpoon + Clown skin**: the harpoon becomes a **clown pistol** (red and yellow striped barrel, BANG flag) that fires a **big white fist on a red spring**.
- **Clown skin**: it now costs **60 red souls** (instead of 1,000,000 gold).
- **Shop**: skins are sorted into **UNLOCKED SKINS** and **LOCKED SKINS** (collapsible). Crate skin cards show their fragment progress.
- Home screen banner: **CASE UPDATE**.

## [V0.5.5] - 2026-11-11 · SPEEDRUN UPDATE

### Added
- **SPEEDRUN mode** (unlocked after your first rebirth, in the MODE menu): beat **King Cacamille 2** as fast as you can.
  - At launch you pick one of **4** weapons: infernal trident, tarot deck, daggers or tentacles. It is **already fully upgraded** (2 branches: damage + fire rate for the trident, damage + Silver Chariot for the tarot, damage + dash length for the daggers, damage + reach for the tentacles).
  - **Timer** at the top of the screen, with the attempt number. You start from the very beginning, **with no checkpoints, shop or merchants**: if you die, **everything restarts from the beginning**.
  - **10 hearts**: 5 golden hearts on top of the 5 red ones. Golden ones go first, red ones are the last chance. Healing hearts only restore the red ones.
  - **End menu** after victory: time, player name, skin and weapon, with your best time per weapon (stored locally). Your real save is never touched.
- **Tentacles: boosted jump.** When you jump with the tentacles, three tentacles brace on the ground and propel you (jump height x1.25), with their animation.
- **Clown skin: new tiger gag.** A tiger rushes in, grabs the corpse in its jaws and leaps into the background with it.
- Shop: **animated purple halo**, purple button and purple background for the RNG∞ skin card.

### Changed
- **Clown skin**: the special animation now triggers **every 18 kills** for sure (instead of a 1 in 20 chance).
- **Tentacles: continuous grapple.** Speed builds up progressively, you pass through the anchor point without stopping, and speed is **kept** on arrival and in the air.
- Shop: the category is now called **PREMIUM SKINS** (in French and English).
- Home screen banner: **SPEEDRUN UPDATE**.

## [V0.5] - 2026-11-11

### Added
- **10 fantasy skins**: unicorn, pumpkin, mushroom, disco ball, dragon, alien, ice cream cone, mermaid, **Ghoul** (ragged hood, spectral tentacles) and **Human** (brown hair, white shirt, streetwear style), each with its own effects. The game now has **29 skins**.
- **Fatal tentacle** (Human and Ghoul): on every kill, a 1 in 5 chance that a tentacle bursts from the ground and drags the corpse underground.
- **Tentacles** (10 red souls, misc. weapons): tentacles sprout from your back, skin-style, and whip enemies, a different tentacle on each hit. Their color is the skin's main color (red for the Human). They also work as a grapple, on the ground and on platforms.
  - Skill tree: **Damage**, **Reach**, **Attack speed** and **Multi-tentacle** (up to 3 tentacles per hit).
- **Clown skin** (1,000,000 gold): +50% gold on every kill, a mini animation (confetti and balloon) on each kill, and a 1 in 20 chance of a gag (balloons, kamikaze clown, jack-in-the-box) that carries off the corpse and earns 100 gold.
- **"Premium skins" category** in the shop, separated from normal skins by a line: Clown (light red card, animated RGB halo and buttons) and RNG∞.
- **Banner** for the fantasy skins under the title on the home screen.

### Changed
- **Harpoon**: platforms can now be hooked.
- **Healing**: the heart appears on the player and is picked up instantly.
- **Cloud world**: the pink springs are placed on flat ground, at the real ground height.
- **Missions**: new CLAIM ALL button to collect every reward at once.

## [V0.4.9] - 2026-11-08

### Added
- **Katana** (8 red souls, misc. weapons): a sword that slashes in an arc in front of you. Hits chain into a 3-hit combo: the 3rd is a big slash, wider and far more powerful.
  - Skill tree: **Damage**, **Reach**, **Attack speed** and **Big slash** (3rd-hit damage multiplier, up to x5).
- **Boomerang** (500 gold, misc. weapons): thrown straight ahead, it hurts everything in its path, then returns to you, hitting enemies a second time.
  - Skill tree: **Damage**, **Range**, **Rethrow** and **Multi-boomerang** (up to 3 boomerangs thrown in a fan).
- **Cooldown bar** above the player's head for weapons that take more than a second to be ready again (daggers, boomerang).

## [V0.4.8] - 2026-11-08

### Added
- **Tarot deck skill tree**: the tarot now uses the tree too, with 4 branches (2 active at most, refundable).
  - **Damage**: more damage per card.
  - **Silver Chariot**: more cards thrown in a fan (3 levels).
  - **Star Platinum**: piercing, self-guided stars (3 levels).
  - **Sorcery** (new): each card has a chance to apply a random potion to the enemy hit: burn, freeze, poison or stun. Each level raises the chance (12%, 20%, 28%, 36%, then 50%).
- **New mission**: unlock Sorcery.
- **Interface overhaul**: redesigned buttons, panels and menus, with a **light and a dark theme** that follow your device setting.
- **"SKILL TREE UPDATE" banner** under the title on the home screen.

### Changed
- **Sand castle**: the water bucket now deals fixed damage, no longer depending on the weapon used.
- The kill counter (0/15) for regaining life moves to the bottom left of the screen, with a greyed-out heart in place of the dolphin.

## [V0.4.7] - 2026-11-08

### Added
- **Anarchy: a random boss every 20 screens.** Structured bosses (giant octopus, sand castle, witch, Eskimo) appear in their arena, the others (shark, jellyfish, giant cow, Number 6) burst out in open terrain. Any boss can show up in any biome.
  - Each victory against the same boss makes it a bit tougher (x1.05 HP).
- **Mission rewards**: each mission gives gold or red souls, to claim from the MISSIONS menu. A red dot shows on the tab when a reward is available, and a notification pops up on every completed mission.
- **11 new missions**: witch, Eskimo, King Cacamille 2, cloud dolphin, obtain each weapon (daggers, Number 6, ice scepter, tarot, harpoon), unlock Silver Chariot and Star Platinum, full health, 15 skins, be reborn once, and max out 3 branches.

### Changed
- The mission "Trident: all upgrades maxed" becomes "Max out one branch on a weapon" (any weapon).
- **Rebirth**: bosses give their rewards (souls and gold) again like the first time, and the button unlocks when leaving through the castle window, on every rebirth.
- Every player's gold is halved and completed missions are reset (their rewards can be claimed again).

## [V0.4.5] - 2026-11-08

### Added
- **Cloud world boss: the cloud dolphin**. A huge dolphin flying above the arena, firing cloud balls (volleys of 3, then 5 and a ring of 10 once enraged at 50% health) and summoning regular flying dolphins. 900 HP.
  - Its arena is made of 18 cloud platforms on 4 levels that never change, above a big void.
  - Reward: 3 red souls (first victory) and gold.
- **Weapon skill tree**: upgrades for the rod, trident, daggers, ice scepter and harpoon are now picked in a tree starting from the weapon.
  - 4 branches come out of it (one per upgrade) and only 2 can be active.
  - Each extra level of a branch is a node further down.
  - Upgrades are fully refundable, level by level.
- **Rebirth** (Classic mode): once King Cacamille 2 is beaten, a small button above the shop lets you restart the game from the beginning. Checkpoints are erased, but you keep your weapons, their upgrades, your skins, gold and souls.
- **Harpoon**: new pistol-shaped weapon, buyable with souls (13). It impales enemies to pull them to you, or pulls you to the anchor point on the scenery. Heavy hit on bosses.
  - Four upgrades paid in souls: barbs (damage), cable length, winch and chain.
- New reorganized WEAPONS menu: a row of story weapons (rod, trident, daggers, ice scepter, with two free slots) and a row of misc. weapons.
- Nad l'arnaque joins the testers in the credits.

### Changed
- **Cloud world**: a real sky with no sea or mountains in the background, and even less ground, with 7 to 12-tile gaps.
- All weapon upgrades are reset because of the new tree: everything you had spent (gold and souls) is refunded automatically on your next sign-in.

### Fixed
- Some weapons (like Number 6) could not fire inside the castle.

## [V0.4.0] - 2026-11-06

### Added
- **The ice castle** at the end of the icebox: you enter through the door and climb a 6-floor tower, with platforms, ice spikes, falling stalactites, crumbling platforms, dolphin knights and archers.
- **Boss: King Cacamille 2**, in his chamber at the top. A tall, thin king who throws brown balls in 3s, 5s, then up to 9 once enraged, and summons his knights. You reach him through a door that teleports into his chamber, with two platforms reachable with a normal jump.
- **Tarot deck**: new weapon dropped by the king, firing a card.
  - **Silver Chariot** (500 gold): throws 3 cards in a fan instead of one.
  - **Star Platinum** (1000 gold): piercing star cards, self-guided toward other enemies once a star has hit.
- **The cloud world**: new zone, reached through the king's chamber window, with its checkpoint (Classic mode). Bright sky, cloud ground and platforms, twice as many flying dolphins, big 5 to 9-tile gaps with cloud bridges, many more platforms, and new platform elements:
  - moving clouds (horizontal or vertical);
  - crumbling clouds that give way after a moment;
  - pink springs that launch very high;
  - updrafts.

## [V0.3.9] - 2026-11-02

### Added
- **Swamp final boss: the witch**, in her hut. She throws 3 types of potions (poison, damage, stun). In the second phase, she sends her giant cat onto the field.
- **The icebox**: new zone after the swamps, entirely made of ice, with ice platforms, an igloo for the merchant, ice dolphins (the shooter has blue projectiles) and mini bears.
- **Icebox boss: the Eskimo**, who fires lasers from the ground and slowly fishes with his rod.
- **Ice scepter**: new weapon, left on a pedestal by the Eskimo (doors stay closed until it is picked up). Its ice breath slows enemies and hurts them over time, and ice lasers sometimes burst from the ground.
  - Four upgrades (damage, range, slow, laser frequency) up to level 5, in the WEAPONS menu or at the merchant.
- **Icebox checkpoint** (Classic mode).
- One more secret to find in the swamps.

### Changed
- The Clown skin now costs 10,000 gold.

## [V0.3.5] - 2026-10-16

### Added
- **Secret boss no. 6**: in the swamps, hitting a platform on top of a pillar 6 times plunges the screen into darkness and teleports you to a one-screen secret zone (black background, white outline ground, random digits scrolling below, no way out).
  - The boss is a big winged white 6 that floats and throws slow tridents and volleys of digits. 800 HP, enraged at 50%.
  - Reward: the new weapon **Number 6**, 300 gold and 3 red souls (first victory), then you return to where you left from.
- **Number 6 weapon**: a continuous stream of digits that fall in an arc, like the cow's milk.
- **Swamp checkpoint** (Classic mode).
- **Dagger upgrades**: damage, dash length, jump height (up to x2) and parry (25 to 60% chance).
- **TOP 10 leaderboard** for Anarchy mode, with a nickname chosen at Google sign-in, and a button to submit your score when you beat your record.
- **Joystick size** adjustable in the settings.

### Changed
- Weapons can only be switched in the WEAPONS menu, or at the merchant during a run (new merchant button).
- Smoother menus.
- Multiple tridents removed and no more weapon lock per zone.
- Dagger dash: 1 s cooldown after landing, reduced maximum range.
- Wider swamp pillars, only under platforms above flat ground.
- All best scores reset.

## [V0.3.1] - 2026-10-15

### Added
- **The swamps**: new zone right after the sand castle arena (Classic mode), also drawn at random in Anarchy mode.
  - Dark grass and soil, greenish sky and water, small puddles and mini ruined castle towers.
  - Platforms are the tops of stone towers.
  - New enemies: hopping mini zombies and mini cows that roll at the player (blue and flying dolphins stay).
- **Giant cow**: swamp boss, 600 HP, waiting on a big flat meadow with two flying platforms.
  - It curls into a ball and rolls at the player, or spits an arcing jet of milk that stops when it hits the ground.
  - Enraged at 50% HP. Reward: 150 gold and 2 red souls (first victory only). New related mission.
- **Chests**: brown chests appear at random and give gold.
- **Red chest**: swamps only, it holds a new weapon, the **daggers**.
- **Daggers**: each attack is a dash that hurts everything along its path. With the daggers, you move faster and jump a bit higher.
- **WEAPONS menu** (main menu): one slot per weapon; clicking a weapon opens its full sheet with its upgrades and the button to equip it.
- **Cloud save**: with Google sign-in, progress is saved in a hidden file in the player's Google Drive and restored on another device.
- **Auto-fire**: holding the aim joystick for 1 second makes the game fire by itself.
- **RNG∞ collab**: RNG∞ skin to unlock by having an RNG∞ account with the same Google account (UNLOCK button in the shop), digit draw above the fisherman on every dolphin, and the sequences 13, 67 and 69 give bonus gold. Link to RNG∞ in the settings.

### Changed
- **Pearls removed**: pearls already earned are converted into gold (1 pearl = 50 gold).
- **Skins**: they are now bought with gold (the cheapest costs 100 gold).
- **Privacy page** updated (cloud save and RNG∞ collab).

## [V0.2.12] - 2026-10-15

### Added
- **New name**: the game is now called **Pechadophin**.
- **French / English**: flag button at the top of the menu (it shows the flag of the language you will switch to). The whole game is translated and your choice is remembered.
- **Google sign-in**: account button in the menu to sign in with your Google account (name and photo shown). Nothing is sent to a server: the session stays in the browser.
- **Privacy page** (`privacy.html`).

### Changed
- **Sand castle**: the bucket must be hit 2 times (regardless of damage) to activate and hurt the castle.
- **Classic mode**: the jellyfish appears 26 screens after the start of the sand (or the checkpoint), the sand castle 22 screens after the jellyfish.
- **Anarchy mode**: the run always starts in the plains; after each arena boss, the next zone is drawn at random among all zones (plains, beach), and the arena boss depends on the zone (octopus in the plains, sand castle on the beach).

## [V0.2.11] - 2026-10-13

### Added
- **New main menu**: layout inspired by endless runners, reused for the main menu, pause menu and death screen.
  - Big launch button in the center with the fisherman, MISSIONS and settings (⚙) at the top, MODE button on the left and SHOP on the right.
  - Controls are now in the settings.
- **Mode selection** (MODE button): two buttons, **Classic** (the usual adventure) and **Anarchy**. Your choice is saved.
- **Anarchy mode**:
  - Bosses come back endlessly depending on distance and zone, with HP that rises with each encounter in the same run.
  - Enemies get more and more numerous, fast and tough, with no cap, and the fishing rod stays usable everywhere.
  - The zone changes with each octopus encounter: beach and grass alternate, with matching scenery, palm trees, tunnels and enemies.
  - The sky changes with each shark encounter: day, blood-red night, dusk, blue night, dawn, then the cycle restarts.
  - You cannot go back to the previous zone: only the sand castle lets you return to the first zone.
- **Sand castle**: new beach boss, 500 HP.
  - Sand arena in the middle of the beach, with the castle drawn in the background (its eyes follow the player).
  - It takes no direct damage: you have to aim at the water bucket, which changes place on every hit.
  - It attacks with sand waves announced by a warning, and summons a few seagulls.
  - Enraged at 50% HP: faster, more numerous waves.
  - Reward: 2 red souls (first victory only) and 120 gold. New related mission.
- **Seagull**: beach enemy, it hovers high up, rears back then dives at the player before climbing again. 2 base HP, gives 5 gold.
- **Palm tree platforms**: the leaf crown of the beach palm trees acts as a platform you can pass through from below.
- **Second joystick** (tablet): it controls the camera and aiming, with aim assist toward the nearest target.
- **In-run merchants**: a merchant next to his tuk-tuk every 18 screens, to upgrade the equipped weapon without touching the score.

### Changed
- **Jellyfish**: 420 HP (instead of 300) and moves 1.15 times faster.
- **Sand worms**: simplified sprite.
- **Shop**: the "SOULS" tab becomes "WEAPONS".
- **Pause menu**: the "Shop" button becomes "Back to main menu" and the "Restart" button disappears.
- **Classic mode**: the octopus and the sand castle trigger only once per run (whichever side), and the shark stays in the grass zone.

## Earlier versions (up to 2026-10-12)

### Changed
- **Fishing rod (nerf)**: the "Grapples fired" upgrade becomes "Damage zone".
  - The grapples keep their look (fan), but no longer deal damage individually.
  - An invisible central point detects contact and triggers an invisible damage zone around the impact.
  - Full damage at the center, gradually reduced down to -50% at the zone edge (minimum 1 damage).
  - Zone radius: from 0.3 tile (level 1, same behavior as before) to about 2 tiles (level 6).
  - All grapples return together as soon as the zone triggers.
  - Shop texts updated (name, displayed values, notes).
- **Shark demon**: fireballs are replaced by a laser.
  - Lasts 2 s, the shark stays still while firing (it can still be hit).
  - Beam thickness equals the shark's width, length equals the screen's, and it goes through the scenery.
  - Telegraph: a line follows the player during the charge (0.8 s), then the aim locks 0.3 s before firing with the zone shown flashing red.
  - New laser sound and a slight screen shake on firing.
- **Shark demon**: it now appears only once per run, and fires a bit faster than before.
- **Giant octopus**: there is now only one arena per side (the one before the beach); no more arena or octopus on the beach.
- **Fishing rod**: its upgrades are locked as soon as the beach is reached. Levels are kept, but the rod becomes unavailable (the trident replaces it).
- **Trident**: it can no longer be bought, it is unlocked automatically on arriving at the beach. All its upgrades cost gold.
- **Red souls**: each boss (shark, octopus, jellyfish) gives them only the first time it is beaten; afterwards it only gives gold.

### Added
- **Shooter dolphin** (red-orange): slow, it charges then spits the fireballs the shark used to throw (reduced speed).
  - Replaces about 30% of the blue dolphins on the ground, 2 base HP (more with distance), gives 4 gold.
- **Blood-red night**: when the shark appears, the sky turns blood red (gradual transition) with a red tint on the world.
  - All dolphins are 1.15 times faster until the octopus arena, which ends the night.
- **Pause menu**: copy of the main menu with Resume, Shop and Restart buttons.
  - Esc or P key, or a new ⏸ button next to the sound button.
  - Automatic pause when the tab is no longer visible.
  - The game is frozen during the pause and buffered inputs are reset on resume.
- **Credits** shown small on the main menu, pause menu and death screen:
  - dev: L'taleshy and cocobat
  - testers: moustik, ofodile and wyzan
- **Beach zone**: new zone at the exit of the octopus arena, on both sides of the start.
  - Sand art direction: sky, ground, palm trees, gradual transition from the grass, and sand in progressive levels like the starting grass.
  - More platforms: verticality comes through sand tunnels (sloping descent, gallery, climb back up, chimneys with ledges).
  - No more flying (pink) or blue dolphins: only the red shooter dolphins remain on the surface.
  - Climb assist on one-tile steps to move through the tunnels more easily.
- **Sand worms**: enemies living in the beach tunnels.
- **Beach checkpoint**: reaching the beach saves progress; later runs start on the beach (octopus arena counted as beaten).
  - "RESET SAVE" button with double confirmation to erase everything (shop, best score, checkpoint).
- **Multiple tridents**: trident upgrade (up to 4 tridents thrown around the player), unlocked by killing 10 beach worms (counter shown). Each level costs gold (60, 140, 260).
- **Jellyfish**: flying beach boss, 300 HP, once per run, about 37 screens from the beach entrance.
  - Wanders above the player and catches up if they move away.
  - White lasers: 0.85 s charge with aim locking 0.3 s before firing, then 3 beams in a fan for 1.1 s that sweep slowly.
  - 4 tentacles that spin constantly around it and hurt on contact.
  - Reward: 2 red souls and 80 gold.
- **10 new skins**: zombie, plumber, cook, viking, robot, clown, ghost, pharaoh, dino costume and king (from 3 to 60 pearls).
