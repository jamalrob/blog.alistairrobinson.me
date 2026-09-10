---
title: 'Constellations as Graph Structures'
description: ''
date: '2026-09-12'
tags: pkm, obsidian, adorno, philosophy, zettelkasten
image: true
imageClass: mainImageSmaller
draft: true
---
Constellations are Theodor W. Adorno's alternative to identity-thinking, which is the imposition of conceptual categories on to individual things, on the assumption that concepts can fully specify what they classify. That assumption asserts an identity between concept and thing. What the object might be over and above the imposed classification just drops away unnoticed---or is suppressed.

In his day, Adorno's big quarrel was with positivist social science and its mania for measurement, for reducing the qualitative to the quantitative, something we often call *scientism* today. It's not that he thought measurement as such was bad, just that it was radically over-applied. He had several reasons for thinking so: that facts are not just given but are shaped by the presuppositions of the methodology; that society's parts are what they are through the whole, while measurement takes them one at a time; and that a discipline which describes only what happens to currently exist ends up supporting it.

But the economy is the primary model, even the underlying form, of identity-thinking. In exchange, unique objects are reduced to equivalency in the form of money. The particular is subsumed under the general category of the commodity, erasing qualitative differences for the sake of fungibility.

The same happens elsewhere. Bureaucracy reduces individuals to numbered case files, treating people according to general rules regardless of their unique characteristics and situations. In the culture industry, entertainment is more often formulaic than genuinely novel---sameness under the guise of variety and freedom of choice. And prejudice, which leads to the treatment of individuals as mere representatives of group identities, their selves collapsed into presumed essences.

That said, there is no thinking without classification and generalization, which is to say no thinking without concepts. And every concept applied to a thing makes a claim of identity: X is C. But concepts are general and things are particular, so the fit is never exact. Something about X always escapes from C, and we often fail to notice this.

Identity-thinking, though damaging, expresses a utopian ideal of unity, in which contradictions and antagonisms are reconciled and understanding is reached without domination. That is what makes the concept worth having, but when conceptual schemes presume to have already achieved this, they freeze and isolate the object---this is the process of reification---and coerce it into a framework that doesn't quite fit. Thus an ideal of unity turns into domination, both figurative and literal.

> Adorno’s critique of identity thinking, then, is not of ‘rational identity’, but of the coercive attitude which, in the ways we have seen above, force an identity onto the object.
> 
> --- Brian O'Connor, Adorno, p78

## Enter Constellations

The alternative is not to stop using concepts but to use them differently. A constellation is a configuration of concepts around an object, without any of them counting as its main category. The concepts gather around the object of interest, rather than directly and exclusively subsuming it with a readymade scheme. What shows up is what the concepts fail to capture on their own.

Adorno took the idea from Walter Benjamin. The concepts do not add up to a definition, and they are not supposed to. No one of them opens the object, which is why you need several, and why the arrangement is never closed.

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

Obsidian is a note-taking app that takes a folder on your computer and treats it as a *vault*: a collection of text files that link to each other. These notes are the nodes, connected by links, and Obsidian generates the resulting graph structure. In mine the nodes represent objects (in red) and concepts (in yellow).

Each note begins with a brief characterization but doesn't supply a proper definition. The rest of the note doesn't contain more specification, but lists the things and concepts it stands in relation to. This means the note is unusable on its own: *it is what it is only through its links*.

