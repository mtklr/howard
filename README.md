A [Quartz Composer](https://en.wikipedia.org/wiki/Quartz_Composer) [screensaver](https://mtklr.github.com/images/howard-crazywall.png) based on _AsteroidsQC_, by [Gary C. Martin](http://osx.garycmartin.com).

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

