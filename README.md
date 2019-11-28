# [Howard Chicken](https://www.howardchicken.com)

An artisanal, bespoke, curated, farm-to-screen collection of titles, topics, and phrases from the venerable [Back to Work](http://5by5.tv/b2w) podcast (see [episode 126](http://5by5.tv/b2w/126)). (No affiliation with the show, just a fan.)

![howard](https://mtklr.github.com/images/howard-web.png)

## Way of the Future

[fortune](https://en.wikipedia.org/wiki/Fortune_%28Unix%29) cookie:

```console
curl -O 'https://raw.githubusercontent.com/mtklr/howard/master/howard{,.dat}'
brew install fortune
fortune howard
```

![fortune](https://mtklr.github.com/images/howard-fortune.png)

## Slack

See [howard-bot](https://github.com/shoesandsocks/howard-bot)

***

## Origin

It began as a [Quartz Composer](https://en.wikipedia.org/wiki/Quartz_Composer) [screensaver](https://mtklr.github.com/images/howard-crazywall.png) based on _AsteroidsQC_, by [Gary C. Martin](http://osx.garycmartin.com).

![howard screensaver](https://mtklr.github.com/images/howard.png)

### Install (macOS < 10.14)

Copy _Howard.qtz_ to _~/Library/Screen Savers_, or _/Library/Screen Savers_ for all users.

* In 10.11+ the "Screen Saver Options..." preferences sheet doesn't work.

### Update

```console
curl -o ~/Library/Screen\ Savers/Howard.qtz 'https://raw.githubusercontent.com/mtklr/howard/master/Howard.qtz'
```

Or `crontab -e`:

```shell
# no mail
MAILTO=""
# update every Wednesday at 1 AM
0 1 * * WED curl -s -o ~/Library/Screen\ Savers/Howard.qtz 'https://raw.githubusercontent.com/mtklr/howard/master/Howard.qtz'
```

