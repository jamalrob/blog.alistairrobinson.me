---
title: 'Constellations as Graph Structures'
description: ''
date: '2026-09-12'
tags: pkm, obsidian, adorno, philosophy, zettelkasten
image: true
imageClass: mainImageSmaller
draft: true
---
Constellations are Theodor W. Adorno's alternative to identity-thinking: the coercive imposition of categories on to individual things, on the assumption that concepts can fully specify what they classify. That assumption asserts an identity between concept and thing. What the object is over and above the imposed classification just drops away unnoticed---or is suppressed.

In his day, Adorno's big quarrel was with positivist social science and its mania for measurement, for reducing the qualitative to the quantitative, something we often call *scientism* today. It's not that he thought measurement as such was bad, just that it was radically over-applied. A discipline restricted to what can be measured discretely cannot tell us the truth about a society whose parts are what they are through the whole.

But the economy is the primary model, even the underlying *form*, of identity-thinking. In capitalist exchange, unique objects are reduced to abstract equivalents, i.e., money, and the particular is subsumed under the general category of commodity, erasing qualitative differences for the sake of exchangeability. The same move runs through other aspects of life. Bureaucratic systems reduce individuals to case files and numbers, treating them according to general rules regardless of their unique characteristics and situations. In the culture industry, entertainment is formulaic rather than allowing for genuine artistic novelty---sameness under the guise of variety and freedom of choice. Prejudice leads to individuals being treated merely as representatives of group identities and collapsed into presumed essences.

It should be said that identity-thinking is not simply an error to be avoided, and for Adorno it is unavoidable in any case: there is no thinking without concepts, and the critique of identity is itself conducted in them. More than that, identity-thinking expresses a utopian ideal of unity, in which contradictions and antagonisms are reconciled and understanding is reached without domination. That promise is real, and it is what makes the concept worth having. What happens is that conceptual schemes announce the reconciliation as already achieved, and the ideal turns into domination---metaphorically and, in the end, literally.

> Adorno’s critique of identity thinking, then, is not of ‘rational identity’, but of the coercive attitude which, in the ways we have seen above, force an identity onto the object.
> 
> --- Brian O'Connor, Adorno, p78

## Enter constellations

The alternative is not to stop using concepts but to use them differently. A constellation is a configuration of concepts around an object, without any of them counting as its main category. The object is not subsumed, but surrounded, and what shows up is what the concepts fail to capture on their own.

Adorno took it from Walter Benjamin, who compared ideas to constellations and objects to stars: the figure isn't contained in any one star, and the stars aren't produced by the figure. The concepts do not add up to a definition, and they are not supposed to. Each gets part of the object and misses the rest, which is why you need several, and why the arrangement never closes.

What the constellation aims for in practice is the history stored in the object, what Adorno calls its "sedimented history". To cognize the factory through abstract labour time and the exchange principle isn't to file it under those categories but to say what made it what it is. This also implies that a constellation is constructed---assembled by a thinker, but could have been assembled otherwise. Crucially however, this does not mean constellations are not objectively real. What is constructed is the arrangement, not what the arrangement is about. A constellation can be wrong, and it is wrong when the concepts gathered are not the ones that actually made the object what it is.

> Such immanent universality of the individual however is objective as sedimented history. This is in it and outside it, something all-encompassing, in which it has its place.
>
> --- Adorno, Negative Dialectics


## Constellations as Graphs

I see a parallel between Adorno's approach and certain methodologies in personal knowledge management (PKM), so I decided to play around with the [Obsidian](https://obsidian.md/) application to represent constellations.

In graph theory, a **graph** is a non-hierarchical and interconnected system of nodes, whereas a **tree** (or taxonomy) is a hierarchical parent-child structure.

