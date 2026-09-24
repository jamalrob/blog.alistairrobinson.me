---
title: "Adorno in Obsidian: Turning Adorno's Constellations into Graph Structures"
description: 'Using the tools of PKM to model constellations'
date: '2026-09-24'
tags: knowledge-management, obsidian, adorno, philosophy
image: false
draft: true
---
{{svg:constellation-graph}}

A few of us on The Philosophy Forum have been [slowly reading Theodor W. Adorno's *Negative Dialectics* together](https://www.thephilosophyforum.com/t/reading-group-negative-dialectics-by-theodor-adorno/57/last) since mid-2025, and we're currently deep into the core theoretical part of the work, where he introduces the method of constellations. I wanted to see what would happen if I represented this method as an information structure in the [Obsidian](https://obsidian.md/) knowledge management application. It works, up to a point, and seeing precisely how it breaks down is illuminating.

## Contents
<div class="toc">

- [Identity-thinking](#identity-thinking)
- [Enter Constellations](#enter-constellations)
- [Constellations as Graphs](#constellations-as-graphs)
- [Vault as Tree](#vault-as-tree)
- [Limits of Graphs](#limits-of-graphs)
- [Conclusion](#conclusion)
- [References](#references)

</div>

<a name="identity-thinking"></a>

## Identity-thinking

The point of constellations is to avoid or curb identity-thinking, which is the treatment of a thing as identical to its concept. This happens when conceptual categories are imposed on individual things as if they fully determined them. Whatever does not fit the imposed classification drops away unnoticed---or is suppressed.

The paradigm case of identity-thinking is the economy. In exchange, unique objects are reduced to equivalency in the form of money. The particular is subsumed in exchange under the general category of the commodity, erasing qualitative differences for the sake of fungibility.

The same logic operates elsewhere in society. Bureaucracy reduces individuals to numbered case files, applying general rules to people regardless of their unique characteristics and situations. In the culture industry, entertainment is more often formulaic than novel: sameness presented as variety and freedom of choice. Positivist social science, which Adorno argued against for much of his career, reduces the qualitative to the quantitative, as if what can't be measured doesn't exist. And prejudice is grounded in the treatment of individuals as representatives of group identities, their individuality collapsed into presumed essences.

However, there is no thinking at all without classification and generalization. And a classifying concept applied to an object tends to make an identity claim: **O ≡ C**. But concepts are general and things are particular, so the fit is never exact. There is always something about **O** that isn't captured by **C**. Adorno calls this non-identity: the object is never exhausted by its concept.

Identity-thinking, though it tends to be damaging, expresses a utopian ideal of unity, in which contradictions and antagonisms are reconciled and understanding is reached without domination. But when conceptual schemes presume to have already achieved this, they freeze and isolate the object, coercing it into a framework that doesn't quite fit. In this way, an ideal of unity turns into domination: in thought, when the concept stifles the object, and in society, as in the examples above.

<a name="enter-constellations"></a>

## Enter Constellations

The alternative is not to stop using concepts---hoping to find a non-rational road to understanding---but to use them differently. A constellation is a configuration of concepts gathered around an object such that together they might bring out what none of them can reveal individually. But crucially, this doesn't mean the task is to find a complete set of concepts. The constellation remains open, because there is always another way of approaching the object, another aspect under which it can be seen. The constellation always shifts.

The aim is not just to understand objects and concepts through their relations, but more specifically to uncover what Adorno calls their "sedimented history". Take a factory as an example. Hundreds of people travelling to a building to work a strictly circumscribed number of hours---this is a state of affairs that came about, not the way things have always been. Work was once done at home or in the fields, at a pace determined by the specific nature of the task itself. History is "sedimented" in the factory: what looks natural is the result of a historical process, and understanding the factory is recognizing that process in it. 

A constellation connects the factory to other things, such as the clock, the wage and free time. But these things too have their histories. The hope is that the connections illuminate not a static system of relationships but a historically conditioned, dynamic one.

Note that although a constellation is assembled by a thinker and could have been assembled otherwise, it is not arbitrary and merely subjective. The arrangement is constructed, but not what the arrangement is about. So a constellation can be wrong, if the concepts gathered do not reveal the relations and history that actually constitute the object.

<a name="constellations-as-graphs"></a>

## Constellations as Graphs

In graph theory, a **graph** is a non-hierarchical and interconnected system of nodes, whereas a **tree** or taxonomy is a hierarchical parent-child structure.

<em><small>(Strictly speaking, the tree is a hierarchical kind of graph, but for my present purposes I'll use "graph" to mean a graph without a hierarchy.)</small></em>

![tree-vs-graph-dark](https://ik.imagekit.io/alistairrobinson/blog/tree-vs-graph-dark.svg)

Trees are the classic paradigm of classification, ubiquitous in science. They're an especially natural fit for certain kinds of knowledge, such as lineage:

![theropod-cladogram-dark](https://ik.imagekit.io/alistairrobinson/blog/theropod-cladogram-dark.svg)

Constellations, by contrast, have more in common with graphs. The factory is connected to the clock, the wage and free time, rather than placed beneath a category. This is the kind of structure Obsidian, which I already use for my own notes, is built to represent.

Obsidian is a note-taking app that takes a folder on your computer and treats it as a **vault**: a collection of text files that link to each other. These notes are the nodes, connected by links, and Obsidian generates the resulting graph structure. In mine, shown in the screenshots below, the nodes represent both objects and concepts.

Within each note there is a brief characterization, not a full definition, and the rest of the note lists the objects and concepts it stands in relation to. This means that the note, and what it represents, is unintelligible on its own: *it is what it is only through its links*. To put it in Adorno's terms, the essence of the note, its obscure inner truth, consists of what is outside it, namely its connections. The note does not define the thing's essence from within.

In PKM circles, graphs are more often associated with Deleuze and Guattari than with Adorno: the rhizome, a network in which any point connects to any other, with no hierarchy or tree structure. Obsidian's *global* graph view, which shows every note with no centre, is rhizomatic. But a rhizome is concerned more with the connections than with what they connect, whereas a constellation gathers around whatever stands at its centre: something determinate to be understood. For this, Obsidian's *local* graph view is the better fit: select a node, and the figure re-forms around it.

Each of the following screenshots shows the note for the selected node, with the local graph view alongside it. As each new node is selected, representing a shift of attention, the graph re-forms around it. **The Factory** starts at the centre, but doesn't stay there. The sequence isn't a movement through levels, or towards what is most fundamental or abstract. It is a walk over stepping-stones, with no route mapped out in advance.

***Note on colours:*** Nodes are marked as objects in red or concepts in yellow (except for the active/selected node). This shows where the emphasis tends to be, rather than showing fixed and exclusive kinds. Objects are only known through concepts and can be treated *as* concepts; and concepts are historical objects in their own right. **The Factory** is both a building and a way of organizing labour; **The Clock** is both a mechanism and a regime of time.

### 1. The Factory (object)

![constellation-the-factory](https://ik.imagekit.io/alistairrobinson/blog/constellation-the-factory.png)

To understand the factory through this constellation is not to file it under categories but to see how its connections make it what it is. And the concepts and objects it's connected with are not eternal. They are always historical, and to say that the factory is relationally constituted is to say that it is *historically* constituted.

As mentioned, constellations are constructed. Someone else interested in the factory might have chosen the machine or the division of labour, producing a different constellation. Both could be right, since each can reveal something of what actually made the factory what it is.

### 2. The Clock (object)

![constellation-the-clock](https://ik.imagekit.io/alistairrobinson/blog/constellation-the-clock.png)

The clock becomes the object of interest, and the constellation re-forms around it. **Exchange Principle**, **Reification** and **Administered World** drop out of view, while **Second Nature** and **Boredom** appear. **The Factory** is still there, but now as one node among five others. The clock measures the hours the worker sells in the factory. This is historical: work that was once organized by the task came to be bought and sold by the hour, and the everyday experience of time became that of clock-time. The clock is also linked to free time, the clock-time left over once the shift is done, where work and rest had once been interwoven through the day and the year.

### 3. Abstract Labour Time (concept)

![constellation-abstract-labour-time](https://ik.imagekit.io/alistairrobinson/blog/constellation-abstract-labour-time.png)

We click on **Abstract Labour Time** and now we are looking at a concept rather than an object. This is the concept for work as measured by the hour, whatever the work is. It's an abstraction, but a real one---we do our diverse jobs, but we are paid for hours like everyone else.

### 4. Exchange Principle (concept)

![constellation-exchange-principle](https://ik.imagekit.io/alistairrobinson/blog/constellation-exchange-principle.png)

From **Abstract Labour Time** to something that lies behind it: the **Exchange Principle**, the reduction of qualitatively different things to equivalents. For the factory, this means the wage: labour, something once owed as a personal obligation or sold in the form of finished goods, came to be exchanged for money like any other commodity. But the exchange principle reaches beyond the factory. In this graph, **The Factory** appears alongside **The Hit Song** and **The Astrology Column**, commodities exchangeable for money just like the products of the factory.

None of these connections is a definition of the factory, but together they say what made it what it is.

<a name="vault-as-tree"></a>

## Vault as Tree

Representing these objects and concepts in a tree would look something like this:

![Constellation as Tree](https://ik.imagekit.io/alistairrobinson/blog/constellation-as-tree.png)

Notice the directory structure on the left, and that the note now contains a full definition. The object is specified from within, and its place in the hierarchy, i.e., what's above it, supplies this specification. The result is closed: the taxonomic path and the definition agree, and once they do, the object has been fully accounted for. A constellation, by contrast, never closes: each concept gets part of the object and misses the rest, which is why you need several.

Here is part of the same vault, visually abstracted:

![vault-as-folder-hierarchy](https://ik.imagekit.io/alistairrobinson/blog/hierarchy-tree-dark-trimmed.svg)

The red dashed lines are relations that cannot be represented by the tree structure---they cut across it. In a tree, two things are related only if some category further up already contains them both. **The Clock** is found under **Technology** and **Boredom** under **Psychology**, so there is no way to connect them directly. But in reality, measured time and empty time are the same fact. Boredom is the form that experience takes when time has been reduced to clock-time and then emptied, free time being merely the negative of work time, with no substance of its own.

All of this is the subsumption characteristic of identity-thinking, treating a thing as an instance of its kind.

<a name="limits-of-graphs"></a>

## Limits of Graphs

Although a graph gets closer to the structure of a constellation than a tree does, it has serious limitations.

#### Antagonism

In the graph, the link between **The Factory** and **Exchange Principle** looks exactly like the link between **The Factory** and **The Clock**. But the wage is not a neutral connection. It appears as a fair exchange of equivalents, hours for money, while the interests of those who sell the hours and those who buy them are opposed. A graph shows that two things are connected, but not what kind of connection it is, whether logical or historical, or whether the two are in conflict.

#### History and the Non-identical

Everything historical in the walkthrough above is in the text beneath the screenshots or occasionally in the notes---not in the graphs. The graph shows only that **The Factory** links to **The Clock**. Its links are all present tense: they record that a connection holds, not that it came about, or how. This is where much of the non-identical escapes, since what an object has become is a large part of what exceeds any concept of it. A neat structure of nodes and links looks finished, and the more complete it looks, the less room it seems to leave for what it fails to capture. No constellation captures the whole of its object---there is always something its concepts miss---but a constellation worked through in essays, fragments, and montage, as Adorno and Benjamin did, is more obviously provisional than a graph made in Obsidian.

#### Critique

Where is the critique, Marx's "ruthless criticism of all that exists"? Much of the work is done outside the graph, just as it is for history and non-identity. Seeing that the wage relation conceals an antagonism, or that free time is the flip-side of work time---this happens in reading, thinking, and writing, what Adorno called the emphatic presentation of intellectual experience. The graph shows only some of the *results* of this critique: it always arrives too late.

<a name="conclusion"></a>

## Conclusion

Identity-thinking treats a thing as identical to its concept, filing it under a category as if that were all there is to say about it. The graph blasts this apart: no note is defined from within, and nothing is confined underneath a master category. The factory is what it is through its links to the clock, the wage, free time, and so on. But in other respects, the graph does what constellations are meant to avoid. It draws every relation, including antagonism, as the same kind of line, and it leaves out history altogether, recording that connections hold but not how they came about.

So a graph can model a constellation's structure, meaning a set of relations, but not its movement. More than a structure, a constellation is an activity, a historically mediated way of cognizing an object. Adorno described it this way early in his career:

> philosophy has to bring its elements, which it receives from the sciences, into changing constellations, or, to say it with less astrological and scientifically more current expression, into changing trial combinations, until they fall into a figure which can be read as an answer, while at the same time the question disappears.
>
> --- Adorno, "The Actuality of Philosophy"

The vault freezes a dynamic process of successive trial combinations, making constellations look static and making the objects in them less than they actually are---a kind of identity-thinking in its own right.

But so long as we're aware of this, the exercise is worthwhile. A graph is a tool for arranging the material; it doesn't do the thinking for you. That happens in the interpretations you make, the connections you draw, and the history you disclose.

------------

<a name="references"></a>

## References

- Adorno, Theodor W. "The Actuality of Philosophy." Translated by Benjamin Snow, *Telos*, no. 31, 1977, pp. 120–133.
  - --- *Negative Dialectics*. Translated by Dennis Redmond, 2001, rev. 2021.
- Deleuze, Gilles, and Félix Guattari. "Introduction: Rhizome." *A Thousand Plateaus: Capitalism and Schizophrenia*, translated by Brian Massumi, University of Minnesota Press, 1987, pp. 3–25.
- Marx, Karl. Letter to Arnold Ruge, September 1843. *Collected Works*, by Karl Marx and Frederick Engels, vol. 3, Lawrence & Wishart, 1975, pp. 141–145.