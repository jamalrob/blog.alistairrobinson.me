---
title: 'Keeping an Independent Discussion Forum Alive Under the UK Online Safety Act'
description: 'How I Migrated a 10-Year-Old Philosophy Forum to Stay Compliant'
date: '2026-03-16'
tags: administration
image: false
draft: false
---
I'm the administrator of The Philosophy Forum (TPF), online since 2015 and dedicated to long-form philosophical discussions. Compared to a site like Reddit, it's a small community, but the members are active and it has its own distinct culture, built up over years. 

In 2023, the UK Parliament passed the Online Safety Act. The Act required even small, independent forum operators to take action---and not only in the UK: the Act applies to any service, no matter where it is based, if it has a significant number of UK users.

In the world of independent forums, not everyone kept a level head. A number of long-running communities shut down, their administrators deciding that the regulatory burden was too onerous, and the legal and financial risk to them personally too great, to bear. Even among the staff at TPF, some viewed the new law as a serious threat to their personal livelihood. 

Shutting down the community was never on the cards. Although TPF started in 2015, it inherited much of the core membership from an earlier forum that had been going since around 2002 (`forums.philosophyforums.com`, no longer online). I had a certain responsibility. I did briefly consider relocating to Discord or some other platform that, so I vaguely hoped, might take care of at least some of the compliance, and thereby protect me from personal liability. But ultimately I decided to wait and to think calmly about what to do (it's not like I didn't want to take online safety seriously).

Eventually I treated the Act as a chance to do something I'd been meaning to do for some time anyway: migrate TPF to a more capable platform, update our governance, and put the forum on a footing that was clearly defensible from a legal point of view. This article describes my approach and what exactly I did. Importantly, I didn't do it as a lawyer or compliance professional, but just as a forum administrator trying to act reasonably and in good faith, thus keeping my community alive.

I hope the information here is useful to other independent forum operators facing the same situation.

## The Problem Faced by Independent Forums

The main targets of the Online Safety Act 2023 are the big platforms: X, Facebook, YouTube, etc. But its scope isn't limited to them. Any service hosting user-generated content with links to the UK (which includes having a significant UK user base) has a legal duty to comply.

Enforcement is carried out by Ofcom, the UK communications regulator. It issues codes of practice, investigates non-compliance, and imposes fines. For the smaller services, while I think it's important to realize that the immediate enforcement risk is lower, the legal obligations do still exist.

Small community admins have to focus on specific areas:

1. **Liability for illegal content:** the Act requires services to have systems for detecting and removing certain kinds of illegal material, including content related to child sexual abuse and terrorism.

2. **Child protection:** a large part of the thinking behind the Act is that services have a duty to mitigate risks to children, if children use or are likely to use those services.

3. **Moderation:** services are required to have functioning processes for handling user reports and acting on harmful content.

For a small forum administrator running a community on unwieldy software, without a legal team, the obligations migth seem overwhelming. This feeling isn't irrational, because the Act is genuinely complex and Ofcom's guidance doesn't always resolve the ambiguities and questions that are most relevant to inxdependent forums. It's understandable that some operators decided the safest course was to just stop.

But that decision is usually too hasty. The Act isn't designed to make it impossible to run an online communities by requiring them all to employ lawyers. It's designed to make it impossible to run one negligently, without any regard for the risks the platform poses to users.

## Why I Decided to Migrate the Forum

TPF had been running on a hosted forum platform that served us quite well for years. But by the time OSA compliance became an issue, the software's limitations were becoming clear.

It had minimally functional moderation tools, but it wasn't transparent, and there was no usable audit trail of moderator actions, no standard workflow for handling reports, and no way to produce documentation detailing how the forum was governed (the kind of documentation that might matter if Ofcom ever asked questions). And, significant for compliance, the permissions system was relatively primitive and crude.

On top of that, the software was not being actively developed. It was essentially in maintenance mode, its future was uncertain, and the community had outgrown it.

We chose to move to Discourse, an actively maintained open-source discussion platform used by many organizations and companies, both large and small, and maintained and updated by hundreds of developers worldwide. It has a mature set of moderation features, and is **auditable**: not a concept I had ever thought about in connection with forum software, but one that turns out to be vital when trying to demonstrate that you're operating responsibly.

