# [Howard Chicken](https://www.howardchicken.com)

An artisanal, bespoke, curated, farm-to-screen collection of titles, topics, and phrases from the venerable [Back to Work](http://5by5.tv/b2w) podcast (see [episode 126](http://5by5.tv/b2w/126)). (No affiliation with the show, just a fan.)

![howard](https://mtklr.github.com/images/howard-web.png)

## Way of the Future

[fortune](https://en.wikipedia.org/wiki/Fortune_%28Unix%29) cookie:

```console
curl -O 'https://raw.githubusercontent.com/mtklr/howard/master/howard{,.dat}'

brew install fortune

fortune /path/to/howard/

brew install cowsay

alias howsay='fortune /path/to/howard/ | cowsay -f /path/to/howard/howard.cow'

# or even

alias howsay='h="$(fortune /path/to/howard/)"; \
cowsay -f /path/to/howard/howard.cow "$h" && say -v Daniel "$h"'

howsay
```

![fortune](https://mtklr.github.com/images/howard-fortune.png)

## Slack, etc.

[howard-bot](https://github.com/shoesandsocks/howard-bot)

[howard-mark-2](https://github.com/shoesandsocks/howard-mark-2)

[chat-with-howard](https://github.com/shoesandsocks/chat-with-howard)
