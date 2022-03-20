---
layout: post
title: "Focus & Attention"
date: 2021-04-10
description: a story about distraction
---

In our modern world full of distractions or opportunities craving our attention, may it be advertisements, an email/ mobile message, or news articles. There has been a lot of talk about topics like 'deep work' or meditation techniques which should allow us to calm our minds and be more efficient. So, in short, I would say it is safe to assume that in our fast-moving world, the topic of undivided attention towards a goal is probably one of the most important skills to possess.
I would describe the act of funneling your attention on one singular purpose as focus.

## Focus
Generally, I would define focus as concentrating something (e.g., a resource) on a singular objective. What becomes focused and on what objective it is then focused depends on the context. Similar to tho this, it is defined in the [oxford dictionary](https://www.lexico.com/definition/focus)
> 1 The centre of interest or activity. 
> 
> with the example: _'this generation has made the environment a focus of attention'_

### But why should anyone bother bundling together resources?
The general idea behind this approach is that when a resource is focused on an objective, it often allows achieving things that would not be possible if the resource were undirected.
An example of this would be the use of a lens to direct/focus together light to a 'focal point' and thereby heating a specific small region of a sheet of paper until it is set ablaze. 

And when we humans want to achieve something, may it be writing an essay, solving a math equation, building a plane, or cooking something. It is generally a good idea to focus our most valuable resource, attention, on the task at hand.
But how this is to be done is not always clear because often, there are a lot of variables at play on which you could focus your attention, especially when tackling bigger projects. This is what I would argue a teacher/mentor is for, by setting your focus on a specific task.

At this point, we get to the actual event, which led to me writing this essay. Which is about the importance of focus and that even when you take your time
You may skip this part if you wish.

## The Story 
I was working on my master thesis on a typical saturday evening (during 'Corona Times').
I had the goal of implementing some new features into my codebase, which would allow me to run new experiments. This was when an uneasy feeling began to creep up on me because I could not find some crucial lines of code (we will call A). These needed to be executed before my experimental validation. While I was then trying to implement my new features, my typing speed steadily decreased until I became extremely worried whether my old experiments were actually valid. So I went into my codebase to check that I actually implemented A; a few minutes later, I realized that I did not use code lines A but actually B (similar but maybe not identical according to the documentation). So I tried to calm myself with this knowledge and get back to my implementation. But while doing that, my mind would not let go of the problem of whether code lines A and B would be similar enough and if I had to rerun all of my experiments (which I already used for a paper being reviewed for a conference). So I started to think about how to change my code structurally so that I could verify that both are the same with options for both code lines A and/or B being executed while trying to implement new features building upon my old code. This was when I came to the sudden realization that almost half an hour had passed, and I actually did not get anything done in this time except for thinking myself in a hole which did yield no benefit and that worse, I was in a state of complete mental unrest. Should I now start by implementing something new or check on the old? So I decided to delay my new implementation and instead run a little experiment with code line B being exchanged for A. This took roughly ten minutes but did give a result which I would not have achieved purely by thinking, at least not anywhere near this time.
In the end, luckily, I got the same results with either code line A or B executed - which greatly relieved me - and finished my implementation of new features for future experiments by working late until the evening.

So all in all, this could quite probably be described as a normal working experience for a programmer, but actually, I do not particularly enjoy working until late in the evening. And while I at least gained from doing both - knowing that my old implementation was correct and my new experiment being implemented, I felt tired and stressed afterward. 
Furthermore, the state of mental and emotional unrest is often very taxing in the long run and can lead to general exhaustion.

When I reflected on this, I realized that this stress was mainly caused by two things:
1. The time where I tried to do both tasks at the same time
2. The time when I had to decide which task I needed to be addressed
So apparently, the most stressful part of this experience was my inability to focus on one singular objective leading to the wasted time where I did not make progress concerning both of them.

But why was this time of trying to do both tasks at the same time so mentally stressful?
And this is where we come back to the 'focal point' of this blog entry.


## Focus of Attention 
Every action and interaction requires a certain amount of human attention to be executed. So to effectively solve a task, it is important to focus the right amount of attention on it.
For example, when you have to compute 5x5 the answer should spring right into your mind, but when trying to compute 17x17 you would actually have to do several thinking steps. 
As an divide and conquer algorithm this could be written down as follows:
1. 17 x 10 = 170 -> save
2. 10 x 7 = 70 -> save 
3. recall + execute 170 + 70 = 240 -> save
4. 7 x 7 = 49 -> save
5. recall + execute 240 + 49 = 289 -> done

This results in the brain having to do some heavy lifting, and you may be tempted to reach for pen and paper or your phone. In any case, when you solve this in your head, several thinking steps are required to compute the results that differ from the easy first example. (This example is taken from Thinking, Fast and Slow by Daniel Kahnemann)
Most people have to stop reading and actively solve the equation, which is where the attention shifts from reading to computing. So one can safely assume that the processing of information that is closely linked to your attention has some rate. 
In the cognitive development field of psychology, the `information processing theory' uses the measure 'information processing rate' in bits/sec to describe how much information the brain can process and set into action at any point in time.
And there is a nice sum up about it in the [encyclopedia britannica](https://www.britannica.com/science/information-theory/Physiology)
>Interestingly enough, when researchers sought to measure information processing capabilities during 'intelligent' or 'conscious' activities, such as reading or piano playing, they came up with a maximum capacity of fewer than 50 bits per second. For example, a typical reading rate of 300 words per minute works out to about 5 words per second. Assuming an average of 5 characters per word and roughly 2 bits per character yields the aforementioned rate of 50 bits per second. 

According to some experiments a human in this field a hamun is roughly able to process 30-60 bits/sec \[[1](https://arxiv.org/pdf/0908.3170.pdf)\]\[[2](https://link.springer.com/article/10.1007/BF00867333)\]
In short, I would sum this up as follows: one can only do so many thinking steps while also only retaining a certain amount of information on instant access at any given point in time.
Furthermore, it also requires effort to keep your attention focused on the task at hand (e.g., computing and saving multiple results) without trailing off onto different endeavors, which now that your brain actually has to work, seem all the more interesting. (Roy F. Baumeister Willpower)

Going back to actually achieving goals, when you do any task, and you now worry about what you should do or second guess yourself at every step along the way, you are effectively stealing your mental capacity away from your actual task! 
Focussing your attention on something complex for an extended period of time is already strenuous enough as it is, without second-guessing the logic or correctness of your approach.
In almost all cases, this hinders your progress and sometimes even dooming your endeavor to fail. 
So, in short, it is of paramount importance to focus your attention on very specific areas to allow the focused effect to help you achieve your goals and execute your plans!

But now you may say wait! What about people who are able to code efficiently while testing for bugs or are able to play the piano (with both hands) while holding a conversation. 
To this, I can only refer to my next blog post, which is going to be about how to make better use of your attention by focusing it on abstract models and automation.

## EndNote
This is not saying that checking the correctness of whatever you do or thinking about different things to do is a waste of time. These are actually also crucial for succeeding in any given task, but they are best used when you are not going into action but on points in time/project stages when it is useful.