Although the migration itself was quite technically involved, even without a full migration of the old site's content, the compliance and governance work was in some ways the most important element.

## Compliance in Practice

The Act doesn't demand perfection; it's built around the concept of what a service reasonably needs to have in terms of systems and processes. What it specifically requires of a relatively small, non-commercial forum---one which isn't in the highest risk categories, doesn't host adult content, and isn't targeted at children---is much more modest than some headlines might suggest.

For a forum like TPF, compliance basically means:

- **Terms of Service with Acceptable Use Policy:** this should set out exactly what content is and is not permitted, and should include explicit prohibitions on illegal content and on content harmful to children.
- **A minimum age policy:** we went with a 13+ minimum, which fits with GDPR's age of digital consent in the UK and with the Act's framework for services likely to be accessed by children.
- **A flagging mechanism:** users must be able to report content they believe violates the rules or is otherwise harmful, and those reports must be acted on.
- **Moderation procedures:** documented processes for reviewing reports, taking action on content and accounts, and recording what was done and why.
- **A commitment to remove illegal content:** this isn't a guarantee that no illegal content will ever appear, more of a commitment to remove it promptly when it's identified.
- **Transparency with users** regarding the way moderation decisions are made, including some form of record or explanation when action is taken.

This is not nothing, but it's achievable. A forum like TPF was not starting from zero, since it was staffed by people who cared and had an active and engaged membership. The task was one of formalizing and standardizing what we had been trying to do anyway. It was about making existing practices explicit and documented.

## How Discourse Helps with Compliance

Moving to Discourse didn't magically make TPF compliant. But it gave us the tools to make it happen:

### Reporting and flagging

Discourse has a flagging system that allows any user to report posts for a range of reasons: spam, inappropriate content, off-topic, and any other custom reasons you want to add. Reports go to a queue where moderators can review them, approve or reject the flag, leave comments, and take various actions, leaving a record of what was decided. This is exactly the kind of auditable workflow that the Act requires.

### Moderation workflow & logging

Posts can be edited, hidden, deleted, or moved. Users can be warned, silenced, suspended, or deleted. Each of these actions is logged. Discourse has a detailed staff action log that records every moderation action: who did what, to which post and user, and when. This is maybe the single most useful feature from a compliance perspective. If you're ever asked to demonstrate that you operate responsibly, the staff log is what you point to.

### Trust level system

New users start with limited permissions and gain access to additional features and areas as they demonstrate good-faith participation. This means that the forum is not fully open to anyone who creates an account right away. New accounts cannot, for example, send private messages until they have reached a basic level of engagement.

### Private message and chat moderation

A major advance over the previous platform is that moderators can review private messages and direct chat messages that have been flagged. This matters for the Act's requirements around certain categories of illegal content, which apply to private as well as public communications.

### User management tools

Accounts can be anonymized, merged, or deleted. This is relevant both for data protection compliance and for handling the relatively rare cases where an under-age user is identified.

## Additional Governance Measures

But the Act isn't just about software functionality---it's about systems and processes of governance. So I also took a number of other measures when setting up the new site.

### Updated community guidelines

TPF's guidelines were rewritten, replacing the legacy rules with a document that clearly sets out the forum's values, the kinds of content that are not permitted, and the moderation procedures that apply.

### Moderation handbook

I published an internal document for moderators setting out the procedures for handling different categories of flag, the escalation process for serious matters, and the principles that should guide moderation decisions. This is not a public-facing document, but it does exist and it is used.

### Child safety risk assessment

The Act places particular importance on the proactive assessment of risks to children. I wrote a risk assessment for TPF that identifies the relevant risk factors and sets out the mitigations we have in place. The assessment concludes---reasonably, I think---that TPF is at relatively low risk in this area: the content is academic in nature, there is no adult content, and the existing moderation culture is strong. But the important thing is that the assessment exists and that it's honest.

## The Technical Migration

Much of the detail of the migration isn't directly relevant to legal compliance, so I'll describe the process only briefly.

