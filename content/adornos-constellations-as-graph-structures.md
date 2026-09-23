---
title: "Adorno in Obsidian: Turning Adorno's Constellations into Graph Structures"
description: 'Using the tools of PKM to model constellations'
date: '2026-09-24'
tags: knowledge-management, obsidian, adorno, philosophy
image: false
draft: true
---
{{svg:constellation-graph}}

A few of us on The Philosophy Forum have been [slowly reading Theodor W. Adorno's *Negative Dialectics* together](https://www.thephilosophyforum.com/t/reading-group-negative-dialectics-by-theodor-adorno/57/last) since mid-2025, and we're currently deep into the core theoretical part of the work, where he introduces the method of constellations. I wanted to see what would happen if I represented this method as an information structure in the [Obsidian](https://obsidian.md/) knowledge management application. It works, up to a point, and precisely how it stops working can help us better understand Adorno's method.

The point of constellations is to avoid or curb identity-thinking, which is the treatment of a thing as identical to its concept. This happens when conceptual categories are imposed on individual things as if they fully determined them. Whatever does not fit the imposed classification drops away unnoticed---or is suppressed.

The paradigm case of identity-thinking is the economy. In exchange, unique objects are reduced to equivalency in the form of money. The particular is subsumed in exchange under the general category of the commodity, erasing qualitative differences for the sake of fungibility.

The same logic operates elsewhere in society. Bureaucracy reduces individuals to numbered case files, applying general rules to people regardless of their unique characteristics and situations. In the culture industry, entertainment is more often formulaic than novel: sameness presented as variety and freedom of choice. Positivist social science, which Adorno argued against for much of his career, reduces the qualitative to the quantitative, as if what can't be measured doesn't exist. And prejudice leads to the treatment of individuals as representatives of group identities, their individuality collapsed into presumed essences.

However, there is no thinking at all without classification and generalization. And a classifying concept applied to an object tends to make an identity claim: **O ≡ C**. But concepts are general and things are particular, so the fit is never exact. There is always something about **O** that isn't captured by **C**. Adorno calls this non-identity: the object is never exhausted by its concept.

Identity-thinking, though it tends to be damaging, expresses a utopian ideal of unity, in which contradictions and antagonisms are reconciled and understanding is reached without domination. But when conceptual schemes presume to have already achieved this, they freeze and isolate the object, coercing it into a framework that doesn't quite fit. In this way, an ideal of unity turns into domination: in thought, when the concept stifles the object, and in society, as in the examples above.

## Enter Constellations

The alternative is not to stop using concepts---hoping to find a non-rational road to understanding---but to use them differently. A constellation is a configuration of concepts gathered around an object such that together they might bring out what none of them can reveal individually. But crucially, this doesn't mean the task is to find a complete set of concepts. The constellation remains open, because there is always another way of approaching the object, another aspect under which it can be seen. The constellation always shifts.

The aim is not only to understand objects and concepts through their relations, but more specifically to uncover what Adorno calls their "sedimented history". I'll use a factory as an example. People travelling to a building to work a specific number of hours---this is something that came about. Work was once done at home or in the fields, at a pace determined by the specific nature of the task itself. That history is "sedimented" in the factory: what looks like the fixed nature of the factory is the result of a historical process, and to understand the factory is to recognize that process in it. 

A constellation connects the factory to other things, such as the clock, the wage and free time. But these things too have their histories. The hope is that the connections illuminate not a static system of relationships but a historically conditioned, dynamic one.

Note that although a constellation is assembled by a thinker and could have been assembled otherwise, it is not arbitrary and merely subjective. The arrangement is constructed, but not what the arrangement is about. So a constellation can be wrong, if the concepts gathered do not reveal the relations and history that actually constitute the object.

## Constellations as Graphs

In graph theory, a **graph** is a non-hierarchical and interconnected system of nodes, whereas a **tree** or taxonomy is a hierarchical parent-child structure.

<em><small>(Strictly speaking, the tree is a hierarchical kind of graph, but for my present purposes I'll use "graph" to mean a graph without a hierarchy.)</small></em>

![tree-vs-graph-dark](https://ik.imagekit.io/alistairrobinson/blog/tree-vs-graph-dark.svg)

Trees are the classic paradigm of classification, ubiquitous in science. They're an especially natural fit for certain kinds of knowledge, such as lineage:

![theropod-cladogram-dark](https://ik.imagekit.io/alistairrobinson/blog/theropod-cladogram-dark.svg)

Constellations, by contrast, have more in common with graphs. The factory is connected to the clock, the wage and free time, rather than placed beneath a category. This is the kind of structure Obsidian, which I already use for my own notes, is built to represent.

Obsidian is a note-taking app that takes a folder on your computer and treats it as a **vault**: a collection of text files that link to each other. These notes are the nodes, connected by links, and Obsidian generates the resulting graph structure. In mine, shown in the screenshots below, the nodes represent both objects (in red) and concepts (in yellow).

Within each note there is a brief characterization, but not a full definition. The rest of the note doesn't contain more specification, but lists the objects and concepts it stands in relation to. This means the note, and what it represents, is unintelligible on its own: *it is what it is only through its links*. To put it in Adorno's terms, what is inside the note is what is outside it, its relations. The note does not define the thing's essence from within.

Each of the following screenshots shows the note for the selected node, with the local graph view alongside it. As each new node is selected, representing a shift of attention, the graph re-forms around it. **The Factory** starts at the centre, but doesn't stay there. The sequence isn't a movement through levels, or towards what is most fundamental or abstract. It is a walk over stepping-stones, with no route mapped out in advance. (The red/yellow colour-coding doesn't apply to the selected node.)

#### 1. The Factory (object)

![constellation-the-factory](https://ik.imagekit.io/alistairrobinson/blog/constellation-the-factory.png)

To understand the factory through this constellation is not to file it under categories but to see how its connections make it what it is. And the concepts and objects it's connected with are not timeless, but contingent developments. They are always historical, and to say that the factory is relationally constituted is to say that it is *historically* constituted.

#### 2. The Clock (object)

![constellation-the-clock](https://ik.imagekit.io/alistairrobinson/blog/constellation-the-clock.png)

The clock becomes the object of interest, and the constellation re-forms around it. **Exchange Principle**, **Reification** and **Administered World** drop out of view, while **Second Nature** and **Boredom** appear. **The Factory** is still there, but now as one node among five others. The clock measures the hours the worker sells in the factory. This is historical: work that was once organized by the task came to be bought and sold by the hour, and the everyday experience of time became that of clock-time. The clock is also linked to free time, the clock-time left over once the shift is done, where work and rest had once been interwoven through the day and the year.

#### 3. Abstract Labour Time (concept)

![constellation-abstract-labour-time](https://ik.imagekit.io/alistairrobinson/blog/constellation-abstract-labour-time.png)

We click on **Abstract Labour Time** and now we are looking at a concept rather than an object. This is the concept for work as measured by the hour, whatever the work is. It's an abstraction, but a real one---we do our diverse jobs, but we are paid for hours like everyone else.

#### 4. Exchange Principle (concept)

![constellation-exchange-principle](https://ik.imagekit.io/alistairrobinson/blog/constellation-exchange-principle.png)

From **Abstract Labour Time** to something that lies behind it: the **Exchange Principle**, the reduction of qualitatively different things to equivalents. For the factory, this means the wage: labour, something once owed as a personal obligation or sold in the form of finished goods, came to be exchanged for money like any other commodity. But the exchange principle reaches beyond the factory. In this graph, **The Factory** appears alongside **The Hit Song** and **The Astrology Column**, commodities exchangeable for money just like the products of the factory.

None of these connections is a definition of the factory, but together they say what made it what it is.

### Vault as Tree

Representing these objects and concepts in a tree would look something like this:

![Constellation as Tree|1280x693](https://ik.imagekit.io/alistairrobinson/blog/constellation-as-tree.png)

Notice the directory structure on the left, and that the note now contains a full definition. The object is specified from within, and its place in the hierarchy, i.e., what's above it, supplies this specification. The result is closed: the taxonomic path and the definition agree, and once they do, the object has been fully accounted for. A constellation, by contrast, never closes: each concept gets part of the object and misses the rest, which is why you need several.

Here is part of the same vault, visually abstracted:

![vault-as-folder-hierarchy](https://ik.imagekit.io/alistairrobinson/blog/hierarchy-tree-dark-trimmed.svg)

The red dashed lines are relations that the tree cannot represent; they cut across the structure. In a tree, two things are related only if some category further up already contains both. **The Clock** is found under **Technology** and **Boredom** under **Psychology**, so there is no way to connect them directly. But measured time and empty time are the same fact. Boredom is the form experience takes when time has been reduced to clock-time and then emptied, and free time is merely the negative of work time, with no substance of its own.

All of this is the subsumption characteristic of identity-thinking, treating a thing as an instance of its kind.

## Constellations vs Rhizomes

In the world of PKM it's common to associate graphs with Deleuze and Guattari rather than Adorno. The rhizome---knowledge conceived as a network in which any point connects to any other, with no trunk or fixed order---is normally opposed to *arborescent* thinking, the branching model of trees.

Graph structures and apps like Obsidian model rhizomes well. Obsidian's global graph view, which shows every note at once with no centre, is close to a picture of one. But rhizomes are about the connections more than what is being connected, whereas a constellation is always assembled around something determinate, aiming for the history sedimented in it. Here Obsidian's *local* graph view supplies exactly what a constellation needs to model the thinker's shifting attention: select a node, and the figure re-forms around it and the note opens.

## Limits of the Graph

Although the graph gets closer to the structure of a constellation than the tree does, it has serious limitations as a representation of one.

#### Antagonism

In the graph, the link between **The Factory** and **Exchange Principle** looks exactly like the link between **The Factory** and **The Clock**. But the wage is not a neutral connection. It appears as a fair exchange of equivalents, hours for money, while the interests of those who sell the hours and those who buy them are opposed. A graph shows that two things are connected, but not what kind of connection it is, whether logical or historical, or whether the two are in conflict.

#### History

Everything historical in the walkthrough above is in the text beneath the screenshots, not in the graph. The graph shows only that **The Factory** links to **The Clock**. Its links are all present tense: they record that a connection holds, not that it came about, or how, or when.

#### Construction

I chose to approach the factory through the clock and the wage. Someone else might have started from the machine, or from the division of labour, and arrived at a different constellation. But when you open the vault, none of that shows. The links are simply there, so the constellation looks found rather than made. A constellation is both: assembled by someone, for this object, and answerable to what the object actually is.

#### Object/Concept

Each node is marked as either an object (red) or a concept (yellow), but the distinction isn't fixed. **The Factory** and **The Clock** are objects, but they are also concepts, and a constellation can circle a concept as much as a thing.

> The cognition of the object in its constellation is that of the process, which it has stored up within itself. As a constellation the theoretical thought **circles around the concept**, which it would like to open, hoping, that it springs ajar like the lock of a heavily guarded safe: only not by means of a single key or a single number, but by a number-combination.
>
> --- *Negative Dialectics*, [Constellation](https://negativedialectics.org/#constellation)

#### The non-identical

The factory is supposed to exceed anything the constellation says about it. Take what the hours are like for the person who works them. The vault has a node for that, Boredom, but it is only another concept, linked like the rest. What exceeds the concepts can't be represented by adding another node, link or piece of information, because whatever is added becomes part of the structure it was meant to exceed.

#### Critique

Where is the critique, Marx's "ruthless criticism of all that exists"? Much of the work is done off-screen. Seeing that the wage conceals an antagonism, or that free time is shaped by work time, happens in reading and thinking, not in the vault. The vault shows only the *results* of critique: it always arrives too late.

Even the insight into free time and boredom comes less from the constellation than from Adorno's essay "Free Time", and behind it Marx. What the constellation contributes is something else: the refusal to let any one concept---the exchange principle, say---become the master concept that explains everything in its domain in the same way.

## Conclusion: Trial Combinations

The way you arrange your notes shapes what you can think. The tools we use to organize thought are not neutral; they carry assumptions about what knowledge is and how it should be arranged. Both trees *and* graphs will carry them. The graph looks neutral because it has no master category, but it still decides in advance what a relation can be.

The linked-note vault ultimately goes back to the *Zettelkasten* index-card system, significantly used and developed by Niklas Luhmann, a systems theorist and no dialectician. His notes were meant to form an autonomous system, with structure emerging from unforeseen connections between them. They link to each other, not to an object outside them: the structure is not meant to model that of reality. Yet Walter Benjamin, the originator of the method of constellation, used a Zettelkasten for his *Arcades Project*. The tool itself is neither systemic nor dialectical. What matters is whether the notes point beyond themselves to an object.

Identity-thinking treats a thing as identical to its concept, filing it under a category as if that said all there was to say. The graph resists this in one respect: no note is defined from within, and nothing sits beneath a master category. The factory is what it is through its links to the clock, the wage, free time, and so on. But in other respects the graph does what the constellation is meant to resist. It fixes each node as object or concept, presents its links as found, draws conflict and history as the same kind of line, and can absorb what exceeds it only by turning it into another node.

So a graph can model how a constellation looks, as a set of relations, but not what it does: approach an object that no set of relations exhausts. More than a structure, a constellation is an activity, a historically mediated way of cognizing an object. Adorno described it this way early in his career:

> philosophy has to bring its elements, which it receives from the sciences, into changing constellations, or, to say it with less astrological and scientifically more current expression, into changing trial combinations, until they fall into a figure which can be read as an answer, while at the same time the question disappears.
>
> --- Adorno, "The Actuality of Philosophy"

The vault is a record of trial combinations that have stopped moving. But it is not thereby useless. The graph is a tool for arranging the material; it doesn't do the thinking for you. That happens in the interpretations you make, the connections you draw, and the history you trace.