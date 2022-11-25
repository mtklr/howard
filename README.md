# Howard Chicken

[![Howard Approved](https://img.shields.io/badge/howard%F0%9F%90%94-approved-yellow)](https://www.howardchicken.com)

An artisanal, bespoke, curated, farm-to-screen collection of titles, topics, and phrases from the venerable [Back to Work](http://5by5.tv/b2w) podcast (see [episode 126](http://5by5.tv/b2w/126)). (No affiliation with the show, just a fan.)

## Way of the Future

[fortune](https://en.wikipedia.org/wiki/Fortune_%28Unix%29) cookie:

```console
curl -O 'https://raw.githubusercontent.com/mtklr/howard/master/howard{,.dat}'

# plain
brew install fortune
fortune /path/to/howard/

# fancy
brew install cowsay
alias howsay='p=/path/to/howard; fortune "$p" | cowsay -f "$p"/howard.cow'

# outspoken
alias howsayv='p=/path/to/howard; h="$(fortune "$p")"; cowsay -f "$p"/howard.cow "$h" && say -v Daniel "$h"'

# deluxe
brew install figlet lolcat
alias wowsay='p=/path/to/howard; fortune "$p" | figlet -C utf8 | cowsay -np -f "$p"/howard.cow | lolcat'
```

## Etc.

[howard-bolt](https://github.com/shoesandsocks/howard-bolt)

[hc-podcast](https://github.com/shoesandsocks/hc-podcast)
