# Howard Chicken: The Screensaver.

[Howard Chicken](http://5by5.tv/b2w/126) flaps around your screen uttering titles, topics and catchphrases  
from the venerable [Back to Work](http://5by5.tv/b2w) podcast.

![howard](http://mtklr.github.com/images/howard.png)

Based on _AsteroidsQC_ by [Gary C. Martin](http://osx.garycmartin.com).

## Install

Copy `Howard.qtz` to `~/Library/Screen Savers`, or `/Library/Screen Savers` for all users. It should be listed in "System Preferences - Desktop & Screen Saver - Screen Saver."

* Works with OS X 10.11. However...
* In 10.11 the "Screen Saver Options...." sheet is blank, and Apple isn't interested in figuring out why.
* Should be fine with older versions, though ymmv.

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

    curl -s -o ~/Library/Screen\ Savers/Howard.qtz 'https://raw.githubusercontent.com/mtklr/howard/master/Howard.qtz'

"Erm. So..."

Okay, Vän Höët, stick this in your _crontab_ (`crontab -e`):

```
# no mail
MAILTO=""
# update every Wednesday at 1 AM
0 1 * * WED curl -s -o ~/Library/Screen\ Savers/Howard.qtz 'https://raw.githubusercontent.com/mtklr/howard/master/Howard.qtz'
```

## Desktop Chicken

Make it the current screen saver.

    /System/Library/Frameworks/ScreenSaver.framework/Resources/ScreenSaverEngine.app/Contents/MacOS/ScreenSaverEngine -background &
    
Enjoy increased productivity and wisdom.

--
Ignore the [spaghetti behind the curtain](http://mtklr.github.com/images/howard-crazywall.png).