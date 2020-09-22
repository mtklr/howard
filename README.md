# Howard Chicken

An artisanal, bespoke, curated, farm-to-screen collection of titles, topics, and phrases from the venerable [Back to Work](http://5by5.tv/b2w) podcast (see [episode 126](http://5by5.tv/b2w/126)). (No affiliation with the show, just a fan.)

## Way of the Future

[fortune](https://en.wikipedia.org/wiki/Fortune_%28Unix%29) cookie:

```console
curl -O 'https://raw.githubusercontent.com/mtklr/howard/master/howard{,.dat}'

brew install fortune

fortune /path/to/howard/

# fancy

brew install cowsay

alias howsay='p=/path/to/howard; fortune "$p" | cowsay -f "$p"/howard.cow'

# outspoken

alias howsayv='p=/path/to/howard; h="$(fortune "$p")"; cowsay -f "$p"/howard.cow "$h" && say -v Daniel "$h"'
```

## Slack, etc.

[chat-with-howard](https://github.com/shoesandsocks/chat-with-howard)

[howard-mark-3](https://github.com/shoesandsocks/howard-mark-2)

[hc-podcast](https://github.com/shoesandsocks/hc-podcast)