![tree-vs-graph-dark](https://ik.imagekit.io/alistairrobinson/blog/tree-vs-graph-dark.svg)

Trees are a natural fit for some kinds of knowledge, such as lineage:

![theropod-cladogram-dark](https://ik.imagekit.io/alistairrobinson/blog/theropod-cladogram-dark.svg)

In contrast, constellations are a lot like graphs. So I created a vault in Obsidian.

Obsidian is a note-taking and knowledge management app, so each node in its graphs is a *note*. Each is connected with others through links, and what you get is a graph structure representing connected objects (in red) and concepts (in yellow) (these colours are not applied to the active node).

Each note opens with a short characterization but doesn't complete it as you'd expect from a *definition*. The rest of the note doesn't contain more specification, rather it lists the things and concepts it stands in relation to, and the note is unusable on its own. To put it like Adorno, what is inside the note is what is outside, i.e., its relations. The note is not defining the thing's essence "from within".

Each of the following screenshots shows the note for the selected node, and the local graph view alongside it. As successive nodes are selected---representing the shift of the cognizer's attention---the graph view changes. To begin with, The Factory is at the centre, but the centre changes.

The screenshots are in order. This doesn't represent a progression up or down levels, but a walk over stepping-stones with no route mapped out in advance.

#### 1. The Factory (object)

![constellation-the-factory](https://ik.imagekit.io/alistairrobinson/blog/constellation-the-factory.png)

#### 2. The Clock (object)

![constellation-the-clock](https://ik.imagekit.io/alistairrobinson/blog/constellation-the-clock.png)

#### 3. Abstract Labour Time (concept)

![constellation-abstract-labour-time](https://ik.imagekit.io/alistairrobinson/blog/constellation-abstract-labour-time.png)

#### 4. Exchange Principle (concept)

![constellation-exchange-principle](https://ik.imagekit.io/alistairrobinson/blog/constellation-exchange-principle.png)

**NOTE:** What the graph doesn't show is that, as discussed before, The Factory, The Clock etc., as well as being objects, are also concepts and can be referred to as such when that's the focus, as here:

> The cognition of the object in its constellation is that of the process, which it has stored up within itself. As a constellation the theoretical thought **circles around the concept**, which it would like to open, hoping, that it springs ajar like the lock of a heavily guarded safe: only not by means of a single key or a single number, but by a number-combination.
>
> [Constellation](https://negativedialectics.org/#constellation)

## Constellations as Trees

Representing these objects and concepts in a tree would look like something like this:

![Constellation as Tree|1280x693](https://ik.imagekit.io/alistairrobinson/blog/constellation-as-tree.png)

Notice the directory structure on the left, and that the note now contains a full definition. The object is specified from within, and its hierarchy, i.e., what's above it, supplies this specification. This is contrary to constellations in that it's a closed specification: the taxonomic path and the definition agree, and once they do, the object has been fully accounted for. In contrast, a constellation never closes: each concept gets part of the object and misses the rest, which is why you need several.

Here is the same vault, visually abstracted:

![vault-as-folder-hierarchy](https://ik.imagekit.io/alistairrobinson/blog/hierarchy-tree-dark-trimmed.svg)

The dashed lines are relations that the tree cannot state; they cut across the structure. Two individual things are related only if some category further up the tree already contains both, and the categories are fixed in advance. The Clock is filed under Technology and Boredom under Psychology, so there is no way to say that measured time and empty time are the same fact: boredom is the form experience takes when time has been made countable and then emptied---free time as merely the negative of work time.

All of this is the subsumption characteristic of identity-thinking, treating a thing as an instance of its kind.

## Layers

There is an added complexity, that of *depth*.

![constellation-the-factory-depth-2](https://ik.imagekit.io/alistairrobinson/blog/constellation-the-factory-depth-2.png)

Previously I had the Depth set to 1, so it showed the object's adjacent neighbours, forming a constellation. Increasing the Depth to 2 causes *their* neighbours to be added (and so on). That expansion outwards could be seen as going through layers---a temporarily fixed centre wrapped in context ordered by proximity to the centre.

---

## Caveats

The graph structure has limitations as a representation of constellations. Some things a graph structure cannot show:

- **The non-identical:** It can't be represented. You can't represent it by adding more links---this just makes the graph structure bigger. The object is supposed to exceed what you say about it.
- **Antagonism:** Every link is the same kind of link. A graph shows that two things are connected, but not that they are in conflict (or contradict).
- **History:** Links are all present tense. They record that a connection holds, not that it came about, or how, or when, or through what.
- **Construction:** The links are already there when you open the vault, so it looks found rather than made. A constellation is both: assembled by someone, for this object. It could have been assembled differently.

It's also worth noting that this tool (the linked-note vault) ultimately goes back to the *Zettelkasten* index card note-taking system, significantly used and developed by Niklas Luhmann, and he was a systems theorist, definitely not a dialectician. The notes are meant to form an autonomous system, with structure emerging, producing personal productivity from unforeseen connections. Its notes link to each other, not to an object outside them. In other words, its structure is not meant to model that of reality.

EDIT: But I notice from the [Zettelkasten wikipedia page](https://en.wikipedia.org/wiki/Zettelkasten) that Walter Benjamin, perhaps Adorno's greatest influence *and the originator of the method of constellation*, used Zettelkasten for his *Arcades Project*.

Anyway, I find it's a very useful conceptualization tool.