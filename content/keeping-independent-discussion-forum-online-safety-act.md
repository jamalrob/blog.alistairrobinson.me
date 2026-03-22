---
title: 'Keeping an Independent Discussion Forum Alive Under the UK Online Safety Act'
description: 'How I Migrated a 10-Year-Old Philosophy Forum to Stay Compliant'
date: '2026-03-16'
tags: administration
image: false
draft: false
---
I'm the administrator of The Philosophy Forum (TPF), online since 2015 and dedicated to long-form philosophical discussions. Compared to a site like Reddit, it's a small community, but the members are active and it has its own distinct culture, built up over years. 

In 2023, the UK Parliament passed the Online Safety Act (OSA), which applies to most online services with user-generated content accessible to and used by people in the UK. What's important to note is that it doesn't just apply to operators *based in* the the UK: the Act applies to any service, no matter where it's based, if it has a significant number of UK users. Non-compliance carries large financial penalties, and in some circumstances personal liability for the individuals who run the service.

In the world of independent forums, reactions varied widely. A few sites completely shut down when their administrators decided that the regulatory burden was too onerous and the personal financial risk too great to bear. 

The most prominent casualty was **London Fixed Gear and Single-Speed (LFGSS)**, a cycling community that [shut down the day before the Act came into force](https://www.techdirt.com/2024/12/20/death-of-a-forum-how-the-uks-online-safety-act-is-killing-communities/). The admin of the site decided that compliance was not practicable for a site run by a single individual without staff or resources.

The decision attracted a great deal of attention and sympathy, but it's worth noting now, in 2026, that [Ofcom has so far not actually pursued small community forums](https://www.lawgazette.co.uk/practice-points/ofcom-raises-the-stakes/5126101.article). So far its targets have been file-sharing services distributing illegal material, pornography sites failing to implement age checks, a suicide forum linked to deaths in the UK, and 4chan, which was fined not for harmful content as such, but for refusing to respond to Ofcom's information requests.

Shutting down TPF was never on the cards. Although TPF started in 2015, it inherited much of the core membership from an earlier forum that had been going since around 2002 (`philosophyforums.com`, no longer online). I had a certain responsibility. I did briefly consider relocating to Discord or some other platform that, so I vaguely hoped, might take care of at least some of the compliance, and thereby protect me from personal liability. But ultimately I decided to wait and to think calmly about what to do (online safety wasn't something I was inclined to dismiss).

Eventually I treated the Act as a chance to do something I'd been meaning to do for some time anyway: migrate TPF to a more capable platform, update our governance, and put the forum on a footing that was clearly defensible from a legal point of view. This article describes my approach and what exactly I did. Importantly, I didn't do it as a lawyer or compliance professional, but just as a forum administrator trying to act reasonably and in good faith, thus keeping my community alive.

I hope the information here is useful to other independent forum operators facing the same situation.

## 1. The Problem Faced by Independent Forums

The OSA primarily targets the big platforms: X, Facebook, YouTube, etc. But its scope isn't limited to them. Any service hosting user-generated content with links to the UK (which includes having a significant UK user base) has a legal duty to comply.

Enforcement is carried out by Ofcom, the UK communications regulator. It establishes codes of practice, investigates non-compliance, and imposes fines. For the smaller services, while I think it's important to realize that the immediate enforcement risk is lower, the legal obligations do still exist.

Small community admins should concentrate on the following three areas:

1. **Liability for illegal content:** the Act requires services to have systems for detecting and removing certain kinds of illegal material, including content related to child sexual abuse and terrorism.

2. **Child protection:** a large part of the thinking behind the Act is that services have a duty to reduce risks to children, if children use or are likely to use those services.

3. **Moderation:** services are required to have functioning processes for handling user reports and acting on harmful content.

For a small forum administrator running a community on unwieldy software, without a legal team, the obligations can seem overwhelming. This feeling isn't irrational, because the Act is genuinely complex and Ofcom's guidance is not always clear or easy to interpret. It's understandable that some operators decided the safest course was to just stop.

In the case of relatively small websites, the uncertainty created by the Act's broad language, lacking specificity where needed, drove people to overestimate what was actually required. That's a legitimate criticism of the legislation, but the upshot is that for a small, well-intentioned forum, the practical risk was always lower than many feared in the beginning.

The Act isn't designed to make it impossible to run online communities by requiring them all to employ lawyers. It's designed to make it impossible to run one badly, that is, without any regard for the risks the platform poses to users.

## 2. Why I Decided to Migrate the Forum

TPF had been running on hosted forum software that served us quite well for years. But by the time OSA compliance became an issue, the software's limitations were becoming clear.

It had minimally functional moderation tools, but it wasn't transparent, and there was no usable audit trail of moderator actions, no standard workflow for handling reports, and no way to produce documentation detailing how the forum was governed (the kind of documentation that might matter if Ofcom ever asked questions). And, significant for compliance, the permissions system was rudimentary and coarse-grained.

On top of that, it wasn't being actively developed. Although it was functioning smoothly, it was essentially in maintenance mode, its future uncertain. The community had outgrown it.

We chose to move to Discourse, an actively maintained open-source discussion platform used by many organizations and companies, both large and small, and maintained and updated by hundreds of developers worldwide. It has a mature set of moderation features, and is **auditable**: not a concept I had ever thought about in connection with forum software, but one that turns out to be vital when trying to demonstrate that you're operating responsibly.

Although the migration itself was quite technically involved, even without a full migration of the old site's content, the compliance and governance work was in some ways the most important element.

## 3. How Compliance Looks in Practice

The OSA is built around the concept of what a service *reasonably* needs to have, in terms of systems and processes. In other words, it's not demanding perfection. What it specifically asks of a small, non-commercial forum---which isn't in the highest risk categories, doesn't host adult content, and isn't targeted at children---is more modest than headlines might suggest.

For a forum like TPF, compliance basically means:

- **Terms of Service & Acceptable Use Policy:**  
This should set out what content is and is not permitted, including explicit prohibitions on illegal content and other content harmful to children.
- **A minimum age policy:**  
We went with a 13+ minimum, which fits with GDPR's age of digital consent in the UK and with the Act's framework for services likely to be accessed by children.
- **A flagging mechanism:**  
Users should be able to report content that is illegal, harmful, or breaks the rules, and staff members should respond to these reports.
- **Moderation procedures:**  
The procedures for moderation should be documented, including what action is taken and why, including actions taken on flags, posts and topics, and user accounts.
- **A commitment to remove illegal content:**  
Not a guarantee that no illegal content will ever appear, but a meaningful commitment to remove it promptly if it does appear.
- **Transparency with users:**  
The way moderation decisions are made, including a record or explanation when action is taken, should be open and visible to the forum's users.

This is not nothing, but it's achievable. A forum like TPF had a head-start, since it already had staff and members who were active and who valued the community. The task was one of formalizing and standardizing what we had been trying to do anyway.

## 4. How Discourse Helps with Compliance

Moving to Discourse didn't magically make TPF compliant, but it gave us the tools to make it happen:

### Reporting and flagging

Discourse's flagging system allows any user to report a post for a range of reasons: spam, inappropriate, off-topic, and any other custom reasons you want to add (we've added several on TPF). Reports go to a queue where moderators can review them, approve or reject the flag, leave comments, and take various actions, leaving a record of what was decided.

### Moderation workflow & logging

Posts can be edited, hidden, deleted, moved, split off into new topics, or merged with other topics---and each of these actions is logged. Discourse maintains an audit trail across several areas that between them record who did what, to which post or user, and when.

### Trust level system

New users have restricted access at first, but as they continue to participate they're granted access to more features and areas. This means the forum is not immediately fully open to anyone who creates an account. For example, new users cannot send private messages until they've reached a basic level of engagement.

### Private message and chat moderation

A major advance over the previous platform is that moderators can review private messages and direct chat messages that have been flagged. This matters both for the Act's requirements concerning illegal content, which apply to private as well as public communications, and also for preventing harassment, threats, and other harmful behaviour.

### User management tools

Users can be warned, silenced, suspended, anonymized, or deleted; their trust levels can be set manually; and they can be added and removed from groups with their own custom permissions and trust levels. This is relevant not only for moderation but also for things like data protection compliance and handling cases where an under-age user is identified.

## 5. Additional Governance Measures

But the Act isn't just about software functionality---it's about administrative systems and processes. So in the spirit of good governance, I took a number of other measures when setting up the new site.

### Updated community guidelines

TPF's guidelines were rewritten, incorporating the legacy rules within a more comprehensive document that clearly sets out the forum's values, the kinds of content that are not permitted, and the moderation procedures that apply.

### Moderation handbook

I published an internal document for moderators setting out the procedures for handling different categories of flag, and the principles that should guide moderation decisions. This isn't a public-facing document, but it does exist, and it is actually used.

### Child safety risk assessment

The Act places special importance on a proactive assessment of risks to children. I wrote an assessment document for TPF that identifies the relevant risk factors and sets out the mitigations we have in place. It concludes that TPF is at relatively low risk in this area: TPF's content is mainly text-based, academic in nature, doesn't include adult content, and the existing moderation culture is strong. The important thing is that the assessment exists and that it's honest.

## 6. The Technical Migration

<aside class="callout">
  <p>NOTE: Non-technical readers can skip this section</p>
</aside>

Although the migration details are not all directly relevant to legal compliance, I'll summarize the process here for the sake of completion.

### I. Leadership

The very first step was to warn the membership that a migration was going to happen. I did this a few months ahead, and then, once I'd got the new site ready, I published the temporary URL and opened it up to users. I opted to ask people to sign up rather than transferring accounts, for two reasons: it meant that every member would have to confirm their agreement with the new ToS at the point of signing up; and it avoided the considerable technical complexity of automating an account migration from a platform with no existing Discourse importer script.

### II. Data export

When most of the active members had joined the new site, I closed the old one and got an export of the full post history and user database from out of the old system, which I then transformed into a static online archive. This required custom Python programming and web design, but it was manageable.

I chose this route partly for legal compliance---I felt that a fresh start was best---and also because, as mentioned above, our old platform's export format was not supported by any available Discourse importer scripts. Rolling my own would have meant:

1. Parsing and cleaning the export from the old platform, dispersed across hundreds of JSON files, into something workable
2. Mapping the old data model to Discourse's schema using Ruby
3. Handling user accounts: generating temporary passwords or forcing password resets, preserving usernames where possible, dealing with conflicts---requiring direct interaction with Discourse's PostgreSQL database
4. Preserving post ownership and authorship correctly
5. Conversion of special markup to Discourse's Markdown---BBCode conversion is lossy and often requires extensive custom regex handling
6. Handling embedded images and file attachments: re-uploading them to Discourse's storage via the API or directly into the uploads directory
7. Reconstructing thread structure: parent/child reply relationships, topic ordering
8. Preserving timestamps accurately so the post history looks correct
9. Handling private messages
10. Setting up a local Docker installation of Discourse to test the import before running it against the live site---then dealing with whatever broke

### III. DNS and domain switch

The DNS switch involved pointing `thephilosophyforum.com` at the Discourse servers. I managed this through Cloudflare, which makes this kind of thing fairly easy.

As it turned out, it wasn't quite as smooth as it should have been, since using an apex domain, i.e., without the `www`, as I always had done before, wasn't compatible with a managed Discourse instance. On top of that, domains and subdomains proxied through Cloudflare seem to be a bit troublesome in Discourse. But I got it working in the end, and most users thought the transfer went very smoothly.

### IV. Redirecting old URLs

The old site, the new Discourse site, and the archive all used different URL structures. I used a Cloudflare Worker---a piece of Javascript code that runs on Cloudflare and intercepts and modifies requests before they reach Discourse---to implement redirects so that the existing links to TPF threads from search engines and other websites wouldn't break. The worker maps the old URL patterns to their equivalents in the archive or in Discourse (the archive for existing discussions; Discourse for generic pages, e.g., categories, guidelines, about, etc.). This is still running, protecting TPF's search engine rankings and link integrity.

## 7. Lessons for Other Forum Administrators

I think my experience can benefit others. These are the main points:

### Don't panic

For forums the size of TPF, the OSA is not the existential threat implied by the angry reactions you might see in Reddit discussions. The requirements exist, but they're mainly about having documented, operational processes, things that a well-run forum should have anyway.

But *don't panic* doesn't mean *do nothing*. The answer isn't simply to ignore the OSA and hope Ofcom doesn't notice you. This is common advice, but I would urge against taking it. Operating without the requisite moderation tools, without usable action logs, and without documented processes, leaves you exposed, particularly if you're based in the UK.

### The platform matters

If you're still running on legacy software that doesn't give you audit trails or proper reporting mechanisms, you're making compliance much harder than it has to be. Modern forum platforms (Discourse is the obvious example, but there are others) are built in ways that make responsible operation easier.

### Governance is not bureaucracy

Writing down your moderation procedures, drafting a child safety risk assessment, keeping records of how you handle reports---these are probably not why anyone signed up to be a forum admin, but they're not hard to get right, and require the primary effort only once. And they're just good practice. Forums that have clear, documented processes are better forums, whether or not they have those processes in place specifically to comply with the law. The OSA pushed me to formalize things that I should probably have formalized years ago. And it feels good to be on solid ground. TPF is now a stronger, more durable community.

### Get advice if you need it

Nothing in this post is legal advice. If you're uncertain about your obligations under the Act, you should talk to someone who can give you proper guidance. Probably the first step for small services would be to have a look at [Ofcom's own guidance](https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/helping-small-services-navigate-the-online-safety-act). 

