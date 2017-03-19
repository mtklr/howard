# Howard Chicken - The Screensaver
[Howard Chicken](http://5by5.tv/b2w/126) flaps around the screen uttering titles, topics, and a bespoke, artisanal, farm-to-monitor, curated selection of phrases from the venerable [Back to Work](http://5by5.tv/b2w) podcast.

![howard](https://mtklr.github.com/images/howard.png)

Based on [AsteroidsQC](http://garycmartin.com/osx/AsteroidsQC.qtz.zip) by [Gary C. Martin](http://osx.garycmartin.com).

## Install
Copy _Howard.qtz_ to _~/Library/Screen Savers_, or _/Library/Screen Savers_ for all users.

* In 10.11+ the "Screen Saver Options..." preferences sheet is blank (Apple isn't interested in figuring out why).

## Update
```
# clone
git clone https://github.com/mtklr/howard
# link
ln -s /path/to/howard/Howard.qtz ~/Library/Screen\ Savers/Howard.qtz
# update
cd /path/to/howard && git pull
```

Or just:

```
curl -s -o ~/Library/Screen\ Savers/Howard.qtz 'https://raw.githubusercontent.com/mtklr/howard/master/Howard.qtz'
```

"Erm. So..."

OK, `crontab -e`:

```
# no mail
MAILTO=""
# update every Wednesday at 1 AM
0 1 * * WED curl -s -o ~/Library/Screen\ Savers/Howard.qtz 'https://raw.githubusercontent.com/mtklr/howard/master/Howard.qtz'
```

## Desktop Chicken
Select Howard as the screen saver in System Preferences, then:

```
/System/Library/Frameworks/ScreenSaver.framework/Resources/ScreenSaverEngine.app/Contents/MacOS/ScreenSaverEngine -background &
```

Enjoy increased productivity and wisdom.

## Way of the Future?
```
brew install fortune
fortune howard
```

![fortune](https://mtklr.github.com/images/howard-fortune.png)
