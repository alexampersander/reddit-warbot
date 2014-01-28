reddit-warbot
=============

I'm creating a bot to help me fight the damned Orangereds. For the Periwinkle Kingdom!

Dependencies:
* rereddit
* prompt

Make sure to use
```
npm install prompt
```
and
```
npm install rereddit
```

---

This is want I want the bot to do (after it has been set up with [/r/eternalbattleground](http://www.reddit.com/r/eternalbattleground)):

1. Add comment to latest [/r/eternalbattleground](http://www.reddit.com/r/eternalbattleground) post that says "lead all to /r/eternalbattleground"
2. After ~3 minutes, check for messages from [/u/valkyribot](http://www.reddit.com/u/valkyribot)
3. Once message received, wait until the time [/u/valkyribot](http://www.reddit.com/u/valkyribot) sent (convert the GMT time to local time)
4. When it is time, attack with all troops
5. Wait until skirmish ends (convert the GMT time to local time)
6. Repeat