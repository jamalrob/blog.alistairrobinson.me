import styles from '@/styles/layout.module.css';
import postStyles from '@/styles/post.module.css';
import Layout from '@/components/layout';
import Head from 'next/head';
import Image from 'next/image';

export default function About() {

    const imageStyle = {
        width: 'auto',
        height: 'auto',
        maxWidth: '70%'
    }

    return (
      <Layout>
        <Head>
          <title>About Alistair Robinson</title>
        </Head>
        <article className={postStyles.postArticle + ' ' + styles.innerContainer}>

            <div class="date"><strong>10 January 2011</strong></div>
            <h1 className={styles.heading2Xl}>Notes on Wittgenstein’s “On Certainty”, Part 1</h1>
                <p><img src="/static/content/wittgenstein2.jpg" alt="" /></p>

            <p><a href="/notes-on-wittgensteins-on-certainty-1/">Part 1</a>  <a href="/notes-on-wittgensteins-on-certainty-part-2/">Part 2</a> <a href="/notes-on-wittgensteins-on-certainty-part-3/">Part 3</a> <a href="/notes-on-wittgensteins-on-certainty-part-4/">Part 4</a> <a href="/notes-on-wittgensteins-on-certainty-part-5/">Part 5</a> <a href="/notes-on-wittgensteins-on-certainty-part-6/">Part 6</a> <a href="/notes-on-wittgensteins-on-certainty-part-7/">Part 7</a></p>

            <p>This is going to take up quite a few posts, but I&#8217;m sure it&#8217;ll be interspersed with other things. I&#8217;m reading Wittgenstein&#8217;s <em>On Certainty,</em> taking notes as I go, very often paragraph-by-paragraph. I was inspired to do this by Sam Naccarato, who has been posting up his exegesis on <a href="http://forums.philosophyforums.com/threads/wittgenstein-a-summary-41631.html">Philosophy Forums</a> as well as on <a href="http://wittgenstein-ludwig.blogspot.com/">his blog</a>.</p>

            <p>My approach here is to quote a paragraph (or two or three or more), and then follow it with my own explication, plus anything else I think of. Let&#8217;s start.</p>
            <blockquote class="w">
                <p class="w">1. If you do know that <em>here is one hand,</em> we&#8217;ll grant you all the rest.</p>
                <p class="w">When one says that such and such a proposition can&#8217;t be proved, of course that does not mean that it can&#8217;t be derived from other propositions; any proposition can be derived from other ones. But they may be no more certain than it is itself.</p>
            </blockquote>

            <p>Wittgenstein&#8217;s notes <em>On Certainty</em> were prompted by the anti-sceptical and anti-idealist essays of G. E. Moore. Moore, in his 1939 paper, <em>Proof of an External World</em>, claimed to have proved the existence of the external world by holding up his hand (see my <a href="/notes-on-moores-proof-of-an-external-world/">earlier post about Moore&#8217;s argument</a>), concluding that &#8220;there is an external world&#8221; from &#8220;here is a hand&#8221;. Wittgenstein is a comrade in Moore&#8217;s fight against philosophical scepticism &#8211; scepticism about the existence of the external world, other minds and so on &#8211; but there is something in what Moore says that intrigues him, something that is fundamental.</p>

            <p>More crudely, you might say that he is criticizing Moore&#8217;s approach so as to find a better response to scepticism. Right at the start he points out the obvious: if your argument rests on a claim to know something &#8211; that <em>here is a hand</em> &#8211; then the argument is sound only insofar as you <em>do</em> know that.</p>

            <p>Whether Moore does know it is exactly the issue that Wittgenstein goes on to look at.</p>

            <blockquote class="w">
                <p class="w">2. From its <em>seeming</em> to me&#8212;or to everyone&#8212;to be so, it doesn’t follow that it <em>is</em> so. What we can ask is whether it can make sense to doubt it.</p>
            </blockquote>

            <p>The sceptic trades off the inarguable fact that things sometimes seem to be the case which are not. There are situations where doubt is appropriate. Is that an oasis on the horizon or is it just a mirage? But can it really make sense to doubt that you have two hands or that the Earth has been around for millenia? Sometimes we get things wrong about the world around us, but most often we don&#8217;t: we find our way about quite well, and it is against this background of certainty and at-home-ness that errors are seen as errors at all.</p>

            <p>&#8220;Here is a hand&#8221;, &#8220;The Earth existed for a long time before my birth&#8221;, etc. Ordinarily there is no context in which doubting these statements is legitimate, because there is no context in which we have to contend with facts that cast doubt on them.</p>

            <p>Wittgenstein at the outset is making clear the inter-dependence of knowledge and doubt. We assert that we know something only where it is amenable to doubt.</p>

            <blockquote class="w">
                <p class="w">3. If e.g. someone says &#8220;I don’ t know if there’s a hand here&#8221; he might be told &#8220;Look closer&#8221;. This possibility of satisfying oneself is part of the language-game. Is one of its essential features.</p>
            </blockquote>

            <p>In the language game of doubting, there is a possibility of satisfying oneself. &#8220;I don&#8217;t know&#8221; is taken to be an expression of uncertainty in this case, and we can say &#8220;look&#8221; to allow them to satisfy themself that they know, i.e., to bring them to certainty. Only in this kind of situation might it be appropriate to say &#8220;I know there&#8217;s a hand here&#8221;.</p>

            <blockquote class="w">
                <p class="w">4. &#8220;I know that I am a human being.&#8221; In order to see how unclear the sense of this proposition is, consider its negation. At most it might be taken to mean &#8220;I know I have the organs of a human&#8221;. (E.g. a brain which, after all, no one has ever yet seen.) But what about such a proposition as &#8220;I know I have a brain&#8221;? Can I doubt it? Grounds for doubt are lacking! Everything speaks in its favour, nothing against it. Nevertheless it is imaginable that my skull should turn out empty when it was operated on.</p>
            </blockquote>

            <p>What could &#8220;I do not know that I am a human being&#8221; mean? Only that I am mad or not sufficiently familiar with English. It is wrong because, in this case, there are no grounds for doubting that I am a human being. There is nothing to motivate a doubt.</p>

            <p>This reminds me of one of the remarks made by Crispin Wright in &#8220;Imploding the Demon&#8221;. He says that &#8220;any fool can derive unpalatable consequences from wholly unmotivated premises&#8221;, so we should only take scepticism seriously if it is motivated by proper concerns.</p>

            <p>I know I have a brain, but scepticism is possible here, because I can imagine that I might not have — but is it legitimate, and does it get any purchase? In what situation could it be right to ask if I really have a brain? It is an unmotivated, idle scepticism lacking any basis. Brainless people have not been discovered in the past, as far as I know. <strong>Just because we can <em>imagine</em> something&#8217;s not being the case, does not mean that we can meaningfully <em>doubt</em> it.</strong></p>

            <p>Furthermore, Wittgenstein is making the point that where doubt is inappropriate or meaningless, so also is <em>knowledge</em> &#8211; I cannot properly say &#8220;I know I have a brain&#8221; after all.</p>

            <blockquote class="w">
                <p class="w">5. Whether a proposition can turn out false after all depends on what I make count as determinants for that proposition.</p>
            </blockquote>

            <p>A. &#8220;The Earth was around for millenia before my birth.&#8221;<br />B.  &#8220;There is water on the horizon.&#8221;</p>

            <p>What do we take as determining whether these are true or false? For A, we do not take <em>anything</em> to be determinants, because we take it for granted. There is no language-game in which we question it, so there has been no consideration of evidence either way that has built up over the course of the language&#8217;s evolution.</p>

            <p>For B, it is more obvious: we take it that if we travel for another fifty miles towards what looks like water, we will find water. That determines the truth of the proposition, and failure to find it will determine its falsity, i.e., that it is a mirage.</p>

            <blockquote class="w">
                <p class="w">6. Now, can one enumerate what one knows (like Moore)? Straight off like that, I believe not. For otherwise the expression “I know” gets misused. And through this misuse a queer and extremely important mental state seems to be revealed.</p>
            </blockquote>

            <p>If we enumerate what we know, e.g., I know that here is a hand, I know that the Earth has existed&#8230;, and so on through any number of propositions that we could never doubt — then we are misusing the word &#8220;know&#8221;, for it is only where there is doubt that knowledge of such propositions could legitimately be asserted. The things we know do not make up a class to be enumerated like that. In enumerating them, we attempt to abstract the separate knowings from their natural homes.</p>

            <p>But can we go farther and say that one cannot legitimately enumerate what we know, <em>no matter what it is we say we know</em>? That is, do we go wrong in enumerating even plainly uncontroversial claims to knowledge, such as &#8220;I know that the first man in space was Yuri Gagarin&#8221;, which we can imagine doubting? My guess is that Wittgenstein is indeed saying this, and the point would therefore be a more general and deeper one: in enumerating what we know we presume that we can extract the essence of a word&#8217;s meaning by abstracting it from its various uses &#8211; and this is where philosophy goes wrong.</p>

            <p><em>&#8220;And through this misuse a queer and extremely important mental state seems to be revealed.&#8221;</em></p>

            <p>This is strikingly mysterious on a first reading. Perhaps he is referring to the mental state in which we feel justified in using the word &#8220;know&#8221; in this way, even though it is a mistake. In enumerating what we know, in the way that Moore does, or in saying something like &#8220;I know there is an external world&#8221;, we reveal our bedrock beliefs and our certainty, which are never questioned outside of philosophy, and which we find inexpressible in words without using a term improperly, in this case &#8220;I know&#8221;. Philosophers here are led astray because they attempt to do things with language that it is not equipped to do.</p>

            <p>Or our mental state is such that, like Moore, we want to be able to say &#8220;I know&#8221; when we are challenged by scepticism &#8211; even though it is a misuse &#8211; and this is what has driven philosophers into epistemology.</p>

            <p>There is a puzzle here about why it is so easy to misuse language. What is special about philosophy that it leads us to do this so often?</p>

            <p><strong><span class="caps">NOTE</span> (Feb 10th 2011): I say much more on the &#8220;queer and extremely important mental state&#8221; in <a href="/notes-on-wittgensteins-on-certainty-part-2/">part 2</a></strong></p>

            <blockquote class="w">
                <p class="w">7. My life shews that I know or am certain that there is a chair over there, or a door, and so on.—I tell a friend e.g.&#8220;Take that chair over there&#8221;, &#8220;Shut the door&#8221;, etc. etc.</p>
            </blockquote>

            <p>Our actions <em>show</em> that we are certain of such propositions, because they presuppose their truth. &#8220;Please pass me the cheese&#8221; presupposes that &#8220;there is some cheese on the table&#8221;. But I wonder: is &#8220;presuppose their truth&#8221; too strong? After all, we&#8217;re not talking about something explicit or propositional. That there is some cheese on the table is part of the <em>ground</em> (as in figure and ground, i.e., background) against which we can do the things we do with words.</p>

            <blockquote class="w">
                <p class="w">8. The difference between the concept of ‘knowing’ and the concept of ‘being certain’ isn’t of any great importance at all, except where “I know” is meant to mean: I can’t be wrong. In a law-court, for example, “I am certain” could replace “I know” in every piece of testimony. We might even imagine its being forbidden to say “I know” there.</p>
            </blockquote>

            <p>When we say &#8220;I know that&#8230;&#8221; we normally don&#8217;t mean much more than &#8220;I am certain that&#8230;&#8221;.</p>

            <p>When Moore says &#8220;I know that here is a hand&#8221; we are no more guaranteed of the truth of &#8220;here is a hand&#8221; than if he says &#8220;I am certain that here is a hand&#8221;. As a direct response to the sceptic his assertion does not work, because what he is certain of, what he counts as knowledge, is not thereby guaranteed to be knowledge.</p>

            <p>But Wittgenstein must be on Moore&#8217;s side against the sceptics and idealists, so what has he in mind? Well, it seems to be that a direct response such as the one Moore is attempting is impossible. Doubt about the external world is <em>not</em> legitimate &#8211; this is not a place where doubting can be done properly &#8211; so we only compound the mistake by claiming the contrary, &#8220;I know&#8230;&#8221;.</p>

            <p>Then again, it is the natural response to such annoying questions as &#8220;how do you really know you have a hand in front of you.&#8221; We feel we should be able to say &#8220;I know I do!&#8221; But that is only because we are used to using &#8220;I know&#8221; to mean &#8220;I am certain&#8221;. We are asserting our certainty, which we are not &#8211; in this arena &#8211; used to having questioned. A better way of responding is to say &#8220;don&#8217;t be silly&#8221;, and go on to show how the sceptic&#8217;s question is wrongheaded. We should have no need of defending our certainty in these matters, because those propositions that the sceptic questions are part of the fabric of our existence, prior to anything else. Everything we say and do, indeed <em>that</em> we say and do, shows this.</p>

            <blockquote class="w">
                <p class="w">9. Now do I, in the course of my life, make sure I know that here is a hand—my own hand, that is?</p>
            </blockquote>

            <p>Is the &#8220;knowledge&#8221; or certainty that here is a hand something we arrive at by investigation? It is those propositions we arrive at by investigation that can be doubted and about which we can say &#8220;I know&#8221;. Those on which investigation itself depends, i.e., the <em>background,</em> cannot themselves be known, because knowing takes place only against that background. To doubt the background is to play another, higher level language-game with its <em>own</em> background. Here we see the sense of the charge against philosophers that they go wrong by using words in inappropriate contexts.</p>

            <blockquote class="w">
                <p class="w">10. I know that a sick man is lying here? Nonsense! I am sitting at his bedside, I am looking attentively into his face.&#8212;So I don&#8217;t know, then, that there is a sick man lying here? Neither the question nor the assertion makes sense. Any more than the assertion &#8220;I am here&#8221;, which I might yet use at any moment, if suitable occasion presented itself.&#8212;Then is &#8220;2 * 2 = 4&#8221; nonsense in the same way, and not a proposition of arithmetic, apart from particular occasions? &#8220;2 * 2 = 4&#8221; is a true proposition of arithmetic—not &#8220;on particular occasions&#8221; nor &#8220;always&#8220;—but the spoken or written sentence &#8220;2 * 2. = 4&#8221; in Chinese might have a different meaning or be out and out nonsense, and from this is seen that it is only in use that the proposition has its sense. And &#8220;I know that there&#8217;s a sick man lying here&#8221;, used in an unsuitable situation, seems not to be nonsense but rather seems matter-of-course, only because one can fairly easily imagine a situation to fit it, and one thinks that the words &#8220;I know that . . .&#8221; are always in place where there is no doubt, and hence even where the expression of doubt would be unintelligible.</p>
            </blockquote>

            <p>But it is easy to slip into improper usage when philosophizing. Since we use &#8220;I know&#8221; to remove doubt — since it <em>opposes</em> doubt — its use seems alright even in situations where doubt is not intelligible. The problem, therefore, is in whatever leads one to need to use a term from one language game in another, in this case philosophizing.</p>

            <p><em>&#8220;it is only in use that the proposition has its sense&#8221;</em></p>

            <p><em>Meaning is use.</em> Propositions are not meaningful standalone entities awaiting employment, as they seem to be when viewed from the perspective of Russell or Frege.</p>

            <blockquote class="w">
                <p class="w">11. We just do not see how very specialized the use of &#8220;I know&#8221; is.</p>
            </blockquote>

            <p>Thus we often miss the fact that we cannot use &#8220;I know&#8221; willy-nilly.</p>

            <blockquote class="w">
                <p class="w">12. —For &#8220;I know&#8221; seems to describe a state of affairs which guarantees what is known, guarantees it as a fact. One always forgets the expression &#8220;I thought I knew&#8217;.</p>
            </blockquote>

            <p>That we can say &#8220;I thought I knew&#8221; reveals that saying &#8220;I know&#8221; is no guarantee of knowledge; it is only an assertion of certainty.</p>

            <blockquote class="w">
                <p class="w">13. For it is not as though the proposition 'It is so&#8217; could be inferred from someone else&#8217;s utterance: &#8220;I know it is so&#8221;. Nor from the utterance together with its not being a lie.—But can&#8217;t I infer &#8220;It is so&#8221; from my own utterance &#8220;I know etc.&#8221;? Yes; and also &#8220;There is a hand there&#8221; follows from the proposition &#8220;He knows that there&#8217;s a hand there&#8221;. But from his utterance &#8220;I know . . . &#8220; it does not follow that he does know it.</p>
            </blockquote>

            <blockquote class="w">
                <p class="w">14. That he does know takes some shewing.</p>
            </blockquote>

            <blockquote class="w">
                <p class="w">15. It needs to be shewn that no mistake was possible. Giving the assurance 'I know&#8217; doesn&#8217;t suffice. For it is after all only an assurance that I can&#8217;t be making a mistake, and it needs to be objectively established that I am not making a mistake about that.</p>
            </blockquote>

            <p><em>Saying you know it don&#8217;t make it so.</em> If it is to count as knowledge, in the stronger sense in which Moore means it, it must be demonstrated or proved for others, because knowledge is different from a state of certainty, i.e., it is objective.</p>

            <p>This again is emphasizing that Moore&#8217;s answer to the sceptic is mistaken or wrong-headed, and falls at the first hurdle.</p>

            <blockquote class="w">
                <p class="w">16. &#8220;If I know something, then I also know that I know it , etc.&#8221; amounts to: &#8220;I know that&#8221; means &#8220;I am incapable of being wrong about that&#8221;. But whether I am so needs to be established objectively.</p>
            </blockquote>

            <p>&#8220;I know that&#8230;&#8221; means &#8220;I cannot be mistaken in saying that&#8230;&#8221; and saying &#8220;I know that I know that&#8221; therefore means &#8220;I cannot be mistaken that I cannot be mistaken that&#8230;&#8221; This is not something that is guaranteed by the act of saying so.</p>

            <blockquote class="w">
                <p class="w">17. Suppose now I say &#8220;I&#8217;m incapable of being wrong about this: that is a book&#8221; while I point to an object. What would a mistake here be like? And have I any clear idea of it?</p>
            </blockquote>

            <p>If we translate &#8220;I know that that is a book&#8221; into &#8220;I&#8217;m incapable of being wrong about this: that is a book&#8221;, how do things look? Well, who said you <em>could</em> be wrong about it? But there <em>are</em> situations in which I could be wrong about it, e.g., it is not really a book but just a box that looks like one, so there are special cases where we might make a mistake. But this is only because somebody has invented a deception: the deception depends on a normally reliable context of experience. Wittgenstein, though, does not seem to mean this. Why didn&#8217;t he just use &#8220;I&#8217;m incapable of being wrong about this: this is a hand&#8221;? In this case, it is nonsense to even bring up the possibility of being wrong.</p>

            <p>He may have chosen the book rather than the hand because it is perhaps slightly more obvious that there are special circumstances in which we could be wrong. But even with the hand example there might be such circumstances (see &sect; 23 etc below).</p>

            <blockquote class="w">
                <p class="w">18. &#8220;I know&#8221; often means: I have the proper grounds for my statement. So if the other person is acquainted with the language game, he would admit that I know. The other, if he is acquainted with the language-game, must be able to imagine how, one may know something of the kind.</p>
            </blockquote>

            <p>Your <em>knowing</em>, in the language game, counts as knowing when others can see how you could have reached it.</p>

            <blockquote class="w">
                <p class="w">19. The statement “I know that here is a hand” may then be continued: “for it’s <em>my</em> hand that I’m looking at.” Then a reasonable man will not doubt that I know.—Nor will the idealist; rather he will say that he was not dealing with the practical doubt which is being dismissed, but there is a further doubt <em>behind</em> that one.—That this is an <em>illusion</em> has to be shown in a different way.</p>
            </blockquote>

            <p>The sceptic or idealist does not doubt this — what they might term mere subjective common-sense certainty — but asserts that these grounds for knowledge are actually not sufficient grounds at all, because what appears to be a hand may just as well be an illusion. Again, Moore&#8217;s proof doesn&#8217;t stand up to this kind of doubt.</p>

            <blockquote class="w">
                <p class="w">20. “Doubting the existence of the external world” does not mean for example doubting the existence of a planet, which later observations proved to exist.—Or does Moore want to say that knowing that here is his hand is different in kind from knowing the existence of the planet Saturn? Otherwise it would be possible to point out the discovery of the planet Saturn to the doubters and say that its existence has been proved, and hence the existence of the external world as well.</p>
            </blockquote>

            <p>How could Moore have hoped that his proof would work against the idealist/sceptic, who obviously already takes for granted the common-sense, apparent, certainty of the existence of the external world. Such demonstrables as &#8220;there is a table&#8221; or &#8220;the planet has been shown to exist&#8221; would have removed all philosophical doubt long ago if it were enough just to make such assertions.</p>

            <blockquote class="w">
                <p class="w">21. Moore&#8217;s view really comes down to this: the concept 'know&#8217; is analogous to the concepts 'believe&#8217;, 'surmise&#8217;, 'doubt&#8217;, 'be convinced&#8217; in that the statement &#8220;I know &#8230;&#8221; can&#8217;t be a mistake. And if that is so, then there can be an inference to the truth of an assertion. And here the form &#8220;I thought I knew&#8221; is being overlooked.&#8212;But if this latter is inadmissable, then a mistake in the assertion must be logically impossible too. And anyone who is acquainted with the language game must realize this&#8212;an assurance from a reliable man that he knows cannot contribute anything.</p>
            </blockquote>

            <blockquote class="w">
                <p class="w">22. It would surely be remarkable if we had to believe the reliable person who says &#8220;I can&#8217;t be wrong&#8221;; or who says &#8220;I am not wrong&#8221;.</p>
            </blockquote>

            <p>Wittgenstein means that Moore is expecting that we can infer the truth of the statement &#8220;I know&#8230;&#8221; from its being stated, just as, if one says &#8220;I believe&#8221; or &#8220;I am certain&#8221;, it is the case that one believes or is certain (unless one is lying). The common usage, &#8220;I thought I knew&#8221;, shows that we cannot do this: they are not the same, and we do not have to believe the person who claims to know something, who claims that he cannot be wrong. We use &#8220;I know&#8221; on the assumption that we should be able to fulfil some objective standard for knowledge. We should be ready to show how we know it.</p>

            <blockquote class="w">
                <p class="w">23. If I don&#8217;t know whether someone has two hands (say, whether they have been amputated or not) I shall believe his assurance that he has two hands, if he is trustworthy. And if he says he <em>knows it,</em> that can only signify to me that he has been able to make sure, and hence that his arms are e.g. not still concealed by the coverings and bandages, etc. etc. My believing the trustworthy man stems from my admitting that it is possible for him to make sure. But someone who says that perhaps there are no physical objects makes no such admission.</p>
            </blockquote>

            <p>I can understand &#8220;I know I have two hands&#8221; only as meaning that the speaker is able to make sure that he has two hands. When the man says he knows he has hands, he can say it, and I accept it, in the context of a situation in which he could have found this out. We both presuppose this as a background. And <em>believing</em> is the result of the combination of his trustworthiness and my acceptance that he could have made sure of what he claims.</p>

            <p>But by saying &#8220;I know I have two hands&#8221;, the man cannot similarly convince someone who says that there are no physical objects at all, because this sceptic has not accepted that the man can make sure of what he says.</p>

            <p>The sceptic here would not be properly partaking of a language-game, though he thinks it legitimate to express these doubts. Global scepticism can&#8217;t get a handle on real life, and disappears up its own backside, because it questions the bedrock upon which we build our behaviour and our language-games themselves. But we can of course express a <em>local</em> scepticism, if the man is wearing bandages and possibly does not know whether or not his hands have been amputated. This is where it makes sense for him to say he <em>knows</em> he has two hands.</p>

            <blockquote class="w">
                <p class="w">24. The idealist&#8217;s question would be something like: &#8220;What right have I not to doubt the existence of my hands?&#8221; (And to that the answer can&#8217;t be: I know that they exist.) but someone who asks such a question is overlooking the fact that a doubt about existence only works in a language-game. Hence, that we should first have to ask: what would such a doubt be like?, and don&#8217;t understand this straight off.</p>
            </blockquote>

            <blockquote class="w">
                <p class="w">25. One may be wrong even about &#8220;there being a hand here&#8221;. Only in particular circumstances is it impossible.—&#8220;Even in a calculation one can be wrong-only in certain circumstances one can&#8217;t.&#8221;</p>
            </blockquote>

            <blockquote class="w">
                <p class="w">26. But can&#8217;t it be seen from a <em>rule</em> what circumstances logically exclude a mistake in the employment of rules of calculation? What use is a rule to us here? Mightn&#8217;t we (in turn) go wrong in applying it?</p>
            </blockquote>

            <p>There are certain circumstances, then, in which &#8220;here is a hand&#8221; <em>could</em> be doubted. Such a circumstance corresponds to a language-game, and the idealist who says he has the right to doubt the existence of his hands &#8211; saying what he is saying <em>as</em> an idealist, and not someone lying in hospital with bandaged hands waking up from an operation &#8211; is not taking part in such a language-game. The question might then arise, <em>how do we know which language-games we can legitimately doubt in?</em> Might the idealist not say that for all we know, this (whatever it is) <em>is</em> a situation in which I can legitimately doubt. This is what prompts Wittgenstein to (pretend to) wonder if there is some <em>rule</em> that we can follow to make sure we never misuse words in the way that philosophers sometimes do. But there is <em>no end</em> to the possibility of error. We must accept these certainties, which cannot be guaranteed either with proofs or with rules.</p>

            <blockquote class="w">
                <p class="w">27. If, however, one wanted to give something like a rule here, then it would contain the expression &#8220;in normal circumstances&#8221;. And we recognize normal circumstances but cannot precisely describe them. At most, we can describe a range of abnormal ones.</p>
            </blockquote>

            <p>There is <em>something like</em> a rule, which is probably presupposed, governing our use of statements such as &#8220;here is a hand&#8220;—it is that we can say it <em>in normal circumstances</em>. But such circumstances are not so defined as to allow us to set down a rule.</p>

            <blockquote class="w">
                <p class="w">28. What is &#8220;learning a rule&#8221;?— <em>This</em>. What is &#8220;making a mistake in applying it&#8221;?— <em>This</em>. And what is pointed to here is something indeterminate.</p>
            </blockquote>

            <p>We can be assured of being right, or of being able to doubt, and so on, through our engagement in language-games, our partaking of situations. That is where the rules apply and that is how we learn them—but they cannot be pinned down or set in stone.</p>

            <blockquote class="w">
                <p class="w">29. Practice in the use of the rule also shews what is a mistake in its employment.</p>
            </blockquote>

            <p>We can see this is the case from what Wittgenstein has been saying up till now, about how we use the word &#8220;know&#8221;, and how its use by sceptics, idealists, and, in response to them by Moore, is mistaken.</p>

            <p>But it seems plain to me that to identify mistakes it is <em>not</em> enough just to be practiced in language-games. This is exactly the situation that requires dissection at the hands of Wittgenstein (and Ryle, Austin and so on). He probably means that our <em>use</em> of words <em>should</em> alert us to mistakes, or that it has the potential to, if only we just pay more attention.</p>

            <p>There are two solutions here: a) ban philosophy, or b) forget the big questions and use philosophical techniques to identify mistakes. Neither is satisfactory to me, because I feel there is more to human life, that can be examined <em>philosophically,</em> than Wittgenstein&#8217;s austerity and focus on language can accommodate—but that&#8217;s another story (and that way lies Heidegger).</p>

            <blockquote class="w">
                <p class="w">30. When someone has made sure of something, he says: &#8220;Yes, the calculation is right&#8221;, but he did not infer that from his condition of certainty. One does not infer how things are from one&#8217;s own certainty.</p>
            </blockquote>

            <blockquote class="w">
                <p class="w">Certainty is <em>as it were</em> a tone of voice in which one declares how things are, but one does not infer from the tone of voice that one is justified.</p>
            </blockquote>

            <p>I think this is vitally important. &#8220;Yes, the calculation is right&#8221; is not inferred from my certainty: it <em>is</em> my certainty. There is no inference, hence there is no way to argue that I am not <em>really</em> certain. It is a mental state (&sect; 6). This suggests that when, locked away in his room, Descartes found that he could doubt the existence of his body, this was a mistake: what he had arrived at was not authentic doubt at all, because if certainty is not inferred then it cannot be driven out by argument. He claimed to doubt things that he was actually unshakeably certain of. Descartes was <em>imagining,</em> rather than properly doubting.</p>

            <p>We might fruitfully speculate about how Descartes got himself in this pickle. Hubert Dreyfus in his lectures says that if you lock yourself away from the world then of course you might begin to doubt its existence. This is perhaps meant only half-seriously, but I think the serious half is important. More difficult to disentangle would be the unique intersection of social changes that made scepticism possible, especially how the status of science motivated Descartes&#8217; thoughts. That&#8217;s a big subject that I might cover one day, but certainly not yet. Suffice it to say at this point that I believe a diagnosis of scepticism requires a historical approach that seems to be completely lacking in the efforts of those recent analytic epistemologists who still grapple with this issue. And this, of course, may point to a problem in analytic philosophy in general.</p>

            <blockquote class="w">
                <p class="w">&sect;31. The propositions which one comes back to again and again as if bewitched—these I should like to expunge from philosophical language.</p>
            </blockquote>

            <p>Here he comes close to my first solution given above, to ban philosophy. At least, much of what has passed for philosophy is founded on bad mistakes of the kind we have been looking at. Scepticism and idealism &#8211; indeed, I think, epistemology itself &#8211; should be dropped. The arguments cannot get us anywhere, because the questions they begin with are nonsense.</p>

            <blockquote class="w">
                <p class="w">32.  It&#8217;s not a matter of <em>Moore&#8217;s</em> knowing that there&#8217;s a hand there, but rather we should not understand him if he were to say &#8220;Of course I may be wrong about this.&#8221; We should ask &#8220;What is it like to make such a mistake as that?&#8220;—e.g. what&#8217;s it like to discover that it was a mistake?</p>
            </blockquote>

            <blockquote class="w">
                <p class="w">33. Thus we expunge the sentences that don&#8217;t get us any further.</p>
            </blockquote>

            <blockquote class="w">
                <p class="w">34.  If someone is taught to calculate, is he also taught that he can rely on a calculation of his teacher’s? But these explanations must after all sometime come to an end. Will he also be taught that he can trust his senses &#8211; since he is indeed told in many cases that in such and such a special case you <em>cannot</em> trust them? Rule and exception.</p>
            </blockquote>

            <p>If we cannot think of a way in which Moore can be wrong that <em>here is a hand</em> (in the circumstances), that is what makes it impossible for him to be wrong—or rather it is what supplies the shared indubitable bedrock of those circumstances. It is not his statement &#8220;I know&#8230;&#8221; that does this; it is more <em>social</em> than an expression of certainty or purported guarantee of infallibility. It is unspoken, but is also <em>shown</em> in what we say. In the circumstances, there are rules according to which statements make sense, and some kinds of statements do not. Thus to say &#8220;I know that here is a hand&#8221; is as nonsensical as the statement to which it has been countered: &#8220;There are no external objects&#8221;. This universal doubt is not a <em>proper</em> doubt. A proper doubt is one that makes sense only in particular circumstances—where we know how we could come to make <em>sure</em> of the proposition in question.</p>

            <p>But there are exceptions to the rules: we&#8217;ve seen the example of the man with bandaged hands (&sect; 23 etc). And that there are exceptions should not lead us to question the utility of the rule—on the contrary, we can identify mistakes against a background of reliability.</p>

            <p>But the crucial point so far is nicely summarized by Kevin Browne on his blog <a href="http://kyphilosopher.blogspot.com/2010/08/wittgenstein-and-forms-of-life-chapter_10.html">here</a> as follows.</p>

            <blockquote>
                <p>In order to understand Wittgenstein&#8217;s theory of knowledge, we must examine the relationship between knowledge, certainty, and doubt. Knowledge, for Wittgenstein, implies the possibility for going wrong and, thus, presupposes doubt. On the other hand, certainty lies outside the realm of knowledge and is qualitatively different from it. The relationship between these concepts is critical to understanding Wittgenstein&#8217;s approach, because it is through this relationship that we arrive at the end of justification. Beliefs can only be justified so far; beyond this one must act. Therefore, justification does not come to an end in a set of basic beliefs which act as the propositional foundations for our knowledge. Justification comes to an end in human activity.</p>
            </blockquote>

            <p><a href="/notes-on-wittgensteins-on-certainty-part-2/">Next part</a></p>

            <ul>
                <li>
                    Wittgenstein, L., ed. G. E. M. Anscombe, G. H. von Wright,  1969: <em>On Certainty,</em> Harper &amp; Row
                </li>
                <li>
                    Wright, C. 1991: “Scepticism and Dreaming: Imploding the Demon”, Mind, vol. 100, pp87-116      
                </li>
                <li>
                <a href="http://kyphilosopher.blogspot.com/">Philosophical Observations</a>
                </li>
            </ul>
        </article>
      </Layout>
    );
  }