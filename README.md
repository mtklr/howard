# Howard Chicken - The Screensaver
[Howard Chicken](http://5by5.tv/b2w/126) flaps around uttering an artisanal, bespoke, curated, farm-to-screen selection of titles, topics, and phrases from the venerable [Back to Work](http://5by5.tv/b2w) podcast.

(No affiliation with the show, just a fan.)

![howard](https://mtklr.github.com/images/howard.png)

Based on [AsteroidsQC](http://garycmartin.com/osx/AsteroidsQC.qtz.zip) by [Gary C. Martin](http://osx.garycmartin.com).

* macOS 10.14 (Mojave) no longer supports Quartz Composer screensavers, so... no more screensaver updates. The fortunes and site will still be updated.

## Install (macOS < 10.14)
Copy _Howard.qtz_ to _~/Library/Screen Savers_, or _/Library/Screen Savers_ for all users.

* In 10.11+ the "Screen Saver Options..." preferences sheet doesn't work.

## Update
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

## Way of the Future?
```console
curl -O 'https://raw.githubusercontent.com/mtklr/howard/master/howard{,.dat}'
brew install fortune
fortune howard
```

![fortune](https://mtklr.github.com/images/howard-fortune.png)

## See also
[howard-bot](https://github.com/shoesandsocks/howard-bot)
