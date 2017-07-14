# Howard Chicken - The Screensaver
[Howard Chicken](http://5by5.tv/b2w/126) flaps around uttering titles, topics, and a bespoke, artisanal, farm-to-monitor, curated selection of phrases from the venerable [Back to Work](http://5by5.tv/b2w) podcast.

![howard](https://mtklr.github.com/images/howard.png)

Based on [AsteroidsQC](http://garycmartin.com/osx/AsteroidsQC.qtz.zip) by [Gary C. Martin](http://osx.garycmartin.com).

## Install
Copy _Howard.qtz_ to _~/Library/Screen Savers_, or _/Library/Screen Savers_ for all users.

* In 10.11+ the "Screen Saver Options..." preferences sheet doesn't work.

## Update
```console
curl -s -o ~/Library/Screen\ Savers/Howard.qtz 'https://raw.githubusercontent.com/mtklr/howard/master/Howard.qtz'
```

Or `crontab -e`:

```shell
# no mail
MAILTO=""
# update every Wednesday at 1 AM
0 1 * * WED curl -s -o ~/Library/Screen\ Savers/Howard.qtz 'https://raw.githubusercontent.com/mtklr/howard/master/Howard.qtz'
```

## Way of the Future?
```console
brew install fortune
fortune howard
```

![fortune](https://mtklr.github.com/images/howard-fortune.png)

## See also
[howard-bot](https://github.com/shoesandsocks/howard-bot)