### 1. Leadership

The very first step was to warn the membership that a migration was going to happen. I did this a few months ahead, and then, once I'd got the new site ready, I published the temporary URL and asked people to sign up. Since I'd written a new terms of service document, and since compliance was a large part of the purpose of the move, I opted to ask people to sign up instead of transferring the accounts, so that they would confirm their agreement with the ToS on the sign-up form---and saving me the headache of trying to automate an account transfer.

### 2. Data export

When most of the active members had joined the new site, I closed the old one and got an export of the full post history and user database from out of the old system, which I then transformed into a static online archive. This required custom Python programming and web design, but it was manageable. I chose this route instead of migrating all the content because our old platform's export format was not supported by any available Discourse importer scripts, and because for legal compliance I felt that a fresh start was best anyway.

### 3. DNS and domain switch

TPF's domain is thephilosophyforum.com. The DNS cutover involved shifting the domain from pointing to the old platform servers to pointing to the new Discourse instance. The switch was managed through Cloudflare, with careful attention to TTLs to minimise the window of inconsistency during the transition.

### 4. Redirecting old URLs

The old site and the Discourse site used different URL structures. Without redirects, all the existing links to TPF threads---from search engines, from other websites, and from members' bookmarks---would break. I implemented a redirect layer using a Cloudflare Worker that maps the old URL patterns to their equivalents in Discourse's scheme. This preserved link integrity and protected the forum's search indexing.

### 5. Legacy archive

The old site was taken offline once the migration was complete, but a searchable static HTML archive of the legacy forum has been preserved. This provides a read-only record of the pre-migration content and ensures that nothing is lost.

## Lessons for Other Forum Administrators

Having been through this process, there are a few things I would want to say to other independent forum operators who are wondering what to do.

### Don't panic

For most small non-commercial forums, the OSA is not the existential threat suggested by some of the coverage and some of the panicked reactions. The requirements are real, but they're largely about having documented, operational processes, things that a well-run forum should have anyway.

### The platform matters

If you're still running on legacy software that doesn't give you audit trails, structured moderation workflows, or proper reporting mechanisms, you're making compliance *much* harder than it has to be. Modern forum platforms---Discourse is the obvious example, but there are others---are built in ways that make responsible operation easier.

### Governance is not bureaucracy

Writing down your moderation procedures, drafting a child safety risk assessment, keeping records of how you handle reports---these are probably not why anyone signed up to be a forum admin, but they're not hard to get right, and require the primary effort only once. And they're just good practice. Forums that have clear, documented processes are better forums, whether or not they have them to comply with the law. The OSA pushed me to formalize things that I should probably have formalized years ago. And it feels good to be on solid ground. The forum now feels like a more serious, less casual enterprise than it did before.

### Get advice if you need it

Nothing in this post is legal advice. If you're uncertain about your obligations under the Act, or if your forum is in a higher-risk category (adult content, services targeted at children, large scale), you should talk to someone who can give you proper guidance. The Internet Association and similar bodies have produced resources for small operators. Ofcom's own guidance is more accessible than it sometimes gets credit for.

## Conclusion

The Online Safety Act represents a shift in the regulatory environment for online communities. I'd argue that it's not in itself unreasonable as a piece of legislation---certainly, the problems it's trying to address are real---but it has landed at a difficult moment for independent forums that were already struggling against the gravitational pull of large social media platforms.

TPF came through the transition successfully. It's running, it's well-moderated, it has a governance structure that reflects the new legal environment, and it continues to host the kind of philosophical conversation it was built for.

I believe that independent communities matter more than ever. The conversations that happen in small, focused forums where people know each other, where a culture is established, and where disagreement is possible without it becoming open warfare---these are different in kind from what happens on the large platforms. They're worth preserving.
  
## Links

- [The Philosophy Forum](https://www.thephilosophyforum.com)
- [TPF Terms of Service](https://www.thephilosophyforum.com/tos)
- [TPF Guidelines](https://www.thephilosophyforum.com/guidelines)
- [TPF Children's Risk Assessment](/tpf-childrens-risk-assessment)
- [Discourse](https://www.discourse.org)