[To put it like Adorno, what is inside the note is what is outside, i.e., its relations. The note is not defining the thing's essence "from within".]

Each of the following screenshots shows the note for the selected node, and the local graph view alongside it. As successive nodes are selected---representing the shift of the cognizer's attention---the graph view changes. To begin with, The Factory is at the centre, but the centre changes.

The screenshots are in order. This doesn't represent a progression up or down levels, but a walk over stepping-stones with no route mapped out in advance.

NOTE: The object/concept colour-coding doesn't apply to the active node

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

### Vault as Tree

Representing these objects and concepts in a tree would look like something like this:

![Constellation as Tree|1280x693](https://ik.imagekit.io/alistairrobinson/blog/constellation-as-tree.png)

Notice the directory structure on the left, and that the note now contains a full definition. The object is specified from within, and its hierarchy, i.e., what's above it, supplies this specification. This is contrary to constellations in that it's a closed specification: the taxonomic path and the definition agree, and once they do, the object has been fully accounted for. In contrast, a constellation never closes: each concept gets part of the object and misses the rest, which is why you need several.

Here is the same vault, visually abstracted:

![vault-as-folder-hierarchy](https://ik.imagekit.io/alistairrobinson/blog/hierarchy-tree-dark-trimmed.svg)

The red dashed lines are relations that the tree cannot represent; they cut across the structure. Two things are related only if some category further up the tree already contains both. The Clock is found under Technology and Boredom under Psychology, with no way to connect them directly, meaning there is no way to show that measured time and empty time are the same fact, that boredom is the form experience takes when time has been reduced to clock-time, and then emptied---free time as merely the negative of work time.

All of this is the subsumption characteristic of identity-thinking, treating a thing as an instance of its kind.

## Constellations vs Rhizomes

In the world of PKM it's common to associate graphs with Deleuze and Guattari rather than Adorno. The rhizome---knowledge conceived as a network in which any point connects to any other, with no trunk or fixed order---is normally opposed to *arborescent* thinking, the branching model of folders and taxonomies, with Obsidian's graph view as the standard illustration.

Graph structures and apps like Obsidian do a great job of modelling rhizomes, in some ways better than they model constellations. But not in every way.

A rhizome has no object. It's about the connections more than what is being connected, whereas a constellation is always assembled around something determinate, aiming for the history sedimented in it. Obsidian's local graph view supplies exactly what a constellation needs to model the cognizing subject: the ability to select a node, whereupon the figure re-forms around it and the note opens.

It's worth adding that Deleuze seems to be simply against the tree as such, where Adorno is against the tree's overreaching claims. The rhizome concept is often expressed as hierarchy-bad, network-good, and that is not my argument. My own vault is classificatory in its own way: objects in red, concepts in yellow.

## Shortcomings: The Recapitulation of Identity-thinking

The graph structure has limitations as a representation of constellations. Some things a graph structure cannot show:

- **The non-identical:** It can't be represented. You can't represent it by adding more links---this just makes the graph structure bigger. The object is supposed to exceed what you say about it.
- **Antagonism:** Every link is of the same kind. A graph shows that two things are connected, but not that they are in conflict (or contradict).
- **History:** Links are all present tense. They record that a connection holds, not that it came about, or how, or when, or through what.
- **Construction:** The links are already there when you open the vault, so it looks found rather than made. A constellation is both: assembled by someone, for this object. It could have been assembled differently.

It's also worth noting that this tool (the linked-note vault) ultimately goes back to the *Zettelkasten* index card note-taking system, significantly used and developed by Niklas Luhmann, and he was a systems theorist, definitely not a dialectician. The notes are meant to form an autonomous system, with structure emerging, producing personal productivity from unforeseen connections. Its notes link to each other, not to an object outside them. In other words, its structure is not meant to model that of reality.

I notice from the [Zettelkasten wikipedia page](https://en.wikipedia.org/wiki/Zettelkasten) that Walter Benjamin, perhaps Adorno's greatest influence *and the originator of the method of constellation*, used Zettelkasten for his *Arcades Project*.

And where is the critique, the ruthless criticism of all that exists, aiming to expose ideology's ideological character? Much of the work is being done off-screen. The vault shows only the *results* of critique---it is always too late to the party.

And the insight into free time and boredom, for example, might be derived more from Marx than from any constellation, while the contribution of the constellation is the refusal to let the exchange principle become the master concept that explains everything lying within its domain (and explaining them in the same way). 

#################

> philosophy has to bring its elements, which it receives from the sciences, into changing constellations, or, to say it with less astrological and scientifically more current expression, into changing trial combinations, until they fall into a figure which can be read as ananswer, while at the same time the question disappears.