## 8. Conclusion

In itself the OSA is not unreasonable as a piece of legislation; certainly, the problems it's trying to address are real. The trouble is, it's come at a difficult moment for independent forums, which were already being squeezed out by the social media giants.

TPF managed to get through the transition successfully. The forum is running and still very active, it's well-moderated (though I say so myself), its governance now reflects the new legal environment, and it continues to host the kind of philosophical conversations it was built for.

Independent communities matter more than ever, at a time when online discourse consolidates around a shrinking number of platforms. The conversations that happen in small, focused forums where people know each other, and where disagreement is possible without turning into flame-wars---these are different in kind from what happens on the large platforms, and they're worth preserving.
  
## Links

- [Online Safety Act 2023](https://www.legislation.gov.uk/ukpga/2023/50)
- [The Philosophy Forum](https://www.thephilosophyforum.com)
- [TPF Terms of Service](https://www.thephilosophyforum.com/tos)
- [TPF Guidelines](https://www.thephilosophyforum.com/guidelines)
- [TPF Children's Risk Assessment](/tpf-childrens-risk-assessment)
- [TPF Archive](https://archive.thephilosophyforum.com)
- [Ofcom: Helping small services navigate the Online Safety Act](https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/helping-small-services-navigate-the-online-safety-act)
- [Discourse](https://www.discourse.org)
