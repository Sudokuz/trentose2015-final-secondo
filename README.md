# sprint2
The changes in this sprint are minimal. We essentially added two new requirements to improve the 
detection of the flirting phrases:

1- We added a new attribute to the pattern (see *data.js*).

```
The new *support* attribute works has the opposite effect of the neutraliser. The "word" is only a match
if we also find the "support" to the right. Look for example at these phrases:

Phrase 1: I'm seeing the sky

Phrase 2: I'm seeing someone


{
  word : "seeing",
  score : -1,
  neutraliser : null,
  support : "someone"
}

*Phrase 1* will score 0, because "seeing" is present, but the support "someone" is not.

*Phrase 1* will score -1, because "seeing" is present, and also the support "someone" on the right.


NOTE: For simplicity, a word can only have either a support or a neutraliser, never both. 

```

2- We should explicitly show in the interface when there is a flirting phrase. The criteria is simple:
- If the score is greater than 0, then we consider the phrase as "flirty".
- If it's 0, then is "neutral"
- if its less than 0, then as "friendly".


